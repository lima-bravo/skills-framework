# Little's Law
*WIP equals throughput times cycle time*

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Little's Law states that for any stable system, the average amount of work-in-progress (WIP) equals the average throughput multiplied by the average cycle time: **L = λW**. Proved by John D. C. Little in 1961 and applicable to any queueing system — from supermarket checkouts to software delivery — it is the most general and most underused law in operations. The strategic implication: cycle time is a function of WIP, not of effort. Push more work into a system and items will spend more time waiting, even if everyone is working harder.

---

## Mental Model

Picture a highway. The number of cars on the road (WIP) equals how fast cars exit the highway (throughput) multiplied by how long each car spends on it (travel time). Add more cars without widening the road and travel time goes up linearly. Subtract cars and everyone moves faster. The same arithmetic governs a software team's pull request queue, a hospital's emergency department, and a portfolio of consulting engagements. To shorten cycle time without buying more capacity, the only lever is WIP.

---

## Practitioner Heuristics

- **Cycle time follows WIP, not the other way around.** If you want predictable delivery, control how much work is admitted into the system; commitments to dates are commitments to WIP discipline.
- **Diagnose with the simplest count.** Walk the wall: count items in flight, divide by weekly throughput, and you get the average cycle time without any new measurement infrastructure.
- **Stability is the assumption.** Little's Law applies on average over a stable window. Use it for steady-state diagnosis; pair with variability analysis for forecasting.
- **It works at every level.** Apply at portfolio (initiatives), program (epics), and team (stories) levels simultaneously to find the layer at which WIP is choking flow.
- **Convert it into a story.** Executives accept "if we cut WIP from 40 to 20 we should see cycle time roughly halve" far faster than queueing theory derivations.

---

## Common Failure Modes

- **Treating it as a forecasting tool.** Little's Law gives averages, not commitments. Promising specific dates from L = λW without a variability model produces overconfident plans.
- **Measuring WIP and throughput inconsistently.** If your WIP count includes items the throughput definition excludes (e.g. blocked work, parked initiatives), the arithmetic breaks. Define both at the same scope.
- **Ignoring the stability assumption.** During a major hiring surge, scope change, or reorg, the system is not stable; the law still holds on average but the average is meaningless within that window.

---

## Worked Example

A platform team complains that initiatives take six months on average. The portfolio shows 30 active initiatives and the team completes about 5 per month. Little's Law: 30 ÷ 5 = 6 months — the data fit. The executive instinct is "ship faster"; the lever Little's Law surfaces is WIP. Halving active initiatives to 15 should — all else equal — halve average cycle time to three months, without anyone working harder. The conversation shifts from heroics to portfolio discipline.

---

## Connections

→ [132·WIP Limits](wip-limits.md) — Little's Law is the mathematics behind why limiting WIP shortens cycle time.
→ [135·Queueing & Wait Time](queueing.md) — Little's Law is the steady-state result of queueing dynamics; queueing theory explains the variability behind the averages.
→ [18·Bottlenecks](../Systems/bottlenecks.md) — throughput in L = λW is set by the bottleneck; Little's Law explains why optimizing non-bottlenecks does not move cycle time.
→ [133·Flow Efficiency](flow-efficiency.md) — cycle time decomposes into work time plus wait time; flow efficiency exposes the ratio.

---

## References

The law was proved by **John D. C. Little** in *"A Proof for the Queuing Formula: L = λW"* (Operations Research, 1961). Donald G. Reinertsen reframed it for product development in *The Principles of Product Development Flow* (2009). Daniel S. Vacanti operationalized it for knowledge work in *Actionable Agile Metrics for Predictability* (2015).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
