---
id: 18
name: Bottlenecks
category: Systems
cardType: standard
tagline: The constraint that governs throughput
connections:
  - id: 17
    rationale: the bottleneck often sits where a balancing feedback loop operates most tightly.
  - id: 26
    rationale: scheduling algorithms are explicitly designed to route work around bottlenecks.
  - id: 21
    rationale: as organizations scale, the bottleneck migrates; strategic planning requires anticipating the next constraint.
  - id: 247
    rationale: "the same constraint logic applied specifically to a stalled growth system: find the binding constraint in the acquisition-to-expansion chain before pulling levers elsewhere."
  - id: 255
    rationale: accumulated technical debt increases the unit cost of every change processed through the constraint; it is one of the most common hidden causes of a delivery bottleneck.
  - id: 260
    rationale: adding capacity at non-bottleneck points is a classic symptomatic fix that relieves local pressure without improving system throughput.
  - id: 25
    rationale: in a growth system, churn is often the binding constraint on net growth; treating acquisition as the bottleneck when churn is the true constraint is a misidentification.
  - id: 28
    rationale: "system integration points between teams are common bottlenecks; Conway's Law explains why: the interface quality tracks the team relationship quality."
  - id: 31
    rationale: the bottleneck is the point of maximum scarcity in a process; bottleneck management is the operational discipline for allocating the scarcest resource.
  - id: 41
    rationale: applying leverage to bottlenecks produces the highest system-wide return; the bottleneck is where leverage compounds most powerfully.
  - id: 42
    rationale: bottlenecks reduce speed; directional confusion reduces velocity even when throughput is high.
  - id: 47
    rationale: catalysts are most valuable when applied to the bottleneck; the same enabling investment at the constraint produces system-wide returns.
  - id: 116
    rationale: fragmented calendars make attention the binding bottleneck for makers; the scheduling structure is the constraint to elevate.
  - id: 250
    rationale: "the driver-tree logic underneath KPI architecture is the same constraint-tracing logic: find the binding link in the chain, instrument it, and stop measuring what doesn't move the system."
  - id: 81
    rationale: the zero factor is often a bottleneck taken to its extreme — where a constraint so completely limits throughput that the whole system's output collapses to zero.
  - id: 114
    rationale: human cognitive capacity is the binding constraint in knowledge work — deep work hours per day, not calendar hours, determine the real throughput ceiling.
  - id: 131
    rationale: throughput in Little's Law is set by the bottleneck — optimizing non-bottleneck steps does not reduce cycle time.
  - id: 132
    rationale: WIP limits at non-bottleneck stages make the constraint visible by forcing starvation downstream when the bottleneck cannot keep up.
  - id: 135
    rationale: queues form upstream of bottlenecks — the longest queue locates the constraint in any delivery system.
  - id: 138
    rationale: a Kanban board makes bottlenecks visible through WIP accumulation upstream of the constraint; the method surfaces and sustains constraint awareness daily.
  - id: 139
    rationale: VSM locates the constraint by mapping where the longest queues accumulate — the step with the highest wait time is the current bottleneck.
  - id: 156
    rationale: high-fan-in teams are scaled-delivery bottlenecks — when many teams depend on one, that team's capacity becomes the system constraint regardless of its throughput.
  - id: 159
    rationale: WSJF operates on bottleneck capacity — the sequencing rule only matters when there is a scarcity constraint, and its value is highest precisely at the bottleneck where choosing wrong is most costly.
  - id: 117
    rationale: the Capacity Planning chain's Step 4 identifies the single binding constraint — the person, skill, or dependency the plan flows through — whose adjusted capacity sets the ceiling for the whole plan.
references:
  - title: "The Goal: A Process of Ongoing Improvement"
    authorYear: Eliyahu M. Goldratt & Jeff Cox (1984)
    supports: the source text for Theory of Constraints and bottleneck management.
  - title: "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win"
    authorYear: Gene Kim, Kevin Behr & George Spafford (2013)
    supports: applies constraint theory to software delivery.
---

# Bottlenecks

**Category:** [Systems](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

A bottleneck is the single constraint that limits the throughput of an entire system. Coined in manufacturing and formalized by Eliyahu Goldratt in *The Goal* (1984) through his Theory of Constraints, the insight is profound: **every system has exactly one binding constraint at any given time, and improving anything other than that constraint does not improve overall system performance.** All other improvements are local optima that feel like progress but don't move the needle.

---

## Mental Model

Think of a pipeline with sections of different diameters. The narrowest section determines total flow — it doesn't matter how wide the rest of the pipe is. The practitioner's question is: *"Where does work/flow/product pile up, or where does it go fastest and then slow down?"* The bottleneck is where the queue forms upstream and where downstream capacity sits idle.

---

## Practitioner Heuristics

- **Goldratt's five steps.** (1) Identify the constraint. (2) Exploit it — squeeze maximum output from it without changing anything. (3) Subordinate everything else to the constraint — other steps should work at the rate the bottleneck can absorb. (4) Elevate it — only now invest in increasing its capacity. (5) If the constraint shifts, go to step 1.
- **Find where the queue is longest.** In any process, the bottleneck is where incomplete work accumulates. This is often a person, an approval step, a machine, or a shared resource.
- **Protect the bottleneck.** Never let the bottleneck go idle. If a senior engineer is the bottleneck on code reviews, they should never be waiting for context, blocked on a tool, or in non-essential meetings.
- **Avoid false bottlenecks.** Sometimes the apparent bottleneck is not the true constraint but is being artificially stressed by poor upstream processes. Diagnose before treating.
- **Constraints shift.** After you fix the bottleneck, the next tightest constraint becomes the new bottleneck. This is not failure; it is the system working. Keep iterating.

---

## Common Failure Modes

- **Improving non-bottlenecks.** This is the most common failure in operational improvement: optimizing steps that are not the constraint, producing local efficiency but no global improvement. The team feels productive; system throughput doesn't change.
- **Misidentifying the bottleneck.** The visible queue is not always at the true constraint — it may be downstream of an invisible constraint that limits how much work enters the system. Trace the full flow.
- **Creating new bottlenecks downstream.** Aggressively fixing one bottleneck can shift the constraint to a part of the system you haven't prepared for.

---

## Worked Example

An engineering team complains they can't ship fast enough. The diagnosis: pull requests wait an average of 3 days for review before being merged. The obvious solution: hire more engineers. But Theory of Constraints analysis shows the review queue is the bottleneck, not headcount — the engineers are writing code faster than it can be reviewed. Adding more engineers makes the queue longer, not shorter. The actual fix: dedicate 30% of senior engineer time to review, reduce PR size to make individual reviews faster, and invest in automated pre-review checks. Throughput improves before any new hiring.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
