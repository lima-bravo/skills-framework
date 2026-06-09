---
id: 213
name: From Idea to Hypothesis
category: Pre-built Chains
cardType: chain
tagline: An idea is a guess. A hypothesis is a bet you can settle.
connections:
  - id: 245
    rationale: the chain that precedes this one; enriches the idea via First Principles + JTBD and runs a strategic fit gate before assumption mapping begins
  - id: 70
    rationale: the pipeline this chain operates within; funnel stage determines the appropriate level of hypothesis rigour
  - id: 180
    rationale: the framework for tracing ideas back to customer outcomes
  - id: 103
    rationale: anchors the opportunity to the functional and emotional job the customer is hiring for
  - id: 73
    rationale: the tool for surfacing and prioritising the belief stack
  - id: 204
    rationale: the discipline that converts assumptions into testable predictions
  - id: 159
    rationale: the sequencing rule for deciding which hypothesis to run first
  - id: 153
    rationale: the commitment that makes experiments meaningful
  - id: 72
    rationale: the method for specifying the minimum test
  - id: 214
    rationale: the chain that takes over from here
---

# From Idea to Hypothesis

**Category:** [Pre-built Chains](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## When to Use

Use this chain when an idea has entered the innovation funnel and you need to decide whether to invest experimental capacity in it — and if so, what exactly to test. The chain converts a raw idea (a belief that something might be valuable) into a well-formed hypothesis (a falsifiable prediction about a specific assumption, with a defined test and explicit success criterion). Without this conversion, experiments confirm rather than test: they are run to validate what the team already believes, not to discover whether the belief is warranted.

Use it at the funnel entry gate — before any experimental capacity is committed — and revisit it when an experiment returns a result that changes what you believe about the opportunity.

---

## Step 1 — Innovation Funnel: Locate the idea and establish its stage

Before doing anything analytical, locate the idea in the funnel: is this an early-stage observation (we noticed something in customer behaviour), a formed concept (we have a specific mechanism in mind), or a partially validated proposition (we have some signal but not enough to commit)? The stage determines how much rigour is appropriate and which assumptions are already partially settled. An idea at observation stage needs customer discovery before it can be hypothesised; an idea at concept stage is ready for assumption mapping; a partially validated idea needs to isolate the remaining unknowns, not re-run what has already been tested.

A common failure at this step: treating all ideas as if they are at the same stage and applying the same process to a raw observation and a near-validated concept. The funnel exists to create stage discipline — use it.

---

## Step 2 — Opportunity Solution Trees / Jobs to Be Done: Anchor to an outcome

Before examining the idea's internal logic, confirm it is connected to a real outcome the customer cares about. Use an Opportunity Solution Tree to map the path: what customer outcome does this idea serve, what opportunity (unmet need or underserved struggle) does it address, and what solution mechanism does it propose? If the idea cannot be placed on the tree — if you cannot trace a path from the solution back to a specific customer outcome — it is not ready to be hypothesised. It needs customer discovery first.

Use Jobs to Be Done to pressure-test the outcome: what job is the customer hiring this solution to do? What are they currently using (however badly) to get the job done? An idea that addresses a job no one is currently trying to do is a much riskier bet than one that addresses a job people are doing with poor tools. Name the job explicitly before proceeding.

---

## Step 3 — Assumption Mapping: Surface everything the idea depends on

Every idea rests on a stack of assumptions — beliefs that must be true for the idea to work. List them all, then map them on two axes: how critical is this assumption to success (if it is wrong, does the idea fail?), and how much evidence do we have that it is true (how certain are we)?

The assumptions in the high-criticality, low-certainty quadrant are your hypothesis candidates. The rest can be monitored or accepted. Common assumption categories: desirability (does the customer want this?), feasibility (can we build it?), viability (will the economics work?), and adoptability (will the customer change their behaviour to use it?). Most teams map desirability assumptions and skip the rest; a complete map covers all four.

At this step, also run an adversarial challenge: ask someone not invested in the idea to name the three assumptions they think are most likely to be wrong. Their nominations often surface blind spots the team has normalised.

---

## Step 4 — Falsification: Restate assumptions as predictions that can be wrong

Take the two or three most critical, least-evidenced assumptions from Step 3 and restate each as a falsifiable prediction: "If this assumption is true, we will observe [specific behaviour / measurable outcome] when we [run specific test] with [defined population]."

This is the hardest step and the most commonly skipped. The test of a good hypothesis is whether a reasonable person could look at the results and say it failed. If the only possible interpretation of the results is confirmation, the hypothesis is not falsifiable — and the experiment that follows will be theatre.

For each hypothesis candidate, ask: what result would cause us to abandon or substantially revise this idea? If you cannot answer that question, the hypothesis needs to be sharpened before it can be tested.

---

## Step 5 — WSJF / Kill Criteria: Decide which hypothesis to run first — or not at all

You now have a set of falsifiable hypothesis candidates. Before committing experimental capacity, sequence them and apply kill criteria.

Sequence using Weighted Shortest Job First: which hypothesis, if settled quickly, would most change what you know about this opportunity? The highest-value hypothesis to test is usually the one whose failure would kill the idea — the riskiest assumption. Test the riskiest assumption first. If it fails, you have avoided investing in all downstream assumptions. If it passes, you have earned the right to invest in the next riskiest.

Apply kill criteria before running anything: under what conditions would you abandon this idea without further testing? If the team cannot agree on a kill condition, the idea has implicit immortality — it will survive any result by reframing. Document the kill conditions. Make them visible. They are the commitment that makes the subsequent experiment meaningful.

---

## Step 6 — Experiment Design: Specify the minimum test

For the leading hypothesis, design the smallest experiment that would produce a credible result. Define: the hypothesis in falsifiable form, the success criterion (what result confirms?), the failure criterion (what result disconfirms?), the method, the sample, and the timeline. The experiment should be as small as possible — not because rigour is unimportant, but because you are at crawl stage: the goal is to find out whether the assumption deserves a walk experiment, not to produce publication-quality evidence.

Hand the output of this step — a completed hypothesis card — to the Crawl / Walk / Run chain. That chain takes over from here.

---

## Output: The Hypothesis Card

A completed pass through this chain produces a single-page hypothesis card:

- **The idea:** one sentence on what is proposed
- **The job:** what the customer is trying to get done
- **The riskiest assumption:** the belief whose failure would kill the idea
- **The hypothesis:** if this assumption is true, we will observe [X] when we [Y] with [Z]
- **Success criterion:** the result that confirms
- **Failure criterion:** the result that disconfirms
- **Kill condition:** the result that ends the idea entirely
- **Minimum experiment:** the crawl test

This card is the input to the Crawl / Walk / Run chain and the standing record of what was decided and why.

---

## Key Failure Modes

**Skipping Step 4.** Assumption mapping without falsification produces a list of things to confirm rather than things to test. The experiment that follows will be designed to pass.

**Treating the hypothesis as a formality.** Teams under delivery pressure write the hypothesis card after the experiment is running, to satisfy a process requirement. The hypothesis must precede the experiment; otherwise the success criteria are set to match the results.

**Testing the easiest assumption, not the riskiest.** The most common sequencing error. Running a desirability experiment when the real uncertainty is feasibility, or vice versa. Test the assumption whose failure would end the idea.

**No agreed kill condition.** Without a pre-defined kill condition, every result is interpreted as a reason to continue. The idea becomes immortal and consumes capacity indefinitely.

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
