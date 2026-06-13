---
id: 25
name: Churn
category: Systems
cardType: standard
tagline: The rate at which a system loses what it gains
connections:
  - id: 75
    rationale: churn is the subtrahend in the compounding equation; reducing churn dramatically changes the long-run trajectory.
  - id: 17
    rationale: high churn can trigger a reinforcing negative loop (fewer users → less word of mouth → higher CAC → less investment in product → more churn).
  - id: 18
    rationale: in a growth system, churn is often the binding constraint that limits net growth despite strong acquisition.
  - id: 46
    rationale: "churn is the entropic tendency of a customer base: the natural drift toward departure absent continuous active retention energy."
references:
  - title: "SaaS Metrics 2.0: A Guide to Measuring and Improving What Matters"
    authorYear: David Skok, for Entrepreneurs blog (2012)
    supports: the canonical treatment of churn economics in subscription businesses.
  - title: "Crossing the Chasm: Marketing and Selling Disruptive Products to Mainstream Customers"
    authorYear: Geoffrey A. Moore (1991)
    supports: the customer lifecycle framework that contextualises why different customer segments churn at different rates.
  - title: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
    authorYear: Eric Ries (2011)
    supports: the pivot and persevere decision is often driven by churn signals revealing product-market fit problems.
---

# Churn

**Category:** [Systems](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Churn is the rate at which a system loses existing members, customers, or resources — and thus the rate at which gains must exceed losses for net growth to occur. In SaaS businesses, customer churn is the percentage of subscribers who cancel in a given period. But the concept generalizes: employee churn, social network attrition, audience churn, partner churn. Any system where you are simultaneously gaining and losing members is governed by churn dynamics.

The brutal mathematics: at 5% monthly churn, the average customer stays 20 months. At 3% monthly churn, the average customer stays 33 months. The difference in customer lifetime value between 5% and 3% churn, compounded across a customer base, can exceed the total contribution of a new customer acquisition program.

---

## Mental Model

Think of a leaking bucket. You are pouring water in (acquisition) while it leaks out the bottom (churn). Gross growth tells you how much water you're pouring in. Net growth tells you whether the bucket is filling or emptying. And the height of the waterline — the existing stock — determines how much you can afford to leak and still grow. The practitioner's insight: **fixing the leak is often more valuable than pouring faster.** At high churn, acquisition is just replacing what you're losing; reducing churn compounds forward.

---

## Practitioner Heuristics

- **Calculate LTV properly, using actual observed cohort retention, not steady-state assumptions.** Many LTV calculations underestimate churn by using optimistic retention curves.
- **Segment churn by cohort and customer type.** Aggregate churn can hide the fact that one segment is retaining well (your target customer) and another is churning badly (customers who were the wrong fit). Don't manage the average; manage the segments.
- **Identify the churn leading indicators.** Churn is a lagging metric. The behaviors that predict churn (reduced usage, support ticket patterns, engagement drop, competitor evaluation) are detectable weeks or months in advance. Build early warning systems.
- **Distinguish preventable churn from inevitable churn.** Some customers were never going to stay (wrong fit, one-off need, budget gone). Focusing retention investment on genuinely saveable churners produces better ROI than applying it universally.
- **Calculate the churn rate at which growth becomes impossible at current acquisition pace.** This gives you a clear, quantified ceiling on how bad churn can be before growth reverses.

---

## Common Failure Modes

- **Acquisition obsession.** Prioritizing new customer acquisition while ignoring churn, not noticing that the net effect is near zero or negative.
- **Averaging across heterogeneous cohorts.** Showing good aggregate retention while a critical segment is churning catastrophically.
- **Confusing gross revenue retention with net revenue retention.** GRR measures churn; NRR measures churn minus expansion revenue. Companies with high NRR can have significant customer churn but grow anyway through expansion — which is a very different strategic situation than having low churn.

---

## Worked Example

A B2B SaaS company reports 92% annual gross retention — excellent by industry standards. But a cohort analysis reveals that enterprise customers (ACV >£50k) have 97% retention, while SMB customers (ACV <£5k) have 78% retention. The SMB segment is unprofitable on a fully-loaded basis including churn-driven CAC inefficiency. The aggregate number looked good, disguizing a clear strategic signal: either fix SMB retention specifically or exit that segment.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
