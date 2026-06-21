'use strict';

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
    this.modalIcon.textContent = this.ex.icon;
    this.modalTitle.textContent = this.ex.title;
    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (this.ex.type === 'instruction') this._renderInstruction();
    else this._renderPitch();
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

    document.getElementById('exHearBtn').addEventListener('click', () => {
      const t = ex.sequence[this.seqIdx];
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

      const t = this.ex.sequence[this.seqIdx];
      const diff = PitchDetector.centsOff(note, octave, Math.round(this.smoothCents), t.note, t.octave);
      const pct = Math.max(0, 100 - diff * 2);
      fillEl.style.width = pct + '%';
      fillEl.style.background = pct > 80 ? 'var(--green)' : pct > 50 ? 'var(--yellow)' : 'var(--red)';

      if (pct > 80) {
        accEl.textContent = '🟢 IN TUNE! Hold it...';
        accEl.style.color = 'var(--green)';
        if (!this.locked) {
          this.locked = true;
          this.lockTimer = setTimeout(() => {
            if (this.locked) accEl.textContent = '🟢 Perfect! Tap Next ↓';
          }, 1500);
        }
      } else if (pct > 50) {
        accEl.textContent = '🟡 Getting close...';
        accEl.style.color = 'var(--yellow)';
        this.locked = false; clearTimeout(this.lockTimer);
      } else {
        accEl.textContent = '🔴 Keep adjusting...';
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
    this.seqIdx++;
    this.locked = false;
    clearTimeout(this.lockTimer);
    const ex = this.ex;
    if (this.seqIdx >= ex.sequence.length) {
      this._stopDetector();
      const acc = document.getElementById('exAccuracy');
      if (acc) { acc.textContent = '🎉 Exercise complete!'; acc.style.color = 'var(--cyan)'; }
      document.getElementById('exAdvBtn').style.display = 'none';
      document.getElementById('exFinishBtn').style.display = '';
      return;
    }
    this._updateSeqDisplay();
    this._updatePitchTarget();
    document.getElementById('exPrevBtn').disabled = this.seqIdx === 0;
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
    seq.innerHTML = this.ex.sequence.map((s, i) => `
      <div class="seq-dot ${i === this.seqIdx ? 'active' : i < this.seqIdx ? 'done' : ''}">
        <span>${s.note}${s.octave}</span>
        <span class="seq-label">${s.label}</span>
      </div>
    `).join('');
  }

  _updatePitchTarget() {
    const t = this.ex.sequence[this.seqIdx];
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
