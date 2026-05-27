---
name: "product-launch"
description: "Product or feature launch chain: assumptions, readiness, metrics, and failure modes. Use before launches or major releases."
metadata:
  framework-source: "Pre-built-Chains/product-launch.md"
  plugin: "disciplined-thinking"
  version: "1.0.0"
  invocation: "manual"
---

> **Invocation:** Run only when the user explicitly requests this chain (e.g. `/product-launch`) or a matching high-stakes decision. Do not auto-invoke for general questions.

# Product Launch

Run this chain in order. Require concrete written answers per step before advancing. Do not skip steps because they are uncomfortable.

## Before you start

- Confirm the decision or improvement scope in one sentence.
- List what evidence is already available vs. what must be gathered.
- State the stakeholder and time horizon.

## Workflow

### Step 1 — Product-Market Fit: Is PMF established, and for whom?

Before launching, be explicit about the customer segment for whom you have evidence of strong PMF. Retention curves that flatten, cohort NPS above threshold, and organic word-of-mouth are the evidence. Don't launch before PMF is established in a specific, named segment — you will be paying to acquire customers who will churn.

### Step 2 — Assumption Mapping: What must be true for the launch to succeed?

Map the assumptions underlying the launch plan: demand assumption (enough addressable customers exist), channel assumption (the acquisition channel will deliver at modelled CAC), timing assumption (market conditions support the launch), operational assumption (we can deliver at the volumes the launch generates). Rank them and validate the top three before committing.

### Step 3 — Inversion: How would this launch fail?

Pre-mortem: it is 6 months after launch and the product has stalled. What are the most likely causes? Failing to get the initial customer base to activate? Word of mouth not spreading? A competitor response that undercut our positioning? Each failure mode should have a mitigation built into the launch plan.

### Step 4 — Bottlenecks: Where will we hit the constraint?

As launch volumes scale, what breaks first? Customer support capacity, infrastructure, onboarding bandwidth, sales motion for enterprise deals? Identify the bottleneck before it hits.

### Step 5 — Activation Energy: What needs to happen for the first user to get value in the first session?

The moment of first value — when the new user experiences the core value proposition for the first time — is the most critical activation energy problem in any launch. Design the entire first-run experience around minimizing the time and friction to that moment.

### Step 6 — Viral Growth: Is there a viral loop, and is it designed?

If the product has viral potential, is the viral mechanism built into the launch plan? Who shares, why, how, and what do they share? What does the recipient experience that would make them activate?

### Step 7 — Framing and Audience: Is the launch communication designed for the right audience?

Who is the specific person the launch communication is designed for? Is the framing of the value proposition in their language, addressing their specific jobs-to-be-done? Is the launch channel matched to where they are?

### Step 8 — Innovation Accounting: What will we measure in the first 30/60/90 days?

Define the innovation accounting metrics before launch. What does success look like? What would indicate the need to pivot vs. continue? Set the thresholds in advance.

## Final deliverable

Synthesize all steps into:

1. **Executive summary** (answer / recommendation first)
2. **Key findings** (one per major step)
3. **Risks and failure modes** still open
4. **Next actions** with owners and dates

Full source card: [references/source.md](references/source.md)
