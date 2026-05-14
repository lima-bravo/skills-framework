# Algorithms
*Systematic procedures for solving problems*

**Category:** [Systems](../index.html#systems) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

An algorithm is a finite, deterministic sequence of steps that reliably produces a correct output given valid inputs. The term comes from computer science but the concept — a systematic, reproducible procedure — is useful wherever decisions need to be made consistently, efficiently, and at scale. Algorithms can be literal (sorting data, routing traffic) or conceptual (a systematic decision process, a repeatable hiring rubric, a standard operating procedure).

The practitioner's interest in algorithms is dual: (1) identifying where algorithmic thinking would improve the consistency and quality of decisions, and (2) understanding the properties of algorithms — their time complexity, failure modes, and assumptions — well enough to deploy them wisely.

---

## Mental Model

An algorithm trades discretion for consistency. Where human judgment is expensive, slow, or inconsistent, an algorithm provides a rule that scales. The practitioner asks: *"Is this decision type well-understood enough that a good algorithm would outperform human judgment most of the time?"* Research in decision science (Kahneman, Meehl, Dawes) suggests the answer is yes more often than practitioners assume — simple rules outperform expert judgment in noisy environments with well-defined outcomes.

---

## Practitioner Heuristics

- **Distinguish decisions by their frequency and uniformity.** High-frequency, structurally similar decisions (credit scoring, content moderation, lead prioritization) are candidates for algorithmic treatment. Low-frequency, structurally novel decisions (major strategy pivots, M&A) are not.
- **Understand algorithm complexity.** Some procedures scale linearly (O(n)); others scale as n log n or n². Before deploying an algorithm at scale, understand what happens to its cost or runtime as input size grows.
- **Audit algorithm failure modes explicitly.** Algorithms fail in predictable ways: they perform poorly on edge cases outside their training distribution, they optimize their specified objective while ignoring important objectives not captured in the metric, and they can embed and amplify historical biases. Each failure mode requires a specific mitigation.
- **Build in human override at designed checkpoints.** Algorithms should not be fully autonomous in high-stakes domains without human review at specified decision points. The override should be triggered by specific signals, not by general discomfort.
- **Treat your own decision heuristics as algorithms and debug them.** Your mental rule for deciding X is an informal algorithm. Making it explicit allows you to identify where it fails and to improve it.

---

## Common Failure Modes

- **Goodhart's Law in algorithmic form.** Optimizing an algorithmic objective that is a proxy for the real goal, allowing the algorithm to find solutions that maximize the metric while violating the intent.
- **Distribution shift.** An algorithm trained on historical data performs badly when the world changes and the new data no longer matches the training distribution.
- **Automation bias.** People over-trust algorithmic outputs, even when the algorithm is visibly wrong, because they attribute authority to systematic processes.

---

## Worked Example

A law firm handling high-volume contract review introduces an NLP algorithm to flag non-standard clauses. Initial deployment: the algorithm flags everything, creating more work for the lawyers. After calibration, it flags genuinely non-standard clauses 85% accurately. The failure mode that emerges: lawyers stop reading the clauses the algorithm marks as standard, creating a critical oversight gap for the 15% false negatives. The fix: require human review of a random 10% sample of "standard" flags, with explicit tracking of the false-negative rate over time. The algorithm handles volume; the human spot-check maintains quality.

---

## Connections

→ **Bottlenecks** — algorithms are often deployed to relieve bottlenecks in high-frequency decision processes.
→ **Optimization** — algorithms are the mechanisms through which optimization is operationalized.
→ **Map-Territory** — an algorithm is a map of a decision process; the territory includes cases the map was not designed for.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../index.html)*
