'use strict';

const THEORY_CARDS = [
  {
    icon: '🎤',
    title: 'Vocal Ranges',
    body: `<table class="theory-table">
      <tr><th>Voice</th><th>Range</th><th>Use in productions</th></tr>
      <tr><td>Bass</td><td>E2–E4</td><td>Deep hooks, spoken word vibes</td></tr>
      <tr><td>Baritone</td><td>A2–A4</td><td>Pop, R&B, most male vocals</td></tr>
      <tr><td>Tenor</td><td>C3–C5</td><td>High male vocals, falsetto features</td></tr>
      <tr><td>Alto</td><td>F3–F5</td><td>Warm low female, backing vocals</td></tr>
      <tr><td>Mezzo</td><td>A3–A5</td><td>Mid-range female, most pop vocals</td></tr>
      <tr><td>Soprano</td><td>C4–C6</td><td>High female, leads, stacked choirs</td></tr>
    </table>`,
    links: [
      { label: 'Voice Types: All 8 Classifications Explained', url: 'https://www.youtube.com/watch?v=8G1C2ktW3-E' },
      { label: 'How To Find Your Vocal Range', url: 'https://www.youtube.com/watch?v=QTt_lMlmZMk' }
    ]
  },
  {
    icon: '🏔️',
    title: 'Chest vs Head Voice',
    body: `<p><strong>Chest voice</strong> — the lower register. Vibrations resonate in your chest. Sounds full, powerful, warm. Most of your speaking voice is chest.</p>
    <p><strong>Head voice</strong> — the upper register. Vibrations shift to your head/sinuses. Sounds bright, airy, thinner. Essential for high notes.</p>
    <p><strong>Falsetto</strong> — a breathy, disconnected head voice. The cords vibrate at the edges only. Sounds airy/fragile. Common in R&B and pop features.</p>
    <p><strong>Mixed voice</strong> — the goal. Blend of both registers. Full yet flexible. This is what top vocalists use for most of their range.</p>`,
    links: [
      { label: 'Chest, Head & Mixed Voice — Registers Explained', url: 'https://www.youtube.com/watch?v=LPg5Osmcs4Y' },
      { label: 'Hear All Three Registers on the Same Song', url: 'https://www.youtube.com/watch?v=z0pu7NVi5rY' }
    ]
  },
  {
    icon: '🔀',
    title: 'The Passaggio (Register Break)',
    body: `<p>The <strong>passaggio</strong> is the transition point between chest and head voice — where the voice tends to crack or thin out.</p>
    <p>For most males it's around <strong>E4–G4</strong>. For females around <strong>A4–C5</strong>.</p>
    <p>The Vocal Siren exercise (in Warm-up) is specifically designed to smooth this transition. The goal: no crack, just a seamless blend.</p>
    <p>When recording, you can choose to stay in chest voice and just stop before the break — or train through it for a wider range.</p>`,
    links: [
      { label: 'How To Sing Over The Passaggio', url: 'https://www.youtube.com/watch?v=BmV1uUMlN28' },
      { label: 'Fix Your Vocal Break — Exercises', url: 'https://www.youtube.com/watch?v=ZDoQ8OdtWxE' }
    ]
  },
  {
    icon: '🎼',
    title: 'Finding the Right Key',
    body: `<p>Don't torture yourself singing in the wrong key. Your voice has a sweet spot.</p>
    <ol>
      <li>Use the Vocal Range Test (Tuner tab) to find your lowest and highest note.</li>
      <li>Your best singing range is typically in the middle ⅔ of that span.</li>
      <li>In your DAW, set the track key to center around your sweet spot.</li>
      <li>Transpose the chord progression if needed — the listener never knows.</li>
    </ol>
    <p>Example: If your range is G2–G4, you'll sound best singing melodies in D3–E4. Set your production in a key that puts the hook there.</p>`,
    links: [
      { label: 'Find the Best Key for Your Voice (30 Day Singer)', url: 'https://www.youtube.com/watch?v=qkdoJT72GmY' },
      { label: 'How to Pick the Right Song Key', url: 'https://www.youtube.com/watch?v=RvsemGbHfXU' }
    ]
  },
  {
    icon: '🤖',
    title: 'How Pitch Correction Works',
    body: `<p><strong>Auto-Tune / Melodyne</strong> — pitch correction doesn't fix bad singing, it <em>polishes</em> good singing.</p>
    <ul>
      <li><strong>Retune speed</strong> — slow (50-100ms) = natural, sounds organic. Fast (0ms) = robotic T-Pain effect. Choose your style.</li>
      <li><strong>Melodyne</strong> — manual note-by-note correction. Best for transparent results. Drag each note to its pitch center.</li>
      <li><strong>Aim for 85%+ natural accuracy</strong> — correction of 15 cents sounds transparent. Correction of 60+ cents sounds processed.</li>
      <li><strong>Comp first</strong> — always pick the best take before correcting. Correction can't save a bad performance.</li>
    </ul>`,
    links: [
      { label: 'Melodyne Pitch Correction — Berklee Online', url: 'https://www.youtube.com/watch?v=qLRJbSo0bG0' },
      { label: 'Melodyne 5: Fast Pitch Correction Tutorial', url: 'https://www.youtube.com/watch?v=8zs3Ou-KZlk' }
    ]
  },
  {
    icon: '🎹',
    title: 'Key Intervals for Singers',
    body: `<p>Train your ear to hear and reproduce these intervals:</p>
    <table class="theory-table">
      <tr><th>Interval</th><th>Example</th><th>Memory hook</th></tr>
      <tr><td>Unison</td><td>C → C</td><td>Same note</td></tr>
      <tr><td>Minor 3rd</td><td>C → Eb</td><td>"Smoke on the Water"</td></tr>
      <tr><td>Major 3rd</td><td>C → E</td><td>"When the Saints"</td></tr>
      <tr><td>Perfect 4th</td><td>C → F</td><td>"Here Comes the Bride"</td></tr>
      <tr><td>Perfect 5th</td><td>C → G</td><td>"Star Wars theme"</td></tr>
      <tr><td>Octave</td><td>C → C</td><td>"Somewhere Over the Rainbow"</td></tr>
    </table>`,
    links: [
      { label: 'Learn Intervals by Ear (John Williams themes)', url: 'https://www.youtube.com/watch?v=PSa4XVbQ6Zo' },
      { label: 'Ultimate Intervals — Ear Training for Beginners', url: 'https://www.youtube.com/watch?v=7bXuewvJ1wg' }
    ]
  }
];

