# AudioTab Manager

AudioTab Manager is a lightweight Brave (and Chrome-compatible) browser extension designed to improve your audio/video playback experience by automatically pausing other tabs that are playing media whenever you start playing a new video or song. It helps avoid overlapping sounds from multiple tabs, especially when using popular services like YouTube and Spotify, even across different browser windows.

---

## Why This Extension?

If you often have multiple tabs open that play audio (e.g., YouTube videos, Spotify Web Player), you might face situations where audio from different tabs plays simultaneously, creating a chaotic listening experience. Currently, browsers do not natively handle this cross-tab audio management very well, especially when tabs are in separate windows.

AudioTab Manager solves this by:

- Detecting when you play media in one tab
- Automatically pausing any other tabs that are currently playing media (YouTube or Spotify supported)
- Ensuring only one tab plays audio at a time, preventing annoying audio overlap

---

## Features

- Works seamlessly with YouTube and Spotify Web Player
- Supports multiple tabs and windows
- Pauses other tabs automatically on playback start
- Lightweight and efficient — minimal resource usage
- Runs entirely locally on your machine — no data is sent externally

---

## How It Works

1. Listens for play events on YouTube and Spotify tabs.
2. When a play event occurs in one tab, it sends pause commands to all other tabs playing audio.
3. Uses direct DOM manipulation via content scripts to control playback.
4. Clears playback state when browser windows are closed to avoid stale information.

---

## Installation

To install this extension locally:

1. Download or clone this repository to your computer.
2. Open Brave or Chrome and go to `brave://extensions` or `chrome://extensions`.
3. Enable "Developer mode" (toggle at the top right).
4. Click "Load unpacked" and select the folder containing this extension.
5. The extension will appear in your toolbar and start managing audio playback across your tabs.

---

## Limitations and Notes

- This extension depends on the structure of YouTube’s and Spotify’s web player pages. If either site updates their UI significantly, the extension may need updates.
- Currently supports only YouTube and Spotify; other sites are not managed.
- The extension toggles playback by simulating button clicks on the site’s native play/pause controls.
- Does not resume paused tabs automatically (by design).

---

## Contributing

This is a personal project primarily for local use. Pull requests and suggestions are welcome!

---

## License

This project is provided "as is" for personal use. You may use and modify it freely but do so responsibly.

---

## Contact

Feel free to open issues or reach out if you want help customizing or improving this extension.

---

Enjoy seamless audio across your browser tabs!

