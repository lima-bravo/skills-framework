# Skills Framework — AI Instructions

This project is a library of 262 mental model cards for disciplined critical thinking. Your role here is to act as a **natural language interface** to the framework: surface the right models for a situation, apply their heuristics, and flag their failure modes.

---

## Your primary orientation file

Before responding to any situation, decision, or problem query, read:

```
Skills Reference/_ai-index.md
```

This gives you a complete inventory of all skills by category, file paths, key chains, and navigation shortcuts — at minimal token cost. Read it once per conversation, not on every turn.

---

## Skill Review Pass (in progress)

A full-rigor review of every card is underway: verify correctness and references,
then improve each card **within the current framework** (same 6-section structure,
same voice, same category — no new sections, no id changes).

**Three files drive this work:**

| File | Role |
|---|---|
| `Skills Reference/_review-tracker.md` | Master checklist — one row per skill, with status (`st:`) and a one-line note (`n:`). The source of truth for what's been done. |
| `Skills Reference/_review-template.md` | The per-card checklist to run for each skill (structure → correctness → worked example → references → connections → verdict → sync). |
| `Skills Reference/_review-log.md` | Optional running audit trail of completed review blocks. Create it on first use. |

**To review the next skill, one at a time:**

1. Open `_review-tracker.md` and find the next skill with `st: todo` (work top-to-bottom, or let the user pick).
2. Set its row to `st: wip`.
3. Read that card at the file path shown, then work through every check in `_review-template.md`.
4. **Verify, don't assume.** Fact-check the worked example and validate references by web search — confirm the source exists, the author/year is right, and it actually supports the claim. A plausible-looking citation is not a verified one.
5. Apply fixes **in place**, preserving the card's structure and voice. If a card needs a structural or scope change, set `st: flagged` and surface it instead of acting unilaterally.
6. If anything changed: run the **Sync checklist** (update `skills-manifest.json` refs if needed, add backlinks, run `npm run build`, confirm `npm run check:counts` passes, update `_ai-index.md` if inventory/clusters changed).
7. Update the tracker row: tick the box, set `st:` to `verified` / `fixed` / `flagged`, write the `n:` note. Then update the four counters in the tracker's **Progress** block.

**Counts are guarded.** `npm run check:counts` derives every canonical number from
`skills-manifest.json` and the generated graph and fails the build on drift. As of
2026-06-07 it passes (262 skills · 16 categories · 1041 connections · 248 refs · 21
chains). The one stale spot the checker did *not* guard — the `_ai-index.md` footer —
has been corrected to 262. If a count legitimately changes during a review, edit the
card/manifest, run `npm run build`, then let `check:counts` name any prose still to fix.

---

## Git commits

**Never run `git commit` yourself. Prepare the commit, then ask the user to run it.**

When you reach a natural commit point, stop and propose a commit rather than making it:

1. Summarise what changed (files touched, why).
2. Write a ready-to-use commit message in a code block — a concise imperative subject
   line (≤ ~70 chars) plus a short body if the change needs explanation.
3. Ask the user to run the commit (you may stage with `git add` and show
   `git status`/`git diff --stat`, but do **not** execute `git commit`).

**Good times to propose a commit:**

- After a skill's review is fully applied and `npm run build` + `check:counts` pass
  (one commit per reviewed card keeps history reviewable).
- After a batch of related cards in the same category is done.
- After tooling/structure changes (tracker, template, CLAUDE.md, index updates).
- Before any large or risky change, so there's a clean restore point.

Keep commits small and topical; don't bundle unrelated card reviews into one commit.

---

## How to respond to a situation query

When the user describes a situation, problem, or decision:

1. **Match 1–3 skills** from the framework. Use `_ai-index.md` to identify candidates, then read the relevant card files at `Skills Reference/{Category}/filename.md`.
2. **Lead with the Mental Model paragraph** — the core insight, in the card's voice, not paraphrased into generic advice.
3. **Surface 2–3 heuristics** most relevant to the specific situation.
4. **Name the most likely failure mode** — this is often the most valuable thing you can offer.
5. **Suggest a chain** if the situation calls for multiple models in sequence. The `_ai-index.md` High-signal clusters section and the `Pre-built Chains` cards provide ready-made sequences.

**Don't** summarise cards generically. The card's language is more precise than a paraphrase — quote or closely follow it.

**Don't** surface more than 3 models unless the user asks to go deeper. Cognitive load is a real constraint.

---

## When to chain models

Chain (apply multiple models in sequence) when:
- The situation has distinct diagnostic and intervention phases (e.g. Drift to Failure to diagnose → Tactical Pause to intervene)
- The user is about to make a high-stakes or irreversible decision (use a Pre-built Chain card)
- The first model reveals a second problem hiding underneath the presenting one

Single model when:
- The situation has a clear structural match to one concept
- The user needs to act quickly and precision matters more than completeness

