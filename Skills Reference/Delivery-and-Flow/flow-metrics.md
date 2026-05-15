# Flow Metrics
*Portfolio-level health: distribution, velocity, time, efficiency, load*

**Category:** [Delivery & Flow](../index.html#delivery-flow) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

The Flow Framework (Mik Kersten, *Project to Product*, 2018) defines five "flow metrics" applied at the value-stream or product level: **Flow Distribution** (mix of features, defects, debt, and risk being worked), **Flow Velocity** (items delivered per period), **Flow Time** (start-to-finish elapsed time per item), **Flow Efficiency** (active work ÷ total time), and **Flow Load** (items in progress). Together they answer the executive question DORA does not: "how is the portfolio investing its capacity, and is the system healthy?" Flow metrics complement DORA — DORA measures how good the engine is; flow metrics measure what the engine is being used for.

---

## Mental Model

If DORA is the speedometer, flow metrics are the dashboard. Flow Distribution shows where the gas is going; Flow Load shows engine strain; Flow Velocity shows output; Flow Time shows responsiveness; Flow Efficiency shows mechanical health. Critically, Flow Distribution makes visible the proportion of capacity spent on features vs. defects, debt, and risks — a number leadership rarely tracks and is usually shocked by. The framing gives portfolio leaders a stable lens to compare value streams over time without surrendering operational autonomy to teams.

---

## Practitioner Heuristics

- **Start with Flow Distribution.** It changes the conversation faster than any other metric: "we are spending 70% on features and 5% on debt — and wonder why incidents are rising."
- **Track at the value-stream level, not the team level.** Aggregating across a value stream avoids local optimization and reveals end-to-end behaviour.
- **Pair Velocity with Time and Efficiency.** Velocity alone invites gaming with smaller items; Time and Efficiency anchor it.
- **Trend, don't snapshot.** A single reading is noise. A six-month trend on each metric is the unit of insight.
- **Make Flow Load visible to portfolio committees.** Over-loaded value streams produce predictable failures; visible Flow Load makes scarcity arguments concrete.

---

## Common Failure Modes

- **Treating Flow Distribution as a quota.** Once leadership writes "20% debt" into policy, teams classify everything to fit. The metric is for visibility, not for compliance.
- **Mixing flow units.** Counting features and defects with the same weight obscures Flow Distribution; either normalize or report separately.
- **Confusing Flow Time with cycle time.** Flow Time spans the full value stream including upstream stages; cycle time is the team's slice.
- **Reporting metrics without action.** If the dashboard does not change behaviour, it is a display, not a management instrument.

---

## Worked Example

A 14-value-stream enterprise dashboards Flow Distribution for the first time. Aggregate: 78% features, 11% defects, 6% debt, 5% risk. Leadership had assumed roughly 50/50. The realization triggers a portfolio reset: caps on feature load until incident and debt trends reverse. Six months later, Distribution is 58/15/17/10; defect rates have halved, incident frequency is down 35%, and feature throughput is unchanged because the team is no longer firefighting. The CFO sees the trade and approves a continued bias toward debt and risk for the next two quarters.

---

## Connections

→ [**DORA Metrics**](dora-metrics.md) — DORA measures delivery capability; flow metrics measure portfolio health.
→ [**Outcome vs Output**](outcome-vs-output.md) — flow metrics describe outputs; outcome metrics anchor the why.
→ [**Lean Portfolio Management**](lean-portfolio.md) — flow metrics are the dashboard for portfolio decisions.
→ [**Flow Efficiency**](flow-efficiency.md) — Flow Framework's efficiency metric is the value-stream-level version.
→ [**WIP Limits**](wip-limits.md) — Flow Load makes WIP visible at portfolio scale.

---

## References

- *Project to Product* — Mik Kersten (2018).
- *Accelerate* — Nicole Forsgren, Jez Humble & Gene Kim (2018).
- *The Phoenix Project* — Gene Kim, Kevin Behr & George Spafford (2013).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../index.html)*
