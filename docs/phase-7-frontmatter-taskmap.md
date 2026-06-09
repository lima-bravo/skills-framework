# Phase 7 Task Map — YAML Frontmatter Migration

Hand this to any agent executing Phase 7. Parent plan: [`architecture-migration-plan.md`](architecture-migration-plan.md). Progress log: [`architecture-migration-log.md`](architecture-migration-log.md).

**Prerequisites (done):** Phases 0–6 complete. Build pipeline, `parse-skill.mjs`, `validate-cards --strict`, id-prefixed connections, derived bibliography, generated `_ai-index.md` and `situation-finder.html`.

---

## End state

Each skill `.md` file becomes:

```markdown
---
id: 183
name: AI Authority Boundaries
category: Applied AI
cardType: extended
tagline: Programmatically encoding where AI may not become a decision-maker
connections:
  - id: 258
    rationale: Register 2 in practice
  - id: 185
    rationale: the attack vector that makes Register 3 necessary
references:
  - title: Human Compatible
    authorYear: Stuart Russell (2019)
    supports: foundational case for human oversight
---

# AI Authority Boundaries

## Definition
…

## Mental Model
…

## The Six Registers of Restraint
…

## Practitioner Heuristics
…
```

**Machine fields** → YAML frontmatter. **Narrative** → markdown body (`##` sections only).

**Removed from body after migration:**

- `*Tagline*` line (moves to `tagline:`)
- `**Category:** …` header line (moves to `category:`; optional thin human header — see Decision D2)
- `## Connections` section (moves to `connections:`)
- `## References` section (moves to `references:`)

**Kept in body:** all narrative sections per `cardType` (including extended extras and chain `## Step N` blocks). Footer `*Part of the Skills Framework…*` may stay or become generated — pick in Decision D3.

**Build behaviour after Phase 7:**

| Consumer | Reads from |
|----------|------------|
| `parse-skill.mjs` | frontmatter first; body sections for narrative |
| `validate-cards.mjs` | frontmatter ↔ manifest sync |
| `derive-refs-core.mjs` | `references:` in frontmatter |
| `build-graph.mjs` | `connections:` in frontmatter |
| `build-deck.mjs` | frontmatter tagline + body sections; connections rendered from frontmatter |
| `skills-manifest.json` | ids, paths, colors (Option B) or full duplicate (Option A) |

---

## Decisions to make before Step 7.2

Record choices in the progress log.

| ID | Question | Options | Recommendation |
|----|----------|---------|----------------|
| **D1** | Manifest slim-down (Step 7.5)? | **A:** manifest keeps `name`, `tagline`, `cardType` — validator enforces sync with frontmatter. **B:** manifest slims to `{ id, file, category, color }` — build reads name/tagline/cardType from frontmatter only. | **A first**, **B later** if you want a second migration pass. A is lower risk. |
| **D2** | Category header line in body? | **Keep** for human browsing in GitHub. **Remove** — category only in frontmatter. | **Keep** during migration; remove in 7.6 cleanup if redundant. |
| **D3** | Footer line? | **Keep** hand-edited footer. **Strip** — deck links sufficient. | **Keep** for now. |
| **D4** | Chain cards without `references:`? | **Omit** empty `references:` key. **Allow** empty array. | Omit when empty (21 chains today have no `## References`). |
| **D5** | `supports` on references? | Map from trailing `— note` on ref line. **Optional** field. | Include when present on card. |

---

## Protocol (same as Phases 0–6)

```bash
cd "<repo-root>"
git status                    # clean before each step
npm run build && npm run check:counts

# after each step
npm run build
npm run snapshot:test         # after parser/build changes
npm run validate:cards
npm run derive:refs
git add -A && git commit -m "step-7.X: …"
```

**Revert:** `git revert HEAD --no-edit` per step. **7.3** uses one commit per category folder so revert is surgical.

---

## Step 7.1 — Schema + validator prep (no card changes)

**Objective:** Define target shape; build fails if frontmatter present but wrong.

### Tasks