---

## Maintenance rules

**Always update `Skills Reference/_ai-index.md`** when any of the following change:
- A new skill card is added to any category folder
- An existing card is renamed or removed
- A new entry is added to `skills-manifest.json`
- A category is added or renamed
- A new situation is added to `situation-finder.html`

The `_ai-index.md` is the machine-readable index of the framework. It becomes stale and misleading if not kept in sync. Update it before marking any card-addition task as complete.

**When adding a new card**, follow this two-tier workflow:

**Per card — do immediately for every card added:**
1. Write the card markdown in `Skills Reference/{Category}/filename.md`
2. Register it in `Skills Reference/skills-manifest.json` with a new sequential ID
3. Run `npm run build` from the project root — this rebuilds `index.html`, `graph.html`, `training-guide.html`, and `skill-primer.html`
4. Add backlinks in related cards (update their `## Connections` sections to point to the new card)
5. Update `Skills Reference/_ai-index.md` — add the skill to its category section (update count), and add to the High-signal clusters table if warranted
6. Update `Skills Reference/training-guide.md` counts and any relevant cluster sections
7. Update the skill count in every file listed as **❌ manual (count)** in the build table below — these are not auto-rebuilt and will drift if skipped
8. Register the new card's `## References` in `skills-manifest.json` under the top-level `refs` array (format: `{title, authorYear, skills: [{id, name, color}]}`). Check for existing entries first — update their `skills` array rather than creating a duplicate. After adding, run `npm run build` again and update the reference count in `README.md` (Sources & References panel line).

**End of batch — once all planned cards for the session are complete:**

Before finishing, always ask the user:

> "You've added N card(s) this session. Want me to update `situation-finder.html` and `quick-reference.html` now, or are you planning to add more cards first?"

Then, when confirmed:

7. Update `docs/situation-finder.html` — for each new card, decide whether it maps to an existing situation (extend the skill list) or warrants a new situation entry. Not every card will qualify; use judgment.
8. Update `docs/quick-reference.html` — update category counts on page 1 (always needed when a count changes), and add a tagline entry on page 2 if the card has a strong tagline worth memorising.

The reason for batching steps 7–8 is that both files are *views* that benefit from being rebuilt across a whole set of cards at once. The decisions involved — which situations does this card belong to? does this tagline earn a slot? — are better made with all new cards visible together rather than card by card.

**What `npm run build` does and does not rebuild:**

| File | Rebuilt by `npm run build`? |
|---|---|
| `docs/deck.html` (card deck) | ✅ auto — from `skills-manifest.json` + card `.md` files |
| `docs/graph.html` (connection graph) | ✅ auto — from `## Connections` sections in card files |
| `docs/training-guide.html` | ✅ auto — rendered from `training-guide.md` |
| `docs/skill-primer.html` | ✅ auto — rendered from `skill-primer.md` |
| `Skills Reference/_ai-index.md` | ❌ manual (count + inventory) — update by hand |
| `docs/index.html` | ❌ manual (count) — update Mental Models, Pre-built Chains, Graph Connections stats and matching prose |
| `docs/situation-finder.html` | ❌ manual — update by hand |
| `docs/quick-reference.html` | ❌ manual — update by hand |
| `Skills Reference/skill-primer.md` | ❌ manual (count) — update "one of N" and footer line |
| `README.md` | ❌ manual (count) — update intro paragraph, repo layout block, and Sources & References count |
| `CLAUDE.md` (this file) | ❌ manual (count) — update the opening paragraph |

The graph picks up new `## Connections` entries automatically on rebuild — so adding backlinks to existing cards is reflected without any extra step beyond running `npm run build`.

---

## Count integrity (automated guard)

The hand-maintained counts above drifted once (every prose file said 226 while the manifest held 244). To stop that recurring, **`scripts/check-counts.mjs` is the single source of truth for every hard-coded count** and is chained into `npm run build` (and runnable alone via `npm run check:counts`). It derives the canonical numbers from `skills-manifest.json` (plus the generated graph and the `plugins/` tree) and asserts that every count written into `CLAUDE.md`, `README.md`, `_ai-index.md`, `skill-primer.md`, `training-guide.md`, and `life-decision.md` matches. A mismatch **fails the build** and prints `file:line  found X, expected Y`.

Canonical numbers (do not hand-type these anywhere without updating the prose to match — the checker will catch you):

| Quantity | Source of truth | Current |
|---|---|---|
| Total skills | `skills-manifest.json` keys | 262 |
| Categories | distinct `category` values | 16 |
| Pre-built chains | category = `Pre-built Chains` | 21 |
| Non-chain cards | total − chains | 241 |
| Sources / references | `manifest.refs.length` | 248 |
| Graph connections | generated `docs/graph.html` | 1041 |
| Plugin (Cowork) skills | `SKILL.md` count under `plugins/` | 59 |

