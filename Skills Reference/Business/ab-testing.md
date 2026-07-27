---
id: 225
name: A/B Testing
category: Business
cardType: standard
tagline: Let reality choose between two versions — before you commit to either
connections:
  - id: 274
    rationale: A/B testing checks whether a change helps in a live production comparison; AI Evaluation Discipline's regression suite is the pre-production analogue, catching a regression before it ever reaches a live experiment.
  - id: 72
    rationale: A/B testing is the most common operationalisation of experiment design principles in product and marketing practice; the general principles of hypothesis formation, control conditions, and pre-specified criteria apply directly.
  - id: 204
    rationale: "A/B testing is falsification made operational: the test is designed to be capable of producing a negative result, and the result updates a belief."
  - id: 63
    rationale: A/B testing disciplines the "measure" step of the BML loop; it is the quantitative method for learning in validated learning cycles.
  - id: 7
    rationale: statistical significance, power, and confidence intervals are applications of probabilistic thinking; interpreting A/B test results requires comfort with probability, not just outcome metrics.
  - id: 55
    rationale: the peeking problem and HiPPO override are both expressions of confirmation bias corrupting an otherwise valid testing process.
  - id: 120
    rationale: "optimising for easy-to-measure A/B metrics can violate Goodhart's Law: the metric becomes a target and ceases to be a good measure of what matters."
  - id: 224
    rationale: where A/B testing stress-tests hypotheses with live evidence during execution, red teaming attacks plans before commitment; the two are complementary tools for different phases of uncertainty reduction.
  - id: 214
    rationale: 'A/B testing is the primary instrument at the "walk" stage of this chain: does the solution work well enough at limited scale to justify broader rollout?'
references:
  - title: The Design of Experiments
    authorYear: Ronald A. Fisher (1935)
    supports: the foundational statistical framework for controlled trials; introduces random assignment, control conditions, and significance testing as the basis for causal inference from experiments.
  - title: "Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing"
    authorYear: Ron Kohavi, Diane Tang & Ya Xu (2020)
    supports: the definitive practitioner reference from Microsoft Research; covers experimental design, validity threats, and the organisational challenges of running a high-velocity testing programme.
  - title: '"The Surprising Power of Online Experiments"'
    authorYear: Ron Kohavi & Stefan Thomke, *Harvard Business Review* (September–October 2017)
    supports: documents how organisations that run rigorous A/B testing programmes systematically outperform those that rely on intuition; includes analysis of common testing pitfalls.
  - title: The Lean Startup
    authorYear: Eric Ries (2011)
    supports: popularised validated learning and A/B testing as core instruments in the Build-Measure-Learn loop; the book that brought controlled experimentation to mainstream product development.
---

# A/B Testing

