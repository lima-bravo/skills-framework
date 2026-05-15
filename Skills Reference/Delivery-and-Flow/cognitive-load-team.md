# Cognitive Load (Team)
*The mental overhead a team carries — design it deliberately*

**Category:** [Delivery & Flow](../index.html#delivery-flow) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

Cognitive load is the mental effort required to perform a task. John Sweller's original work (1988) distinguishes three types: **intrinsic** (inherent to the problem), **extraneous** (caused by how the work is presented or organized), and **germane** (effort spent on learning patterns that transfer). At the team level, *Team Topologies* (Skelton & Pais, 2019) frames team cognitive load as the binding constraint on team effectiveness: assign a team too much surface area, and intrinsic load alone exhausts the budget; reduce extraneous load (via platforms, standards, tooling) to free capacity for the intrinsic problem and for germane learning.

---

## Mental Model

A team has a finite cognitive budget — perhaps two to four "domains" worth of mental space, depending on size and seniority. Loading a team with eight services across three business domains, two infrastructure platforms, and a security regime they own all of is overload, regardless of how many engineers. The symptoms are predictable: slow onboarding, fragile knowledge concentrated in one or two people, chronic firefighting, surprise outages. Treating these as morale or hiring problems misses the diagnosis; they are signs of cognitive overload at the team level.

---

## Practitioner Heuristics

- **Audit the team's surface area.** List the domains, services, technologies, and stakeholder groups the team must hold in their heads. If the list runs past one page, load is probably too high.
- **Reduce extraneous load first.** Standards, paved roads, internal platforms, runbooks, and automation reduce extraneous load without changing what the team is responsible for.
- **Match team type to load.** Stream-aligned teams own end-to-end flow within their domain; platform teams reduce extraneous load for them; complicated-subsystem teams hold intrinsic load others can't.
- **Treat onboarding time as a load signal.** If new senior hires take six months to be effective, intrinsic load is too high.
- **Use the load lens in re-orgs.** Splitting teams by service usually preserves load; splitting by domain shrinks it.

---

## Common Failure Modes

- **"Just hire more people."** Adding people to an overloaded team adds coordination overhead, not capacity, until the underlying load is reshaped.
- **Treating load as personal.** Burnout in a team often reflects load mismatch, not personal fragility.
- **Confusing germane load with overload.** Effort spent learning patterns is investment; effort spent fighting extraneous complexity is waste. Distinguish.
- **Designing topology without a load model.** Org redesigns that ignore cognitive load end up reshuffling the same overload to different team names.

---

## Worked Example

A payment-platform team of nine engineers owns five services, the on-call rotation for all of them, vendor management for the payment provider, the fraud rule engine, and three integrations with internal teams. On-call burnout is rising; senior engineers report "thinking is happening on weekends." A cognitive-load audit identifies fraud and vendor management as belonging to a different domain. A reorg splits the team into a payment-flow stream-aligned team (five engineers) and a fraud-and-vendor team (four engineers, hired one more). Within a quarter, on-call stress is down, weekend pager pages drop, and the payment-flow team ships its first release in 11 weeks rather than the previous eight-month average.

---

## Connections

→ [**Team Topologies**](team-topologies.md) — the org-design model built around cognitive load.
→ [**Conway's Law**](../Systems/conways-law.md) — architecture and load are mutually determined.
→ [**Leverage**](../Physics-and-Chemistry/leverage.md) — internal platforms apply leverage by absorbing extraneous load for stream-aligned teams.
→ [**Attention Budget**](attention-budget.md) — the individual analogue.
→ [**Dependency Management**](dependency-management.md) — dependencies are a major source of extraneous load.

---

## References

- *Team Topologies: Organizing Business and Technology Teams for Fast Flow* — Matthew Skelton & Manuel Pais (2019).
- "Cognitive Load During Problem Solving" — John Sweller (Cognitive Science, 1988).
- *Accelerate* — Nicole Forsgren, Jez Humble & Gene Kim (2018).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../index.html)*
