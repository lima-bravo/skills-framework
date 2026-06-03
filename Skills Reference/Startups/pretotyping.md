# Pretotyping
*Make sure you're building the Right It before you build it right*

**Category:** [Innovation & Entrepreneurship](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Pretotyping is a set of techniques, developed by Alberto Savoia at Google, for testing whether a product idea has genuine demand before investing in building it. The name is deliberate: a pretotype comes before a prototype. Where a prototype tests whether you can build something well (a feasibility and quality question), a pretotype tests whether people will actually want it at all (a demand question). Most product failures are not build failures — the teams could have built the product competently. They are demand failures: the product was built for a market that didn't exist or didn't behave as assumed.

The core principle: the biggest risk in innovation is not that you build the wrong product — it's that you spend months building the right product for the wrong assumption about demand. Pretotyping makes that assumption testable in days or weeks, with a fraction of the investment.

---

## Mental Model

Think of the pretotype as a staged commitment architecture. Before you invest in building, you invest in learning whether building is worth it. The investment is asymmetric: a pretotype costs one-hundredth of a prototype and answers the most important question first. If the pretotype fails — no demand — you have lost very little. If it succeeds, you now have evidence of demand before you've committed to production.

Savoia's framing: "Make sure you are building the Right It before you build It right." The prototype answers "are we building It right?" The pretotype answers "is this the Right It?" The sequence matters enormously. Building a high-quality wrong thing is expensive in both money and time.

---

## Pretotype Techniques

**Mechanical Turk (or Wizard of Oz).** Simulate the product experience with human effort behind the scenes, without building the technology. The customer interacts with what appears to be an automated system; a person manually performs the operations. Tests demand and experience without building the engine. Classic example: early food delivery apps where order routing was done manually before the algorithm was built.

**Fake Door.** Create the entry point — a button, a landing page, a menu item — but not the product behind it. Measure clicks, sign-ups, or expressions of intent. The door leads nowhere (or to a "coming soon" message), but the click is real evidence of interest. Answers: if this existed, would people want it? Without the click data, "would people want it?" is an opinion.

**Pinocchio.** Build a non-functional version — a physical mock-up, a cardboard prototype, a click-through mockup with no backend — and observe how people interact with it. Tests whether the concept is understood and whether people's behavior matches their stated intentions. Particularly useful for physical products and interfaces.

**One-night stand.** Run the product experience once, manually, for a single customer. Don't build infrastructure; deliver the experience by hand. Measures whether one real customer actually values the experience enough to complete the interaction. If you can't deliver value to one customer manually, you don't yet understand the experience well enough to automate it.

**Re-label.** Attach your proposed new product or feature to an existing product and measure usage. Tests whether the addition generates demand without building it out. Most useful for features and extensions of existing products.

---

## Practitioner Heuristics

- **Define Your Own Data (DYOD) before running any pretotype.** Savoia's discipline: before the test, write down what result would convince you there is sufficient demand to proceed. Not a hope — a specific threshold. "If 15% of visitors click the Fake Door, we will invest in building." Without a pre-specified threshold, results are always interpretable as "promising enough to continue."
- **Test the market, not the concept.** Asking people "would you use this?" is concept testing — it measures stated intentions, which are notoriously unreliable. Pretotyping measures actual behavior: did they click, did they sign up, did they complete the interaction? Behavior data is an order of magnitude more reliable than survey data.
- **Use the cheapest technique that answers the question.** A Fake Door that takes two days to set up is almost always better than a three-month prototype for answering the demand question. The discipline is to choose the technique by what question it answers, not by what you're comfortable building.
- **Run multiple pretotypes for the same idea in parallel.** Different techniques test different assumptions. A Fake Door tests intent to start; a One-night Stand tests willingness to complete. A high click rate and a low completion rate is a specific finding about where the value chain breaks.
- **Document the pretotype, the DYOD threshold, the result, and the conclusion.** The pretotype record is the first entry in the idea's learning history. If the idea is killed, the record explains why and what was learned. If the idea advances, the record is the first validated assumption in the growing evidence base.

---

## Common Failure Modes

- **Using pretotyping to validate rather than test.** A Fake Door placed where only already-interested users will see it, a One-night Stand delivered to a friendly customer, a Mechanical Turk demo run only for internal stakeholders — these are theater, not tests. The pretotype must expose the idea to the target population, not the most sympathetic possible audience.
- **Confusing pretotype with MVP.** An MVP is a minimal version of the product intended to test value with early adopters — it is a real product, however minimal. A pretotype is not a product; it is a demand signal generator. Building an MVP is the step after pretotyping confirms demand, not an alternative to it.
- **Skipping DYOD.** Without a pre-specified threshold, teams consistently interpret ambiguous results as positive. A 3% Fake Door click rate can be "surprisingly high for a new category" or "demonstrably insufficient" depending on whether anyone wrote down the threshold before the test. The absence of DYOD converts pretotyping from a learning discipline into a confirmation exercise.
- **Treating a negative result as failure.** A pretotype that finds no demand is a success — it prevented investment in the wrong thing. Organizations that punish teams for negative pretotype results will get teams that run rigged pretotypes or skip them entirely.

---

## Worked Example

In the early development of Google Glass, one team wanted to test demand for a prescription eyewear version before investing in the optical engineering required. Rather than building prototype prescription lenses (a months-long, expensive undertaking), the team ran a Fake Door: a dedicated landing page describing prescription Glass, positioned where people already interested in Glass would encounter it. The sign-up rate was tracked against a pre-specified DYOD threshold. The signal was strong enough to justify the optical engineering investment. The same technique — measuring sign-up intent before building — is now a standard practice in Google's product development, embedded as part of the pretotyping canon Savoia formalized from patterns he observed across Google product teams.

---

## Connections

→ [**MVP**](mvp.md) — pretotyping answers the demand question that precedes the MVP; an MVP is built after pretotyping confirms there is an audience worth building for.
→ [**Assumption Mapping**](../Business/assumption-mapping.md) — the DYOD discipline in pretotyping is assumption mapping applied to a single test; assumption mapping identifies which assumption to pretotype first.
→ [**Build-Measure-Learn**](build-measure-learn.md)
→ [**Crawl / Walk / Run**](../Pre-built-Chains/crawl-walk-run.md) — pretotyping is the crawl-stage instrument; the chain shows how it gates into walk and run — pretotyping is an accelerated BML cycle operating before the build investment; it makes the loop cheaper by answering the most critical question at the lowest cost.
→ [**Experiment Design**](../Business/experiment-design.md) — pretotype techniques are specific experiment designs optimized for demand testing; the choice of technique follows from what assumption is being tested.
→ [**Effectuation**](effectuation.md) — the pretotype's DYOD threshold is affordable-loss thinking applied to a single test: commit only what you can afford to lose if the result is negative.
→ [**Probabilistic Thinking**](../General-Thinking/probabilistic-thinking.md) — interpreting pretotype results requires holding the result as a probability update, not a confirmation or refutation; a 12% Fake Door click rate shifts the probability of demand, it doesn't prove or disprove it.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
