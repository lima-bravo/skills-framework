---
name: "test-and-validate"
description: "Designs and sequences experiments to validate a solution hypothesis with minimum effort. Grounded in Pretotyping, MVP, Build-Measure-Learn, and the Experiment Ladder. Use when moving from problem to solution space."
metadata:
  plugin: "innovation-strategy"
  version: "1.0.0"
  sources: "Startups/pretotyping.md,Startups/mvp.md,Startups/build-measure-learn.md,Startups/experiment-ladder.md"
---

# Test And Validate

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. Pretotyping

**Hold in mind:**
Think of the pretotype as a staged commitment architecture. Before you invest in building, you invest in learning whether building is worth it. The investment is asymmetric: a pretotype costs one-hundredth of a prototype and answers the most important question first. If the pretotype fails — no demand — you have lost very little. If it succeeds, you now have evidence of demand before you've committed to production.

Savoia's framing: "Make sure you are building the Right It before you build It right." The prototype answers "are we building It right?" The pretotype answers "is this the Right It?" The sequence matters enormously. Building a high-quality wrong thing is expensive in both money and time.

**Do:**
- **Define Your Own Data (DYOD) before running any pretotype.** Savoia's discipline: before the test, write down what result would convince you there is sufficient demand to proceed. Not a hope — a specific threshold. "If 15% of visitors click the Fake Door, we will invest in building." Without a pre-specified threshold, results are always interpretable as "promising enough to continue."
- **Test the market, not the concept.** Asking people "would you use this?" is concept testing — it measures stated intentions, which are notoriously unreliable. Pretotyping measures actual behavior: did they click, did they sign up, did they complete the interaction? Behavior data is an order of magnitude more reliable than survey data.
- **Use the cheapest technique that answers the question.** A Fake Door that takes two days to set up is almost always better than a three-month prototype for answering the demand question. The discipline is to choose the technique by what question it answers, not by what you're comfortable building.
- **Run multiple pretotypes for the same idea in parallel.** Different techniques test different assumptions. A Fake Door tests intent to start; a One-night Stand tests willingness to complete. A high click rate and a low completion rate is a specific finding about where the value chain breaks.
- **Document the pretotype, the DYOD threshold, the result, and the conclusion.** The pretotype record is the first entry in the idea's learning history. If the idea is killed, the record explains why and what was learned. If the idea advances, the record is the first validated assumption in the growing evidence base.

**Avoid:**
- **Using pretotyping to validate rather than test.** A Fake Door placed where only already-interested users will see it, a One-night Stand delivered to a friendly customer, a Mechanical Turk demo run only for internal stakeholders — these are theater, not tests. The pretotype must expose the idea to the target population, not the most sympathetic possible audience.
- **Confusing pretotype with MVP.** An MVP is a minimal version of the product intended to test value with early adopters — it is a real product, however minimal. A pretotype is not a product; it is a demand signal generator. Building an MVP is the step after pretotyping confirms demand, not an alternative to it.
- **Skipping DYOD.** Without a pre-specified threshold, teams consistently interpret ambiguous results as positive. A 3% Fake Door click rate can be "surprisingly high for a new category" or "demonstrably insufficient" depending on whether anyone wrote down the threshold before the test. The absence of DYOD converts pretotyping from a learning discipline into a confirmation exercise.
- **Treating a negative result as failure.** A pretotype that finds no demand is a success — it prevented investment in the wrong thing. Organizations that punish teams for negative pretotype results will get teams that run rigged pretotypes or skip them entirely.

### 2. MVP

**Hold in mind:**
The practitioner holds two products in mind simultaneously: the eventual product they want to build, and the MVP — the minimum that generates the learning needed to justify building the eventual product. The discipline is in identifying which assumptions are riskiest (the ones that, if wrong, most invalidate the business) and designing the minimum test for exactly those assumptions. Everything else is deferred.

**Do:**
- **MVP is defined by the riskiest assumption, not by engineering convenience.** Ask: "What is the single thing that, if we're wrong about it, makes this entire venture not worth pursuing?" The MVP tests that thing.
- **The MVP is not the first version of the product.** It may not be a product at all — it could be a video, a landing page, a manually executed service, a wizard-of-oz prototype. Use whatever cheapest possible version generates the learning.
- **Don't use MVP as an excuse for poor quality in the assumptions you're actually testing.** The MVP can be low-fidelity in everything except the specific dimension being tested. A shoddy test of a real hypothesis is worse than a polished test of the wrong hypothesis.
- **Define the metric that the MVP must move.** Not "users seemed to like it" but "X% of users took Y action within Z days."
- **Sequence MVPs to de-risk assumptions in order of importance.** The most dangerous assumption first, then progressively less dangerous assumptions, each MVP building on the validated foundation of the previous.

**Avoid:**
- **Minimum vanity product.** A product that is technically "minimal" but tests irrelevant assumptions. The result looks like lean methodology and produces no useful learning.
- **No definition of "viable."** Without a clear threshold for what constitutes a success signal, the MVP produces ambiguous results that get interpreted in whatever direction the team prefers.
- **Feedback from non-target users.** Testing with convenient users (friends, family, colleagues) rather than the actual target segment produces misleading signals.

### 3. Build-Measure-Learn

**Hold in mind:**
The loop inverts traditional product development. Instead of building comprehensively, then measuring, then learning (long cycle, expensive iteration), the loop builds only what is necessary to generate a specific learning, measures immediately, and updates the hypothesis. Each cycle is a designed experiment. The practitioner is always asking: "What is the cheapest possible test that would tell me whether my key assumption is true?"

