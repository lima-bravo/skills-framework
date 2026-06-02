# Principal–Agent Problem

**Category:** Economics
**Tagline:** When you delegate, the person acting on your behalf has different information and different incentives

## Definition

The Principal-Agent Problem describes the tension that arises when one party (the **principal**) delegates decision-making authority to another party (the **agent**) who has different information and potentially different interests. Formalised by Jensen and Meckling in 1976, the problem is pervasive: shareholders vs. executives, executives vs. managers, clients vs. contractors, patients vs. doctors.

Two distinct dynamics: **adverse selection** (before the relationship begins — the agent has private information the principal lacks) and **moral hazard** (after the relationship begins — effort and decisions are hard to observe, and the agent may act in their own interest).

## Mental Model

Classic mitigations: **incentive alignment** (make the agent's payoff track the principal's outcomes), **screening** (better selection mechanisms), **monitoring** (metrics, audits), and **signalling** (costly observable demonstrations of type like credentials).

Each mitigation has costs: incentive alignment introduces Goodhart's Law risk; monitoring creates overhead and erodes trust. The art is choosing the right combination for the relationship.

## Practitioner Heuristics

- **Diagnose adverse selection vs. moral hazard — they need different tools.** Hidden information before the relationship (adverse selection) is addressed by screening and signalling; hidden action after it (moral hazard) is addressed by incentive alignment and monitoring. Applying the wrong tool wastes effort.
- **Align payoffs to outcomes, but watch the Goodhart cost.** Tying the agent's reward to the principal's result is the strongest lever and the one most likely to create a gameable target; design the metric knowing it will be optimised directly.
- **Price the cost of each mitigation.** Monitoring erodes trust and adds overhead; incentive alignment imports Goodhart risk; signalling is expensive by design. The art is the cheapest combination that closes the specific gap.
- **Make expectations explicit so "I didn't know" stops being available.** A clear, written account of what the agent is accountable for removes the most common excuse and is the precondition for any monitoring to be fair.
- **Treat low psychological safety as an amplifier.** Agents who fear consequences optimise for appearance over outcome, widening the gap you are trying to close; the structural fix often runs through culture, not contracts.

## Common Failure Modes

- **Over-monitoring into distrust.** Piling on audits and metrics signals that agents are not trusted, eroding the intrinsic motivation monitoring can never replace and often making the gap worse.
- **Incentive alignment that creates a new Goodhart target.** "Make the agent's payoff track the outcome" works until the agent games the chosen proxy; alignment is not a one-time fix but an ongoing design problem.
- **Ignoring adverse selection at the hiring or contracting stage.** Focusing entirely on managing behaviour after the relationship begins, while doing nothing to screen for type beforehand, leaves the cheaper intervention on the table.
- **Assuming the principal's interest is self-evident.** Agents cannot align with an outcome that was never clearly specified; ambiguity about what the principal actually wants is frequently mistaken for agent misalignment.

## Worked Example

A company pays its sales force a commission purely on bookings to align reps (agents) with growth (the principal's goal). The incentive aligns the wrong thing: reps optimise the metric they are paid on, closing low-quality deals with generous discounts and over-promised terms that inflate bookings while customer churn and support cost rise. This is a textbook principal-agent failure with a Goodhart mechanism inside it — the proxy (bookings) was aligned, the actual goal (profitable, durable revenue) was not. The fix is not more monitoring of the reps but better-specified alignment: pay on retained, profitable revenue measured over time, screen for reps whose track record signals the right type (adverse selection), and make the real objective explicit so that "I hit my number" can no longer mean "I acted against the company's interest."

## Connections

- **Goodhart's Law** — the operational mechanism: the metrics principals use to monitor agents become gameable targets
- **Power Mapping** — power gaps often correspond to principal-agent misalignments; mapping who actually decides versus who formally decides surfaces where the agency problem is structurally embedded
- **Coalition Building** — coalition members are agents whose private incentives may not fully align with the coalition's stated purpose; the principal-agent lens predicts where fracture is most likely
- **Incentives** — the primary tool for mitigation
- [**Cobra Effect**](../Innovation-Entrepreneurship/cobra-effect.md) — many cobra dynamics are principal-agent problems: agents responsible for a change programme optimise for programme metrics rather than the underlying outcome
- **Ladder of Inference** — principals draw conclusions about agents from limited observable data
- **Psychological Safety** — agents with low psychological safety optimise for appearance, worsening the gap
- [**Nash Equilibrium**](../Economics/nash-equilibrium.md) — misaligned principal-agent incentives create equilibria where agents act against the principal's interest; changing the equilibrium requires changing the payoff structure
- [**Prisoner's Dilemma**](../Economics/prisoners-dilemma.md) — principal-agent relationships often have a Prisoner's Dilemma structure: agents defect from principal interests when individual incentives dominate
- [**Tragedy of the Commons**](../Economics/tragedy-of-the-commons.md) — when multiple agents share access to resources owned by a principal, the commons dynamic compounds the agency problem

## References

**Originators:** Michael Jensen and William Meckling, "Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure," 1976.

- *The Handbook of Organizational Economics* — Gibbons & Roberts eds., 2013
- *Predictably Irrational* — Dan Ariely, 2008
