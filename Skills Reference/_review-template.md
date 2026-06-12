# Per-Card Review Template

Copy this block for each skill under review. Work top to bottom; do not mark a card
`verified`/`fixed` in `_review-tracker.md` until every check below has an outcome.

The governing rule: **improve within the current framework.** Keep the fixed section
structure, the card's voice, and its place in the category. Do not invent new sections,
rename categories, or change a card's id. If a card seems to need a structural change,
mark it `flagged` and raise it rather than acting unilaterally.

> **Format note (post Phase 7 migration):** All cards now use YAML frontmatter for
> `connections` and `references`. The body contains only narrative sections. `## Connections`
> and `## References` must NOT appear in the body. Many cards also have a double `---`
> before the footer (migration artifact) — these are deferred to a bulk-fix pass; do not
> fix individually during reviews.

---

## Review: `#<id>` <Name>

- **File:** `<Category>/<filename>.md`
- **Date:** <YYYY-MM-DD>
- **Reviewer:** Claude
- **Outcome:** `verified` | `fixed` | `flagged`

### 1. Structure integrity
- [ ] YAML frontmatter present with all required fields: `id`, `name`, `category`, `cardType`, `tagline`.
- [ ] `connections:` is an array of `{id, rationale}` entries (numeric ids, no file paths).
- [ ] `references:` is an array of `{title, authorYear, supports}` entries.
- [ ] Body has exactly the required narrative sections in order:
  - **standard/extended:** Definition · Mental Model · Practitioner Heuristics · Common Failure Modes · Worked Example
  - **chain:** Step N sections only
- [ ] `## Connections` and `## References` do NOT appear in the body.
- [ ] Footer `*Part of the Skills Framework…*` present.
- [ ] Manifest entry matches: id, name, category, file path, color.

### 2. Conceptual correctness
- [ ] **Definition** is accurate, not misleading, and faithful to the concept's accepted meaning (check the named originator/source where one is claimed).
- [ ] **Mental Model** captures the real load-bearing insight — not a generic paraphrase.
- [ ] **Heuristics** are correct, actionable, and specific to this model (not filler advice).
- [ ] **Failure Modes** are real, and the *most likely* failure mode is named.
- [ ] No factual errors, overclaims, or conflation with adjacent models.

### 3. Worked example
- [ ] Example genuinely illustrates *this* model (not a neighbouring one).
- [ ] Every factual claim, name, date, and number in the example is verifiable and correct. **Search to confirm any specific figure or attribution.**
- [ ] If the example cites a real company/event, the account is accurate and not mythologised.

### 4. References (frontmatter)
- [ ] The `references:` frontmatter contains the most relevant sources for this card's central claims.
- [ ] Each reference is a **real, existing source** (title and author are correct).
- [ ] The source **actually supports** the model/claim it's attached to (not a loose topical match).
- [ ] Each reference entry has a useful `supports:` note.
- [ ] After any ref change: run `npm run derive:refs -- --write` then `npm run build`.

### 5. Connection integrity
- [ ] Every `connections:` entry uses a valid numeric `id` pointing to a real skill.
- [ ] Each connection's `rationale` accurately describes the relationship.
- [ ] Warranted **backlinks** exist: cards named in `connections` also have a reciprocal entry where it makes sense.
- [ ] After any change, `npm run build` regenerates the graph so connection counts stay in sync.

### 6. Verdict
- **Outcome:** <verified | fixed | flagged>
- **Changes made:** <bullet list, or "none">
- **Sources checked:** <links/titles consulted for fact-checking>
- **Open questions / flags:** <anything needing a human decision>

### 7. Sync checklist (only if anything changed)
- [ ] Card file saved.
- [ ] If refs changed: `npm run derive:refs -- --write` run to sync manifest.
- [ ] `npm run build` run (rebuilds deck, graph, guides) **and** `npm run check:counts` passes.
- [ ] Backlinks added to related cards' `connections:` frontmatter if needed.
- [ ] `_ai-index.md` updated if inventory/cluster info changed.
- [ ] Row updated in `_review-tracker.md` (box ticked, `st:` set, `n:` note written).

---

> Repeat the block above for the next card. Keep completed review blocks in a running
> log file (e.g. `_review-log.md`) if you want an audit trail; the tracker row is the
> minimum record.
