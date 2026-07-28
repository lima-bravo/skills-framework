---
id: 235
name: Path Dependence
category: Systems
cardType: standard
tagline: Where you can go depends on where you have been
connections:
  - id: 284
    rationale: path dependence explains why old structures persist even once their original rationale is gone; Chesterton's Fence is the discipline for telling apart a structure that persists because it's still needed from one that persists only because path dependence hasn't yet been overcome.
  - id: 264
    rationale: Success-to-the-Successful is the archetype form of path-dependent lock-in cataloged in System Archetypes.
  - id: 43
    rationale: inertia is resistance to change without structural basis; path dependence is structural lock-in. Both produce resistance but require different interventions.
  - id: 28
    rationale: organisational structure creates path dependence in system architecture; the communication paths of the past become the software dependencies of the present.
  - id: 208
    rationale: "path dependence and drift often compound: the system drifts incrementally in a direction it cannot easily reverse, and each drift step increases switching costs."
  - id: 16
    rationale: "the antidote to path dependence in decision-making: prefer reversible decisions over irreversible ones, especially early in a system's life."
  - id: 53
    rationale: sunk costs are a major source of path dependence; the psychology of sunk costs causes organisations to continue on a bad path rather than accept the switching cost.
  - id: 102
    rationale: path dependence often locks organisations onto a mature S-curve; platform shifts create new curves where switching cost is temporarily lower.
  - id: 82
    rationale: "network effects are the most powerful source of path dependence in markets: the larger an installed base, the higher the switching cost for any individual user or provider."
  - id: 261
    rationale: "path dependence is a systems property: only visible when you map the full system's structural evolution, not individual component choices"
  - id: 236
    rationale: "Schelling Points often create path dependence: coordination around a focal point accumulates switching costs that lock in the initially arbitrary choice."
references:
  - title: Clio and the Economics of QWERTY
    authorYear: Paul A. David, American Economic Review Vol. 75 No. 2 (1985)
    supports: the landmark paper demonstrating path dependence in technology adoption.
  - title: Increasing Returns and Path Dependence in the Economy
    authorYear: W. Brian Arthur (1994)
    supports: the theoretical framework for positive feedback and lock-in in economic systems.
---

# Path Dependence

**Category:** [Systems](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Path dependence describes situations where the current state of a system is constrained by its history — specifically, by decisions made in the past that are now difficult or impossible to reverse. The sequence of events matters: two systems that start differently and experience the same subsequent pressures can end up in very different states, because early choices foreclosed options that would later have been preferable. Once a path is established, increasing returns to the existing path (network effects, sunk costs, skill accumulation, installed base) make deviation progressively more expensive.

---

## Mental Model

The canonical example is the QWERTY keyboard layout, designed in 1873 to solve a mechanical problem (key jamming) that no longer exists. Alternative layouts have been repeatedly shown to be more efficient, yet QWERTY persists because switching costs — retraining millions of typists, replacing hardware — exceed the efficiency gains. The sub-optimal outcome is locked in, not by any active choice to keep it, but by the accumulated weight of past decisions.

Path dependence is not the same as inertia. Inertia is resistance to change that has no structural basis. Path dependence is structural lock-in: the system is genuinely constrained by its own history. This distinction matters because the interventions are different. Inertia is overcome by will and leadership. Path dependence requires either a discontinuous break (paying the switching cost fully) or a platform change (new context that resets the path).

The practitioner's question is always: "Is this constraint a preference or a path?" Preferences can be changed by persuasion; paths require architecture.

---

## Practitioner Heuristics

- **Identify the lock-in mechanism before diagnosing constraints.** Is the constraint a network effect, a skill accumulation, a sunk cost, an installed base, or a legal/contractual commitment? Each has a different switching cost profile and a different remediation strategy.
- **Calculate the total switching cost, not just the direct cost.** Path changes have direct costs (new tools, retraining) and indirect costs (productivity loss during transition, integration debt, lost institutional knowledge). Underestimating indirect costs is the main reason path changes are attempted and abandoned.
- **Look for platform changes that reset the path.** Cloud computing reset the path for infrastructure; mobile reset the path for software distribution. When a platform shift is underway, evaluate whether it creates an opportunity to exit a bad path at reduced cost.
- **Build reversibility into early decisions.** The cost of path dependence is highest when early decisions foreclosed options without the decision-makers realising it. Prefer two-way doors over one-way doors in architecture, process design, and technology choice.
- **Distinguish path dependence from learned capability.** Not all historical accumulation is lock-in. Skills, relationships, reputation, and organisational culture are also path-dependent — and these are assets, not just constraints. Path dependence is negative when the accumulated thing is a liability; positive when it is a capability.

---

## Common Failure Modes

- **Treating path-dependent constraints as preferences.** Attempting to change a structurally locked-in outcome through persuasion or leadership emphasis, without addressing the underlying switching cost. The effort fails and the conclusion drawn is that the organisation "doesn't want to change."
- **Underestimating switching costs and abandoning mid-transition.** Beginning a path change, incurring the upfront costs, and then reverting before the new path generates returns — leaving the organisation worse off than either the original path or the new one.
- **Assuming platform shifts are automatically liberating.** New platforms reduce some switching costs but introduce new paths. Cloud-native architectures create their own dependencies; mobile-first strategies create their own lock-ins.
- **Ignoring the accumulation of small path decisions.** Individual decisions that seem minor often have path-setting consequences. A technology choice, a team structure, a pricing model — each forecloses options that seem distant but become critical later.

---

## Worked Example

A mid-size bank built its core banking system in the 1990s on a proprietary mainframe platform. Each subsequent decade added features, integrations, and regulatory compliance layers on top. By 2020, the system works — but it is expensive to run, impossible to hire for, and structurally incapable of supporting the real-time API products that fintech competitors are launching.

The path dependence is severe: decades of integration debt mean that hundreds of internal systems depend on the mainframe's specific data formats and processing sequences. The switching cost is estimated at £80m and 4 years. Several attempts to migrate have been abandoned mid-transition. The constraint is structural — not a preference, not inertia — and the only viable remediation is a full platform change with a sequenced strangler-fig migration that allows the new path to be established before the old one is fully abandoned.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