**Category:** [Business](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

A/B testing (also called split testing or controlled experimentation) is a method of comparing two versions of something — a product feature, message, price, process, or design — by exposing each version to a randomly assigned subset of a population and measuring a pre-specified outcome metric. The variant that performs better on the outcome metric is selected. The method is grounded in randomised controlled trial design: random assignment eliminates selection bias, a control condition (the "A" or baseline) isolates the effect of the change, and pre-specified success criteria prevent post-hoc rationalisation of results.

A/B testing is the most common operationalisation of Experiment Design in product and marketing practice. Its domain is continuous decision-making under uncertainty: not one-off strategic choices, but the iterative improvement of systems where the output of each test informs the next.

---

## Mental Model

The core insight of A/B testing is that opinions about what will work — however expert, however senior, however data-informed — are systematically less reliable than evidence about what *does* work under real conditions. Not because experts are wrong (they are often right directionally) but because the gap between "this should work" and "this works by 8% in our specific context with our specific users" is exactly the gap that matters for compounding improvement.

A/B testing converts the question "which version is better?" from an opinion question into an evidence question. Done well, it does three things: it replaces gut feel with measured outcomes; it detects effects too small for intuition to notice but large enough to matter at scale; and it creates an evidence base that accumulates over time rather than resetting with each new team or senior leader.

The failure mode is not testing — it is the organisation of testing. Most A/B testing failures are not statistical; they are procedural: stopping too early, redefining success after seeing results, failing to account for context effects, or running tests that are too small to detect anything meaningful.

---

## Practitioner Heuristics

- **Define the success metric and minimum detectable effect before running the test.** Deciding what "winning" means after the results are in is the most common way A/B testing generates false confidence. The minimum detectable effect determines sample size: a 0.5% improvement is not detectable in 500 users.
- **Calculate statistical power before starting.** A test that cannot statistically detect the effect you care about is not a test — it is a randomness generator with a dashboard. Power of 80% at your minimum detectable effect is the standard floor; 90% is better for consequential decisions.
- **Run the full sample before deciding.** Stopping a test when results first look good (or bad) inflates false positive rates dramatically. Pre-commit to a sample size and run to completion. Bayesian sequential testing is the valid exception if properly implemented.
- **Test one variable at a time in simple designs.** Multi-variable tests (A/B/C or multivariate) are valid but require proportionally larger samples. Changing multiple things simultaneously makes it impossible to know which change drove the result — unless you have the sample size to support factorial design.
- **Account for novelty effects and seasonality.** Users often respond differently to a new experience simply because it is new, not because it is better. Run tests long enough to allow the novelty to decay (typically 1–2 full usage cycles). Seasonality and external events can confound results in tests run over long periods.
- **Watch for network effects and contamination.** When users interact with each other (social features, marketplaces, referral systems), random assignment at the individual level can contaminate A and B groups. Use cluster randomisation (by geography, cohort, or account) when individual-level randomisation is not valid.

---

## Common Failure Modes

**The peeking problem.** Checking results daily and stopping when a significant result appears — even if the pre-planned sample size has not been reached — inflates false positive rates dramatically. A test stopped at first significance will produce spurious wins approximately 30% of the time if checked repeatedly. Fix: pre-register the sample size and don't interpret until it's reached.

**HiPPO override.** The Highest Paid Person's Opinion overrides the test result when the data produces an inconvenient conclusion. A/B testing is only valuable if the organisation is genuinely willing to let the result decide. Where HiPPO override is common, A/B testing becomes a process for generating evidence that gets ignored — which is worse than not testing, because it provides false confidence.

**The local maximum trap.** A/B testing optimises within a design space — it finds the better of two options, not the best option possible. A series of A/B tests that each produce small improvements can navigate toward a local maximum while the global maximum remains unexplored. Incremental testing must be complemented by periodic exploration of fundamentally different alternatives.

**Testing what is easy to measure, not what matters.** Click-through rates, open rates, and micro-conversion metrics are easy to measure; customer lifetime value, long-term retention, and brand perception are harder. Organisations that optimise exclusively for easy-to-measure metrics can win every A/B test while degrading the metrics that matter.

**Sample size too small for the effect being detected.** The most common structural failure: teams run tests on 200 users to detect a 2% improvement. Statistical power makes this impossible. The result is noise interpreted as signal. Fix: calculate required sample size before designing the test, not after.

---

## Worked Example

A SaaS company wants to test whether adding a social proof element ("12,000 companies trust us") to its pricing page increases trial sign-ups. The current sign-up rate is 3.2%.

Before running: the team defines success as a 0.8 percentage point improvement (25% relative increase), calculates they need 4,800 users per variant for 80% power at p=0.05, and pre-commits to running for 3 weeks to account for day-of-week effects. They pre-register the success metric as trial sign-ups within 7 days of visiting the page.

At 3 weeks: variant B (with social proof) shows a 3.9% sign-up rate versus 3.1% for the control — a statistically significant improvement that exceeds the minimum detectable effect. The variant is shipped.

Two weeks later, a senior marketer suggests stopping a new test early because "the results look great after 400 users." The team declines: 400 users at a 1% difference has approximately 15% power — the result is statistically meaningless. They run to the required sample.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
