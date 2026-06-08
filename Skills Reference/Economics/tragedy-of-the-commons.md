# Tragedy of the Commons
*Shared resources are destroyed by individually rational behaviour*

**Category:** [Economics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

The Tragedy of the Commons describes how a shared resource — a commons — is depleted or degraded when individuals, each acting rationally in their own interest, collectively overuse it. Each user captures the full benefit of their consumption but shares the cost of depletion across all users. This asymmetry creates an incentive to consume more than is collectively sustainable. The tragedy: no individual does anything irrational, yet the shared resource collapses.

---

## Mental Model

The original formulation by Garrett Hardin used a shared grazing pasture: each herder benefits entirely from adding one more cow, while the cost of overgrazing is spread across all herders. Adding one cow is always locally rational; the commons degrades anyway. The pattern generalises far beyond ecology: codebase quality, team bandwidth, shared infrastructure, organisational culture, public goods, and open-source projects all have commons structures.

The tragedy is not inevitable — Elinor Ostrom's Nobel Prize-winning work showed that communities often develop effective governance mechanisms for commons without privatisation or top-down regulation. The conditions for sustainable commons management are well-studied: clear boundaries, rules matched to local conditions, those affected by rules participating in modifying them, effective monitoring, and graduated sanctions. When these conditions are absent, tragedy follows.

---

## Practitioner Heuristics

- **Name the commons before it degrades.** Identify shared resources in your system — shared code, shared infrastructure, team energy, meeting time, documentation — and make their commons nature explicit. Invisible commons degrade silently.
- **Assign clear ownership or stewardship.** Many commons tragedies are solved not by privatisation but by creating a responsible steward with the authority and accountability to manage the shared resource.
- **Make consumption visible.** Overuse persists partly because it is invisible. Metrics, dashboards, and transparent usage data create the feedback that enables self-regulation.
- **Design graduated consequences for overuse.** Light monitoring with escalating consequences (first a warning, then a cost, then loss of access) is more effective than either no consequences or immediate severe punishment.
- **Distinguish commons from public goods.** A commons is rivalrous (my use reduces availability for you) but non-excludable (you can't be easily prevented from using it). Understanding which type of shared resource you have determines which governance mechanism is appropriate.

---

## Common Failure Modes

- **Assuming good intentions will hold.** Even actors with good intentions will gradually overuse a commons when individual incentives point that way. Culture and values slow the tragedy; they don't stop it without structural governance.
- **Privatising when community governance would work.** Privatisation solves the commons problem but destroys the benefits of shared access. Ostrom showed that community governance is often both more efficient and more equitable — but it requires investment in governance design.
- **Ignoring second-order commons.** Fixing the first-level commons (e.g., shared compute resources) can create a second-level commons (governance bandwidth of the team managing it). Watch for cascading commons problems.
- **Waiting for the crisis.** Commons tragedies unfold gradually and then suddenly. Intervention is far cheaper early in the degradation curve — but the gradual phase lacks urgency and the sudden phase is often too late.

---

## Worked Example

An engineering team shares a continuous integration pipeline. Each team is incentivised to run as many tests as possible to reduce risk. No single team has an incentive to optimise their test suite for speed — that effort costs their team time with no direct benefit to them. Over 18 months, build times grow from 8 minutes to 47 minutes. Every team's velocity suffers, but no team acts because each improvement attempt costs the improving team while the benefit is shared. The commons (CI capacity and speed) degrades.

Resolution: the platform team appoints a CI steward role, introduces build-time quotas by team, publishes a weekly leaderboard, and creates a shared incentive (a team-wide velocity metric) that makes overuse costly. Build times return to 12 minutes within a quarter.

---

## Connections

→ [**Prisoner's Dilemma**](../Economics/prisoners-dilemma.md) — the Tragedy of the Commons is the multi-player version of the Prisoner's Dilemma: individually rational behaviour produces collectively catastrophic outcomes.
→ [**Incentives**](../Psychology/incentives.md) — the tragedy is an incentive design problem; aligning individual incentives with collective welfare is the structural fix.
→ [**Goodhart's Law**](../Economics/goodharts-law.md) — measurement systems designed to manage commons can become commons themselves, subject to gaming.
→ [**Free Rider Problem**](../Economics/free-rider-problem.md) — closely related: the free rider captures benefits of a shared resource without contributing to its maintenance.
→ [**Nash Equilibrium**](../Economics/nash-equilibrium.md) — overuse of the commons is the Nash Equilibrium: each player's best response to others' extraction is to extract more.
→ [**Feedback Loops**](../Systems/feedback-loops.md) — making commons depletion visible creates feedback loops that enable self-regulation.
→ [**Drift to Failure**](../Systems/drift-to-failure.md) — commons tragedies often unfold as slow drift: incremental overuse that looks acceptable in each period but accumulates to collapse.
→ [**Incentive Design**](incentive-design.md) — incentive design can make individual rationality and collective welfare coincide; the commons tragedy is what happens when it does not
→ [**Principal–Agent Problem**](principal-agent-problem.md) — when multiple agents share a resource owned by a principal, commons dynamics compound the agency problem: each agent's rational self-interest depletes the shared resource.

## References

- *The Tragedy of the Commons* — Garrett Hardin, Science Vol. 162 No. 3859 (1968) — the original articulation of the commons problem.
- *Governing the Commons: The Evolution of Institutions for Collective Action* — Elinor Ostrom (1990) — the Nobel Prize–winning empirical evidence that communities can and do solve commons problems without privatization or state control.


---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
