---
id: 216
name: Unit Economics
category: Economics
cardType: standard
tagline: The business model works in the boardroom. The question is whether it works per customer.
connections:
  - id: 217
    rationale: unit economics measures value capture at the customer level; the split between created value and captured revenue is the structural constraint that sets the ceiling on LTV
  - id: 219
    rationale: pricing decisions directly set the revenue component of contribution margin and LTV; unit economics provides the feedback loop that determines whether a pricing model is working
  - id: 218
    rationale: unit economics is a required input to any credible business case for a growth investment; a case without unit economic analysis is a projection without a foundation
  - id: 75
    rationale: "strong unit economics compound: retained customers generate expansion revenue, referrals reduce CAC, and the business improves its economics over time rather than degrading them"
  - id: 120
    rationale: CAC and LTV are the two metrics most vulnerable to gaming; organisations that target them directly often distort the customer acquisition mix or inflate LTV projections
  - id: 158
    rationale: portfolio kill decisions should be grounded in unit economics; an initiative with deteriorating unit economics is a kill candidate regardless of revenue trajectory
  - id: 239
    rationale: Long Tail strategy only works when unit economics at the tail level are sound; high marginal costs per tail unit destroy the model regardless of aggregate tail demand.
  - id: 247
    rationale: when the binding constraint sits in monetization or expansion, unit economics is the lens that makes the leak visible in dollar terms rather than funnel percentages.
  - id: 248
    rationale: unit economics explains at the per-customer level why a profit pool concentrates where the market-level map shows it does.
  - id: 249
    rationale: "the quantitative backbone of segment attractiveness scoring: lifetime value, cost to serve, and expansion potential are what separate a segment worth chasing from one worth deprioritizing."
references:
  - title: SaaS Metrics 2.0
    authorYear: David Skok (2010)
    supports: "the definitive practitioner guide to SaaS unit economics: CAC, LTV, payback period, and cohort analysis."
  - title: Product/Market Fit
    authorYear: Marc Andreessen (2011)
    supports: introduces the LTV:CAC framework in the venture context.
  - title: The Retail Revival
    authorYear: Doug Stephens (2013)
    supports: unit economics applied to physical retail.
  - title: "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers"
    authorYear: Ben Horowitz (2014)
    supports: chapter on business model economics under pressure.
---

# Unit Economics

**Category:** [Economics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Unit economics is the analysis of revenue and cost at the level of a single unit — typically one customer, one transaction, or one product — to determine whether the business model is fundamentally viable before scale. The core metrics: Customer Acquisition Cost (CAC, what it costs to win one customer), Customer Lifetime Value (LTV, the net revenue a customer generates over their relationship with the business), payback period (how long before CAC is recovered from gross margin), and contribution margin (revenue minus variable cost per unit). The relationship between these metrics — particularly the LTV:CAC ratio and the payback period — determines whether growth creates value or destroys it.

---

## Mental Model

A business is a machine that converts inputs (time, capital, people) into customer relationships that generate more value than they consume. Unit economics is the test of whether the machine is working at the individual customer level before asking how fast to run it. A business that loses money on every customer cannot profit its way to scale — it will simply lose money faster. Conversely, a business with strong unit economics can tolerate short-term losses while acquiring customers, because each customer relationship is genuinely valuable once established.

The key insight: most business model failures are visible in unit economics long before they appear in aggregate financials. The aggregate hides the unit reality because growth, timing differences, and accounting choices can make an economically broken model look healthy for years. Unit economics strips those away.

Think of it as the signal underneath the noise. Revenue is growing — but is each new customer adding economic value or diluting it? CAC is rising — is LTV rising proportionally, or is the company acquiring progressively worse customers? Payback period is extending — does the business have the capital to survive longer customer relationships before break-even?

---

## Practitioner Heuristics

- **Calculate LTV:CAC ratio and treat anything below 3:1 as a warning.** A ratio below 3:1 means the business is spending more than a third of a customer's lifetime value just to acquire them — leaving insufficient margin for operations, product, and return. Below 1:1 means each customer acquired destroys value. The ratio is a health indicator, not a ceiling.
- **Track payback period against your capital position.** A 24-month payback period is viable for a well-capitalised business with low churn; it is fatal for a startup with 12 months of runway. The payback period must be evaluated against the organisation's ability to finance the gap.
- **Segment unit economics before aggregating.** Blended unit economics hide the reality that some customer segments are highly profitable and others are value-destroyers. A blended LTV:CAC of 3:1 may conceal a 6:1 for one segment and a 1:1 for another. Improve the mix before improving the average.
- **Use contribution margin, not gross margin, for unit-level analysis.** Gross margin often excludes costs that are genuinely variable at the unit level (customer success, fulfilment, variable support). Contribution margin — revenue minus all costs that vary with the unit — gives an honest picture of what each customer actually contributes.
- **Distinguish CAC by acquisition channel.** Blended CAC hides that organic and paid acquisition have radically different economics. A business where organic channels have 0.5× the CAC of paid channels is a different business from one where all channels are equivalent — and the strategic implications diverge sharply.

---

## Common Failure Modes

**Confusing revenue growth with unit economic health.** Revenue can grow while unit economics deteriorate — if the business is acquiring more customers at worse economics. The classic symptom: growth accelerates while the business becomes harder to make profitable. The fix is to track unit economics by cohort, not in aggregate.

**Using accounting gross margin instead of economic contribution margin.** Fully loaded CAC is consistently underestimated because teams exclude costs that are obviously variable (onboarding, account management time, fulfilment variation). When these are added back, payback periods often double.

**Treating LTV as a fixed number rather than a model.** LTV is a projection, not a fact. It depends on assumptions about churn rate, expansion revenue, and discount rate, all of which are uncertain. A business that treats its LTV estimate as reliable is building strategy on a projection it hasn't stress-tested. The right approach: model LTV under optimistic, base, and pessimistic churn assumptions and evaluate the range.

**Optimising unit economics at the expense of market position.** A business can improve its LTV:CAC ratio by serving fewer, better customers — but if those customers represent a small addressable market, the business has optimised itself into a corner. Unit economics must be evaluated alongside addressable market size.

---

## Worked Example

A SaaS business is acquiring customers at a blended CAC of £8,000. Average contract value is £12,000 per year, gross margin is 70% (£8,400 contribution per year). Average customer lifetime is 3 years, giving an LTV of £25,200. LTV:CAC ratio: 3.15:1. Payback period: £8,000 ÷ £8,400 = 11.4 months. These look healthy.

Segment analysis reveals the reality: enterprise customers (30% of volume) have CAC of £18,000, LTV of £95,000 (7-year average lifetime, high expansion revenue), LTV:CAC of 5.3:1. SMB customers (70% of volume) have CAC of £4,000, LTV of £8,400 (1.5-year average lifetime, high churn), LTV:CAC of 2.1:1.

The SMB segment is marginally viable at best and is pulling the blended ratio down. The enterprise segment is generating almost all the economic value. Strategic implication: shift acquisition investment toward enterprise, exit the SMB segment, or restructure the SMB model to reduce CAC (product-led growth) or reduce churn (better onboarding and success). Continuing to grow blended will grow both the profitable and the loss-making segments equally.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
