---
name: "design-org-for-flow"
description: "Aligns teams and dependencies to value streams using team topologies and Conway. Use for reorgs, platform teams, or cross-team blocking work."
metadata:
  plugin: "delivery-and-flow"
  version: "1.0.0"
  sources: "Delivery-and-Flow/team-topologies.md,Delivery-and-Flow/inverse-conway.md,Delivery-and-Flow/dependency-management.md,Delivery-and-Flow/feature-factory.md,Systems/conways-law.md"
---

# Design Org For Flow

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. Team Topologies

**Hold in mind:**
Most enterprise org-charts treat teams as boxes labelled by function (engineering, design, ops) or product (consumer, business). Team Topologies inverts this: name the value streams first, build stream-aligned teams that own each one end-to-end, and then design the support structure (platforms, enabling, complicated-subsystem) to serve those teams. The interaction modes are the second discipline: most failed reorganizations leave team types ambiguous *and* expect teams to interact in whichever mode happens to be convenient. Naming the mode (we collaborate, you consume my service, I facilitate you) is half the value.

**Do:**
- **Start from value streams.** Identify the customer-facing streams; stream-aligned teams are organized around them.
- **Default to X-as-a-Service.** Most internal team interactions should be service-consumption, not ongoing collaboration. Collaboration is intense and short-term.
- **Use enabling teams as scaffolding, not permanent overhead.** They help a stream-aligned team build a capability and then withdraw. Persistent enabling teams become a different problem.
- **Platforms must be products.** Internal platforms only work when stream-aligned teams choose them. Mandated platforms become dependencies.
- **Cap stream-aligned team cognitive load.** A team that "owns" too many streams isn't stream-aligned; it's overloaded.

**Avoid:**
- **Re-labelling old teams.** Calling a functional team "stream-aligned" without changing scope or interactions is theater.
- **Platform-as-mandate.** Internal platforms imposed top-down without product thinking become friction, not leverage.
- **Permanent collaboration.** Two teams in "collaboration mode" for two years are a single, badly designed team.
- **No enabling capacity.** Stream-aligned teams need help to acquire new capabilities; without enabling teams, they either don't learn or fall back on collaboration.

### 2. Inverse Conway Maneuver

**Hold in mind:**
Imagine pouring concrete: the shape it sets in is the shape of the formwork. Software architecture is similar — it sets into the shape of the team boundaries that surround it, regardless of design intent. Most architecture initiatives focus on the concrete (diagrams, target states) and ignore the formwork (team boundaries, ownership, interaction patterns). The inverse Conway maneuver is the recognition that the formwork is the primary design lever; the concrete will follow.

**Do:**
- **Start from the target architecture and work back to teams.** What modules / services / domains do you want loosely coupled? Each becomes a team boundary.
- **Hold the line on interaction modes.** Two teams instructed to be loosely coupled but communicating ten times a day are not loosely coupled, regardless of structure.
- **Avoid functional silos for new architectures.** A backend team, a frontend team, and a data team cannot produce a stream-aligned architecture.
- **Move slowly enough to consolidate.** A reorg every six months prevents the architecture from setting. Hold the new shape for at least 18 months.
- **Watch for shadow Conway.** Informal communication patterns (chat groups, ad-hoc allies) shape architecture as much as formal teams.

**Avoid:**
- **Architecture by diagram, teams by accident.** Drawing the future-state architecture without reshaping teams produces conflict between design intent and org reality. Architecture always loses.
- **Reorganizing without architecture intent.** A reorg "to be more agile" without a target architecture produces shuffled boxes, not new flow.
- **Splitting teams without splitting responsibilities.** Two teams that share a service still produce the architecture of one team.
- **Premature inverse Conway.** Reshaping teams before the architecture intent is clear produces churn without payoff.

### 3. Dependency Management

**Hold in mind:**
A single team is an engine; multiple teams are a transmission. Most scaled-delivery failures are transmission failures, not engine failures. Throwing more horsepower (people, money) at a transmission problem produces grinding gears and broken parts, not faster motion. The clearest analogue is a city's traffic system: adding more cars to congested intersections degrades throughput; adding signals, turn lanes, and routes (i.e., managing dependencies) improves it. The first managerial instinct is engine; the productive instinct is transmission.

**Do:**
- **Make dependencies visible at the program level.** A dependency map across teams, updated weekly, is worth more than any single project status report.
- **Eliminate before managing.** A dependency that can be designed out (via interface, platform, or team redesign) returns capacity permanently; a managed dependency consumes capacity ongoing.
- **Treat external-team capacity as a contract.** Implicit reliance on "the other team will help" produces predictable misses; capacity commitments make the constraint explicit.
- **Watch for fan-in patterns.** A team that 8 others depend on is structurally a bottleneck; redesign before tuning.
- **Count aged dependencies.** A dependency older than 30 days is decaying; chase or kill.

