# Experiment Design
*Structure tests to generate valid learning*

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Experiment design is the disciplined process of constructing tests that generate valid, actionable evidence. A well-designed experiment isolates the variable of interest, defines success criteria in advance, uses an appropriate sample size, controls for confounders, and generates evidence that distinguishes between the hypothesis being true and the hypothesis being false. The principles come from scientific methodology and apply wherever a decision must be made under uncertainty.

---

## Mental Model

Every experiment tests a specific hypothesis. The quality of the experiment determines the quality of the evidence generated. Poorly designed experiments (leading questions, small samples, no control group, post-hoc definition of success) produce the appearance of evidence without the substance — they confirm whatever the experimenter wanted to find. The practitioner's commitment: if the experiment doesn't have the potential to produce an answer that would change the decision, it isn't worth running.

---

## Practitioner Heuristics

- **State the hypothesis in falsifiable form.** "We believe X" should be statable as "if X is true, we will observe Y under conditions Z." If you can't state it in this form, you can't test it.
- **Define success criteria before running the experiment.** What result would you interpret as confirming? What would you interpret as disconfirming? Decide before the data comes in.
- **Calculate statistical power before choosing sample size.** The sample size should be sufficient to detect the minimum effect that would be meaningful. An underpowered experiment that shows no effect has not shown that there is no effect — it has shown that the sample was too small to detect it.
- **Use a control group wherever possible.** Without a control condition, it is impossible to determine whether an observed change was caused by the intervention or by simultaneous external factors.
- **Plan for multiple testing correction.** Running many experiments simultaneously increases the probability of false positives. Use Bonferroni correction or Bayesian methods if running multiple simultaneous tests.

---

## Common Failure Modes

- **Stopping early when results look good.** Stopping a test the moment results are favorable inflates false positive rates. Run to the predetermined sample size.
- **Changing the hypothesis post-hoc.** Redefining what "success" means after seeing the data is the most common way to manufacture false validation.
- **HIPPO-driven experiment interpretation.** The Highest-Paid Person's Opinion determining the experiment's conclusion regardless of the data. Experiment design protects against this only if results are published before interpretation is socialized.

---

## Worked Example

An e-commerce team is testing whether a new checkout flow improves conversion. They define the hypothesis ("the new flow increases checkout conversion by at least 5%"), calculate that they need 2,000 users per variant to detect a 5% difference with 80% power, run the test for the required duration with no peeking at results, and analyse only when the sample size is reached. The result: a 4.8% improvement (below threshold). They persevere with the test and, after reaching 4,000 users per variant, see a 6.2% improvement. Pre-defined criteria prevented a premature decision in either direction.

---

## Connections

→ [**Build-Measure-Learn**](../Startups/build-measure-learn.md) — experiment design disciplines the "measure" step of the BML cycle.
→ [**Probabilistic Thinking**](../General-Thinking/probabilistic-thinking.md) — statistical significance and power are applications of probabilistic thinking to experiment design.
→ [**Confirmation Bias**](../Psychology/confirmation-bias.md) — rigorous experiment design is the structural antidote to confirmation bias in analysis.
→ [**Observer Bias**](../Psychology/observer-bias.md) — a control group is necessary but not sufficient; blinded evaluation ensures assessors cannot unconsciously align measurements with expectations.
→ [**Crawl / Walk / Run**](../Pre-built-Chains/crawl-walk-run.md) — experiment design disciplines every stage of this chain; the chain specifies what question to answer, experiment design specifies how to answer it validly
→ [**A/B Testing**](ab-testing.md) — A/B testing is the most common operationalisation of experiment design in product and marketing practice; the general principles here govern the specifics there
→ [**Cynefin Framework**](../General-Thinking/cynefin-framework.md) — in Complex domains, experiments replace analysis as the primary evidence-generating method; Cynefin prescribes when to use safe-to-fail probing over upfront planning.
→ [**Theory of Change**](../General-Thinking/theory-of-change.md) — the assumptions in a Theory of Change are hypotheses; experiment design is the method for testing them rigorously before the programme commits to scale.

## References

- *The Design of Experiments* — Ronald A. Fisher (1935) — the foundational text of controlled experimental design and statistical validity.
- *Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing* — Ron Kohavi, Diane Tang & Ya Xu (2020) — the modern practitioner guide to experiment design in digital products.


---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
