# PDCA
*Plan, Do, Check, Act — the smallest unit of disciplined learning*

**Category:** [Delivery & Flow](../index.html#delivery-flow) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

PDCA — Plan, Do, Check, Act — is a four-step iterative cycle for continuous improvement. Plan: hypothesize a change and predict its effect. Do: implement on a small scale. Check: compare actual to prediction. Act: standardize what worked, refine what didn't, then loop. The cycle was developed by Walter Shewhart in the 1930s and championed by W. Edwards Deming, who called it PDSA (with "Study" replacing "Check") to emphasize the analytical step. It is the methodological backbone of lean and the conceptual ancestor of agile retrospectives, hypothesis-driven development, and OODA loops.

---

## Mental Model

PDCA is the metabolism of an improving organization. Each cycle is a small experiment; the cumulative effect of thousands of cycles is what distinguishes high-performing operations. The "Check" step is the most often skipped — teams run Plan-Do-Plan-Do cycles where they never compare actual outcomes against predictions, and so don't learn. The "Plan" step is the next most often skipped — teams jump straight to "Do" with no explicit prediction, and so don't have anything to learn from. Discipline in PDCA is the discipline of making predictions and checking them.

---

## Practitioner Heuristics

- **Write the prediction down.** "I predict cycle time will drop from 12 to 8 days" pinned to the change creates accountability for the analysis later.
- **Run cycles small and short.** Two-week cycles beat quarterly cycles; daily cycles beat weekly. Cycle frequency is the throughput of organizational learning.
- **Treat "Check" as the most important step.** This is where the learning happens; if you skip it, you're running rituals, not cycles.
- **Standardize before you optimize.** If the process varies wildly run-to-run, you cannot tell what your change did. "Act" includes locking in the new standard.
- **One change at a time.** PDCA cycles with three simultaneous changes cannot attribute effect; run sequential cycles when possible.

---

## Common Failure Modes

- **PDPDPD without Check.** Teams celebrate momentum, miss learning. After a year, no one can tell which changes helped.
- **PDCA without Plan.** "We tried something" without a written prediction is a story, not a cycle.
- **PDCA as a ceremony.** A retrospective ritual that produces "let's try harder" actions is theater. Cycles need concrete, testable changes.
- **Treating PDCA as a tool for individuals only.** It scales to teams, programs, and portfolios when each level runs its own cycle on its own change.

---

## Worked Example

A platform engineering team's incident rate is rising. Plan: hypothesize that a missing pre-deployment smoke test is responsible; predict that adding it will reduce production incidents by 40% over four weeks. Do: implement the smoke test in the deployment pipeline. Check: four weeks later, incidents are down 31% — close but not the predicted level; investigation reveals that the smoke test caught two-thirds of incidents but missed a class of integration failures. Act: standardize the smoke test, plan the next cycle to address integration coverage. Across six cycles in a quarter, incident rate falls 70%, and the team has a written log of what worked, what didn't, and why.

---

## Connections

→ [**A3**](a3-problem-solving.md) — A3 is the structured artifact of a PDCA cycle.
→ [**Build-Measure-Learn**](../Startups/build-measure-learn.md) — the startup-domain restatement of PDCA.
→ [**Empirical Process Control**](empirical-process-control.md) — PDCA is EPC operationalised; EPC is the governing theory that explains why PDCA works.
→ [**OODA Loop**](../Leadership/ooda-loop.md) — a faster, decision-making variant of the same discipline.
→ [**Post-mortem**](../General-Thinking/post-mortem.md) — a single PDCA Check applied to an incident.
→ [**Pre-mortem**](../General-Thinking/pre-mortem.md) — the Plan-step discipline of imagining failure modes before acting.

---

## References

- *Out of the Crisis* — W. Edwards Deming (1986).
- *Statistical Method from the Viewpoint of Quality Control* — Walter A. Shewhart (1939).
- *The Toyota Way* — Jeffrey K. Liker (2004).

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../index.html)*