**Avoid:**
- **Heroics as a strategy.** Relying on senior people to "make it work" hides systemic dependency pain until they burn out.
- **Synchronized program increments as the only tool.** Quarterly big-room planning is useful for visibility but doesn't reduce dependencies; treat it as a forum, not a solution.
- **Dependencies hidden in code.** Cross-team coupling that lives in shared databases or shared deployment pipelines is invisible on the dependency board until it bites.
- **Re-orgs without architecture.** Splitting teams without splitting the underlying systems leaves the dependencies intact.

### 4. Feature Factory vs Product Orientation

**Hold in mind:**
Two restaurants. One measures performance by meals served, dishes prepped, and kitchen activity. The other measures by repeat customers, table satisfaction, and food returned uneaten. The first is busy; the second is improving. The first looks productive on paper; the second has the metrics that matter. The same dichotomy in software: a feature-factory metric stack tracks velocity, story points, and shipped features; a product-oriented stack tracks activation, retention, customer outcomes, and cost-of-delay realization. Cutler's diagnostic checklist (no time spent measuring outcomes, no kills, no learning from launches, success = shipped) makes the distinction operationally visible.

**Do:**
- **Audit the outcome connection.** For every shipped feature in the last quarter, ask: what was the predicted outcome? What did the actual outcome show? If the team cannot answer for most features, it's a feature factory.
- **Watch for "we never kill features."** Healthy product organizations kill features at meaningful rates because the outcome thesis didn't hold.
- **Track time-to-learning, not just time-to-ship.** How long between launch and outcome verdict? In feature factories, this is "never."
- **Change incentives before structure.** Feature-factory dynamics are usually maintained by output-based incentives (annual targets, headcount tied to roadmap). Address the incentive before the workflow.
- **Pilot product-oriented teams.** Switching a whole org is hard; a stream-aligned pilot team running outcome-driven planning produces both proof points and trained leaders.

**Avoid:**
- **Renaming the factory.** Calling a feature factory "product-oriented" without changing how decisions are made.
- **Outcome metrics as decoration.** Reporting customer KPIs alongside feature ships, but never using them to stop or redirect.
- **Treating the diagnosis as an accusation.** Many feature factories were built rationally given the incentives. The diagnosis is structural, not moral.
- **Top-down product orientation.** Mandating "be more product-oriented" without changing reporting structures, incentives, or kill criteria produces compliance theater.

### 5. Conway's Law

**Hold in mind:**
Teams build interfaces between systems where they have interfaces between themselves. If two teams rarely talk, their respective subsystems will have a poorly designed integration. If a single team owns a complex, cross-cutting concern, their system will tend toward a monolith. The communication structure is not a constraint imposed on the architecture — it *is* the architecture. The practitioner who wants to change the architecture must first ask: "Does the team structure and communication pattern produce this architecture? And if I want a different architecture, do I need a different team structure?"

**Do:**
- **Audit the team structure before designing the system architecture.** If you want a microservices architecture, you need teams that own individual services and have minimal cross-team dependencies. If your team structure is tightly coupled, your microservices will be too.
- **Apply the Reverse Conway Manoeuvre deliberately.** When Amazon decided to build AWS, they restructured around the "two-pizza team" model with explicit API ownership. The restructuring preceded the architecture; the architecture followed.
- **Use Conway's Law diagnostically.** If a system integration is consistently painful, fragile, or poorly defined, look at the interface between the teams responsible for it. The integration quality is a proxy for the relationship quality.
- **Microservices require micro-teams.** The most common failure in microservices adoption: decomposing the system architecture without decomposing the team structure. The result is a distributed monolith — the worst of both worlds.
- **Conway's Law also applies to products.** The features that are easiest to use are typically those where one team owns the entire user flow. Features that require multiple teams produce handoff seams that are visible in the user experience.

**Avoid:**
- **Designing for the intended architecture, not the actual team structure.** Architecture diagrams describe how things should work; Conway's Law describes how they will actually work. Reconcile both before committing.
- **Ignoring Conway's Law during mergers and acquisitions.** Two companies with different engineering cultures and team structures will produce integrated systems that reflect their independent communication patterns — until organizational integration is explicitly managed.

## Deliverable format

Produce a markdown document with these sections:

### Value stream and primary constraint

### Current org vs desired topology

### Dependency map (critical paths)

### Inverse Conway moves (team changes to get desired flow)

### Risks and transition sequencing

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

## Reference cards

- [team-topologies](references/team-topologies.md)
- [inverse-conway](references/inverse-conway.md)
- [dependency-management](references/dependency-management.md)
- [feature-factory](references/feature-factory.md)
- [conways-law](references/conways-law.md)

