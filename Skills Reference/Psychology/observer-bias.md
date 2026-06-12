---
id: 212
name: Observer Bias
category: Psychology
cardType: standard
tagline: The evaluator who knows what they're looking for will find it.
connections:
  - id: 72
    rationale: blinded evaluation is the structural application of observer bias control to formal experiments; the control group alone is not sufficient if assessors know which condition is which
  - id: 55
    rationale: observer bias is confirmation bias operating at the point of measurement; the fix (blinding) prevents expectation from shaping the evidence rather than trying to correct it after the fact
  - id: 204
    rationale: producing genuinely falsifiable evidence requires that the measurement process be insulated from the hypothesis; observer bias is the mechanism by which measurements quietly align with hypotheses
  - id: 211
    rationale: uncorrected observer bias degrades calibration; evaluators who systematically rate expected winners higher develop track records that look accurate but are contaminated
  - id: 96
    rationale: built Chain) — blind review of written assessments and structured independent scoring are the two highest-leverage interventions in the hiring chain
  - id: 73
    rationale: the assumptions an evaluator holds about a candidate or option are the exact source of the expectation that drives observer bias; surfacing those assumptions before evaluation is the upstream intervention
  - id: 104
    rationale: in low-safety environments, evaluators are more likely to anchor on the dominant view rather than submit independent assessments; observer bias is amplified by social pressure
  - id: 218
    rationale: the case sponsor is the worst evaluator of their own case; independent review or red-team challenge before submission is the structural defence against the observer bias that makes advocacy look like analysis.
  - id: 214
    rationale: Crawl / Walk / Run identifies observer bias as the primary crawl-stage risk — the team that built the prototype should not be the sole evaluator of whether it works
references:
  - title: Pygmalion in the Classroom
    authorYear: Robert Rosenthal & Lenore Jacobson (1968)
    supports: 'the foundational study: teachers who were told certain students were "late bloomers" produced measurable IQ gains in those students; the expectations were fabricated, the effect was real. Established observer-expectancy as an empirically demonstrated phenomenon.'
  - title: "\"Orchestrating Impartiality: The Impact of 'Blind' Auditions on Female Musicians\""
    authorYear: Claudia Goldin & Cecilia Rouse (2000), *American Economic Review*, 90(4), 715–741
    supports: the landmark natural experiment showing that switching symphony auditions to screens that hid the performer's gender increased female hires by 25–46%; the strongest field evidence for blinding as a structural remedy.
  - title: "Noise: A Flaw in Human Judgment"
    authorYear: Daniel Kahneman, Olivier Sibony & Cass R. Sunstein (2021)
    supports: extends the analysis of human judgment error from bias (systematic) to noise (variability); shows that evaluators assessing identical cases on different occasions, or different evaluators assessing the same case, diverge far more than organisations assume. The structural remedies overlap closely with observer bias controls.
  - title: "\"Evidence-Based Medicine: What It Is and What It Isn't\""
    authorYear: David L. Sackett et al. (1996), *BMJ*, 312, 71
    supports: the founding manifesto of the evidence-based medicine movement; blinded evaluation and randomised controlled trials are the central methodological commitments, grounded in recognition that unblinded observation produces systematically distorted results.
---

# Observer Bias

**Category:** [Psychology](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Observer bias (also observer-expectancy effect or evaluator bias) is the systematic distortion that occurs when people assessing an outcome know — or believe they know — which condition, group, or candidate they are evaluating. That knowledge contaminates the assessment: evaluators unconsciously weight evidence in the direction of their expectation, apply different standards to different conditions, and arrive at conclusions that confirm what they already suspected. The phenomenon was formalised by Robert Rosenthal (1966) in experimental psychology, and its structural solution — blinded evaluation — originates in clinical trial methodology. The principle applies wherever human judgment is the measuring instrument.

---

## Mental Model

A judge at a wine competition who knows a bottle is expensive will taste it differently than if told it is cheap. An interviewer who has read a candidate's prestigious CV will interpret the same answer more favourably than an interviewer who hasn't. A manager reviewing a team member's work while aware of a recent conflict will read criticism into ambiguous passages. In each case, the evaluator is not lying — they are genuinely experiencing what they expect. The evaluation and the expectation have merged.

The structural fix is separation: the person doing the assessment should not know the information that produces the expectation. When that is impossible, the next best move is to make assessments before revealing identifying information, to use structured rubrics that constrain subjective interpretation, and to aggregate across multiple independent evaluators.

---

## Practitioner Heuristics

- **Evaluate before you reveal.** In any process where prior knowledge could bias assessment (hiring, code review, performance evaluation, grant scoring), structure the evaluation so assessors complete their judgments before they see identifying information. Score the work before you see the name; form a view of the candidate before you review the LinkedIn.
- **Separate assessors from advocates.** People who are invested in an outcome — sponsors of an initiative, line managers of a candidate, authors of a document — should not be the primary evaluators of that outcome's quality. Investment in success and independence of assessment are structurally incompatible.
- **Use structured scoring rubrics.** Rubrics constrain the degrees of freedom available to bias. An assessor who must rate a candidate on five specific dimensions using a defined scale has less room to let halo effects or expectation shape the overall judgment.
- **Aggregate multiple independent evaluations before discussion.** When evaluators discuss before they have committed their individual assessments to writing, the group converges on the view of the most influential voice rather than averaging genuine independent judgment. Commit, then discuss.
- **Name the information that creates expectation.** In any evaluation process, ask: what does each assessor already know that could create a directional expectation? That list is your blinding checklist.

---

## Common Failure Modes

**Treating rigor as impracticality.** "We can't blind everything" is true but is often used to justify blinding nothing. Partial blinding — scoring anonymised written work, forming initial impressions before reading the CV — reduces bias meaningfully even when full blinding is impossible.

**Consensus mistaken for quality.** When evaluators discuss first, apparent consensus reflects convergence on the most dominant voice, not genuine independent agreement. The aggregation of non-independent judgments produces false confidence in the result.

**Structured process, unstructured conclusion.** Running a structured interview or standardised test and then making the final decision on "overall impression" reintroduces exactly the bias the structure was designed to prevent.

**Invisible bias in criteria selection.** Observer bias begins earlier than the evaluation itself: the choice of which criteria matter, what counts as strong evidence, and how to weight trade-offs can all be shaped by who is expected to win. Agreeing on criteria before knowing who or what will be evaluated is the upstream fix.

---

## Worked Example

A firm is hiring for a senior role. Six candidates are shortlisted. The hiring panel runs structured interviews with a scoring rubric covering five criteria. However, two panel members have informally championed specific candidates during the search process. Before scoring sheets are collected, the panel discusses "general impressions." By the time individual scores are submitted, convergence around the championed candidates is near-complete.

Redesign: (1) Criteria and weightings agreed before any candidate is named. (2) Résumés anonymised before initial screen — name, institution names, and tenure dates removed; a neutral coordinator handles de-anonymisation only after a written assessment is submitted. (3) Interview scorecards completed individually and submitted before any panel discussion. (4) Sponsors of candidates recuse from scoring on the dimensions their candidate is strongest on.

Outcome: the hired candidate is not either of the pre-championed individuals. Post-hire performance data at 12 months confirms the decision quality; the championed candidates, tracked through their subsequent hires at other firms, perform at median for the role.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
