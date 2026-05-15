# Skills Framework

A personal skills / mental-models framework with an offline **reference card deck** (`Skills Reference/index.html`), per-skill markdown deep-dives, and a connection graph.

## Reference deck (single-file download)

Open [`Skills Reference/index.html`](Skills%20Reference/index.html) in any browser. No server required.

The deck includes:

- Search and category filters across 131 skills
- Expandable skill modals with cross-links
- **Sources & References** panel (186 sources)

Related: [`Skills Reference/graph.html`](Skills%20Reference/graph.html) for the D3 connection graph.

## Build pipeline

`Skills Reference/index.html` is **generated**. Do not edit it by hand.

| Source | Role |
|--------|------|
| `Skills Reference/**/*.md` | Skill content (Definition, Mental Model, …) |
| `Skills Reference/skills-manifest.json` | Stable skill `id`, category, colour; bibliography (`refs`) |
| `Skills Reference/reference-sections.json` | Per-skill References HTML (until each `.md` has `## References`) |
| `Skills Reference/deck.template.html` | Page shell, CSS, layout |
| `Skills Reference/deck.app.js` | Deck UI logic (search, modals, refs panel) |
| `scripts/build-deck.mjs` | Assembler |

### Commands

```bash
npm run build:deck
```

Requires Node.js 18+.

### Workflow after editing skills

1. Edit the relevant `.md` under `Skills Reference/<category>/`.
2. If you add a **new** skill, append an entry to `skills-manifest.json` (next `id`, `name`, `category`, `color`, `file`).
3. Run `npm run build:deck`.
4. Open or refresh `index.html`.

To refresh bibliography data, update `refs` in `skills-manifest.json` (or extend the build script to import from another source).

To regenerate `reference-sections.json` from a previous `index.html`, keep a backup before rebuilding; long term, move reference prose into each skill’s `## References` section in markdown.

## Repository layout

```
Skills Framework.md          # Master framework document
Skills Reference/
  index.html                 # Generated deck (committed for easy sharing)
  deck.template.html         # Deck shell (edit layout/CSS here)
  deck.app.js                # Deck behaviour
  skills-manifest.json       # Ids, categories, refs catalogue
  reference-sections.json    # References block HTML per skill
  **/*.md                    # Skill source files
  graph.html                 # Connection graph (separate page)
scripts/
  build-deck.mjs             # Build script
```

## Licence

Private / personal use unless otherwise noted.
