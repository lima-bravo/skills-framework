# Per-Card Review Template

Copy this block for each skill under review. Work top to bottom; do not mark a card
`verified`/`fixed` in `_review-tracker.md` until every check below has an outcome.

The governing rule: **improve within the current framework.** Keep the fixed 6-section
structure, the card's voice, and its place in the category. Do not invent new sections,
rename categories, or change a card's id. If a card seems to need a structural change,
mark it `flagged` and raise it rather than acting unilaterally.

---

## Review: `#<id>` <Name>

- **File:** `<Category>/<filename>.md`
- **Date:** <YYYY-MM-DD>
- **Reviewer:** Claude
- **Outcome:** `verified` | `fixed` | `flagged`

### 1. Structure integrity
- [ ] Title (`# Name`) and tagline (`*...*`) present and accurate.
- [ ] Category/header line present and points to the right category + `docs/deck.html`.
- [ ] All six sections present and in order: **Definition · Mental Model · Practitioner Heuristics · Common Failure Modes · Worked Example · Connections**.
- [ ] `## References` section present after Connections.
- [ ] Footer link block intact.
- [ ] Manifest entry (`skills-manifest.json`) matches: id, name, category, file path, color.

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

### 4. References (high-rigor)
- [ ] Each reference is a **real, existing source** (title exists).
- [ ] **Author and year are correct.**
- [ ] The source **actually supports** the model/claim it's attached to (not a loose topical match).
- [ ] References are sufficient: the card's central claims are backed.
- [ ] Each reference is registered in `skills-manifest.json` → top-level `refs` array, with this skill listed in its `skills` array (id, name, color). No duplicate ref entries.

### 5. Connection integrity
- [ ] Every `→` link in **Connections** resolves to an existing card file.
- [ ] Each connection's one-line rationale is accurate (the relationship is real).
- [ ] Warranted **backlinks** exist: cards named here also reference this card where it makes sense.
- [ ] After any change, `npm run build` regenerates the graph so connections/counts stay in sync.

### 6. Verdict
- **Outcome:** <verified | fixed | flagged>
- **Changes made:** <bullet list, or "none">
- **Sources checked:** <links/titles consulted for fact-checking>
- **Open questions / flags:** <anything needing a human decision>

### 7. Sync checklist (only if anything changed)
- [ ] Card file saved.
- [ ] `skills-manifest.json` updated (refs / metadata) if needed.
- [ ] Backlinks added to related cards if needed.
- [ ] `npm run build` run (rebuilds deck, graph, guides) **and** `npm run check:counts` passes.
- [ ] `_ai-index.md` updated if inventory/cluster info changed.
- [ ] Row updated in `_review-tracker.md` (box ticked, `st:` set, `n:` note written).

---

> Repeat the block above for the next card. Keep completed review blocks in a running
> log file (e.g. `_review-log.md`) if you want an audit trail; the tracker row is the
> minimum record.
