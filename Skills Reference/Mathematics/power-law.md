---
id: 238
name: Power Law
category: Mathematics
cardType: standard
tagline: A small number of inputs produce a disproportionate share of outputs
connections:
  - id: 239
    rationale: "the Long Tail is the flip side of the power law head: as distribution costs fall, the aggregate of niche demand becomes economically significant even when individual niches are tiny."
  - id: 240
    rationale: "Black Swan events are power law tails made epistemologically dangerous: extreme events that dominate outcomes but fall outside the range of normal distribution thinking."
  - id: 82
    rationale: "network effects are a primary generative mechanism for power laws: preferential attachment produces winner-take-most distributions."
  - id: 75
    rationale: "compounding is the temporal expression of power law dynamics: multiplicative growth produces the same disproportionality over time that power laws produce across populations."
  - id: 23
    rationale: "the counterpoint: where power laws drive concentration, diminishing returns create limits. Understanding which applies determines investment strategy."
  - id: 227
    rationale: in power law domains, expected value is dominated by tail events; ignoring the tail produces systematically underestimated EVs in fat-tailed distributions.
  - id: 24
    rationale: "power law tails make margin of safety more important, not less: the worst-case event is not negligibly rare."
  - id: 78
    rationale: power law distributions and normal distributions are both random processes, but with fundamentally different properties; confusing them is the core analytical error in fat-tailed domains.
  - id: 199
    rationale: "in power law domains, survivorship bias is most dangerous: the few visible winners make the distribution look more predictable than it is, obscuring the full population of attempts."
  - id: 248
    rationale: profit pools frequently follow a power law distribution across a value chain; identifying whether that concentration is structural or merely current is the key strategic question.
  - id: 249
    rationale: many customer bases are power-law distributed in value; a segmentation that treats all segments as equal will systematically misallocate resources toward lower-value groups.
references:
  - title: "The Long Tail: Why the Future of Business Is Selling Less of More"
    authorYear: Chris Anderson (2006)
    supports: the business implications of power-law distributions in digital markets.
  - title: "Scale: The Universal Laws of Growth, Innovation, Sustainability, and the Pace of Life in Organisms, Cities, Economies, and Companies"
    authorYear: Geoffrey West (2017)
    supports: power laws as the universal scaling principle across biological and social systems.
---

# Power Law

**Category:** [Mathematics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

A power law is a mathematical relationship between two quantities where one quantity varies as a power of another: a small change in one variable produces a proportionally large change in the other. In practical terms, power laws produce distributions where a small number of items account for the vast majority of the total — the 80/20 principle (Pareto distribution) being the most familiar expression. Unlike normal (bell-curve) distributions, power laws have no characteristic scale: the same disproportionality appears at every level of magnification, and the tail never converges to zero.

---

## Mental Model

Most human intuition is calibrated for normally distributed phenomena — heights, test scores, measurement errors. In normal distributions, outliers are rare and the average is representative. Power law distributions are structurally different: the average is unrepresentative, outliers are not rare, and the most extreme events dominate the total. A single blockbuster film earns more than the bottom thousand combined. A handful of investors produce most venture returns. A tiny fraction of bugs cause most system failures.

The critical practitioner implication: **in power law domains, average thinking is actively misleading.** Planning around the median customer, the median employee, or the median outcome leaves the most important signal — the extreme values — entirely out of the analysis. The question to ask is not "what is typical?" but "what are the few inputs that produce the bulk of the output?"

Power laws arise reliably in the presence of preferential attachment (the rich get richer), multiplicative processes (each gain builds on the last), and network effects (value grows with connections). Recognising these generative conditions tells you whether you are in a power law domain before the distribution is visible.

---

## Practitioner Heuristics

- **Identify which domain you're in before choosing your analytical tools.** Normal distribution thinking applies to height and measurement error; power law thinking applies to wealth, city size, web traffic, sales performance, and system failures. Misidentifying the domain leads to systematically wrong predictions.
- **Apply the 80/20 diagnostic.** In any dataset where you suspect a power law, check whether roughly 20% of inputs drive 80% of outputs. If the ratio is more extreme (90/10, 95/5), the power law is steeper. This tells you where to concentrate effort.
- **Find the input that compounds.** Power laws are usually driven by one variable that compounds — a network effect, a distribution advantage, an early-mover position. Identify it and invest disproportionately in it rather than spreading resources evenly.
- **Protect the tail.** In power law outcome distributions, the worst-case scenario is not an outlier you can safely ignore — it is a structurally probable event that dominates expected loss. Design risk management around the tail, not the average.
- **Don't optimise the middle.** In power law markets, the middle is often the worst position: too big to be niche, too small to have the scale advantages of the leader. Strategy in power law domains often requires choosing: dominate a category, or retreat to a defensible niche.

---

## Common Failure Modes

- **Averaging across a power law distribution.** Reporting the mean when the distribution is heavily skewed produces numbers that describe almost nobody's actual experience. In a power law distribution, the median and the mean diverge sharply — use both, not just one.
- **Treating all inputs as roughly equivalent.** Spreading resources evenly across customers, products, features, or employees when the underlying distribution is a power law means dramatically under-investing in the few that matter most.
- **Predicting from recent history in a fat-tailed domain.** Normal distribution thinking says extreme events are so rare you can safely exclude them. In power law domains, extreme events are not rare — they are structurally expected and often dominant. Historical averages are not a reliable guide.
- **Mistaking a temporary position in the tail for permanent safety.** Power law distributions are dynamic: positions that seem stable can be disrupted by a new entrant that captures preferential attachment. The tail is not a safe haven; it is a contested position.

---

## Worked Example

A SaaS company analyses its customer base and finds that 8% of customers generate 74% of revenue. The natural response is to invest heavily in serving those customers. But the more important insight is structural: the company operates in a power law market where acquisition cost and lifetime value are both power-law distributed. Their median customer is unprofitable; their top decile subsidises the rest.

The strategic implication: stop acquiring broad and start acquiring narrow. The resources spent on the median 50% of customers — who collectively generate 6% of revenue — should be redirected to acquiring more customers in the profile of the top 8%. Unit economics, pricing strategy, and product development all change when this structural reality is made explicit. The average was hiding it.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
