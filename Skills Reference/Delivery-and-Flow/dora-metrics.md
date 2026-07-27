---
id: 142
name: DORA Metrics
category: Delivery & Flow
cardType: standard
tagline: Four numbers that distinguish high-performing software delivery
connections:
  - id: 274
    rationale: structural analogy — DORA gives a delivery pipeline a standing measurement instrument instead of anecdote; AI Evaluation Discipline does the same for an AI system's output quality.
  - id: 134
    rationale: DORA's "lead time for changes" is a specific cycle-time variant.
  - id: 133
    rationale: short DORA lead times imply high flow efficiency.
  - id: 144
    rationale: DORA measures delivery capability; outcome measures the value it produces.
  - id: 30
    rationale: DORA's stability vs throughput pairing reframes the classic trade-off as falsely posed.
  - id: 28
    rationale: DORA performance correlates with team-aligned-to-stream architecture.
  - id: 255
    rationale: rising Change Failure Rate and MTTR are the leading indicators of technical debt's interest payment in production.
  - id: 256
    rationale: DORA's four metrics are the inputs to error budget burn rate; Change Failure Rate and MTTR govern the reliability side of the trade-off.
  - id: 179
    rationale: "innovation health indicators apply the same leading-indicator logic as DORA — measuring system conditions and flow rather than only outcomes, to predict future performance."
  - id: 250
    rationale: "DORA is a worked example of KPI architecture done well: a small set of decision-linked, leading-and-lagging metrics derived from first principles for software delivery."
  - id: 143
    rationale: flow metrics (Project to Product) complement DORA — DORA measures how good the delivery engine is; flow metrics show what the engine is being used for at portfolio level.
  - id: 183
    rationale: authority boundary registers measure governance system health in agentic AI systems in the same way DORA metrics measure delivery system health
references:
  - title: "Accelerate: The Science of Lean Software and DevOps"
    authorYear: Nicole Forsgren, Jez Humble & Gene Kim (2018)
    supports: the research basis for the four DORA metrics (deployment frequency, lead time, change failure rate, MTTR) and their link to organizational performance.
  - title: State of DevOps Report
    authorYear: DORA / Google Cloud (annual, 2014–present)
    supports: the ongoing industry benchmark tracking DORA metric performance across thousands of organizations annually.
  - title: The DevOps Handbook
    authorYear: Gene Kim, Jez Humble, Patrick Debois & John Willis (2016)
    supports: the DevOps technical practices that drive improvement in the four DORA metrics.
---

# DORA Metrics

**Category:** [Delivery & Flow](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

The DORA metrics — developed by the DevOps Research and Assessment program (Nicole Forsgren, Jez Humble, Gene Kim) and published in *Accelerate* (2018) — are four indicators of software delivery performance: **deployment frequency**, **lead time for changes**, **change failure rate**, and **mean time to restore service**. Multi-year survey research shows these four cluster together: organizations that ship more frequently also have shorter lead times, lower change failure rates, and faster recovery. The metrics are the rare case in technology management where rigorous evidence ties operational behaviour to organizational performance.

---

## Mental Model

DORA is a balanced scorecard for delivery. Throughput is captured by deployment frequency and lead time for changes; stability is captured by change failure rate and mean time to restore. The pairing is the point: a team that ships fast but breaks things often is not high-performing, and a team that is rock-solid but ships quarterly is not either. The four metrics together resist the gaming that any single one would invite. They are also the rare delivery metrics that translate directly to executive language — "we deploy 30 times a day; recovery time when something breaks is under an hour" lands without context.

---

## Practitioner Heuristics

- **Measure all four; report all four.** Subsets distort. Lead time without change failure rate rewards recklessness; change failure rate without deployment frequency rewards paralysis.
- **Distinguish elite/high/medium/low bands.** The published bands (e.g. deploys multiple times per day vs once per month) give immediate context; absolute numbers without context confuse.
- **Use the metrics as a diagnostic, not a stack rank.** Comparing teams whose products differ in regulation or risk profile is misleading; compare a team to itself over time.
- **Make lead time for changes specific.** "Time from code commit to running in production" is the canonical definition; ambiguity here invites gaming.
- **Pair with reliability data.** SLOs / error budgets give the runway to deploy frequently without degrading stability.

---

## Common Failure Modes

- **Gaming deployment frequency.** Trivial config-only deploys count as deployments. The metric drifts upward without underlying improvement.
- **Reporting only throughput.** Leadership praises lead-time improvement; stability degrades quietly because no one is reporting change failure rate.
- **Treating MTTR as the same as MTBF.** Mean time to restore is a measure of resilience under failure, not of failure rate itself.
- **Benchmarking against external bands without context.** A bank's regulated payment system is not directly comparable to a SaaS marketing site.

---

## Worked Example

An enterprise IT organization with 8 product teams is asked to "improve delivery." A baseline DORA reading shows: median deployment frequency monthly, lead time 6 weeks, change failure rate 24%, MTTR 8 hours — clearly in the "low" band. A 12-month investment in trunk-based development, automated testing, feature flags, and on-call runbooks moves the median to weekly deploys, lead time 9 days, change failure rate 9%, MTTR 45 minutes — high-band on all four. The investment cost roughly $2.4M; the avoided cost of major-incident outages alone was $4.1M.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