| ID | Task | File(s) |
|----|------|---------|
| 7.1.1 | Add `frontmatter` block to `skill-card.v1.json`: `id`, `name`, `category`, `cardType`, `tagline`, `connections[]`, `references[]` | `Skills Reference/schemas/skill-card.v1.json` |
| 7.1.2 | Add `scripts/lib/frontmatter.mjs`: parse YAML via `remark-frontmatter` or `yaml` package; `validateFrontmatter(fm, manifestEntry)` | new |
| 7.1.3 | Extend `validate-cards.mjs`: if `---` block present, validate fields match manifest; if absent, pass (legacy mode) | `scripts/validate-cards.mjs` |
| 7.1.4 | Document target shape + before/after example | `Skills Reference/AUTHORING.md` |
| 7.1.5 | Add `npm run validate:frontmatter` alias (optional) | `package.json` |

### Verify

```bash
npm run build                   # no card has frontmatter yet → all pass
npm run validate:cards
```

### Commit

`step-7.1: extend skill schema for YAML frontmatter`

---

## Step 7.2 — Migration tooling + pilot card

**Objective:** Prove round-trip on one `extended` card before touching 261 others.

### Tasks

| ID | Task | Detail |
|----|------|--------|
| 7.2.1 | Create `scripts/migrate-frontmatter.mjs` | Flags: `--file <path>`, `--dry-run`, `--category <folder>`. Reads manifest + card; writes frontmatter + stripped body. |
| 7.2.2 | Migration logic | Parse connections from `## Connections` → `connections: [{id, rationale}]`. Parse references → `references: [{title, authorYear, supports?}]`. Pull `id/name/category/cardType/tagline` from manifest. |
| 7.2.3 | Update `parse-skill.mjs` | When YAML present: tagline/title/connections/references from frontmatter; body parse skips Connections/References sections. |
| 7.2.4 | Update `derive-refs-core.mjs` | Prefer frontmatter `references:` when present. |
| 7.2.5 | Update `build-graph.mjs` / connection resolution | Prefer frontmatter `connections:` when present. |
| 7.2.6 | Pilot migrate | `Applied-AI/ai-authority-boundaries.md` only |
| 7.2.7 | Add `scripts/lib/frontmatter.test.mjs` | Round-trip fixture on pilot card |

### Verify

```bash
node scripts/migrate-frontmatter.mjs --file Applied-AI/ai-authority-boundaries.md  # dry-run first
npm run build
npm run snapshot:test
npm run validate:cards
npm run derive:refs
```

### Commit

`step-7.2: pilot frontmatter migration on ai-authority-boundaries`

---

## Step 7.3 — Batch migrate `standard` cards (by folder)

**Objective:** 221 standard cards get frontmatter. **One git commit per folder.**

### Rules

- Migrate only `cardType: standard` in each folder.
- **Skip** `extended` and `chain` cards — they are Step 7.4.
- After each folder: full build + snapshot (update baseline only if section counts change structurally).

### Command pattern

```bash
node scripts/migrate-frontmatter.mjs --category General-Thinking
npm run build && npm run snapshot:test && npm run validate:cards
git add "Skills Reference/General-Thinking/"
git commit -m "step-7.3: frontmatter migrate General-Thinking cards (28)"
```

### Folder queue (standard cards only)

| Order | Folder | Standard | Skip to 7.4 | Commit subject |
|-------|--------|----------|-------------|----------------|
| 1 | `General-Thinking/` | 28 | — | `step-7.3: frontmatter migrate General-Thinking cards (28)` |
| 2 | `Systems/` | 21 | — | `… Systems (21)` |
| 3 | `Economics/` | 22 | — | `… Economics (22)` |
| 4 | `Physics-and-Chemistry/` | 10 | — | `… Physics-and-Chemistry (10)` |
| 5 | `Mathematics/` | 11 | — | `… Mathematics (11)` |
| 6 | `Network-Effects/` | 4 | — | `… Network-Effects (4)` |
| 7 | `Learning/` | 6 | — | `… Learning (6)` |
| 8 | `Art/` | 4 | — | `… Art (4)` |
| 9 | `Delivery-and-Flow/` | 33 | — | `… Delivery-and-Flow (33)` |
| 10 | `Consulting-Craft/` | 10 | — | `… Consulting-Craft (10)` |
| 11 | `Psychology/` | 25 | 1 extended | `… Psychology (25)` |
| 12 | `Startups/` | 10 | 4 extended | `… Startups (10)` |
| 13 | `Business/` | 27 | 4 extended | `… Business (27)` |
| 14 | `Leadership/` | 10 | 7 extended | `… Leadership (10)` |

