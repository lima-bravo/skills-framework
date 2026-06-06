---
name: "customer-segmentation"
description: "Builds MECE customer segments around decision-relevant differences — needs, economics, behavior, strategic value — and scores them on attractiveness and right to win, so targeting, pricing, and roadmap choices can be made deliberately. Use for strategy-level segmentation decisions, not customer discovery."
metadata:
  plugin: "business-strategy"
  version: "1.0.0"
  sources: "Business/customer-segmentation.md"
---

# Customer Segmentation

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. Customer Segmentation

**Hold in mind:**
The test of a segmentation is brutally simple: if two customers land in different segments, does anything about how you serve them actually differ? If the answer is no, the segmentation is decoration — a slide that organizes customers into categories without organizing the *organization* into anything different. If the answer is yes — different price sensitivity, different time-to-value requirements, different expansion potential, different cost-to-serve — then the segmentation is a strategic instrument: it tells you where to point the parts of the business that can only point in one direction at a time (the sales team's calendar, the roadmap's next quarter, the support budget's headcount).

This is why demographic segmentation so often disappoints: "enterprise vs. SMB" or "under 35 vs. over 35" feel like segments because they're easy to observe, but they only matter if they *predict* something — needs, willingness to pay, churn risk, expansion potential. A segmentation built around predictive differences will sometimes look demographically odd (two companies of wildly different size that behave identically because they share an underlying need) and that oddness is a feature, not a bug — it means the segmentation is tracking the thing that actually matters rather than the thing that's easiest to put in a spreadsheet column.

**Do:**
- **Start from the decision, not the data.** "What choice will this segmentation inform — pricing, targeting, roadmap, coverage, retention investment?" determines which dimensions matter. A segmentation built to answer "who should our top sales reps call first" looks completely different from one built to answer "which features should the roadmap prioritize," even drawing on the same customer base.
- **Segment by what predicts behavior, not by what's easy to observe.** Needs, economics (lifetime value, cost to serve, expansion potential), and behavior (usage patterns, buying triggers, switching propensity) predict what a customer will do next. Industry, size, and geography are useful *only* insofar as they correlate with one of those — and the correlation should be checked, not assumed.
- **Make segments MECE enough to act on.** Every customer should fall cleanly into exactly one segment, and the segments together should cover the whole base. A segmentation with overlapping or fuzzy boundaries will be argued about forever instead of acted on — see [MECE](../Consulting-Craft/mece.md).
- **Score segments on two axes: attractiveness and right to win.** A segment can be large and growing (attractive) but one where three better-resourced competitors already dominate (no right to win) — chasing it burns resources for a result the company was never positioned to achieve. The intersection of "worth having" and "we can actually get it" is where investment belongs.
- **Define segments in terms that are observable or testable — not aspirational.** "High-growth, technically sophisticated buyers who evaluate on integration depth rather than price" is testable against real accounts. "Forward-thinking innovators" is a compliment dressed as a segment definition, and no one can act on it because no one can identify who's in it.
- **Re-segment when the decision changes.** A segmentation built for a pricing decision and then reused, unchanged, for a product roadmap decision is very likely organizing the wrong dimensions for the new question. Segments are tools for a purpose, not permanent descriptions of reality.

**Avoid:**
- **The demographic decoy.** Segmenting by firmographic or demographic traits that feel concrete and measurable but don't actually predict the thing the decision depends on — producing a tidy-looking segmentation that changes nothing about what the organization does.
- **Segment proliferation.** Twelve "segments" that are really twelve anecdotes — each one accurate as a description of a real customer, none of them large or distinct enough to organize a strategy, a roadmap, or a sales motion around.
- **Segmenting without scoring.** Stopping at "here are our customer types" without the second move — attractiveness and right-to-win — leaves the organization with a map and no compass. Every segment looks equally worth pursuing, which in practice means none of them get the focus that real prioritization requires.
- **Confusing the segment with the persona.** A rich, vivid customer persona is a communication tool for building empathy; a segment is an analytical tool for allocating resources. Treating the persona as if it were the segment smuggles a single vivid anecdote into a decision that should be made on the pattern across hundreds or thousands of accounts.
- **Letting the loudest segment set the agenda.** The segment that calls support most, attends user conferences, and has the most vocal champions inside the company is not necessarily the segment with the best economics or growth potential — see [Availability Bias](../Psychology/availability-bias.md). Segmentation exists partly to protect against exactly this kind of distortion.

## Deliverable format

Produce a markdown document with these sections:

### Decision this segmentation must inform (pricing, targeting, roadmap, coverage, retention investment)

### Segment definitions (MECE, observable/testable — not aspirational)

### What predicts behavior in each segment (needs, economics, behavior — not demographics alone)

### Attractiveness and right-to-win scoring per segment

### The 'does anything actually differ?' test applied to each pair of segments

### Targeting, pricing, and roadmap implications — and when to re-segment

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

- [customer-segmentation](references/customer-segmentation.md)

