---
id: 143
name: Flow Metrics
category: Delivery & Flow
cardType: standard
tagline: "Portfolio-level health: distribution, velocity, time, efficiency, load"
connections:
  - id: 142
    rationale: DORA measures delivery capability; flow metrics measure portfolio health.
  - id: 144
    rationale: flow metrics describe outputs; outcome metrics anchor the why.
  - id: 158
    rationale: flow metrics are the dashboard for portfolio decisions.
  - id: 133
    rationale: Flow Framework's efficiency metric is the value-stream-level version.
  - id: 132
    rationale: Flow Load makes WIP visible at portfolio scale.
  - id: 138
    rationale: Kanban is the primary system that generates the consistent flow data flow metrics require; without a pull system, the metrics have no stable source.
  - id: 214
    rationale: Crawl / Walk / Run uses flow metrics as the operational measurement layer for run-stage experiments on process or delivery mechanisms
references:
  - title: Project to Product
    authorYear: Mik Kersten (2018)
    supports: the Flow Framework — flow items, velocity, time, efficiency, and load — as business-level metrics for product value streams.
  - title: Accelerate
    authorYear: Nicole Forsgren, Jez Humble & Gene Kim (2018)
    supports: the DORA delivery-level metrics that complement flow metrics for a complete performance picture.
  - title: The Phoenix Project
    authorYear: Gene Kim, Kevin Behr & George Spafford (2013)
    supports: the narrative case for flow-oriented thinking in software delivery; the consequences of ignoring flow metrics.
---

# Flow Metrics

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

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

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
