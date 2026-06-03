---
name: "set-wip-and-commitments"
description: "Designs WIP limits, pull policies, and flow-based commitments. Use when starting kanban, breaking WIP limits, or defining lead-time promises."
metadata:
  plugin: "delivery-and-flow"
  version: "1.0.0"
  sources: "Delivery-and-Flow/wip-limits.md,Delivery-and-Flow/kanban-method.md,Delivery-and-Flow/lead-time-cycle-time.md,Delivery-and-Flow/batch-size-reduction.md"
---

# Set Wip And Commitments

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. WIP Limits

**Hold in mind:**
Think of a buffet line with one chef and four pans. A pull system says: only when a pan is empty does the chef refill it. A push system says: keep all eight burners going regardless of how full the pans are. The pull system surfaces the constraint immediately — when the chef can't keep up, the empty pan is visible, and the question becomes "what is blocking the chef?" The push system buries the constraint in piles of cooled-down food. WIP limits make starvation downstream and overflow upstream both visible, and force the conversation to focus on flow rather than utilization.

**Do:**
- **Start at "current WIP minus one."** Avoid the trap of asking "what should the limit be?" — instead, set it just below current load and tighten until pain appears.
- **Limit by stage and by person.** Per-stage limits expose system bottlenecks; per-person limits expose context-switching cost. Use both.
- **When the limit hits, swarm — don't bypass.** The whole value of the limit is the conversation it forces when work cannot enter. Bypassing it ("just this once") burns the system slowly.
- **Make the limit visible.** A number written on the column header beats a policy document. Visibility creates self-enforcement.
- **Limit at the portfolio level too.** Initiatives, programs, and OKRs all have WIP. Most flow improvement work pays back fastest when WIP is limited at the level of strategic bets.

**Avoid:**
- **Setting limits theoretically.** A WIP limit derived from a spreadsheet rather than observed flow is a compliance artifact; teams will work around it. Tighten empirically.
- **Limit without policy.** WIP limits without explicit policies on what to do when blocked (swarm? escalate? park?) devolve into queues elsewhere.
- **Punishing teams for hitting limits.** The limit being hit is the system surfacing a problem. Treating it as a team failure teaches teams to hide WIP.
- **Limiting team WIP while admitting unlimited portfolio WIP.** The pressure migrates upward and reappears as estimation pressure, scope creep, and missed dates.

### 2. Kanban Method

**Hold in mind:**
A kanban board is the system's nervous system made visible. Each column is a stage; each card is an item; the board displays the truth of where work actually is. Compared to a status report — a snapshot of someone's narration — the board cannot lie. WIP limits on each column convert it from a visualization into a control system: when a column is full, upstream stops pushing and the constraint is forced into view. The board is therefore an instrument that surfaces operational reality every day, not a project management artifact.

**Do:**
- **Start with what you do now.** Map your existing process onto the board — including the ugly steps. Optimization comes after visibility.
- **Make explicit the implicit.** Who pulls? When can an item move? What counts as "done"? Write these as column policies on the board, not in a document.
- **Limit WIP per column, not just total.** Per-column limits surface stage-level bottlenecks; a total cap alone hides them.
- **Run cadences, not ceremonies.** Replenishment (admission), delivery, retrospectives, and risk reviews each have a rhythm; the board makes those cadences self-evident.
- **Treat blocked items as a signal.** Aged WIP and blocked items are the leading indicators; an item blocked for a week is a process problem, not a "to chase up."

**Avoid:**
- **Kanban as a board, not a method.** Drawing columns without WIP limits, policies, or flow management is task-tracking, not Kanban.
- **Skipping policy explicitness.** Without written column policies, every move is a negotiation; WIP creeps; trust erodes.
- **Confusing it with Scrum-without-sprints.** Kanban does not need a backlog grooming ritual, role definitions, or sprint cycles; layering them on dilutes the method.
- **Treating WIP limits as suggestions.** The whole engine relies on the limit being respected; "just this one extra item" repeated is how systems die.