const TIPS = [
  {
    icon: '🔥',
    title: 'Warm up before EVERY session',
    body: 'Cold cords = cracking, strain, poor tone. 10 minutes of the Warm-up exercises before recording protects your voice and gets you closer to your first take being usable. Professionals never skip this.'
  },
  {
    icon: '💧',
    title: 'Stay hydrated',
    body: 'Drink room-temperature water throughout the session. Cold water tightens the throat. Avoid dairy (mucus), coffee and alcohol (dry out the cords). If your voice feels dry, honey + warm water is a singer\'s best friend.'
  },
  {
    icon: '🎙️',
    title: 'Mic placement & technique',
    body: 'Position the mic 15–25 cm (6–10 inches) from your mouth. Use a pop filter to stop plosives (P, B, T). Sing slightly off-axis (mic angled slightly down or to the side) to reduce sibilance and breath noise. Don\'t move toward or away from the mic during a take.'
  },
  {
    icon: '🏠',
    title: 'DIY acoustic treatment',
    body: 'Record in a walk-in closet or corner surrounded by hanging clothes. In a bedroom, hang a thick duvet behind you and set up in a corner. Avoid hard parallel walls — flutter echo ruins recordings. The "pillow fort" method actually works.'
  },
  {
    icon: '🎚️',
    title: 'Record multiple takes, comp later',
    body: 'Record at least 3 full takes. In your DAW, comp (composite) the best phrases from each take into one perfect vocal track. Most professional vocals are comped from 5–10 takes. Record takes fresh — don\'t loop-record into fatigue.'
  },
  {
    icon: '🔊',
    title: 'Double tracking for thickness',
    body: 'Record two takes of the same part. Pan one slightly left, one slightly right (L20–R20). The natural variation between takes creates width without needing reverb. For a chorus, try 4 doubles panned L60/L20/R20/R60. Pitch-shift one +/-10 cents for more glue.'
  },
  {
    icon: '🎯',
    title: 'Record at the right level',
    body: 'Set your gain so the loudest moments peak at -12 to -6 dBFS. Never clip. If you clip during recording, that take is gone — no plugin fixes it. Better to be 6dB quieter and boost later than to distort the input signal.'
  },
  {
    icon: '🗝️',
    title: 'Choose your key wisely',
    body: 'Use the Tuner and Practice tabs to map your comfortable range. Then build your production around a key where the main melody sits in your sweet spot. Don\'t be afraid to transpose — your fans care about the vibe, not what key it\'s in.'
  },
  {
    icon: '😴',
    title: 'Never sing through hoarseness',
    body: 'If your voice is hoarse, rough, or sore — stop. Singing on a strained voice causes real damage (nodules). Rest, hydrate, steam (not too hot). One damaged recording session can cost you weeks of recovery. Your voice is irreplaceable.'
  },
  {
    icon: '🎵',
    title: 'Pitch correction workflow',
    body: 'Workflow: 1) Comp your best take. 2) Apply light auto-tune (retune speed ~80ms, key locked) for transparent polish. 3) For specific problem notes, use Melodyne or manual pitch clip editing. 4) Don\'t correct everything — slight natural imperfections give emotion. Only fix what sounds wrong.'
  },
  {
    icon: '🎛️',
    title: 'Hook up to Ableton via your mixer',
    body: '<strong>Chain: Mic → Mixer channel → USB out → Ableton.</strong> Your USB mixer IS the audio interface — no separate interface needed.<br><br>' +
      '<strong>1. Set up audio in Ableton:</strong> Preferences (Ctrl+,) → Audio → Driver Type: <em>ASIO</em> (Windows) → Audio Device: your mixer (e.g. "Xenyx Q802 USB"). If ASIO isn\'t listed, install <em>ASIO4ALL</em> (free download) and select that.<br><br>' +
      '<strong>2. Enable inputs:</strong> Click "Input Config" in Preferences → activate the stereo pair your mixer sends (usually 1/2 Ext. In).<br><br>' +
      '<strong>3. Create a vocal track:</strong> Ctrl+T → arm it 🔴 → set Input Type: "Ext. In" → Channel: 1/2 (stereo) or 1 (mono). Hit the main record button and sing.<br><br>' +
      '<strong>4. Fix monitoring latency:</strong> If you hear an echo while singing, set the track Monitor to "In", then reduce buffer size in Preferences → Audio → Buffer Size to 128 or 256 samples (< 10 ms round-trip).<br><br>' +
      '<strong>Pro tip:</strong> Dial in your EQ and gentle compression on the mixer strip before it hits Ableton — record a polished signal, then add reverb/delay in the session as a plugin for creative control.'
  }
];

