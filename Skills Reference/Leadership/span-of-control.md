---
id: 257
name: Span of Control
category: Leadership
cardType: standard
tagline: Communication links grow as n(n−1)/2. Coordination cost grows with them.
connections:
  - id: 154
    rationale: Team Topologies defines team *types* (stream-aligned, platform, enabling, complicated-subsystem); span of control governs team *size* within each type. Both constraints must be satisfied.
  - id: 150
    rationale: team cognitive load is a function of both the complexity of the domain and the coordination overhead of the team size; the two interact.
  - id: 156
    rationale: cross-team dependencies scale with the number of teams, which is itself a function of how span-of-control limits have been applied.
  - id: 155
    rationale: team size and structure determine what architectures are buildable; span-of-control decisions are therefore architectural decisions.
  - id: 118
    rationale: effective mission command requires a team small enough for mutual understanding of intent; teams larger than Dunbar's 15 cannot maintain the shared context that autonomous action requires.
references:
  - title: "The Mythical Man-Month: Essays on Software Engineering"
    authorYear: Frederick P. Brooks Jr., 1975
    supports: Brooks's Law — the combinatorial communication overhead that makes adding people to a late project counterproductive.
  - title: "Team Topologies: Organizing Business and Technology Teams for Fast Flow"
    authorYear: Matthew Skelton & Manuel Pais, 2019
    supports: team types and interaction modes that constrain how span-of-control limits should be applied in delivery organizations.
  - title: An Introduction to General Systems Thinking
    authorYear: Gerald M. Weinberg, 1975
    supports: communication-link analysis.
---

# Span of Control

**Category:** [Leadership](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Span of control is the number of direct reports or collaborating people a manager or team can effectively coordinate. As team size grows linearly, the number of possible communication links grows as n(n−1)/2 — so a team of 5 has 10 links, a team of 10 has 45, a team of 15 has 105. This combinatorial growth is the empirical basis for three well-known structural limits: **Brooks's Law** (adding engineers to a late software project makes it later, because each addition creates new communication paths that consume existing team capacity), **Dunbar's numbers** (cognitive limits on stable social relationships: ~5 for close collaboration, ~15 for trust, ~50 for active acquaintance, ~150 for named recognition), and the **recommended team size of 6–10** in most delivery frameworks (Amazon's "two-pizza rule," Scrum's 3–9 members). Span of control sets the outer boundary on team performance that no amount of talent or process can exceed.

---

## Mental Model

A manager with 3 direct reports has 3 relationships to maintain. A manager with 10 has 45. The difference is not 3.3×; it is 15×. And every relationship a manager maintains is attention, context, and cycle time diverted from the work itself. This is why a team of 12 is not two teams of 6 with a shared manager — it is a coordination system that has become its own primary work. Brooks's observation in *The Mythical Man-Month* (1975) is still the most common management error in software: behind a slipping schedule, a team is enlarged, new members require onboarding by the most experienced people (who slow down), new communication paths emerge faster than the team can route around them, and the schedule slips further. The underlying structure, not the people, is the source of the failure.

---

## Practitioner Heuristics

- **Keep delivery teams at 6–10 people.** Below 4, the team lacks redundancy and is vulnerable to individual absences; above 10, coordination overhead exceeds the productivity benefit of additional capacity. The 6–8 range is the empirical sweet spot across most delivery contexts.
- **When behind, remove people before adding them.** Brooks's prescription is counterintuitive: if a small experienced team is behind schedule, adding no one and protecting the team from interruption is usually faster than adding engineers. If headcount must increase, add at the next natural planning boundary, not in the middle of a delivery cycle.
- **Use Dunbar's 15 as the trust-team limit.** A group larger than 15 cannot maintain the degree of mutual trust and knowledge that enables autonomous operation. Teams of 15+ reliably develop subgroups, which are then poorly coordinated — the coordination overhead of the unofficial subgroups is hidden and therefore unmanaged.
- **Distinguish span of control from span of influence.** A manager can effectively direct 6–8 people; they can indirectly influence many more through culture, norms, and architecture decisions. Leaders who mistake "span of control" for the limit on their impact tend to over-direct and under-influence.
- **Count the links, not the headcount.** When assessing whether a team is too large, count the required communication links for the work being done — not the headcount. A 10-person team that splits into two sub-groups with minimal cross-group dependency is operationally two teams of 5; a 7-person team that requires all-to-all communication daily is operationally overloaded.
- **Apply the rule recursively.** A management layer works the same way. A director with 10 direct-report managers faces the same combinatorial overhead as a single manager with 10 individual contributors. The whole org chart is a span-of-control problem at every level.

---

## Common Failure Modes

- **Adding headcount as the default response to missed delivery.** This is Brooks's Law in action — an extremely common failure because it is the response that feels most decisive and costs the most political capital to resist.
- **Confusing team size with team capacity.** A team's throughput is constrained by its coordination overhead, not just its headcount. A 12-person team with high internal dependency may have less effective capacity than a well-structured 8-person team.
- **Ignoring Dunbar's numbers in organizational design.** A 200-person department without meaningful internal structure will self-organize into subgroups — but unintentionally, along lines of personal affinity rather than delivery alignment. Structure at the 150-person level (Dunbar's village number) is not optional; it exists either by design or by accident.
- **Manager span too wide for the role's complexity.** A manager of complex knowledge workers doing non-routine tasks can effectively direct 4–6 people. A manager of routine, well-defined tasks can span 15–20. Applying a single span-of-control norm across both situations produces either micromanagement or abandonment.
- **Treating the team topology as fixed.** Span of control interacts with Team Topologies — a stream-aligned team of 8 operates differently from a platform team of 8. The right span depends on the team's interaction model, not just its headcount.

---

## Worked Example

A software delivery program is running 18 months behind schedule. The programme director's response: hire 15 additional engineers across four teams. Six months later, the programme is 24 months behind. A retrospective finds the cause: each of the four teams grew from 8 to 12–15 members. The new members required 4–6 weeks of onboarding from the most experienced engineers on each team; communication overhead in daily standups increased from 15 minutes to 45; the architectural decisions the original teams could make in a single meeting now require cross-team alignment sessions. Net effect: the 15 new engineers added approximately 2 person-months of net capacity while consuming 8 person-months of existing capacity — a negative return. A restructure splits the four large teams into eight teams of 7–8, each with full ownership of one service boundary. Coordination overhead drops; delivery rate recovers to pre-growth levels within two quarters with no further headcount change.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
