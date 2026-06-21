'use strict';

const NOTE_IDX = {C:0,'C#':1,D:2,'D#':3,E:4,F:5,'F#':6,G:7,'G#':8,A:9,'A#':10,B:11};

function loadVoiceLabScores() {
  try { return JSON.parse(localStorage.getItem('voicelab_scores') || '{}'); }
  catch(e) { return {}; }
}

const NOTE_NAMES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

function loadVoiceLabRange() {
  try { return JSON.parse(localStorage.getItem('voicelab_range') || 'null'); }
  catch(e) { return null; }
}

function midiToNoteObj(midi) {
  return { note: NOTE_NAMES[((midi % 12) + 12) % 12], octave: Math.floor(midi / 12) - 1 };
}

const EXERCISES = [
  {
    id: 'breathing',
    icon: '🫁',
    title: 'Diaphragm Breathing',
    subtitle: '1 min — the foundation of all singing',
    needsMic: false,
    type: 'instruction',
    steps: [
      'Stand or sit tall. One hand on chest, one on belly.',
      'Breathe IN slowly (4 counts) — only your belly rises. Chest stays still.',
      'Hold for 2 counts.',
      'Breathe OUT slowly through pursed lips (6 counts). Feel the belly fall.',
      'Repeat 5 times. This is diaphragm support — your vocal power source.'
    ],
    tip: 'Chest breathing = tension & weak tone. Belly breathing = power & control.'
  },
  {
    id: 'liptrill',
    icon: '💋',
    title: 'Lip Trill',
    subtitle: '45 sec — warms up lips, breath & cords',
    needsMic: false,
    type: 'instruction',
    steps: [
      'Completely relax your lips and face.',
      'Blow a steady stream of air through closed lips until they vibrate like a motorboat.',
      'Maintain the trill while sliding your pitch up and down your range.',
      'Tip: support your cheeks with two fingers if the trill stops.'
    ],
    tip: 'Lip trills = low-resistance warmup. Warm up cords without strain. Do before every recording.'
  },
  {
    id: 'scale',
    icon: '🎵',
    title: 'Major Scale Drill',
    subtitle: 'Do-Re-Mi up and down — match each note',
    needsMic: true,
    type: 'pitch',
    sequence: [
      { note: 'C', octave: 4, label: 'Do' },
      { note: 'D', octave: 4, label: 'Re' },
      { note: 'E', octave: 4, label: 'Mi' },
      { note: 'F', octave: 4, label: 'Fa' },
      { note: 'G', octave: 4, label: 'Sol' },
      { note: 'F', octave: 4, label: 'Fa' },
      { note: 'E', octave: 4, label: 'Mi' },
      { note: 'D', octave: 4, label: 'Re' },
      { note: 'C', octave: 4, label: 'Do' }
    ],
    tip: 'Keep your jaw relaxed. The scale should flow without breaks in tone.'
  },
  {
    id: 'vowels',
    icon: '🗣️',
    title: 'Vowel Sustain',
    subtitle: 'Sustain Ah · Eh · Ih · Oh · Oo on A4',
    needsMic: true,
    type: 'pitch',
    sequence: [
      { note: 'A', octave: 4, label: 'Ah' },
      { note: 'A', octave: 4, label: 'Eh' },
      { note: 'A', octave: 4, label: 'Ih' },
      { note: 'A', octave: 4, label: 'Oh' },
      { note: 'A', octave: 4, label: 'Oo' }
    ],
    tip: 'Each vowel must ring with the same pitch. Shape your mouth — don\'t let pitch drift!'
  },
  {
    id: 'octave',
    icon: '🎸',
    title: 'Octave Jump',
    subtitle: 'C4 → C5 → C4 — chest to head voice',
    needsMic: true,
    type: 'pitch',
    sequence: [
      { note: 'C', octave: 4, label: 'Low' },
      { note: 'C', octave: 5, label: 'High' },
      { note: 'C', octave: 4, label: 'Low' },
      { note: 'C', octave: 5, label: 'High' },
      { note: 'C', octave: 4, label: 'Low' }
    ],
    tip: 'The jump to the octave is where chest voice blends into head voice. Stay connected!'
  },
  {
    id: 'siren',
    icon: '🌊',
    title: 'Vocal Siren',
    subtitle: 'Slide through your full range',
    needsMic: false,
    type: 'instruction',
    steps: [
      'Start at the very bottom of your comfortable singing range.',
      'Slide continuously UPWARD on "Weee" through your entire range.',
      'At the top, slide back DOWN without stopping or breaking.',
      'Feel chest → mixed → head voice transition. Don\'t stop at the break!',
      'Repeat 3 times slowly. Never force the high notes.'
    ],
    tip: 'The siren smooths your passaggio (register break) — one of the best exercises for producers!'
  }
];

