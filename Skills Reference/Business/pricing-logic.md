---
id: 219
name: Pricing Logic
category: Business
cardType: standard
tagline: Cost-plus pricing tells the customer what you paid. Value-based pricing asks what it's worth to them. They are not the same question.
connections:
  - id: 217
    rationale: "the upstream model: value-based pricing is only possible if you understand what value is created and what determines how much of it can be captured; this card is the practical expression of that logic. *Note: these cards are closely related — read Value Creation and Capture first if pricing logic is new territory.*"
  - id: 216
    rationale: "the downstream check: does the pricing model produce unit economics (LTV:CAC, contribution margin) that make the business viable at scale?"
  - id: 94
    rationale: "built Chain) — the full decision sequence including customer psychology, competitive positioning, and pricing change management; this card provides the conceptual foundation that chain operationalises. *Note: there is deliberate overlap — the chain applies these models in sequence.*"
  - id: 54
    rationale: the psychological mechanism that makes initial price points sticky; the most important implication is that starting prices are very hard to raise later
  - id: 52
    rationale: customers evaluate price increases as losses from their current anchor; the magnitude of the loss response is roughly 2× the magnitude of an equivalent gain response — price increases are psychologically harder than the mathematics suggest
  - id: 120
    rationale: when revenue or margin targets become primary pricing drivers, pricing degrades into a number-hitting exercise rather than a value-capture discipline
references:
  - title: Power Pricing
    authorYear: Robert J. Dolan & Hermann Simon (1996)
    supports: practitioner guide to value-based pricing; introduces the value corridor concept and how to capture a larger share of the value created rather than defaulting to cost-plus logic.
  - title: '"Customer Value Propositions in Business Markets"'
    authorYear: James C. Anderson, James A. Narus & Das Narayandas, *Harvard Business Review* (March 2007)
    supports: shows how articulating quantified value delivered to customers is the foundation of value-based pricing in B2B markets.
---

# Pricing Logic

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Pricing logic is the analytical framework for determining what to charge for a product or service. Three dominant approaches exist: cost-plus (price = cost + target margin), competitive (price relative to alternatives), and value-based (price proportional to economic value delivered to the customer). Each reflects a different theory of what pricing should accomplish. A fourth approach — dynamic pricing — applies any of the above in real time as supply, demand, or competitive conditions change. The choice of pricing approach is a strategic decision, not an operational one: it determines the firm's relationship to the value it creates and the share of that value it retains.

*Note: This card covers the mental models underlying pricing decisions. For the full decision sequence — including customer psychology, competitive positioning, and pricing change management — see the [Pricing Decision](../Pre-built-Chains/pricing-decision.md) chain. For the upstream question of how value is created and what fraction can be retained, see [Value Creation and Capture](value-creation-capture.md).*

---

## Mental Model

Every pricing decision answers three questions implicitly: what is the floor (below which the firm loses money), what is the ceiling (above which customers buy elsewhere or don't buy), and where between floor and ceiling should the price sit? Cost-plus pricing sets the floor and then adds a margin without asking where the ceiling is. Competitive pricing sets the price relative to the ceiling established by alternatives. Value-based pricing asks where the ceiling actually is — the customer's willingness to pay — and works backward from there.

The practitioner insight: the floor and the ceiling are often far apart, and most firms price far closer to the floor than economic logic warrants, because cost is known and value is uncertain. This is the systematic error that value-based pricing corrects. The question is not "what did it cost us?" — the customer does not care. The question is "what is it worth to them?" — which requires understanding what problem it solves and what alternatives exist.

---

## Practitioner Heuristics

- **Calculate the economic value to the customer before setting any number.** What does the customer currently spend (time, money, risk) to get the job done? What would they save or gain by switching to your solution? The answers bound the economic ceiling. Price below the ceiling — but know where it is.
- **Cost-plus is a floor-finding exercise, not a pricing strategy.** Use it to confirm you are not pricing below cost, not to determine what the market will bear. A firm that uses cost-plus as its primary pricing logic is voluntarily leaving value on the table — systematically, at scale.
- **Competitive pricing anchors you to your competitors' logic, not your value.** If your product creates more value than the competitive alternative, competitive pricing underprices it. If it creates less, competitive pricing overprices it. Use competitive pricing as a reference point, not a target.
- **Segment willingness to pay and price accordingly.** Different customers derive different value from the same product. A single price point optimised for one segment underprices for high-value segments and overprices for low-value ones. Price segmentation — through tiers, packaging, or market separation — captures more of the value across the full distribution.
- **Test price sensitivity explicitly, not from intuition.** Sales teams systematically underestimate willingness to pay because they experience price objections personally and viscerally. Pricing research — van Westendorp, conjoint analysis, or controlled price experiments — consistently reveals higher willingness to pay than intuition suggests.
- **Price changes are harder than price levels.** The most expensive pricing mistake is starting too low, because raising prices activates loss aversion in customers who have anchored to the original level. Set the price right the first time, or plan the price increase path from launch.

---

## Common Failure Modes

**Pricing to win the deal rather than to reflect value.** Sales-driven pricing systematically discounts to close, which over time establishes a lower price point as the reference anchor for all subsequent negotiations. The discount that wins one deal trains the customer to expect that discount on every future deal.

**Uniform pricing across heterogeneous segments.** A single price in a market where different buyers derive different value will over-serve low-value buyers (who would pay less) and under-serve high-value buyers (who would pay more). Segment-blind pricing is the most common source of both margin leakage and missed revenue.

**Ignoring the total cost of ownership framing.** Buyers often evaluate price without accounting for switching costs, integration costs, and total cost of ownership over the life of the product. A higher-priced product with lower total cost of ownership is cheaper in the frame that matters — but only if the buyer is thinking in that frame. Pricing strategy includes educating buyers on the right frame.

**Price anchoring by cost rather than by value.** When a firm communicates its pricing rationale in terms of what it costs to deliver the service, it invites the customer to evaluate the margin rather than the value. This is the opposite of value-based pricing and hands negotiating power to the buyer.

---

## Worked Example

A B2B analytics software firm prices at £500/month (£6,000/year), arrived at by benchmarking two competitors. A value analysis reveals that the software reduces analyst time by an average of 8 hours per week per user, and the typical buyer has 5 users. At an analyst cost of £40/hour fully loaded, the software saves £83,200/year per customer. Current price captures 7.2% of the value created.

Segmentation analysis: large enterprise customers (500+ employees) have an average of 12 users and derive £200,000/year in value. Mid-market customers (100–500 employees) have 5 users and derive £83,200. SMB customers (under 100 employees) have 2 users and derive £33,000.

Revised pricing: SMB tier at £4,800/year (still discounted vs current), mid-market at £9,600/year, enterprise at £24,000/year. The enterprise tier now captures 12% of created value — still well below the ceiling, leaving substantial consumer surplus to make the purchase compelling, but capturing significantly more for the firm. The pricing change increases average revenue per customer by 60% with no change in product.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
