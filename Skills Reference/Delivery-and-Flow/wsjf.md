# WSJF (Weighted Shortest Job First)
*Sequence by cost of delay per unit of work*

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Weighted Shortest Job First is a sequencing rule for work under scarcity: prioritize items by cost of delay divided by job size. WSJF maximizes value delivered per unit of scarce capacity. It was developed for queueing systems and operationalized for product development by Donald Reinertsen (*Principles of Product Development Flow*, 2009); SAFe institutionalized a discrete-scoring variant for enterprise use. The rule's power is in what it forces explicit: a job that "feels important" but has low time-criticality, or one with high cost of delay but is enormous, both move down the queue.

---

## Mental Model

Imagine a one-lane drawbridge with a queue. Letting through the boat with the most valuable cargo seems right — but a small fast boat that costs $50k/hour to delay should go before a large slow boat that costs $10k/hour to delay, because the small boat will clear the bridge in 5 minutes and the large one in an hour. WSJF formalizes this intuition: it's not the most valuable item that goes first; it's the item that maximizes value-per-time-on-the-bridge. The same arithmetic applied to a quarterly portfolio queue reorders the work in ways no business-case ranking would.

---

## Practitioner Heuristics

- **Use buckets, not numbers.** Three buckets each for value, time-criticality, risk/opportunity, and size produce comparable WSJF scores without false precision.
- **Re-score quarterly.** Cost of delay and size both move; a stale WSJF is a stale priority list.
- **Force-rank the bottom.** WSJF only differentiates if items at the bottom are visibly different from items at the top.
- **Beware "size = 1."** Items that look small often hide dependencies, integration work, or coordination cost that WSJF size needs to capture.
- **Pair with WIP limits.** WSJF tells you what to start next; WIP limits keep you from starting too many.

---

## Common Failure Modes

- **WSJF as a spreadsheet artifact.** Calculated once, ignored when politics meet the queue.
- **Inflated time-criticality.** Every initiative claims hard deadline pressure; WSJF only differentiates when scoring is honest.
- **Sizing in story points.** Story-point sizing varies team-to-team; size in WSJF should be relative across the items being compared, not absolute.
- **Skipping risk/opportunity.** WSJF without the third component (risk reduction or opportunity enablement) underweights enabling work.

---

## Worked Example

A platform team's quarterly intake holds 22 candidate initiatives funded for capacity that fits 9. A WSJF exercise reveals: 4 items have very high cost of delay but are also very large (CoD/size ≈ mid-rank), 2 items have moderate CoD but tiny size (CoD/size = top-rank), and 1 item has top CoD but is the largest (CoD/size = mid-rank). The naïve "most valuable first" ranking would have selected the 4 largest items; WSJF promotes the 2 small high-rank items first, slots the 4 large items in next, and pushes 8 items below the cut. End-of-quarter outcomes: the 2 small items unblock substantial downstream value worth ~$1.8M; the larger items deliver as planned. The team's portfolio committee adopts WSJF as the standing prioritization mechanism.

---

## Connections

→ [**Cost of Delay**](cost-of-delay.md) — the numerator of WSJF.
→ [**Lean Portfolio Management**](lean-portfolio.md) — WSJF is the LPM sequencing rule.
→ [**Trade-offs**](../Economics/trade-offs.md) — WSJF is a structured trade-off mechanism.
→ [**Bottlenecks**](../Systems/bottlenecks.md) — WSJF works on bottleneck capacity.
→ [**Probabilistic Forecasting**](probabilistic-forecasting.md) — pairs to forecast value delivery under a WSJF queue.

---

## References

- *The Principles of Product Development Flow* — Donald G. Reinertsen (2009).
- *SAFe* — Dean Leffingwell (Scaled Agile Framework — WSJF formulation).
- *Lean Enterprise* — Jez Humble, Joanne Molesky & Barry O'Reilly (2014).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
