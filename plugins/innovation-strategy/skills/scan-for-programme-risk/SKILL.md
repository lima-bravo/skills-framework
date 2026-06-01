---
name: "scan-for-programme-risk"
description: "Scans a change programme or innovation initiative for Cobra Effect risk: whether the intervention is sustaining the problem it was designed to solve. Use before launching programmes, or when a running programme shows activity but no outcome improvement."
metadata:
  plugin: "innovation-strategy"
  version: "1.0.0"
  sources: "Innovation-Entrepreneurship/cobra-effect.md,Economics/goodharts-law.md,General-Thinking/second-order-effects.md,Systems/drift-to-failure.md"
---

# Scan For Programme Risk

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. Cobra Effect

**Hold in mind:**
Every intervention changes the incentive landscape. The question is not just "what will people do differently?" but "does this intervention create something — a new behaviour, a new role, a new institution, a new metric — that becomes invested in the problem's continuation?" When it does, you have built a cobra farm.

In organisational change and innovation programmes, this pattern is especially treacherous because it unfolds slowly and the early signal looks like success. Participation goes up. Numbers improve. The programme gets expanded. Only later does it become clear that the activity being measured is decoupled from — or actively hostile to — the outcome the programme was meant to produce.

The practitioner's diagnostic is a single question: **"Who or what now depends on this problem continuing?"** If the answer includes anyone created or empowered by the intervention itself, the cobra risk is real.

**Avoid:**
- **Mistaking early activity for success.** Cobra dynamics produce real activity — people genuinely engage with the new structure. The error is reading activity as evidence the underlying problem is being solved.
- **Defending the programme rather than the outcome.** Once a programme creates roles and budgets, its champions become invested in its continuation regardless of impact. Challenge reviews focus on "is the programme running well?" rather than "is the original problem being solved?"
- **Treating the taxonomy as exhaustive.** The five types above are the most common patterns, not a complete list. Any intervention can become a cobra if the conditions are right. The diagnostic question — "who now depends on this problem continuing?" — matters more than pattern-matching to the taxonomy.

### 2. Goodhart's Law

**Hold in mind:**
A *proxy* is chosen because it correlates with something we care about but cannot directly measure. That correlation existed under natural conditions. Once the proxy becomes the target, people optimise it directly, and the correlation breaks.

Hospital waiting-time targets cause patients to be held in ambulances outside the building. Software velocity metrics cause developers to split large tickets. NPS surveys get distributed only after good interactions. In each case, the metric improves while the underlying reality stays flat or degrades.

**The corrective is triangulation:** use multiple metrics that are hard to simultaneously game, include qualitative signals alongside quantitative ones, and rotate metrics before they calcify into targets.

### 3. Second-Order Effects

**Hold in mind:**
Every action creates reactions. Systems with feedback loops mean that initial effects circle back and change the conditions that produced them. The practitioner's model is a causal chain with explicit time stamps: X happens at T0, which causes Y at T1, which causes Z at T2. The quality of a decision depends on how far down that chain you can reason accurately — and how honestly you acknowledge where your confidence runs out.

**Do:**
- **Always add a time dimension.** "This will increase sales" is first-order. "This will increase sales in Q1, which will attract copycat entrants by Q3, which will compress margins by Q4" is second-order. Make the timeline explicit.
- **Ask "who else is affected, and how will they respond?"** Second-order effects are often driven by other agents adapting to the first-order outcome. Competitors, regulators, customers, and employees all react.
- **Map incentives downstream.** Trace who benefits and who is harmed by the first-order outcome. The harmed parties will typically generate the most important second-order effects.
- **Distinguish reversible from irreversible chains.** If the second-order effect is irreversible (reputation damage, regulatory response, ecological harm), the analysis must be done before acting, not after.
- **Stop when uncertainty dominates.** Beyond a certain depth, chains become speculative. Good practitioners note where their second-order analysis becomes a guess, and hold those conclusions more loosely.

