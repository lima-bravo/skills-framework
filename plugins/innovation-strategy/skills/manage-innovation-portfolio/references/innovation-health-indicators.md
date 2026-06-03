# Innovation Health Indicators
*What good looks like, measured*

**Category:** [Innovation & Entrepreneurship](../index.html#innovation--entrepreneurship) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

Innovation health indicators are the set of metrics that tell you whether an organization's innovation capability is functioning, improving, or deteriorating — independent of whether any specific innovation has yet produced commercial results. They occupy the space between lagging financial outcomes (revenue from new products, market share in new segments) and mere activity counts (workshops run, ideas submitted). The discipline is analogous to DORA metrics for software delivery: instead of measuring only whether the release shipped, you measure the system properties — deployment frequency, lead time, change failure rate — that predict future delivery performance.

The core insight is that innovation outcomes are too lagging and too variable to manage against directly. An organization that measures only "revenue from products launched in the last three years" will always be managing on old signals. Innovation health indicators measure the pipeline, the conditions, and the learning rate — the things that determine whether good outcomes are probable, not just whether they have arrived.

---

## Mental Model

Think of innovation health as a four-layer system. The bottom layer is **conditions** — the organizational factors that make innovation possible at all: slack, structural separation, psychological safety, and freedom from dominant logic constraints. The second layer is **pipeline** — the flow of ideas through generation, testing, and validation. The third layer is **learning quality** — how well the funnel improves ideas as they move through it, not just how many survive. The top layer is **outcomes** — the commercial results of validated innovations reaching the market or core business. Most organizations measure only the top layer. Good innovation health monitoring measures all four, with the understanding that conditions predict pipeline health, pipeline health and learning quality together predict outcomes — with a significant lag.

---

## Conditions Indicators

**H2+H3 investment ratio.** What percentage of total innovation investment (budget + headcount) is allocated to Horizons 2 and 3 combined? A healthy range for most incumbents is 15–30%, varying by industry pace. Below 10% signals a portfolio that is not regenerating. Measure quarterly against a target set by leadership.

**Exploration capacity protection rate.** What percentage of designated exploration time (committed in resourcing plans) is actually being used for exploration versus consumed by operational work? Track through team-level retrospectives or time allocation surveys. Below 70% signals that slack is being absorbed before it can be used.

**Innovation governance independence.** Are innovation investments evaluated using learning metrics (experiments completed, assumptions validated) rather than operational metrics (margin, payback period) during the exploration phase? A binary indicator: yes or no, with evidence.

**Psychological safety for failure.** Does the organization have a visible record of rewarding intelligent failure — a team that ran a well-designed experiment that returned a clean negative result and was recognized for it? Track through post-mortem quality, stated kill decisions, and leadership behavior in program reviews.

---

## Pipeline Indicators

**Idea generation rate.** Number of distinct opportunity hypotheses entering the funnel per quarter, normalized by team size. Track source distribution: what percentage come from customer observation, technology scouting, open innovation, and internal generation? A pipeline fed only by internal ideas is likely constrained by dominant logic.

**Experiment throughput.** Number of validated learning cycles completed per team per quarter. A team running fewer than two complete Build-Measure-Learn cycles per quarter is either under-resourced, poorly scoped, or stuck in planning rather than learning.

**Assumption kill rate.** Percentage of experiments that return a clean disconfirming result and lead to a deliberate pivot or kill decision within 30 days. Low kill rates indicate either that experiments are not rigorous enough to produce clear signals, or that organizational pressure prevents acting on negative findings.

**Funnel conversion rate by stage.** Of ideas entering, what percentage reach experiment stage? Of experiments, what percentage achieve validation? Of validated concepts, what percentage reach deployment decision? Track where the funnel is congested — entry, conversion, or exit.

**Time-to-first-experiment.** From idea submission to first customer-facing test. A proxy for organizational friction. In healthy programs, this is measured in days to weeks. When it exceeds 90 days, the program's bureaucratic overhead is destroying learning velocity.

---

## Learning Quality Indicators

These indicators measure whether the funnel is a learning accelerator — actively improving ideas as they move through it — rather than just a filter that selects which ideas survive. Even a killed idea should leave the funnel sharper than it entered it.

**Hypothesis quality at stage gate.** Before an idea advances from opportunity to experiment, assess it against a short rubric: Is the customer need framed as a JTBD (functional, emotional, and social jobs named)? Is the critical assumption stated specifically and falsifiably? Has the opportunity been placed in an Opportunity Solution Tree with at least two alternative solutions identified? Score each gate consistently. Declining scores over time indicate that teams are advancing ideas without doing the sharpening work; improving scores indicate the methods are being applied rigorously.

**Assumption coverage at experiment design.** When a team designs an experiment, how many of the critical assumptions have been explicitly named, ranked by importance and uncertainty, and ordered for testing? Use Assumption Mapping as the method. A team that designs an experiment without having mapped assumptions is testing something, but not necessarily the most important thing. Track the percentage of experiments with a completed assumption map as a gate artifact.

**Learning yield per killed idea.** When an idea is killed, what artifacts does the kill produce? A healthy kill generates: a confirmed or disconfirmed assumption recorded in the learnings library, at least one JTBD insight that can inform other opportunities, and a documented decision rationale. Track whether kills produce structured learning artifacts or simply disappear. Low yield per kill indicates the funnel is filtering without learning — discarding value rather than extracting it.

**Discovery continuity rate.** What percentage of active exploration teams are maintaining a weekly customer interview cadence? Continuous discovery is the practice that keeps the opportunity level of the funnel grounded in current customer reality rather than initial research findings. A team that has not interviewed a customer in more than three weeks is building on a decaying map. Track per team, not as a program average — averages hide the teams that have stopped.

**Cross-team insight sharing rate.** How many insights from one team's discovery or experiments were used by a different team in the same quarter? Innovation programs organized as isolated tracks systematically duplicate discovery effort and miss the portfolio-level learning that comes from cross-pollination. Track through explicit citation in opportunity maps, experiment designs, and stage gate artifacts.

---

## Outcome Indicators

**Validated learning count.** Number of opportunity hypotheses that have been confirmed as real customer needs with a credible deployment path, in the trailing 12 months. The primary output metric for the exploration phase.

**Deployment rate.** Of validated concepts, how many have entered the deployment pipeline in the trailing 12 months? Low deployment rates despite high validation rates indicate the integration gap — explore and exploit are disconnected.

**New revenue contribution (lagging).** Revenue attributable to innovations deployed in the last three years, as a percentage of total revenue. The ultimate lagging indicator. Benchmark against industry peers; Clayton Christensen's research suggests leading innovators sustain 25–35% of revenue from products less than three years old.

**Portfolio age distribution.** What is the age profile of the innovation portfolio? A portfolio with no bets younger than 18 months is not being refreshed. A portfolio with no bets older than 18 months has never proven it can sustain anything to deployment.

---

## Practitioner Heuristics

- **Lead with conditions indicators in the first 12 months.** Before the pipeline has had time to produce outcomes, conditions are the only honest signal you have. If conditions are healthy, trust the pipeline; if conditions are broken, fix them before blaming the pipeline.
- **Set targets before measuring.** Innovation health indicators only create accountability when targets are set in advance. Retrospective benchmarking against whatever the data shows is not measurement — it is narrative construction.
- **Distinguish activity from learning.** Workshops run, prototypes built, and ideas submitted are activity metrics, not health indicators. An organization can maximize all three while learning nothing. Every indicator should trace back to validated insight or changed decision, not process completion.
- **Review indicators with the sponsor, not the program team alone.** Innovation health data is most valuable when it creates a governance conversation: are we investing enough, is the funnel moving, are validated concepts being deployed? That conversation requires the sponsor's presence and authority.

---

## Common Failure Modes

- **Measuring outputs instead of outcomes.** "We ran 47 workshops" and "we submitted 200 ideas to the portal" are activity counts, not health indicators. They measure effort, not capability.
- **Using H1 metrics for H3 bets.** Applying margin and payback period to early-stage exploration kills it faster than any structural problem. The metric must match the horizon.
- **Vanity pipeline metrics.** A large, full-looking funnel where nothing is moving is not a sign of health. Time-in-stage data reveals whether the pipeline is flowing or congested.
- **Treating the first negative result as program failure.** A well-designed experiment that returns a clean negative is a healthy outcome. Programs that suppress negative results to protect their metrics produce false confidence and wasted deployment investment.

---

## Worked Example

A CPO inherits an innovation programme that reports glowing numbers: 200 ideas in the portal, 47 workshops run, innovation scores up across every team. Asked by the board whether the capability is actually improving, she ignores the activity counts and instruments the four layers. Conditions: H2+H3 investment sits at 6% — below the 10% floor — and exploration time is being absorbed by operational work at a 50% protection rate. Pipeline: experiment throughput is 0.4 cycles per team per quarter, and time-to-first-experiment averages 140 days. Learning quality: kills produce no recorded artifacts. The diagnosis is unambiguous and would have been invisible on the old dashboard — the programme is generating activity, not capability, because the conditions that make innovation possible were never funded and the funnel filters without learning. The intervention follows the indicators: ring-fence and protect exploration capacity, set an H2+H3 target, and gate stage advancement on hypothesis quality and a completed assumption map. The board conversation shifts from "how many ideas did we get?" to "is the system that produces outcomes getting healthier?"

---

## Connections

→ [**Innovation Funnel**](innovation-funnel.md) — the pipeline indicators instrument the funnel directly; health indicators give the funnel quantitative teeth.
→ [**Three Horizons**](three-horizons.md) — H2+H3 investment ratio is the portfolio-level health indicator; Three Horizons provides the framework for interpreting it.
→ [**Innovation Accounting**](../Startups/innovation-accounting.md) — innovation accounting (Lean Startup) covers the experiment-level metrics; health indicators operate at the program and organizational level.
→ [**Organizational Slack**](organizational-slack.md) — exploration capacity protection rate is the slack indicator operationalized; the two cards work together.
→ [**DORA Metrics**](../Delivery-and-Flow/dora-metrics.md) — the structural analogy: DORA measures delivery system health; innovation health indicators measure innovation system health. Both measure conditions and flow rather than only outcomes.
→ [**Ambidextrous Organization**](ambidextrous-organization.md) — governance independence and structural separation indicators directly measure whether the ambidextrous design is functioning in practice.
→ [**Opportunity Solution Trees**](../Startups/opportunity-solution-trees.md) — hypothesis quality at stage gate is largely a measure of whether teams are building and updating OSTs; the tree is the artifact the gate assesses.
→ [**Continuous Discovery**](../Startups/continuous-discovery.md) — discovery continuity rate directly measures whether the continuous discovery practice is being maintained; the practice is the source of the customer grounding that learning quality depends on.
→ [**Pretotyping**](../Startups/pretotyping.md) — time-to-first-experiment improves when teams use pretotyping techniques; cheap demand tests before expensive builds compress the pipeline clock.
→ [**Jobs to Be Done**](../Startups/jobs-to-be-done.md) — JTBD framing is the method behind hypothesis quality; a hypothesis without a JTBD-grounded customer need is not yet a well-formed hypothesis.

---

---