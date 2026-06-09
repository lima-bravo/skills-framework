---
id: 17
name: Feedback Loops
category: Systems
cardType: standard
tagline: Outputs that become inputs
connections:
  - id: 18
    rationale: the bottleneck is often the point where a balancing loop operates; remove it and reinforcing loops can operate freely.
  - id: 2
    rationale: "second-order effects are often feedback loop dynamics: the effect of an action circles back in ways that weren't anticipated."
  - id: 20
    rationale: the stable state of a system is determined by where its feedback loops balance.
  - id: 260
    rationale: the archetype works because the symptom-to-fix feedback loop is shorter and more visible than the root-cause loop; structural leverage lies in strengthening the longer loop.
  - id: 261
    rationale: feedback loops are the primary mechanism systems thinking works with; the discipline of reading and redesigning them is systems thinking itself
  - id: 11
    rationale: "the post-mortem closes the feedback loop on organizational action: action → outcome → structured learning → updated action."
  - id: 171
    rationale: systems-based causal analysis is feedback loop analysis applied to problem diagnosis; when a problem recurs despite fixes, the causal structure is a loop, not a chain.
  - id: 19
    rationale: feedback dynamics are among the primary mechanisms through which emergent properties arise at the system level.
  - id: 22
    rationale: the threshold above which a reinforcing feedback loop becomes self-sustaining; identifying it tells you how much input is required to tip the dynamic.
  - id: 25
    rationale: "high churn can activate a reinforcing negative loop: fewer users → less word of mouth → higher CAC → less product investment → more churn."
  - id: 108
    rationale: "exploitation and exploration operate on different feedback loop speeds: exploitation on fast, tight loops; exploration on slow, loose ones that allow genuine uncertainty to persist."
  - id: 38
    rationale: "asset bubbles are the canonical reinforcing feedback loop: rising prices attract more buyers, which drives prices higher."
  - id: 39
    rationale: tightly interdependent systems contain more feedback loops, and more of them are invisible until a failure reveals them.
  - id: 120
    rationale: measurement creates feedback loops; when a metric becomes a target, the loop reinforces optimising the metric rather than the underlying outcome.
  - id: 231
    rationale: commons depletion follows a reinforcing feedback loop; making consumption visible creates a balancing loop that enables self-regulation before collapse.
  - id: 43
    rationale: existing feedback loops embody and perpetuate inertia; changing direction often requires redesigning the loops driving the current trajectory.
  - id: 46
    rationale: balancing feedback loops are the mechanisms that actively fight entropy; without them, systems drift toward disorder.
  - id: 51
    rationale: incentives create feedback loops; the loop structure determines whether the incentive produces the intended long-run outcome or an unintended one.
  - id: 104
    rationale: psychologically safe teams close error-detection feedback loops faster because problems surface before they compound into larger failures.
  - id: 116
    rationale: fragmentation → lower output → more status meetings → more fragmentation is a reinforcing loop; calendar structure is the intervention point.
  - id: 62
    rationale: PMF activates a reinforcing feedback loop between product quality, retention, and word-of-mouth; the absence of that loop is the diagnostic signal that PMF has not been achieved.
references:
  - title: "Thinking in Systems: A Primer"
    authorYear: Donella H. Meadows (2008)
    supports: the definitive accessible treatment of feedback loops and systems archetypes.
  - title: "Cybernetics: Or Control and Communication in the Animal and the Machine"
    authorYear: Norbert Wiener (1948)
    supports: the theoretical foundation of feedback as a general systems principle.
---

# Feedback Loops

**Category:** [Systems](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

A feedback loop exists when the output of a system becomes an input that influences future outputs. There are two fundamental types. A **reinforcing (positive) feedback loop** amplifies change: more of X produces more X. A **balancing (negative) feedback loop** resists change: more of X produces less X, or triggers a corrective response. Real systems contain both types operating simultaneously, creating the complex dynamics — growth, stability, oscillation, collapse — that characterize living organizations, markets, and ecosystems.

Understanding feedback is understanding why systems behave the way they do over time, not just at a snapshot.

---

## Mental Model

Draw the causal arrows: what does this output affect? Does the effect circle back to the original variable, and in what direction? A reinforcing loop looks like a cycle of arrows all pointing the same direction; a balancing loop has at least one arrow pointing against the others. The practitioner's insight is that **most surprizing system behavior comes from feedback loops that weren't on the diagram** — effects that were assumed to be one-way but actually circle back.

---

## Practitioner Heuristics

- **Map loops before intervening.** Before changing a variable in a system, identify which loops that variable participates in. An intervention that breaks a balancing loop can unleash a runaway reinforcing one.
- **Identify the dominant loop at each stage.** Systems switch between loop-dominance as conditions change. Early-stage growth is often driven by a reinforcing loop (word of mouth, learning curve); later stages hit balancing loops (market saturation, diminishing returns). The transition point is the strategic inflection.
- **Look for delays.** The most dangerous feedback loops are ones with long delays — the response is slow enough that by the time the correction arrives, the system has been pushed far past the equilibrium. Supply chains, real estate cycles, and bureaucratic organizations are full of delayed feedback.
- **Use the loop structure to predict system behavior.** Reinforcing loops predict exponential dynamics (growth or collapse). Balancing loops predict stable equilibria or oscillation. Knowing which type dominates tells you what to expect.
- **Close feedback loops deliberately.** If you're managing a system (team, product, process) and you don't have fast, accurate feedback on your interventions, you are flying blind. Design feedback explicitly into any system you're responsible for.

---

## Common Failure Modes

- **Treating symptoms rather than loop structure.** A repeated pattern of problems (product quality always falling, team always over-committed) usually indicates a structural feedback dynamic. Fixing individual instances without changing the loop is Sisyphean.
- **Ignoring balancing loops when designing growth initiatives.** A growth strategy that triggers strong balancing responses (regulatory scrutiny, talent scarcity, customer backlash) will underperform projections built only on the reinforcing loop.
- **Confusing correlation with loop direction.** Two variables that move together may be in a loop — but the direction of causality matters enormously for how to intervene.

---

## Worked Example

A SaaS company notices that as their customer success team grows, NPS improves, which drives referrals, which drives more customers, which strains the CS team, which causes NPS to drop. They are caught between a reinforcing loop (CS investment → better NPS → more referrals → more revenue → more CS investment) and a balancing loop (more customers per CS rep → worse service → lower NPS). The strategy that emerges from this analysis: invest in CS scalability (automation, knowledge base, onboarding design) before the balancing loop tightens, not after. The feedback diagram made the correct intervention sequence obvious.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
