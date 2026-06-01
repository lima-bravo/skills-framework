---
name: "mission-execution-protocol"
description: |
  Structures mission execution from commander's intent through brief-back, execution cadence, and after-action review. Use for high-stakes projects requiring disciplined command and control.
metadata:
  framework-source: "Pre-built-Chains/mission-execution-protocol.md"
  plugin: "leadership"
  version: "1.0.0"
  invocation: "manual"
---

> **Invocation:** Run only when the user explicitly requests this chain (e.g. `/mission-execution-protocol`) or a matching high-stakes decision. Do not auto-invoke for general questions.

# Mission Execution Protocol

Run this chain in order. Require concrete written answers per step before advancing. Do not skip steps because they are uncomfortable.

## Before you start

- Confirm the decision or improvement scope in one sentence.
- List what evidence is already available vs. what must be gathered.
- State the stakeholder and time horizon.

## Workflow

### Step 1 — Leader's Intent: Set the compass bearing

Before any planning begins, the leader delivers a structured three-part intent statement to the full team:

**Purpose** — why this work matters, in terms of the larger goal. Not what we are doing, but what it enables. "We're doing this so that..." answered in one or two sentences.

**Key tasks** — the two or three things that must happen for the mission to succeed, regardless of how the plan evolves. If these are not done, success is not possible.

**End state** — a concrete, observable description of what success looks like. Not a metric; a picture. "When we are done, X will be true, Y will be in place, Z will no longer be a problem."

**Test of quality:** Read the intent statement back to yourself and ask: if the plan broke mid-execution and someone could not reach me for guidance, would this statement give them enough to make the right call? If no — it is incomplete.

**What to omit:** How. Do not include the method. Method is the team's job to plan.

### Step 2 — Confirmation Brief: Close the comprehension gap

Immediately after the intent is delivered — before the team disperses to plan — ask each team member or sub-team to repeat back what they heard in their own words: purpose, key tasks, end state.

The leader listens without correcting until the team has finished. Then addresses only what was missing, distorted, or overweighted.

**What this surfaces:** The gap between what the leader believes they communicated and what the team actually received. This gap is almost always larger than expected. A 10-minute Confirmation Brief is one of the highest-leverage investments available before a project starts.

**Common finding:** Teams can repeat the key tasks accurately and still have the wrong end state. Or they understand the purpose but cannot name a single key task. Both are failures of the brief, not of the team.

### Step 3 — Back Brief: Surface flawed assumptions before they become sunk costs

After the team has planned — and before any resources are committed or work begins — the team walks the leader through their plan.

The leader's job is not to approve the method (that belongs to the team) but to check three things:
1. Does the plan address all the key tasks?
2. Does the plan produce the end state as described?
3. What assumptions has the team made that haven't been validated?

The leader's output is a list of flags, not a redesigned plan. "The plan assumes client X will respond within two days — is that a safe assumption? The plan doesn't appear to address key task Y — how are you handling that?"

**What this surfaces:** The gap between the intent and the team's interpretation of it, and the assumptions embedded in the plan that will become expensive if they prove false.

### Step 4 — Execute: Adapt to the situation, not the plan

Execution proceeds according to the team's plan — but the team is explicitly authorised to deviate from the plan when the situation requires it, provided they are still working toward the Leader's Intent.

The critical mental model: the plan is the best prediction of how to achieve the intent given information available at briefing time. As the situation develops, new information arrives. The plan should update; the intent should not.

**The leader's role during execution:** Stay close enough to the situation to be useful if a Tactical Pause is needed, but do not manage method. Intervening in how the team executes — absent a significant problem — undermines the trust that Mission Command requires.

### Step 5 — Tactical Pause: Stop when the plan no longer fits

When the situation changes materially — an assumption has proven false, the brief has shifted, a risk has materialised, or the team has discovered the plan cannot produce the end state — call a deliberate halt.

The structure: **Stop → Gather → Think → Move.**

- **Stop:** Name the situation explicitly. "We've hit something our plan doesn't cover. We're pausing."
- **Gather:** What do we know now that we didn't know when we planned? What has changed?
- **Think:** Does the current plan still achieve the Leader's Intent? If not, what needs to change? Time-cap this step — it is a decision sprint, not a replanning exercise.
- **Move:** Make an explicit choice: continue, adapt, or stop. Name it. Recommit.

**Trigger conditions** (call a Tactical Pause when any of these are true):
- A key assumption embedded in the plan has proven false
- The scope, brief, or success criteria have changed materially
- The team is about to commit resources at a decision point that cannot be undone
- The team is moving fast but losing confidence that the destination is still right

### Step 6 — After-Action Review: Capture learning at the point of maximum signal clarity

Immediately after the project closes — same day if possible, within 48 hours at most — the team runs a four-question review. Run by a team member, not the leader. All practitioners present; no observers.

**Q1: What was supposed to happen?**
Reconstruct the intent and plan as understood at the start. Not hindsight — what did we commit to?

**Q2: What actually happened?**
Reconstruct events factually. Where accounts differ, the difference is itself data.

**Q3: Why was there a gap?**
This is the highest-value question. Resist external attribution ("the client moved the goal posts") and look for internal factors ("we didn't surface the ambiguity before we started"). Useful probe: "What could we have done differently that would have changed the outcome?"

**Q4: What do we sustain, and what do we improve?**
Explicitly name what worked and should be preserved — not just what should change. The sustain half is as important as the improve half.

**Output:** One paragraph per question, written down, filed where future teams can find it. Review a set of AARs quarterly for patterns — repeated gaps across projects are the most valuable organisational learning signal available.

## Final deliverable

Synthesize all steps into:

1. **Executive summary** (answer / recommendation first)
2. **Key findings** (one per major step)
3. **Risks and failure modes** still open
4. **Next actions** with owners and dates

Full source card: [references/source.md](references/source.md)
