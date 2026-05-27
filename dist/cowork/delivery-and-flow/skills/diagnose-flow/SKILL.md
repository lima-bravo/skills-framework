---
name: "diagnose-flow"
description: "Maps value stream, finds bottlenecks and queue delay, estimates cycle time from WIP and throughput. Use for slow delivery, missed dates, everyone busy, or executive lead-time questions."
metadata:
  plugin: "delivery-and-flow"
  version: "1.0.0"
  sources: "Delivery-and-Flow/value-stream-mapping.md,Delivery-and-Flow/queueing.md,Delivery-and-Flow/flow-efficiency.md,Delivery-and-Flow/littles-law.md,Systems/bottlenecks.md"
---

# Diagnose Flow

Apply this toolkit to the user’s situation. Ask for missing context before concluding. Write answers in the deliverable format below.

## Protocol

### 1. Value Stream Mapping

**Hold in mind:**
Picture an x-ray of a process. The bones (process steps) are visible to managers; the soft tissue (waits, handoffs, queues) is invisible until you image it. A typical VSM reveals that 90–98% of total lead time is wait time, that the same item touches 12–25 hands when leadership thought it was 3, and that one quiet handoff between two teams accounts for half the total elapsed time. The map is not the territory, but a well-built VSM is one of the rare cases where the map shows things the territory's inhabitants cannot see from inside.

**Do:**
- **Walk it, don't model it.** A VSM built from interviews and slide decks is fiction. Walk the actual work — follow one item from trigger to delivery, timing each step.
- **Map current state before future state.** The temptation is to design the ideal; the value is in confronting the actual.
- **Record process time and lead time per step.** The ratio (process time ÷ lead time) at each step is the local flow efficiency; the ratio across the whole map is the system flow efficiency.
- **Mark every wait and every handoff.** Most improvement opportunities live at boundaries, not inside teams.
- **Pick one item type per map.** Different item types follow different paths; one map per type beats a tangled super-map.

**Avoid:**
- **Mapping in a conference room.** The result is a politically negotiated diagram, not a diagnosis.
- **Designing future-state without acting on current-state.** The future-state map becomes a decoration; nothing changes because no countermeasures were owned.
- **Mapping too coarsely.** "Build → Test → Release" hides where the time actually goes. The map needs the granularity of the real handoffs.
- **Treating the map as a deliverable.** The map is an instrument for conversation and action; if no action follows, the work was waste.

### 2. Queueing & Wait Time

**Hold in mind:**
A four-lane highway at 50% load flows freely. At 80%, brake lights ripple. At 95%, one bus slowing slightly causes a 30-minute backup. Nothing changed about the work — drivers are still driving — but the system's response to a tiny perturbation became enormous. Software delivery, support queues, hospital intake, and approval pipelines all behave identically. The most useful diagnostic question is not "how fast does the team work?" but "how much of an item's life is spent waiting?"

**Do:**
- **Estimate wait fraction first.** Pick any in-flight item, ask "what percentage of its calendar life so far was active work?" If under 30%, the system is queue-bound, not capacity-bound.
- **Cut variability before adding capacity.** Reducing batch size and standardizing item types lowers variability, which lowers wait time at the same utilization.
- **Target utilization, not 100%.** Plan for 70–85% on knowledge work; reserve the rest for variability absorption.
- **Watch for hidden queues.** "Waiting on review," "waiting on legal," "waiting on data" — each is a queue. Total wait time is the sum across all queues, not just the visible board.
- **Use cost-of-delay to justify slack.** The economic frame turns "we need to leave 20% spare capacity" from sacrilege into rational investment.

**Avoid:**
- **Confusing throughput with utilization.** A system can be at 99% utilization producing terrible throughput because everyone is in queue-management overhead.
- **Adding capacity to a queue-bound system.** New capacity gets absorbed by even longer admission queues unless WIP is also limited.
- **Ignoring variability.** Two systems at the same utilization can have wildly different wait times because of variability.

### 3. Flow Efficiency vs Resource Efficiency

**Hold in mind:**
Two restaurants. Restaurant A keeps every cook flat-out — high resource efficiency — but orders pile up behind the slowest station, so the average meal takes 45 minutes. Restaurant B keeps cooks deliberately under-loaded so they can flex to whichever order is moving — high flow efficiency — and meals take 15 minutes. Restaurant A's manager sees idle cooks and panics. Restaurant B's manager sees idle cooks and considers it the price of fast meals. The executive instinct to "use every resource fully" is a direct cause of long lead times, because variability + high utilization = exploding queues.

**Do:**
- **Measure both.** Resource efficiency is the metric most orgs track; flow efficiency is the one customers feel. Show them side by side.
- **Target 30–50% flow efficiency before optimizing further.** Most organizations live below 20%. Above 50% requires unusual investment; below 20% is leaving large gains on the table.
- **Slack is a feature, not waste.** Reinertsen's queueing analysis: above ~70–80% utilization, small variability produces huge wait time. Plan capacity for variability, not for averages.
- **Pair with WIP limits.** Flow efficiency rises mechanically when WIP falls — there are fewer items waiting per active worker.
- **Frame it for executives via cost of delay.** Idle cost of a worker is small; cost of a delayed initiative is large. Once cost of delay enters the conversation, flow efficiency becomes the dominant metric.

