---
id: 133
name: Flow Efficiency vs Resource Efficiency
category: Delivery & Flow
cardType: standard
tagline: Why "everyone busy" makes delivery slower
connections:
  - id: 131
    rationale: flow efficiency is the inverse of the multiplier between work time and lead time.
  - id: 135
    rationale: high resource efficiency drives high wait time through queueing dynamics.
  - id: 132
    rationale: the primary lever to raise flow efficiency.
  - id: 35
    rationale: the economics card; this is the operational specialization.
  - id: 116
    rationale: slack at the individual level is the analogue of slack at the team level.
references:
  - title: "This Is Lean: Resolving the Efficiency Paradox"
    authorYear: Niklas Modig & Pär Åhlström (2012).
  - title: The Principles of Product Development Flow
    authorYear: Donald G. Reinertsen (2009).
  - title: Accelerate
    authorYear: Nicole Forsgren, Jez Humble & Gene Kim (2018).
---

# Flow Efficiency vs Resource Efficiency

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Flow efficiency is the percentage of an item's total lead time spent in active work, versus waiting. Resource efficiency is the percentage of a resource's available time spent working on something. They look like the same metric, but they trade off: pursuing high resource efficiency (utilization) creates queues, which inflate flow time; pursuing high flow efficiency requires slack capacity, which lowers resource utilization. Niklas Modig and Pär Åhlström developed the contrast in *This Is Lean* (2012), showing that knowledge-work organizations routinely achieve flow efficiencies of 5–15% while celebrating resource utilization above 90%.

---

## Mental Model

Two restaurants. Restaurant A keeps every cook flat-out — high resource efficiency — but orders pile up behind the slowest station, so the average meal takes 45 minutes. Restaurant B keeps cooks deliberately under-loaded so they can flex to whichever order is moving — high flow efficiency — and meals take 15 minutes. Restaurant A's manager sees idle cooks and panics. Restaurant B's manager sees idle cooks and considers it the price of fast meals. The executive instinct to "use every resource fully" is a direct cause of long lead times, because variability + high utilization = exploding queues.

---

## Practitioner Heuristics

- **Measure both.** Resource efficiency is the metric most orgs track; flow efficiency is the one customers feel. Show them side by side.
- **Target 30–50% flow efficiency before optimizing further.** Most organizations live below 20%. Above 50% requires unusual investment; below 20% is leaving large gains on the table.
- **Slack is a feature, not waste.** Reinertsen's queueing analysis: above ~70–80% utilization, small variability produces huge wait time. Plan capacity for variability, not for averages.
- **Pair with WIP limits.** Flow efficiency rises mechanically when WIP falls — there are fewer items waiting per active worker.
- **Frame it for executives via cost of delay.** Idle cost of a worker is small; cost of a delayed initiative is large. Once cost of delay enters the conversation, flow efficiency becomes the dominant metric.

---

## Common Failure Modes

- **Optimizing utilization in isolation.** This is the most common pattern. Local efficiency goes up, customer lead times get worse, and no one connects the two.
- **Confusing "busy" with "productive."** A worker switching between five items looks fully utilized; the items they're switching between are stalled.
- **Treating flow efficiency as a vanity metric.** If it's not tied to lead time and cost of delay, it becomes another number to game.

---

## Worked Example

A product team is pressured by finance to raise developer utilization from 75% to 90%. They oblige by loading each developer with more concurrent work. Three months later: utilization is 88%, but lead time on features has doubled, defect escape has tripled, and on-call load is up. The CFO sees the cost-per-feature metric crater. Investigation: flow efficiency dropped from 18% to 9% — features now spend 91% of their life waiting. The remediation is uncomfortable but mechanical: cut concurrent work by half, accept temporarily lower utilization, watch lead time fall. Within six weeks, utilization recovers naturally as rework drops.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
