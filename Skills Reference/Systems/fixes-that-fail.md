# Fixes That Fail
*The symptomatic fix works. That's the problem.*

**Category:** [Systems](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

Fixes That Fail is one of Donella Meadows's systems archetypes — recurring structural patterns in which a quick, symptomatic fix relieves the pressure that would otherwise force a solution to the fundamental problem, causing the fundamental problem to persist and grow. The symptomatic fix provides relief; relief reduces urgency; reduced urgency prevents the harder work of addressing root causes; the root cause continues to generate symptoms; the next symptom is larger; a larger fix is required. **Shifting the Burden** is a related archetype with an additional element: the symptomatic fix itself builds a side-effect structure that makes the fundamental solution increasingly difficult to apply over time. The fix shifts the burden of managing the problem from the fundamental solution (which would resolve it) to the symptomatic fix (which can only suppress it). Over time, the capacity for the fundamental solution atrophies, and the dependency on the symptomatic fix deepens.

---

## Mental Model

An engineering organisation is moving too slowly. The symptomatic fix: hire more engineers. More engineers mean more capacity; more capacity means delivery pressure decreases; decreased delivery pressure means there is less urgency to address the root cause (which turns out to be architectural complexity that makes every change expensive). The new engineers encounter the same architecture, slow down as they learn it, increase coordination overhead, and within six months the delivery rate is the same as before — but with higher payroll and a more complex org chart. The next time delivery is slow, the same fix is applied. Each application of the symptomatic fix (adding headcount) makes the fundamental fix (simplifying the architecture) harder, because the organisation is now larger, the ownership is more diffuse, and there is now a whole cohort of engineers whose roles are justified by the complexity that the fundamental fix would reduce. The burden has shifted: the organisation is now dependent on the symptomatic fix.

The distinction from a simple failure is important: the symptomatic fix works. Delivery pressure does decrease, briefly. The fix earns credit. Its proponents are rewarded. This is what traps the system — the success of the fix, not its failure.

---

## Practitioner Heuristics

- **Ask whether the fix removes the pressure that would produce the real solution.** The diagnostic question is not "does this fix help?" but "does this fix reduce the urgency of addressing the root cause?" If the answer is yes, the fix is symptomatic — and may be making the structural problem harder to solve.
- **Look for escalation as the signature of the archetype.** Fixes That Fail shows up as increasing doses of the same fix required to achieve the same effect. Each new hire achieves less. Each new process adds less. Each new tool speeds things up less. Escalating dosage without improving outcomes is the fingerprint of a symptomatic fix cycle.
- **Name the fundamental solution before committing to the symptomatic one.** Explicitly state: "the root cause is X; the fundamental solution to X is Y; we are choosing Z instead because of constraint C." This forces the choice into the open and creates a commitment to address Y when C is no longer constraining.
- **Track side-effects of repeated symptomatic fixes.** In Shifting the Burden, the side effects are what matter. A symptomatic fix applied once has small side effects; applied ten times, the side effects may have become the dominant structural feature. Ask: what has changed in the system as a result of applying this fix repeatedly?
- **Use Drift to Failure as the companion lens.** Fixes That Fail is the mechanism; Drift to Failure is the trajectory it produces. If the symptomatic fix is working well but the fundamental problem is still growing, you are drifting — and the eventual failure will be larger for having been delayed.
- **Build in a trigger for the fundamental solution.** Rather than waiting for the symptomatic fix to stop working, pre-commit: "if we apply the symptomatic fix three times without addressing the root cause, we will stop and address the root cause regardless of apparent relief." This decouples the decision from the pressure that the fix is relieving.

---

## Common Failure Modes

- **Rewarding the fix, not the solution.** Organizations systematically reward the person who relieves the symptom (ships the hotfix, hires the headcount, launches the initiative) rather than the person who solves the underlying problem. The incentive structure actively produces Fixes That Fail.
- **Invisible side-effects.** Shifting the Burden's side effects often appear in different parts of the system from the fix itself — the headcount fix builds coordination overhead in a different team; the process fix builds compliance cost in a different function. The connection is not obvious; the costs are attributed to other causes.
- **Confusing relief with resolution.** The most common cognitive failure: the pressure decreases after the fix is applied; this is experienced as success; the mental model is updated to "the problem is solved." The problem was not solved; it was suppressed. The system's short-term feedback loops confirm the fix; only the long-term loops reveal the escalation.
- **Sunk cost in the symptomatic fix.** After significant investment in a symptomatic fix — a tool, a process, a function, a team — there is organizational pressure to declare it a success and continue investing. Acknowledging that the fix did not address the root cause requires acknowledging that the investment was misallocated. This is politically costly enough to maintain the fiction of success.
- **The fundamental fix that is also a Fixes That Fail.** Root cause analysis often reveals a "fundamental solution" that is itself a symptomatic fix one level deeper. The habit of asking "but what is this relieving the pressure for?" should be applied recursively until an irreducible root cause is found or the chain becomes too long to act on.

---

## Worked Example

A retail operations team has a persistent stockout problem. The symptomatic fix: increase safety stock levels. Stockouts decrease; pressure on the inventory planning process decreases. Six months later, stockouts return. Safety stock is increased again. After three cycles: inventory holding costs are 40% above budget, warehouse space is constrained, and the planning team's capacity is consumed by managing the now-complex safety-stock policy across 8,000 SKUs.

The fundamental problem — which the repeated fixes have been suppressing — is that demand forecasting accuracy for seasonal items is poor. The planning team knows this but, under delivery pressure, has applied the symptomatic fix (more stock) rather than investing in forecast improvement. The Shifting the Burden dynamic: each safety-stock increase makes the forecast-improvement project harder to justify ("we've managed without it") and harder to resource ("the planning team is already overwhelmed with safety-stock management"). The fix has shifted the burden from forecast improvement to safety-stock management, and the capacity for the former has been consumed by the latter.

The resolution: a six-week pause on safety-stock increases, a dedicated forecasting improvement sprint, and a pre-committed trigger: if any SKU category requires a third safety-stock increase without a forecast improvement intervention, the project is automatically prioritized in the next planning cycle.

---

## Connections

→ [208·Drift to Failure](drift-to-failure.md) — Fixes That Fail is the mechanism by which systems drift; Drift to Failure is the trajectory the mechanism produces. The two archetypes are often present simultaneously.
→ [120·Goodhart's Law](../Economics/goodharts-law.md) — symptomatic fixes often target the metric that measures the symptom, which optimises the measure while leaving the underlying dynamic intact — a textbook Goodhart failure.
→ [18·Bottlenecks](bottlenecks.md) — adding capacity at non-bottleneck points is a classic symptomatic fix for a system that is actually constrained by a single bottleneck; the fix relieves local pressure without improving system throughput.
→ [255·Technical Debt](../Delivery-and-Flow/technical-debt.md) — technical debt accumulation is often the side effect of a Shifting the Burden cycle: repeated symptomatic fixes (workarounds, shortcuts) that suppress delivery pressure while building structural cost.
→ [17·Feedback Loops](feedback-loops.md) — the Fixes That Fail archetype works because the symptom-to-fix feedback loop is shorter and more visible than the root-cause feedback loop; structural leverage lies in strengthening the longer loop.
→ [261·Systems Thinking](systems-thinking.md) — fixes that fail are only visible as a pattern through systems thinking; the linear view sees each fix in isolation and misses the archetype.

## References

- *Thinking in Systems: A Primer* — Donella H. Meadows (2008) — original source for systems archetypes including Fixes That Fail and Shifting the Burden.
- *The Fifth Discipline: The Art and Practice of the Learning Organization* — Peter M. Senge (1990) — extended treatment of systems archetypes in organizational contexts.
- *Leverage Points: Places to Intervene in a System* — Donella H. Meadows (1999) — essay on where system interventions are most powerful.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
