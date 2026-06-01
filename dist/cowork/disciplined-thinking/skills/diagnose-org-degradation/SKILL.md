---
name: "diagnose-org-degradation"
description: "Diagnoses why an organisation is quietly underperforming. Covers drift, scale threshold, bureaucratic expansion, management layer quality, metric capture, and incentive misalignment. Use when leadership senses something is wrong but cannot name it, or before launching a transformation programme."
metadata:
  plugin: "disciplined-thinking"
  version: "1.0.0"
  sources: "Systems/drift-to-failure.md,Systems/dunbars-number.md,Business/parkinsons-law.md,Leadership/peter-principle.md,Economics/goodharts-law.md,Systems/conways-law.md,Economics/principal-agent-problem.md"
---

# Diagnose Org Degradation

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. Drift to Failure

**Hold in mind:**
Imagine a ship navigating toward a fog-obscured coastline. The navigation team makes small, individually sensible course corrections — avoiding traffic, conserving fuel, maintaining schedule. Each correction is logged, reviewed, and approved. No single correction is alarming. But the cumulative effect of many small corrections is that the ship is now closer to the rocks than anyone intended, and closer than anyone's local view of the last correction reveals. Drift to failure is what happens when the distance to the rocks isn't visible in any single decision, only in the aggregate trajectory — and by the time the aggregate becomes visible, the margin for correction has shrunk.

**Do:**
- **Monitor trends, not snapshots.** Drift is invisible in any single cross-section. The signal is in the direction and velocity of change over time. Build review cadences that look at trajectories — not just "are we within acceptable parameters today?" but "which direction have we been moving for the last six months?"
- **Name the three boundaries explicitly for your system.** What is your economic viability boundary? Your operational capacity boundary? Your risk/quality/safety boundary? Make them legible so you can see when gradient forces are pushing you toward one of them.
- **Treat normalisation of deviance as a leading indicator, not a lagging one.** When the team stops treating a deviation from standard as notable — because it has happened so many times without consequence — the drift is already advanced. The absence of visible consequences is not evidence of acceptable performance; it may be evidence that consequences are accumulating invisibly.
- **Re-examine decisions that were made under pressure and then became permanent.** Temporary workarounds, exceptions granted under constraint, and "just this once" compromises that persisted are the footprints of drift. Periodic audits should specifically hunt for these.
- **Distinguish "we haven't had an accident" from "we are safe."** Systems operating near the risk boundary may go a long time without a visible failure — which creates the illusion of safety that enables continued drift. The Challenger and Columbia disasters both occurred after long periods of normalised risk. Safety requires evidence of margin, not merely the absence of incident.

**Avoid:**
**The safety paradox.** Long periods without failure are interpreted as evidence that the system is safe and operating well. This reduces pressure to maintain safety margins, which enables further drift toward the risk boundary. The very success of the system in avoiding failure creates the conditions for eventual catastrophic failure. This mechanism was central to both Challenger (1986) and the Deepwater Horizon disaster (2010).

**Local optimisation, global degradation.** Each team or function optimises for its own pressures and metrics. Each local optimisation is rational. The aggregate effect on the overall system is degradation of the properties — resilience, capacity, safety margins — that belong to no single function's remit and therefore no single function's accountability.

**Invisible debt accumulation.** Technical debt, organisational debt, relationship debt, and strategic debt all accumulate through drift. The mechanism is identical: individually sensible deferments that compound into a structural constraint on future action. The debt is invisible in any single deferment decision; it is visible only in the accumulation.

**Confidence from past performance.** "We've always done it this way and it's worked" is the cognitive signature of advanced drift. Past performance under conditions that no longer fully apply is used as evidence that current practices are sound. The system has changed; the mental model of acceptable practice has not.

### 2. Dunbar's Number

