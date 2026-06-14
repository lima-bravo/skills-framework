---
id: 208
name: Drift to Failure
category: Systems
cardType: standard
tagline: Systems don't suddenly fail — they migrate there, one reasonable decision at a time.
connections:
  - id: 207
    rationale: drift is partially enabled by skill- and rule-based performance that masks growing mismatches between operators' mental models and the actual state of the system
  - id: 120
    rationale: when teams optimise for measured performance metrics, they can drift toward meeting the metric while degrading the underlying reality the metric was meant to represent
  - id: 205
    rationale: each step of drift is easier to take because of commitment to prior decisions; reversal requires acknowledging that the accumulation of reasonable decisions has produced an unreasonable aggregate state
  - id: 199
    rationale: long periods without visible failure are mistaken for evidence of safety; the absence of past accidents is used to justify continued drift
  - id: 261
    rationale: drift to failure is a systems phenomenon; it is invisible at the component level and only visible in the system's trajectory
  - id: 196
    rationale: well-run AARs should look for drift signatures, not just proximate causes; asking "when did this start?" and "what decisions enabled each step?" is drift analysis
  - id: 197
    rationale: the operational intervention that creates the conditions for drift to become visible before it reaches the boundary
  - id: 244
    rationale: Drift to Failure is the universal precondition for organisational degradation; the scan begins here before examining the specific mechanisms that compound it
  - id: 260
    rationale: "Fixes That Fail is the mechanism that produces drift: each symptomatic fix relieves the pressure that would force a fundamental solution, allowing the root cause to persist and grow."
  - id: 264
    rationale: Drift to Failure is the Eroding Goals archetype as a standalone card; the System Archetypes library is where recognising it sits alongside the other recurring structures.
  - id: 235
    rationale: "drift and path dependence compound: each drift step increases switching costs, making it progressively harder to reverse course as the system moves toward the risk boundary."
  - id: 231
    rationale: "commons tragedies often unfold as slow drift: incremental overuse that looks acceptable in each period but accumulates to collapse."
  - id: 209
    rationale: disabling transparency or inspection mechanisms is exactly how organisations lose the ability to detect drift before it reaches the boundary; EPC is the structural defence against Drift to Failure.
  - id: 237
    rationale: cobra dynamics are a specific path to Drift to Failure — the programme looks healthy as activity metrics rise while the underlying outcome quietly deteriorates.
references:
  - title: "Risk Management in a Dynamic Society: A Modelling Problem — Safety Science Vol. 27"
    authorYear: Jens Rasmussen (1997)
    supports: the foundational dynamic safety model defining the boundary space bounded by economic failure, unacceptable workload, and unacceptable risk.
  - title: "Drift into Failure: From Hunting Broken Components to Understanding Complex Systems"
    authorYear: Sidney Dekker (2011)
    supports: extends Rasmussen's model to argue that drift emerges from normal adaptive behaviour in complex systems, not individual error.
  - title: "The Challenger Launch Decision: Risky Technology, Culture, and Deviance at NASA"
    authorYear: Diane Vaughan (1996)
    supports: the canonical sociological account of how normalisation of deviance enabled the Challenger disaster.
  - title: Tasks, Errors and Mental Models
    authorYear: L.P. Goodstein, H.B. Andersen & S.E. Olsen, eds. (1988)
    supports: foundational collection on human factors, mental models, and error in complex sociotechnical systems.
  - title: "Managing the Unexpected: Resilient Performance in an Age of Uncertainty"
    authorYear: Karl E. Weick & Kathleen M. Sutcliffe (2007)
    supports: high-reliability organisation theory and how to maintain awareness of drift signals.
---

# Drift to Failure

