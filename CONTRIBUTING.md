# Contributing to TerminalHub

Thank you for taking the time to contribute! TerminalHub grows with the community, and **adding a new command is as simple as editing one JSON file**.

---

## 🚀 Quick Contribution Guide

### Adding Commands

1. **Fork** the repository and create a branch:
   ```bash
   git checkout -b feat/add-kubectl-commands
   ```

2. **Find the right file** in `src/data/commands/`:
   | File | Ecosystem |
   |---|---|
   | `linux.json` | Linux / Unix / Shell |
   | `git.json` | Git |
   | `npm.json` | npm / Node.js |
   | `react.json` | React |
   | `astro.json` | Astro |
   | `docker.json` | Docker |

3. **Add your command** following the schema in `DATA_SCHEMA.md`:
   ```json
   {
     "id": "linux-016",
     "ecosystem": "linux",
     "category": "Networking",
     "command": "netstat -tulnp",
     "description": "Show open ports and associated processes",
     "tags": ["netstat", "ports", "network"],
     "platform": ["linux"]
   }
   ```

4. **Commit** using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat(linux): add netstat port listing command"
   ```

5. **Open a Pull Request** — fill in the PR template and a maintainer will review it.

---

## ✅ PR Checklist

Before submitting, make sure:
- [ ] `id` is unique and follows the pattern `ecosystem-NNN`
- [ ] All required fields are present (see `DATA_SCHEMA.md`)
- [ ] `description` is a single clear sentence (max ~100 chars)
- [ ] `tags` include at least 2 relevant keywords
- [ ] `platform` lists only where the command actually works
- [ ] The command has been tested in a real terminal

---

## 🌍 Adding a New Ecosystem

If you want to contribute a whole new ecosystem (e.g., `kubernetes`, `python`, `rust`):
1. Create `src/data/commands/kubernetes.json` with at least 8 commands
2. Add the ecosystem to the `ecosystems` array in `src/data/index.js`
3. Open an RFC issue first so maintainers can align on categorization

---

## 🐛 Bug Reports & Feature Requests

Open an issue using the appropriate template:
- 🐛 **Bug**: unexpected UI or search behaviour
- 💡 **Feature**: new component, filter mode, or UX improvement
- 📦 **Data**: wrong command, missing flag, or outdated info

---

## Code of Conduct

This project follows the [Contributor Covenant v2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). Be kind and inclusive.
