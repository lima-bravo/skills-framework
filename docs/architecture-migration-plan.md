# Architecture Migration Plan — Recommendations 1–7

Hand this document to any AI agent or Cursor session executing the migration.
**Read the whole plan before starting Step 0.**

---

## Target architecture (end state)

### What it should look like

```
Skills Reference/
  schemas/
    skill-card.v1.json          # JSON Schema — section rules per cardType
    situation.v1.json
  skills-manifest.json          # ids, names, categories, colors, cardType (+ derived refs at build)
  situations.json               # situation → skill-id mappings (NEW — source of truth)
  clusters.json                 # optional — high-signal clusters for _ai-index
  {Category}/*.md               # YAML frontmatter + markdown body (end state)
  _ai-index.md                    # GENERATED — short preamble + inventory tables
  _ai-index.preamble.md           # hand-edited intro only (optional)
  deck.template.html
  graph.template.html
  situation-finder.template.html  # NEW — shell; data injected at build

scripts/
  lib/
    parse-skill.mjs               # remark/unified AST parser (shared)
    manifest.mjs                  # load manifest, byId/byPath/byName lookups
    connections.mjs               # resolve connection targets by id or legacy name
  validate-cards.mjs              # structure + links + refs checks (fails build when strict)
  derive-refs.mjs                 # card/frontmatter refs → manifest.refs shape
  generate-ai-index.mjs
  build-situation-finder.mjs
  build-deck.mjs                  # uses parse-skill.mjs
  build-graph.mjs                 # uses connections.mjs (id-first)
  check-counts.mjs
  snapshot-test.mjs               # optional — deck/graph byte-stable checks per step

docs/
  deck.html                       # generated
  graph.html                      # generated
  situation-finder.html           # generated from situations.json
  index.html                      # still manual (counts guarded by check-counts)
```

**Removed after migration:** `reference-sections.json` (legacy HTML refs).

### Why this shape

| Problem today | End-state fix |
|---------------|---------------|
| Three ref registries (card, manifest, reference-sections.json) | Cards/frontmatter own refs; build **derives** `manifest.refs` |
| Graph edges resolved by fuzzy name match | Connections use **numeric skill id**; names are display only |
| `_ai-index.md` hand-copied from manifest | **Generated** from manifest + clusters — cannot drift |
| situation-finder.html is 500+ lines of embedded JS | **situations.json** is AI-editable; HTML is a template |
| Regex `## ` splitting breaks on structure changes | **remark/unified** parser with explicit section model |
| Standard / chain / extended cards forced into one mold | **`cardType`** + JSON Schema per type |
| 8-step manual sync on every card edit | Frontmatter holds machine fields; **validator fails the build** on drift |

Markdown remains the human/AI editing surface for narrative prose. Machine integrity lives in frontmatter, JSON registries, schemas, and build-time validation.

### Execution order vs recommendation numbers

Recommendations are numbered 1–7 by impact, **not** by safe execution order.
Execute phases in the sequence below. Rationale:

1. **cardType (Rec 5) before strict validation (Rec 1)** — validator needs per-type section rules.
2. **remark parser (Rec 6) before frontmatter (Rec 7)** — one parsing rewrite, then metadata moves into frontmatter.
3. **Derive refs (Rec 2) after parser stabilizes** — ref extraction uses the shared parser.
4. **Frontmatter (Rec 7) last** — largest card-level diff; all tooling must exist first.

---

## Protocol for every agent session

### Before any step

```bash
cd "<repo-root>"
git status                    # must be clean unless resuming mid-phase
npm run build                 # must pass
npm run check:counts          # must pass
```

