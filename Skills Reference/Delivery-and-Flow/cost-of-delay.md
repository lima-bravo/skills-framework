---
id: 137
name: Cost of Delay
category: Delivery & Flow
cardType: standard
tagline: The economic value of completing something one period sooner
connections:
  - id: 277
    rationale: the direct cost-of-waiting half of the Value of Information calculation — an information source that's perfectly accurate but arrives too late has a lower real value than its accuracy alone suggests.
  - id: 159
    rationale: Weighted Shortest Job First operationalizes CoD into a prioritization rule.
  - id: 30
    rationale: CoD is the time dimension of trade-off reasoning.
  - id: 153
    rationale: items whose CoD has collapsed are candidates for stopping.
  - id: 158
    rationale: CoD is the input that lets portfolio funding follow economic value.
  - id: 141
    rationale: pairs with CoD to estimate the dollar value of "ship this six weeks earlier."
  - id: 136
    rationale: batch reduction lowers holding cost; cost of delay is the economic frame that quantifies what waiting for a larger batch actually costs.
references:
  - title: The Principles of Product Development Flow
    authorYear: Donald G. Reinertsen (2009)
    supports: the full economic model of cost of delay; the source for CD3 and WSJF calculations.
  - title: SAFe
    authorYear: Dean Leffingwell & Scaled Agile (2011–ongoing)
    supports: the WSJF formula that operationalises cost of delay as a sequencing priority in large portfolios.
---

# Cost of Delay

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Cost of Delay (CoD) is the economic value lost per unit of time that a piece of work is not completed — usually expressed in currency per week. It converts diffuse arguments about importance and urgency into a single comparable number. Donald Reinertsen popularized the metric in product development, framing it as the missing economic input that turns prioritization from politics into arithmetic. CoD is not "how valuable is this?" — it is "what does another week of waiting cost?" That distinction is what makes it usable for ranking work under scarcity.

---

## Mental Model

Imagine two initiatives, A and B, each worth $1M when shipped. A has a hard regulatory deadline in 12 weeks (after which value drops to zero). B will pay back the same $1M whether shipped this quarter or next. A's cost of delay is enormous; B's is near zero. The naïve value-based ranking treats them equally. CoD makes the time-sensitivity explicit and lets you sequence A first, even if both look similar on a business-case slide.

---

## Practitioner Heuristics

- **Estimate three components.** CoD typically combines (1) user/business value, (2) time criticality (deadline, market window), and (3) risk reduction or opportunity enablement. Order-of-magnitude estimates are enough.
- **Bucket, don't precision-engineer.** Three buckets (high/medium/low) for each component, multiplied or summed, beats a false-precision financial model. The goal is comparability, not exactness.
- **Pair with size to get WSJF.** Cost of Delay divided by job size gives Weighted Shortest Job First — the practical prioritization rule. CoD alone tells you which is most valuable to ship soon; ÷ size tells you which to ship next.
- **Pressure-test "everything is high."** When every initiative claims maximum time criticality, force a forced-ranking exercise; CoD only works if it differentiates.
- **Use it in steering meetings, not in spreadsheets.** A one-page CoD comparison turns a 45-minute prioritization argument into a 5-minute decision.

---

## Common Failure Modes

- **Treating value as CoD.** A high-value item with no time sensitivity has a low cost of delay. Failing to separate the two is the most common error.
- **Over-precision.** Three-decimal-place CoD numbers signal false confidence. The arithmetic only needs to differentiate buckets.
- **Computing once and forgetting.** CoD changes with market timing, competitor moves, and dependencies; revisit at least quarterly on active portfolio items.
- **Using CoD to justify everything.** If every initiative is assigned high CoD, the metric has stopped doing work.

---

## Worked Example

A product portfolio committee has 11 funded initiatives competing for capacity that supports 4. Sorted by business case value, results split four-ways evenly. Adding CoD: two initiatives have hard regulatory or contractual deadlines (CoD = $400k/week), three are quietly bleeding customers to competitors (CoD = $150–250k/week), and the rest are evergreen (CoD < $20k/week). With job-size estimates layered in (WSJF), the queue reorders dramatically. The four initiatives selected ship $3.2M more in the year than the original value-based ranking would have produced.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
