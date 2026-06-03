# Team Topologies
*Four team types and three interaction modes — for fast flow*

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

*Team Topologies* (Matthew Skelton & Manuel Pais, 2019) is a modern model for organizing software-intensive work around the flow of value. It names four team types — **stream-aligned** (own end-to-end flow for a value stream), **enabling** (help stream-aligned teams acquire capabilities), **complicated-subsystem** (carry deep specialist expertise), and **platform** (reduce extraneous load by providing internal services) — and three interaction modes — **collaboration** (close, short-term), **X-as-a-Service** (consume a clean API), and **facilitating** (help, then withdraw). The framing replaces project teams, matrixed teams, and feature teams as the canonical org-design lens for flow.

---

## Mental Model

Most enterprise org-charts treat teams as boxes labelled by function (engineering, design, ops) or product (consumer, business). Team Topologies inverts this: name the value streams first, build stream-aligned teams that own each one end-to-end, and then design the support structure (platforms, enabling, complicated-subsystem) to serve those teams. The interaction modes are the second discipline: most failed reorganizations leave team types ambiguous *and* expect teams to interact in whichever mode happens to be convenient. Naming the mode (we collaborate, you consume my service, I facilitate you) is half the value.

---

## Practitioner Heuristics

- **Start from value streams.** Identify the customer-facing streams; stream-aligned teams are organized around them.
- **Default to X-as-a-Service.** Most internal team interactions should be service-consumption, not ongoing collaboration. Collaboration is intense and short-term.
- **Use enabling teams as scaffolding, not permanent overhead.** They help a stream-aligned team build a capability and then withdraw. Persistent enabling teams become a different problem.
- **Platforms must be products.** Internal platforms only work when stream-aligned teams choose them. Mandated platforms become dependencies.
- **Cap stream-aligned team cognitive load.** A team that "owns" too many streams isn't stream-aligned; it's overloaded.

---

## Common Failure Modes

- **Re-labelling old teams.** Calling a functional team "stream-aligned" without changing scope or interactions is theater.
- **Platform-as-mandate.** Internal platforms imposed top-down without product thinking become friction, not leverage.
- **Permanent collaboration.** Two teams in "collaboration mode" for two years are a single, badly designed team.
- **No enabling capacity.** Stream-aligned teams need help to acquire new capabilities; without enabling teams, they either don't learn or fall back on collaboration.

---

## Worked Example

A 400-person fintech reorganization moves from a 30-team feature-matrix to a Team Topologies model. The mapping: 14 stream-aligned teams (each owns one customer journey end-to-end), 4 platform teams (identity, deployment, observability, data), 2 complicated-subsystem teams (risk engine, payment connectivity), and a small enabling team that rotates capability uplift through stream-aligned teams. Interaction modes are written and visible on a wall. Within a year, DORA metrics move from low- to high-band on three of four indicators, cross-team dependency tickets fall 60%, and onboarding time for new senior engineers drops from 7 to 9 weeks down to 4. The biggest difficulty was killing two persistent collaboration relationships that the old org-chart had required.

---

## Connections

→ [**Conway's Law**](../Systems/conways-law.md) — Team Topologies is an applied Conway maneuver.
→ [**Inverse Conway Maneuver**](inverse-conway.md) — deliberately shaping teams to produce desired architecture.
→ [**Cognitive Load (Team)**](cognitive-load-team.md) — the constraint Team Topologies optimizes against.
→ [**Leverage**](../Physics-and-Chemistry/leverage.md) — platforms are force multipliers; the leverage card explains the underlying mechanism.
→ [**Dependency Management**](dependency-management.md) — interaction modes are dependency contracts.

---

## References

- *Team Topologies: Organizing Business and Technology Teams for Fast Flow* — Matthew Skelton & Manuel Pais (2019).
- *Accelerate* — Nicole Forsgren, Jez Humble & Gene Kim (2018).
- *Project to Product* — Mik Kersten (2018).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
