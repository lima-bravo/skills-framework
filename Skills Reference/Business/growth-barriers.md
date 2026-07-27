---
id: 247
name: Growth Barriers
category: Business
cardType: standard
tagline: '"Growth has stalled" is a symptom report. The diagnosis is one binding constraint, named precisely enough to act on.'
connections:
  - id: 250
    rationale: once the binding constraint is diagnosed, KPI Architecture is how you instrument it going forward rather than re-diagnosing it from scratch each quarter.
  - id: 18
    rationale: "the systems-theory foundation of this entire card: in any flow system, only the constraint determines throughput, and effort spent elsewhere is an illusion of progress."
  - id: 246
    rationale: the broader current-state diagnostic this card specializes; run a situation assessment first if it isn't yet clear that growth (rather than, say, margin or morale) is the actual presenting issue.
  - id: 171
    rationale: the discipline that keeps "what changed right before the slowdown" from being mistaken for "what caused the slowdown."
  - id: 216
    rationale: when the binding constraint sits in monetization or expansion, unit economics is the lens that makes the leak visible in dollar terms, not just funnel-percentage terms.
  - id: 144
    rationale: a growth team that is "shipping a lot" while the binding constraint goes unaddressed is optimizing output while the outcome continues to stall.
  - id: 161
    rationale: the binding-constraint diagnosis is a hypothesis, not a verdict; this card supplies the discipline for testing it cheaply before committing to the full-scale fix.
references:
  - title: The Goal
    authorYear: Eliyahu M. Goldratt & Jeff Cox (1984)
    supports: "the theory-of-constraints logic this card applies to growth specifically: only the binding constraint determines system throughput."
  - title: The Lean Startup
    authorYear: Eric Ries (2011)
    supports: the engine-of-growth framing — paid, viral, sticky — that underlies a clean acquisition/retention/expansion decomposition.
  - title: Competing Against Luck
    authorYear: C.M. Christensen, T. Hall, K. Dillon & D.S. Duncan (2016)
    supports: separating the job a customer is hiring a product to do from the symptom that shows up when it fails to do it.
  - title: Lean Analytics
    authorYear: Alistair Croll & Benjamin Yoskovitz (2013)
    supports: driver-tree style decomposition of a growth system into measurable, falsifiable components.
---

# Growth Barriers

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Growth barrier diagnosis is the discipline of treating "why aren't we growing?" as a systems question rather than a list of initiatives. It builds a driver tree across the full growth system — acquisition, activation, conversion, retention, expansion, monetization, and capacity — locates where momentum actually breaks down with evidence, and separates the root cause from the symptoms clustered around it. The output is not a backlog of growth ideas; it is a single binding-constraint diagnosis precise enough that the next move is obvious, and a short evidence plan for confirming it before resources are committed.

---

## Mental Model

When growth stalls, organizations default to a *list* response: more salespeople, a pricing change, a new feature, a marketing push, an org redesign — whatever the most vocal stakeholder believes is the lever. Each idea is plausible in isolation. The trouble is that a growth system is exactly that — a system — and a list of plausible levers pulled simultaneously is indistinguishable, after the fact, from no diagnosis at all. If growth recovers, no one knows which lever mattered; if it doesn't, no one knows which to abandon.

The alternative is to treat growth the way an engineer treats a system that has stopped meeting its throughput target: trace the flow, find where it actually breaks, and fix that — not the part that's easiest to point at. A driver tree decomposes "growth" into its mutually exclusive, collectively exhaustive components (how many people enter the funnel, how many activate, how many convert, how many stay, how much they expand, what they pay, and whether the organization has the capacity to serve more of them). Evidence is then gathered at each node until one of them shows a disproportionate break — the **binding constraint**: the node where, if you fixed nothing else, fixing this one thing would move the topline number the most. [Bottlenecks](../Systems/bottlenecks.md) makes the same point about any flow system: optimizing anything other than the constraint is an illusion of progress.

---

## Practitioner Heuristics

