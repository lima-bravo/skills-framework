---
id: 132
name: WIP Limits
category: Delivery & Flow
cardType: standard
tagline: Explicit caps on work-in-progress that pull, rather than push, new work
connections:
  - id: 131
    rationale: WIP limits are how Little's Law becomes management practice; lower L, lower W.
  - id: 138
    rationale: Kanban is the system; WIP limits are the active ingredient.
  - id: 18
    rationale: WIP limits at non-bottleneck stages force the constraint to become visible.
  - id: 133
    rationale: limiting WIP cuts wait time, which is where most cycle time hides.
  - id: 148
    rationale: individual WIP limits are the personal analogue.
  - id: 241
    rationale: "WIP limits are the flow-system expression of Parkinson's Law management: constraining work in progress forces completion rather than expansion."
  - id: 143
    rationale: Flow Load (the flow metric for work in progress across a value stream) is WIP limits operating at portfolio scale; the same constraint logic applied one level up.
references:
  - title: "Kanban: Successful Evolutionary Change for Your Technology Business"
    authorYear: David J. Anderson (2010)
    supports: the Kanban Method for knowledge work; WIP limits as the central operating mechanism.
  - title: The Principles of Product Development Flow
    authorYear: Donald G. Reinertsen (2009)
    supports: the economic case for WIP limits in product development — queue length drives cycle time.
  - title: "Toyota Production System: Beyond Large-Scale Production"
    authorYear: Taiichi Ohno (1988)
    supports: the TPS origin of pull systems and WIP control; the source of the stop-and-fix culture that makes WIP limits effective.
---

# WIP Limits

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

A WIP limit is an explicit cap on the number of items allowed in a stage of work — or in a whole system — at any one time. New items only enter when an in-flight item leaves; this converts a push system (work is assigned when capacity is created) into a pull system (work is pulled when capacity is freed). WIP limits are the operating mechanism that turns Little's Law from arithmetic into management. They originated in the Toyota Production System (Taiichi Ohno, 1950s) and were generalized to knowledge work by David J. Anderson's Kanban Method in 2010.

---

## Mental Model

Think of a buffet line with one chef and four pans. A pull system says: only when a pan is empty does the chef refill it. A push system says: keep all eight burners going regardless of how full the pans are. The pull system surfaces the constraint immediately — when the chef can't keep up, the empty pan is visible, and the question becomes "what is blocking the chef?" The push system buries the constraint in piles of cooled-down food. WIP limits make starvation downstream and overflow upstream both visible, and force the conversation to focus on flow rather than utilization.

---

## Practitioner Heuristics

- **Start at "current WIP minus one."** Avoid the trap of asking "what should the limit be?" — instead, set it just below current load and tighten until pain appears.
- **Limit by stage and by person.** Per-stage limits expose system bottlenecks; per-person limits expose context-switching cost. Use both.
- **When the limit hits, swarm — don't bypass.** The whole value of the limit is the conversation it forces when work cannot enter. Bypassing it ("just this once") burns the system slowly.
- **Make the limit visible.** A number written on the column header beats a policy document. Visibility creates self-enforcement.
- **Limit at the portfolio level too.** Initiatives, programs, and OKRs all have WIP. Most flow improvement work pays back fastest when WIP is limited at the level of strategic bets.

---

## Common Failure Modes

- **Setting limits theoretically.** A WIP limit derived from a spreadsheet rather than observed flow is a compliance artifact; teams will work around it. Tighten empirically.
- **Limit without policy.** WIP limits without explicit policies on what to do when blocked (swarm? escalate? park?) devolve into queues elsewhere.
- **Punishing teams for hitting limits.** The limit being hit is the system surfacing a problem. Treating it as a team failure teaches teams to hide WIP.
- **Limiting team WIP while admitting unlimited portfolio WIP.** The pressure migrates upward and reappears as estimation pressure, scope creep, and missed dates.
- **Treating WIP limits as agile theater.** They are an operational constraint with economic implications, not a ritual.

---

## Worked Example

A marketing operations team has 22 campaigns in flight across 8 people. Cycle time has crept from three weeks to nine. Leadership's instinct is "we need to hire." Instead, the team sets a WIP limit of 12 (current minus 10) and a swarm policy for blocked items. In the first two weeks, three campaigns finish, two are killed (no one could justify them), and a stakeholder priority conversation surfaces that wasn't happening before. Cycle time on completed work falls to four weeks. No new hires; the lever was admission control.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
