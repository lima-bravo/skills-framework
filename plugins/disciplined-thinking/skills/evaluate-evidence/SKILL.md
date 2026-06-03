---
name: "evaluate-evidence"
description: |
  Assesses whether a dataset, analysis, or recommendation should be trusted. Covers Sampling, Regression to the Mean, Randomness, Observer Bias, A/B Testing, and Experiment Design. Use when evaluating data presented to support a decision, when reviewing a consultant's analysis, or when designing evidence-gathering.
metadata:
  plugin: "disciplined-thinking"
  version: "1.0.0"
  sources: "Mathematics/sampling.md,Mathematics/regression-to-the-mean.md,Mathematics/randomness.md,Psychology/observer-bias.md,Business/ab-testing.md,Business/experiment-design.md"
---

# Evaluate Evidence

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Choose a branch

Pick the branch that best matches the situation, then apply its models:

- **Evaluate an existing analysis** — Sampling, Regression to the Mean, Observer Bias
- **Design evidence-gathering** — Experiment Design, A/B Testing, Randomness

## Protocol

### 1. Sampling

**Hold in mind:**
The sample is a window onto the population. The size of the window determines how much you can see; the position of the window determines whether what you see is representative. A large, unbiased sample produces high-confidence generalisations. A small or biased sample produces unreliable ones, regardless of how carefully it is analysed.

**Do:**
- **Always ask: how was this sample drawn?** Convenience samples (users who respond to an email survey, customers who tweet about you, people willing to participate in an interview) are systematically biased toward people with specific characteristics. Interpret their evidence accordingly.
- **Distinguish self-selection bias.** People who select into your sample are different from those who don't. Survey respondents are more engaged; interview participants are more motivated; app review writers are either very happy or very unhappy. These biases distort every generalization.
- **Scale your confidence to your sample size.** A 10-person interview series can generate rich hypotheses but cannot produce valid frequency estimates. A 1,000-person quantitative survey can produce frequency estimates but not rich qualitative insight. Use each for what it can support.
- **Use stratified sampling for heterogeneous populations.** If your customer base has distinct segments, ensure your sample contains proportionate representation from each. An unweighted sample of a heterogeneous population will over-represent the largest or loudest segment.
- **Plan the analysis before drawing the sample.** If the analysis plan is made after seeing the data, the risk of mining for confirming patterns is high. Know what you'll measure and what result would change your conclusion before sampling.

**Avoid:**
- **Survivor bias.** Analysing only the surviving members of a population (successful companies, customers who retained, students who graduated) and drawing conclusions that implicitly exclude non-survivors. The non-survivors are where the most important information about failure modes lives.
- **WEIRD samples.** Social science research conducted on Western, Educated, Industrialized, Rich, Democratic populations and generalized to all humans. The WEIRD population is roughly 12% of the world's population and dramatically non-representative on many dimensions.

### 2. Regression to the Mean

**Hold in mind:**
Every outcome has two components: a stable component (underlying quality or ability) and a random component (luck, noise). Extreme outcomes are extreme precisely because the random component was extreme in that instance. Since the random component has no memory, subsequent measures regress toward the stable component — the mean of the underlying distribution. Failing to account for this leads to misinterpreting natural regression as causal change.

**Do:**
- **Before attributing a change to your action, check whether regression to the mean explains it.** Hired a new sales manager after a terrible quarter; the next quarter improved. Did the manager cause the improvement, or was the terrible quarter partly an extreme low that would have moderated anyway?
- **Reward sustained performance, not single-period extremes.** Individual-period top performers often regress; multi-period top performers are more likely to be genuine outliers. Hire and promote based on sustained track record.
- **In investment, be sceptical of recent extreme performers.** A fund that has produced exceptional returns for two years is more likely to revert toward the mean than continue to outperform — unless there is evidence of a structural advantage that produced the returns.
- **Avoid the intervention trap.** When a bad outcome triggers an intervention, the outcome was likely to improve anyway (regression). The intervention appears to have worked, creating a false belief in its effectiveness. Require proper control conditions before attributing improvement to an intervention.
- **Mean reversion is statistical, not deterministic.** Regression to the mean says the distribution of future outcomes is centerd on the mean — not that any specific future outcome will equal the mean. The variance around the mean is just as important as the central tendency.

**Avoid:**
- **Punishing success and rewarding failure through regression misattribution.** If the top performers are praized and regress, while the bottom performers are criticized and improve, the apparent lesson (praise makes you worse, criticism makes you better) is backwards. Both effects are regression to the mean.
- **Confusing mean reversion with equilibrium return.** In markets, the mean to which things revert is not always the historical average — it may be a changing fundamental value.

### 3. Randomness

**Hold in mind:**
The practitioner holds two questions simultaneously: "Is there a signal here?" and "Given the amount of randomness in this domain, how strong would a real signal need to be for me to detect it reliably?" In high-randomness domains (financial markets, many sports statistics, early-stage startup metrics), what looks like a pattern is frequently noise. In low-randomness domains (production error rates in a stable process), patterns are more reliably informative.

