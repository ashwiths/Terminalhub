# Data Schema — TerminalHub

This document describes the JSON schema for all command entries in `src/data/commands/*.json`.

---

## Schema

```json
{
  "id":          "string  (required)",
  "ecosystem":   "string  (required)",
  "category":    "string  (required)",
  "command":     "string  (required)",
  "description": "string  (required)",
  "tags":        "string[] (required, min 2 items)",
  "platform":    "string[] (required)"
}
```

---

## Field Reference

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | ✅ | Unique identifier. Format: `ecosystem-NNN` (e.g. `linux-016`) |
| `ecosystem` | `string` | ✅ | Lowercase ecosystem name: `linux` \| `git` \| `npm` \| `react` \| `astro` \| `docker` |
| `category` | `string` | ✅ | Sub-group within the ecosystem (e.g. `"File System"`, `"Branching"`) |
| `command` | `string` | ✅ | The exact shell command, including flags and placeholders |
| `description` | `string` | ✅ | One sentence explaining what the command does (max ~120 chars) |
| `tags` | `string[]` | ✅ | 2–6 lowercase keywords used for search (e.g. `["list", "files"]`) |
| `platform` | `string[]` | ✅ | Platforms where the command works: `"linux"` \| `"macos"` \| `"windows"` |

---

## Constraints

- **`id` must be globally unique** across all JSON files.
- **`ecosystem`** must exactly match one of the registered ecosystem IDs in `src/data/index.js`.
- **`command`** should use angle-bracket placeholders for variable parts: `git clone <repo-url>`, NOT actual URLs as templates.
- **`description`** must start with a capital letter and not end with a period.
- **`tags`** should be all-lowercase, single words or hyphenated. No duplicates.
- **`platform`** must be a non-empty array. Use all three values only when truly cross-platform.

---

## Full Example

```json
{
  "id": "docker-016",
  "ecosystem": "docker",
  "category": "Containers",
  "command": "docker inspect <container-name>",
  "description": "Display detailed JSON metadata about a container",
  "tags": ["inspect", "metadata", "container", "json"],
  "platform": ["linux", "macos", "windows"]
}
```

---

## File Locations

```
src/
└── data/
    ├── index.js          ← aggregator, ecosystem definitions
    └── commands/
        ├── linux.json
        ├── git.json
        ├── npm.json
        ├── react.json
        ├── astro.json
        └── docker.json
```
