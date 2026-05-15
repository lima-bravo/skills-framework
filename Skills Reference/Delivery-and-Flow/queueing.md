# Queueing & Wait Time
*Most delay is waiting, not working*

**Category:** [Delivery & Flow](../index.html#delivery-flow) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

Queueing theory studies the dynamics of waiting lines. Its central result for operations: as utilization approaches 100%, wait time grows non-linearly toward infinity; small amounts of variability at high utilization produce large queues. The relationship is captured by the Kingman approximation, which shows that average wait time is proportional to utilization-over-one-minus-utilization, scaled by variability. The implication for delivery: you cannot run a system at 95% utilization and also have predictable lead times. The Erlang formulas (1909) and Reinertsen's *Principles of Product Development Flow* (2009) bring this from telecoms into knowledge-work practice.

---

## Mental Model

A four-lane highway at 50% load flows freely. At 80%, brake lights ripple. At 95%, one bus slowing slightly causes a 30-minute backup. Nothing changed about the work — drivers are still driving — but the system's response to a tiny perturbation became enormous. Software delivery, support queues, hospital intake, and approval pipelines all behave identically. The most useful diagnostic question is not "how fast does the team work?" but "how much of an item's life is spent waiting?"

---

## Practitioner Heuristics

- **Estimate wait fraction first.** Pick any in-flight item, ask "what percentage of its calendar life so far was active work?" If under 30%, the system is queue-bound, not capacity-bound.
- **Cut variability before adding capacity.** Reducing batch size and standardizing item types lowers variability, which lowers wait time at the same utilization.
- **Target utilization, not 100%.** Plan for 70–85% on knowledge work; reserve the rest for variability absorption.
- **Watch for hidden queues.** "Waiting on review," "waiting on legal," "waiting on data" — each is a queue. Total wait time is the sum across all queues, not just the visible board.
- **Use cost-of-delay to justify slack.** The economic frame turns "we need to leave 20% spare capacity" from sacrilege into rational investment.

---

## Common Failure Modes

- **Confusing throughput with utilization.** A system can be at 99% utilization producing terrible throughput because everyone is in queue-management overhead.
- **Adding capacity to a queue-bound system.** New capacity gets absorbed by even longer admission queues unless WIP is also limited.
- **Ignoring variability.** Two systems at the same utilization can have wildly different wait times because of variability.

---

## Worked Example

An enterprise architecture review board reports 95% reviewer utilization and is praised for efficiency. Lead time on review requests is averaging 11 weeks with high variance. A queueing analysis shows the board needs ~25% slack to absorb arrival variability — at current load, even a one-week sickness triggers a months-long backlog. The remediation is counter-intuitive to leadership: pull reviewers down to 75% utilization. Within a quarter, lead time falls to 2.5 weeks. The "underutilized" reviewers are doing the same volume of reviews; the queue is no longer absorbing variability.

---

## Connections

→ [**Little's Law**](littles-law.md) — Little's Law is the steady-state arithmetic; queueing theory explains the dynamics.
→ [**Flow Efficiency**](flow-efficiency.md) — flow efficiency is the operational metric that surfaces queueing pathology.
→ [**Statistical Variability**](statistical-variability.md) — variability is the multiplier on queueing wait time.
→ [**Batch Size Reduction**](batch-size-reduction.md) — large batches are a primary source of variability.
→ [**Bottlenecks**](../Systems/bottlenecks.md) — queues form upstream of bottlenecks; finding the longest queue locates the constraint.

---

## References

- *The Principles of Product Development Flow* — Donald G. Reinertsen (2009).
- *Factory Physics* — Wallace J. Hopp & Mark L. Spearman (1996).
- A. K. Erlang, *The Theory of Probabilities and Telephone Conversations* (1909).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../index.html)*
