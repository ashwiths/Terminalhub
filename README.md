# TerminalHub &nbsp;⚡

> A centralized, searchable command library for modern developers.

[![License: MIT](https://img.shields.io/badge/License-MIT-00f5c4.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Ecosystems](https://img.shields.io/badge/ecosystems-6-a78bfa.svg)](src/data)

TerminalHub gives developers one place to find, copy, and reference CLI commands across **Linux, Git, npm, React, Astro, and Docker** — with live search and one-click copy-to-clipboard.

---

## ✨ Features

- 🔍 **Live fuzzy search** across commands, descriptions, and tags
- ⚡ **Ctrl+K** keyboard shortcut to focus search instantly
- 📋 **One-click copy** with visual feedback toast
- 🎨 **Terminal-style dark UI** with per-ecosystem accent colors
- 🗂️ **Categorized** within each ecosystem for quick browsing
- 🌐 **Open-source** — community-driven command library

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Styling | Vanilla CSS (CSS Modules + custom properties) |
| Data | Per-ecosystem JSON files |
| Fonts | JetBrains Mono + Inter (Google Fonts) |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-org/terminalhub.git
cd terminalhub/cmd

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
cmd/
├── src/
│   ├── components/       ← UI components (Sidebar, SearchBar, CommandCard…)
│   ├── data/
│   │   ├── index.js      ← aggregator + search/filter helpers
│   │   └── commands/     ← one JSON file per ecosystem
│   ├── App.jsx           ← root: state management + layout
│   └── index.css         ← design tokens + global styles
├── CONTRIBUTING.md       ← how to add commands
└── DATA_SCHEMA.md        ← command JSON schema docs
```

---

## 🤝 Contributing

Adding a command takes **under 2 minutes**:

1. Open the relevant file in `src/data/commands/`
2. Add your JSON entry following the [DATA_SCHEMA](DATA_SCHEMA.md)
3. Open a PR!

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

---

## 📄 License

MIT © TerminalHub Contributors