Record baseline in the step log (see [Progress log](#progress-log) at bottom).

### After every step

```bash
npm run build
npm run check:counts
# plus any step-specific verify commands listed below
git add -A
git commit -m "<step-id>: <imperative summary>"
```

**Do not start the next step until commit succeeds and verify commands pass.**

### Reversibility rule

Each step must be revertible with a single revert:

```bash
git revert HEAD --no-edit
npm run build && npm run check:counts
```

If a step spans multiple commits, note the **first and last commit hash** in the progress log so a range revert is possible.

### Commit granularity

- **One logical step = one commit** (preferred).
- If a step is too large for one session, use sub-steps (`3a`, `3b`) — each sub-step still commits separately.
- Never bundle unrelated recommendations in one commit.

### When build breaks

1. Fix forward if the break is in the current step's scope.
2. If stuck, `git revert HEAD` and mark the step `blocked` in the progress log with the error.
3. Do not leave the repo in a failing build state across commits.

---

## Phase 0 — Baseline and tooling scaffold

### Step 0.1 — Snapshot baseline

**Objective:** Capture proof that today's build is healthy; add a place to record migration progress.

**Actions:**
1. Create `docs/architecture-migration-log.md` with columns: Step | Date | Commit | Verify output | Notes.
2. Run build and record skill count, connection count, ref count:

```bash
npm run build
npm run check:counts
node -e "
const m=require('./Skills Reference/skills-manifest.json');
const g=require('fs').readFileSync('./docs/graph.html','utf8');
const conn=(g.match(/(\d+)\s+connections/i)||[])[1];
console.log({skills:Object.keys(m.skills).length, refs:m.refs.length, connections:conn});
"
```

3. Optionally copy `docs/deck.html` and `docs/graph.html` to `scripts/fixtures/baseline/` for later diff (gitignore the fixtures folder if binaries are huge — store hashes instead).

**Verify:** build + check:counts pass; log file exists.

**Rollback:** delete `docs/architecture-migration-log.md` and fixtures.

**Commit:** `step-0.1: record architecture migration baseline`

---

### Step 0.2 — Add npm scripts hook points

**Objective:** Reserve script names so later steps plug in without reshuffling `package.json`.

**Actions:**
1. Add to `package.json` scripts (stubs that exit 0 or echo "not implemented"):

```json
"validate:cards": "node scripts/validate-cards.mjs",
"derive:refs": "node scripts/derive-refs.mjs",
"generate:ai-index": "node scripts/generate-ai-index.mjs",
"build:situation-finder": "node scripts/build-situation-finder.mjs",
"snapshot:test": "node scripts/snapshot-test.mjs"
```

2. Create minimal placeholder `.mjs` files that print `"not implemented — skipped"` and exit 0.

3. Do **not** chain these into `npm run build` yet.

**Verify:** `npm run validate:cards` exits 0; build still passes.

**Rollback:** revert `package.json` and delete placeholder scripts.

**Commit:** `step-0.2: add migration script stubs and npm hooks`

---

## Phase 1 — Recommendation 5: cardType + JSON Schema

### Step 1.1 — Add cardType to manifest (additive)

**Objective:** Every skill has an explicit `cardType` without changing any `.md` file.

**Actions:**
1. Create `Skills Reference/schemas/skill-card.v1.json` defining:
   - `cardType`: enum `standard` | `chain` | `extended`
   - Per-type required `##` sections (see schema below).
2. Add `"cardType"` to each entry in `skills-manifest.json`:
   - `"Pre-built Chains"` category → `"chain"`
   - Files with extra sections beyond the standard six (maintain a list starting with `Applied-AI/ai-authority-boundaries.md`) → `"extended"`
   - All others → `"standard"`
3. Update `scripts/check-counts.mjs` only if needed (cardType is not counted in prose today — likely no change).

**Schema section rules (v1):**

| cardType | Required `##` sections (in order) |
|----------|-----------------------------------|
| `standard` | Definition, Mental Model, Practitioner Heuristics, Common Failure Modes, Worked Example, Connections, References |
| `chain` | One or more matching `/^Step \\d+/`, plus Connections if present |
| `extended` | Same as standard, plus any additional `##` sections **after** Mental Model and **before** Practitioner Heuristics (document the allowed extra names in schema `extendedSections` array) |

**Verify:**

```bash
node -e "
const m=require('./Skills Reference/skills-manifest.json');
const t=new Set(Object.values(m.skills).map(s=>s.cardType));
console.log('cardTypes', [...t]);
console.log('missing', Object.entries(m.skills).filter(([,s])=>!s.cardType).length);
"
# missing must be 0
npm run build && npm run check:counts
```

**Rollback:** revert manifest + schema file.

**Commit:** `step-1.1: add cardType to manifest and skill-card schema v1`

---

### Step 1.2 — Document cardType for authors

**Objective:** AI tools read one contract file instead of inferring from review template.

**Actions:**
1. Create `Skills Reference/AUTHORING.md` summarizing cardType rules, section order, connection format (preview of Step 2.2), and ref format.
2. Add a one-line pointer in `CLAUDE.md` under maintenance rules.

**Verify:** files exist; build passes.

**Rollback:** delete AUTHORING.md; revert CLAUDE.md pointer.

**Commit:** `step-1.2: add AUTHORING.md card contract for agents`

---

## Phase 2 — Recommendation 1: Card validator (warn mode)

### Step 2.1 — Implement validate-cards.mjs (warnings only)

**Objective:** Report structural problems without failing the build.

**Actions:**
1. Replace stub `scripts/validate-cards.mjs` with real checks:
   - Manifest file exists on disk
   - Required sections for `cardType` present (regex OK for now; replaced in Phase 5)
   - `## References` is last content section before footer
   - Title `# Name` matches manifest `name`
   - Tagline present (first `*...*` line or `**Tagline:**`)
2. Exit 0 always; print warnings to stderr with `file:line` context.
3. Add `npm run validate:cards` to CI/local habit — still **not** in `build` yet.

**Verify:**

```bash
npm run validate:cards 2>&1 | tee /tmp/validate-warnings.txt
wc -l /tmp/validate-warnings.txt   # record count in migration log
npm run build && npm run check:counts
```

**Rollback:** revert to stub validator.

**Commit:** `step-2.1: add validate-cards.mjs warn-only mode`

---

### Step 2.2 — Connection-by-ID format (dual support)

**Objective:** Graph and deck accept explicit ids; legacy name-only links still work.

**Canonical connection line formats (both valid during migration):**

```markdown
→ [142·DORA Metrics](../Delivery-and-Flow/dora-metrics.md) — rationale
→ [**DORA Metrics**](../Delivery-and-Flow/dora-metrics.md) — rationale (legacy)
```

**Actions:**
1. Create `scripts/lib/connections.mjs`:
   - Parse `→` lines from Connections section
   - Prefer `[123·Name](path)` or `[**123·Name**](path)` → extract id `123`
   - Fallback: existing name-based resolution from `build-graph.mjs`
2. Update `scripts/build-graph.mjs` to use `connections.mjs`.
3. Update `validate-cards.mjs` to **warn** when a connection line has no resolvable id (name fallback succeeded or failed).
4. Update `Skills Reference/AUTHORING.md` with id format.

**Verify:**

```bash
npm run build
node -e "
const g=require('fs').readFileSync('./docs/graph.html','utf8');
const j=g.match(/const graph = ({[\s\S]*?});/);
const d=JSON.parse(j[1]);
console.log({nodes:d.nodes.length, links:d.links.length});
"
# link count should match pre-step baseline ± 0
npm run validate:cards
npm run check:counts
```

**Rollback:** revert connections.mjs and build-graph.mjs.

**Commit:** `step-2.2: resolve graph connections by skill id with name fallback`

---

### Step 2.3 — Migrate Connections to id format (batch)

**Objective:** All connection lines include numeric id prefix.

**Actions:**
1. Write `scripts/migrate-connections.mjs` (one-off): for each card, rewrite `→ [**Name**](path)` → `→ [id·Name](path)` using manifest lookup.
2. Run it; inspect diff (`git diff --stat`).
3. Extend `validate-cards.mjs`: **error** if connection target unresolved (still exit 0 until Step 2.4).

**Verify:**

```bash
npm run validate:cards 2>&1 | grep -c 'unresolved connection'   # must be 0
npm run build && npm run check:counts
# graph link count unchanged
```

**Rollback:** revert migration commit (single commit for whole batch).

**Commit:** `step-2.3: migrate all Connections lines to id-prefixed format`

---

### Step 2.4 — Enforce validator in build (strict mode)

**Objective:** Structural drift fails CI/build.

**Actions:**
1. Change `validate-cards.mjs` to exit 1 on errors (missing sections, broken connections, manifest mismatch).
2. Warnings remain non-fatal (e.g. backlink asymmetry).
3. Chain into `package.json`: `"build": "... && node scripts/validate-cards.mjs && node scripts/check-counts.mjs"`

**Verify:**

```bash
npm run build    # must pass on clean tree
npm run validate:cards
# deliberate break test: add a typo connection to one card, confirm build fails, revert typo
```

**Rollback:** remove validator from build script; revert strict exit code.

**Commit:** `step-2.4: fail build on card validation errors`

---

## Phase 3 — Recommendation 6: remark/unified parser

### Step 3.1 — Add dependencies and parse-skill module

**Objective:** Shared AST parser; build scripts still use old regex path.

**Actions:**
1. `npm install unified remark-parse remark-frontmatter mdast-util-to-string unist-util-visit` (add `package.json` + lockfile if you introduce one).
2. Create `scripts/lib/parse-skill.mjs` exporting:
   - `parseSkillMarkdown(md, { filePath, manifest })` → `{ tagline, sections: [{title, body}], connections: [{id, name, rationale}], references: [...] }`
3. Unit-test against 3 fixtures: one `standard`, one `chain`, one `extended` (read from real cards).

**Verify:**

```bash
node scripts/lib/parse-skill.test.mjs   # create minimal test runner
npm run build   # unchanged — old path still active
```

**Rollback:** remove deps and parse-skill module.

**Commit:** `step-3.1: add remark-based parse-skill module with fixtures`

---

### Step 3.2 — Switch build-deck.mjs to parse-skill

**Objective:** Deck output byte-stable (or semantically stable) vs baseline.

**Actions:**
1. Refactor `build-deck.mjs` to call `parseSkillMarkdown` instead of inline regex.
2. Keep `reference-sections.json` fallback logic until Phase 4.
3. Add `scripts/snapshot-test.mjs` comparing:
   - skill count in `__SKILLS_JSON__`
   - per-skill modal section titles order
   - total connection link count in modals

**Verify:**

```bash
npm run build
npm run snapshot:test
npm run check:counts
```

**Rollback:** revert build-deck.mjs to regex version.

**Commit:** `step-3.2: build deck via remark parse-skill`

---

### Step 3.3 — Switch build-graph.mjs to parse-skill + connections.mjs

**Objective:** Graph nodes/links identical to pre-switch counts.

**Verify:**

```bash
npm run build
npm run snapshot:test
# connections count in graph unchanged vs migration log baseline
npm run check:counts
```

**Rollback:** revert build-graph.mjs.

**Commit:** `step-3.3: build graph via remark parse-skill`

---

### Step 3.4 — Switch validate-cards.mjs to parse-skill

**Objective:** One parser for build and validation — no regex drift.

**Verify:** `npm run build` (includes validate:cards).

**Commit:** `step-3.4: validate cards via shared parse-skill`

---

## Phase 4 — Recommendation 2: Derive refs; retire reference-sections.json

### Step 4.1 — Implement derive-refs.mjs (report-only)

**Objective:** Prove card `## References` can rebuild `manifest.refs`.

**Actions:**
1. Create `scripts/derive-refs.mjs`:
   - Parse each card's References section (via parse-skill)
   - Normalize `{ title, authorYear }` keys
   - Merge duplicates across skills
   - Attach `{ id, name, color }` per skill
   - Diff against current `manifest.refs`; print missing/extra/mismatch
2. Exit 0; do not write files yet.

**Verify:**

```bash
npm run derive:refs
# target: zero mismatches on title+authorYear; skill attachments may need manifest cleanup
```

**Commit:** `step-4.1: add derive-refs report-only diff against manifest`

---

### Step 4.2 — Reconcile manifest.refs with derived refs

**Objective:** Single agreed bibliography before switching source of truth.

**Actions:**
1. Fix card-level or manifest-level discrepancies found in 4.1 (likely small batch commits per category if large).
2. Re-run `npm run derive:refs` until diff is clean.

**Verify:** `npm run derive:refs` reports `0 discrepancies`.

**Commit:** `step-4.2: reconcile manifest refs with card References sections`

---

### Step 4.3 — Build writes derived refs; drop reference-sections.json reads

**Objective:** Cards own refs; manifest.refs generated each build.

**Actions:**
1. At start of `build-deck.mjs`, run derive logic → set `manifest.refs` in memory (or write to `skills-manifest.json` if you choose manifest as output — **prefer in-memory + optional `--write-manifest`** flag to avoid dirty git on every build).
2. Remove `REF_SECTIONS` / `reference-sections.json` usage from deck build.
3. Add check-counts assertion: every skill with References section appears in at least one derived ref entry.

**Verify:**

```bash
npm run build
npm run check:counts
# deck References panel still populates (__REFS_DATA_JSON__)
grep -r "reference-sections" scripts/   # should find nothing except migration notes
```

**Commit:** `step-4.3: derive manifest refs at build; stop reading reference-sections.json`

---

### Step 4.4 — Delete reference-sections.json

**Objective:** Remove dead duplicate registry.

**Actions:**
1. Delete `Skills Reference/reference-sections.json`.
2. Update README.md, CLAUDE.md build table (remove reference-sections row).
3. Confirm no imports remain.

**Verify:** `npm run build && npm run check:counts`

**Rollback:** restore file from git history.

**Commit:** `step-4.4: remove legacy reference-sections.json`

---

## Phase 5 — Recommendation 3: Generate _ai-index.md

### Step 5.1 — Preamble split

**Objective:** Separate hand-written intro from generated inventory.

**Actions:**
1. Rename static intro paragraphs (everything before `## Skill inventory by category`) into `Skills Reference/_ai-index.preamble.md`.
2. Keep `_ai-index.md` in git for now — will be overwritten by generator next step.

**Verify:** file exists; build passes.

**Commit:** `step-5.1: extract _ai-index preamble for generation`

---

### Step 5.2 — Implement generate-ai-index.mjs

**Objective:** Inventory tables derived from manifest; counts cannot drift.

**Actions:**
1. Create `scripts/generate-ai-index.mjs`:
   - Read manifest + optional `clusters.json`
   - Emit `_ai-index.md` = preamble + generated header comment + inventory by category + high-signal cluster table
   - Format: `` `id·Name` `` lines matching current style
2. Wire `npm run generate:ai-index`.
3. Run once; diff should mostly be count fixes and ordering normalization.

**Verify:**

```bash
npm run generate:ai-index
npm run check:counts
grep "262 skills" "Skills Reference/_ai-index.md"   # count matches manifest
```

**Commit:** `step-5.2: generate _ai-index inventory from manifest`

---

### Step 5.3 — Chain ai-index into build

**Objective:** Index always fresh after manifest/card changes.

**Actions:**
1. Add `node scripts/generate-ai-index.mjs` to `npm run build` **before** check-counts.
2. Update CLAUDE.md: "_ai-index.md is generated; edit `_ai-index.preamble.md` or `clusters.json` only."

**Verify:** `npm run build` regenerates index; manual edit to inventory section is overwritten (expected).

**Commit:** `step-5.3: generate _ai-index on every build`

---

## Phase 6 — Recommendation 4: situations.json → situation-finder

### Step 6.1 — Extract situations.json from HTML

**Objective:** Structured source matching embedded `SECTIONS` data.

**Actions:**
1. Write `scripts/extract-situations.mjs` one-off: parse `docs/situation-finder.html` → write `Skills Reference/situations.json`:

```json
{
  "sections": [
    {
      "label": "Thinking & Deciding",
      "situations": [
        {
          "label": "You have a bad feeling you can't articulate",
          "keywords": "bad feeling something wrong ...",
          "skills": [
            { "id": 1, "tag": "Flip the question..." },
            { "id": 10, "tag": "Imagine it's already failed..." }
          ]
        }
      ]
    }
  ]
}
```

2. Names and chain flags come from manifest at **build** time (store ids + tag only in JSON).

**Verify:**

```bash
node scripts/extract-situations.mjs
node -e "const s=require('./Skills Reference/situations.json'); console.log(s.sections.length, 'sections');"
```

**Commit:** `step-6.1: extract situations.json from situation-finder.html`

---

### Step 6.2 — Template + build-situation-finder.mjs

**Objective:** HTML is generated; JS data injected from JSON + manifest.

**Actions:**
1. Copy `docs/situation-finder.html` → `Skills Reference/situation-finder.template.html`.
2. Replace inline `SECTIONS = [...]` with placeholder `__SITUATIONS_JSON__`.
3. Implement `scripts/build-situation-finder.mjs` (hydrate names/chain from manifest).
4. Add to `npm run build`.

**Verify:**

```bash
npm run build:situation-finder
# diff docs/situation-finder.html against pre-step backup — should be equivalent modulo banner comment
npm run build && npm run check:counts
```

**Commit:** `step-6.2: generate situation-finder.html from situations.json`

---

### Step 6.3 — Mark situation-finder as generated in docs

**Objective:** Prevent hand-edits that will be overwritten.

**Actions:**
1. Add generated banner to output.
2. Update README.md manual vs generated table: move situation-finder to ✅ auto.
3. Update CLAUDE.md maintenance rules: edit `situations.json`, not HTML.

**Verify:** README accurate; build passes.

**Commit:** `step-6.3: document situations.json as situation-finder source`

---

## Phase 7 — Recommendation 7: Frontmatter hybrid ✅ COMPLETE (2026-06-09)

All 262 cards migrated. Machine fields in YAML frontmatter; narrative in body. Step 7.5 (manifest slim-down) skipped per Decision D1=Option A.

### Step 7.1 — Extend schema for YAML frontmatter

**Objective:** Define the target on-disk shape without migrating cards yet.

**Actions:**
1. Update `skill-card.v1.json` with frontmatter properties:
   - `id`, `name`, `category`, `cardType`, `tagline`
   - `connections: [{ id, rationale }]`
   - `references: [{ title, authorYear, supports? }]`
2. Update AUTHORING.md with example frontmatter block.
3. Add `validate-cards.mjs` check: if frontmatter present, must match manifest.

**Verify:** build passes; no card has frontmatter yet.

**Commit:** `step-7.1: extend skill schema for YAML frontmatter`

---

### Step 7.2 — Migrate one pilot card (ai-authority-boundaries)

**Objective:** Prove round-trip before batch migration.

**Actions:**
1. Write `scripts/migrate-frontmatter.mjs` (single file or `--file` flag).
2. Migrate `Applied-AI/ai-authority-boundaries.md`:
   - Move manifest fields + parsed connections/refs into frontmatter
   - Body retains only narrative `##` sections (extended sections stay in body)
3. Adjust parse-skill to read frontmatter when present (remark-frontmatter).

**Verify:**

```bash
npm run build
npm run snapshot:test
npm run validate:cards
```

**Commit:** `step-7.2: pilot frontmatter migration on ai-authority-boundaries`

---

### Step 7.3 — Batch migrate standard cards (by category)

**Objective:** All `standard` cards use frontmatter.

**Actions:**
1. Run migrate script per category folder (one commit per category for easy revert):
   - `General-Thinking/` → commit
   - `Systems/` → commit
   - … continue through all non-chain categories
2. After each category: `npm run build && npm run validate:cards`.

**Verify:** per-category commits all green.

**Commit pattern:** `step-7.3: frontmatter migrate General-Thinking cards` (etc.)

---

### Step 7.4 — Migrate chain + extended cards

**Objective:** Complete frontmatter coverage.

**Actions:**
1. Migrate `Pre-built-Chains/` (`cardType: chain`).
2. Migrate known `extended` cards.
3. Remove body-level duplicate metadata (category header line can remain for human reading or become generated — pick one, document in AUTHORING.md).

**Verify:**

```bash
npm run build && npm run validate:cards && npm run check:counts
npm run derive:refs
```

**Commit:** `step-7.4: frontmatter migrate chain and extended cards`

---

### Step 7.5 — Manifest slim-down (optional but recommended)

**Objective:** Manifest holds ids + file paths + category colors; card frontmatter holds name/tagline/cardType.

**Actions:**
1. Decide split:
   - **Option A (conservative):** manifest unchanged; frontmatter duplicates fields — validator ensures sync.
   - **Option B (slim manifest):** manifest `{ file, id, category, color }`; name/tagline/cardType read from frontmatter at build.
2. If Option B: migration script updates manifest; update check-counts if name lookups change.

**Verify:** full build + deck search by name still works.

**Commit:** `step-7.5: slim manifest to ids paths categories`

---

### Step 7.6 — Final integration commit

**Objective:** Documentation and cleanup.

**Actions:**
1. Update README build table, CLAUDE.md, AUTHORING.md to describe final architecture.
2. Remove one-off migration scripts or move to `scripts/archive/`.
3. Delete `scripts/extract-situations.mjs` if superseded.

**Verify:**

```bash
npm run build
npm run check:counts
npm run validate:cards
npm run snapshot:test
npm run derive:refs    # should report in sync
```

**Commit:** `step-7.6: finalize architecture migration docs and cleanup`

---

## Progress log

Agents **append one row per completed step**:

| Step | Date | Commit | Verify | Notes |
|------|------|--------|--------|-------|
| 0.1 | | | | |
| 0.2 | | | | |
| … | | | | |

---

## Task checklist (copy for issue tracker)

```
[x] 0.1 Baseline snapshot + migration log
[x] 0.2 npm script stubs
[x] 1.1 cardType in manifest + JSON Schema
[x] 1.2 AUTHORING.md
[x] 2.1 validate-cards warn mode
[x] 2.2 connection-by-id dual support
[x] 2.3 migrate all connections to id format
[x] 2.4 validator enforced in build
[x] 3.1 parse-skill remark module
[x] 3.2 deck uses parse-skill
[x] 3.3 graph uses parse-skill
[x] 3.4 validator uses parse-skill
[x] 4.1 derive-refs report-only
[x] 4.2 reconcile manifest refs
[x] 4.3 build derives refs; drop reference-sections read
[x] 4.4 delete reference-sections.json
[x] 5.1 _ai-index preamble split
[x] 5.2 generate-ai-index.mjs
[x] 5.3 ai-index in build pipeline
[x] 6.1 extract situations.json
[x] 6.2 build situation-finder from template
[x] 6.3 document situations source
[x] 7.1 frontmatter schema
[x] 7.2 pilot frontmatter card
[x] 7.3 batch migrate standard cards (per-category commits)
[x] 7.4 migrate chain + extended cards
[-] 7.5 optional manifest slim-down (skipped — D1=Option A)
[x] 7.6 final docs + cleanup
```

**Estimated commits:** 28–35 (more if Step 7.3 splits per category).

---

## Out of scope (do not expand this plan)

- Migrating `docs/index.html`, `executive-scan.html`, `quick-reference.html` to generated (separate plan).
- SQLite/content-graph backend (Recommendation 8 / Level 3).
- Changing skill ids or renaming categories.
- Rewriting card prose content.

---

## Quick reference — verify commands after any step

```bash
npm run build                 # deck + graph + guides + ai-index + situation-finder + validate + counts
npm run validate:cards
npm run check:counts
npm run derive:refs           # after Phase 4
npm run snapshot:test         # after Phase 3
```

Expected healthy output includes:

```
✓ all hard-coded counts match the manifest.
Wrote docs/deck.html (262 skills, ...)
```

Connection count should remain stable from baseline unless you intentionally add/remove connections.
