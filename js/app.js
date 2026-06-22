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
  ,
  {
    icon: '⚠️',
    title: 'Voice Health — Protect Your Most Valuable Instrument',
    accent: 'health',
    body: `<p>Your voice is irreplaceable. Singing through pain or strain doesn't build toughness — it builds scar tissue. Treat your voice like an elite athlete treats their body: train intelligently, rest deliberately.</p>
    <p><strong>🛑 Stop immediately if you feel:</strong></p>
    <ul>
      <li><strong>Pain</strong> in your throat while singing — even mild pain is a red flag</li>
      <li><strong>Persistent hoarseness</strong> lasting more than 2 days</li>
      <li><strong>Loss of range</strong> that doesn't clear after a full night's sleep</li>
      <li><strong>A "clicking" or "catching" sensation</strong> mid-phrase — this can signal nodules</li>
    </ul>
    <p><strong>✅ Daily voice care habits:</strong></p>
    <ul>
      <li><strong>Hydration:</strong> 2L of room-temperature water on practice days. Your vocal cords are mucous membranes — they need moisture from the inside out. Coffee and alcohol dehydrate. Dairy creates mucus. Avoid both before singing.</li>
      <li><strong>Warm up every single time</strong> — never sing cold. Even humming on the way to the studio counts.</li>
      <li><strong>Max session length:</strong> Beginners should cap at 20 min of active singing. Intermediate: 30 min. Advanced: 45 min. <em>These are hard limits, not targets.</em></li>
      <li><strong>Rest days:</strong> Take at least 2 full voice-rest days per week. Your voice is a muscle; it grows during recovery, not during use.</li>
      <li><strong>Sleep matters:</strong> Voice quality tracks closely with sleep. 7–8 hours before a recording session is not optional.</li>
    </ul>
    <p><strong>🤒 If you're hoarse:</strong></p>
    <ul>
      <li>Don't whisper — whispering actually strains the cords MORE than speaking normally</li>
      <li>Steam inhalation (not too hot, 5–10 min) helps soothe inflammation</li>
      <li>Honey + warm water + small amount of lemon is a classic soothing drink</li>
      <li>One bad session of overuse can cost you 2 weeks of recovery. Not worth it.</li>
    </ul>
    <p><em>Professional touring singers typically sing 3–4 days per week maximum, not 7. Rest is training.</em></p>`,
    links: [
      { label: 'Vocal Health — The Real Rules (The Vocalist Studio)', url: 'https://www.youtube.com/results?search_query=vocal+health+care+tips+singer' }
    ]
  },
  {
    icon: '📡',
    title: 'Resonance — Where Sound Physically Lives',
    body: `<p>Your voice doesn't come from your throat — it resonates through chambers in your body. Understanding resonance is the difference between a thin, pushed sound and a full, effortless one.</p>
    <p><strong>Three resonance spaces:</strong></p>
    <ul>
      <li><strong>Chest resonance</strong> — you feel vibration in your sternum (breastbone). This is your speaking voice register. Warm, powerful, grounded. Put your hand on your chest and speak — you'll feel it vibrating.</li>
      <li><strong>Head resonance</strong> — vibration moves up behind your eyes and into your skull. Lighter, more delicate. Associated with high notes and falsetto.</li>
      <li><strong>Mask resonance (twang/forward placement)</strong> — buzzing in your sinuses and nose, forward on the face. This is the "call" position — the bright, cutting tone that projects in a room. Think of a nasal "nay nay nay" — that's mask resonance at full brightness.</li>
    </ul>
    <p><strong>Artist examples:</strong></p>
    <ul>
      <li><strong>Barry White / Nick Cave</strong> — almost pure chest resonance. Deep, warm, room-filling.</li>
      <li><strong>Dolly Parton / Ariana Grande (high notes)</strong> — head resonance. Bright, floaty, pure.</li>
      <li><strong>AC/DC's Brian Johnson / Dolly Parton (speaking voice)</strong> — heavy mask resonance. Forward, cutting, easy to project.</li>
    </ul>
    <p><strong>Practice drill — resonance mapping:</strong> Hum at a comfortable mid-range pitch. Put one hand on your chest, one on the front of your face. Feel where the buzz is. Now slide slowly upward. Notice how the chest buzz fades and the head buzz increases. That transition point is your bridge (passaggio).</p>
    <p>The goal isn't to stay in one space — it's to blend them. Mixed voice = chest + head resonance working simultaneously. This is the sweet spot for most contemporary genres.</p>`,
    links: [
      { label: 'Chest Voice vs Head Voice vs Mixed Voice (Singing Success)', url: 'https://www.youtube.com/results?search_query=chest+voice+head+voice+mixed+resonance+explained' }
    ]
  },
  {
    icon: '📈',
    title: 'Dynamics & Phrase Shaping — Tell the Story',
    body: `<p>Most beginners sing at one volume: medium. Professional singers treat volume, intensity, and tone colour as instruments in themselves. A song is a story; dynamics are the punctuation.</p>
    <p><strong>The four dynamic tools:</strong></p>
    <ul>
      <li><strong>Volume (loud/soft)</strong> — the most obvious, but the last resort. A sudden soft moment is more powerful than a sudden loud one.</li>
      <li><strong>Intensity (breathiness vs pure tone)</strong> — a breathy note at full volume reads as intimate. A pure, clear note at half volume reads as confident. These are emotions you can mix.</li>
      <li><strong>Tone colour (bright vs dark, chest vs head)</strong> — brightening your tone on a key lyric ("I'll never <em>let you go</em>") emphasizes without changing volume at all.</li>
      <li><strong>Timing (push/pull against the beat)</strong> — singing slightly behind the beat adds gravity and emotion. Slightly ahead adds urgency. This is called "feel" and it's what separates a listenable vocal from a great one.</li>
    </ul>
    <p><strong>How to practice phrase shaping:</strong></p>
    <ol>
      <li>Pick one line of a song you know well.</li>
      <li>Sing it 4 times in a row, each time emphasizing a different word. Notice how the meaning shifts.</li>
      <li>Sing it once starting at pianissimo (nearly silent), building to full voice by the last word.</li>
      <li>Sing it in reverse: start full, end whisper. Which version serves the lyric?</li>
    </ol>
    <p><strong>Artist models:</strong> Adele builds phrases to a peak word, then drops off. Frank Sinatra uses delay (sings behind the beat) for emotional weight. Radiohead's Thom Yorke drops to a near-spoken whisper at key moments to create tension before the chorus hits.</p>
    <p><em>The goal isn't to be louder — it's to make every volume choice intentional.</em></p>`,
    links: [
      { label: 'Vocal Dynamics — How Pros Shape Phrases (Eric Arceneaux)', url: 'https://www.youtube.com/results?search_query=vocal+dynamics+phrase+shaping+singing+tips' }
    ]
  },
  {
    icon: '👂',
    title: 'Ear Training — Hear What You\'re Actually Doing',
    body: `<p>Pitch problems are ear problems before they're voice problems. If you can't <em>hear</em> whether you're in tune, your voice has no target to aim for. Ear training is the foundation under every other technique.</p>
    <p><strong>The two skills to develop:</strong></p>
    <ul>
      <li><strong>Interval recognition</strong> — being able to hear and reproduce the gap between two notes. "Do Re Mi" is about intervals: each syllable is a fixed interval above Do. Once you internalize these, you can hear any melody as a series of jumps.</li>
      <li><strong>Relative pitch</strong> — hearing a note and knowing where it sits relative to a key. This is what lets you sing back a melody after hearing it once. Perfect pitch (hearing a note and naming it without reference) is rare and not necessary — relative pitch is the skill that matters for singers.</li>
    </ul>
    <p><strong>Practice routine (10 min daily, standalone):</strong></p>
    <ol>
      <li><strong>Sing along to a recording</strong> — not karaoke, but following the actual lead vocal. Match tone, timing, vibrato, phrasing. This is the oldest and most effective ear training method.</li>
      <li><strong>Use the Tuner tab</strong> — play a reference tone, stop it, then try to sing it. Check how close you were. Do this with random notes across your range.</li>
      <li><strong>Transcribe melodies by ear</strong> — pick a simple hook (4–8 notes) and figure it out on a piano/keyboard app. This forces active listening.</li>
      <li><strong>The VoiceLab Practice tab</strong> — does exactly this: plays you a note, you sing it, it tells you how close. Do 5 minutes of this before every session.</li>
    </ol>
    <p><strong>Famous "bad" singer myth:</strong> Almost everyone who thinks they can't sing is an ear training problem, not a vocal problem. The voice can learn to produce any pitch — the ear has to learn to verify it first.</p>
    <p><em>You cannot hear yourself accurately while singing. You only hear yourself through bone conduction, which adds bass and removes highs. Recording yourself is not optional — it's how you actually hear what you're doing.</em></p>`,
    links: [
      { label: 'Ear Training for Singers — 3 Essential Drills (Brett Manning)', url: 'https://www.youtube.com/results?search_query=ear+training+for+singers+pitch+accuracy+drills' }
    ]
  },
  {
    icon: '🧠',
    title: 'The Recording Mindset — Get Out of Your Own Way',
    body: `<p>Recording your own voice is one of the most psychologically exposed experiences in music. The gear is set up. The DAW is open. The mic is on. And then the inner critic arrives.</p>
    <p><strong>What actually happens in the studio:</strong></p>
    <ul>
      <li>Your voice will sound different through the mic than in your head. Always. This is normal — you're used to bone conduction. The mic hears what the world hears.</li>
      <li>Take 1 is almost never the best take. Take 1 is for getting loose. Takes 3–5 are usually gold.</li>
      <li>Imperfection is not failure. A slightly flat note on a great emotional performance beats a perfectly in-tune mechanical one.</li>
    </ul>
    <p><strong>The pro mindset framework:</strong></p>
    <ol>
      <li><strong>Warm up fully before pressing record</strong> — your voice needs 10–15 min before it sounds like itself. Recording a cold voice is a waste of takes.</li>
      <li><strong>Commit to the take</strong> — stop self-monitoring while singing. Decide before you press record: this take is going all-in. You can fix pitch later; you can't add conviction.</li>
      <li><strong>Separate creation from judgment</strong> — while recording, you're a performer. After the session, you're a producer listening critically. These are different modes. Don't switch mid-take.</li>
      <li><strong>Give yourself 3 complete takes before stopping</strong> — even if take 1 feels great. Take 2 is often better because you're looser. Take 3 is often the keeper.</li>
      <li><strong>Rest between takes</strong> — 2–3 minutes. Walk around. Drink water. Come back fresh. Rushed takes sound rushed.</li>
    </ol>
    <p><strong>On listening back:</strong> The first time you hear yourself recorded, it sounds wrong. This feeling lasts 2–3 sessions and then passes. Your ear adjusts to how you sound externally. By session 5, you'll hear it accurately. By session 10, you'll be making production decisions based on it.</p>
    <p><em>"I never listen to myself while I'm recording. I record, then I listen." — Frank Ocean</em></p>`,
    links: [
      { label: 'Recording Your Voice at Home — Mindset & Setup (Produce Like A Pro)', url: 'https://www.youtube.com/results?search_query=recording+vocals+at+home+mindset+tips+producer' }
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

const STUDIO_SECTIONS = [
  {
    icon: '🔌',
    title: 'Signal Chain — How Audio Gets In',
    body: `<p>Everything starts here. Two common setups:</p>
    <div class="chain-row"><span class="chain-node">🎤 Mic</span><span class="chain-arr">→</span><span class="chain-node">USB Mixer</span><span class="chain-arr">→</span><span class="chain-node">USB</span><span class="chain-arr">→</span><span class="chain-node">💻 Ableton</span></div>
    <div class="chain-row"><span class="chain-node">🎤 Mic</span><span class="chain-arr">→</span><span class="chain-node">Audio Interface</span><span class="chain-arr">→</span><span class="chain-node">USB / Thunderbolt</span><span class="chain-arr">→</span><span class="chain-node">💻 Ableton</span></div>
    <p>A <strong>USB mixer</strong> (Yamaha AG, Behringer Xenyx, Mackie) is already an audio interface — no extra gear needed. Plug it in and Ableton sees it as an input device.</p>
    <ul>
      <li>Always use a <strong>pop filter</strong> — removes P/B plosives that clip the mic.</li>
      <li>Mic distance: <strong>15–25 cm</strong>. Closer = more bass proximity. Further = more room.</li>
      <li>Point mic <strong>slightly off-axis</strong> (tilted down) to reduce sibilance.</li>
    </ul>`
  },
  {
    icon: '⚙️',
    title: 'Ableton Audio Setup — Step by Step',
    body: `<ol>
      <li><strong>Preferences → Audio</strong> (Ctrl+, on Windows, Cmd+, on Mac)</li>
      <li>Driver Type: <strong>ASIO</strong> (Windows) or <strong>CoreAudio</strong> (Mac). If ASIO isn't listed, install the free <em>ASIO4ALL</em> driver.</li>
      <li>Audio Device: select your mixer/interface (e.g. "Xenyx Q802 USB" or "Focusrite USB ASIO").</li>
      <li>Click <strong>Input Config</strong> → activate the stereo pair your mic comes in on (usually 1/2).</li>
      <li>Buffer size: set to <strong>128 or 256 samples</strong> for low latency while recording.</li>
      <li>Create an <strong>Audio Track</strong> (Ctrl+T) → set Input Type to "Ext. In" → Input Channel to your mic pair.</li>
      <li>Set Monitor to <strong>"Auto"</strong> (you'll hear yourself only when the track is armed).</li>
      <li><strong>Arm the track</strong> 🔴 and sing — you should see the level meter move.</li>
    </ol>
    <p>⚠️ If you hear an echo while singing: go to Preferences → Audio → reduce Buffer Size to 128 samples (< 10 ms round-trip).</p>`
  },
  {
    icon: '🎯',
    title: 'Recording Levels — Get This Right First',
    body: `<p>The single most important thing before recording a take:</p>
    <ul>
      <li><strong>Target: −18 to −12 dBFS peak</strong> on the loudest phrase.</li>
      <li>Too loud → clipping → permanently distorted. No plugin fixes clipping.</li>
      <li>Too quiet → thin, noisy. But fixable — just turn it up in the DAW.</li>
    </ul>
    <p><strong>How to set it:</strong> Sing your loudest phrase while watching the track meter in Ableton. Adjust your mic gain (on the mixer/interface) until the peak is around −12 dBFS. Then record.</p>
    <p><strong>Never use Ableton's track volume to control input level</strong> — that's post-record gain. Adjust the physical gain knob on your interface or mixer.</p>
    <p>💡 Leave headroom. You can always turn it up later. You can never unclip.</p>`
  },
  {
    icon: '🎚️',
    title: 'Multiple Takes & Comping',
    body: `<p>Professional vocals are almost never a single take — they're a <strong>composite (comp)</strong> of the best phrases from multiple passes.</p>
    <p><strong>Workflow:</strong></p>
    <ol>
      <li>Set loop markers around your section (drag in the Arrangement timeline).</li>
      <li>Enable Loop: click the Loop button in the top toolbar.</li>
      <li>Hit record and sing through 3–5 times. Each loop creates a new "take lane" (click the small arrow on the clip to see them).</li>
      <li>Listen to each take lane. Alt+drag the best phrase from each take into a new "master" take.</li>
      <li>Apply crossfades at the edit points (select both clips → Ctrl+Alt+F) for smooth transitions.</li>
    </ol>
    <p>Most great vocals you've ever heard were comped from 5–20 takes. Don't pressure yourself to nail it in one.</p>`
  },
  {
    icon: '⚗️',
    title: 'The Vocal Effects Chain',
    body: `<p>Insert these in order on your vocal track (drag from the Audio Effects browser):</p>
    <div class="fx-chain">
      <div class="fx-node"><span class="fx-num">1</span><span class="fx-name">EQ Eight</span><span class="fx-desc">High-pass at 80–100 Hz (remove rumble). Small cut at 250–400 Hz (boxiness). Optional boost at 3–5 kHz (presence).</span></div>
      <div class="fx-node"><span class="fx-num">2</span><span class="fx-name">Compressor</span><span class="fx-desc">Ratio 4:1 · Attack 10 ms · Release 100 ms · Threshold until 3–6 dB gain reduction. Tames peaks, glues the vocal.</span></div>
      <div class="fx-node"><span class="fx-num">3</span><span class="fx-name">EQ Eight</span><span class="fx-desc">Second EQ after comp. Fine-tune: cut any harshness, add air above 10 kHz if needed.</span></div>
      <div class="fx-node"><span class="fx-num">4</span><span class="fx-name">Reverb <em>(return track)</em></span><span class="fx-desc">Create a Return track (Ctrl+Alt+T). Add Reverb there. Send from your vocal at −12 dB. Never use reverb as a direct insert — you can't control wet/dry properly.</span></div>
      <div class="fx-node"><span class="fx-num">5</span><span class="fx-name">Delay <em>(return track)</em></span><span class="fx-desc">Add Delay on a second Return track. Set Note Sync on. Start at 1/8 note. Send at −18 dB for subtle depth.</span></div>
    </div>
    <p>💡 Add a <strong>Limiter</strong> at the very end of the chain if you're bouncing a rough mix — ceiling at −1 dBFS.</p>`
  },
  {
    icon: '🎤',
    title: 'Pitch Correction in Ableton',
    body: `<p>Two approaches, each for different goals:</p>
    <p><strong>Stock — Pitch Correction MIDI device:</strong> From the MIDI Effects browser, drag "Pitch Correction" onto the track. Set your key and scale. Works well for transparent, light correction. Does NOT do the T-Pain effect.</p>
    <p><strong>Melodyne (recommended):</strong> If you have Melodyne as an ARA plugin — open the clip → Extensions → Edit in Melodyne. Each note appears as a colored blob. Drag blobs onto the correct pitch line. Fix intonation errors while keeping natural expression.</p>
    <p><strong>Manual clip editing:</strong> Duplicate the clip → use "Convert Melody to New MIDI Track" → warp the MIDI to correct timing, then use a stock synth to double your vocal at perfect pitch (buried low in the mix for subtle tuning support).</p>
    <p>⚠️ Don't pitch-correct emotional moments (voice cracks, subtle flat notes for feel). Leave those alone — they're the performance.</p>`
  }
];

const SONGS_BY_VOICE = {
  'Bass 🟤': [
    { title: 'Ring of Fire', artist: 'Johnny Cash', key: 'G', vibe: 'Country rock' },
    { title: 'Hurt', artist: 'Johnny Cash', key: 'Am', vibe: 'Dark ballad' },
    { title: 'Ain\'t No Sunshine', artist: 'Bill Withers', key: 'Am', vibe: 'Soul' },
    { title: 'Nature Boy', artist: 'Nat King Cole', key: 'Cm', vibe: 'Jazz ballad' },
    { title: 'The Sound of Silence', artist: 'Simon & Garfunkel', key: 'Dm', vibe: 'Folk' },
    { title: 'Black', artist: 'Pearl Jam', key: 'E', vibe: 'Grunge rock' },
  ],
  'Baritone 🔵': [
    { title: 'Perfect', artist: 'Ed Sheeran', key: 'G', vibe: 'Pop ballad' },
    { title: 'Thinking Out Loud', artist: 'Ed Sheeran', key: 'D', vibe: 'Pop soul' },
    { title: 'Just the Way You Are', artist: 'Bruno Mars', key: 'F', vibe: 'R&B pop' },
    { title: 'Can\'t Help Falling in Love', artist: 'Elvis Presley', key: 'Bb', vibe: 'Classic ballad' },
    { title: 'Fly Me to the Moon', artist: 'Frank Sinatra', key: 'Am', vibe: 'Jazz standard' },
    { title: 'Demons', artist: 'Imagine Dragons', key: 'E', vibe: 'Alt rock' },
  ],
  'Tenor / Alto 🟣': [
    { title: 'Stay With Me', artist: 'Sam Smith', key: 'C', vibe: 'Soul pop' },
    { title: 'Thinking About You', artist: 'Frank Ocean', key: 'C#', vibe: 'R&B' },
    { title: 'Back to Black', artist: 'Amy Winehouse', key: 'Dm', vibe: 'Soul' },
    { title: 'Ocean Eyes', artist: 'Billie Eilish', key: 'B', vibe: 'Indie pop' },
    { title: 'Creep', artist: 'Radiohead', key: 'G', vibe: 'Alternative' },
    { title: 'Valerie', artist: 'Amy Winehouse', key: 'G', vibe: 'Soul pop' },
  ],
  'Mezzo-soprano 🟠': [
    { title: 'Someone Like You', artist: 'Adele', key: 'A', vibe: 'Pop ballad' },
    { title: 'Rolling in the Deep', artist: 'Adele', key: 'Cm', vibe: 'Soul pop' },
    { title: 'Halo', artist: 'Beyoncé', key: 'Eb', vibe: 'R&B pop' },
    { title: 'Video Games', artist: 'Lana Del Rey', key: 'C', vibe: 'Dream pop' },
    { title: 'Try', artist: 'P!nk', key: 'C', vibe: 'Pop rock' },
    { title: 'Skinny Love', artist: 'Birdy', key: 'C', vibe: 'Indie folk' },
  ],
  'Soprano 🟡': [
    { title: 'No Tears Left to Cry', artist: 'Ariana Grande', key: 'Bb', vibe: 'Pop' },
    { title: 'Hero', artist: 'Mariah Carey', key: 'F', vibe: 'Pop ballad' },
    { title: 'My Heart Will Go On', artist: 'Celine Dion', key: 'F', vibe: 'Film ballad' },
    { title: 'Greatest Love of All', artist: 'Whitney Houston', key: 'Ab', vibe: 'Soul ballad' },
    { title: 'God is a Woman', artist: 'Ariana Grande', key: 'Dm', vibe: 'Pop R&B' },
    { title: 'Defying Gravity', artist: 'Wicked', key: 'Ab', vibe: 'Musical theatre' },
  ],
};

const PROGRAM_WEEKS = [
  {
    week: 1, title: 'Meet Your Voice', phase: 'Foundation', phaseColor: 'blue',
    dailyMins: 10, daysOn: 5, daysOff: 2,
    exercises: ['Breathing & Posture', 'Lip Trill'],
    goals: ['Complete the Vocal Range Test (Tuner tab)', 'Do 5 warm-up sessions this week', 'Learn to breathe from your diaphragm — belly moves out, not chest up'],
    coach: 'This week is exploration, not performance. Sing freely, notice how different pitches feel in your body. There is no wrong answer — just data.',
    caution: '⚠️ If your throat hurts at any point — stop immediately. Mild fatigue is fine. Pain is not. Hoarseness after a 10-min session means the session was too hard — ease off.',
    health: '10 minutes genuinely is enough this week. Your laryngeal muscles are adapting to intentional use. Resist the urge to do more.',
  },
  {
    week: 2, title: 'Finding Your Range', phase: 'Foundation', phaseColor: 'blue',
    dailyMins: 12, daysOn: 5, daysOff: 2,
    exercises: ['Breathing & Posture', 'Lip Trill', 'Scale Drill (first attempts)'],
    goals: ['Complete the range test if not done in Week 1', 'Do the Scale Drill at least 3 times', 'Score 40%+ on at least one Scale Drill run'],
    coach: 'When your voice breaks going upward, that\'s your ceiling — note it and stop there. Don\'t push past the break. You\'ve found the edge of your current range, not a permanent limit.',
    caution: '⚠️ Never force high notes. A strained high note feels productive; it isn\'t. Consistent low-stakes drilling builds range far more safely than pushing.',
    health: 'After each session, cool down with 2 minutes of quiet humming — slide gently from top of range to bottom. This helps release tension and signals to your body the workout is done.',
  },
  {
    week: 3, title: 'Your Full Warm-Up Routine', phase: 'Foundation', phaseColor: 'blue',
    dailyMins: 15, daysOn: 5, daysOff: 2,
    exercises: ['All 6 exercises in sequence for the first time'],
    goals: ['Complete all 6 warm-up exercises in one session', 'Score 50%+ on the Scale Drill', 'Try the Vowel Sustain exercise and notice which vowel is hardest'],
    coach: 'The first time you do all 6 in a row, it will feel like a lot. That\'s fine — split into two 7-minute sessions if you need to. By the end of the week, one 15-minute run should feel manageable.',
    caution: '⚠️ Week 3 is when beginners get overconfident and start doing double sessions. Don\'t. 15 minutes of quality work beats 30 minutes of tired work.',
    health: 'At the end of Week 3, check in: Has your voice been consistently hoarse after sessions? If yes, take 2 full rest days before starting Week 4. This is not failure — it\'s your voice building correctly.',
  },
  {
    week: 4, title: 'Vowel Shaping', phase: 'Tone & Control', phaseColor: 'teal',
    dailyMins: 18, daysOn: 5, daysOff: 2,
    exercises: ['All 6 exercises', 'Extended focus: Vowel Sustain'],
    goals: ['Hold each vowel (Ah/Eh/Ih/Oh/Oo) cleanly for at least 4 seconds', 'Score 55%+ on the Vowel Sustain exercise', 'Notice where you feel vibration for each vowel — chest, face, throat?'],
    coach: 'Each vowel shapes your mouth, tongue, and soft palate differently — which changes where the sound resonates. Ah opens the back of the throat. Ih brings sound forward. Explore; don\'t force a uniform tone across vowels.',
    caution: '⚠️ Don\'t muscle through vowels. A tight jaw kills tone. If your jaw aches after singing, you\'re clenching. Let it hang loose — you should be able to fit two fingers between your back teeth while singing an open vowel.',
    health: 'Hydration is your best plugin: 2 litres of water on practice days. Room temperature. Not cold — cold tightens the throat.',
  },
  {
    week: 5, title: 'Pitch Accuracy', phase: 'Tone & Control', phaseColor: 'teal',
    dailyMins: 20, daysOn: 5, daysOff: 2,
    exercises: ['All 6 exercises', 'Practice tab: 5 min of note-matching at end of each session'],
    goals: ['Score 60%+ on the Scale Drill', 'Use the Practice tab at least 3 times', 'Sing a reference note from the Tuner without hearing it first — then check how close you were'],
    coach: 'The Practice tab is your pitch gym. It plays a note; you sing it; it tells you the gap. Do 5 minutes of this at the end of every session. Within 2 weeks, your accuracy will measurably improve.',
    caution: '⚠️ If you find yourself tensing your neck or shoulders to reach a pitch — stop. You\'re forcing. That tension is going into the cords, not the pitch. Relax, use more breath support instead.',
    health: 'Rest is when the training consolidates. After week 5, you have real muscle memory being built. Two full days off per week is not optional. Your voice grows during recovery, not during use.',
  },
  {
    week: 6, title: 'Crossing the Bridge', phase: 'Tone & Control', phaseColor: 'teal',
    dailyMins: 20, daysOn: 5, daysOff: 2,
    exercises: ['All 6 exercises', 'Extended focus: Octave Jump, Siren'],
    goals: ['Identify your exact passaggio (bridge) note — where your voice wants to flip', 'Cross your bridge smoothly at least 3 times in a row during Siren', 'Score 65%+ on the Scale Drill'],
    coach: 'The Octave Jump is designed to drag you across your passaggio. If your voice cracks, you found the spot — now smooth it. Imagine a car shifting gears seamlessly. If you hear the gear shift, practice the shift. The crack isn\'t the problem; it\'s the map.',
    caution: '⚠️ If you\'re forcing the upper note in the octave jump, take it down by a step or two. The bridge is smoothed by relaxation and support, not by effort.',
    health: 'The bridge is where many singers carry "knots" — stubborn rough transitions. These take weeks or months to smooth completely. Be patient with it. One week 6 will not fix what took years to develop.',
  },
  {
    week: 7, title: 'Dynamics & Emotion', phase: 'Expression', phaseColor: 'purple',
    dailyMins: 22, daysOn: 5, daysOff: 2,
    exercises: ['All 6 exercises', 'Siren with extended range (loud-to-whisper-to-loud)'],
    goals: ['Sing the same phrase at 3 different volumes while staying in tune', 'Try singing one phrase with and without vibrato — notice the difference', 'Score 65%+ on at least 3 different exercises'],
    coach: 'The Siren is the best dynamics exercise in existence. Smooth = skill. Make it as smooth as possible, from your lowest comfortable note to your highest, and back. Imagine pouring water from a container — no splashes, no gaps.',
    caution: '⚠️ Loud doesn\'t mean pushed. Loud means more airflow, more resonance, open throat. If you\'re getting louder by squeezing your throat, that\'s the wrong method. Back off volume until you find the open-throat version of loud.',
    health: 'By week 7, you might feel invincible. Don\'t add time because you feel good — 22 minutes is the ceiling for now. More intensity, not more duration.',
  },
  {
    week: 8, title: 'Natural Vibrato', phase: 'Expression', phaseColor: 'purple',
    dailyMins: 25, daysOn: 5, daysOff: 2,
    exercises: ['All 6 exercises', 'Sustained long tones: hold single notes for 15–20 seconds'],
    goals: ['Hold a sustained note for 15 seconds and feel/hear natural pitch oscillation begin', 'Score 70%+ on the Vowel Sustain exercise', 'Record yourself singing a sustained note and compare it to your Week 1 recording'],
    coach: 'Vibrato cannot be forced — it emerges when your voice is relaxed, supported, and sustained. Hold a medium-volume note and breathe into it. Don\'t wobble on purpose. The oscillation will appear on its own, usually in the last third of a long note.',
    caution: '⚠️ Don\'t manufacture a wobble to imitate vibrato. A forced wobble sounds unnatural and can create bad tension habits. Let it come naturally.',
    health: '25-minute sessions will now feel normal. If any session leaves your voice raspy afterward, take 48 hours off — not just one day. Raspy after a session is a signal you crossed the fatigue line.',
  },
  {
    week: 9, title: 'Sing a Real Song', phase: 'Expression', phaseColor: 'purple',
    dailyMins: 25, daysOn: 4, daysOff: 3,
    exercises: ['10 min warm-up (all 6)', '15 min song practice (verse + chorus)'],
    goals: ['Pick one song from your range-matched suggestions (Tuner tab)', 'Learn the verse and chorus by memory', 'Sing it all the way through, 3 times in a session'],
    coach: 'This is what weeks 1–8 built toward. Don\'t expect perfection — expect progress. A verse and a chorus, by memory, sung three times is a real milestone. The song will feel bigger than the exercises. It is.',
    caution: '⚠️ Songs demand more than exercises — you\'re tracking lyrics AND pitch AND emotion AND timing simultaneously. If you feel fatigue coming, cut the session short. Half a good take beats two exhausted ones.',
    health: 'Three rest days this week (not two). Song practice is significantly more demanding than exercises, and your voice needs more recovery. This is the week most people overtrain without realizing it.',
  },
  {
    week: 10, title: 'Studio Stamina', phase: 'Recording Ready', phaseColor: 'gold',
    dailyMins: 28, daysOn: 5, daysOff: 2,
    exercises: ['10 min warm-up', '18 min: sing your song 5 times in a row', 'Record yourself on any device and listen back'],
    goals: ['Sing your verse+chorus 5× consecutively, consistent quality all the way through', 'Record yourself and listen critically — identify 2 specific things to fix', 'Score 70%+ on the Scale Drill'],
    coach: 'Listening to yourself recorded is uncomfortable at first. Good. That discomfort is useful information. Your voice sounds different to the mic than inside your head — the mic is closer to truth. Use it.',
    caution: '⚠️ If takes 4 and 5 sound noticeably worse than take 1 — you hit your stamina limit. That data tells you your current ceiling: roughly 3–4 takes before quality drops. Now you know what to manage in a real session.',
    health: 'Recording sessions are deceptively tiring — 2 hours in a studio = more vocal load than 30 minutes of exercises. Never plan a heavy recording session the night before anything you need your voice for.',
  },
  {
    week: 11, title: 'Mic & Room Ready', phase: 'Recording Ready', phaseColor: 'gold',
    dailyMins: 30, daysOn: 4, daysOff: 3,
    exercises: ['10 min warm-up', '20 min: Studio tab workflow — signal chain, levels, FX chain'],
    goals: ['Set up your full signal chain using the Studio tab guide', 'Record one clean take of your chorus in Ableton', 'Apply the basic FX chain (EQ → Comp → Reverb send) and export the clip'],
    coach: 'The goal this week isn\'t a finished track — it\'s the workflow. You\'re learning the technical side so it stops competing with the performance. By the end of week 11, you should be able to go from off to recording in under 5 minutes.',
    caution: '⚠️ Technical frustration during recording is common. If you spend 45 min in settings without recording a note, stop — set up in a different session and come back to singing another time. Don\'t let the DAW eat your practice session.',
    health: 'It\'s week 11. You\'ve built real capability over 10 weeks. Take three rest days. Your voice has been working consistently — rest lets it consolidate everything before the final week.',
  },
  {
    week: 12, title: 'Record Your First Real Vocal', phase: 'Recording Ready', phaseColor: 'gold',
    dailyMins: 30, daysOn: 3, daysOff: 4,
    exercises: ['Full warm-up (15 min)', 'Record 3 complete takes of your full song in Ableton', 'Comp the best phrases → apply FX chain → export'],
    goals: ['Complete a full vocal track on a production you own', 'Comp your 3 takes into one best version', 'Export the stem — listen to it in headphones, on speakers, on your phone'],
    coach: 'This is what 12 weeks of work was for. The track doesn\'t need to be perfect — it needs to exist. A finished, imperfect vocal is infinitely more valuable than a perfect performance that never got recorded.',
    caution: '⚠️ In the excitement of week 12, many people push too hard. 3 complete takes of a full song in one session is enough. Diminishing returns kick in fast on takes 4, 5, 6.',
    health: 'After recording your first track — rest for 3 days minimum. You have just completed 12 weeks of vocal training. Celebrate. Hydrate. Let your voice fully recover before starting the next project.',
  },
];

const ACHIEVEMENTS = [
  { id: 'first_session',  icon: '🎙️', title: 'First Voice',     desc: 'Completed your very first exercise' },
  { id: 'ranged_in',      icon: '📏', title: 'Ranged In',        desc: 'Completed the Vocal Range Test' },
  { id: 'full_warmup',    icon: '💪', title: 'Full Workout',     desc: 'Completed all 6 warm-up exercises in one session' },
  { id: 'score_60',       icon: '⭐', title: 'Getting There',    desc: 'Scored 60%+ on any exercise' },
  { id: 'score_75',       icon: '🌟', title: 'Solid Singer',     desc: 'Scored 75%+ on any exercise' },
  { id: 'score_90',       icon: '💎', title: 'Pitch Perfect',    desc: 'Scored 90%+ on any exercise' },
  { id: 'streak_3',       icon: '🔥', title: 'On Fire',          desc: '3 days of practice in a row' },
  { id: 'streak_7',       icon: '🏆', title: 'Dedicated',        desc: '7-day practice streak' },
  { id: 'sessions_5',     icon: '🎵', title: 'Warming Up',       desc: '5 total sessions completed' },
  { id: 'sessions_20',    icon: '🎤', title: 'Real Singer',      desc: '20 sessions completed' },
  { id: 'week1_done',     icon: '📅', title: 'Week 1 Complete',  desc: 'Finished Week 1 of the 12-week program' },
  { id: 'improve_20',     icon: '📈', title: 'Rising Star',      desc: 'Improved any exercise score by 20%+ from first to latest' },
];

function loadActivity() {
  try { return JSON.parse(localStorage.getItem('voicelab_activity') || '[]'); } catch(e) { return []; }
}
function saveActivity(arr) { localStorage.setItem('voicelab_activity', JSON.stringify(arr)); }

function recordActivityToday() {
  const today = new Date().toISOString().slice(0,10);
  const arr = loadActivity();
  if (!arr.includes(today)) { arr.push(today); saveActivity(arr); }
}

function getStreak(activity) {
  if (!activity.length) return 0;
  const sorted = [...activity].sort().reverse();
  const today = new Date().toISOString().slice(0,10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0,10);
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;
  let streak = 1, prev = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    const prevDate = new Date(prev);
    const currDate = new Date(sorted[i]);
    const diff = Math.round((prevDate - currDate) / 86400000);
    if (diff === 1) { streak++; prev = sorted[i]; } else break;
  }
  return streak;
}

function getTotalSessions(scores) {
  return Math.max(0, ...Object.values(scores).map(s => s.sessions?.length || 0));
}

function getBestScore(scores) {
  let best = 0;
  Object.values(scores).forEach(s => {
    (s.sessions || []).forEach(sess => { if (sess.score > best) best = sess.score; });
  });
  return best;
}

function getAvgScore(scores, exId) {
  const sessions = scores[exId]?.sessions || [];
  if (!sessions.length) return null;
  return Math.round(sessions.reduce((s,x) => s + x.score, 0) / sessions.length);
}

function getImprovement(scores) {
  let bestImprovement = 0, bestExName = '';
  const names = { scale: 'Scale Drill', vowels: 'Vowel Sustain', octave: 'Octave Jump' };
  Object.entries(names).forEach(([id, name]) => {
    const sessions = scores[id]?.sessions || [];
    if (sessions.length >= 2) {
      const delta = sessions[sessions.length-1].score - sessions[0].score;
      if (delta > bestImprovement) { bestImprovement = delta; bestExName = name; }
    }
  });
  return { delta: bestImprovement, name: bestExName };
}

function loadEarnedAchievements() {
  try { return JSON.parse(localStorage.getItem('voicelab_achievements') || '[]'); } catch(e) { return []; }
}
function saveEarnedAchievements(arr) { localStorage.setItem('voicelab_achievements', JSON.stringify(arr)); }

function checkAchievements(scores, range, activity) {
  const earned = loadEarnedAchievements();
  const totalSessions = getTotalSessions(scores);
  const bestScore = getBestScore(scores);
  const streak = getStreak(activity);
  const prog = (() => { try { return JSON.parse(localStorage.getItem('voicelab_program') || 'null'); } catch(e) { return null; } })();
  const improvement = getImprovement(scores);

  const todayStr = new Date().toISOString().slice(0,10);
  const exercisesDoneToday = Object.keys(scores).filter(id => {
    const sessions = scores[id]?.sessions || [];
    return sessions.some(s => s.date === todayStr);
  });

  const conditions = {
    first_session:  totalSessions >= 1,
    ranged_in:      !!range,
    full_warmup:    exercisesDoneToday.length >= 6,
    score_60:       bestScore >= 60,
    score_75:       bestScore >= 75,
    score_90:       bestScore >= 90,
    streak_3:       streak >= 3,
    streak_7:       streak >= 7,
    sessions_5:     totalSessions >= 5,
    sessions_20:    totalSessions >= 20,
    week1_done:     !!(prog?.completedWeeks?.includes(1)),
    improve_20:     improvement.delta >= 20,
  };

  const newlyUnlocked = [];
  ACHIEVEMENTS.forEach(a => {
    if (!earned.includes(a.id) && conditions[a.id]) {
      earned.push(a.id);
      newlyUnlocked.push(a);
    }
  });
  if (newlyUnlocked.length) saveEarnedAchievements(earned);
  return newlyUnlocked;
}

function generateDailyPlan(scores, range) {
  const today = new Date().toISOString().slice(0,10);
  const totalSessions = getTotalSessions(scores);

  const pitchExs = [
    { id: 'scale',  name: 'Scale Drill' },
    { id: 'vowels', name: 'Vowel Sustain' },
    { id: 'octave', name: 'Octave Jump' },
  ].map(ex => {
    const sessions = scores[ex.id]?.sessions || [];
    const lastScore = sessions.length ? sessions[sessions.length-1].score : null;
    const avgScore  = sessions.length ? Math.round(sessions.reduce((s,x) => s+x.score,0) / sessions.length) : null;
    const lastDate  = sessions.length ? (sessions[sessions.length-1].date || null) : null;
    const daysSince = lastDate ? Math.max(0, Math.round((new Date(today) - new Date(lastDate)) / 86400000)) : 999;
    return { ...ex, lastScore, avgScore, daysSince };
  });

  const sorted = [...pitchExs].sort((a, b) => {
    if (a.avgScore === null && b.avgScore !== null) return -1;
    if (b.avgScore === null && a.avgScore !== null) return 1;
    if (a.daysSince >= 2 && b.daysSince < 2) return -1;
    if (b.daysSince >= 2 && a.daysSince < 2) return 1;
    return (a.avgScore || 0) - (b.avgScore || 0);
  });

  function reason(ex, isFocus) {
    if (ex.avgScore === null) return 'Not tried yet — give it your first go';
    if (isFocus && ex.avgScore < 60) return `Avg ${ex.avgScore}% — this is your growth edge today`;
    if (isFocus && ex.daysSince >= 2) return `${ex.daysSince} days since last session — good to revisit`;
    if (ex.avgScore >= 80) return `Strong at ${ex.avgScore}% — maintain and push for 90%`;
    if (ex.avgScore >= 60) return `Getting there at ${ex.avgScore}% — consistency will push you over 80%`;
    return `${ex.avgScore}% avg — a few focused reps will move this fast`;
  }

  const maxMins = totalSessions < 5 ? 20 : totalSessions < 10 ? 25 : 30;

  let insight = '';
  const imp = getImprovement(scores);
  const bestScore = getBestScore(scores);
  if (!range) insight = '📏 Do the Vocal Range Test first — all exercises will then tune to your voice.';
  else if (totalSessions === 0) insight = '🎙️ First session — explore freely. No pressure, just data.';
  else if (totalSessions < 5) insight = `Session ${totalSessions + 1} — you're building the foundation. Show up consistently and the voice follows.`;
  else if (imp.delta >= 15) insight = `📈 You improved ${imp.name} by ${imp.delta}% from your first session. That's real progress.`;
  else if (bestScore >= 80) insight = `🌟 You're hitting ${bestScore}% on your best exercise. Push the others to match it.`;
  else if (sorted[0].avgScore !== null && sorted[0].avgScore < 55) insight = `🎯 ${sorted[0].name} is your growth edge. Small wins here add up fast.`;
  else insight = '💡 Consistency beats intensity every time. 15 min today is more valuable than 60 min once a week.';

  return { sorted, reason, maxMins, insight };
}

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
    this._renderStudio();
    this._renderProgress();
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
        const tab = btn.dataset.tab;
        document.getElementById('tab-' + tab).classList.add('active');
        if (tab === 'progress') this._renderProgress();
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

    this._renderDailyPlan(grid);

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
      recordActivityToday();
      this._startSessionTimer();
      const scores2 = loadVoiceLabScores();
      const range2 = loadVoiceLabRange();
      const activity2 = loadActivity();
      const newAch = checkAchievements(scores2, range2, activity2);
      newAch.forEach((a, i) => setTimeout(() => this._showAchievementToast(a), i * 4000));
      if (document.getElementById('tab-progress')?.classList.contains('active')) {
        this._renderProgress();
      }
      const grid2 = document.getElementById('exerciseGrid');
      if (grid2) this._renderDailyPlan(grid2);
      this._renderExercises();
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

  // ---- PROGRESS TAB ----
  _renderProgress() {
    const el = document.getElementById('progressContent');
    if (!el) return;

    const scores = loadVoiceLabScores();
    const range = loadVoiceLabRange();
    const activity = loadActivity();
    const earned = loadEarnedAchievements();
    const streak = getStreak(activity);
    const totalSessions = getTotalSessions(scores);
    const bestScore = getBestScore(scores);
    const imp = getImprovement(scores);
    const prog = (() => { try { return JSON.parse(localStorage.getItem('voicelab_program') || 'null'); } catch(e) { return null; } })();

    const skills = {
      pitch:       getAvgScore(scores, 'scale') ?? 0,
      tone:        getAvgScore(scores, 'vowels') ?? 0,
      range:       getAvgScore(scores, 'octave') ?? 0,
      consistency: Math.min(100, Math.round((activity.length / 20) * 100)),
      sessions:    Math.min(100, Math.round((totalSessions / 20) * 100)),
    };
    const skillLabels = ['Pitch', 'Tone', 'Range', 'Consistency', 'Sessions'];
    const skillVals   = [skills.pitch, skills.tone, skills.range, skills.consistency, skills.sessions];

    const cx = 120, cy = 120, R = 90, N = 5;
    const angles = skillVals.map((_, i) => ((i * 2 * Math.PI) / N) - Math.PI / 2);
    function pt(r, i) {
      return { x: cx + r * Math.cos(angles[i]), y: cy + r * Math.sin(angles[i]) };
    }
    const gridLines = [25, 50, 75, 100].map(pct => {
      const r = R * pct / 100;
      const pts = angles.map((_,i) => pt(r, i));
      return `<polygon points="${pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')}" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>`;
    }).join('');
    const axisLines = angles.map((_, i) => {
      const p = pt(R, i);
      return `<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>`;
    }).join('');
    const dataPoints = skillVals.map((v, i) => pt(R * Math.max(0.04, v / 100), i));
    const polygon = `<polygon points="${dataPoints.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')}" fill="rgba(129,140,248,0.25)" stroke="#818cf8" stroke-width="2"/>`;
    const dots = dataPoints.map((p, i) => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="${skillVals[i] >= 70 ? '#4ade80' : skillVals[i] >= 40 ? '#818cf8' : '#475569'}"/>`).join('');
    const labels = angles.map((_, i) => {
      const p = pt(R + 18, i);
      const val = skillVals[i];
      return `<text x="${p.x.toFixed(1)}" y="${p.y.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" font-size="10" fill="${val >= 70 ? '#4ade80' : '#94a3b8'}" font-family="sans-serif">${skillLabels[i]}</text>`;
    }).join('');
    const radarSVG = `<svg viewBox="0 0 240 240" width="220" height="220" style="overflow:visible">${gridLines}${axisLines}${polygon}${dots}${labels}</svg>`;

    const exNames = { scale: 'Scale Drill', vowels: 'Vowel Sustain', octave: 'Octave Jump' };
    const historyBars = Object.entries(exNames).map(([id, name]) => {
      const sessions = (scores[id]?.sessions || []).slice(-7);
      if (!sessions.length) return `<div class="sh-row"><span class="sh-name">${name}</span><span class="sh-none">No sessions yet</span></div>`;
      const bars = sessions.map(s => {
        const h = Math.max(4, Math.round((s.score / 100) * 40));
        const col = s.score >= 80 ? '#4ade80' : s.score >= 60 ? '#818cf8' : '#f87171';
        return `<div class="sh-bar" style="height:${h}px;background:${col}" title="${s.score}%"></div>`;
      }).join('');
      const last = sessions[sessions.length-1].score;
      const trend = sessions.length > 1 ? sessions[sessions.length-1].score - sessions[0].score : 0;
      const trendStr = trend > 0 ? `<span style="color:#4ade80">↑${trend}%</span>` : trend < 0 ? `<span style="color:#f87171">↓${Math.abs(trend)}%</span>` : '';
      return `<div class="sh-row"><div class="sh-meta"><span class="sh-name">${name}</span><span class="sh-score">${last}% ${trendStr}</span></div><div class="sh-bars">${bars}</div></div>`;
    }).join('');

    const achievGrid = ACHIEVEMENTS.map(a => {
      const isEarned = earned.includes(a.id);
      return `<div class="ach-item ${isEarned ? 'ach-earned' : 'ach-locked'}" title="${a.desc}">
        <span class="ach-icon">${isEarned ? a.icon : '🔒'}</span>
        <span class="ach-title">${a.title}</span>
      </div>`;
    }).join('');

    const weekDays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const now = new Date();
    const dayOfWeek = (now.getDay() + 6) % 7;
    const weekDots = weekDays.map((d, i) => {
      const date = new Date(now);
      date.setDate(now.getDate() - dayOfWeek + i);
      const ds = date.toISOString().slice(0,10);
      const practiced = activity.includes(ds);
      const isFuture = i > dayOfWeek;
      return `<div class="week-dot-col"><div class="week-dot ${practiced ? 'week-dot--on' : isFuture ? 'week-dot--future' : 'week-dot--off'}"></div><span class="week-dot-lbl">${d}</span></div>`;
    }).join('');

    el.innerHTML = `
      <div class="prog-stats-row">
        <div class="prog-stat"><span class="prog-stat-n">${streak}</span><span class="prog-stat-l">🔥 Day streak</span></div>
        <div class="prog-stat"><span class="prog-stat-n">${totalSessions}</span><span class="prog-stat-l">Total sessions</span></div>
        <div class="prog-stat"><span class="prog-stat-n">${bestScore}%</span><span class="prog-stat-l">Best score</span></div>
        <div class="prog-stat"><span class="prog-stat-n">${earned.length}/${ACHIEVEMENTS.length}</span><span class="prog-stat-l">Achievements</span></div>
      </div>

      <div class="week-activity">
        <div class="week-activity-hdr">This week</div>
        <div class="week-dots">${weekDots}</div>
      </div>

      ${imp.delta >= 5 ? `<div class="insight-card">📈 ${imp.name} improved <strong>+${imp.delta}%</strong> from your first session to your latest. Keep going.</div>` : ''}

      <div class="section-sub-hdr">Skill Snapshot</div>
      <div class="radar-wrap">
        ${radarSVG}
        <div class="radar-legend">
          <div class="rl-item"><span class="rl-dot" style="background:#4ade80"></span>80%+</div>
          <div class="rl-item"><span class="rl-dot" style="background:#818cf8"></span>40–79%</div>
          <div class="rl-item"><span class="rl-dot" style="background:#475569"></span>Under 40%</div>
        </div>
      </div>

      <div class="section-sub-hdr">Score History <span style="font-size:0.72rem;color:var(--muted);font-weight:400">(last 7 sessions per exercise)</span></div>
      <div class="score-history">${historyBars}</div>

      <div class="section-sub-hdr">Achievements</div>
      <div class="achievements-grid">${achievGrid}</div>

      ${prog ? `<div class="prog-stat-prog">Program progress: Week ${prog.currentWeek}/12 · ${prog.completedWeeks?.length || 0} weeks complete</div>` : ''}
    `;
  }

  // ---- DAILY PLAN (replaces simple coach panel) ----
  _renderDailyPlan(grid) {
    const scores = loadVoiceLabScores();
    const range = loadVoiceLabRange();
    const { sorted, reason, maxMins, insight } = generateDailyPlan(scores, range);

    const planItems = sorted.map((ex, i) => {
      const isFocus = i === 0;
      return `<div class="dp-item ${isFocus ? 'dp-focus' : ''}">
        <span class="dp-num">${i + 1}</span>
        <span class="dp-name">${ex.name}</span>
        <span class="dp-reason">${reason(ex, isFocus)}</span>
        ${isFocus ? '<span class="dp-focus-badge">Focus</span>' : ''}
      </div>`;
    }).join('');

    const html = `<div class="daily-plan">
      <div class="dp-header">
        <div class="dp-insight">${insight}</div>
        <div class="dp-cap">⏱ Limit today: <strong>${maxMins} min</strong></div>
      </div>
      <div class="dp-order">
        <div class="dp-item dp-fixed"><span class="dp-num">→</span><span class="dp-name">Breathing</span><span class="dp-reason">Always first — foundation of everything</span></div>
        <div class="dp-item dp-fixed"><span class="dp-num">→</span><span class="dp-name">Lip Trill</span><span class="dp-reason">Low-resistance warm-up, protects cords</span></div>
        ${planItems}
        <div class="dp-item dp-fixed"><span class="dp-num">→</span><span class="dp-name">Siren</span><span class="dp-reason">Cool-down — always last</span></div>
      </div>
    </div>`;

    let planEl = document.getElementById('sessionCoach');
    if (!planEl) {
      planEl = document.createElement('div');
      planEl.id = 'sessionCoach';
      grid.parentNode.insertBefore(planEl, grid);
    }
    planEl.innerHTML = html;
  }

  // ---- SESSION TIMER ----
  _startSessionTimer() {
    if (this._timerInterval) return;
    const timerEl = document.getElementById('sessionTimer');
    const display = document.getElementById('timerDisplay');
    const warning = document.getElementById('timerWarning');
    if (!timerEl || !display) return;
    timerEl.classList.remove('hidden');
    const start = Date.now();
    this._timerInterval = setInterval(() => {
      const mins = Math.floor((Date.now() - start) / 60000);
      const secs = Math.floor(((Date.now() - start) % 60000) / 1000);
      display.textContent = `${mins}:${secs.toString().padStart(2,'0')}`;
      timerEl.className = 'session-timer';
      if (mins >= 30) {
        timerEl.classList.add('timer-red');
        warning.textContent = '— take a rest!';
      } else if (mins >= 20) {
        timerEl.classList.add('timer-yellow');
        warning.textContent = '— consider a break';
      } else {
        warning.textContent = '';
      }
    }, 1000);
  }

  // ---- ACHIEVEMENT TOAST ----
  _showAchievementToast(achievement) {
    const toast = document.getElementById('achievementToast');
    const name = document.getElementById('toastName');
    if (!toast || !name) return;
    toast.querySelector('.toast-badge').textContent = achievement.icon;
    name.textContent = `${achievement.title} — ${achievement.desc}`;
    toast.classList.remove('hidden');
    toast.classList.add('toast-show');
    setTimeout(() => {
      toast.classList.remove('toast-show');
      setTimeout(() => toast.classList.add('hidden'), 400);
    }, 3500);
  }

  // ---- THEORY ----
  _renderTheory() {
    this._renderProgram();
    const grid = document.getElementById('theoryGrid');
    grid.innerHTML = THEORY_CARDS.map((c, i) => `
      <div class="theory-card ${i === 0 ? 'open' : ''} ${c.accent ? 'theory-card--' + c.accent : ''}" data-idx="${i}">
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

    // Show song suggestions based on voice type
    const existing = document.getElementById('rangeSongs');
    if (existing) existing.remove();
    const songs = SONGS_BY_VOICE[vtype.type] || [];
    if (songs.length) {
      const songDiv = document.createElement('div');
      songDiv.id = 'rangeSongs';
      songDiv.className = 'range-songs';
      songDiv.innerHTML = `
        <div class="range-songs-hdr">🎵 Songs that fit your voice type</div>
        <p class="range-songs-sub">These work great in your range. Try them in your sweet spot key.</p>
        <div class="song-grid">
          ${songs.map(s => `
            <a class="song-card" href="https://www.youtube.com/results?search_query=${encodeURIComponent(s.artist + ' ' + s.title)}" target="_blank" rel="noopener noreferrer">
              <span class="song-key-badge">${s.key}</span>
              <span class="song-title">${s.title}</span>
              <span class="song-artist">${s.artist}</span>
              <span class="song-vibe">${s.vibe}</span>
            </a>
          `).join('')}
        </div>
      `;
      const rangeSection = document.querySelector('.range-section');
      if (rangeSection) rangeSection.appendChild(songDiv);
    }

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

  // ---- PROGRAM ----
  _renderProgram() {
    const section = document.getElementById('programSection');
    if (!section) return;

    function loadProg() {
      try { return JSON.parse(localStorage.getItem('voicelab_program') || 'null'); } catch(e) { return null; }
    }
    function saveProg(p) { localStorage.setItem('voicelab_program', JSON.stringify(p)); }

    let prog = loadProg();
    const phaseColors = { blue: '#818cf8', teal: '#22d3ee', purple: '#a78bfa', gold: '#fbbf24' };

    const render = () => {
      prog = loadProg();
      const started = !!prog;
      const currentWeek = prog?.currentWeek || 1;
      const completedGoals = prog?.completedGoals || {};
      const completedWeeks = prog?.completedWeeks || [];

      section.innerHTML = `
        <div class="prog-header">
          <div class="prog-header-text">
            <h3>🗓️ 12-Week Singing Program</h3>
            <p>${started ? `Week ${currentWeek} of 12 · ${completedWeeks.length} week${completedWeeks.length !== 1 ? 's' : ''} complete` : 'A realistic, voice-safe journey from scratch to recording-ready.'}</p>
          </div>
          ${!started ? `<button class="btn-primary btn-sm" id="progStart">Start Program</button>` : `<button class="btn-ghost btn-sm" id="progReset">↩ Reset</button>`}
        </div>
        ${started ? `<div class="prog-progress-bar"><div class="prog-progress-fill" style="width:${Math.round((completedWeeks.length / 12) * 100)}%"></div></div>` : ''}
        <div class="prog-weeks">
          ${PROGRAM_WEEKS.map(w => {
            const isDone = completedWeeks.includes(w.week);
            const isCurrent = started && w.week === currentWeek;
            const isLocked = started && w.week > currentWeek;
            const goals = completedGoals[w.week] || [];
            const allGoalsDone = goals.length >= w.goals.length;
            const color = phaseColors[w.phaseColor];
            return `
              <div class="prog-week ${isDone ? 'prog-done' : ''} ${isCurrent ? 'prog-current' : ''} ${isLocked ? 'prog-locked' : ''}">
                <div class="prog-week-hdr" data-week="${w.week}">
                  <span class="prog-week-num" style="background:${color}22;color:${color};border-color:${color}44">W${w.week}</span>
                  <span class="prog-phase-dot" style="background:${color}"></span>
                  <span class="prog-week-title">${w.title}</span>
                  <span class="prog-week-meta">${w.dailyMins} min · ${w.daysOn}d on · ${w.daysOff}d rest</span>
                  <span class="prog-week-status">${isDone ? '✅' : isCurrent ? '▶' : isLocked ? '🔒' : '▼'}</span>
                </div>
                <div class="prog-week-body" style="display:${isCurrent && !isDone ? 'block' : 'none'}">
                  <div class="prog-phase-badge" style="background:${color}22;color:${color}">${w.phase}</div>
                  <div class="prog-exercises"><strong>This week's exercises:</strong> ${w.exercises.join(' · ')}</div>
                  <div class="prog-goals-list">
                    ${w.goals.map((g, gi) => `
                      <label class="prog-goal ${goals.includes(gi) ? 'prog-goal--done' : ''}">
                        <input type="checkbox" class="prog-goal-cb" data-week="${w.week}" data-goal="${gi}" ${goals.includes(gi) ? 'checked' : ''} ${!isCurrent || isDone ? 'disabled' : ''}>
                        <span>${g}</span>
                      </label>
                    `).join('')}
                  </div>
                  <div class="prog-coach">${w.coach}</div>
                  <div class="prog-caution">${w.caution}</div>
                  <div class="prog-health-note">💧 ${w.health}</div>
                  ${isCurrent && allGoalsDone && !isDone ? `<button class="btn-primary btn-sm prog-complete-btn" data-week="${w.week}">Mark Week ${w.week} Complete →</button>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;

      // Events
      section.querySelector('#progStart')?.addEventListener('click', () => {
        saveProg({ currentWeek: 1, completedGoals: {}, completedWeeks: [], startDate: new Date().toISOString().slice(0,10) });
        render();
      });
      section.querySelector('#progReset')?.addEventListener('click', () => {
        if (confirm('Reset program progress?')) { localStorage.removeItem('voicelab_program'); render(); }
      });
      section.querySelectorAll('.prog-week-hdr').forEach(hdr => {
        hdr.addEventListener('click', () => {
          const weekNum = parseInt(hdr.dataset.week);
          const body = hdr.nextElementSibling;
          const isOpen = body.style.display !== 'none';
          section.querySelectorAll('.prog-week-body').forEach(b => b.style.display = 'none');
          if (!isOpen) body.style.display = 'block';
        });
      });
      section.querySelectorAll('.prog-goal-cb').forEach(cb => {
        cb.addEventListener('change', () => {
          const weekNum = parseInt(cb.dataset.week);
          const goalIdx = parseInt(cb.dataset.goal);
          const p = loadProg();
          if (!p) return;
          if (!p.completedGoals[weekNum]) p.completedGoals[weekNum] = [];
          if (cb.checked) { if (!p.completedGoals[weekNum].includes(goalIdx)) p.completedGoals[weekNum].push(goalIdx); }
          else { p.completedGoals[weekNum] = p.completedGoals[weekNum].filter(g => g !== goalIdx); }
          saveProg(p);
          render();
        });
      });
      section.querySelectorAll('.prog-complete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const weekNum = parseInt(btn.dataset.week);
          const p = loadProg();
          if (!p) return;
          if (!p.completedWeeks.includes(weekNum)) p.completedWeeks.push(weekNum);
          p.currentWeek = Math.min(12, weekNum + 1);
          saveProg(p);
          render();
        });
      });
    };

    render();
  }

  // ---- STUDIO ----
  _renderStudio() {
    const el = document.getElementById('studioSections');
    el.innerHTML = STUDIO_SECTIONS.map((s, i) => `
      <div class="studio-card ${i === 0 ? 'open' : ''}" data-idx="${i}">
        <div class="studio-header">
          <span class="studio-icon">${s.icon}</span>
          <span class="studio-title">${s.title}</span>
          <span class="studio-chevron">${i === 0 ? '▲' : '▼'}</span>
        </div>
        <div class="studio-body" style="${i === 0 ? '' : 'display:none'}">${s.body}</div>
      </div>
    `).join('');
    el.querySelectorAll('.studio-card').forEach(card => {
      card.querySelector('.studio-header').addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        el.querySelectorAll('.studio-card').forEach(c => {
          c.classList.remove('open');
          c.querySelector('.studio-chevron').textContent = '▼';
          c.querySelector('.studio-body').style.display = 'none';
        });
        if (!isOpen) {
          card.classList.add('open');
          card.querySelector('.studio-chevron').textContent = '▲';
          card.querySelector('.studio-body').style.display = '';
        }
      });
    });
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
