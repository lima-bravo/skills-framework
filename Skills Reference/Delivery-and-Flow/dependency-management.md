# Dependency Management
*Cross-team blocking work is the dominant constraint in scaled delivery*

**Category:** [Delivery & Flow](../index.html#delivery-flow) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

Dependency management is the operational discipline of identifying, sequencing, and reducing the inter-team blockers that gate the completion of work. In scaled delivery (more than ~5–8 teams), dependencies — not effort — become the binding constraint on throughput and predictability. A 2018 study of large agile programs found that cross-team dependencies accounted for more than 50% of variability in delivery dates. The discipline combines visibility (dependency maps, dependency boards), reduction (architectural and team redesign to eliminate dependencies), and management (explicit handoffs, capacity contracts) — in that order of preference.

---

## Mental Model

A single team is an engine; multiple teams are a transmission. Most scaled-delivery failures are transmission failures, not engine failures. Throwing more horsepower (people, money) at a transmission problem produces grinding gears and broken parts, not faster motion. The clearest analogue is a city's traffic system: adding more cars to congested intersections degrades throughput; adding signals, turn lanes, and routes (i.e., managing dependencies) improves it. The first managerial instinct is engine; the productive instinct is transmission.

---

## Practitioner Heuristics

- **Make dependencies visible at the program level.** A dependency map across teams, updated weekly, is worth more than any single project status report.
- **Eliminate before managing.** A dependency that can be designed out (via interface, platform, or team redesign) returns capacity permanently; a managed dependency consumes capacity ongoing.
- **Treat external-team capacity as a contract.** Implicit reliance on "the other team will help" produces predictable misses; capacity commitments make the constraint explicit.
- **Watch for fan-in patterns.** A team that 8 others depend on is structurally a bottleneck; redesign before tuning.
- **Count aged dependencies.** A dependency older than 30 days is decaying; chase or kill.

---

## Common Failure Modes

- **Heroics as a strategy.** Relying on senior people to "make it work" hides systemic dependency pain until they burn out.
- **Synchronized program increments as the only tool.** Quarterly big-room planning is useful for visibility but doesn't reduce dependencies; treat it as a forum, not a solution.
- **Dependencies hidden in code.** Cross-team coupling that lives in shared databases or shared deployment pipelines is invisible on the dependency board until it bites.
- **Re-orgs without architecture.** Splitting teams without splitting the underlying systems leaves the dependencies intact.

---

## Worked Example

A 30-team delivery program runs quarterly big-room planning. Each quarter, ~40% of planned work misses its commitment date; 70% of those misses trace to dependency slips. A dedicated dependency reduction effort: (1) maps the current dependency graph, (2) identifies five high-fan-in teams driving 60% of dependencies, (3) launches a platform extraction for two of the five, eliminating ~120 recurring dependencies per quarter. Six months later, dependency count is down 35%, on-time delivery is up 22%, and big-room planning shrinks from three days to one because there are fewer dependencies to negotiate.

---

## Connections

→ [**Team Topologies**](team-topologies.md) — the org-design discipline that reduces dependencies structurally.
→ [**Conway's Law**](../Systems/conways-law.md) — dependencies follow team boundaries.
→ [**Inverse Conway Maneuver**](inverse-conway.md) — deliberately reshape teams to remove dependencies.
→ [**Bottlenecks**](../Systems/bottlenecks.md) — high-fan-in teams are scaled-delivery bottlenecks.
→ [**Leverage**](../Physics-and-Chemistry/leverage.md) — internal platforms are the leverage mechanism that reduces dependencies structurally.

---

## References

- *Team Topologies* — Matthew Skelton & Manuel Pais (2019).
- *Accelerate* — Nicole Forsgren, Jez Humble & Gene Kim (2018).
- *The Phoenix Project* — Gene Kim, Kevin Behr & George Spafford (2013).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../index.html)*
