# DORA Metrics
*Four numbers that distinguish high-performing software delivery*

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

## Connections

→ [134·Lead Time vs Cycle Time](lead-time-cycle-time.md) — DORA's "lead time for changes" is a specific cycle-time variant.
→ [133·Flow Efficiency](flow-efficiency.md) — short DORA lead times imply high flow efficiency.
→ [144·Outcome vs Output](outcome-vs-output.md) — DORA measures delivery capability; outcome measures the value it produces.
→ [30·Trade-offs](../Economics/trade-offs.md) — DORA's stability vs throughput pairing reframes the classic trade-off as falsely posed.
→ [28·Conway's Law](../Systems/conways-law.md) — DORA performance correlates with team-aligned-to-stream architecture.
→ [255·Technical Debt](technical-debt.md) — rising Change Failure Rate and MTTR are the leading indicators of technical debt's interest payment in production.
→ [256·Reliability vs. Feature Velocity](reliability-vs-velocity.md) — DORA's four metrics are the inputs to error budget burn rate; Change Failure Rate and MTTR govern the reliability side of the trade-off.
→ [250·KPI Architecture](../Business/kpi-architecture.md) — DORA is a worked example of KPI architecture done well: a small set of decision-linked, leading-and-lagging metrics derived from first principles for software delivery.

---

## References

- *Accelerate: The Science of Lean Software and DevOps* — Nicole Forsgren, Jez Humble & Gene Kim (2018).
- *State of DevOps Report* — DORA / Google Cloud (annual, 2014–present).
- *The DevOps Handbook* — Gene Kim, Jez Humble, Patrick Debois & John Willis (2016).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
