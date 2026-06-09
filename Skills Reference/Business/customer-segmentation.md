---
id: 249
name: Customer Segmentation
category: Business
cardType: standard
tagline: A segment is not a label you apply to customers. It's a difference that changes what you do.
connections:
  - id: 103
    rationale: "the discovery-side counterpart: JTBD tells you what a customer is trying to accomplish; segmentation groups customers by which jobs they share and how much that's worth."
  - id: 69
    rationale: once segments are defined, this is the tool for mapping what each segment actually needs against what the offer actually provides.
  - id: 162
    rationale: the structural discipline that keeps a segmentation from collapsing into overlapping, unactionable categories.
  - id: 216
    rationale: 'the quantitative backbone of "attractiveness": lifetime value, cost to serve, and expansion potential are what separate a segment worth chasing from one worth deprioritizing.'
  - id: 56
    rationale: the bias that elevates the loudest, most visible segment above the one the data actually supports.
  - id: 66
    rationale: the qualitative engine that feeds a segmentation with the needs and behavior data it depends on; segmentation without ongoing discovery calcifies into a stale snapshot.
  - id: 238
    rationale: many customer bases are power-law distributed in value; a segmentation that treats all segments as roughly equal in size or worth will misallocate resources accordingly.
references:
  - title: Competing Against Luck
    authorYear: C.M. Christensen, T. Hall, K. Dillon & D.S. Duncan (2016)
    supports: the "jobs" lens that grounds segmentation in what predicts behavior rather than what's easy to label.
  - title: "Different: Escaping the Competitive Herd"
    authorYear: Youngme Moon (2010)
    supports: on the trap of segmenting — and then competing — along the same dimensions as everyone else in the category.
  - title: "Market Segmentation: Conceptual and Methodological Foundations"
    authorYear: Michel Wedel & Wagner A. Kamakura (2000)
    supports: the methodological foundation for needs-based, behavior-based segmentation versus descriptive segmentation.
  - title: Value Proposition Design
    authorYear: Alexander Osterwalder et al. (2014)
    supports: the customer-profile structure (jobs, pains, gains) that makes a segmentation observable and testable rather than aspirational.
---

# Customer Segmentation

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Customer segmentation, in the strategic sense, is the discipline of dividing a customer base into mutually exclusive, collectively exhaustive groups defined by *decision-relevant differences* — needs, economics, behavior, and strategic value — and then scoring those groups by attractiveness and right to win, so that targeting, pricing, product, and coverage decisions can be made deliberately rather than uniformly. It is distinct from customer *discovery* (the activity of learning what any given customer needs) and from demographic labeling (the activity of describing customers in terms that may or may not predict anything useful). A segmentation earns its keep only when it changes what the organization does — what it builds, who it sells to first, how it prices, or where it invests support.

---

## Mental Model

