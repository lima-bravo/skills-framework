---
id: 76
name: Local Maxima
category: Mathematics
cardType: standard
tagline: The trap of the nearest peak
connections:
  - id: 33
    rationale: local maxima are the primary failure mode of optimization algorithms.
  - id: 23
    rationale: diminishing returns is the signature of approaching a local maximum.
  - id: 37
    rationale: large-scale local maxima (industry structures) are escaped by creative destruction, not incremental improvement.
  - id: 108
    rationale: exploitation is the process of climbing a local maximum; exploration is the search for higher maxima elsewhere.
references:
  - title: "How to Solve It: A New Aspect of Mathematical Method"
    authorYear: George Pólya (1945)
    supports: the general methodology of search in a problem space.
  - title: "Algorithms to Live By: The Computer Science of Human Decisions"
    authorYear: Brian Christian & Tom Griffiths (2016)
    supports: the explore/exploit tension and escape from local optima.
---

# Local Maxima

**Category:** [Mathematics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

A local maximum is a point in a solution space that is better than all nearby points but not the best achievable overall. Gradient ascent algorithms (and many human decision processes) get trapped at local maxima: every small move from the current position looks worse, so no move is made — but a larger move would lead to a much higher peak. In strategy, product development, and personal development, local maxima are the comfortable-but-suboptimal states that resist incremental improvement.

---

## Mental Model

Imagine a mountain range with peaks of different heights. Standing on a local peak, every path downward before it goes upward again. The highest mountain is elsewhere. To reach it, you must go down — which feels like regression — before the path upward begins. The practitioner's question: "Is the improvement ceiling I'm hitting a fundamental limit, or a local maximum that I can escape by accepting a temporary setback to access a different trajectory?"

---

## Practitioner Heuristics

- **Distinguish performance plateaus by their cause.** A plateau caused by diminishing returns from the current approach is a local maximum signal. A plateau caused by execution quality is not.
- **Escape local maxima with discontinuous moves.** Incremental improvement cannot escape a local maximum; only a move that accepts temporary decline — a pivot, a redesign, a career change — can. Design the discontinuous move deliberately.
- **The larger the local maximum, the harder the escape.** A highly optimized current state is more comfortable to stay in and more expensive to leave than a barely-optimized one. The temptation to stay rises as the current peak gets higher.
- **Use simulation to explore the space before committing to a move.** Thought experiments, pilots, and prototypes can reveal whether the adjacent valley leads to a higher peak without requiring full commitment to the descent.
- **Reframe "going backward" as "repositioning."** The psychological resistance to escaping a local maximum comes from loss aversion. Naming the temporary decline as strategic repositioning, not regression, helps.

---

## Common Failure Modes

- **Incremental optimization of the wrong thing.** Spending all available improvement capacity on a local maximum instead of exploring potentially higher peaks. This is comfortable but limits total performance.
- **Escaping local maxima randomly.** Making large discontinuous moves without analysis of where they lead — just to escape the current plateau. Random exploration without signal is expensive.

---

## Worked Example

A law firm has a highly profitable and well-optimized practice serving mid-market clients. Revenue per partner is at an industry-leading level. This is the local maximum. Their growth ceiling is set by the rate at which they can add partners and the depth of their mid-market client base. An analysis reveals that large-enterprise clients, currently underserved, would pay 3x the fees and have substantially higher loyalty. Moving to enterprise requires rebuilding the pitch, restructuring service delivery, and accepting a revenue dip while the new client base develops. This is the valley before the next peak. The firm that stays optimized at the mid-market local maximum sees a new competitor eat the enterprise opportunity.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
