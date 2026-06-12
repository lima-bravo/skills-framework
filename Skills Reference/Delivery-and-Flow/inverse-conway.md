---
id: 155
name: Inverse Conway Maneuver
category: Delivery & Flow
cardType: standard
tagline: Shape teams to produce the architecture you want
connections:
  - id: 28
    rationale: the underlying observation the maneuver inverts.
  - id: 154
    rationale: the practical playbook for applying it.
  - id: 156
    rationale: interaction modes become dependency contracts.
  - id: 124
    rationale: culture is the sociotechnical complement to structural redesign.
  - id: 28
    rationale: the original observation that the maneuver inverts.
references:
  - title: Accelerate
    authorYear: Nicole Forsgren, Jez Humble & Gene Kim (2018)
    supports: empirical evidence that teams who design systems around their desired architecture deliver faster than those constrained by org structure.
  - title: Team Topologies
    authorYear: Matthew Skelton & Manuel Pais (2019)
    supports: the Team Topologies approach to applying the Inverse Conway Maneuver deliberately through team design.
---

# Inverse Conway Maneuver

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Conway's Law observes that systems mirror the communication structure of the organizations that build them. The "inverse Conway maneuver" — coined in *Accelerate* (Forsgren, Humble & Kim, 2018) and developed in *Team Topologies* — is the deliberate application of this law in reverse: design the organization to produce the desired system architecture. Want loosely coupled services? Build loosely coupled teams. Want a clean platform/product separation? Build distinct platform and product teams with API-style interaction. Without the maneuver, every attempted architecture is fighting the org chart that surrounds it.

---

## Mental Model

Imagine pouring concrete: the shape it sets in is the shape of the formwork. Software architecture is similar — it sets into the shape of the team boundaries that surround it, regardless of design intent. Most architecture initiatives focus on the concrete (diagrams, target states) and ignore the formwork (team boundaries, ownership, interaction patterns). The inverse Conway maneuver is the recognition that the formwork is the primary design lever; the concrete will follow.

---

## Practitioner Heuristics

- **Start from the target architecture and work back to teams.** What modules / services / domains do you want loosely coupled? Each becomes a team boundary.
- **Hold the line on interaction modes.** Two teams instructed to be loosely coupled but communicating ten times a day are not loosely coupled, regardless of structure.
- **Avoid functional silos for new architectures.** A backend team, a frontend team, and a data team cannot produce a stream-aligned architecture.
- **Move slowly enough to consolidate.** A reorg every six months prevents the architecture from setting. Hold the new shape for at least 18 months.
- **Watch for shadow Conway.** Informal communication patterns (chat groups, ad-hoc allies) shape architecture as much as formal teams.

---

## Common Failure Modes

- **Architecture by diagram, teams by accident.** Drawing the future-state architecture without reshaping teams produces conflict between design intent and org reality. Architecture always loses.
- **Reorganizing without architecture intent.** A reorg "to be more agile" without a target architecture produces shuffled boxes, not new flow.
- **Splitting teams without splitting responsibilities.** Two teams that share a service still produce the architecture of one team.
- **Premature inverse Conway.** Reshaping teams before the architecture intent is clear produces churn without payoff.

---

## Worked Example

A retailer wants a clean separation between order capture and order fulfillment to enable independent scaling and faster feature delivery in capture. The current state: one team of 28 owns both, the codebase is monolithic, and changes to either side risk the other. Rather than start with a refactoring program, the leadership splits the team in two — Order Capture (12 people) and Order Fulfillment (16) — and explicitly designs an API contract between them. Initially the codebase fights this; six months in, the natural fault lines have emerged in the code, and a deliberate refactor follows the team boundary cleanly. Eighteen months later, order-capture deploys daily; fulfillment, weekly; both have independent on-call and release cadences. The architecture followed the formwork.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