**Avoid:**
- **Infinite regress.** Tracing effects so many levels deep that no decision is ever made. Practical second-order thinking goes to the depth where the effects are large and tractable, then stops.
- **Selective chain-following.** Tracing only the positive second-order effects of your preferred option and only the negative ones of alternatives. Use the same rigor on all chains.
- **Ignoring feedback loops.** Linear chains miss the fact that second-order effects often change the initial conditions, creating self-reinforcing or self-correcting dynamics.

### 4. Drift to Failure

**Hold in mind:**
Imagine a ship navigating toward a fog-obscured coastline. The navigation team makes small, individually sensible course corrections — avoiding traffic, conserving fuel, maintaining schedule. Each correction is logged, reviewed, and approved. No single correction is alarming. But the cumulative effect of many small corrections is that the ship is now closer to the rocks than anyone intended, and closer than anyone's local view of the last correction reveals. Drift to failure is what happens when the distance to the rocks isn't visible in any single decision, only in the aggregate trajectory — and by the time the aggregate becomes visible, the margin for correction has shrunk.

**Do:**
- **Monitor trends, not snapshots.** Drift is invisible in any single cross-section. The signal is in the direction and velocity of change over time. Build review cadences that look at trajectories — not just "are we within acceptable parameters today?" but "which direction have we been moving for the last six months?"
- **Name the three boundaries explicitly for your system.** What is your economic viability boundary? Your operational capacity boundary? Your risk/quality/safety boundary? Make them legible so you can see when gradient forces are pushing you toward one of them.
- **Treat normalisation of deviance as a leading indicator, not a lagging one.** When the team stops treating a deviation from standard as notable — because it has happened so many times without consequence — the drift is already advanced. The absence of visible consequences is not evidence of acceptable performance; it may be evidence that consequences are accumulating invisibly.
- **Re-examine decisions that were made under pressure and then became permanent.** Temporary workarounds, exceptions granted under constraint, and "just this once" compromises that persisted are the footprints of drift. Periodic audits should specifically hunt for these.
- **Distinguish "we haven't had an accident" from "we are safe."** Systems operating near the risk boundary may go a long time without a visible failure — which creates the illusion of safety that enables continued drift. The Challenger and Columbia disasters both occurred after long periods of normalised risk. Safety requires evidence of margin, not merely the absence of incident.

**Avoid:**
**The safety paradox.** Long periods without failure are interpreted as evidence that the system is safe and operating well. This reduces pressure to maintain safety margins, which enables further drift toward the risk boundary. The very success of the system in avoiding failure creates the conditions for eventual catastrophic failure. This mechanism was central to both Challenger (1986) and the Deepwater Horizon disaster (2010).

**Local optimisation, global degradation.** Each team or function optimises for its own pressures and metrics. Each local optimisation is rational. The aggregate effect on the overall system is degradation of the properties — resilience, capacity, safety margins — that belong to no single function's remit and therefore no single function's accountability.

**Invisible debt accumulation.** Technical debt, organisational debt, relationship debt, and strategic debt all accumulate through drift. The mechanism is identical: individually sensible deferments that compound into a structural constraint on future action. The debt is invisible in any single deferment decision; it is visible only in the accumulation.

**Confidence from past performance.** "We've always done it this way and it's worked" is the cognitive signature of advanced drift. Past performance under conditions that no longer fully apply is used as evidence that current practices are sound. The system has changed; the mental model of acceptable practice has not.

## Deliverable format

Produce a markdown document with these sections:

### Programme description and stated goal

### Cobra type classification (metric / gate removal / psych safety / innovation unit / incentive realignment)

### Pre-launch cobra risk assessment (5 questions answered)

### Current metric performance vs underlying outcome performance

### Redesign recommendation or kill criteria

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

## Reference cards

- [cobra-effect](references/cobra-effect.md)
- [goodharts-law](references/goodharts-law.md)
- [second-order-effects](references/second-order-effects.md)
- [drift-to-failure](references/drift-to-failure.md)

