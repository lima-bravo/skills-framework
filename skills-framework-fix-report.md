# Skills Framework — Fix Report
**Generated:** 2026-06-10  
**Repository:** https://github.com/lima-bravo/skills-framework  
**Commit reviewed:** post-update (pulled from `master`, fast-forward from c5d3be3 to 23a650b)  
**Report audience:** another AI agent tasked with applying fixes to the local repository at H:

---

## Status Summary

The framework is in good structural shape. All automated validators pass:
- `validate-cards`: 262 cards, 0 errors, 3 warnings (acceptable — chain cards with non-standard step formats)
- `check-counts`: all hardcoded counts match manifest
- `snapshot-test`: deck and graph metrics match baseline

The repository is mid-way through a documented per-card review pass. **136 of 262 cards are reviewed; 126 remain marked `st: todo`** in `_review-tracker.md`. The issues below are scoped to what can be fixed now without completing that full pass, plus specific defects found in the newly added cards.

---

## Issue Categories

Issues are grouped by type and priority. All file paths are relative to `Skills Reference/`.

---

## 1 — Missing `supports` field in new card references  
**Priority: High — breaks bibliography rendering**  
**Applies to: 6 cards**

Per `AUTHORING.md`, the `references` frontmatter array uses the structure `{ title, authorYear, supports? }`. The `supports` field is optional but expected on all non-chain standard cards to populate the bibliography tooltip. Several newly added cards are missing it on some or all of their refs.

**Fix:** Add a `supports` value to each ref entry listed below. The value should be one sentence describing how the source supports the card — see existing cards such as `Consulting-Craft/situation-assessment.md` for the correct pattern.

| File | Ref title missing `supports` |
|------|-------------------------------|
| `Consulting-Craft/structured-problem-solving.md` | `Cours d'économie politique` (Pareto, 1896) |
| `Consulting-Craft/coaching-stance.md` | `Humble Inquiry` (Schein 2013) |
| `Consulting-Craft/coaching-stance.md` | `Humble Consulting` (Schein 2016) |
| `Consulting-Craft/coaching-stance.md` | `Flawless Consulting` (Block 1981/2011) |
| `Consulting-Craft/coaching-stance.md` | `The Trusted Advisor` (Maister et al. 2000) |
| `Consulting-Craft/facilitation.md` | `The Surprising Power of Liberating Structures` (Lipmanowicz & McCandless 2014) |
| `Consulting-Craft/facilitation.md` | `Facilitator's Guide to Participatory Decision-Making` (Kaner 2014) |
| `Consulting-Craft/facilitation.md` | `The Art of Gathering` (Parker 2018) |
| `Leadership/span-of-control.md` | `The Mythical Man-Month` (Brooks 1975/1995) |
| `Leadership/span-of-control.md` | `Team Topologies` (Skelton & Pais 2019) |
| `Delivery-and-Flow/technical-debt.md` | `Working Effectively with Legacy Code` (Feathers 2004) |
| `Delivery-and-Flow/technical-debt.md` | `Accelerate` (Forsgren et al. 2018) |
| `Delivery-and-Flow/reliability-vs-velocity.md` | `Accelerate` (Forsgren et al. 2018) |

Note: `Consulting-Craft/facilitation.md` already has one ref with a `supports` field (`Humble Consulting` → coaching stance); use that format for the missing ones.

---

## 2 — Manifest: Three duplicate `Geoffrey West / Scale` ref entries  
**Priority: High — manifests as duplicate ref pills in the deck**

The manifest (`skills-manifest.json`) contains three separate entries for the same book by Geoffrey West:

1. `"Scale"` — linked to skills 21, 80, 238
2. `"Scale: The Universal Laws of Growth, Innovation, Sustainability, and the Pace of Life in Organisms, Cities, Economies, and Companies"` — linked to skill 21 only
3. `"Scale: The Universal Laws of Life, Growth, and Death in Organisms, Cities, and Companies"` — linked to skill 238 only

These are the same book (West, 2017) with three different title variants. The full correct title is *Scale: The Universal Laws of Growth, Innovation, Sustainability, and the Pace of Life in Organisms, Cities, Economies, and Companies*.

**Fix:**
1. Merge the three entries into one canonical entry with the full title, `authorYear: Geoffrey West (2017)`, linked to skills 21, 80, and 238.
2. Run `npm run check:counts` and `npm run build` to confirm the guard passes after the merge.

This follows the same merge procedure used for the *Deep Work* and *Good Strategy Bad Strategy* duplicates documented in `_review-tracker.md`.

---

## 3 — `Structured Problem Solving`: `Cours d'économie politique` ref is present in manifest but missing from card body  
**Priority: Medium — reference-gap type A**

The manifest links ref `Cours d'économie politique` (Pareto, V. 1896) to skill #253 (Structured Problem Solving). The card's frontmatter includes the ref title and authorYear, but the ref entry is missing its `supports` field (covered by Issue 1 above) and also does not appear to be linked back from the manifest's skill list (the skill record at key `Consulting-Craft/structured-problem-solving.md` has no `refs` array).

**Fix:** After fixing the `supports` field (Issue 1), run `npm run reconcile:refs -- --write` to propagate the card's ref declarations into the manifest's `refs[].skills` arrays. Then run `npm run check:counts` to confirm.

---

## 4 — `_reference-gaps.md` B1 false positive: "Toyota Production System" matched to "Scale"  
**Priority: Low — documentation only, no functional impact**

