---
name: "growth-barriers"
description: "Builds a driver tree across acquisition, activation, conversion, retention, expansion, monetization, and capacity to locate the single binding constraint behind stalled growth, and converts the diagnosis into a test rather than a launch. Use when growth has stalled and the team is reaching for a list of plausible levers instead of a diagnosis."
metadata:
  plugin: "business-strategy"
  version: "1.0.0"
  sources: "Business/growth-barriers.md"
---

# Growth Barriers

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. Growth Barriers

**Hold in mind:**
When growth stalls, organizations default to a *list* response: more salespeople, a pricing change, a new feature, a marketing push, an org redesign — whatever the most vocal stakeholder believes is the lever. Each idea is plausible in isolation. The trouble is that a growth system is exactly that — a system — and a list of plausible levers pulled simultaneously is indistinguishable, after the fact, from no diagnosis at all. If growth recovers, no one knows which lever mattered; if it doesn't, no one knows which to abandon.

The alternative is to treat growth the way an engineer treats a system that has stopped meeting its throughput target: trace the flow, find where it actually breaks, and fix that — not the part that's easiest to point at. A driver tree decomposes "growth" into its mutually exclusive, collectively exhaustive components (how many people enter the funnel, how many activate, how many convert, how many stay, how much they expand, what they pay, and whether the organization has the capacity to serve more of them). Evidence is then gathered at each node until one of them shows a disproportionate break — the **binding constraint**: the node where, if you fixed nothing else, fixing this one thing would move the topline number the most. [Bottlenecks](../Systems/bottlenecks.md) makes the same point about any flow system: optimizing anything other than the constraint is an illusion of progress.

**Do:**
- **Build the driver tree before debating the fix.** Decompose growth into acquisition → activation → conversion → retention → expansion → monetization → capacity. A team that argues about *solutions* before agreeing on *where in this chain the break is* will produce a list, not a diagnosis.
- **Quantify the breaks, don't eyeball them.** "Retention feels weak" is an impression; "net revenue retention dropped from 118% to 96% over six quarters while acquisition held flat" is a finding that locates the constraint and rules out competing explanations in the same sentence.
- **Distinguish root cause from symptom — explicitly, in writing.** Declining sales productivity is often a symptom of a product-market fit problem, not a sales execution problem; a churn spike is often a symptom of an onboarding failure three steps upstream. The question to keep asking at each apparent cause is: *is this the thing that's broken, or the place where an upstream break becomes visible?*
- **Name one or two binding constraints — not five.** A driver tree with five "critical issues" has not located the constraint; it has redescribed the symptom list in tree form. The discipline is to ask, of each candidate: *if this were the only thing we fixed, how much of the gap would close?* — and rank by that, not by visibility or political convenience.
- **Size the gap before sizing the fix.** "Growth is below target" hides whether the gap is 5% (a tuning problem) or 50% (a structural problem requiring a different model entirely). The size of the gap should determine the boldness of the response — a tuning-sized fix applied to a structural-sized gap will look like progress and produce none.
- **Convert the leading hypothesis into a test, not a launch.** The binding-constraint diagnosis is a hypothesis until it survives contact with evidence. Recommend the test that would most cheaply confirm or kill it before recommending the full-scale response — see [Hypothesis-Driven Consulting](../Consulting-Craft/hypothesis-driven.md).

**Avoid:**
- **The kitchen-sink response.** Pulling acquisition, retention, pricing, and product levers simultaneously because no one wants to be wrong about which one mattered — guaranteeing that, win or lose, no one learns anything transferable.
- **Treating a downstream symptom as the cause.** Fixing the place where the problem becomes *visible* (sales productivity, support tickets, churn) rather than the place where it *originates* (product-market fit, onboarding design, pricing-value mismatch) — solving the symptom repeatedly without ever closing the gap.
- **Mistaking a flat topline for a uniform problem.** Aggregate growth numbers can hide a segment that is thriving and a segment that is collapsing; the binding constraint is frequently invisible at the aggregate level and only legible once the driver tree is cut by segment, channel, or cohort.
- **Anchoring on the most recent change.** "Growth stalled right after we changed pricing" is a tempting causal story, but correlation with timing is not the same as a traced mechanism — see [Causal Analysis](../General-Thinking/causal-analysis.md). The binding constraint may have been building for quarters and only crossed a visible threshold recently.
- **Confusing capacity for demand.** A team that cannot grow because it physically cannot onboard, support, or fulfil more customers will show every symptom of a demand problem (slowing growth, rising CAC, sales frustration) while the actual constraint sits entirely on the supply side.

## Deliverable format

Produce a markdown document with these sections:

### Growth gap (size and shape — tuning problem or structural problem?)

### Driver tree (acquisition → activation → conversion → retention → expansion → monetization → capacity)

### Evidence at each node (quantified breaks, not impressions)

### Binding constraint diagnosis (the one or two nodes that would move the topline most)

### Root cause vs. symptom check

### Cheapest test to confirm the leading hypothesis before committing resources

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

- [growth-barriers](references/growth-barriers.md)