### 3. Lead Time vs Cycle Time

**Hold in mind:**
A coffee shop. The customer's lead time begins when they get in line and ends when their coffee is in hand. The barista's cycle time begins when they pick up the order ticket and ends when the cup is on the counter. If lead time is 12 minutes and cycle time is 2 minutes, the team's improvement headroom is mostly upstream of the barista — in the queue, in the ordering UX, in batching. Reporting only cycle time would let the team celebrate productivity while the customer's experience worsens.

**Do:**
- **Report both, and report the percentile, not the mean.** "85th-percentile lead time was 18 days" is a usable commitment basis; "average lead time was 9 days" is meaningless to a stakeholder waiting on the long-tail items.
- **Define the start of each clock explicitly.** Lead time clocks frequently start at request submission, but stakeholders mentally start counting from "the conversation we had last Thursday." Surface and reconcile.
- **Cycle time variability matters more than the mean.** A team with cycle time of 3 ± 1 days is far more useful than one with 2 ± 4 days.
- **Use lead time for SLAs; use cycle time for capacity planning.** They answer different questions.
- **Aged WIP is the leading indicator.** Items in flight aging beyond the 85th-percentile cycle time predict lead-time blowouts before they happen.

**Avoid:**
- **Conflating the two.** Teams call cycle time "lead time" to make their numbers look better; stakeholders call lead time "cycle time" to push accountability onto the team.
- **Reporting only mean.** Half of all items finish above average. Stakeholders care about the worst end, not the middle.
- **Starting the clock at "in development."** Items that wait three weeks in a backlog and are then "completed in two days" make the team look fast and the customer feel slow.

### 4. Batch Size Reduction

**Hold in mind:**
Imagine moving a stack of bricks across a courtyard. Carrying the whole stack at once seems efficient — one trip. In practice: setup time dominates (you have to find a wheelbarrow), risk concentrates (drop one, you drop all), and feedback is late (you discover only at the end that the wall site moved). Carrying one or two at a time wastes none of the actual work and removes the failure modes. The same logic applies to releases, contract reviews, financial close cycles, marketing campaigns, and quarterly planning. Most large batches exist because someone optimized for setup cost without pricing the holding cost.

**Do:**
- **Identify the economic batch size.** Reinertsen's U-curve: total cost = transaction cost (per batch) + holding cost (per item × wait time). Most organizations have transaction costs that are arbitrary and reducible; lowering them lowers the optimal batch size.
- **Halve, then halve again.** Cutting a batch from quarterly to monthly often reveals the next reduction — monthly to weekly — that no one would have proposed cold.
- **Reduce transaction cost first.** Cheap deployments enable small batches; expensive deployments force large ones. Invest in transaction-cost reduction (automation, templates) before forcing batch shrinkage.
- **Watch the second-order effects.** Smaller batches expose hidden coordination, governance, and approval costs. These usually need to shrink alongside.
- **Measure batch size explicitly.** Story points per release, PRs per merge, agenda items per steering committee, candidates per offer round — make the number visible and trend it.

**Avoid:**
- **Forcing small batches without lowering transaction cost.** Teams swap a quarterly release for a weekly one and burn out on the same overhead applied 13× as often.
- **Treating "batch" as only the release.** Batches exist at every handoff: requirements bundles, design reviews, approval gates. The longest batch in the chain dominates lead time.
- **Confusing batch size with team size.** They are independent; a team of two can run quarterly batches, a team of 200 can ship daily.

## Deliverable format

Produce a markdown document with these sections:

### Current WIP and pain points

### Proposed WIP limits per stage (with rationale)

### Explicit pull and swarm policies

### Lead time vs cycle time definitions for stakeholders

### Rollout plan and expected trade-offs

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

- [wip-limits](references/wip-limits.md)
- [kanban-method](references/kanban-method.md)
- [lead-time-cycle-time](references/lead-time-cycle-time.md)
- [batch-size-reduction](references/batch-size-reduction.md)

