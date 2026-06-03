# Crawl / Walk / Run
*Each stage earns the right to the next. Failing the gate is not failure — running past it is.*

**Category:** [Pre-built Chains](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## When to Use

Use this chain when you have a well-formed hypothesis (from the From Idea to Hypothesis chain) and are ready to commit experimental capacity. The chain runs the hypothesis through three sequenced stages, each with a binary gate question and pre-defined kill criteria. Pass the gate or stop — there is no "proceed with reservations" in a working crawl/walk/run discipline.

The chain applies to any hypothesis where the cost and complexity of real-world testing significantly exceeds the cost of a controlled test, which means almost any hypothesis in an innovation funnel. It is equally applicable to algorithmic experiments (does the model work? does it work well enough? does it work on production data?), product experiments (does the feature create value? enough to justify the build? in real usage conditions?), and process experiments (does this intervention change behaviour? durably? at scale?).

---

## The discipline

Crawl/walk/run is not a project plan. It is a commitment to stage-gated learning: the result at each stage determines whether the next stage is earned, not whether the timeline permits it. The most common failure is treating crawl and walk as formalities that precede the "real" run experiment — running all three simultaneously or compressing the sequence under delivery pressure. When stages are not gates, they are theatre.

The kill criteria at each gate are not optional. They are the promise made before the experiment begins about what failure looks like. Without that promise, every result gets interpreted as a reason to continue.

---

## Crawl — Does it work?

**The gate question:** Is there any evidence that the core mechanism produces the predicted effect?

The crawl stage tests basic feasibility: can this thing do what we claim it does, under the most favourable conditions we can create? This is not a market test, a scalability test, or a production test. It is the smallest possible signal that the mechanism is real.

**Instrument:** Pretotyping or a minimal prototype — the lightest version that exercises the core assumption without building the supporting infrastructure. If the hypothesis is about an algorithm, crawl means testing on clean, curated, controlled data. If it is about a product behaviour, crawl means a wizard-of-oz or concierge test. The goal is not to impress; it is to find out.

**Experiment Design:** Before running crawl, define the success criterion in writing. What result would constitute evidence that the mechanism works? What would constitute evidence that it does not? Both must be specified before the experiment runs — not after the results come in. An underpowered crawl that shows no effect has not shown the mechanism fails; it has shown the test was too weak to detect it. Size the crawl appropriately for the signal you are looking for.

**Observer Bias:** The crawl stage is where observer bias does its most damage. The team that built the prototype is the worst evaluator of whether it works — they see what they built, not what it does. Where possible, have the evaluation conducted by someone who does not know which condition they are assessing. At minimum, commit the success criterion to writing before anyone looks at the results.

**Kill Criteria:** If the crawl does not pass the gate, stop. Do not proceed to walk. The crawl exists to avoid investing walk-stage resources in a mechanism that does not work under ideal conditions. A mechanism that cannot pass crawl will not pass walk or run — and discovering that at run stage is far more expensive than discovering it now. Kill criteria at crawl should be aggressive: if the effect is not visible under controlled conditions, there is no mechanism to scale.

---

## Walk — Does it work well enough?

**The gate question:** Is the effect large enough, consistent enough, and reliable enough to justify real-world deployment?

The walk stage tests performance against a threshold. It is not enough that the mechanism works; it must work *well enough* to justify the cost and risk of the run stage. Walk experiments run under more realistic conditions than crawl — larger samples, less curation, more representative inputs — but still with controlled variables, explicit comparison conditions, and a measurement design that can distinguish signal from noise.

**Build-Measure-Learn:** The walk stage often runs multiple learning cycles rather than a single experiment. Each cycle should answer one question about performance: does the effect hold across different subgroups? does it degrade under realistic noise? does it maintain performance over time? Run the minimum number of cycles needed to answer these questions — not the maximum. Walk is not a development stage; it is still a learning stage.

**Statistical Variability:** The most common walk-stage failure is misreading noise as signal. An effect that appears in one cycle and disappears in the next is not a real effect — it is variability. Before concluding that walk has passed, ask: is this result reproducible? If you ran this experiment again with a different sample, would you expect the same result? Use appropriate statistical methods to distinguish real effects from sampling variation, and pre-commit to the sample size needed to detect the minimum meaningful effect before you start.

**Calibration:** Walk is where "good enough" is defined and tested — which means walk is where self-deception is most dangerous. The threshold for "good enough" should have been set before crawl passed, not after walk results are available. A threshold set after seeing walk results will be set at whatever the results show. Ask: was this threshold agreed before the crawl gate? If not, go back and agree it now — before looking at walk results.

A well-calibrated walk criterion accounts for degradation in the run stage. Real-world conditions are worse than walk conditions. If walk performance is marginal, it will not improve at run. Set the walk threshold at a level that provides a realistic buffer for real-world conditions.

**Kill Criteria:** If walk performance does not clear the threshold, stop. Do not proceed to run hoping that real data will save the result. Walk failure means the mechanism is not performing well enough to justify production testing. The two most common reasons teams run past a failed walk gate: sunk cost (we have already invested in this) and optimism (run conditions might be different). Neither is a valid reason to continue. The kill condition was set before the experiment; honour it.

---

## Run — Does it work well enough on real data?

**The gate question:** Does the mechanism deliver the predicted effect when operating on real, uncontrolled, production-quality data — and does that performance justify deployment?

The run stage tests real-world validity. Real data is messier, more variable, and less cooperative than walk data. Edge cases appear. Integration points break. Assumptions that held in controlled conditions reveal themselves as assumptions. The run stage is not a formality that follows a successful walk — it is a genuine test, and it should be designed to fail if the mechanism is not ready.

**Empirical Process Control:** Run-stage experiments must be governed by empirical discipline: transparency (you can see exactly what is happening), inspection (you are actively monitoring the right signals), and adaptation (you change the experiment design when what you observe tells you to). The temptation at run stage is to declare success based on partial results and move toward deployment. Resist it. Run until the pre-defined criteria are met — or until the kill criteria trigger.

Design the run stage so that you can see what is happening in real time. Instrumentation is not optional; if the run stage cannot produce reliable observability, it is not ready to run.

**Reference Class Forecasting:** Before interpreting run results, apply the outside view: what happened when comparable experiments ran on comparable real-world data? This disciplines against both over-optimism (this result is better than the reference class; is it real or are we misreading noise?) and under-optimism (this result is at the low end of the reference class; is this a problem or within normal variation?). The reference class is your calibration instrument for run-stage interpretation.

**Flow Metrics / DORA Metrics:** Depending on what is being tested, run-stage measurement may include operational metrics — not just whether the mechanism works, but whether it works within the operational constraints of deployment. An algorithm that performs well but cannot run within latency requirements has not passed run. A process intervention that improves the target metric but degrades a related metric has not passed run. Define the full set of metrics before the run stage begins, including the ones the mechanism is not supposed to affect — your guardrail metrics.

**Kill Criteria:** A failed run gate means no deployment. This is the hardest kill decision to make because it comes after the most investment. Common failure modes: reinterpreting the kill criteria to exclude the result that triggered them ("that edge case isn't representative"); extending the run stage indefinitely to collect more data; proceeding to deployment with known run-stage failures flagged as "known limitations." None of these is acceptable if the kill criteria were set honestly before the experiment began.

A failed run gate is not waste. It is the most important output the chain can produce. It has protected the organisation from deploying something that would have failed in production — and the earlier it was detected, the less expensive that protection was.

---

## Governing the Gates

Each gate transition requires a formal decision, not a default. Before the crawl gate: confirm kill criteria are documented and agreed. At the crawl gate: compare results to success criterion, decide pass/kill, document the decision and the reasoning. At the walk gate: same. At the run gate: same, plus a deployment-readiness assessment that considers operational integration, guardrail metrics, and monitoring design.

Gate decisions should be made by people who were not running the experiment. The team closest to the work has the strongest incentive to pass the gate — even unconsciously. An independent gate reviewer does not need to be hostile; they need to be honest. Their job is to ask the question the team has stopped asking: does this result actually meet the criterion we set?

The record of gate decisions — what was decided, why, and what the results showed — is the institutional memory that makes subsequent experiments faster and better calibrated. Organisations that skip the documentation produce experiments that have to be re-run because no one can remember what was learned.

---

## Connections

→ [**From Idea to Hypothesis**](from-idea-to-hypothesis.md) — the chain that precedes this one; produces the hypothesis card that specifies the crawl experiment
→ [**Pretotyping**](../Startups/pretotyping.md) — the crawl-stage instrument for testing mechanism feasibility at minimal cost
→ [**MVP**](../Startups/mvp.md) — the crawl-stage instrument when a product interaction is needed to test the assumption
→ [**Experiment Design**](../Business/experiment-design.md) — the method for designing valid experiments at every stage
→ [**Observer Bias**](../Psychology/observer-bias.md) — the risk at crawl stage; the team that built the thing should not be the primary evaluator of whether it works
→ [**Kill Criteria**](../Delivery-and-Flow/kill-criteria.md) — the commitment at every gate; without pre-defined kill criteria, the chain has no gates, only stages
→ [**Build-Measure-Learn**](../Startups/build-measure-learn.md) — the learning cycle that runs inside the walk stage
→ [**Statistical Variability**](../Delivery-and-Flow/statistical-variability.md) — the discipline for distinguishing real walk-stage effects from noise
→ [**Calibration**](../General-Thinking/calibration.md) — the honesty check on whether "good enough" thresholds were set before or after seeing the results
→ [**Empirical Process Control**](../Delivery-and-Flow/empirical-process-control.md) — the governing principle for the run stage: transparency, inspection, adaptation
→ [**Reference Class Forecasting**](../Delivery-and-Flow/reference-class-forecasting.md) — the outside-view calibration instrument for interpreting run-stage results
→ [**Flow Metrics**](../Delivery-and-Flow/flow-metrics.md) — the operational measurement layer for run-stage experiments on process or delivery mechanisms
→ [**Falsification**](../Psychology/falsification.md) — the principle that makes every gate honest: results must be capable of disconfirming, not just confirming

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
