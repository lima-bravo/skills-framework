---
id: 285
name: Judgment Noise / Decision Hygiene
category: Psychology
cardType: standard
tagline: Bias points judgment in a direction; noise scatters it — and the scatter is usually bigger than anyone expects
connections:
  - id: 212
    rationale: Observer Bias is a systematic, expectation-driven distortion at the point of measurement — a directional error. Judgment Noise is the different, often larger problem of unwanted variability with no consistent direction at all — the same evaluator, on different days, or different evaluators on the identical case, disagree without either being more "biased" than the other.
  - id: 211
    rationale: a calibrated individual's stated confidence matches their long-run hit rate; noise is what happens when two equally calibrated people reach different verdicts on the identical case — calibration is a property of one judge over time, noise is a property of a judgment process across judges and occasions.
  - id: 127
    rationale: a structured, decomposed decision process — the decision-hygiene fix for noise — depends on clear decision rights being assigned in the first place; RACI is the organisational scaffolding that makes independent, structured judgment possible before informal discussion collapses it.
  - id: 200
    rationale: a distinct distortion in judging other people specifically — attributing behaviour to character rather than circumstance — that can compound with judgment noise in evaluative contexts like performance reviews, but operates through a different mechanism.
references:
  - title: "Noise: A Flaw in Human Judgment"
    authorYear: Daniel Kahneman, Olivier Sibony & Cass R. Sunstein (2021)
    supports: the definitive treatment establishing noise as analytically distinct from bias, with the underwriting and sentencing case studies and the decision-hygiene remedies.
  - title: "Clinical Versus Statistical Prediction: A Theoretical Analysis and a Review of the Evidence"
    authorYear: Paul E. Meehl (1954)
    supports: the foundational study demonstrating that simple statistical rules routinely outperform expert clinical judgment, specifically because judgment is noisy in ways experts don't detect in themselves.
---

# Judgment Noise / Decision Hygiene

**Category:** [Psychology](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Judgment noise is unwanted variability in judgments that should, in principle, be identical — the same case, evaluated by different people, or by the same person at a different time or in a different mood, producing meaningfully different verdicts with no consistent direction. It is distinct from bias, which is a systematic, directional error: the average judgment is skewed one way. A biased judge is wrong in a predictable direction; a noisy judge, or judging system, is inconsistent, with errors that don't average out because they don't point anywhere in particular — they just scatter. Decision hygiene is the set of practices — structuring decisions before discussing them, using independent judgments, decomposing a complex decision into scored components, and seeking genuinely independent second opinions — that reduces noise the way debiasing techniques reduce bias, and the two require different fixes because they are different problems.

---

## Mental Model

An experienced practitioner treats consistency and accuracy as two separate properties of a judgment process, and checks both, because a process can fail on either one independently of the other. Most organisations audit for bias — is our hiring process discriminating, is our pricing systematically too aggressive — and almost never audit for noise: giving the identical case to multiple qualified judges and measuring how much their verdicts differ. When this test is actually run, the scatter is reliably larger than anyone predicts in advance — underwriters quoting the same risk at premiums that differ by more than half, judges handing down sentences for similar cases that differ by years, doctors reaching different diagnoses from the same scan — and critically, none of this variability shows up in ordinary review, because no one ever compares two independent judgments of the same case side by side. The practitioner's discipline is to assume significant noise exists in any judgment-based process until a noise audit has actually measured it, rather than assuming that a well-trained, well-intentioned group of judges will naturally converge.

---

## Practitioner Heuristics

- **Run a noise audit before assuming a judgment process is consistent.** Give the same case, blind, to several qualified judges and measure the spread of their verdicts — most organisations are startled by how large it is the first time they check.
- **Separate the bias question from the noise question explicitly.** "Is our average judgment accurate?" and "do different judges reach the same verdict on the same case?" are different questions requiring different diagnostics and different fixes.
- **Structure the judgment before the discussion, not after.** Have each judge form an independent assessment — ideally against explicit, decomposed criteria — before any group discussion, because group discussion tends to converge people around whoever spoke first or most confidently, which reduces visible disagreement without reducing actual noise.
- **Decompose a complex judgment into scored sub-components before combining them into an overall verdict.** Rating several independent dimensions separately, then combining the scores by a fixed rule, produces less noise than asking for one global, holistic judgment straight away.
- **Use relative comparisons over absolute ratings where possible.** People are more consistent when ranking cases against each other than when independently assigning an absolute score to each one.

---

## Common Failure Modes

- **Assuming consistency without measuring it.** Trusting that trained, well-intentioned judges naturally converge on similar cases, without ever running the side-by-side comparison that would reveal how much they actually disagree.
- **Treating noise reduction as a bias-reduction problem.** Applying debiasing techniques to a process whose real problem is unstructured variability, not a directional skew — the fix doesn't match the failure.
- **Letting group discussion substitute for independent judgment.** Having judges discuss a case together before anyone commits to an individual view, which produces the appearance of consensus without reducing the underlying noise, because the group converged around social dynamics, not an independently arrived-at answer.
- **Ignoring occasion noise.** Assuming the same judge would reach the same verdict on the same case regardless of when they review it, when time of day, caseload, mood, and review order are all documented sources of variability even for a single, consistent-seeming individual.

---

## Worked Example

An insurance company assumes its underwriters are broadly consistent — they're trained on the same manual, reviewed against the same guidelines, and no one has raised concerns about erratic pricing. A noise audit gives forty underwriters the identical set of case files, with no discussion between them, and asks each to independently quote a premium. The spread is far larger than anyone expected: premiums for the same case differ by more than 50% between underwriters, with no consistent pattern — it isn't that some underwriters are systematically higher or lower (that would be bias, and would have shown up in aggregate loss-ratio analysis already); each underwriter's judgment wanders unpredictably case to case, a pattern invisible in ordinary performance review because no two underwriters are ever asked to price the identical file side by side.

The fix is decision hygiene, not more training on the existing guidelines: risk factors are scored independently against explicit criteria before any single combined premium figure is produced, underwriters record their independent assessment before consulting a colleague on ambiguous cases, and a rotating sample of files is periodically re-priced blind by a second underwriter specifically to keep measuring the noise level over time. The redesign doesn't make underwriters more accurate on average — it makes them more consistent with each other, which turns out to be the larger and more costly problem the original audit revealed.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