**Do:**
- **Start with the learning, not the build.** Define the hypothesis before deciding what to build. "We believe [type of user] will do [behavior] because [reason]" is a testable hypothesis. The build is whatever cheapest test generates the confirming or disconfirming data.
- **Minimize cycle time ruthlessly.** The value of the loop comes from speed. A weekly learning cycle produces 52 data points per year; a quarterly cycle produces 4. Reduce everything that adds time without adding learning.
- **Distinguish build loops from measure loops.** Some learnings require something to be built; others can be generated through interviews, surveys, or observation. Don't default to building when a conversation or a landing page test suffices.
- **Define what "success" looks like before running the experiment.** Post-hoc interpretation of results is contaminated by confirmation bias. Set the threshold before building.
- **Learning that says "stop" is as valuable as learning that says "continue."** The loop is not designed only to produce green lights. A red light that saves six months of building in the wrong direction is a significant return on the loop investment.

**Avoid:**
- **Building without measuring.** Teams that build features or products without designing a measurement into the cycle learn by accident, if at all.
- **Measuring without learning.** Collecting data that doesn't resolve the hypothesis — measuring vanity metrics or the wrong outcomes.
- **Underpowered experiments.** Running experiments with too small a sample size to distinguish signal from noise, then making decisions from the underpowered result.

### 4. Experiment Ladder

**Hold in mind:**
Think of the ladder as matching tool to task. A carpenter who uses a sledgehammer to drive a finishing nail, or a tack hammer to knock out a load-bearing wall, is not wrong about the goal — they are using the wrong instrument for the job. The same applies to experiments: an interview cannot tell you whether people will actually pay; an MVP cannot tell you whether a problem is real.

The ladder has four levels, each suited to a different class of assumption:

**Discovery** (cheapest, weakest evidence). Qualitative exploration of whether a problem exists, who has it, and how they currently experience it. Methods: customer interviews, observation, ethnography, day-in-the-life research. What it can answer: "Is this a real problem? Who struggles with it? How do they describe it?" What it cannot answer: whether people will pay, whether the product will work, or whether the business model is viable.


**Do:**
- **Match the experiment level to the assumption class, not to your comfort zone.** The instinct to build something tangible is strong but often premature. If the assumption is "this problem is painful enough to warrant a solution," a discovery interview is the right instrument. An MVP at that stage is not better evidence — it is slower and more expensive evidence of the same thing, mixed with confounding signals about execution quality.
- **Climb the ladder only when lower-level evidence is sufficient.** Move from discovery to simulation only when you have enough confidence in the problem to test desirability. Move from simulation to product only when demand signals are strong enough to justify building. Each rung requires passing the previous one — not because you must, but because skipping rungs means buying evidence you haven't yet earned the right to need.
- **Define what result would be sufficient to move up before you run the experiment.** What would an interview finding need to show for you to proceed to a simulation test? What would a landing page conversion rate need to be before building a prototype? Pre-defining these thresholds prevents motivated reasoning about the results.
- **Use the ladder to allocate testing resources, not just choose methods.** Discovery is cheap and fast — run many. Simulations are cheap enough to run several variants simultaneously. Product experiments are expensive — run one, with discipline. Business model experiments are the most expensive — they should be rare and well-prepared.
- **Treat the ladder as a risk-reduction sequence, not a delay tactic.** The goal is not to defer building indefinitely. It is to arrive at the build decision having falsified the assumptions most likely to make the product fail — so that when you build, you build with higher confidence and fewer wasted features.

**Avoid:**
- **Defaulting to the MVP for every assumption.** The MVP is a product experiment. It is appropriate for testing whether a product solves a problem. It is not appropriate for testing whether the problem exists, whether demand signals are real, or whether the pricing model works. Teams that treat the MVP as the universal testing instrument skip the cheaper rungs and buy expensive evidence for questions that didn't require it.
- **Using discovery methods to answer business model questions.** Asking customers "would you pay for this?" in an interview is a simulation question posed in a discovery format. Customers say yes in interviews and do not pay when the moment arrives. If the assumption is about willingness to pay, the right experiment is a pre-order or a fake door with a pricing page — something that asks for a real commitment, not a hypothetical one.
- **Running experiments without pre-defined success criteria.** An experiment without pre-defined success criteria is an exploration with extra steps. It will confirm whatever the team wants to believe. Define what result would be sufficient to advance, insufficient to advance, and sufficient to stop — before running.
- **Treating the ladder as linear when the situation calls for parallel testing.** Different assumptions can and should be tested simultaneously when they are independent. Waiting to finish discovery before starting any simulation work slows learning unnecessarily. Parallel test tracks on independent assumptions are often the right call.
- **Confusing evidence strength with decision certainty.** A strong experiment reduces uncertainty; it does not eliminate it. Business model pilots can still fail to predict scale behavior. The ladder helps you buy enough evidence to decide — not enough evidence to guarantee.

## Deliverable format

Produce a markdown document with these sections:

### Hypothesis to test (if we do X, we expect Y, because Z)

### Riskiest assumption (what must be true for this to work)

### Experiment type and rationale (pretotype → MVP → scaled test)

### Success criteria and falsification threshold

### What to build, measure, and learn — in that sequence

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

## Reference cards

- [pretotyping](references/pretotyping.md)
- [mvp](references/mvp.md)
- [build-measure-learn](references/build-measure-learn.md)
- [experiment-ladder](references/experiment-ladder.md)

