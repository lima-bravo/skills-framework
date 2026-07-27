# Skills Framework

**🌐 Live site: [lima-bravo.github.io/skills-framework](https://lima-bravo.github.io/skills-framework)**

A mental-models framework with a publishable **reference website** (`docs/`), per-skill markdown deep-dives, a connection graph, and a [training guide](Skills%20Reference/training-guide.md). **275 skills** across **16 categories** (source of truth: `skills-manifest.json`).

**Systems-thinking coverage** spans the three traditions a practitioner actually draws on: system **dynamics** — feedback loops, emergence, equilibrium, and the recurring [System Archetypes](Skills%20Reference/Systems/system-archetypes.md) (Meadows/Senge); **soft systems** — Checkland's [CATWOE](Skills%20Reference/Systems/catwoe.md) for agreeing what a contested system is *for* before redesigning it; and **regulation** — Ashby & Beer's [Requisite Variety](Skills%20Reference/Systems/requisite-variety.md), the cybernetic law as a thinking mode. The [DRRT chain](Skills%20Reference/Pre-built-Chains/drrt-systems-analysis.md) composes them into one analysis loop — Deconstruct → Relationships → Recognise → Test.

## Where to start

**If you have a specific problem or situation** → open [`docs/situation-finder.html`](docs/situation-finder.html). 62 first-person situations with keyword search, each mapped to curated skills and relevant chains. Source: `Skills Reference/situations.json`. This is the recommended entry point.

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

- Search and category filters across **275 skills**
- Expandable skill modals with cross-links
- **Sources & References** panel (**401** sources)

Related: [`docs/graph.html`](docs/graph.html) for the D3 connection graph.

---

## Build pipeline

`docs/deck.html`, `docs/graph.html`, `docs/training-guide.html`, `docs/skill-primer.html`, `docs/situation-finder.html`, and `docs/executive-scan.html` are **generated**. Do not edit them by hand — edit source files in `Skills Reference/` and rebuild.

| Source | Role |
|--------|------|
| `Skills Reference/**/*.md` | Skill cards: YAML frontmatter + narrative body sections |
| `Skills Reference/skills-manifest.json` | Stable skill `id`, category, colour; bibliography (`refs`) |
| `Skills Reference/schemas/skill-card.v1.json` | Card + frontmatter contract |
| `Skills Reference/AUTHORING.md` | Human authoring guide |
| `Skills Reference/deck.template.html` | Deck page shell and CSS |
| `Skills Reference/deck.app.js` | Deck UI logic (search, modals, refs panel) |
| `scripts/build-deck.mjs` | Assembler → `docs/deck.html` |
| `scripts/build-graph.mjs` | Graph builder → `docs/graph.html` (edges from `connections:`) |
| `scripts/build-guides.mjs` | Guide renderer → `docs/training-guide.html`, `docs/skill-primer.html` |
| `scripts/build-situation-finder.mjs` | Situation finder → `docs/situation-finder.html` |
| `scripts/build-executive-scan.mjs` | Executive scan → `docs/executive-scan.html` |
| `Skills Reference/situations.json` | Situation → skill mappings (source) |
| `Skills Reference/executive-scan.json` | Executive scan dimensions (source) |
| `scripts/generate-ai-index.mjs` | AI index → `Skills Reference/_ai-index.md` |
| `scripts/validate-cards.mjs` | Structure + frontmatter ↔ manifest sync (strict in build) |

**Manually maintained** (edit directly in `docs/`):

| File | Contents |
|------|----------|
| `docs/index.html` | Landing page |
| `docs/quick-reference.html` | Printable cheat sheet |

### Commands

```bash
npm run build              # Full pipeline: deck, graph, guides, situation-finder, executive-scan, validate, ai-index, counts
npm run validate:cards     # Card structure (warn-only)
npm run derive:refs        # Report card refs vs manifest bibliography
npm run reconcile:refs     # Preview merge; add -- --write to update manifest.refs
npm run snapshot:test      # Deck/graph metrics vs baseline fixtures
npm run build:cowork       # Generate Claude Cowork / Code Agent plugins → plugins/
npm run validate:cowork    # Validate generated skills
```

One-off migration scripts (Phases 1–7, complete) live in `scripts/archive/`. `npm run migrate:frontmatter` points there for audit only.

Requires Node.js 18+.

### Workflow after editing a skill card

1. Edit frontmatter and/or body in `Skills Reference/<category>/<file>.md` (see `AUTHORING.md`).
2. If you add a **new** skill, append an entry to `skills-manifest.json` and add `connections:` backlinks on related cards.
3. Run `npm run build` (and `npm run reconcile:refs -- --write` if references changed).
4. Open or refresh `docs/deck.html`.

### Claude Cowork / Code skills

The deck's **275 reference cards** are not exported 1:1. `npm run build:cowork` generates **59 procedural skills** in seven plugins under `plugins/`:

| Plugin | Skills | Purpose |
|--------|--------|---------|
| `disciplined-thinking` | 23 | Router, core mental-model and reasoning toolkits, plus strategic decision chains |
| `delivery-and-flow` | 10 | 5 flow toolkits + 5 flow/ops chains |
| `consulting-craft` | 6 | MECE/pyramid structuring, situation assessment, stakeholder pre-wiring, structured problem solving, executive communication, engagement framing |
| `innovation-strategy` | 8 | 3 innovation toolkits (problem, validate, portfolio) + 5 innovation chains |
| `applied-ai` | 3 | AI governance toolkit + 2 AI governance chains |
| `leadership` | 4 | 3 leadership toolkits (mission command, after-action, ops hygiene) + 1 execution chain |
| `business-strategy` | 5 | Growth barriers, profit pool analysis, customer segmentation, KPI architecture, value realization |

Mappings and descriptions: `scripts/cowork-skills.config.json`. Each skill includes `references/*.md` copied from the deck for progressive disclosure.

#### Installing plugins into Claude (Cowork desktop app)

**Step 1 — Build the plugins** (skip if `plugins/` already exists and is up to date):

```bash
npm run build:cowork
```

**Step 2 — Zip the plugin you want to install.**
The zip must have the plugin folder at its root — not nested inside another folder.

```bash
# macOS / Linux — from the repo root
cd plugins
zip -r delivery-and-flow.zip delivery-and-flow/
```

On macOS Finder: right-click the plugin folder (e.g. `plugins/delivery-and-flow`) → Compress. This produces `delivery-and-flow.zip` with the correct structure.

**Step 3 — Install in Cowork.**

1. Open the Claude desktop app.
2. Go to **Customize → Plugins → Install plugin**.
3. Upload the `.zip` file created in Step 2.
4. Repeat for each plugin you want.

You can install all six, or just the ones relevant to your work. Each plugin is independent.

#### Using installed skills

Once a plugin is installed, its skills are available as slash commands in any Cowork conversation:

| What you type | What it does |
|---|---|
| `/classify-consulting-task` | Router — describes your task, recommends the best skill |
| `/diagnose-flow` | Runs the flow diagnosis toolkit |
| `/improve-delivery-flow` | Runs the full 8-step flow improvement chain |
| `/understand-the-problem` | Discovery toolkit (JTBD, Customer Dev, Design Thinking) |
| `/test-and-validate` | Experiment toolkit (Pretotype → MVP → BML) |
| `/ai-agent-governance-design` | AI governance chain |
| `/mission-execution-protocol` | Mission execution chain |

The full list of slash commands per plugin is in each plugin's `README.md` under `plugins/<plugin-name>/`.

**Tip:** Start with `/classify-consulting-task` if you're unsure which skill fits your situation — it routes you to the right one.

---

## Repository layout

```
Skills Framework.md          # Master compendium (pre-card-deck era; partial)
Skills Reference/
  _ai-index.md               # AI-readable framework index (keep in sync)
  skills-manifest.json       # Canonical registry: ids, categories, refs (275 skills)
  training-guide.md          # How to learn and apply the framework (source)
  skill-primer.md            # Guide for first-time card readers (source)
  deck.template.html         # Deck shell (edit layout/CSS here)
  deck.app.js                # Deck behaviour
  {Category}/*.md            # Skill source files (all 16 categories)
  situations.json            # Situation → skill mappings (source)
  executive-scan.json        # Executive scan dimensions (source)
  situation-finder.template.html
  executive-scan.template.html
docs/
  index.html                 # Landing page (edit directly)
  deck.html                  # Generated card deck
  graph.html                 # Generated connection graph
  situation-finder.html      # Generated situation finder
  executive-scan.html        # Generated executive scan
  quick-reference.html       # Printable cheat sheet (edit directly)
  training-guide.html        # Generated from training-guide.md
  skill-primer.html          # Generated from skill-primer.md
scripts/
  build-deck.mjs             # Deck HTML build
  build-graph.mjs            # Graph build
  build-guides.mjs           # Guide HTML build
  build-situation-finder.mjs # Situation finder build
  build-executive-scan.mjs   # Executive scan build
  generate-ai-index.mjs      # _ai-index.md generator
  validate-cards.mjs         # Card + frontmatter validator
  derive-refs.mjs            # Bibliography derivation report
  reconcile-refs.mjs         # Merge card refs into manifest
  check-counts.mjs           # Prose count guard (chained in build)
  lib/                       # Shared parsers (parse-skill, frontmatter, …)
  archive/                   # Completed one-off migration scripts
  build-cowork-skills.mjs    # Cowork/Code skills build
  cowork-skills.config.json  # Toolkit/chain/plugin mappings
  validate-cowork-skills.mjs
plugins/
  disciplined-thinking/      # Generated plugin (tracked in git)
  delivery-and-flow/
  consulting-craft/
  innovation-strategy/
  applied-ai/
  leadership/
```

## Licence

Private / personal use unless otherwise noted.