- **Build the driver tree before debating the fix.** Decompose growth into acquisition → activation → conversion → retention → expansion → monetization → capacity. A team that argues about *solutions* before agreeing on *where in this chain the break is* will produce a list, not a diagnosis.
- **Quantify the breaks, don't eyeball them.** "Retention feels weak" is an impression; "net revenue retention dropped from 118% to 96% over six quarters while acquisition held flat" is a finding that locates the constraint and rules out competing explanations in the same sentence.
- **Distinguish root cause from symptom — explicitly, in writing.** Declining sales productivity is often a symptom of a product-market fit problem, not a sales execution problem; a churn spike is often a symptom of an onboarding failure three steps upstream. The question to keep asking at each apparent cause is: *is this the thing that's broken, or the place where an upstream break becomes visible?*
- **Name one or two binding constraints — not five.** A driver tree with five "critical issues" has not located the constraint; it has redescribed the symptom list in tree form. The discipline is to ask, of each candidate: *if this were the only thing we fixed, how much of the gap would close?* — and rank by that, not by visibility or political convenience.
- **Size the gap before sizing the fix.** "Growth is below target" hides whether the gap is 5% (a tuning problem) or 50% (a structural problem requiring a different model entirely). The size of the gap should determine the boldness of the response — a tuning-sized fix applied to a structural-sized gap will look like progress and produce none.
- **Convert the leading hypothesis into a test, not a launch.** The binding-constraint diagnosis is a hypothesis until it survives contact with evidence. Recommend the test that would most cheaply confirm or kill it before recommending the full-scale response — see [Hypothesis-Driven Consulting](../Consulting-Craft/hypothesis-driven.md).

---

## Common Failure Modes

- **The kitchen-sink response.** Pulling acquisition, retention, pricing, and product levers simultaneously because no one wants to be wrong about which one mattered — guaranteeing that, win or lose, no one learns anything transferable.
- **Treating a downstream symptom as the cause.** Fixing the place where the problem becomes *visible* (sales productivity, support tickets, churn) rather than the place where it *originates* (product-market fit, onboarding design, pricing-value mismatch) — solving the symptom repeatedly without ever closing the gap.
- **Mistaking a flat topline for a uniform problem.** Aggregate growth numbers can hide a segment that is thriving and a segment that is collapsing; the binding constraint is frequently invisible at the aggregate level and only legible once the driver tree is cut by segment, channel, or cohort.
- **Anchoring on the most recent change.** "Growth stalled right after we changed pricing" is a tempting causal story, but correlation with timing is not the same as a traced mechanism — see [Causal Analysis](../General-Thinking/causal-analysis.md). The binding constraint may have been building for quarters and only crossed a visible threshold recently.
- **Confusing capacity for demand.** A team that cannot grow because it physically cannot onboard, support, or fulfil more customers will show every symptom of a demand problem (slowing growth, rising CAC, sales frustration) while the actual constraint sits entirely on the supply side.

---

## Worked Example

A subscription analytics company has plateaued at $18M ARR after three years of 40%+ growth. Leadership's working theory: "the market has gotten more competitive and our sales team has lost its edge." The proposed response — a sales reorganization and a new competitive-displacement campaign — is about to be funded.

Before committing, the team builds the driver tree and finds: top-of-funnel lead volume is *up* 22% year over year (acquisition is not the constraint); trial-to-paid conversion has held steady at 24% (activation and conversion are not the constraint); but net revenue retention has fallen from 121% to 89%, and the drop is concentrated almost entirely in customers who onboarded in the last 12 months. Tracing further: the customer success team's headcount has not grown despite a 60% increase in the customer base, and time-to-first-value for new customers has stretched from 9 days to 31.

The binding constraint is not sales execution or competitive pressure — it is onboarding capacity. New customers are churning before they reach the value the product delivers, because the team that gets them there hasn't scaled with demand. The driver-tree evidence redirects the entire response: instead of a sales reorganization (which would pour more customers into the same under-resourced onboarding funnel and likely *accelerate* the churn), the company invests in customer success capacity and a faster time-to-value path — and proposes a 90-day test on the highest-risk cohort before scaling the fix company-wide.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