**Do:**
- **Estimate the noise floor before interpreting signals.** What variation would you expect in this metric if nothing was actually changing? Movements within the noise floor are not signals.
- **Require multiple data points before identifying patterns.** A single extreme result is noise. A sustained pattern across many independent observations is more likely to be signal.
- **Separate decisions about the process from inferences about the outcome.** A good decision process can produce a bad outcome; a bad process can produce a good outcome. Evaluate the process quality, not the outcome.
- **In early-stage ventures, almost all metrics are noisy.** Customer counts, cohort sizes, and conversion rates with sample sizes below ~100 are dominated by randomness. Act on them with extreme caution.
- **Use Bayesian reasoning to update beliefs about signal vs. noise.** Strong prior belief that a metric is stable should not be abandoned based on one noisy measurement. Update in proportion to the evidence, not in response to every fluctuation.

**Avoid:**
- **Seeing patterns that aren't there (pareidolia).** The human pattern-recognition system is biased toward false positives — we see faces in clouds, trends in noise, and causality in correlation. In high-randomness domains, this bias is particularly dangerous.
- **Responding to every fluctuation as a signal.** Over-controlling a system based on noise increases variance rather than reducing it. This is the mechanism of "meddling" in quality management systems.

### 4. Observer Bias

**Hold in mind:**
A judge at a wine competition who knows a bottle is expensive will taste it differently than if told it is cheap. An interviewer who has read a candidate's prestigious CV will interpret the same answer more favourably than an interviewer who hasn't. A manager reviewing a team member's work while aware of a recent conflict will read criticism into ambiguous passages. In each case, the evaluator is not lying — they are genuinely experiencing what they expect. The evaluation and the expectation have merged.

The structural fix is separation: the person doing the assessment should not know the information that produces the expectation. When that is impossible, the next best move is to make assessments before revealing identifying information, to use structured rubrics that constrain subjective interpretation, and to aggregate across multiple independent evaluators.

**Do:**
- **Evaluate before you reveal.** In any process where prior knowledge could bias assessment (hiring, code review, performance evaluation, grant scoring), structure the evaluation so assessors complete their judgments before they see identifying information. Score the work before you see the name; form a view of the candidate before you review the LinkedIn.
- **Separate assessors from advocates.** People who are invested in an outcome — sponsors of an initiative, line managers of a candidate, authors of a document — should not be the primary evaluators of that outcome's quality. Investment in success and independence of assessment are structurally incompatible.
- **Use structured scoring rubrics.** Rubrics constrain the degrees of freedom available to bias. An assessor who must rate a candidate on five specific dimensions using a defined scale has less room to let halo effects or expectation shape the overall judgment.
- **Aggregate multiple independent evaluations before discussion.** When evaluators discuss before they have committed their individual assessments to writing, the group converges on the view of the most influential voice rather than averaging genuine independent judgment. Commit, then discuss.
- **Name the information that creates expectation.** In any evaluation process, ask: what does each assessor already know that could create a directional expectation? That list is your blinding checklist.

**Avoid:**
**Treating rigor as impracticality.** "We can't blind everything" is true but is often used to justify blinding nothing. Partial blinding — scoring anonymised written work, forming initial impressions before reading the CV — reduces bias meaningfully even when full blinding is impossible.

**Consensus mistaken for quality.** When evaluators discuss first, apparent consensus reflects convergence on the most dominant voice, not genuine independent agreement. The aggregation of non-independent judgments produces false confidence in the result.

**Structured process, unstructured conclusion.** Running a structured interview or standardised test and then making the final decision on "overall impression" reintroduces exactly the bias the structure was designed to prevent.

**Invisible bias in criteria selection.** Observer bias begins earlier than the evaluation itself: the choice of which criteria matter, what counts as strong evidence, and how to weight trade-offs can all be shaped by who is expected to win. Agreeing on criteria before knowing who or what will be evaluated is the upstream fix.

### 5. A/B Testing

**Hold in mind:**
The core insight of A/B testing is that opinions about what will work — however expert, however senior, however data-informed — are systematically less reliable than evidence about what *does* work under real conditions. Not because experts are wrong (they are often right directionally) but because the gap between "this should work" and "this works by 8% in our specific context with our specific users" is exactly the gap that matters for compounding improvement.

A/B testing converts the question "which version is better?" from an opinion question into an evidence question. Done well, it does three things: it replaces gut feel with measured outcomes; it detects effects too small for intuition to notice but large enough to matter at scale; and it creates an evidence base that accumulates over time rather than resetting with each new team or senior leader.

The failure mode is not testing — it is the organisation of testing. Most A/B testing failures are not statistical; they are procedural: stopping too early, redefining success after seeing results, failing to account for context effects, or running tests that are too small to detect anything meaningful.

