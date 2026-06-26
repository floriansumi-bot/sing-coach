# VoiceLab — Singing Coach

A singing coach that runs in the browser. It listens through the microphone, shows your pitch in real time, and gives you a structured way to practise.

Live: https://floriansumi-bot.github.io/sing-coach/ (installable as a PWA, also packaged for Android with Capacitor).

## Features

- Real-time pitch tuner using the Web Audio API, with an in-tune / sharp / flat readout
- A pitch-practice game: hit and hold target notes, scored as you go
- Scored vocal warm-ups
- 13 theory cards covering the basics
- A 12-week training programme with daily plans
- Progress radar and achievement badges
- Works offline and installs as an app

## Tech

Vanilla JavaScript, with the Web Audio API for pitch detection (`js/pitch.js`), a service worker and manifest for offline/PWA, and Capacitor for the Android build (`android/`, `capacitor.config.json`).

## Run locally

```
npx serve .
# open http://localhost:3000
```

Microphone access needs https or localhost.

---

Part of my portfolio: https://floriansumi-bot.github.io/portfolio/
