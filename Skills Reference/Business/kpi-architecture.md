# KPI Architecture
*The question is never "what can we measure?" It's "what decision does this number need to change?"*

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

KPI architecture is the discipline of designing a measurement *system* — as opposed to accumulating a measurement *list* — by starting from the decisions leaders actually need to make, building a driver tree that connects those decisions to the activities that influence them, and then selecting a small set of outcome, driver, and leading-indicator metrics, each with a named owner, a threshold that triggers action, and a review cadence that closes the loop. It is the method that sits behind the question "what should we measure?" — distinct from understanding any individual metric (which [Goodhart's Law](../Economics/goodharts-law.md), [OKRs](../Delivery-and-Flow/okrs.md), and [DORA Metrics](../Delivery-and-Flow/dora-metrics.md) each address) and distinct from designing the *system* those metrics live inside.

---

## Mental Model

Most organizations build their KPI sets by accretion: someone asks for a number, it gets added to the dashboard, and it stays there long after the question that prompted it has been forgotten. Three years later the dashboard has eighty metrics, no one remembers why half of them are tracked, several of them quietly contradict each other, and the leadership review spends forty minutes on the numbers and five minutes on what to *do* about them.

KPI architecture inverts the accretion process. It starts not with "what can we measure?" — which is nearly unlimited — but with "what decisions does this team or this leader actually have to make, on what cadence, and what would they need to know to make those decisions well?" From there it builds a driver tree: the outcome the organization ultimately cares about, the handful of drivers that move that outcome, and the leading indicators that show whether those drivers are moving *before* the outcome metric reflects it (by which point it is often too late to intervene). A well-architected system is small enough that someone can hold the whole thing in their head, every metric on it is connected to a decision someone will actually make, and removing any one of them would leave a visible gap in the leader's ability to act.

The discipline is, in a sense, the application of [Hypothesis-Driven Consulting](../Consulting-Craft/hypothesis-driven.md) to measurement itself: state what you believe drives the outcome, instrument *that* belief, and be willing to discover — and act on — the fact that it was wrong.

---

## Practitioner Heuristics

- **Start from the decision, work backward to the metric — never forward from the data.** "What will this number cause someone to do differently?" is the filter every candidate KPI must pass. A metric that is fascinating but doesn't change anyone's next action is a museum exhibit, not a KPI.
- **Build the driver tree before picking metrics.** Decompose the outcome (revenue, retention, delivery throughput) into the two or three drivers that actually move it, and those drivers into the leading indicators that move *them*. Skipping this step produces a metrics list that looks comprehensive and explains nothing about *why* the numbers move.
- **Separate outcome, driver, and activity metrics — and weight them accordingly.** Outcome metrics (retention, revenue, NPS) tell you whether you won; driver metrics (activation rate, time-to-value) tell you why; activity metrics (calls made, tickets closed, story points shipped) tell you how busy people were. A system overloaded with activity metrics measures effort and calls it progress — see [Outcome vs Output](../Delivery-and-Flow/outcome-vs-output.md).
- **Prefer leading indicators to lagging ones wherever a credible one exists.** A lagging indicator tells you that something already happened; a leading indicator gives you time to do something about it before it does. Time-to-first-value predicts churn weeks before the churn shows up in the retention number — and by the time retention moves, the customers who were going to leave already have.
- **Assign an owner and a threshold to every metric — or remove it.** "We track this" is not the same as "someone is accountable for it moving, and knows at what point they need to escalate." A metric with no owner and no threshold is decoration; a metric with both is an instrument someone will actually use.
- **Actively prune. The discipline is in what you remove, not what you add.** Every metric on the system should survive the question "if this disappeared tomorrow, would a decision get worse?" If the honest answer is no, it is a vanity metric — comfortable to report, costly to maintain, and silently crowding out the attention that the metrics which *do* matter need.
- **Design the cadence with the metric.** An outcome metric reviewed monthly and a leading indicator reviewed monthly are mismatched — the leading indicator exists precisely so someone can intervene *between* the slower review cycles. Match the review rhythm to the speed at which the metric can plausibly change and the speed at which someone can act on it.

---

## Common Failure Modes

- **Metric accretion.** The dashboard grows by addition and never by subtraction; eighteen months later it has eighty metrics, no one remembers the original question behind half of them, and the review meeting has degenerated into a status recitation.
- **Activity dressed as outcome.** "We closed 340 support tickets this month" sounds like progress and may represent nothing of the kind — if the same 340 customers are filing tickets again next month, the activity metric is rising while the outcome it was meant to serve (customer success) is falling.
- **The orphaned metric.** A number that everyone reports and no one owns — when it moves in the wrong direction, the response is a shrug, because no one was ever assigned the job of making it move in the right one.
- **Goodhart drift.** A metric that was a good proxy for the outcome when it was chosen becomes the target itself, and people optimize the proxy at the expense of the thing it was meant to represent — see [Goodhart's Law](../Economics/goodharts-law.md). KPI architecture is in part the discipline of *anticipating* this drift and designing metrics, ownership, and review cadences that surface it early rather than after the damage is structural.
- **All-lagging dashboards.** A system built entirely from outcome metrics tells leadership, with great precision, what already happened — and nothing about what to do differently this week. By the time the lagging number moves, the window for cheap intervention has usually closed.

---

## Worked Example

A SaaS company's executive dashboard has grown to sixty-plus metrics across product, sales, marketing, and support — reviewed monthly in a two-hour meeting that mostly consists of people explaining why their number moved. The CEO observes that the company has been "data-driven" for two years and still can't answer, with confidence, why growth has slowed.

The redesign starts from the decision: "each month, what should the leadership team decide to do differently, and what would they need to know to decide it well?" Working backward from the single outcome that matters most this year — net revenue retention — the team builds a driver tree: retention is driven by activation (do new customers reach value quickly?), engagement depth (do they use the features that create switching costs?), and service quality (do problems get resolved before they compound into churn). Each driver gets one or two leading indicators: time-to-first-value for activation, weekly-active-feature-count for engagement, first-response-time and repeat-contact-rate for service.

The new system has nine metrics, not sixty. Each has a named owner, a threshold (e.g., "if time-to-first-value exceeds 14 days for more than 15% of new cohorts, the head of customer success escalates within the week — not at the next monthly review"), and a cadence matched to how fast it can move (leading indicators reviewed weekly by functional owners, the outcome metric reviewed monthly by the executive team). Fifty-one metrics are retired — not because they were wrong, but because none of them was connected to a decision anyone in the room was actually making. The monthly review shrinks from two hours of status recitation to forty minutes of "here's what moved, here's why, here's what we're doing about it."

---

## Connections

→ [**Goodhart's Law**](../Economics/goodharts-law.md) — the failure mode this entire architecture exists partly to defend against: a measure that becomes a target stops being a good measure.
→ [**OKRs**](../Delivery-and-Flow/okrs.md) — the goal-setting structure that a KPI system should serve; OKRs without a measurement architecture underneath them become aspirational statements no one can track.
→ [**Outcome vs Output**](../Delivery-and-Flow/outcome-vs-output.md) — the foundational distinction this card operationalizes: an outcome-metric-poor, activity-metric-rich system measures motion and calls it progress.
→ [**DORA Metrics**](../Delivery-and-Flow/dora-metrics.md) — a worked example of a small, decision-linked, leading-and-lagging metric set designed from first principles for a specific domain (software delivery).
→ [**Bottlenecks**](../Systems/bottlenecks.md) — the driver-tree logic underneath KPI architecture is the same logic that finds the binding constraint in any system: trace the chain, instrument the links that matter, ignore the ones that don't.
→ [**Hypothesis-Driven Consulting**](../Consulting-Craft/hypothesis-driven.md) — choosing a leading indicator is a falsifiable bet about what drives the outcome; the discipline of stating that bet explicitly is what keeps the metric honest.
→ [**Calibration**](../General-Thinking/calibration.md) — setting a threshold that triggers real action requires an honest sense of what range of variation is normal noise versus genuine signal.

---

## References

- *The Balanced Scorecard* — Robert S. Kaplan & David P. Norton (1996) — the originating discipline of connecting strategic objectives to a small, multi-perspective measurement system.
- *Measure What Matters* — John Doerr (2018) — the OKR framing of outcome-linked goal-setting that a well-built KPI architecture supports.
- *Accelerate: The Science of Lean Software and DevOps* — Nicole Forsgren, Jez Humble & Gene Kim (2018) — a worked case study in deriving a small, validated, decision-linked metric set (DORA) from a large field of candidates.
- *The Tyranny of Metrics* — Jerry Z. Muller (2018) — the cautionary counterweight: what happens when measurement systems are built by accretion rather than by design, and start measuring themselves instead of the thing they were meant to track.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
