---
id: 159
name: WSJF
category: Delivery & Flow
cardType: standard
tagline: Sequence by cost of delay per unit of work
connections:
  - id: 137
    rationale: the numerator of WSJF.
  - id: 158
    rationale: WSJF is the LPM sequencing rule.
  - id: 30
    rationale: WSJF is a structured trade-off mechanism.
  - id: 18
    rationale: WSJF works on bottleneck capacity.
  - id: 141
    rationale: pairs to forecast value delivery under a WSJF queue.
  - id: 170
    rationale: Step 9 of the Work to Be Done chain uses WSJF to rank work items by economic value where stakes are clear — Cost of Delay divided by job size determines which items to sequence first.
  - id: 213
    rationale: the From Idea to Hypothesis chain uses WSJF in Step 5 to sequence hypothesis candidates — test the riskiest assumption first; if it fails, no downstream assumptions need to be tested.
references:
  - title: The Principles of Product Development Flow
    authorYear: Donald G. Reinertsen (2009)
    supports: the full economic model of cost of delay and the CD3 formula from which WSJF derives.
  - title: SAFe
    authorYear: Dean Leffingwell & Scaled Agile (2011–ongoing)
    supports: the WSJF formula for sequencing work by cost of delay divided by job duration.
  - title: Lean Enterprise
    authorYear: Jez Humble, Joanne Molesky & Barry O'Reilly (2014)
    supports: the lean portfolio investment approach that WSJF enables at scale.
---

# WSJF

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Weighted Shortest Job First is a sequencing rule for work under scarcity: prioritize items by cost of delay divided by job size. WSJF maximizes value delivered per unit of scarce capacity. It was developed for queueing systems and operationalized for product development by Donald Reinertsen (*Principles of Product Development Flow*, 2009); SAFe institutionalized a discrete-scoring variant for enterprise use. The rule's power is in what it forces explicit: a job that "feels important" but has low time-criticality, or one with high cost of delay but is enormous, both move down the queue.

---

## Mental Model

Imagine a one-lane drawbridge with a queue. Letting through the boat with the most valuable cargo seems right — but a small fast boat that costs $50k/hour to delay should go before a large slow boat that costs $10k/hour to delay, because the small boat will clear the bridge in 5 minutes and the large one in an hour. WSJF formalizes this intuition: it's not the most valuable item that goes first; it's the item that maximizes value-per-time-on-the-bridge. The same arithmetic applied to a quarterly portfolio queue reorders the work in ways no business-case ranking would.

---

## Practitioner Heuristics

- **Use buckets, not numbers.** Three buckets each for value, time-criticality, risk/opportunity, and size produce comparable WSJF scores without false precision.
- **Re-score quarterly.** Cost of delay and size both move; a stale WSJF is a stale priority list.
- **Force-rank the bottom.** WSJF only differentiates if items at the bottom are visibly different from items at the top.
- **Beware "size = 1."** Items that look small often hide dependencies, integration work, or coordination cost that WSJF size needs to capture.
- **Pair with WIP limits.** WSJF tells you what to start next; WIP limits keep you from starting too many.

---

## Common Failure Modes

- **WSJF as a spreadsheet artifact.** Calculated once, ignored when politics meet the queue.
- **Inflated time-criticality.** Every initiative claims hard deadline pressure; WSJF only differentiates when scoring is honest.
- **Sizing in story points.** Story-point sizing varies team-to-team; size in WSJF should be relative across the items being compared, not absolute.
- **Skipping risk/opportunity.** WSJF without the third component (risk reduction or opportunity enablement) underweights enabling work.

---

## Worked Example

A platform team's quarterly intake holds 22 candidate initiatives funded for capacity that fits 9. A WSJF exercise reveals: 4 items have very high cost of delay but are also very large (CoD/size ≈ mid-rank), 2 items have moderate CoD but tiny size (CoD/size = top-rank), and 1 item has top CoD but is the largest (CoD/size = mid-rank). The naïve "most valuable first" ranking would have selected the 4 largest items; WSJF promotes the 2 small high-rank items first, slots the 4 large items in next, and pushes 8 items below the cut. End-of-quarter outcomes: the 2 small items unblock substantial downstream value worth ~$1.8M; the larger items deliver as planned. The team's portfolio committee adopts WSJF as the standing prioritization mechanism.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