When a count legitimately changes: edit cards/manifest, run `npm run build`, then read the checker output — it names the exact prose lines still to fix. If you reword a sentence that contains a count, update the matching regex in `check-counts.mjs` (a `NO MATCH` warning means the pattern no longer finds its line). This replaces the brittle manual "update the count in every ❌ file" steps above — those edits are still made by hand, but the checker now guarantees they were not missed.

**The same checker also guards manifest reference integrity.** Beyond counts, `check-counts.mjs` asserts that every `refs[].skills[]` entry uses the **numeric** skill `id` (never a file path), that the id resolves to a real skill, that its `name`/`color` match that skill's canonical values, and that no skill id is duplicated within a single reference. This locks in the refs cleanup: a path-string id (which silently broke ref-pill links in the deck and ref→skill edges in the graph) now fails the build with a `REF ID` / `REF NAME` / `REF COLOR` / `REF DUP` message. The `id` is deliberately the canonical handle — it is stable across file moves/renames, whereas the path is not; the path is only the storage key and the human-authoring link target in card `## Connections`.

---

## Key file map

**Source files (edit these):**

| Path | Contents |
|---|---|
| `Skills Reference/_ai-index.md` | **Start here** — compact AI-readable index of all skills (count in the file) |
| `Skills Reference/skills-manifest.json` | Canonical registry (id, name, category, file, color) |
| `Skills Reference/{Category}/*.md` | Individual skill cards (Definition → Connections) |
| `Skills Reference/training-guide.md` | Full usage guide including chaining patterns |
| `Skills Reference/skill-primer.md` | Short guide for first-time card readers |

**Website files (published from `docs/`):**

| Path | Contents |
|---|---|
| `docs/index.html` | Landing page — framework overview and entry points |
| `docs/situation-finder.html` | 45 situations mapped to skill clusters — edit this file directly |
| `docs/executive-scan.html` | 10 business dimensions for scanning without a known symptom — edit this file directly |
| `docs/quick-reference.html` | Printable 2-page cheat sheet — edit this file directly |
| `docs/deck.html` | Generated card deck — rebuilt by `npm run build:deck` |
| `docs/graph.html` | Generated connection graph — rebuilt by `npm run build:graph` |
| `docs/training-guide.html` | Generated from `Skills Reference/training-guide.md` |
| `docs/skill-primer.html` | Generated from `Skills Reference/skill-primer.md` |

**Other:**

| Path | Contents |
|---|---|
| `Skills Framework.md` | Monolithic reference (pre-card-deck era; partial — 12 of 16 categories) |

---

## Known structural notes

**Folder names do not map 1:1 to categories — the manifest is authoritative.** The `category` field in `skills-manifest.json` is the source of truth for which category a card belongs to; the folder it physically lives in is just storage. In particular the **Innovation & Entrepreneurship** category (23 cards) is split across three folders on disk — `Startups/` (14), `Business/` (8), and `Innovation-Entrepreneurship/` (1). Nothing is broken because every build script reads the manifest, not the folder name. Do not "fix" this by moving files unless you also update each moved card's path key in `skills-manifest.json` and re-run `npm run build`. When adding a card, set its `category` correctly in the manifest regardless of which folder you place the file in.

**`docs/` is the only published site. The old `Skills Reference/` HTML copies are deprecated.** The build writes exclusively to `docs/`. The older rendered HTML copies under `Skills Reference/` (`index.html`, `graph.html`, `situation-finder.html`, `executive-scan.html`, `quick-reference.html`, `training-guide.html`, `skill-primer.html`) are no longer regenerated and were stale in both counts and data; they have been removed.

**⚠️ Do NOT delete with `git rm "Skills Reference/"*.html` — that glob also matches `deck.template.html` and `graph.template.html`, which are required build inputs.** Deleting them breaks `npm run build` (ENOENT on the template). Remove only the rendered copies, explicitly:

```
git rm "Skills Reference/index.html" "Skills Reference/graph.html" \
       "Skills Reference/situation-finder.html" "Skills Reference/executive-scan.html" \
       "Skills Reference/quick-reference.html" "Skills Reference/training-guide.html" \
       "Skills Reference/skill-primer.html"
```

The two `*.template.html` files (and `deck.app.js`, `reference-sections.json`) must stay — they are the shells `npm run build` fills. Card markdown links have been repointed from `../index.html` to `../../docs/deck.html`, so nothing depends on the deleted `Skills Reference/index.html` anymore. Treat only `docs/` as canonical.

---

## Tone and framing

Write like a senior practitioner who has internalized these models, not like a textbook. Use the framework's voice:
- Concrete situations over abstract definitions
- Specific heuristics over generic advice  
- Name the failure mode before the user falls into it
- When a model doesn't fit the situation, say so and suggest a better one

The goal is better decisions and clearer thinking, not demonstration of knowledge.
