# Planning Fallacy
*We systematically underestimate time, cost, and risk — even when we know we do it, and even when we've been wrong before*

**Category:** [Psychology](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

The planning fallacy is the systematic tendency to underestimate the time, cost, and risk of future tasks while overestimating their benefits — and to persist in doing so even when the planner has direct experience of similar tasks taking longer than planned. Identified by Daniel Kahneman and Amos Tversky in 1979, it is one of the most expensive and robust cognitive biases in business and engineering.

It operates through what Kahneman calls the inside view: when planning a specific project, we construct a plausible narrative of success and estimate from that scenario. The outside view — what does the historical distribution of similar projects actually look like? — is almost never spontaneously consulted. Bent Flyvbjerg's large-scale analysis of infrastructure projects found average cost overruns of 45% and schedule overruns of 71%, holding even when planners knew about the bias.

---

## Mental Model

The inside view and outside view generate systematically different estimates. Inside view: you map a plausible sequence of steps and imagine each succeeding — producing an optimistic narrative that feels realistic because you have considered the details. Outside view (reference class forecasting): you identify the category of work this project belongs to and ask what the historical distribution of outcomes looks like. The two estimates diverge because the inside view ignores base rates.

The remedy is not to think harder about the inside view. It is to consult the outside view first, anchor your estimate on the historical distribution, and then adjust for genuinely project-specific factors — the opposite of how most planning works.

---

## Practitioner Heuristics

- **Before finalizing any estimate, identify the reference class**: what category of work does this resemble, and what is the historical median and 90th-percentile duration for that category?
- **Apply a planning fallacy correction factor of 1.5–2×** to initial inside-view estimates as a starting hypothesis; revise based on reference class data when available.
- **Use three-point estimates**: optimistic (10th percentile), realistic (median), and pessimistic (90th percentile). Weight the pessimistic end more heavily than intuition suggests.
- **Run a pre-mortem before committing**: assume the project has taken twice as long as planned and ask what went wrong.
- **Track your estimation accuracy over time.** Comparing original estimates to actual outcomes creates personal reference class data that is more actionable than general research.

---

## Common Failure Modes

- **Adding a buffer to an already-optimistic inside-view estimate** without challenging the underlying baseline — you get a slightly less wrong number, but the base rate problem is unchanged.
- **Anchoring on the first estimate** and adjusting upward only modestly — the anchor is usually itself inside the planning fallacy range.
- **Confusing effort with duration.** "We will work hard" does not reliably compress timelines on complex knowledge work.
- **Applying outside-view thinking only to obviously risky projects** — the planning fallacy operates most severely on projects that feel routine and well-understood.

---

## Worked Example

A software team estimates a feature at 3 weeks. Their own reference class — features of similar scope in the past year — shows a median of 6.5 weeks and a 90th percentile of 10 weeks. A realistic estimate is 6–8 weeks. Committing to 3 weeks means ignoring a distribution they themselves generated. When the feature ships at week 7, the business calls it an execution failure. The actual failure was an estimation failure, predictable from the reference class before the project began.

---

## Connections

→ [55·Confirmation Bias](confirmation-bias.md) — the inside view is an exercise in confirmation — estimating from a success scenario
→ [24·Margin of Safety](../Systems/margin-of-safety.md) — the direct structural remedy: build buffer proportional to underestimation tendency
→ [10·Pre-mortem](../General-Thinking/pre-mortem.md) — the most effective tactical intervention against the planning fallacy
→ [7·Probabilistic Thinking](../General-Thinking/probabilistic-thinking.md) — thinking in distributions is the cognitive toolkit of the outside view
→ [2·Second-Order Effects](../General-Thinking/second-order-effects.md) — cascading dependencies and rework are the most commonly ignored planning costs
→ [114·Deep Work / Cognitive Capacity](../Learning/deep-work.md) — plans assuming 8 productive hours per day compound the planning fallacy
→ [77·Regression to the Mean](../Mathematics/regression-to-the-mean.md) — exceptional early velocity regresses; plans that extrapolate it are doubly wrong
→ [206·Base Rate Neglect](base-rate-neglect.md) — one of the primary mechanisms behind the planning fallacy; plans are assessed on their internal logic rather than the distributional track record of similar plans
→ [241·Parkinson's Law](../Business/parkinsons-law.md) — the planning fallacy and Parkinson's Law compound: we underestimate duration, and then fill whatever time we allocate; the result is work that takes exactly as long as planned for the wrong reasons.
→ [251·Value Realization](../Business/value-realization.md) — the planning fallacy is the empirical basis for building a realization plan: reference class evidence shows realized benefits consistently run below the business case, which a realization system should detect early rather than be surprised by.

---

## References

- *Thinking, Fast and Slow* — Daniel Kahneman (2011) — the most accessible treatment, including the inside/outside view distinction.
- *Judgment under Uncertainty: Heuristics and Biases* — Daniel Kahneman & Amos Tversky, Science Vol. 185 (1974) — the original paper identifying the planning fallacy alongside anchoring and availability heuristics.
- *Megaprojects and Risk: An Anatomy of Ambition* — Bent Flyvbjerg, Nils Bruzelius & Werner Rothengatter (2003) — the empirical evidence of planning fallacy at scale across infrastructure projects.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
