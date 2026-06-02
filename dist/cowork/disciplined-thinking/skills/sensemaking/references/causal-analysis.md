# Causal Analysis
*Choose the right mode of why*

**Category:** [General Thinking](../index.html#general-thinking) &nbsp;|&nbsp; **[← Card Deck](../index.html)**

---

## Definition

Causal analysis is the practice of determining *why* something happened — tracing backward from an observed outcome to the forces that produced it. The discipline is not a single technique but a family of modes, each suited to a different causal structure. Choosing the wrong mode produces confident but wrong answers: a linear tool applied to a systemic problem yields a tidy explanation that fails to prevent recurrence.

The practitioner's first move is not to start asking "why?" but to ask: *what kind of causal structure am I dealing with?*

---

## Mental Model

Three modes cover most organizational and operational situations:

**Linear chain (5 Whys).** One proximate cause leads to another in a sequence. Each "why" peels one layer. Works when causality is genuinely sequential — a single failure path, a repeatable error, a process deviation. Stops working when the real problem has multiple contributing causes or when the answer to "why" branches rather than narrows.

**Category-based (fishbone / Ishikawa).** The outcome is produced by contributions from several independent causal categories — typically people, process, equipment, environment, management, measurement. Map each category separately, then look for where categories interact. Works when you suspect multiple contributing factors but don't yet know which matter most. Especially useful early in an investigation before you have data to distinguish signal from noise.

**Systems-based (causal loop diagram).** Causes feed back on each other; the outcome is an emergent property of the loop, not a chain or a sum of categories. Works when the problem recurs despite apparent fixes, when interventions produce unexpected side effects, or when the same input produces different outcomes in different contexts. Linear and category tools will always find a "root cause" — but in a feedback system, that cause is itself downstream of the outcome you're trying to prevent.

---

## Practitioner Heuristics

- **Test for structure before choosing a tool.** Ask: does this problem recur in different forms despite local fixes? If yes, you're probably in a feedback loop and need systems-based analysis. If it's a discrete incident with a clear trigger, start with 5 Whys.
- **Use 5 Whys to get started, fishbone to get complete, causal loops to get honest.** The sequence works as a progression: 5 Whys names the obvious chain; the fishbone surfaces what the chain missed; the causal loop reveals why your interventions haven't held.
- **Distinguish proximate from systemic causes explicitly.** Name both. The proximate cause tells you what to fix today; the systemic cause tells you what to change so it doesn't recur. Fixing only proximate causes is the definition of whack-a-mole.
- **Watch for the "human error" terminus.** An analysis that ends at "someone made a mistake" has almost always stopped too early. Human error is a proximate cause; the systemic question is what conditions made that error likely or inevitable.
- **Amazon's format is worth borrowing.** Post-mortems that list contributing factors (plural, not singular) and explicitly separate "what happened" from "what made this possible" are structurally more honest than root-cause-singular analyses.

---

## Common Failure Modes

- **Defaulting to 5 Whys for systemic problems.** The technique always terminates — it will find an answer whether or not that answer is complete. A satisfied-feeling 5 Whys on a feedback-loop problem gives you the illusion of understanding without the reality.
- **Confusing correlation with causation.** Two variables moving together, even reliably, does not establish which causes which — or whether both are downstream of a third variable. Causal analysis requires a mechanism, not just a correlation.
- **Single root cause bias.** Complex events almost always have multiple contributing causes. Forcing a single root cause produces an explanation that is clean and actionable but wrong.
- **Stopping at the organizational boundary.** Causes that cross team or departmental lines are uncomfortable to name. Analyses that stay within one team's scope systematically miss cross-functional and structural causes.

---

## Worked Example

A software team's deployment pipeline keeps failing, causing weekly production incidents. Initial 5 Whys analysis terminates at: "the engineer didn't run the integration tests." Fix: add a mandatory checklist. Three months later, incidents continue in a different form.

Fishbone analysis surfaces what the chain missed: the test suite takes 45 minutes (process/equipment), which creates pressure to skip it near end-of-sprint (management/environment), and the on-call rotation means different engineers own the pipeline each week with no shared memory of past failures (people/process).

Causal loop analysis reveals the feedback structure: time pressure → test-skipping → incidents → emergency fixes → more time pressure. The "root cause" (engineer behavior) is itself produced by the loop. Fixing the checklist addresses one node; fixing the loop requires changing sprint commitments, test suite speed, and on-call continuity simultaneously.

---

## Connections

→ [**Second-Order Effects**](second-order-effects.md) — causal analysis traces backward from outcomes; second-order thinking traces forward from actions. Together they close the loop.
→ [**Feedback Loops**](../Systems/feedback-loops.md) — the systems-based mode of causal analysis is feedback loop analysis applied to problem diagnosis.
→ [**Pre-mortem**](pre-mortem.md) — applies causal analysis forward in time: what causal structure would produce failure from here?
→ [**Post-mortem**](post-mortem.md) — the primary context for causal analysis in engineering and delivery practice.
→ [**Cynefin Framework**](cynefin-framework.md) — Cynefin tells you which domain you're in; the domain tells you which causal mode is appropriate. Complicated → 5 Whys or fishbone. Complex → causal loops.
→ [**First Principles**](first-principles.md) — both disciplines strip away assumption layers; causal analysis strips backward from an outcome, first principles strips downward from a belief.

---

---