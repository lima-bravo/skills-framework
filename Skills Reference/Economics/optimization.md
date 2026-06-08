# Optimization
*Find the best among the available options*

**Category:** [Economics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Optimization is the process of finding the input values that maximize (or minimize) an objective function subject to constraints. In mathematics, this is formal and precise. In practice, optimization describes any systematic approach to improving performance toward a defined goal: A/B testing a landing page, allocating marketing budget across channels, scheduling resources across projects, or tuning a machine learning model.

The practitioner's insight is that optimization is only as good as the objective function you're optimizing. Define the wrong thing to maximize, and optimization produces the wrong outcome efficiently.

---

## Mental Model

Imagine a landscape of hills and valleys where altitude represents objective function value. Optimization is the search for the highest point. The challenges: the landscape may have many local peaks (local maxima); the search process may get stuck at a sub-optimal peak; the landscape may change over time; and the landscape itself may be a map — a proxy for something you actually care about that wasn't fully captured in the objective.

---

## Practitioner Heuristics

- **Define the objective function explicitly before optimizing.** "What are we trying to maximize, precisely?" This question exposes assumptions. "Profit" and "revenue" and "growth" and "LTV" are different objective functions that produce different optimal strategies.
- **Identify the constraints that bound the optimization.** Constraints make optimization tractable and realistic. "Maximize revenue subject to: maintaining NPS above 50, not exceeding our marginal cost of capital, staying within regulatory limits."
- **Watch for multi-objective conflicts.** When you are trying to optimize for two objectives simultaneously, explore the Pareto frontier — the set of solutions where you cannot improve one objective without worsening the other. This frontier is where real trade-off decisions live.
- **Use experimentation to explore the landscape.** In complex systems, the objective landscape is unknown. Systematic experimentation (A/B tests, small-scale pilots) maps the landscape before committing to a direction.
- **Build in re-optimization cycles.** The optimal solution at time T may not be optimal at T+12 months. Schedule regular reviews of the objective function and the constraints.

---

## Common Failure Modes

- **Local maxima trapping.** Iterative improvement converges to the nearest peak, not the highest one. Escaping local maxima requires random restarts, large perturbations, or reframing the problem.
- **Metric optimization over value optimization.** Optimizing a measurable proxy (click-through rate, response time, employee NPS) while the true objective (user value, business performance, employee engagement) diverges from the proxy.
- **Ignoring constraint validity.** Constraints are often assumed rather than derived. If a real constraint was missed, the "optimal" solution is infeasible. If a false constraint was added, the solution is unnecessarily limiting.

---

## Worked Example

A growth team is optimizing email campaign performance. They define the objective as open rate and optimize ruthlessly — subject lines with urgency, personalization, controversy. Open rates improve 40%. Then they notice that the next-step metrics (click-through, conversion, trial-to-paid) are flat or declining. The optimization was genuine; the objective function was wrong. Open rate is a leading indicator of engagement but not a reliable proxy for it — users open out of curiosity and don't engage. The reframed objective: revenue attributed to email within 30 days. The strategy that optimizes for this looks quite different.

---

## Connections

→ [**Trade-offs**](trade-offs.md) — multi-objective optimization makes trade-offs explicit and quantified.
→ [**Local Maxima**](../Mathematics/local-maxima.md) — the systematic failure mode of optimization.
→ [**Algorithms**](../Systems/algorithms.md) — optimization algorithms are the computational tools for solving formal optimization problems.
→ [**Diminishing Returns**](../Systems/diminishing-returns.md) — optimization works with marginal returns; diminishing returns is the curve that determines where to stop allocating.

## References

- *Algorithms to Live By: The Computer Science of Human Decisions* — Brian Christian & Tom Griffiths (2016) — applies optimization algorithms (explore/exploit, secretary problem) to everyday decision-making.
- *How to Solve It: A New Aspect of Mathematical Method* — George Pólya (1945) — the systematic method for finding solutions to constrained problems.


---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