`_reference-gaps.md` records the following B1 entry:

```
- #132 WIP Limits: 'Toyota Production System: Beyond Large-Scale Production'  ->  manifest ref: 'Scale'
```

This is a false positive from the fuzzy title matcher. `Toyota Production System: Beyond Large-Scale Production` (Taiichi Ohno, 1988) is correctly present in the manifest under its full title, linked to WIP Limits (#132), Kanban Method (#138), and Gemba (#147). It was incorrectly fuzzy-matched to Geoffrey West's *Scale* due to the word "Scale" appearing in both titles.

**Fix:** Delete this B1 entry from `_reference-gaps.md`. No card or manifest change is needed.

---

## 5 — 126 cards not yet covered by the review pass  
**Priority: Medium — ongoing work, not new defects**

The `_review-tracker.md` documents a full-rigor review pass. 126 cards remain at `st: todo`. Based on the pattern of fixes applied to the 136 reviewed cards, the unreviewed cards are expected to require the following (documented in the tracker's progress notes):

- Missing `---` section separators before `## References` (most common structural issue found in prior passes)
- Duplicate `---` footer lines
- Missing or stale `supports` fields in inline ref blocks (cards that have not yet been migrated to full frontmatter format)
- Reference gap type A: refs in manifest not yet added to card
- Reference gap type B2: refs cited on card not yet in manifest

The procedure for each card is documented in `_review-template.md`. The `_reference-gaps.md` file lists all outstanding gap items by card ID. The next unstarted card can be found by searching `_review-tracker.md` for `st: todo`.

**No action required in this report** — this is ongoing work per the existing procedure.

---

## 6 — New cards: `Situation Assessment`, `Coaching Stance`, and `Facilitation` have no `## Connections` or `## References` section in the card body  
**Priority: None — this is correct behaviour post-migration**

After the frontmatter migration (documented in `docs/architecture-migration-log.md`), connections and references live exclusively in the YAML frontmatter. The card body no longer includes `## Connections` or `## References` sections. This is correct per `AUTHORING.md`:

> After migration, `## Connections` and `## References` do not appear in the body.

No action required.

---

## 7 — `Pre-built-Chains/funnel-intake.md`: missing `## References` section  
**Priority: Low — chain cards do not require refs, but this chain cites no sources**

`funnel-intake.md` is a chain card (`cardType: chain`) and has no `references` field in its frontmatter. Chain cards are exempt from the references requirement per `AUTHORING.md`. However, the card's steps draw heavily on First Principles (Aristotle, Descartes), Jobs to Be Done (Christensen, Moesta), Three Horizons (Baghai, Coley & White), and the Innovation Funnel literature — all of which already exist in the manifest.

**Fix (optional, low priority):** Add a `references` array to the frontmatter linking the most relevant 3–4 already-indexed refs. This is not blocking.

---

## 8 — `Structured Problem Solving`: Pareto ref authorYear format inconsistency  
**Priority: Low — cosmetic**

The `Cours d'économie politique` ref uses the format:
```yaml
authorYear: Pareto, V. (1896)
```

Most refs on this card and other new cards use the format `Author, F. (year)`, which is consistent. However, a few Consulting Craft cards use the reverse format `First Last (year).` (as seen in `coaching-stance.md`). Both are listed as accepted formats in `AUTHORING.md`. The Pareto entry itself is correctly formatted.

**No action required** — both formats are valid.

---

## 9 — Validator warnings: 3 chain cards with non-standard step sections  
**Priority: None — known acceptable**

`validate-cards` emits warnings for three chain cards:
- `Pre-built-Chains/capacity-planning.md`
- `Pre-built-Chains/transformation.md`  
- `Pre-built-Chains/crawl-walk-run.md`

These cards use alternate section naming rather than `## Step N` headers. The validator documents these as `warn-only`. No action required.

---

## Prioritised Fix Order

1. **Issue 2** — Merge the three Geoffrey West *Scale* duplicate entries in `skills-manifest.json`. Run `npm run build` and `npm run check:counts` after.
2. **Issue 1** — Add `supports` fields to the 13 ref entries across 6 cards listed in the table.
3. **Issue 3** — Run `npm run reconcile:refs -- --write` after Issue 1 is complete, then `npm run check:counts`.
4. **Issue 4** — Delete the false-positive B1 entry for WIP Limits / Toyota Production System from `_reference-gaps.md`.
5. **Issue 5** — Continue the per-card review pass per `_review-tracker.md` and `_review-template.md` (ongoing work, no specific fix action required from this report).

Issues 6, 7, 8, and 9 require no action or are explicitly optional.

---

## What Was Checked

- Pulled latest `master` (fast-forward, 496 files changed)
- Ran `validate-cards.mjs`, `check-counts.mjs`, `snapshot-test.mjs` — all pass
- Read all 5 new Consulting Craft cards in full
- Read all 8 other new cards (Playing to Win, Incentive Design, Span of Control, Technical Debt, Reliability vs Feature Velocity, Fixes That Fail, Systems Thinking, Funnel Intake) in full
- Ran automated structural checks across all 262 cards for broken inter-card links, duplicate footers, and missing sections
- Cross-referenced `skills-manifest.json` for ref integrity issues
- Read `_review-tracker.md`, `_reference-gaps.md`, and `AUTHORING.md` in full
- Verified the Geoffrey West and Toyota Production System ref situations directly against manifest data