**Hold in mind:**
The number 150 is not a hard ceiling but a threshold beyond which the nature of social coordination fundamentally changes. Below ~150, organisations can function through direct relationships: people know each other, trust is built personally, accountability is informal, and culture is transmitted through behaviour and conversation. Above ~150, these mechanisms fail — not because people are less capable, but because the cognitive hardware required to track the full relationship network is no longer adequate.

Above the threshold, organisations must substitute **institutional mechanisms for relational ones**: formal hierarchies, documented processes, explicit policies, and structured communication replace the informal social fabric that held the smaller group together. This substitution is not neutral. Institutional mechanisms are slower, less adaptive, and less motivating than relational ones. They also create the conditions for Parkinson's Law (bureaucratic expansion) and the Peter Principle (promotion into management roles that the relational model didn't require).

For practitioners, Dunbar's Number is most useful as a **threshold diagnostic**: when an organisation crosses ~150, the informal mechanisms that made it effective will break — not because people changed, but because the social structure exceeded its cognitive substrate. Anticipating and designing for this transition is the difference between scaling gracefully and scaling chaotically.

**Do:**
- **Design the transition before you need it.** The failure mode is crossing 150 while still relying on relational coordination — discovering that the informal mechanisms no longer work only after they've visibly failed. At ~80–100 people, start building the institutional infrastructure that will be needed at 150+.
- **Preserve sub-Dunbar units within large organisations.** Teams, squads, and divisions that stay below 150 maintain the relational coordination benefits of small organisations within a large one. This is the logic behind Amazon's "two-pizza team" rule and military organisational structure (companies of ~120–150).
- **Understand which tier the relationship belongs to.** Dunbar's hierarchy of ~5/~15/~50/~150 describes different relationship intensities. Leadership teams operate at the ~5 and ~15 tier; division-level coordination at ~50; org-level coordination at ~150. Expectations of communication frequency, trust depth, and informal alignment should be calibrated to the tier.
- **Watch for culture transmission failure at scale.** Organisational culture is transmitted by direct modelling and relationship — people absorb norms by observing people they know and trust. Above ~150, culture must be transmitted through artefacts, rituals, and stories rather than direct relationship. The failure to switch mechanisms is one of the most common causes of cultural drift at scale.
- **Use Dunbar tiers to design communication rhythms.** All-hands for the full organisation (up to ~150 effective reach), team standups for the ~15 tier, leadership offsites for the ~5 tier. Communication formats that work for one tier produce noise or disconnection at another.

**Avoid:**
- **Ignoring the threshold until it becomes a crisis.** Growing organisations often notice the effects of exceeding Dunbar's Number — coordination failures, cultural drift, "we used to be able to move fast" — without identifying the structural cause. The diagnosis requires connecting the symptom to the scale threshold.
- **Trying to maintain relational coordination above the threshold.** Leaders who were effective at small-organisation relational leadership often continue using the same approach as the organisation scales — more all-hands, more personal availability, more direct communication — without recognising that the infrastructure has changed and these approaches now fail to reach the full group.
- **Building institutional mechanisms that destroy relational value.** The opposite failure: adding process, hierarchy, and formalisation in response to scale in ways that suppress the relational coordination that still works at the sub-unit level. The goal is to add institutional infrastructure at the organisational level while preserving relational coordination within sub-Dunbar units.
- **Assuming the number is exact.** The ~150 figure is an average with significant individual and cultural variation. Some people maintain stable networks of 200+; some organisational cultures sustain relational coordination at larger sizes through unusually high trust or co-location. Use it as a threshold to investigate, not a hard rule.

### 3. Parkinson's Law

**Hold in mind:**
The law describes two related phenomena that compound each other. The first is individual: a task given two weeks will take two weeks, regardless of how long it would take under pressure. The slack is filled with refinement, reconsideration, risk mitigation, coordination, and preparation — not because these are all necessary, but because the time is available. The second is organisational: bureaucracies grow because each manager's status depends on the number of subordinates they manage, creating a structural incentive to expand headcount independent of workload.