**Total Step 7.3:** 14 commits · 221 standard cards.

### Verify (after all 7.3 commits)

```bash
node -e "
const m=require('./Skills Reference/skills-manifest.json');
const fs=require('fs');const path=require('path');
let fm=0,legacy=0,extended=0;
for (const [f,s] of Object.entries(m.skills)) {
  const md=fs.readFileSync(path.join('Skills Reference',f),'utf8');
  if (md.startsWith('---')) fm++; else legacy++;
  if (s.cardType!=='standard') extended++;
}
console.log({frontmatter:fm, legacy, nonStandard:extended});
"
# expect: frontmatter 221, legacy 41 (20 extended + 21 chain), nonStandard 41
```

---

## Step 7.4 — Migrate `chain` + `extended` cards

**Objective:** Remaining 41 cards. Can be 2–3 commits (chains batch, extended batch, Applied-AI already done in pilot).

### 7.4a — Pre-built Chains (21)

| File | Notes |
|------|-------|
| All under `Pre-built-Chains/` | No `## References` on most; `connections:` often absent. Frontmatter: `id`, `name`, `category`, `cardType: chain`, `tagline`. Body: `## Step N` sections only. |

```bash
node scripts/migrate-frontmatter.mjs --category Pre-built-Chains
npm run build && npm run validate:cards
git commit -m "step-7.4a: frontmatter migrate Pre-built-Chains (21)"
```

### 7.4b — Extended cards (20; pilot excluded)

| Folder | Files |
|--------|-------|
| `Applied-AI/` | `minimal-capability-principle.md`, `prompt-injection.md` (pilot done) |
| `Business/` | `ambidextrous-organization.md`, `open-innovation.md`, `organizational-slack.md`, `innovation-health-indicators.md` |
| `Startups/` | `effectuation.md`, `opportunity-solution-trees.md`, `pretotyping.md`, `continuous-discovery.md` |
| `Leadership/` | `three-question-ritual.md`, `async-first-default.md`, `purpose-clarity.md`, `leaders-intent.md`, `brief-back-protocols.md`, `after-action-review.md`, `tactical-pause.md` |
| `Psychology/` | `self-determination-theory.md` |
| `Innovation-Entrepreneurship/` | `cobra-effect.md` |

```bash
# Option: one commit per folder, or single commit for all extended
node scripts/migrate-frontmatter.mjs --cardType extended
npm run build && npm run derive:refs && npm run validate:cards
git commit -m "step-7.4b: frontmatter migrate extended cards (20)"
```

### 7.4c — Enforce frontmatter required

| ID | Task |
|----|------|
| 7.4c.1 | `validate-cards.mjs`: **error** if any card lacks frontmatter |
| 7.4c.2 | Remove legacy body parsers for Connections/References when frontmatter present (code cleanup) |

### Verify

```bash
npm run build && npm run check:counts && npm run derive:refs
# all 262 cards start with ---
```

### Commit

`step-7.4c: require frontmatter on all cards`

---

## Step 7.5 — Manifest slim-down (optional)

**Only if Decision D1 = Option B.**

### Tasks

| ID | Task |
|----|------|
| 7.5.1 | Slim `skills-manifest.json` entries to `{ id, file, category, color }` |
| 7.5.2 | Update `buildLookups` / deck / graph to read `name` from frontmatter |
| 7.5.3 | Update `check-counts.mjs` if any prose references manifest `name` |
| 7.5.4 | Update `build-cowork-skills.mjs` if it reads manifest names |

### Verify

Deck search by name, graph node labels, cowork plugin build.

### Commit

`step-7.5: slim manifest to ids paths categories colors`

**If D1 = Option A:** skip 7.5; add validator rule that frontmatter `name`/`id`/`category`/`cardType` must match manifest (already in 7.1).

---

## Step 7.6 — Integration + cleanup

### Tasks

