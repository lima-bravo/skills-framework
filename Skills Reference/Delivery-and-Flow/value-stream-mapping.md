# Value Stream Mapping
*Diagnose end-to-end flow from customer need to value delivered*

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Value Stream Mapping (VSM) is a diagnostic technique that visualizes every step a unit of work passes through from initial trigger to customer delivery, recording for each step both process time (active work) and lead time (wall-clock), plus rework loops and handoffs. Originated in Toyota's "material and information flow mapping" (Mike Rother & John Shook, *Learning to See*, 1999) and adapted to knowledge work by Karen Martin and Mike Osterling (*Value Stream Mapping*, 2013), it surfaces where time is spent — almost always in waits, handoffs, and rework rather than active work.

---

## Mental Model

Picture an x-ray of a process. The bones (process steps) are visible to managers; the soft tissue (waits, handoffs, queues) is invisible until you image it. A typical VSM reveals that 90–98% of total lead time is wait time, that the same item touches 12–25 hands when leadership thought it was 3, and that one quiet handoff between two teams accounts for half the total elapsed time. The map is not the territory, but a well-built VSM is one of the rare cases where the map shows things the territory's inhabitants cannot see from inside.

---

## Practitioner Heuristics

- **Walk it, don't model it.** A VSM built from interviews and slide decks is fiction. Walk the actual work — follow one item from trigger to delivery, timing each step.
- **Map current state before future state.** The temptation is to design the ideal; the value is in confronting the actual.
- **Record process time and lead time per step.** The ratio (process time ÷ lead time) at each step is the local flow efficiency; the ratio across the whole map is the system flow efficiency.
- **Mark every wait and every handoff.** Most improvement opportunities live at boundaries, not inside teams.
- **Pick one item type per map.** Different item types follow different paths; one map per type beats a tangled super-map.

---

## Common Failure Modes

- **Mapping in a conference room.** The result is a politically negotiated diagram, not a diagnosis.
- **Designing future-state without acting on current-state.** The future-state map becomes a decoration; nothing changes because no countermeasures were owned.
- **Mapping too coarsely.** "Build → Test → Release" hides where the time actually goes. The map needs the granularity of the real handoffs.
- **Treating the map as a deliverable.** The map is an instrument for conversation and action; if no action follows, the work was waste.

---

## Worked Example

A bank wants to cut loan origination time from 23 days to 7. A VSM workshop traces one loan: trigger to first review (3 days wait), review to underwriting (5 days wait, 2 hours work), underwriting to legal (4 days wait, 4 hours work), legal to operations (6 days wait), ops to disbursement (5 days wait, 1 hour work). Process time totals about 8 hours; lead time totals 23 days. Flow efficiency: 4%. Two interventions emerge: collapse the underwriting/legal handoff into a single review (saves 4 days), and run intake-to-review continuously rather than in daily batches (saves 3 days). Loan origination lead time drops to 10 days in 90 days, with no new headcount.

---

## Connections

→ [133·Flow Efficiency](flow-efficiency.md) — VSM produces the numerator and denominator.
→ [18·Bottlenecks](../Systems/bottlenecks.md) — the longest wait identifies the constraint.
→ [147·Gemba](gemba.md) — VSM is a structured form of going and seeing.
→ [136·Batch Size Reduction](batch-size-reduction.md) — VSM exposes where batches accumulate.
→ [28·Conway's Law](../Systems/conways-law.md) — handoffs between teams reflect org boundaries; future-state may require org change.

---

## References

- *Learning to See: Value-Stream Mapping to Create Value and Eliminate Muda* — Mike Rother & John Shook (1999).
- *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation* — Karen Martin & Mike Osterling (2013).
- *The DevOps Handbook* — Gene Kim, Jez Humble, Patrick Debois & John Willis (2016).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