class ExerciseModal {
  constructor(detector) {
    this.detector = detector;
    this.ex = null;
    this.stepIdx = 0;
    this.seqIdx = 0;
    this.smoothCents = 0;
    this.lockTimer = null;
    this.locked = false;

    this.onSessionComplete = null;

    this.modal = document.getElementById('exerciseModal');
    this.modalIcon = document.getElementById('modalIcon');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalBody = document.getElementById('modalBody');
    document.getElementById('modalClose').addEventListener('click', () => this.close());
    this.modal.querySelector('.modal-backdrop').addEventListener('click', () => this.close());
  }

  open(exId) {
    this.ex = EXERCISES.find(e => e.id === exId);
    if (!this.ex) return;
    this.stepIdx = 0;
    this.seqIdx = 0;
    this.smoothCents = 0;
    this.locked = false;
    this.sequence = this.ex.type === 'pitch' ? this._computeSequence() : null;
    this.modalIcon.textContent = this.ex.icon;
    this.modalTitle.textContent = this.ex.title;
    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (this.ex.type === 'instruction') this._renderInstruction();
    else this._renderPitch();
  }

  _computeSequence() {
    const ex = this.ex;
    const range = loadVoiceLabRange();

    if (ex.id === 'scale') {
      const startMidi = range ? range.sweetLow : 60;
      const intervals = [0, 2, 4, 5, 7, 5, 4, 2, 0];
      const labels   = ['Do','Re','Mi','Fa','Sol','Fa','Mi','Re','Do'];
      return intervals.map((s, i) => ({ ...midiToNoteObj(startMidi + s), label: labels[i] }));
    }

    if (ex.id === 'vowels') {
      const midMidi = range ? Math.round((range.sweetLow + range.sweetHigh) / 2) : 69;
      const n = midiToNoteObj(midMidi);
      return ['Ah','Eh','Ih','Oh','Oo'].map(label => ({ ...n, label }));
    }

    if (ex.id === 'octave') {
      const loMidi = range ? range.sweetLow : 60;
      const canOct = range && (loMidi + 12 <= range.highMidi);
      const hiMidi = canOct ? loMidi + 12 : loMidi + 7;
      const lo = midiToNoteObj(loMidi), hi = midiToNoteObj(hiMidi);
      return [
        { ...lo, label: 'Low' }, { ...hi, label: canOct ? 'High' : '5th' },
        { ...lo, label: 'Low' }, { ...hi, label: canOct ? 'High' : '5th' },
        { ...lo, label: 'Low' }
      ];
    }

    return ex.sequence;
  }

