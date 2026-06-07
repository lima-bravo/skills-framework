# Conway's Law
*Systems mirror the communication structures that build them*

**Category:** [Systems](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Conway's Law, formulated by software engineer Melvin Conway in 1967, states: *"Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure."* Originally stated about software, it has proven to apply broadly to products, processes, and organizational structures. The inverse, known as the **Reverse Conway Manoeuvre**, proposes deliberately restructuring teams to produce the system architecture you actually want.

---

## Mental Model

Teams build interfaces between systems where they have interfaces between themselves. If two teams rarely talk, their respective subsystems will have a poorly designed integration. If a single team owns a complex, cross-cutting concern, their system will tend toward a monolith. The communication structure is not a constraint imposed on the architecture — it *is* the architecture. The practitioner who wants to change the architecture must first ask: "Does the team structure and communication pattern produce this architecture? And if I want a different architecture, do I need a different team structure?"

---

## Practitioner Heuristics

- **Audit the team structure before designing the system architecture.** If you want a microservices architecture, you need teams that own individual services and have minimal cross-team dependencies. If your team structure is tightly coupled, your microservices will be too.
- **Apply the Reverse Conway Manoeuvre deliberately.** When Amazon decided to build AWS, they restructured around the "two-pizza team" model with explicit API ownership. The restructuring preceded the architecture; the architecture followed.
- **Use Conway's Law diagnostically.** If a system integration is consistently painful, fragile, or poorly defined, look at the interface between the teams responsible for it. The integration quality is a proxy for the relationship quality.
- **Microservices require micro-teams.** The most common failure in microservices adoption: decomposing the system architecture without decomposing the team structure. The result is a distributed monolith — the worst of both worlds.
- **Conway's Law also applies to products.** The features that are easiest to use are typically those where one team owns the entire user flow. Features that require multiple teams produce handoff seams that are visible in the user experience.

---

## Common Failure Modes

- **Designing for the intended architecture, not the actual team structure.** Architecture diagrams describe how things should work; Conway's Law describes how they will actually work. Reconcile both before committing.
- **Ignoring Conway's Law during mergers and acquisitions.** Two companies with different engineering cultures and team structures will produce integrated systems that reflect their independent communication patterns — until organizational integration is explicitly managed.

---

## Worked Example

A startup grows from 10 to 60 engineers. At 10, everyone talks to everyone, the codebase is a monolith, and it works fine. At 60, coordination overhead has fragmented communication into team-specific clusters. The monolith develops invisible team boundaries — sections of code owned by different groups with informal conventions that aren't documented or enforced. Deployments break because one team's change violates another team's implicit assumption. Conway's Law has imposed team boundaries on the codebase. The correct response: make the implicit boundaries explicit (modularization), assign ownership formally, and define the inter-module interfaces as if they were inter-team contracts.

---

## Connections

→ [**Bottlenecks**](bottlenecks.md) — system integration points between teams are common bottlenecks; Conway's Law explains why.
→ [**Emergence**](emergence.md) — the architecture that emerges from a team structure is an emergent property of the communication dynamics.
→ [**Interdependence**](../Economics/interdependence.md) — Conway's Law is the specific version of the interdependence principle applied to system design.
→ [**Path Dependence**](../Systems/path-dependence.md) — the communication structures of the past create the architectural paths of the present; Conway's Law is a primary mechanism of path dependence in software systems.

## References

- *How Do Committees Invent?* — Melvin E. Conway, Datamation (1968) — the original paper stating that system structure mirrors communication structure.
- *The Mythical Man-Month: Essays on Software Engineering* — Frederick P. Brooks Jr. (1975) — the companion text on coordination costs in large systems.
- *Accelerate: The Science of Lean Software and DevOps* — Nicole Forsgren, Jez Humble & Gene Kim (2018) — empirical evidence for how team structure and communication patterns drive software delivery performance.


---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
