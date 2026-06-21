'use strict';

const THEORY_CARDS = [
  {
    icon: '🎤',
    title: 'Know Your Voice Type',
    body: `<p>Every great singer is defined by their natural range. Don't fight it — own it.</p>
    <table class="theory-table">
      <tr><th>Type</th><th>Range</th><th>Artists</th></tr>
      <tr><td>Bass</td><td>E2–E4</td><td>Johnny Cash, Barry White, Nick Cave</td></tr>
      <tr><td>Baritone</td><td>A2–A4</td><td>Frank Sinatra, Elvis, Ed Sheeran, Bruno Mars</td></tr>
      <tr><td>Tenor</td><td>C3–C5</td><td>Freddie Mercury, Michael Jackson, Frank Ocean</td></tr>
      <tr><td>Alto/Contralto</td><td>F3–F5</td><td>Billie Eilish, Amy Winehouse, Tracy Chapman</td></tr>
      <tr><td>Mezzo-soprano</td><td>A3–A5</td><td>Adele, Beyoncé, P!nk, Lana Del Rey</td></tr>
      <tr><td>Soprano</td><td>C4–C6</td><td>Mariah Carey, Ariana Grande, Whitney Houston</td></tr>
    </table>
    <p style="margin-top:10px">💡 Use the <strong>Vocal Range Test</strong> (Tuner tab) to find yours — all exercises will automatically tune to your voice.</p>`,
    links: [
      { label: 'Voice Types: All 8 Classifications Explained', url: 'https://www.youtube.com/watch?v=8G1C2ktW3-E' }
    ]
  },
  {
    icon: '🫁',
    title: 'Breath Support — The Hidden Engine',
    body: `<p>When Adele belts effortlessly over an orchestra, what you're hearing isn't a powerful larynx — it's <strong>breath support</strong>. Every master singer trains this first.</p>
    <p><strong>The wrong way:</strong> shallow chest breathing — shoulders rise, tone gets thin and tight.</p>
    <p><strong>The right way:</strong> diaphragm support — belly expands on the in-breath; as you sing, the belly pulls slowly inward, pushing a controlled column of air through the cords.</p>
    <ul>
      <li><strong>Freddie Mercury, Pavarotti, Whitney</strong> — all known for seemingly endless phrases. That's breath control, not magic.</li>
      <li><strong>Practical test:</strong> put a hand on your belly. If it rises when you breathe in and falls as you sing — you're doing it right.</li>
      <li><strong>Studio tip:</strong> if you're running out of air mid-phrase, you're probably also over-singing. Back off 20%, support from the belly, and the note will ring longer with less effort.</li>
    </ul>`,
    links: [
      { label: 'Diaphragmatic Breathing for Singers — Roger Love', url: 'https://www.youtube.com/watch?v=2Hj_SBVOJkA' }
    ]
  },
  {
    icon: '🏔️',
    title: 'Chest / Head / Mixed — Artist Breakdown',
    body: `<p>The three registers every singer uses — and the artists who built careers on each one.</p>
    <ul>
      <li><strong>Chest voice</strong> — full, warm, resonates in the chest. <em>Barry White, Rag'n'Bone Man</em> live here. Most of your speaking voice is chest.</li>
      <li><strong>Head voice</strong> — bright, airy, resonates in the sinuses. <em>Sam Smith's emotional highs</em> are head voice. Feels like the sound floats above you.</li>
      <li><strong>Falsetto</strong> — a disconnected, breathy head voice. <em>The Weeknd, Bon Iver, Michael Jackson's high notes</em>. Fragile and intimate by design.</li>
      <li><strong>Mixed voice</strong> — the goal. The blend of chest power + head flexibility. <em>Bruno Mars ("Locked Out of Heaven"), Beyoncé's belt</em>. Sounds powerful without strain.</li>
      <li><strong>Billie Eilish</strong> perfected the whisper-chest approach — breathy, low, incredibly intimate. Not a flaw — a choice.</li>
    </ul>`,
    links: [
      { label: 'Chest, Head & Mixed Voice — Registers Explained', url: 'https://www.youtube.com/watch?v=LPg5Osmcs4Y' }
    ]
  },
  {
    icon: '🔀',
    title: 'The Passaggio — How Masters Cross the Bridge',
    body: `<p>The <strong>passaggio</strong> is the transition between chest and head voice — where voices crack or thin out. Every singer has one. What separates masters is how invisible they make it.</p>
    <ul>
      <li><strong>Freddie Mercury</strong> had virtually no audible passaggio — he trained it completely smooth over decades.</li>
      <li><strong>Sam Smith</strong> uses controlled cracks through the passaggio as an emotional device (listen to "Stay With Me"). The crack is part of the performance.</li>
      <li><strong>Males</strong> typically hit passaggio around E4–G4. <strong>Females</strong> around A4–C5.</li>
    </ul>
    <p>The <strong>Vocal Siren</strong> exercise (Warm-up tab) is specifically designed to smooth this. Slide through it, don't jump. The goal: no seam, just a continuous sound from bottom to top.</p>`,
    links: [
      { label: 'How To Sing Over The Passaggio', url: 'https://www.youtube.com/watch?v=BmV1uUMlN28' },
      { label: 'Fix Your Vocal Break — Exercises', url: 'https://www.youtube.com/watch?v=ZDoQ8OdtWxE' }
    ]
  },
  {
    icon: '🌊',
    title: 'Vibrato — The Natural Oscillation',
    body: `<p>Vibrato is the gentle pitch oscillation that gives a sustained note warmth and life. The key insight: <strong>you don't produce vibrato — you allow it</strong>.</p>
    <ul>
      <li><strong>Celine Dion's vibrato</strong> is wide and operatic — comes from deep diaphragm support and a completely relaxed throat.</li>
      <li><strong>Frank Sinatra</strong> had a subtler "swing" vibrato — barely perceptible oscillation that made long notes breathe without wobbling.</li>
      <li><strong>Jeff Buckley</strong> used vibrato as emotional texture — it appeared only when the moment called for it.</li>
    </ul>
    <p><strong>How to develop it:</strong> hold a comfortable note at 70% volume with full breath support. Don't try to wiggle the pitch. Just hold, breathe, relax the jaw and throat. After 8–10 seconds, some singers start to feel a natural oscillation appear. That's it — that's vibrato being born. Chase it by relaxing, never by forcing.</p>
    <p>⚠️ Forced vibrato (manually wobbling the jaw or larynx) sounds immediately fake and creates bad habits.</p>`,
    links: []
  },
  {
    icon: '🎵',
    title: 'Runs & Riffs — Vocal Gymnastics',
    body: `<p><strong>Mariah Carey's runs are not improvised.</strong> Every melismatic line is meticulously crafted and drilled hundreds of times. Vocal agility is a skill, not a gift.</p>
    <p><strong>How to start building runs:</strong></p>
    <ol>
      <li>Pick 3 notes: root → 2nd → root (e.g. C → D → C). Sing them fast on "la la la". That's a run.</li>
      <li>Expand: root → 3rd → 5th → 3rd → root. Still fast, still clean.</li>
      <li>Learn the scale in your sweet spot key. Runs are just fast scale fragments.</li>
      <li>Practice at 50% speed until clean. Then 75%. Then full tempo.</li>
    </ol>
    <p><strong>Ariana Grande's style</strong> — short ornaments, whisper tone entry, then full voice. She doesn't run through whole scales; she uses 3–5 note ornaments placed at emotional peaks.</p>
    <p>Producer tip: record your runs dry at low tempo, then time-stretch + re-pitch in the DAW as a creative tool.</p>`,
    links: []
  },
  {
    icon: '🎼',
    title: 'Finding Your Key — Use Your Range Data',
    body: `<p>Singing in the wrong key is the single most common reason home recordings sound strained. Your voice has a natural sweet zone — the key should bring the melody there.</p>
    <ol>
      <li>Complete the <strong>Vocal Range Test</strong> (Tuner tab) — the app will identify your sweet spot.</li>
      <li>Hit <strong>"Try in Practice →"</strong> to auto-set the key to your range.</li>
      <li>In your DAW, transpose the chord progression to match. The listener never knows — key is invisible.</li>
      <li>Melodies should sit in the <strong>middle 60% of your range</strong> — the top and bottom 20% are reserve for emotional peaks and whisper lows.</li>
    </ol>
    <p><em>"If I'm straining, the key is wrong. I transpose until I'm not."</em> — The mindset of every working session vocalist.</p>`,
    links: [
      { label: 'Find the Best Key for Your Voice (30 Day Singer)', url: 'https://www.youtube.com/watch?v=qkdoJT72GmY' }
    ]
  },
  {
    icon: '🤖',
    title: 'Pitch Correction — Polish, Not a Crutch',
    body: `<p><strong>Auto-Tune doesn't fix bad singing</strong> — it polishes performances that are already in the right ballpark. Great singers use it as a final 10%, not a foundation.</p>
    <ul>
      <li><strong>Retune speed:</strong> slow (80–100ms) = transparent, organic. Fast (0ms) = robotic effect (T-Pain, Travis Scott). Both are valid — pick your style.</li>
      <li><strong>Melodyne</strong> = manual, note-by-note. Best for realistic results on acoustic/emotional vocals. Drag each blob to its center pitch.</li>
      <li><strong>Leave emotion alone:</strong> Jeff Buckley's voice cracks. Kurt Cobain's wavering pitch. These are the performance — don't fix them. Correct intonation errors, preserve emotion.</li>
      <li><strong>Comp first:</strong> select the best take before correcting. Pitch correction applied to a weak performance just sounds like a corrected weak performance.</li>
    </ul>`,
    links: [
      { label: 'Melodyne Pitch Correction — Berklee Online', url: 'https://www.youtube.com/watch?v=qLRJbSo0bG0' }
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
    const savedScores = loadVoiceLabScores();
    grid.innerHTML = EXERCISES.map(ex => {
      const sessions = savedScores[ex.id]?.sessions || [];
      const lastScore = sessions.length > 0 ? sessions[sessions.length - 1].score : null;
      const scoreBadge = (lastScore !== null && ex.needsMic)
        ? `<span class="ex-score-badge">Last: ${lastScore}%</span>` : '';
      return `
        <div class="ex-card" data-id="${ex.id}">
          <div class="ex-card-icon">${ex.icon}</div>
          <div class="ex-card-body">
            <div class="ex-card-title">${ex.title}</div>
            <div class="ex-card-sub">${ex.subtitle}</div>
            <div class="ex-card-tags">
              ${ex.needsMic ? '<span class="mic-badge">🎙️ Mic</span>' : ''}
              ${scoreBadge}
            </div>
          </div>
          <button class="ex-card-btn">Start →</button>
        </div>
      `;
    }).join('');
    grid.querySelectorAll('.ex-card').forEach(card => {
      card.querySelector('.ex-card-btn').addEventListener('click', () => {
        this.exerciseModal.open(card.dataset.id);
      });
    });
    this._updateRangeBanner();
    this.exerciseModal.onSessionComplete = (exId, score) => {
      const card = grid.querySelector(`.ex-card[data-id="${exId}"]`);
      if (!card) return;
      const tags = card.querySelector('.ex-card-tags');
      let badge = tags.querySelector('.ex-score-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'ex-score-badge';
        tags.appendChild(badge);
      }
      badge.textContent = `Last: ${score}%`;
    };
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

    try {
      localStorage.setItem('voicelab_range', JSON.stringify({
        lowMidi: low, highMidi: high,
        sweetLow: sweet.low, sweetHigh: sweet.high,
        voiceType: vtype.type
      }));
    } catch(e) {}
    this._updateRangeBanner();

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

  _updateRangeBanner() {
    const banner = document.getElementById('rangeBanner');
    if (!banner) return;
    let range = null;
    try { range = JSON.parse(localStorage.getItem('voicelab_range') || 'null'); } catch(e) {}
    if (range) {
      banner.className = 'range-banner range-banner--set';
      banner.innerHTML = `<span class="rb-icon">✅</span><span>Your range is set — <strong>${range.voiceType}</strong>, sweet spot tuned into all exercises.</span>`;
    } else {
      banner.className = 'range-banner range-banner--unset';
      banner.innerHTML = `<span class="rb-icon">📏</span><span><strong>Do your Vocal Range Test first!</strong> All exercises will be tuned to your voice. <button class="rb-link" id="rbGoTuner">Go to Tuner →</button></span>`;
      setTimeout(() => {
        const btn = document.getElementById('rbGoTuner');
        if (btn) btn.addEventListener('click', () => document.querySelector('[data-tab="tuner"]').click());
      }, 0);
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