  close() {
    this._stopDetector();
    clearTimeout(this.lockTimer);
    this.modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  _stopDetector() {
    if (this.detector.running) {
      this.detector.onPitch = null;
      this.detector.onSilence = null;
    }
  }

  // ---- INSTRUCTION TYPE ----
  _renderInstruction() {
    const ex = this.ex;
    this.stepIdx = 0;
    this.modalBody.innerHTML = `
      <div class="ex-steps" id="exStepList"></div>
      <div class="ex-tip"><span class="tip-icon">💡</span>${ex.tip}</div>
      <button class="btn-primary ex-next-btn" id="exNextStep">Next Step →</button>
      <button class="btn-secondary ex-done-btn hidden" id="exDoneBtn">✓ Done!</button>
    `;
    this._updateStepDisplay();
    document.getElementById('exNextStep').addEventListener('click', () => {
      this.stepIdx++;
      if (this.stepIdx >= ex.steps.length) {
        document.getElementById('exNextStep').classList.add('hidden');
        document.getElementById('exDoneBtn').classList.remove('hidden');
      }
      this._updateStepDisplay();
    });
    document.getElementById('exDoneBtn').addEventListener('click', () => this.close());
  }

  _updateStepDisplay() {
    const list = document.getElementById('exStepList');
    if (!list) return;
    list.innerHTML = this.ex.steps.map((s, i) => `
      <div class="ex-step ${i < this.stepIdx ? 'done' : i === this.stepIdx ? 'active' : 'pending'}">
        <span class="step-num">${i < this.stepIdx ? '✓' : i + 1}</span>
        <span class="step-text">${s}</span>
      </div>
    `).join('');
  }

  // ---- PITCH TYPE ----
  _renderPitch() {
    const ex = this.ex;
    this.seqIdx = 0;
    this.locked = false;
    this.noteMaxPcts = [];
    this.curNotePct = 0;
    this.modalBody.innerHTML = `
      <div class="ex-seq" id="exSeq"></div>
      <div class="ex-pitch-display">
        <div class="ex-col">
          <div class="ex-label">TARGET</div>
          <div class="ex-note-big" id="exTargetNote">--</div>
          <div class="ex-note-sub" id="exTargetSub"></div>
          <button class="btn-icon ex-hear-btn" id="exHearBtn">▶ Hear it</button>
        </div>
        <div class="ex-col">
          <div class="ex-label">YOU</div>
          <div class="ex-note-big" id="exSungNote" style="color:var(--cyan)">--</div>
          <div class="ex-note-sub" id="exSungCents"></div>
        </div>
      </div>
      <div class="ex-match-bar">
        <div class="ex-match-fill" id="exMatchFill" style="width:0%"></div>
      </div>
      <div class="ex-accuracy" id="exAccuracy">Sing the note above...</div>
      <div class="ex-tip"><span class="tip-icon">💡</span>${ex.tip}</div>
      <div class="ex-btn-row">
        <button class="btn-secondary" id="exPrevBtn" disabled>← Back</button>
        <button class="btn-primary" id="exAdvBtn">Next Note →</button>
        <button class="btn-ghost" id="exFinishBtn" style="display:none">✓ Finish</button>
      </div>
    `;
    this._updateSeqDisplay();
    this._updatePitchTarget();

    if (!loadVoiceLabRange()) {
      const hint = document.createElement('p');
      hint.className = 'ex-range-hint';
      hint.textContent = '📏 Complete the Vocal Range Test for exercises tuned to your voice.';
      this.modalBody.insertBefore(hint, this.modalBody.firstChild);
    }

    document.getElementById('exHearBtn').addEventListener('click', () => {
      const t = this.sequence[this.seqIdx];
      this.detector.playTone(PitchDetector.noteToFreq(t.note, t.octave));
    });
    document.getElementById('exAdvBtn').addEventListener('click', () => this._advance());
    document.getElementById('exPrevBtn').addEventListener('click', () => this._back());
    document.getElementById('exFinishBtn').addEventListener('click', () => this.close());

    // Start mic
    if (!this.detector.running) {
      this.detector.start().then(() => this._attachPitchCallbacks()).catch(err => {
        document.getElementById('exAccuracy').textContent = 'Mic error: ' + err.message;
      });
    } else {
      this._attachPitchCallbacks();
    }
  }

  _attachPitchCallbacks() {
    this.detector.onPitch = (freq, cents, note, octave, rms) => {
      const sungEl = document.getElementById('exSungNote');
      const centsEl = document.getElementById('exSungCents');
      const accEl = document.getElementById('exAccuracy');
      const fillEl = document.getElementById('exMatchFill');
      if (!sungEl) return;

      sungEl.textContent = note + octave;
      this.smoothCents = this.smoothCents * 0.5 + cents * 0.5;
      centsEl.textContent = (this.smoothCents >= 0 ? '+' : '') + Math.round(this.smoothCents) + '¢';

      const t = this.sequence[this.seqIdx];
      const diff = PitchDetector.centsOff(note, octave, Math.round(this.smoothCents), t.note, t.octave);
      // Beginner-friendly: green within ~33 cents (was 10 cents with * 2)
      const pct = Math.max(0, 100 - diff * 0.6);
      if (pct > this.curNotePct) this.curNotePct = pct;

      fillEl.style.width = pct + '%';
      fillEl.style.background = pct > 80 ? 'var(--green)' : pct > 50 ? 'var(--yellow)' : 'var(--red)';

      const sungMidi = (octave + 1) * 12 + (NOTE_IDX[note] ?? 0);
      const targMidi = (t.octave + 1) * 12 + (NOTE_IDX[t.note] ?? 0);

      if (pct > 80) {
        accEl.textContent = '🟢 Nice! Hold it...';
        accEl.style.color = 'var(--green)';
        if (!this.locked) {
          this.locked = true;
          this.lockTimer = setTimeout(() => {
            if (this.locked) accEl.textContent = '✅ Got it! Tap Next →';
          }, 1200);
        }
      } else if (pct > 50) {
        const dir = sungMidi < targMidi ? 'a touch higher ↑'
                  : sungMidi > targMidi ? 'a touch lower ↓'
                  : this.smoothCents < 0 ? 'a hair sharper ↑' : 'a hair flatter ↓';
        accEl.textContent = `🟡 Almost — ${dir}`;
        accEl.style.color = 'var(--yellow)';
        this.locked = false; clearTimeout(this.lockTimer);
      } else {
        const dir = sungMidi < targMidi ? 'higher ↑' : sungMidi > targMidi ? 'lower ↓'
                  : this.smoothCents < 0 ? 'sharper ↑' : 'flatter ↓';
        accEl.textContent = `🔴 Sing ${dir}`;
        accEl.style.color = 'var(--red)';
        this.locked = false; clearTimeout(this.lockTimer);
      }
    };
    this.detector.onSilence = () => {
      const sungEl = document.getElementById('exSungNote');
      const accEl = document.getElementById('exAccuracy');
      const fillEl = document.getElementById('exMatchFill');
      if (!sungEl) return;
      sungEl.textContent = '--';
      if (accEl) { accEl.textContent = 'Sing the note above...'; accEl.style.color = ''; }
      if (fillEl) fillEl.style.width = '0%';
      this.locked = false; clearTimeout(this.lockTimer);
    };
  }

  _advance() {
    // Bank the best accuracy reached on this note
    this.noteMaxPcts.push(Math.round(this.curNotePct));
    this.curNotePct = 0;

    this.seqIdx++;
    this.locked = false;
    clearTimeout(this.lockTimer);
    const ex = this.ex;
    if (this.seqIdx >= this.sequence.length) {
      this._stopDetector();
      this._finishSession();
      document.getElementById('exAdvBtn').style.display = 'none';
      document.getElementById('exFinishBtn').style.display = '';
      return;
    }
    this._updateSeqDisplay();
    this._updatePitchTarget();
    document.getElementById('exPrevBtn').disabled = this.seqIdx === 0;
  }

  _finishSession() {
    const sessionScore = this.noteMaxPcts.length
      ? Math.round(this.noteMaxPcts.reduce((a, b) => a + b, 0) / this.noteMaxPcts.length)
      : 0;

    const exId = this.ex.id;
    const scores = loadVoiceLabScores();
    const prev = scores[exId]?.sessions || [];
    const lastScore = prev.length > 0 ? prev[prev.length - 1].score : null;
    const bestScore = prev.length > 0 ? Math.max(...prev.map(s => s.score)) : null;

    if (!scores[exId]) scores[exId] = { sessions: [] };
    scores[exId].sessions.push({ date: new Date().toISOString().slice(0, 10), score: sessionScore });
    if (scores[exId].sessions.length > 30) scores[exId].sessions.splice(0, scores[exId].sessions.length - 30);
    try { localStorage.setItem('voicelab_scores', JSON.stringify(scores)); } catch(e) {}

    const acc = document.getElementById('exAccuracy');
    if (!acc) return;

    const emoji = sessionScore >= 80 ? '🎉' : sessionScore >= 60 ? '😊' : '💪';
    let progress = '';
    if (lastScore !== null) {
      const delta = sessionScore - lastScore;
      if (delta > 2)       progress = ` — ↑ +${delta}% from last time!`;
      else if (delta < -2) progress = ` — ↓ ${delta}% from last`;
      else                 progress = ' — same as last time';
    } else {
      progress = ' — first run, keep going!';
    }
    const newBest = (bestScore !== null && sessionScore > bestScore) ? ' 🏆 New best!' : '';

    acc.textContent = `${emoji} Score: ${sessionScore}%${progress}${newBest}`;
    acc.style.color = sessionScore >= 80 ? 'var(--green)' : sessionScore >= 60 ? 'var(--yellow)' : 'var(--cyan)';

    if (this.onSessionComplete) this.onSessionComplete(exId, sessionScore);
  }

  _back() {
    if (this.seqIdx > 0) this.seqIdx--;
    this.locked = false;
    clearTimeout(this.lockTimer);
    this._updateSeqDisplay();
    this._updatePitchTarget();
    document.getElementById('exPrevBtn').disabled = this.seqIdx === 0;
  }

  _updateSeqDisplay() {
    const seq = document.getElementById('exSeq');
    if (!seq) return;
    seq.innerHTML = this.sequence.map((s, i) => `
      <div class="seq-dot ${i === this.seqIdx ? 'active' : i < this.seqIdx ? 'done' : ''}">
        <span>${s.note}${s.octave}</span>
        <span class="seq-label">${s.label}</span>
      </div>
    `).join('');
  }

  _updatePitchTarget() {
    const t = this.sequence[this.seqIdx];
    const tn = document.getElementById('exTargetNote');
    const ts = document.getElementById('exTargetSub');
    if (tn) tn.textContent = t.note + t.octave;
    if (ts) ts.textContent = t.label + ' — ' + Math.round(PitchDetector.noteToFreq(t.note, t.octave)) + ' Hz';
    const sungEl = document.getElementById('exSungNote');
    if (sungEl) sungEl.textContent = '--';
    const fillEl = document.getElementById('exMatchFill');
    if (fillEl) fillEl.style.width = '0%';
    const accEl = document.getElementById('exAccuracy');
    if (accEl) { accEl.textContent = 'Sing the note above...'; accEl.style.color = ''; }
    this.smoothCents = 0;
  }
}