The insight for practitioners is not that deadlines are magic or that slack is bad — Organisational Slack has genuine value for absorbing variance and enabling exploration. The insight is that **constraint is a forcing function for prioritisation**. When time is unlimited, everything becomes equally important. When time is scarce, decisions must be made about what actually matters. Parkinson's Law says that the decision-making quality forced by constraint rarely emerges voluntarily in its absence.

**Do:**
- **Set deadlines shorter than you think necessary, then observe what gets cut.** The cuts reveal the actual priorities. What survives the constraint is what mattered; what gets dropped reveals what was Parkinson-fill: activity that occupied time without generating value.
- **Timeboxing is the primary operational antidote.** Fixed-duration sprints, timeboxed decisions, and hard meeting cutoffs apply Parkinson's Law deliberately. The constraint forces completion rather than perfection-seeking.
- **Audit recurring meetings for Parkinson expansion.** Meetings that were originally 30 minutes and are now 90 minutes, reviews that were quarterly and are now monthly, reporting cycles that have added layers — these are Parkinson expansion in institutional form. The question is not "should we have this meeting?" but "what would we lose if this meeting were half as long?"
- **Watch for organisational Parkinson's in headcount justification.** When headcount requests are driven by "managing the work the existing team generates" rather than customer or revenue metrics, the organisation is in Parkinson expansion. Growing teams without growing output is the institutional form of the law.
- **Apply Hofstadter's corollary in the other direction.** Hofstadter's Law says everything takes longer than expected. Parkinson's Law says everything takes as long as you allow. Both are true. The resolution: set a deadline that creates healthy tension, not one that creates panic or one that creates drift.

**Avoid:**
- **Conflating Parkinson expansion with thoroughness.** Work that expands to fill available time often feels like due diligence — more stakeholders consulted, more scenarios considered, more refinements made. Distinguishing genuine value-adding work from Parkinson-fill requires asking: "Would the outcome have changed if we'd done this in half the time?"
- **Using Parkinson's Law to justify under-resourcing.** The law describes how slack time is consumed, not that slack is always wasteful. Eliminating all slack produces brittleness, burnout, and the inability to absorb unexpected complexity. The aim is meaningful constraint, not permanent crisis.
- **Ignoring the organisational form of the law.** Most applications of Parkinson's Law focus on individual task management. The organisational form — bureaucratic expansion independent of workload — is more costly and harder to reverse. It is also more politically sensitive to name.
- **Applying tight deadlines without clear scope.** Timeboxing without scope definition produces rushed work on the wrong things. The constraint must specify what must be done, not just by when.

### 4. Peter Principle

**Hold in mind:**
The Peter Principle is not a cynical exaggeration; it is a logical consequence of a specific and common promotion criterion. If promotion is based on current performance, and if the skills required at the next level are different from — rather than simply more of — the skills at the current level, then promotion systematically selects for the wrong capability. The best engineer, the best salesperson, the best individual contributor becomes a manager — a role that requires fundamentally different skills: coordination, delegation, developing others, managing ambiguity. Many fail. The hierarchy fills with people who were excellent at something they no longer do.

The Principle's most important implication is not about individual failure but about **what the organisation loses**. Promoting the best individual contributor removes your best individual contributor and replaces them with a mediocre manager. The system destroys value twice: once by degrading management quality, and once by removing the person from the role in which they were generating the most value.

The corrective is architectural, not motivational: dual career ladders that allow individual contributors to progress without mandatory entry into management, promotion criteria that assess capability for the target role rather than performance in the current role, and a culture where staying excellent in your current role is as valued as moving up.