**Category:** [Systems](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Drift to Failure describes the process by which complex sociotechnical systems gradually migrate toward unsafe, unsustainable, or deeply suboptimal states through the accumulation of individually rational, locally reasonable decisions — without any single point of obvious failure. The concept originates in Jens Rasmussen's dynamic safety model (1997), which described organisations as operating within a space bounded by three competing pressures: the boundary of economic failure (do too little and the enterprise becomes unviable), the boundary of unacceptable workload (push people too hard and they cannot function), and the boundary of unacceptable risk (move too far and catastrophic failure becomes likely). Normal operational pressures — cost-cutting, efficiency, competitive pressure — create gradients that systematically push behaviour toward the risk boundary. The drift is not dramatic; it is incremental, each step defensible in isolation.

Sidney Dekker extended this into "Drift into Failure" (2011), emphasising that the adaptive local decisions that drive drift are not errors — they are sensible responses to local conditions. No one decides to drift. The drift emerges from the interaction of many reasonable agents with a complex system under competing pressures. This distinguishes drift to failure fundamentally from accident models that trace failure to a specific decision, person, or moment.

In non-safety contexts, the same dynamic appears wherever organisations optimise locally over time: technical debt accumulates as individually reasonable shortcuts; strategic coherence erodes as individually sensible product decisions add complexity; organisational capacity degrades as individually justifiable cost reductions remove slack. The surface symptoms differ; the underlying mechanism is identical.

---

## Mental Model

Imagine a ship navigating toward a fog-obscured coastline. The navigation team makes small, individually sensible course corrections — avoiding traffic, conserving fuel, maintaining schedule. Each correction is logged, reviewed, and approved. No single correction is alarming. But the cumulative effect of many small corrections is that the ship is now closer to the rocks than anyone intended, and closer than anyone's local view of the last correction reveals. Drift to failure is what happens when the distance to the rocks isn't visible in any single decision, only in the aggregate trajectory — and by the time the aggregate becomes visible, the margin for correction has shrunk.

---

## Practitioner Heuristics

- **Monitor trends, not snapshots.** Drift is invisible in any single cross-section. The signal is in the direction and velocity of change over time. Build review cadences that look at trajectories — not just "are we within acceptable parameters today?" but "which direction have we been moving for the last six months?"
- **Name the three boundaries explicitly for your system.** What is your economic viability boundary? Your operational capacity boundary? Your risk/quality/safety boundary? Make them legible so you can see when gradient forces are pushing you toward one of them.
- **Treat normalisation of deviance as a leading indicator, not a lagging one.** When the team stops treating a deviation from standard as notable — because it has happened so many times without consequence — the drift is already advanced. The absence of visible consequences is not evidence of acceptable performance; it may be evidence that consequences are accumulating invisibly.
- **Re-examine decisions that were made under pressure and then became permanent.** Temporary workarounds, exceptions granted under constraint, and "just this once" compromises that persisted are the footprints of drift. Periodic audits should specifically hunt for these.
- **Distinguish "we haven't had an accident" from "we are safe."** Systems operating near the risk boundary may go a long time without a visible failure — which creates the illusion of safety that enables continued drift. The Challenger and Columbia disasters both occurred after long periods of normalised risk. Safety requires evidence of margin, not merely the absence of incident.

---

## Common Failure Modes

- **The safety paradox.** Long periods without failure are interpreted as evidence that the system is safe and operating well. This reduces pressure to maintain safety margins, which enables further drift toward the risk boundary. The very success of the system in avoiding failure creates the conditions for eventual catastrophic failure. This mechanism was central to both Challenger (1986) and the Deepwater Horizon disaster (2010).
- **Local optimisation, global degradation.** Each team or function optimises for its own pressures and metrics. Each local optimisation is rational. The aggregate effect on the overall system is degradation of the properties — resilience, capacity, safety margins — that belong to no single function's remit and therefore no single function's accountability.
- **Invisible debt accumulation.** Technical debt, organisational debt, relationship debt, and strategic debt all accumulate through drift. The mechanism is identical: individually sensible deferments that compound into a structural constraint on future action. The debt is invisible in any single deferment decision; it is visible only in the accumulation.
- **Confidence from past performance.** "We've always done it this way and it's worked" is the cognitive signature of advanced drift. Past performance under conditions that no longer fully apply is used as evidence that current practices are sound. The system has changed; the mental model of acceptable practice has not.

---

## Worked Example

A fast-growing technology company enters a period of rapid scaling. Engineering teams face intense delivery pressure. A decision is made to defer security review on non-customer-facing internal tools — "just for this sprint." The decision is reasonable: the tools are internal, the deadline is real, the security team is already stretched. No incident results. The decision is repeated. It becomes the norm. Over 18 months, 40% of internal tooling has not been through security review.

No single decision was alarming. No incident prompted concern. The team was executing well on visible metrics. But the aggregate drift produced a large surface of unreviewed internal tooling — which, in an environment where internal systems often have access to production data, represents substantial undisclosed risk.

The failure mode: a contractor's credentials are compromised, they access an unreviewed internal tool, and from there pivot to production systems. The post-mortem will ask "how did this happen?" and find 18 months of individually defensible decisions that together constitute a drift to failure. No villain, no single bad decision — just the ordinary operation of gradient pressure in the absence of a system-level view.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
