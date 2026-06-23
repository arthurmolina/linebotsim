# LineBot Sim

A browser-based line-following robot simulator with real-time PID control — no dependencies, no build step.

**Live demo:** [artz.to/linebotsim](https://artz.to/linebotsim)

---

## Features

- **PID control** — tune Kp, Ki and Kd in real time and see the effect instantly
- **Configurable sensors** — number, array width, distance and sensor size
- **Drawing tools** — freehand, line, ellipse, rectangle, eraser and fill toggle
- **Demo tracks** — Oval, Figure-8 and Rectangular with a single click
- **Image import** — drag-and-drop or select an image to use as a track (with auto threshold and invert)
- **Bilingual** — Portuguese and English, toggled via the header button
- **No dependencies** — plain HTML + CSS + JS, works offline

---

## Project structure

```
linebotsim/
├── index.html       # Entry point (GitHub Pages compatible)
├── css/
│   └── style.css    # All styles
├── js/
│   └── app.js       # All logic (i18n, PID, rendering, events)
└── README.md
```

---

## Running locally

Any local HTTP server works. Examples:

```bash
# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
# Install the "Live Server" extension and click "Go Live"
```

Then open `http://localhost:8080` in your browser.

> **Note:** do not open `index.html` directly via `file://` — the canvas may behave unexpectedly in some browsers. Always use a local server.

---

## Deploying to GitHub Pages

1. Fork or push the repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select the `main` branch and `/ (root)` folder
4. Click **Save** — the site will be available at `https://<your-username>.github.io/<repo-name>`

No build required; GitHub Pages serves the static files directly.

---

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `D` | Freehand draw |
| `L` | Line |
| `E` | Ellipse |
| `R` | Rectangle |
| `X` | Eraser |
| `P` | Position robot |
| `Space` | Start / Stop simulation |
| `Shift` (hold) | Constrain proportion (circle / square) |

---

## Credits

Made by **Arthur Molina** with help from [Claude Code](https://claude.ai/code).