**Avoid:**
- **Optimizing utilization in isolation.** This is the most common pattern. Local efficiency goes up, customer lead times get worse, and no one connects the two.
- **Confusing "busy" with "productive."** A worker switching between five items looks fully utilized; the items they're switching between are stalled.
- **Treating flow efficiency as a vanity metric.** If it's not tied to lead time and cost of delay, it becomes another number to game.

### 4. Little's Law

**Hold in mind:**
Picture a highway. The number of cars on the road (WIP) equals how fast cars exit the highway (throughput) multiplied by how long each car spends on it (travel time). Add more cars without widening the road and travel time goes up linearly. Subtract cars and everyone moves faster. The same arithmetic governs a software team's pull request queue, a hospital's emergency department, and a portfolio of consulting engagements. To shorten cycle time without buying more capacity, the only lever is WIP.

**Do:**
- **Cycle time follows WIP, not the other way around.** If you want predictable delivery, control how much work is admitted into the system; commitments to dates are commitments to WIP discipline.
- **Diagnose with the simplest count.** Walk the wall: count items in flight, divide by weekly throughput, and you get the average cycle time without any new measurement infrastructure.
- **Stability is the assumption.** Little's Law applies on average over a stable window. Use it for steady-state diagnosis; pair with variability analysis for forecasting.
- **It works at every level.** Apply at portfolio (initiatives), program (epics), and team (stories) levels simultaneously to find the layer at which WIP is choking flow.
- **Convert it into a story.** Executives accept "if we cut WIP from 40 to 20 we should see cycle time roughly halve" far faster than queueing theory derivations.

**Avoid:**
- **Treating it as a forecasting tool.** Little's Law gives averages, not commitments. Promising specific dates from L = λW without a variability model produces overconfident plans.
- **Measuring WIP and throughput inconsistently.** If your WIP count includes items the throughput definition excludes (e.g. blocked work, parked initiatives), the arithmetic breaks. Define both at the same scope.
- **Ignoring the stability assumption.** During a major hiring surge, scope change, or reorg, the system is not stable; the law still holds on average but the average is meaningless within that window.

### 5. Bottlenecks

**Hold in mind:**
Think of a pipeline with sections of different diameters. The narrowest section determines total flow — it doesn't matter how wide the rest of the pipe is. The practitioner's question is: *"Where does work/flow/product pile up, or where does it go fastest and then slow down?"* The bottleneck is where the queue forms upstream and where downstream capacity sits idle.

**Do:**
- **Goldratt's five steps.** (1) Identify the constraint. (2) Exploit it — squeeze maximum output from it without changing anything. (3) Subordinate everything else to the constraint — other steps should work at the rate the bottleneck can absorb. (4) Elevate it — only now invest in increasing its capacity. (5) If the constraint shifts, go to step 1.
- **Find where the queue is longest.** In any process, the bottleneck is where incomplete work accumulates. This is often a person, an approval step, a machine, or a shared resource.
- **Protect the bottleneck.** Never let the bottleneck go idle. If a senior engineer is the bottleneck on code reviews, they should never be waiting for context, blocked on a tool, or in non-essential meetings.
- **Avoid false bottlenecks.** Sometimes the apparent bottleneck is not the true constraint but is being artificially stressed by poor upstream processes. Diagnose before treating.
- **Constraints shift.** After you fix the bottleneck, the next tightest constraint becomes the new bottleneck. This is not failure; it is the system working. Keep iterating.

**Avoid:**
- **Improving non-bottlenecks.** This is the most common failure in operational improvement: optimizing steps that are not the constraint, producing local efficiency but no global improvement. The team feels productive; system throughput doesn't change.
- **Misidentifying the bottleneck.** The visible queue is not always at the true constraint — it may be downstream of an invisible constraint that limits how much work enters the system. Trace the full flow.
- **Creating new bottlenecks downstream.** Aggressively fixing one bottleneck can shift the constraint to a part of the system you haven't prepared for.

## Deliverable format

Produce a markdown document with these sections:

### Executive summary (3 bullets)

### Current-state flow map (steps, wait times, handoffs)

### Bottleneck hypothesis and evidence

### Flow efficiency estimate and implication

### Little's Law check (WIP, throughput, predicted cycle time)

### Recommended next intervention

## Reference cards

For full definitions and examples, read the linked files when detail is needed:

## Reference cards

- [value-stream-mapping](references/value-stream-mapping.md)
- [queueing](references/queueing.md)
- [flow-efficiency](references/flow-efficiency.md)
- [littles-law](references/littles-law.md)
- [bottlenecks](references/bottlenecks.md)