**Do:**
- **Promote on demonstrated capability for the target role, not performance in the current one.** This requires active evaluation of what the target role requires and whether the candidate has exhibited those skills — in projects, in informal leadership, in handling the complexity of the new role before being given the title.
- **Build dual career ladders.** The Peter Principle is partly a structural artefact: if the only path to higher compensation and status is management, excellent individual contributors are forced up the hierarchy even when both parties would be better served by keeping them as senior individual contributors.
- **Name the transition explicitly.** The move from individual contributor to manager is not a promotion to a better version of the same job — it is a career change. Many organisations treat it as promotion, which sets up both parties for failure. Name it as what it is, and evaluate the candidate's genuine desire and aptitude for the new role.
- **Audit your management layer for Peter Principle accumulation.** In established organisations, a significant fraction of middle managers are likely in roles beyond their competence — placed there by historical promotions that followed current-performance logic. This is uncomfortable to address but important to diagnose. The symptom: the manager was exceptional in their previous role and is unremarkable or worse in their current one.
- **Protect your best individual contributors from forced promotion.** The most talented people in technical, creative, or specialist roles are often the most at risk of Peter Principle harm — because they are so valuable that the organisation promotes them into management to "retain" them, inadvertently removing them from the work in which they excelled.

**Avoid:**
- **Confusing ambition with capability.** Employees who want promotion are not necessarily suited for the role they want. Desire and capability are independent variables; the promotion decision requires assessing both.
- **Using promotion as a retention mechanism.** Promoting someone to keep them from leaving is a common response that often ends badly: the person is unhappy in the new role (because it doesn't use the skills they were most engaged by), performs worse, and leaves anyway — having first occupied a position at the level of their incompetence.
- **Failing to notice Peter Principle accumulation until it becomes a crisis.** The Principle operates slowly. A single misplaced promotion is barely visible; a decade of current-performance-based promotions produces a management layer that cannot execute strategy. By the time the pattern is visible it has deeply embedded itself.
- **Assuming the promoted person is aware of their incompetence.** Many people promoted beyond their competence are not aware of it — partly because of Dunning-Kruger dynamics, partly because organisations are reluctant to give clear feedback to managers, and partly because the role itself may not provide clear signals of failure until significant damage has occurred.

### 5. Goodhart's Law

**Hold in mind:**
A *proxy* is chosen because it correlates with something we care about but cannot directly measure. That correlation existed under natural conditions. Once the proxy becomes the target, people optimise it directly, and the correlation breaks.

Hospital waiting-time targets cause patients to be held in ambulances outside the building. Software velocity metrics cause developers to split large tickets. NPS surveys get distributed only after good interactions. In each case, the metric improves while the underlying reality stays flat or degrades.

**The corrective is triangulation:** use multiple metrics that are hard to simultaneously game, include qualitative signals alongside quantitative ones, and rotate metrics before they calcify into targets.

### 6. Conway's Law

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

### 7. Principal–Agent Problem

**Hold in mind:**
Classic mitigations: **incentive alignment** (make the agent's payoff track the principal's outcomes), **screening** (better selection mechanisms), **monitoring** (metrics, audits), and **signalling** (costly observable demonstrations of type like credentials).

Each mitigation has costs: incentive alignment introduces Goodhart's Law risk; monitoring creates overhead and erodes trust. The art is choosing the right combination for the relationship.

## Deliverable format

Produce a markdown document with these sections:

### Primary degradation mechanism (name it and explain why it is primary)

### Evidence for each active mechanism (drift / scale / Parkinson / Peter / Goodhart / Conway / agency)

### Compounding sequence (how the mechanisms reinforce each other)

### What is individually rational but collectively corrosive

### Intervention priority and what comes next (Transformation Chain or Org Design for Flow)

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

## Reference cards

- [drift-to-failure](references/drift-to-failure.md)
- [dunbars-number](references/dunbars-number.md)
- [parkinsons-law](references/parkinsons-law.md)
- [peter-principle](references/peter-principle.md)
- [goodharts-law](references/goodharts-law.md)
- [conways-law](references/conways-law.md)
- [principal-agent-problem](references/principal-agent-problem.md)

