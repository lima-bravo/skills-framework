# Skills Framework

A personal skills / mental-models framework with an offline **reference card deck** (`Skills Reference/index.html`), per-skill markdown deep-dives, a connection graph, and a [training guide](Skills%20Reference/training-guide.md). **222 skills** across **16 categories** (source of truth: `skills-manifest.json`).

## Reference deck (single-file download)

Open [`Skills Reference/index.html`](Skills%20Reference/index.html) in any browser. No server required.

The deck includes:

- Search and category filters across **222 skills**
- Expandable skill modals with cross-links
- **Sources & References** panel (**186** sources)

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
npm run build:cowork      # Claude Cowork / Code Agent Skills (dist/cowork/)
npm run validate:cowork   # optional: skills-ref validate each generated skill
```

Requires Node.js 18+.

### Claude Cowork / Code skills

The deck’s **222 reference cards** are not exported 1:1. `npm run build:cowork` generates **21 procedural skills** in three plugins under `dist/cowork/`:

| Plugin | Skills | Purpose |
|--------|--------|---------|
| `disciplined-thinking` | 10 | Router, core mental-model toolkit, 7 strategic chains |
| `delivery-and-flow` | 9 | 5 flow toolkits + 4 flow/ops chains |
| `consulting-craft` | 3 | MECE, pyramid, engagement |

Mappings and descriptions: `scripts/cowork-skills.config.json`. Each skill includes `references/*.md` copied from the deck for progressive disclosure.

**Install:** Cowork → Customize → Plugins → upload a plugin folder (e.g. `dist/cowork/delivery-and-flow`) or zip `delivery-and-flow/` with the folder at the zip root. Chains use `/skill-name` (e.g. `/improve-delivery-flow`).

### Workflow after editing skills

1. Edit the relevant `.md` under `Skills Reference/<category>/`.
2. If you add a **new** skill, append an entry to `skills-manifest.json` (next `id`, `name`, `category`, `color`, `file`).
3. Run `npm run build:deck`.
4. Open or refresh `index.html`.

To refresh bibliography data, update `refs` in `skills-manifest.json` (or extend the build script to import from another source).

To regenerate `reference-sections.json` from a previous `index.html`, keep a backup before rebuilding; long term, move reference prose into each skill’s `## References` section in markdown.

## Repository layout

```
Skills Framework.md          # Master compendium (categories 1–12; see note in that file)
Skills Reference/
  index.html                 # Generated deck (committed for easy sharing)
  training-guide.md          # How to learn and apply the framework
  deck.template.html         # Deck shell (edit layout/CSS here)
  deck.app.js                # Deck behaviour
  skills-manifest.json       # Canonical registry: ids, categories, refs (222 skills)
  reference-sections.json    # References block HTML per skill
  **/*.md                    # Skill source files (all 16 categories)
  graph.html                 # Connection graph (separate page)
scripts/
  build-deck.mjs             # Deck HTML build
  build-cowork-skills.mjs    # Cowork/Code skills build
  cowork-skills.config.json  # Toolkit/chain/plugin mappings
  validate-cowork-skills.mjs
dist/
  cowork/                    # Generated plugins (gitignored)
```

## Licence

Private / personal use unless otherwise noted.
