---
id: 39
name: Interdependence
category: Economics
cardType: standard
tagline: Systems are more connected than they appear
connections:
  - id: 2
    rationale: interdependence is the mechanism by which second-order effects propagate through systems.
  - id: 17
    rationale: interdependent systems have more feedback loops, more of which are invisible.
  - id: 19
    rationale: complex system behavior that appears emergent is often the result of untracked interdependencies.
  - id: 28
    rationale: "Conway's Law is the specific version of interdependence applied to system design: team communication structures become system integration structures."
  - id: 74
    rationale: stakeholders are nodes in an interdependence web; the salience model helps prioritise which dependencies to manage most actively.
references:
  - title: "Power and Interdependence: World Politics in Transition"
    authorYear: Robert O. Keohane & Joseph S. Nye (1977; 4th ed. 2011)
    supports: the political science framework for analyzing mutual dependence and its strategic implications.
  - title: The Wealth of Nations
    authorYear: Adam Smith (1776)
    supports: the division of labour generates specialisation, which in turn creates deep economic interdependence between producers and markets.
---

# Interdependence

**Category:** [Economics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Interdependence describes the mutual dependence between elements of a system — where the performance, failure, or behavior of one element affects others, often through non-obvious pathways. In economic systems, global supply chains create interdependence between suppliers in different countries, industries, and legal systems. In organizations, teams are interdependent through shared resources, information flows, and sequential processes. In ecology, the removal of one species reshapes the system for all others.

The practitioner's insight: when systems are deeply interdependent, local decisions have non-local consequences, and local optimization can produce global degradation.

---

## Mental Model

Think of a web of strings, each representing a dependency. Pull one string and others move. In a loosely coupled system (few strings, weak connections), the movement is contained. In a tightly coupled, highly interdependent system (many strings, strong connections), pulling one string can move the whole web. The practitioner maps the web before pulling any string — particularly in unfamiliar or high-stakes situations.

---

## Practitioner Heuristics

- **Map dependencies before making changes to complex systems.** Who depends on this? What does this depend on? Spend time on this question before committing to a change.
- **Watch for hidden dependencies.** Explicit dependencies are documented; implicit ones are discovered in production. The most dangerous interdependencies are those nobody knew existed until they failed.
- **Resilience often requires deliberate decoupling.** Tightly interdependent systems are efficient but fragile. Introducing modularity, redundancy, and loosely coupled interfaces reduces interdependence and increases resilience.
- **In organizations, interdependence is a coordination problem.** If team A's decisions regularly affect team B, either A and B should be merged (shared decision-making) or their interface should be formalized (clear APIs, service-level agreements, shared metrics).
- **Global supply chain interdependence requires resilience investment.** Just-in-time supply chains are highly efficient and highly vulnerable. Covid-era supply chain disruptions illustrated that the efficiency gains of tight interdependence can be wiped out by a single disruption event.

---

## Common Failure Modes

- **Locally optimal, globally catastrophic.** Each component of the system is performing well on its own metrics while the system as a whole fails, because interdependencies weren't managed.
- **Underestimating cascade failure.** When one element fails in a tightly coupled system, the failure can propagate rapidly to dependent elements. This is the mechanism of financial contagion, infrastructure outages, and organizational breakdown.
- **Underestimating the cost of managing interdependence.** More interdependencies means more coordination overhead. Organizations that create dense interdependencies between teams pay for it in meeting load and delayed decisions.

---

## Worked Example

A large software company reorganizes into product squads, each responsible for a user-facing product. The reorganization improves product ownership and team morale. But the squads share a monolithic backend codebase. A change made by Squad A to improve their product inadvertently degrades a backend service that Squad C's product depends on. Neither squad mapped the interdependency; the interface between them was informal. The resolution requires either formalizing the backend interface (decoupling), merging the squads (consolidating decision-making), or investing in a shared platform team (managing the interdependence explicitly).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
