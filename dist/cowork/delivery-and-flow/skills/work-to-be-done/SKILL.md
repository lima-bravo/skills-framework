---
name: "work-to-be-done"
description: "Ten-step chain from outcome through theory of change, MECE work tree, prioritization, and capacity check. Use when scoping what must be built or delivered before execution."
metadata:
  framework-source: "Pre-built-Chains/work-to-be-done.md"
  plugin: "delivery-and-flow"
  version: "1.0.0"
  invocation: "manual"
---

> **Invocation:** Run only when the user explicitly requests this chain (e.g. `/work-to-be-done`) or a matching high-stakes decision. Do not auto-invoke for general questions.

# Work to Be Done

Run this chain in order. Require concrete written answers per step before advancing. Do not skip steps because they are uncomfortable.

## Before you start

- Confirm the decision or improvement scope in one sentence.
- List what evidence is already available vs. what must be gathered.
- State the stakeholder and time horizon.

## Workflow

### Step 1 — Outcome vs Output: What must change in the world?

Write the outcome in observable terms: whose behaviour shifts, by how much, by when. If the statement names a deliverable (report, platform, reorg) without a world-change, rewrite until the outcome is testable. For engagements, pair with **Contracting & Scope**: success criteria must be outcomes, not activity lists. Reject "ship X" as the goal unless X is explicitly a proxy with a validated link to customer or business behaviour.

### Step 2 — Jobs to Be Done: What progress are we hired to enable? (when customer-facing)

If the work serves external customers or users, state the **job** — functional, social, and emotional progress in a specific circumstance. If the work is purely internal (compliance, infrastructure, cost), skip this step and note *internal capability job* instead. The discipline: **customer job ≠ organizational work**. The job names demand; later steps name the work to satisfy it. Interview logic: what were they doing when the need arose, what did they hire before, what triggered the switch?

### Step 3 — Kernel Diagnosis: What is the central challenge?

One paragraph: the single hardest constraint or opportunity that explains why the outcome is not already true. Resist goal-lists and initiative-lists. If you cannot name the crux, you are not ready to decompose work — return to discovery. **Inversion** optional here: what would guarantee failure to reach the outcome? Those conditions become constraints on the work definition.

### Step 4 — Theory of Change: Why would this work produce that outcome?

Draw the causal chain: **Inputs → Activities → Outputs → Outcomes → Impact**. At every arrow, write the **assumption** that must hold ("if we do A, then B because…"). Mark assumptions as *known*, *believed*, or *untested*. Untested assumptions at load-bearing links are the highest-risk work items. A plan with activities but no explicit assumptions is a hope, not a theory.

### Step 5 — MECE Work Decomposition: What work units are required?

Decompose backward from the outcome into a **MECE** set of work types — not an org-chart dump. Typical top-level branches (adapt to context): product/build, process/operating model, data/information, people/capability, governance/decision rights, enablement/platform, external/partner. Each leaf should be a noun phrase a team could own ("enterprise SSO capability," "intake-to-review handoff redesign"). Test exhaustiveness: what work has no home? Test exclusivity: does any item sit in two branches? Cap depth at three levels for the first pass.

### Step 6 — Hypothesis-Driven Refinement: What must be true, and how will we test it?

Take the top 3–7 assumptions from Step 4. For each, state: the hypothesis, the evidence that would **confirm**, the evidence that would **falsify**, and the cheapest test before heavy work starts. Update the work tree when a sub-hypothesis fails — do not bury falsification. **Pre-mortem**: it is 12 months later and the outcome failed; which work items were waste, which were missing?

### Step 7 — Coherent Actions: What is the guiding policy and the reinforcing set?

From **Kernel of Good Strategy**: state the **guiding policy** (the approach that rules options out) and **3–5 coherent actions** that reinforce each other — not a backlog of fifteen. Each action must trace to a branch in Step 5 and an assumption in Step 4. If an action does not connect to the diagnosis, cut it or fix the diagnosis.

### Step 8 — Flow Sketch: Where does work wait, and who owns the path?

Light **Value Stream Mapping** — not a workshop unless stakes warrant it. For the critical path from trigger to outcome: list steps, mark waits and handoffs, name owners. Flag **dependencies** across teams. Hypothesize the **bottleneck** (where queues form upstream). This step answers "how work moves," not yet "how fast" — that is **Improve Delivery Flow**. If the future state requires different team boundaries, note it for **Org Design for Flow**.

### Step 9 — Prioritize and Sequence: What first, what later, what never?

Rank work using **Cost of Delay** and **WSJF** where economic stakes are clear; use **Kill Criteria** for initiatives that should not start. Apply **One Thing**: if only one workstream could run this quarter, which unlocks the most outcome per unit of constraint? Explicit **defer** and **stop** lists are as important as the start list. Outcome language in OKRs should map to Step 1, not to output volume.

### Step 10 — Capacity Reality Check: Can we actually do this?

Before committing, run the **Capacity Planning** chain at summary level: true cognitive capacity (not calendar hours), fragmentation tax, planning-fallacy correction on the work estimate, binding constraint, existing debt load, margin of safety. If capacity fails the check, reduce scope (Step 9), extend time, or add capacity at the bottleneck — do not pretend parallel work fixes a serial constraint.

## Final deliverable

Synthesize all steps into:

1. **Executive summary** (answer / recommendation first)
2. **Key findings** (one per major step)
3. **Risks and failure modes** still open
4. **Next actions** with owners and dates

Full source card: [references/source.md](references/source.md)
