# Improve Delivery Flow
*Improve Delivery Flow*

**Category:** [Pre-built Chains](../index.html#pre-built-chains) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Step 1 — Value Stream Mapping: Where is time actually being spent?

Pick one item type with sustained complaints (long lead time, missed dates, customer escalations). Walk the stream from trigger to delivered value, timing every step. Record process time and lead time at each step; mark every wait and every handoff. The output is one current-state map per item type, with a system-level flow efficiency at the bottom. Almost every team is shocked by the number — typical knowledge-work flow efficiency runs 5–15%.

---

## Step 2 — Bottlenecks: Which step gates throughput?

Identify the constraint by finding where queues form upstream and capacity sits idle downstream. The longest wait on the VSM almost always names the bottleneck. Confirm by tracing where work accumulates between cycles. Resist the urge to add capacity elsewhere; improvements at non-bottlenecks do not move system throughput.

---

## Step 3 — WIP Limits: Where do we install pull?

For the bottleneck step and the one immediately upstream, set explicit WIP limits — start at current load minus one, expect pain, hold the line. Pair the limit with an explicit swarm policy: when the limit blocks, the team converges on the blocking item rather than starting new work. Make limits visible on the board, not buried in a wiki.

---

## Step 4 — Little's Law: What does the math predict?

Compute: WIP ÷ throughput = average cycle time. Use the math to set executive expectations on what the WIP reduction will deliver. "If we halve WIP and hold throughput, cycle time roughly halves" is the kind of statement that lets leadership commit to the discipline before the numbers move.

---

## Step 5 — Statistical Variability: What's the shape of the distribution?

Replace "average cycle time" reporting with a histogram and percentile commitments (median, 85th, 95th). Distinguish common-cause variability (system) from special-cause (incidents). If the 95th percentile is more than 3× the median, the tail is where the improvement work lives — investigate those items as a class.

---

## Step 6 — Cost of Delay: What's the economic value of the improvement?

Translate the predicted cycle-time reduction into dollars. Cost-of-delay arithmetic turns "we'll improve flow" into "we expect $X/week of value released by holding work less, faster decisions, earlier customer feedback." This is the slide that gets leadership to defend WIP limits when the first pressure to break them arrives.

---

## Step 7 — Flow Metrics: How will we measure progress?

Instrument the work with flow metrics — flow time, flow velocity, flow efficiency, flow load, flow distribution — at the value-stream level. DORA metrics if the stream is software. Set a baseline, set a target percentile, review weekly. The goal is a dashboard the leadership team trusts enough to defend the discipline against the next interruption.

---

## Step 8 — PDCA: Run the improvement cycle and confirm the prediction.

Write the predicted improvement (e.g., "85th-percentile lead time falls from 41 to 22 days within 8 weeks") before changing anything. Implement the intervention. Compare actual to prediction. The "Check" step is where most flow improvements die — without explicit prediction-vs-actual, the team can declare victory regardless of the outcome.

**Key failure modes to avoid:** improving non-bottlenecks because they are easier; setting WIP limits theoretically rather than empirically; reporting averages rather than percentiles; declaring success on outputs (process changes) rather than outcomes (cycle time, throughput, cost of delay realised).

---

---