| ID | Task |
|----|------|
| 7.6.1 | Update `AUTHORING.md`, `CLAUDE.md`, `README.md` — frontmatter is the card contract |
| 7.6.2 | Update `architecture-migration-plan.md` checklist — mark Phase 7 complete |
| 7.6.3 | Move `scripts/migrate-frontmatter.mjs`, `scripts/extract-situations.mjs`, `scripts/add-card-type.mjs`, `scripts/migrate-connections.mjs` → `scripts/archive/` |
| 7.6.4 | Add `npm run migrate:frontmatter` help text pointing to archive scripts |
| 7.6.5 | Final snapshot baseline: `npm run snapshot:test -- --write` |
| 7.6.6 | Update `docs/architecture-migration-log.md` |

### Verify

```bash
npm run build
npm run check:counts
npm run validate:cards
npm run snapshot:test
npm run derive:refs
npm run test:parse-skill
```

### Commit

`step-7.6: finalize Phase 7 frontmatter migration`

---

## Code touch list (all steps)

| File | Changes |
|------|---------|
| `scripts/lib/parse-skill.mjs` | Read frontmatter; skip body Connections/References |
| `scripts/lib/frontmatter.mjs` | **new** — parse, validate, serialize YAML |
| `scripts/lib/derive-refs-core.mjs` | Prefer frontmatter refs |
| `scripts/validate-cards.mjs` | Frontmatter required (7.4c); manifest sync |
| `scripts/migrate-frontmatter.mjs` | **new** — one-off migration tool |
| `scripts/build-deck.mjs` | Tagline/title from frontmatter; render connections from FM |
| `scripts/build-graph.mjs` | Edges from frontmatter connections |
| `scripts/build-cowork-skills.mjs` | Verify still works (reads `.md` body) |
| `Skills Reference/schemas/skill-card.v1.json` | Frontmatter schema |
| `Skills Reference/AUTHORING.md` | New authoring contract |
| `Skills Reference/**/*.md` | 262 files gain frontmatter |

**Do not change:** `situations.json`, `_ai-index.preamble.md`, `skills-manifest.json` ids (unless 7.5).

---

## Risk register

| Risk | Mitigation |
|------|------------|
| YAML quoting breaks on titles with `:` or `'` | Use `yaml` package `stringify` with literal block scalars; test on `Occam's Razor`, `Maker's Schedule` |
| Deck modal loses Connections rendering | Pilot 7.2 + snapshot:test before batch |
| `derive:refs` drift after refs move to FM | Run after each category batch |
| AI edits card body but not frontmatter | Validator manifest sync catches drift; document in AUTHORING.md |
| Chain cards lose step sections | `cardType: chain` migration preserves all non-Connection/Reference `##` sections |
| Build time regression (262× remark) | Acceptable today ~6s; cache parse in build if needed later |

---

## Progress checklist

```
Phase 7 — YAML frontmatter
[ ] 7.1  Schema + validator prep (frontmatter optional)
[ ] 7.2  migrate-frontmatter.mjs + parse-skill + pilot (ai-authority-boundaries)
[ ] 7.3  Standard cards — 14 folder commits (221 cards)
      [ ] General-Thinking (28)
      [ ] Systems (21)
      [ ] Economics (22)
      [ ] Physics-and-Chemistry (10)
      [ ] Mathematics (11)
      [ ] Network-Effects (4)
      [ ] Learning (6)
      [ ] Art (4)
      [ ] Delivery-and-Flow (33)
      [ ] Consulting-Craft (10)
      [ ] Psychology (25)
      [ ] Startups (10)
      [ ] Business (27)
      [ ] Leadership (10)
[ ] 7.4a Pre-built-Chains (21)
[ ] 7.4b Extended cards (20)
[ ] 7.4c Require frontmatter; remove legacy parsers
[ ] 7.5  Manifest slim-down (optional — skip if D1=A)
[ ] 7.6  Docs, archive scripts, final verify
```

**Estimated commits:** 20–22 (14 category + pilot + schema + chains + extended + enforce + optional slim + cleanup).

---

## Agent quick-start

1. Read Decisions D1–D5; default to recommendations if user silent.
2. Execute **7.1** → commit → **7.2** pilot → commit.
3. Work **7.3** table top-to-bottom; never skip verify between folders.
4. **7.4** chains then extended; enable required frontmatter.
5. **7.5** only if explicitly requested.
6. **7.6** cleanup; mark migration log Phase 7 complete.

**Do not** change skill ids, rename categories, or rewrite card prose during migration. Mechanical move of machine fields only.
