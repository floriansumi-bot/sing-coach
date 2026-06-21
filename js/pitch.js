'use strict';

class PitchDetector {
  constructor() {
    this.audioCtx = null;
    this.analyser = null;
    this.source = null;
    this.stream = null;
    this.running = false;
    this.buf = null;
    this._rafId = null;
    this._lastTick = 0;
    this.TICK_MS = 60;

    this.onPitch = null;   // (freq, cents, note, octave, rms) => void
    this.onSilence = null; // (rms) => void
    this.onStop = null;    // () => void
  }

  async start() {
    if (this.running) return;
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
      video: false
    });
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.audioCtx.state === 'suspended') await this.audioCtx.resume();
    this.analyser = this.audioCtx.createAnalyser();
    this.analyser.fftSize = 2048;
    this.analyser.smoothingTimeConstant = 0;
    this.source = this.audioCtx.createMediaStreamSource(this.stream);
    this.source.connect(this.analyser);
    this.buf = new Float32Array(this.analyser.fftSize);
    this.running = true;
    this._loop();
  }

  stop() {
    if (!this.running) return;
    this.running = false;
    if (this._rafId) { cancelAnimationFrame(this._rafId); this._rafId = null; }
    if (this.source) { this.source.disconnect(); this.source = null; }
    if (this.stream) { this.stream.getTracks().forEach(t => t.stop()); this.stream = null; }
    if (this.audioCtx) { this.audioCtx.close(); this.audioCtx = null; }
    if (this.onStop) this.onStop();
  }

  _loop() {
    if (!this.running) return;
    this._rafId = requestAnimationFrame(() => this._loop());
    const now = performance.now();
    if (now - this._lastTick < this.TICK_MS) return;
    this._lastTick = now;
    this.analyser.getFloatTimeDomainData(this.buf);
    const rms = this._rms(this.buf);
    if (rms < 0.008) {
      if (this.onSilence) this.onSilence(rms);
      return;
    }
    const freq = this._autocorr(this.buf, this.audioCtx.sampleRate);
    if (freq > 70 && freq < 1300) {
      const { note, octave, cents } = PitchDetector.freqToNote(freq);
      if (this.onPitch) this.onPitch(freq, cents, note, octave, rms);
    } else {
      if (this.onSilence) this.onSilence(rms);
    }
  }

  _rms(buf) {
    let s = 0;
    for (let i = 0; i < buf.length; i++) s += buf[i] * buf[i];
    return Math.sqrt(s / buf.length);
  }

  _autocorr(buf, sr) {
    const SIZE = buf.length;
    let r1 = 0, r2 = SIZE - 1;
    const th = 0.2;
    for (let i = 0; i < SIZE / 2; i++) { if (Math.abs(buf[i]) < th) { r1 = i; break; } }
    for (let i = 1; i < SIZE / 2; i++) { if (Math.abs(buf[SIZE - i]) < th) { r2 = SIZE - i; break; } }
    const sl = buf.slice(r1, r2);
    const n = sl.length;
    if (n < 64) return -1;

    const c = new Float32Array(n);
    for (let lag = 0; lag < n; lag++) {
      for (let j = 0; j < n - lag; j++) c[lag] += sl[j] * sl[j + lag];
    }

    let d = 0;
    while (d < n - 1 && c[d] > c[d + 1]) d++;

    let maxVal = -1, maxPos = -1;
    for (let i = d; i < n; i++) {
      if (c[i] > maxVal) { maxVal = c[i]; maxPos = i; }
    }
    if (maxPos < 1 || maxPos >= n - 1) return -1;

    const x1 = c[maxPos - 1], x2 = c[maxPos], x3 = c[maxPos + 1];
    const a = (x1 + x3 - 2 * x2) / 2;
    const b = (x3 - x1) / 2;
    const T = a ? maxPos - b / (2 * a) : maxPos;
    return sr / T;
  }

  // Play a note via Web Audio oscillator. Returns a Promise that resolves when done.
  playTone(freq, duration = 0.7) {
    const ctx = this.audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.28, now + 0.02);
    gain.gain.setValueAtTime(0.28, now + duration - 0.06);
    gain.gain.linearRampToValueAtTime(0, now + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
    const ownCtx = !this.audioCtx;
    return new Promise(res => {
      osc.addEventListener('ended', () => {
        if (ownCtx) ctx.close();
        setTimeout(res, 50);
      });
    });
  }

  static freqToNote(freq) {
    const NOTES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    const semitones = 12 * Math.log2(freq / 440);
    const midi = Math.round(semitones) + 69;
    const note = NOTES[((midi % 12) + 12) % 12];
    const octave = Math.floor(midi / 12) - 1;
    const ideal = 440 * Math.pow(2, Math.round(semitones) / 12);
    const cents = Math.round(1200 * Math.log2(freq / ideal));
    return { note, octave, cents: Math.max(-50, Math.min(50, cents)) };
  }

  static noteToFreq(note, octave) {
    const NOTES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    const idx = NOTES.indexOf(note);
    if (idx === -1) return 0;
    return 440 * Math.pow(2, ((octave + 1) * 12 + idx - 69) / 12);
  }

  static centsOff(sungNote, sungOctave, sungCents, targetNote, targetOctave) {
    const sf = PitchDetector.noteToFreq(sungNote, sungOctave) * Math.pow(2, sungCents / 1200);
    const tf = PitchDetector.noteToFreq(targetNote, targetOctave);
    return Math.abs(1200 * Math.log2(sf / tf));
  }
}
