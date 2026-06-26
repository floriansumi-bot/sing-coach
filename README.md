# VoiceLab — Singing Coach

A complete, browser-based singing coach. VoiceLab listens to your voice through the microphone, shows your pitch in real time, and walks you through a structured programme to actually get better — not just a tuner, but a full training app.

**Live:** https://floriansumi-bot.github.io/sing-coach/
*(installable as a PWA, and packaged as an Android app via Capacitor)*

## What it does

- 🎤 **Real-time pitch tuner** — live pitch detection from the mic via the Web Audio API, with an instant in-tune / sharp / flat readout
- 🎯 **Pitch-practice game** — hit and hold target notes; scored as you go
- 🎼 **Scored vocal warm-ups** — guided exercises that grade how close you sing to each note
- 📚 **13 theory cards** — the music fundamentals a singer actually needs
- 🗓️ **12-week training programme** — a progressive path with smart daily plans
- 📈 **Progress radar + achievement badges** — track range, accuracy and consistency over time
- 📴 **Offline-first** — runs fully offline as an installed app (service worker + manifest)

## Tech

- Vanilla **JavaScript** — no framework
- **Web Audio API** for real-time pitch detection (`js/pitch.js`)
- **PWA**: service worker + web app manifest (installable, offline)
- **Capacitor** for the native Android build (`android/`, `capacitor.config.json`)

## Run locally

```bash
# any static server works, e.g.
npx serve .
# then open http://localhost:3000
```

Microphone access requires `https://` or `localhost`.

---

Part of my portfolio — see the rest at **https://floriansumi-bot.github.io/portfolio/**
