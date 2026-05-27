# Skills Framework

A mental-models framework with a publishable **reference website** (`docs/`), per-skill markdown deep-dives, a connection graph, and a [training guide](Skills%20Reference/training-guide.md). **222 skills** across **16 categories** (source of truth: `skills-manifest.json`).

## Where to start

**If you have a specific problem or situation** → open [`docs/situation-finder.html`](docs/situation-finder.html). 45 first-person situations with keyword search, each mapped to 3–4 curated skills and relevant chains. This is the recommended entry point.

**If you're scanning a business across multiple dimensions** → open [`docs/executive-scan.html`](docs/executive-scan.html). Ten business lenses (strategy, portfolio economics, delivery, culture, metric integrity, innovation, incentives, risk, AI exposure, operating model), each with starter skills and diagnostic questions to ask.

**If you've received a single skill card** → read [`Skills Reference/skill-primer.md`](Skills%20Reference/skill-primer.md) first. It explains how to get value from one card in ten minutes, without engaging the full framework.

**If you want to explore connections between models** → [`docs/graph.html`](docs/graph.html) shows the full network. Best for practitioners who already know a few cards and want to discover adjacent models.

---

## Publishing the website

The `docs/` folder is the publishable website. All files are static HTML — no server required.

### GitHub Pages

1. Push the repo to GitHub.
2. Go to **Settings → Pages → Source**: set branch to `main`, folder to `/docs`.
3. The site is live at `https://<username>.github.io/<repo>/`.

### Personal web server (nginx)

Point your server root at the `docs/` folder. All inter-page links are relative, so the site works at any path prefix.

```nginx
server {
    root /path/to/skills-framework/docs;
    index index.html;
    location / { try_files $uri $uri/ =404; }
}
```

### Local browser

Open `docs/index.html` directly in any browser. No server needed.

---

## Reference deck

Open [`docs/deck.html`](docs/deck.html) in any browser.

The deck includes:

- Search and category filters across **222 skills**
- Expandable skill modals with cross-links
- **Sources & References** panel (**205** sources)

Related: [`docs/graph.html`](docs/graph.html) for the D3 connection graph.

---

## Build pipeline

`docs/deck.html`, `docs/graph.html`, `docs/training-guide.html`, and `docs/skill-primer.html` are **generated**. Do not edit them by hand — edit the source files in `Skills Reference/` and rebuild.

| Source | Role |
|--------|------|
| `Skills Reference/**/*.md` | Skill content (Definition, Mental Model, …) |
| `Skills Reference/skills-manifest.json` | Stable skill `id`, category, colour; bibliography (`refs`) |
| `Skills Reference/reference-sections.json` | Per-skill References HTML |
| `Skills Reference/deck.template.html` | Deck page shell and CSS |
| `Skills Reference/deck.app.js` | Deck UI logic (search, modals, refs panel) |
| `scripts/build-deck.mjs` | Assembler → `docs/deck.html` |
| `scripts/build-graph.mjs` | Graph builder → `docs/graph.html` |
| `scripts/build-guides.mjs` | Guide renderer → `docs/training-guide.html`, `docs/skill-primer.html` |

**Manually maintained** (edit directly in `docs/`):

| File | Contents |
|------|----------|
| `docs/index.html` | Landing page |
| `docs/situation-finder.html` | 45 situations → skill clusters |
| `docs/executive-scan.html` | 10-dimension business scan |
| `docs/quick-reference.html` | Printable cheat sheet |

### Commands

```bash
npm run build             # Rebuild deck, graph, and guides → docs/
npm run build:cowork      # Generate Claude Cowork / Code Agent plugins → dist/cowork/
npm run validate:cowork   # Validate generated skills
```

Requires Node.js 18+.

### Workflow after editing a skill card

1. Edit the relevant `.md` under `Skills Reference/<category>/`.
2. If you add a **new** skill, append an entry to `skills-manifest.json` (next `id`, `name`, `category`, `color`, `file`).
3. Run `npm run build`.
4. Open or refresh `docs/deck.html`.

### Claude Cowork / Code skills

The deck's **222 reference cards** are not exported 1:1. `npm run build:cowork` generates **22 procedural skills** in three plugins under `dist/cowork/`:

| Plugin | Skills | Purpose |
|--------|--------|---------|
| `disciplined-thinking` | 10 | Router, core mental-model toolkit, 7 strategic chains |
| `delivery-and-flow` | 10 | 5 flow toolkits + 5 flow/ops chains |
| `consulting-craft` | 3 | MECE, pyramid, engagement |

Mappings and descriptions: `scripts/cowork-skills.config.json`. Each skill includes `references/*.md` copied from the deck for progressive disclosure.

**Install:** Cowork → Customize → Plugins → upload a plugin folder (e.g. `dist/cowork/delivery-and-flow`) or zip `delivery-and-flow/` with the folder at the zip root. Chains use `/skill-name` (e.g. `/improve-delivery-flow`).

---

## Repository layout

```
Skills Framework.md          # Master compendium (pre-card-deck era; partial)
Skills Reference/
  _ai-index.md               # AI-readable framework index (keep in sync)
  skills-manifest.json       # Canonical registry: ids, categories, refs (222 skills)
  training-guide.md          # How to learn and apply the framework (source)
  skill-primer.md            # Guide for first-time card readers (source)
  deck.template.html         # Deck shell (edit layout/CSS here)
  deck.app.js                # Deck behaviour
  reference-sections.json    # References block HTML per skill
  {Category}/*.md            # Skill source files (all 16 categories)
docs/
  index.html                 # Landing page (edit directly)
  deck.html                  # Generated card deck
  graph.html                 # Generated connection graph
  situation-finder.html      # 45 situations → skills (edit directly)
  executive-scan.html        # 10-dimension scan (edit directly)
  quick-reference.html       # Printable cheat sheet (edit directly)
  training-guide.html        # Generated from training-guide.md
  skill-primer.html          # Generated from skill-primer.md
scripts/
  build-deck.mjs             # Deck HTML build
  build-graph.mjs            # Graph build
  build-guides.mjs           # Guide HTML build
  build-cowork-skills.mjs    # Cowork/Code skills build
  cowork-skills.config.json  # Toolkit/chain/plugin mappings
  validate-cowork-skills.mjs
dist/
  cowork/                    # Generated plugins (gitignored)
```

## Licence

Private / personal use unless otherwise noted.
