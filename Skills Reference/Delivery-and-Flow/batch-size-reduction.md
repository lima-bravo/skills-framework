# Batch Size Reduction
*Smaller batches reduce wait, variability, and risk*

**Category:** [Delivery & Flow](../index.html#delivery-flow) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

Batch size is the amount of work packaged together before it moves to the next stage. Reducing batch size shortens lead time, lowers risk, reduces queueing variability, and accelerates feedback — usually with no change in the total amount of work done. The lever was central to the Toyota Production System and was extended to product development by Donald Reinertsen, whose *Principles of Product Development Flow* (2009) treats batch size as the most underused lever in knowledge work. Continuous delivery and trunk-based development are batch-size reduction applied to software changes.

---

## Mental Model

Imagine moving a stack of bricks across a courtyard. Carrying the whole stack at once seems efficient — one trip. In practice: setup time dominates (you have to find a wheelbarrow), risk concentrates (drop one, you drop all), and feedback is late (you discover only at the end that the wall site moved). Carrying one or two at a time wastes none of the actual work and removes the failure modes. The same logic applies to releases, contract reviews, financial close cycles, marketing campaigns, and quarterly planning. Most large batches exist because someone optimized for setup cost without pricing the holding cost.

---

## Practitioner Heuristics

- **Identify the economic batch size.** Reinertsen's U-curve: total cost = transaction cost (per batch) + holding cost (per item × wait time). Most organizations have transaction costs that are arbitrary and reducible; lowering them lowers the optimal batch size.
- **Halve, then halve again.** Cutting a batch from quarterly to monthly often reveals the next reduction — monthly to weekly — that no one would have proposed cold.
- **Reduce transaction cost first.** Cheap deployments enable small batches; expensive deployments force large ones. Invest in transaction-cost reduction (automation, templates) before forcing batch shrinkage.
- **Watch the second-order effects.** Smaller batches expose hidden coordination, governance, and approval costs. These usually need to shrink alongside.
- **Measure batch size explicitly.** Story points per release, PRs per merge, agenda items per steering committee, candidates per offer round — make the number visible and trend it.

---

## Common Failure Modes

- **Forcing small batches without lowering transaction cost.** Teams swap a quarterly release for a weekly one and burn out on the same overhead applied 13× as often.
- **Treating "batch" as only the release.** Batches exist at every handoff: requirements bundles, design reviews, approval gates. The longest batch in the chain dominates lead time.
- **Confusing batch size with team size.** They are independent; a team of two can run quarterly batches, a team of 200 can ship daily.

---

## Worked Example

A bank's compliance function reviews vendor changes in monthly cohorts of 40–80 items. Backlog ages 3–8 weeks; defects discovered in review trigger expensive rework. A pilot moves to a rolling weekly cohort capped at 10 items. Transaction-cost reductions (a standard intake template, a shared review checklist) drop per-batch overhead. Within a quarter, lead time is down 70%, rework is down 40%, and the team's perceived workload is lower despite the same total volume. The unintended bonus: feedback to vendors is now timely enough that vendor-side defect rates fall.

---

## Connections

→ [**Queueing & Wait Time**](queueing.md) — small batches reduce variability and therefore wait time at any given utilization.
→ [**Cost of Delay**](cost-of-delay.md) — batch reduction trades smaller transaction-cost-per-batch for lower holding cost; cost of delay sets the economic frame.
→ [**Flow Efficiency**](flow-efficiency.md) — large batches inflate the wait component of flow time.
→ [**Build-Measure-Learn**](../Startups/build-measure-learn.md) — small batches are how learning cycles get short.
→ [**MVP**](../Startups/mvp.md) — an MVP is a deliberate batch-size reduction on a product bet.

---

## References

- *The Principles of Product Development Flow* — Donald G. Reinertsen (2009).
- *Continuous Delivery* — Jez Humble & David Farley (2010).
- *The Toyota Way* — Jeffrey K. Liker (2004).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../index.html)*