**Do:**
- **Define the success metric and minimum detectable effect before running the test.** Deciding what "winning" means after the results are in is the most common way A/B testing generates false confidence. The minimum detectable effect determines sample size: a 0.5% improvement is not detectable in 500 users.
- **Calculate statistical power before starting.** A test that cannot statistically detect the effect you care about is not a test — it is a randomness generator with a dashboard. Power of 80% at your minimum detectable effect is the standard floor; 90% is better for consequential decisions.
- **Run the full sample before deciding.** Stopping a test when results first look good (or bad) inflates false positive rates dramatically. Pre-commit to a sample size and run to completion. Bayesian sequential testing is the valid exception if properly implemented.
- **Test one variable at a time in simple designs.** Multi-variable tests (A/B/C or multivariate) are valid but require proportionally larger samples. Changing multiple things simultaneously makes it impossible to know which change drove the result — unless you have the sample size to support factorial design.
- **Account for novelty effects and seasonality.** Users often respond differently to a new experience simply because it is new, not because it is better. Run tests long enough to allow the novelty to decay (typically 1–2 full usage cycles). Seasonality and external events can confound results in tests run over long periods.
- **Watch for network effects and contamination.** When users interact with each other (social features, marketplaces, referral systems), random assignment at the individual level can contaminate A and B groups. Use cluster randomisation (by geography, cohort, or account) when individual-level randomisation is not valid.

**Avoid:**
**The peeking problem.** Checking results daily and stopping when a significant result appears — even if the pre-planned sample size has not been reached — inflates false positive rates dramatically. A test stopped at first significance will produce spurious wins approximately 30% of the time if checked repeatedly. Fix: pre-register the sample size and don't interpret until it's reached.

**HiPPO override.** The Highest Paid Person's Opinion overrides the test result when the data produces an inconvenient conclusion. A/B testing is only valuable if the organisation is genuinely willing to let the result decide. Where HiPPO override is common, A/B testing becomes a process for generating evidence that gets ignored — which is worse than not testing, because it provides false confidence.

**The local maximum trap.** A/B testing optimises within a design space — it finds the better of two options, not the best option possible. A series of A/B tests that each produce small improvements can navigate toward a local maximum while the global maximum remains unexplored. Incremental testing must be complemented by periodic exploration of fundamentally different alternatives.

**Testing what is easy to measure, not what matters.** Click-through rates, open rates, and micro-conversion metrics are easy to measure; customer lifetime value, long-term retention, and brand perception are harder. Organisations that optimise exclusively for easy-to-measure metrics can win every A/B test while degrading the metrics that matter.

**Sample size too small for the effect being detected.** The most common structural failure: teams run tests on 200 users to detect a 2% improvement. Statistical power makes this impossible. The result is noise interpreted as signal. Fix: calculate required sample size before designing the test, not after.

### 6. Experiment Design

**Hold in mind:**
Every experiment tests a specific hypothesis. The quality of the experiment determines the quality of the evidence generated. Poorly designed experiments (leading questions, small samples, no control group, post-hoc definition of success) produce the appearance of evidence without the substance — they confirm whatever the experimenter wanted to find. The practitioner's commitment: if the experiment doesn't have the potential to produce an answer that would change the decision, it isn't worth running.

**Do:**
- **State the hypothesis in falsifiable form.** "We believe X" should be statable as "if X is true, we will observe Y under conditions Z." If you can't state it in this form, you can't test it.
- **Define success criteria before running the experiment.** What result would you interpret as confirming? What would you interpret as disconfirming? Decide before the data comes in.
- **Calculate statistical power before choosing sample size.** The sample size should be sufficient to detect the minimum effect that would be meaningful. An underpowered experiment that shows no effect has not shown that there is no effect — it has shown that the sample was too small to detect it.
- **Use a control group wherever possible.** Without a control condition, it is impossible to determine whether an observed change was caused by the intervention or by simultaneous external factors.
- **Plan for multiple testing correction.** Running many experiments simultaneously increases the probability of false positives. Use Bonferroni correction or Bayesian methods if running multiple simultaneous tests.

**Avoid:**
- **Stopping early when results look good.** Stopping a test the moment results are favorable inflates false positive rates. Run to the predetermined sample size.
- **Changing the hypothesis post-hoc.** Redefining what "success" means after seeing the data is the most common way to manufacture false validation.
- **HIPPO-driven experiment interpretation.** The Highest-Paid Person's Opinion determining the experiment's conclusion regardless of the data. Experiment design protects against this only if results are published before interpretation is socialized.

## Deliverable format

Produce a markdown document with these sections:

### Analysis or dataset under review

### Sampling audit: is the sample representative? What is excluded?

### Regression to the mean check: is an extreme result being mistaken for a real effect?

### Randomness check: is the pattern real or noise given the sample size?

### Observer bias audit: did the evaluator know which group was which?

### Experiment design quality: was success pre-specified? Was there a control?

### Confidence verdict: should this analysis be trusted, and at what confidence level?

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

- [sampling](references/sampling.md)
- [regression-to-the-mean](references/regression-to-the-mean.md)
- [randomness](references/randomness.md)
- [observer-bias](references/observer-bias.md)
- [ab-testing](references/ab-testing.md)
- [experiment-design](references/experiment-design.md)

