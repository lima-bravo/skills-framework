---
name: "kpi-architecture"
description: "Designs a lean, decision-linked measurement system by working backward from the decisions leaders must make to a driver tree of outcome, driver, and leading-indicator metrics — each with an owner, threshold, and review cadence. Use when a dashboard has grown by accretion, when metrics no longer drive action, or when designing measurement for a new initiative."
metadata:
  plugin: "business-strategy"
  version: "1.0.0"
  sources: "Business/kpi-architecture.md"
---

# Kpi Architecture

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. KPI Architecture

**Hold in mind:**
Most organizations build their KPI sets by accretion: someone asks for a number, it gets added to the dashboard, and it stays there long after the question that prompted it has been forgotten. Three years later the dashboard has eighty metrics, no one remembers why half of them are tracked, several of them quietly contradict each other, and the leadership review spends forty minutes on the numbers and five minutes on what to *do* about them.

KPI architecture inverts the accretion process. It starts not with "what can we measure?" — which is nearly unlimited — but with "what decisions does this team or this leader actually have to make, on what cadence, and what would they need to know to make those decisions well?" From there it builds a driver tree: the outcome the organization ultimately cares about, the handful of drivers that move that outcome, and the leading indicators that show whether those drivers are moving *before* the outcome metric reflects it (by which point it is often too late to intervene). A well-architected system is small enough that someone can hold the whole thing in their head, every metric on it is connected to a decision someone will actually make, and removing any one of them would leave a visible gap in the leader's ability to act.

The discipline is, in a sense, the application of [Hypothesis-Driven Consulting](../Consulting-Craft/hypothesis-driven.md) to measurement itself: state what you believe drives the outcome, instrument *that* belief, and be willing to discover — and act on — the fact that it was wrong.

**Do:**
- **Start from the decision, work backward to the metric — never forward from the data.** "What will this number cause someone to do differently?" is the filter every candidate KPI must pass. A metric that is fascinating but doesn't change anyone's next action is a museum exhibit, not a KPI.
- **Build the driver tree before picking metrics.** Decompose the outcome (revenue, retention, delivery throughput) into the two or three drivers that actually move it, and those drivers into the leading indicators that move *them*. Skipping this step produces a metrics list that looks comprehensive and explains nothing about *why* the numbers move.
- **Separate outcome, driver, and activity metrics — and weight them accordingly.** Outcome metrics (retention, revenue, NPS) tell you whether you won; driver metrics (activation rate, time-to-value) tell you why; activity metrics (calls made, tickets closed, story points shipped) tell you how busy people were. A system overloaded with activity metrics measures effort and calls it progress — see [Outcome vs Output](../Delivery-and-Flow/outcome-vs-output.md).
- **Prefer leading indicators to lagging ones wherever a credible one exists.** A lagging indicator tells you that something already happened; a leading indicator gives you time to do something about it before it does. Time-to-first-value predicts churn weeks before the churn shows up in the retention number — and by the time retention moves, the customers who were going to leave already have.
- **Assign an owner and a threshold to every metric — or remove it.** "We track this" is not the same as "someone is accountable for it moving, and knows at what point they need to escalate." A metric with no owner and no threshold is decoration; a metric with both is an instrument someone will actually use.
- **Actively prune. The discipline is in what you remove, not what you add.** Every metric on the system should survive the question "if this disappeared tomorrow, would a decision get worse?" If the honest answer is no, it is a vanity metric — comfortable to report, costly to maintain, and silently crowding out the attention that the metrics which *do* matter need.
- **Design the cadence with the metric.** An outcome metric reviewed monthly and a leading indicator reviewed monthly are mismatched — the leading indicator exists precisely so someone can intervene *between* the slower review cycles. Match the review rhythm to the speed at which the metric can plausibly change and the speed at which someone can act on it.

**Avoid:**
- **Metric accretion.** The dashboard grows by addition and never by subtraction; eighteen months later it has eighty metrics, no one remembers the original question behind half of them, and the review meeting has degenerated into a status recitation.
- **Activity dressed as outcome.** "We closed 340 support tickets this month" sounds like progress and may represent nothing of the kind — if the same 340 customers are filing tickets again next month, the activity metric is rising while the outcome it was meant to serve (customer success) is falling.
- **The orphaned metric.** A number that everyone reports and no one owns — when it moves in the wrong direction, the response is a shrug, because no one was ever assigned the job of making it move in the right one.
- **Goodhart drift.** A metric that was a good proxy for the outcome when it was chosen becomes the target itself, and people optimize the proxy at the expense of the thing it was meant to represent — see [Goodhart's Law](../Economics/goodharts-law.md). KPI architecture is in part the discipline of *anticipating* this drift and designing metrics, ownership, and review cadences that surface it early rather than after the damage is structural.
- **All-lagging dashboards.** A system built entirely from outcome metrics tells leadership, with great precision, what already happened — and nothing about what to do differently this week. By the time the lagging number moves, the window for cheap intervention has usually closed.

## Deliverable format

Produce a markdown document with these sections:

### Decisions this system must serve (who decides what, on what cadence)

### Driver tree (outcome → the 2–3 drivers that move it → leading indicators)

### Metric set: outcome / driver / activity — separated and weighted accordingly

### Owner and action threshold per metric (or remove it)

### Goodhart risk per metric (how it could be gamed, and the guardrail)

### Review cadence and what triggers escalation

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

- [kpi-architecture](references/kpi-architecture.md)

