---
id: 206
name: Base Rate Neglect
category: Psychology
cardType: standard
tagline: The vivid case in front of you is not more informative than the thousand cases behind it.
connections:
  - id: 56
    rationale: closely related but distinct mechanisms — base rate neglect ignores a known reference-class statistic in favor of the vivid case in front of you, while availability bias distorts the frequency judgment itself through recall ease rather than through ignoring a known statistic.
  - id: 7
    rationale: base rate neglect is a specific and common failure of probabilistic reasoning; this card operationalises the correction
  - id: 160
    rationale: the formal methodology for applying outside-view base rates to project and investment estimation
  - id: 115
    rationale: base rate neglect is one of the primary mechanisms behind the planning fallacy; plans are assessed on their internal logic rather than the distributional track record of similar plans
  - id: 199
    rationale: both involve misreading a filtered evidence set; survivorship bias distorts the available cases, base rate neglect ignores the distribution they come from
  - id: 204
    rationale: base rate anchoring is a form of outside-view challenge to inside-view narratives; both practices discipline against uncritical acceptance of the case in front of you
  - id: 203
    rationale: the vivid case narrative that overrides the base rate is a product of narrative instinct; the specific story crowds out the statistical background
  - id: 211
    rationale: base rate neglect is the most common source of overconfidence; good calibration requires anchoring on base rates before adjusting for specifics
  - id: 227
    rationale: base rate neglect is the most common source of miscalibrated probabilities feeding into EV calculations — overconfident priors produce overstated expected values.
  - id: 228
    rationale: the most common failure in constructing a Bayesian prior — ignoring base rates means all subsequent updates are anchored incorrectly from the start.
references:
  - title: '"On the Psychology of Prediction"'
    authorYear: Daniel Kahneman & Amos Tversky (1973), *Psychological Review*, 80(4)
    supports: the foundational paper demonstrating that representativeness judgements systematically override base rates; introduced the reference class framework as the correction.
  - title: Thinking, Fast and Slow
    authorYear: Daniel Kahneman (2011)
    supports: the accessible treatment of base rate neglect as a failure of the representativeness heuristic; includes the inside view / outside view distinction and reference class forecasting.
  - title: "Superforecasting: The Art and Science of Prediction"
    authorYear: Philip E. Tetlock & Dan Gardner (2015)
    supports: the empirical study of calibrated forecasting; base rate anchoring is a central discipline of the superforecasters' practice.
  - title: '"From Nobel Prize to Project Management: Getting Risks Right"'
    authorYear: Bent Flyvbjerg (2006), *Project Management Journal*, 37(3)
    supports: demonstrates how reference class forecasting corrects the systematic underestimation that base rate neglect produces in infrastructure and IT projects.
  - title: "How Big Things Get Done: The Surprising Factors That Determine the Fate of Every Project"
    authorYear: Bent Flyvbjerg & Dan Gardner (2023)
    supports: "the practitioner synthesis: why large projects fail predictably and how outside-view base rates are the primary correction tool."
---

# Base Rate Neglect

**Category:** [Psychology](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Base rate neglect — also called base rate fallacy or prior probability neglect — is the tendency to under-weight or ignore statistical background frequencies (base rates) when evaluating a specific case, especially when vivid, specific, or emotionally compelling information about the individual case is available. We treat the case in front of us as exceptional and reason from it directly, instead of anchoring to the prior probability of the outcome across the relevant reference class.

The phenomenon was documented rigorously by Kahneman and Tversky in their work on the representativeness heuristic (1972–1973): when judging whether an individual belongs to a category, people rely on how representative the individual seems of the category rather than on how common the category is. A person who "seems like" an entrepreneur gets assessed as likely to succeed regardless of the background success rate for new ventures. A project that "seems different" from prior failed projects is assessed optimistically regardless of the track record of similar projects.

The correction is explicit reference class forecasting: before reasoning from the specific case, ask what the typical outcome is for cases that look like this one. This does not eliminate individual assessment — it anchors it. Individual factors then shift the estimate up or down from the base rate rather than replacing it entirely.

---

## Mental Model

Imagine estimating the height of a stranger approaching from a distance, before you can see clearly. The base rate is: average adult height is roughly 170cm. As they get closer, specific cues (long legs, upright posture) might shift your estimate to 180cm. You don't discard the base rate and guess 220cm just because the specific cues are vivid. Base rate neglect in reasoning is exactly this error: discarding the prior distribution because the individual case has become vivid. The base rate is the anchor; specific evidence shifts the anchor. It doesn't replace it.

---

## Practitioner Heuristics

- **Before assessing a specific case, ask: "what is the typical outcome for cases in this reference class?"** This is the base rate question. Only after establishing the base rate should you adjust for specific features of the individual case.
- **Use reference class forecasting for project planning.** Instead of asking "how long will this project take?" first ask "how long did similar projects of this type and scale typically take?" Use that distribution as the starting estimate, then adjust for specific factors.
- **Challenge "this time is different" claims explicitly.** When someone argues that a prior base rate doesn't apply, ask them to be specific about which features make this case genuinely different — and how much those features should shift the base rate.
- **In investment and strategic decisions, build a failure rate into the base assumption.** If the base rate for successful acquisitions of this type is 40%, your prior probability should reflect that before you've assessed any specifics of the deal in front of you.
- **Present base rates alongside case assessments.** In written analyses and decision memos, lead with the reference class outcome before introducing the specific case argument. This structures the reader's cognition to anchor first, then adjust.

---

## Common Failure Modes

**The compelling narrative override.** A pitch, proposal, or strategy is presented with vivid specifics — strong team, large market, clear differentiation. The specifics are real and positive. But no reference is made to the base rate of similar propositions succeeding. The vivid story replaces the statistical prior. This is the structural cause of most over-optimism in innovation and investment decisions.

**Unique-case reasoning.** Practitioners argue that the relevant reference class doesn't apply because "this situation is unique." Every situation is unique in some respects; the question is whether it is unique in the respects that determine outcomes. The burden of proof is on demonstrating uniqueness, not asserting it.

**Inside view dominance.** Inside view reasoning focuses on the specific plan, its logic, its resources, and its people. Outside view reasoning starts with the base rate for plans like this one. Research consistently shows that outside-view estimates are better calibrated, especially for novel, ambitious, or complex projects — exactly the situations where inside-view confidence is highest.

**Availability distortion of the base rate.** When a vivid recent success (or failure) is available in memory, people adjust their base rate estimate toward the memorable case rather than the actual distribution. One spectacular recent IPO shifts venture capital base rate intuitions upward; one recent acquisition disaster shifts M&A base rate intuitions downward. Neither adjustment reflects the actual distribution.

---

## Worked Example

An investment committee reviews a seed-stage startup: a magnetic repeat founder, a large and fast-growing market, an impressive early-access waitlist, and a polished demo. Every specific signal is positive, and the room's instinct is that this one is different. What no one states is the base rate — across seed-stage software startups, the large majority return less than the capital invested and only a small fraction produce venture-scale returns. The vivid, representative case has crowded out the prior.

A base-rate-anchored committee reasons the other way around: start from "most seed bets lose money," then ask which specific features genuinely move this one off that prior, and by how much. The founder's track record may justify a real upward adjustment — but it is an adjustment from a low base rate, not a replacement of it. The discipline doesn't make the team more pessimistic; it makes them precise about exactly how much the vivid specifics are worth. The same correction applies wherever a compelling individual case invites you to forget the distribution it came from — a "can't-miss" hire, a "sure-thing" product launch, a "this market is different" expansion.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
