# Cost of Delay
*The economic value of completing something one period sooner*

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

## Connections

→ [**WSJF**](wsjf.md) — Weighted Shortest Job First operationalizes CoD into a prioritization rule.
→ [**Trade-offs**](../Economics/trade-offs.md) — CoD is the time dimension of trade-off reasoning.
→ [**Kill Criteria**](kill-criteria.md) — items whose CoD has collapsed are candidates for stopping.
→ [**Lean Portfolio Management**](lean-portfolio.md) — CoD is the input that lets portfolio funding follow economic value.
→ [**Probabilistic Forecasting**](probabilistic-forecasting.md) — pairs with CoD to estimate the dollar value of "ship this six weeks earlier."

---

## References

- *The Principles of Product Development Flow* — Donald G. Reinertsen (2009).
- *SAFe: Scaled Agile Framework* — Dean Leffingwell (CoD/WSJF practice).
- Joshua Arnold & Özlem Yüce, "Black Swan Farming Using Cost of Delay" (papers, 2013–2015).

---