class SingCoachApp {
  constructor() {
    this.detector = new PitchDetector();
    this.exerciseModal = new ExerciseModal(this.detector);

    // Tuner state
    this.tunerActive = false;
    this.smoothCents = 0;
    this.lastNote = null;
    this.lastOctave = null;

    // Practice state
    this.practiceActive = false;
    this.practiceScore = 0;
    this.practiceStreak = 0;
    this.practiceRound = 0;
    this.practiceSequence = [];
    this.practiceIdx = 0;
    this.goodTimer = null;
    this.goodAccum = 0;
    this.GOOD_NEEDED = 2000; // ms to hold note

    this.refOctave = 4;

    this._initTabs();
    this._initTuner();
    this._renderExercises();
    this._initPractice();
    this._renderTheory();
    this._renderTips();
    this._initRefTones();
    this._initRangeTest();

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }

  // ---- TABS ----
  _initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
      });
    });
  }

  // ---- TUNER ----
  _initTuner() {
    document.getElementById('btnStartTuner').addEventListener('click', async () => {
      try {
        await this.detector.start();
        document.getElementById('tunerStart').classList.add('hidden');
        document.getElementById('tunerActive').classList.remove('hidden');
        this.tunerActive = true;
        this._attachTunerCallbacks();
      } catch (e) {
        alert('Mic access needed: ' + e.message);
      }
    });

    document.getElementById('btnStopTuner').addEventListener('click', () => {
      this.detector.stop();
      this.tunerActive = false;
      document.getElementById('tunerActive').classList.add('hidden');
      document.getElementById('tunerStart').classList.remove('hidden');
    });
  }

  _attachTunerCallbacks() {
    this.detector.onPitch = (freq, cents, note, octave, rms) => {
      if (note !== this.lastNote || octave !== this.lastOctave) {
        this.lastNote = note;
        this.lastOctave = octave;
        document.getElementById('tNoteDisplay').textContent = note;
        document.getElementById('tOctaveDisplay').textContent = octave;
        document.getElementById('tFreqDisplay').textContent = freq.toFixed(1) + ' Hz';
      }
      this.smoothCents = this.smoothCents * 0.55 + cents * 0.45;
      const sc = Math.round(this.smoothCents);
      const needle = document.getElementById('tCentsNeedle');
      needle.style.left = (sc + 50) + '%';

      const badge = document.getElementById('tAccuracyBadge');
      const text = document.getElementById('tAccuracyText');
      if (Math.abs(sc) <= 10) {
        badge.className = 'accuracy-badge green';
        text.textContent = '🟢 IN TUNE';
      } else if (Math.abs(sc) <= 25) {
        badge.className = 'accuracy-badge yellow';
        text.textContent = sc < 0 ? '🟡 Too LOW' : '🟡 Too HIGH';
      } else {
        badge.className = 'accuracy-badge red';
        text.textContent = sc < 0 ? '🔴 Way too LOW' : '🔴 Way too HIGH';
      }

      const vol = Math.min(1, rms * 14);
      document.getElementById('tVolBar').style.width = (vol * 100) + '%';
      document.getElementById('tVolBar').style.background =
        vol > 0.8 ? 'var(--red)' : vol > 0.5 ? 'var(--yellow)' : 'var(--green)';
    };

    this.detector.onSilence = (rms) => {
      const badge = document.getElementById('tAccuracyBadge');
      const text = document.getElementById('tAccuracyText');
      badge.className = 'accuracy-badge';
      text.textContent = 'Sing something...';
      const vol = Math.min(1, rms * 14);
      document.getElementById('tVolBar').style.width = (vol * 100) + '%';
      document.getElementById('tVolBar').style.background = 'var(--green)';
    };
  }

  // ---- REFERENCE TONES ----
  _initRefTones() {
    this._renderRefTones();
    document.getElementById('refOctaveDown').addEventListener('click', () => {
      if (this.refOctave > 2) { this.refOctave--; this._renderRefTones(); }
    });
    document.getElementById('refOctaveUp').addEventListener('click', () => {
      if (this.refOctave < 6) { this.refOctave++; this._renderRefTones(); }
    });
  }

  _renderRefTones() {
    const NOTES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    const grid = document.getElementById('refToneGrid');
    const oct = this.refOctave;
    document.getElementById('refOctaveLabel').textContent = 'Octave ' + oct;
    grid.innerHTML = NOTES.map(n => {
      const freq = PitchDetector.noteToFreq(n, oct);
      const isSharp = n.includes('#');
      return `<button class="ref-btn ${isSharp ? 'sharp' : ''}" data-freq="${freq}" data-note="${n}${oct}">
        <span class="ref-note">${n}</span>
        <span class="ref-freq">${Math.round(freq)}Hz</span>
      </button>`;
    }).join('');
    grid.querySelectorAll('.ref-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const f = parseFloat(btn.dataset.freq);
        this.detector.playTone(f, 1.0);
        btn.classList.add('playing');
        setTimeout(() => btn.classList.remove('playing'), 1000);
      });
    });
  }

  // ---- EXERCISES ----
  _renderExercises() {
    const grid = document.getElementById('exerciseGrid');
    grid.innerHTML = EXERCISES.map(ex => `
      <div class="ex-card" data-id="${ex.id}">
        <div class="ex-card-icon">${ex.icon}</div>
        <div class="ex-card-body">
          <div class="ex-card-title">${ex.title}</div>
          <div class="ex-card-sub">${ex.subtitle}</div>
          ${ex.needsMic ? '<span class="mic-badge">🎙️ Mic</span>' : ''}
        </div>
        <button class="ex-card-btn">Start →</button>
      </div>
    `).join('');
    grid.querySelectorAll('.ex-card').forEach(card => {
      card.querySelector('.ex-card-btn').addEventListener('click', () => {
        this.exerciseModal.open(card.dataset.id);
      });
    });
  }

  // ---- PRACTICE ----
  _initPractice() {
    document.getElementById('pBtnStart').addEventListener('click', () => this._startPractice());
    document.getElementById('pBtnNext').addEventListener('click', () => this._nextPracticeNote());
    document.getElementById('pBtnStop').addEventListener('click', () => this._stopPractice());
    document.getElementById('pPlayTarget').addEventListener('click', () => {
      if (this.practiceSequence.length && this.practiceIdx < this.practiceSequence.length) {
        const t = this.practiceSequence[this.practiceIdx];
        this.detector.playTone(PitchDetector.noteToFreq(t.note, t.octave));
      }
    });
  }

  _buildSequence() {
    const NOTES = ['C','D','E','F','G','A','B'];
    const CHROMATIC = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    const MAJOR_STEPS = [0,2,4,5,7,9,11,12,11,9,7,5,4,2,0];
    const key = document.getElementById('pKey').value;
    const oct = parseInt(document.getElementById('pOctave').value);
    const mode = document.getElementById('pMode').value;
    const keyIdx = CHROMATIC.indexOf(key);
    const seq = [];

    if (mode === 'scale') {
      MAJOR_STEPS.forEach(step => {
        const midi = keyIdx + step + (oct + 1) * 12;
        const noteIdx = midi % 12;
        const noteOct = Math.floor(midi / 12) - 1;
        seq.push({ note: CHROMATIC[noteIdx], octave: noteOct });
      });
    } else if (mode === 'intervals') {
      const intervals = [0,4,7,12,7,4,0,3,7,3,0];
      intervals.forEach(step => {
        const midi = keyIdx + step + (oct + 1) * 12;
        const noteIdx = midi % 12;
        const noteOct = Math.floor(midi / 12) - 1;
        seq.push({ note: CHROMATIC[noteIdx], octave: noteOct });
      });
    } else {
      for (let i = 0; i < 10; i++) {
        const step = Math.floor(Math.random() * 12);
        const midi = keyIdx + step + (oct + 1) * 12;
        const noteIdx = midi % 12;
        const noteOct = Math.floor(midi / 12) - 1;
        seq.push({ note: CHROMATIC[noteIdx], octave: noteOct });
      }
    }
    return seq;
  }

  async _startPractice() {
    this.practiceSequence = this._buildSequence();
    this.practiceIdx = 0;
    this.practiceScore = 0;
    this.practiceStreak = 0;
    this.practiceRound++;
    this.goodAccum = 0;

    document.getElementById('pBtnStart').classList.add('hidden');
    document.getElementById('pBtnNext').classList.remove('hidden');
    document.getElementById('pBtnStop').classList.remove('hidden');
    document.getElementById('pScore').textContent = '0';
    document.getElementById('pStreak').textContent = '0';
    document.getElementById('pRound').textContent = this.practiceRound;

    if (!this.detector.running) {
      try { await this.detector.start(); } catch (e) {
        alert('Mic needed for practice: ' + e.message);
        this._stopPractice(); return;
      }
    }

    this._showPracticeNote();
    this._attachPracticeCallbacks();
    document.getElementById('pHint').textContent = '▶ Tap the play button to hear the target note, then sing it!';
  }

  _showPracticeNote() {
    const t = this.practiceSequence[this.practiceIdx];
    const freq = PitchDetector.noteToFreq(t.note, t.octave);
    document.getElementById('pTargetNote').textContent = t.note + t.octave;
    document.getElementById('pTargetFreq').textContent = Math.round(freq) + ' Hz';
    document.getElementById('pSungNote').textContent = '--';
    document.getElementById('pSungCents').textContent = '';
    document.getElementById('pMatchFill').style.width = '0%';
    document.getElementById('pMatchLabel').textContent = '--';
    this.goodAccum = 0;
    // Auto-play the target note
    this.detector.playTone(freq);
  }

  _attachPracticeCallbacks() {
    this.practiceActive = true;
    let lastGoodTime = null;
    this.detector.onPitch = (freq, cents, note, octave, rms) => {
      if (!this.practiceActive || !this.practiceSequence.length) return;
      const t = this.practiceSequence[this.practiceIdx];
      document.getElementById('pSungNote').textContent = note + octave;
      document.getElementById('pSungCents').textContent = (cents >= 0 ? '+' : '') + cents + '¢';

      const diff = PitchDetector.centsOff(note, octave, cents, t.note, t.octave);
      const pct = Math.max(0, Math.round(100 - diff * 2));
      const fill = document.getElementById('pMatchFill');
      const label = document.getElementById('pMatchLabel');
      fill.style.width = pct + '%';
      fill.style.background = pct > 80 ? 'var(--green)' : pct > 50 ? 'var(--yellow)' : 'var(--red)';

      if (pct > 80) {
        label.textContent = '🟢 IN TUNE!';
        const now = performance.now();
        if (!lastGoodTime) lastGoodTime = now;
        this.goodAccum += now - (lastGoodTime || now);
        lastGoodTime = now;
        if (this.goodAccum >= this.GOOD_NEEDED) {
          this._earnPoints(pct);
          this.goodAccum = 0;
          lastGoodTime = null;
          document.getElementById('pHint').textContent = '🎉 +3 points! Next note ready.';
        }
      } else if (pct > 50) {
        label.textContent = '🟡 Close...';
        lastGoodTime = null; this.goodAccum = 0;
      } else {
        label.textContent = '🔴 Off pitch';
        lastGoodTime = null; this.goodAccum = 0;
      }
    };

    this.detector.onSilence = () => {
      if (!this.practiceActive) return;
      document.getElementById('pSungNote').textContent = '--';
      document.getElementById('pSungCents').textContent = '';
      document.getElementById('pMatchFill').style.width = '0%';
      document.getElementById('pMatchLabel').textContent = 'Sing...';
      lastGoodTime = null;
    };
  }

  _earnPoints(pct) {
    const pts = pct > 90 ? 3 : 2;
    this.practiceScore += pts;
    this.practiceStreak++;
    document.getElementById('pScore').textContent = this.practiceScore;
    document.getElementById('pStreak').textContent = this.practiceStreak;
  }

  _nextPracticeNote() {
    this.goodAccum = 0;
    this.practiceIdx++;
    if (this.practiceIdx >= this.practiceSequence.length) {
      document.getElementById('pHint').textContent =
        `🎉 Session complete! Score: ${this.practiceScore} pts — Streak: ${this.practiceStreak}`;
      document.getElementById('pBtnNext').classList.add('hidden');
      document.getElementById('pBtnStart').textContent = 'New Session';
      document.getElementById('pBtnStart').classList.remove('hidden');
      this.practiceActive = false;
      return;
    }
    this._showPracticeNote();
  }

  _stopPractice() {
    this.practiceActive = false;
    clearTimeout(this.goodTimer);
    document.getElementById('pBtnStart').textContent = 'Start Session';
    document.getElementById('pBtnStart').classList.remove('hidden');
    document.getElementById('pBtnNext').classList.add('hidden');
    document.getElementById('pBtnStop').classList.add('hidden');
    document.getElementById('pTargetNote').textContent = '--';
    document.getElementById('pTargetFreq').textContent = '';
    document.getElementById('pSungNote').textContent = '--';
    document.getElementById('pMatchFill').style.width = '0%';
    document.getElementById('pMatchLabel').textContent = '--';
    document.getElementById('pHint').textContent = '';
    if (this.detector.running && !this.exerciseModal.modal.classList.contains('hidden') === false) {
      this.detector.stop();
    }
  }

  // ---- THEORY ----
  _renderTheory() {
    const grid = document.getElementById('theoryGrid');
    grid.innerHTML = THEORY_CARDS.map((c, i) => `
      <div class="theory-card ${i === 0 ? 'open' : ''}" data-idx="${i}">
        <div class="theory-header">
          <span class="theory-icon">${c.icon}</span>
          <span class="theory-title">${c.title}</span>
          <span class="theory-chevron">${i === 0 ? '▲' : '▼'}</span>
        </div>
        <div class="theory-body" style="${i === 0 ? '' : 'display:none'}">
          ${c.body}
          ${c.links ? `<div class="theory-links">${c.links.map(l =>
            `<a class="yt-link" href="${l.url}" target="_blank" rel="noopener noreferrer">▶ ${l.label}</a>`
          ).join('')}</div>` : ''}
        </div>
      </div>
    `).join('');
    grid.querySelectorAll('.theory-card').forEach(card => {
      card.querySelector('.theory-header').addEventListener('click', () => {
        const body = card.querySelector('.theory-body');
        const chevron = card.querySelector('.theory-chevron');
        const isOpen = card.classList.contains('open');
        card.classList.toggle('open', !isOpen);
        body.style.display = isOpen ? 'none' : 'block';
        chevron.textContent = isOpen ? '▼' : '▲';
      });
    });
  }

  // ---- RANGE TEST ----
  _initRangeTest() {
    this._rangeLowNote = null; this._rangeLowOct = null;
    this._rangeHighNote = null; this._rangeHighOct = null;
    this._rangeLastNote = null; this._rangeLastOct = null;
    this._rangeOwnedMic = false;
    this._rangeTunerWasActive = false;

    document.getElementById('btnStartRange').addEventListener('click', () => this._startRange());
    document.getElementById('btnSetLow').addEventListener('click', () => this._setRangeLow());
    document.getElementById('btnSetHigh').addEventListener('click', () => this._setRangeHigh());
    document.getElementById('btnRangeReset').addEventListener('click', () => this._resetRange());
    document.getElementById('btnRangeGoPractice').addEventListener('click', () => this._rangeGoPractice());
  }

  async _startRange() {
    this._rangeTunerWasActive = this.tunerActive;
    this._rangeLastNote = null; this._rangeLastOct = null;
    if (!this.detector.running) {
      try {
        await this.detector.start();
        this._rangeOwnedMic = true;
      } catch (e) {
        alert('Mic access needed for range test: ' + e.message);
        return;
      }
    } else {
      this._rangeOwnedMic = false;
    }
    document.getElementById('rangeIdle').classList.add('hidden');
    document.getElementById('rangeLow').classList.remove('hidden');
    this._attachRangeCallbacks('rangeLiveNote', 'rangeLiveFreq');
  }

  _setRangeLow() {
    if (!this._rangeLastNote) { alert('Sing a note first, then tap!'); return; }
    this._rangeLowNote = this._rangeLastNote;
    this._rangeLowOct = this._rangeLastOct;
    this._rangeLastNote = null;
    document.getElementById('rangeLow').classList.add('hidden');
    document.getElementById('rangeHigh').classList.remove('hidden');
    this._attachRangeCallbacks('rangeHighNote', 'rangeHighFreq');
  }

  _setRangeHigh() {
    if (!this._rangeLastNote) { alert('Sing a note first, then tap!'); return; }
    this._rangeHighNote = this._rangeLastNote;
    this._rangeHighOct = this._rangeLastOct;
    this._showRangeResults();
  }

  _attachRangeCallbacks(noteElId, freqElId) {
    this.detector.onPitch = (freq, cents, note, octave, rms) => {
      this._rangeLastNote = note; this._rangeLastOct = octave;
      const el = document.getElementById(noteElId);
      const fe = document.getElementById(freqElId);
      if (el) el.textContent = note + octave;
      if (fe) fe.textContent = Math.round(freq) + ' Hz';
    };
    this.detector.onSilence = () => {
      const el = document.getElementById(noteElId);
      if (el && this._rangeLastNote) el.textContent = this._rangeLastNote + this._rangeLastOct;
    };
  }

  _showRangeResults() {
    document.getElementById('rangeHigh').classList.add('hidden');
    document.getElementById('rangeResults').classList.remove('hidden');

    const low = this._noteToMidi(this._rangeLowNote, this._rangeLowOct);
    const high = this._noteToMidi(this._rangeHighNote, this._rangeHighOct);

    if (high <= low) {
      alert('Your high note must be higher than your low note — try again!');
      this._resetRange(); return;
    }

    const semitones = high - low;
    const octaves = Math.floor(semitones / 12);
    const extra = semitones % 12;
    const spanText = octaves > 0
      ? `${octaves} oct${octaves > 1 ? 's' : ''}${extra > 0 ? ' + ' + extra + ' st' : ''} (${semitones} notes total)`
      : `${semitones} semitones`;

    const sweet = { low: low + Math.round(semitones * 0.2), high: low + Math.round(semitones * 0.7) };
    const vtype = this._classifyVoice(low, high);

    document.getElementById('resultLow').textContent = this._rangeLowNote + this._rangeLowOct;
    document.getElementById('resultHigh').textContent = this._rangeHighNote + this._rangeHighOct;
    document.getElementById('rangeSpan').textContent = spanText;
    document.getElementById('rangeType').textContent = vtype.type;
    document.getElementById('rangeSweetLabel').textContent =
      'Sweet spot: ' + this._midiToName(sweet.low) + ' – ' + this._midiToName(sweet.high);
    document.getElementById('rangeProdTip').textContent = vtype.tip;

    const sweetPct = (sweet.low - low) / semitones * 100;
    const sweetWidth = (sweet.high - sweet.low) / semitones * 100;
    const zone = document.getElementById('rangeSweet');
    zone.style.left = sweetPct.toFixed(1) + '%';
    zone.style.width = sweetWidth.toFixed(1) + '%';

    // Restore tuner callbacks or stop mic
    if (this._rangeOwnedMic) {
      this.detector.stop();
    } else if (this._rangeTunerWasActive) {
      this._attachTunerCallbacks();
    }
  }

  _rangeGoPractice() {
    const low = this._noteToMidi(this._rangeLowNote, this._rangeLowOct);
    const high = this._noteToMidi(this._rangeHighNote, this._rangeHighOct);
    const sweetLow = low + Math.round((high - low) * 0.2);
    const CHROMATIC = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    const note = CHROMATIC[sweetLow % 12];
    const octave = Math.max(3, Math.min(5, Math.floor(sweetLow / 12) - 1));
    document.getElementById('pKey').value = note;
    document.getElementById('pOctave').value = String(octave);
    document.querySelector('[data-tab="practice"]').click();
  }

  _resetRange() {
    this._rangeLastNote = null;
    document.getElementById('rangeIdle').classList.remove('hidden');
    document.getElementById('rangeLow').classList.add('hidden');
    document.getElementById('rangeHigh').classList.add('hidden');
    document.getElementById('rangeResults').classList.add('hidden');
    // Clear live displays
    ['rangeLiveNote','rangeLiveFreq','rangeHighNote','rangeHighFreq'].forEach(id => {
      const el = document.getElementById(id); if (el) el.textContent = '--';
    });
  }

  _noteToMidi(note, octave) {
    const N = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    return (octave + 1) * 12 + N.indexOf(note);
  }

  _midiToName(midi) {
    const N = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    return N[midi % 12] + (Math.floor(midi / 12) - 1);
  }

  _classifyVoice(lowMidi, highMidi) {
    if (highMidi <= 64) return { type: 'Bass 🟤',     tip: 'Your deep tone is perfect for trap, hip-hop hooks, spoken-word, and dark atmospheric vocals. Build tracks in E minor or D minor to center your range.' };
    if (highMidi <= 69) return { type: 'Baritone 🔵', tip: 'Most versatile male voice in production — warm low end, solid mids. Pop, R&B, indie all work great. Try tracks in G major or A minor for natural-feeling hooks.' };
    if (highMidi <= 74) return { type: 'Tenor / Alto 🟣', tip: 'You cover the most-used melodic register in modern music. Great for leads, features, and layers. D or G major/minor keys tend to sit perfectly in your sweet spot.' };
    if (highMidi <= 79) return { type: 'Mezzo-soprano 🟠', tip: 'Rich mid-range that can reach bright high notes — emotive pop, R&B, soul. Try building tracks in A or B♭ to center your voice for the hook.' };
    return               { type: 'Soprano 🟡',      tip: 'High, bright range — incredible for emotional peaks, runs, and airy layers. Build tracks in C or D to float above the mix without straining.' };
  }

  // ---- TIPS ----
  _renderTips() {
    const list = document.getElementById('tipsList');
    list.innerHTML = TIPS.map((t, i) => `
      <div class="tip-item">
        <div class="tip-num">${i + 1}</div>
        <div class="tip-content">
          <div class="tip-title"><span class="tip-icon-big">${t.icon}</span>${t.title}</div>
          <div class="tip-body">${t.body}</div>
        </div>
      </div>
    `).join('');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new SingCoachApp();
});