The test of a segmentation is brutally simple: if two customers land in different segments, does anything about how you serve them actually differ? If the answer is no, the segmentation is decoration — a slide that organizes customers into categories without organizing the *organization* into anything different. If the answer is yes — different price sensitivity, different time-to-value requirements, different expansion potential, different cost-to-serve — then the segmentation is a strategic instrument: it tells you where to point the parts of the business that can only point in one direction at a time (the sales team's calendar, the roadmap's next quarter, the support budget's headcount).

This is why demographic segmentation so often disappoints: "enterprise vs. SMB" or "under 35 vs. over 35" feel like segments because they're easy to observe, but they only matter if they *predict* something — needs, willingness to pay, churn risk, expansion potential. A segmentation built around predictive differences will sometimes look demographically odd (two companies of wildly different size that behave identically because they share an underlying need) and that oddness is a feature, not a bug — it means the segmentation is tracking the thing that actually matters rather than the thing that's easiest to put in a spreadsheet column.

---

## Practitioner Heuristics

- **Start from the decision, not the data.** "What choice will this segmentation inform — pricing, targeting, roadmap, coverage, retention investment?" determines which dimensions matter. A segmentation built to answer "who should our top sales reps call first" looks completely different from one built to answer "which features should the roadmap prioritize," even drawing on the same customer base.
- **Segment by what predicts behavior, not by what's easy to observe.** Needs, economics (lifetime value, cost to serve, expansion potential), and behavior (usage patterns, buying triggers, switching propensity) predict what a customer will do next. Industry, size, and geography are useful *only* insofar as they correlate with one of those — and the correlation should be checked, not assumed.
- **Make segments MECE enough to act on.** Every customer should fall cleanly into exactly one segment, and the segments together should cover the whole base. A segmentation with overlapping or fuzzy boundaries will be argued about forever instead of acted on — see [MECE](../Consulting-Craft/mece.md).
- **Score segments on two axes: attractiveness and right to win.** A segment can be large and growing (attractive) but one where three better-resourced competitors already dominate (no right to win) — chasing it burns resources for a result the company was never positioned to achieve. The intersection of "worth having" and "we can actually get it" is where investment belongs.
- **Define segments in terms that are observable or testable — not aspirational.** "High-growth, technically sophisticated buyers who evaluate on integration depth rather than price" is testable against real accounts. "Forward-thinking innovators" is a compliment dressed as a segment definition, and no one can act on it because no one can identify who's in it.
- **Re-segment when the decision changes.** A segmentation built for a pricing decision and then reused, unchanged, for a product roadmap decision is very likely organizing the wrong dimensions for the new question. Segments are tools for a purpose, not permanent descriptions of reality.

---

## Common Failure Modes

- **The demographic decoy.** Segmenting by firmographic or demographic traits that feel concrete and measurable but don't actually predict the thing the decision depends on — producing a tidy-looking segmentation that changes nothing about what the organization does.
- **Segment proliferation.** Twelve "segments" that are really twelve anecdotes — each one accurate as a description of a real customer, none of them large or distinct enough to organize a strategy, a roadmap, or a sales motion around.
- **Segmenting without scoring.** Stopping at "here are our customer types" without the second move — attractiveness and right-to-win — leaves the organization with a map and no compass. Every segment looks equally worth pursuing, which in practice means none of them get the focus that real prioritization requires.
- **Confusing the segment with the persona.** A rich, vivid customer persona is a communication tool for building empathy; a segment is an analytical tool for allocating resources. Treating the persona as if it were the segment smuggles a single vivid anecdote into a decision that should be made on the pattern across hundreds or thousands of accounts.
- **Letting the loudest segment set the agenda.** The segment that calls support most, attends user conferences, and has the most vocal champions inside the company is not necessarily the segment with the best economics or growth potential — see [Availability Bias](../Psychology/availability-bias.md). Segmentation exists partly to protect against exactly this kind of distortion.

---

## Worked Example

A project management software company serves a customer base that ranges from five-person startups to thousand-person enterprises, and is debating where to focus its limited product and sales investment for the next year. The instinctive segmentation — by company size — produces three buckets (small, mid-market, enterprise) that mirror the org chart but predict almost nothing: small companies and mid-market companies churn at similar rates, expand at similar rates, and care about similar features.

Re-cut by the dimension that actually predicts behavior — *how the team coordinates work* — two segments emerge that cut clean across the size buckets. "Structured-process teams" (regardless of size) need approval workflows, audit trails, and integration with existing systems; they have high switching costs once onboarded, low price sensitivity, and expand steadily. "Fluid-collaboration teams" need speed, flexibility, and minimal setup; they churn faster, are highly price-sensitive, and rarely expand beyond their initial purchase.

Scored on attractiveness and right to win: structured-process teams are smaller in count but dramatically more valuable per account, and the company's existing integration depth gives it a real advantage that fluid-collaboration-focused competitors can't easily match. The company redirects its roadmap toward workflow and integration depth — the dimension structured-process teams actually buy on — and stops trying to win the price-sensitive, low-switching-cost segment where it was never going to out-compete faster, cheaper rivals. Sales coverage, pricing packaging, and onboarding all reorganize around the same two-segment cut, because the segmentation finally describes a difference that changes what the company does.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
