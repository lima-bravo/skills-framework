# WIP Limits
*Explicit caps on work-in-progress that pull, rather than push, new work*

**Category:** [Delivery & Flow](../index.html#delivery-flow) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

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

---

## Worked Example

A marketing operations team has 22 campaigns in flight across 8 people. Cycle time has crept from three weeks to nine. Leadership's instinct is "we need to hire." Instead, the team sets a WIP limit of 12 (current minus 10) and a swarm policy for blocked items. In the first two weeks, three campaigns finish, two are killed (no one could justify them), and a stakeholder priority conversation surfaces that wasn't happening before. Cycle time on completed work falls to four weeks. No new hires; the lever was admission control.

---

## Common Failure Modes (cont.)

- **Treating WIP limits as agile theater.** They are an operational constraint with economic implications, not a ritual.

---

## Connections

→ [**Little's Law**](littles-law.md) — WIP limits are how Little's Law becomes management practice; lower L, lower W.
→ [**Kanban Method**](kanban-method.md) — Kanban is the system; WIP limits are the active ingredient.
→ [**Bottlenecks**](../Systems/bottlenecks.md) — WIP limits at non-bottleneck stages force the constraint to become visible.
→ [**Flow Efficiency**](flow-efficiency.md) — limiting WIP cuts wait time, which is where most cycle time hides.
→ [**Attention Budget**](attention-budget.md) — individual WIP limits are the personal analogue.

---

## References

- *Kanban: Successful Evolutionary Change for Your Technology Business* — David J. Anderson (2010).
- *The Principles of Product Development Flow* — Donald G. Reinertsen (2009).
- *Toyota Production System: Beyond Large-Scale Production* — Taiichi Ohno (1988).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../index.html)*
