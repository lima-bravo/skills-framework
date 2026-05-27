# Experiment Ladder
*Use the cheapest experiment that can adequately falsify the assumption*

**Category:** [Innovation & Entrepreneurship](../index.html#innovation--entrepreneurship) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

The Experiment Ladder, developed by David Bland and Alexander Osterwalder in *Testing Business Ideas* (2019), is a framework for selecting the right type of experiment given what you need to learn and how much evidence you actually require. It organizes experiment types in ascending order of evidence strength and cost — from cheap, qualitative discovery at the bottom to expensive, quantitative business model tests at the top. The governing principle is that you should always use the cheapest experiment that can adequately falsify the specific assumption you are testing. Overshooting wastes resources and slows learning; undershooting produces insufficient evidence to act on.

The Experiment Ladder sits between [Assumption Mapping](../Business/assumption-mapping.md) (which tells you *what* to test and in what order) and [Experiment Design](../Business/experiment-design.md) (which tells you *how* to run any individual test rigorously). Without the ladder, teams tend to default to one experiment type for everything — usually the MVP — regardless of whether it is appropriate for the assumption being tested.

---

## Mental Model

Think of the ladder as matching tool to task. A carpenter who uses a sledgehammer to drive a finishing nail, or a tack hammer to knock out a load-bearing wall, is not wrong about the goal — they are using the wrong instrument for the job. The same applies to experiments: an interview cannot tell you whether people will actually pay; an MVP cannot tell you whether a problem is real.

The ladder has four levels, each suited to a different class of assumption:

**Discovery** (cheapest, weakest evidence). Qualitative exploration of whether a problem exists, who has it, and how they currently experience it. Methods: customer interviews, observation, ethnography, day-in-the-life research. What it can answer: "Is this a real problem? Who struggles with it? How do they describe it?" What it cannot answer: whether people will pay, whether the product will work, or whether the business model is viable.

**Simulation** (low cost, moderate evidence). Testing demand signals and desirability before anything real is built. Methods: fake door tests, landing pages, smoke tests, paper prototypes, explainer videos, mock brochures. What it can answer: "Would people take an action — click, sign up, request access, express intent — if this existed?" What it cannot answer: whether the product actually solves the problem at the expected quality level, or whether people will remain customers after first use.

**Product** (medium cost, stronger evidence). Testing whether a real — if minimal — product solves the problem satisfactorily. Methods: wizard-of-oz (simulate the product manually), concierge (manually deliver the outcome), single-feature prototype, MVP. What it can answer: "Does this product solve the problem well enough that customers use it and return?" What it cannot answer: whether the business model around the product is economically viable at scale.

**Business model** (highest cost, strongest evidence). Testing whether the full commercial model — pricing, channel, unit economics, partnerships — works. Methods: pre-orders, pilot programs, letters of intent, channel experiments, pricing experiments, paid pilots. What it can answer: "Will customers pay, at this price, through this channel, at a volume that makes the model work?"

The ladder is not a sequence you must climb step by step. It is a decision tool: given the assumption I need to test, at what level does it live, and what is the cheapest experiment at that level that can falsify it?

---

## Practitioner Heuristics

- **Match the experiment level to the assumption class, not to your comfort zone.** The instinct to build something tangible is strong but often premature. If the assumption is "this problem is painful enough to warrant a solution," a discovery interview is the right instrument. An MVP at that stage is not better evidence — it is slower and more expensive evidence of the same thing, mixed with confounding signals about execution quality.
- **Climb the ladder only when lower-level evidence is sufficient.** Move from discovery to simulation only when you have enough confidence in the problem to test desirability. Move from simulation to product only when demand signals are strong enough to justify building. Each rung requires passing the previous one — not because you must, but because skipping rungs means buying evidence you haven't yet earned the right to need.
- **Define what result would be sufficient to move up before you run the experiment.** What would an interview finding need to show for you to proceed to a simulation test? What would a landing page conversion rate need to be before building a prototype? Pre-defining these thresholds prevents motivated reasoning about the results.
- **Use the ladder to allocate testing resources, not just choose methods.** Discovery is cheap and fast — run many. Simulations are cheap enough to run several variants simultaneously. Product experiments are expensive — run one, with discipline. Business model experiments are the most expensive — they should be rare and well-prepared.
- **Treat the ladder as a risk-reduction sequence, not a delay tactic.** The goal is not to defer building indefinitely. It is to arrive at the build decision having falsified the assumptions most likely to make the product fail — so that when you build, you build with higher confidence and fewer wasted features.

---

## Common Failure Modes

- **Defaulting to the MVP for every assumption.** The MVP is a product experiment. It is appropriate for testing whether a product solves a problem. It is not appropriate for testing whether the problem exists, whether demand signals are real, or whether the pricing model works. Teams that treat the MVP as the universal testing instrument skip the cheaper rungs and buy expensive evidence for questions that didn't require it.
- **Using discovery methods to answer business model questions.** Asking customers "would you pay for this?" in an interview is a simulation question posed in a discovery format. Customers say yes in interviews and do not pay when the moment arrives. If the assumption is about willingness to pay, the right experiment is a pre-order or a fake door with a pricing page — something that asks for a real commitment, not a hypothetical one.
- **Running experiments without pre-defined success criteria.** An experiment without pre-defined success criteria is an exploration with extra steps. It will confirm whatever the team wants to believe. Define what result would be sufficient to advance, insufficient to advance, and sufficient to stop — before running.
- **Treating the ladder as linear when the situation calls for parallel testing.** Different assumptions can and should be tested simultaneously when they are independent. Waiting to finish discovery before starting any simulation work slows learning unnecessarily. Parallel test tracks on independent assumptions are often the right call.
- **Confusing evidence strength with decision certainty.** A strong experiment reduces uncertainty; it does not eliminate it. Business model pilots can still fail to predict scale behavior. The ladder helps you buy enough evidence to decide — not enough evidence to guarantee.

---

## Worked Example

A team is evaluating whether to build a B2B SaaS product that automates a specific compliance reporting workflow. Their Assumption Map surfaces four critical, low-evidence assumptions: (1) compliance teams find the current process painful enough to seek a solution; (2) they would actively look for a tool rather than continuing to use spreadsheets; (3) a software product can reliably produce compliant output; (4) procurement teams will approve the spend given existing budget constraints.

Each assumption lives at a different rung:

Assumption 1 is a **discovery** question. They run twelve interviews with compliance managers. Ten describe the process as a significant time sink; eight mention it as a recurring source of stress before quarterly reporting. Sufficient evidence: the problem is real. Move up.

Assumption 2 is a **simulation** question. They build a landing page describing the product, buy a small amount of targeted search advertising on compliance workflow keywords, and measure whether people sign up for early access. Conversion at 12% (well above their 5% threshold). Sufficient evidence: demand signals are real. Move up.

Assumption 3 is a **product** question. They build a wizard-of-oz prototype: the customer uploads their data, a human expert manually produces the compliant output in the background, and the customer receives it as if the software had run. Three pilot customers use it for one reporting cycle. Output quality is rated acceptable or better by all three. The team identifies two edge cases the product logic must handle. Sufficient evidence. Move up.

Assumption 4 is a **business model** question. They present a pricing proposal to five of their pilot participants and ask for a letter of intent at a specific annual price. Three of five sign. The two who don't cite budget timing, not price sensitivity. Sufficient evidence to proceed to build.

The team has now tested all four critical assumptions — in ascending order of cost — before committing to full development. Total time: eleven weeks. Total cost: interviews plus ad spend plus one human's time for three reporting cycles plus a pricing deck. Compared to building the full product and discovering at launch that compliance teams would not pay for it: a fraction of the cost, and recoverable.

---

## Connections

→ [**Assumption Mapping**](../Business/assumption-mapping.md) — the upstream step: identify and prioritize which assumptions to test before selecting experiment type. The Experiment Ladder answers *how to test*; Assumption Mapping answers *what to test and in what order*.
→ [**Experiment Design**](../Business/experiment-design.md) — the downstream step: once you have selected the right experiment type, Experiment Design provides the discipline for running it rigorously — hypothesis formulation, success criteria, sample size, control conditions.
→ [**Pretotyping**](pretotyping.md) — a specific cluster of simulation-level techniques that test desirability before building; pretotyping sits at the simulation rung of the ladder.
→ [**MVP**](mvp.md) — a specific product-level experiment; the MVP is one instrument at the product rung, not a synonym for the ladder itself.
→ [**Customer Development**](customer-development.md) — the methodology for discovery-level experiments; customer development interviews are the primary instrument at the discovery rung.
→ [**Build-Measure-Learn**](build-measure-learn.md) — the overall cycle within which the ladder operates; the ladder determines which type of "build" is appropriate for each learning loop.
→ [**Kill Criteria**](../Delivery-and-Flow/kill-criteria.md) — pre-defining what result would be insufficient to continue; kill criteria applied at each rung of the ladder prevent motivated reasoning from carrying a failing assumption forward.
→ [**Two-Way Doors**](../General-Thinking/two-way-doors.md) — the reversibility principle that governs how far up the ladder to go before committing: lower rungs are two-way doors, upper rungs become progressively less reversible.

---

---