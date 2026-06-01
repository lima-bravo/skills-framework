---
name: "organisational-degradation-scan"
description: "Seven-step diagnostic for why an organisation is quietly underperforming. Covers drift, scale threshold, bureaucratic expansion, management competence, metric capture, structural lock-in, and incentive misalignment. Run before launching any transformation programme."
metadata:
  framework-source: "Pre-built-Chains/organisational-degradation-scan.md"
  plugin: "disciplined-thinking"
  version: "1.0.0"
  invocation: "manual"
---

> **Invocation:** Run only when the user explicitly requests this chain (e.g. `/organisational-degradation-scan`) or a matching high-stakes decision. Do not auto-invoke for general questions.

# Organisational Degradation Scan

Run this chain in order. Require concrete written answers per step before advancing. Do not skip steps because they are uncomfortable.

## Before you start

- Confirm the decision or improvement scope in one sentence.
- List what evidence is already available vs. what must be gathered.
- State the stakeholder and time horizon.

## Workflow

### Step 1 — Drift to Failure: Is the organisation normalising deviation?

Begin here, because drift is the universal precondition. Before any of the specific degradation mechanisms take hold, organisations first normalise small departures from their own standards — each one too minor to trigger a response, collectively constituting a sustained drift away from the conditions that made the organisation effective.

Ask: what were the operating standards, response times, quality thresholds, and behavioural norms of this organisation two to three years ago? Compare them to today. The comparison should be empirical, not impressionistic: use data where it exists, direct observation where it doesn't. Specific signals to look for — decisions that used to be made at one level are now escalated two levels higher; work that used to take two weeks routinely takes six; exceptions that used to require sign-off are now processed without it; incidents that would previously have triggered a review are now absorbed without comment.

The key diagnostic question is not "has anything changed?" but "have the changes been consciously chosen, or have they accumulated without decision?" Drift is defined by the absence of decision — standards eroding through accumulated acceptance rather than deliberate revision. If the gap between past and current operating standards is visible but unexplained by conscious choice, drift is active.

### Step 2 — Dunbar's Number: Has scale broken relational coordination?

Identify whether the organisation has crossed the ~150-person threshold — or more precisely, whether it has crossed it *without redesigning its coordination mechanisms*. Many organisations retain relational coordination models (informal escalation, culture transmitted by proximity, accountability through peer relationship) well past the point where those models can function at their actual scale.

The diagnostic is not headcount alone but the ratio of people to the coordination infrastructure. Ask: how are decisions made when there is no clear policy? How is culture transmitted to new joiners? How is accountability enforced for performance that falls short but doesn't violate a written rule? If the honest answer to all three is "through direct relationship with someone who knows the right thing to do," and the organisation has more than 150 people, the relational infrastructure is overstretched and failing silently.

Look for the characteristic symptoms: cultural variation between teams that share the same stated values (culture is no longer transmitted reliably); onboarding times extending from weeks to months (new joiners can't navigate through relationship alone); decisions taking longer at the organisational level while staying fast at the team level (the interface between Dunbar-scale units is the bottleneck). If these patterns are present, the organisation has outgrown its coordination model and the subsequent mechanisms in this chain will compound the damage until the model is rebuilt.

### Step 3 — Parkinson's Law: Is headcount and process growing faster than output?

Examine the ratio of inputs to outputs over time. A degrading organisation typically shows: headcount growing, meeting load growing, process complexity growing — while output per person, decision speed, and delivered value are flat or declining. This is Parkinson's Law operating at the institutional level: the organisation is expanding its administrative structure in ways that generate work for itself without generating value for customers or stakeholders.

The diagnostic requires separating genuine growth (more work requiring more people) from Parkinson expansion (more people requiring more coordination requiring more people). Specific questions: what is the ratio of people doing direct value-creating work to people coordinating, reviewing, or governing the work of others? Has this ratio changed in the last two to three years? What proportion of a typical knowledge worker's week is consumed by internal coordination activities (meetings, status updates, approvals, reporting) versus the work itself? A healthy ratio depends on the organisation's maturity and complexity, but a ratio where coordination consumes more than 40% of knowledge worker time is a strong signal of Parkinson expansion.

Also examine the meeting infrastructure specifically. Recurring meetings that have extended in duration, increased in frequency, or expanded their attendee lists over the past two years without a corresponding expansion in scope are a reliable indicator of Parkinson's Law operating on the coordination layer. The meeting structure is often a more accurate indicator of Parkinson expansion than headcount, because headcount growth can be legitimately explained by growth while meeting inflation almost never can.

### Step 4 — Peter Principle: Is the management layer competent for its current roles?

Assess the management layer against the demands of the roles it currently occupies — not against past performance. The Peter Principle accumulates slowly and is rarely visible in any single promotion; it becomes apparent in aggregate when a management layer that was effective at a smaller scale or simpler task is now operating a more complex organisation with significantly different requirements.

The diagnostic is deliberately uncomfortable: it requires distinguishing managers who are genuinely effective in their current roles from managers who were excellent in past roles and have accumulated positional authority that masks current underperformance. Specific signals: which managers' teams consistently deliver on commitments, develop junior talent, and make good autonomous decisions? Which managers' teams consistently escalate, miss commitments, or exhibit the manager's personal strengths rather than the team's collective capability? The pattern across the management layer — not individual cases — is the diagnostic.

Also examine the promotion criteria that produced the current management layer. If the organisation's promotion decisions have been based primarily on individual performance in the prior role, rather than on demonstrated capability for the next role, Peter Principle accumulation is structurally probable regardless of the quality of the individuals involved. This is a process failure, not a character failure — name it as such.

### Step 5 — Goodhart's Law and Cobra Effect: Are the metrics and programmes sustaining the problems they were designed to solve?

By the time organisations recognise degradation, they have typically already launched interventions: new metrics, cultural programmes, review processes, innovation initiatives, accountability frameworks. Step 5 asks whether these interventions are actually addressing the degradation or have themselves become part of the problem.

Apply the Cobra Effect Pre-launch Checklist retrospectively to each active intervention: does the intervention create a role, metric, or institution whose continued existence depends on the problem persisting? Has the intervention given the surrounding organisation permission to stop working on the underlying issue? Are the metrics produced by the intervention measuring activity (programmes completed, surveys conducted, ideas submitted) or outcomes (decisions getting faster, cultural norms actually changing, talent retention improving)?

The hardest part of this step is political: intervention owners are invested in their programmes, and the organisations around them are invested in believing the interventions are working. The diagnostic requires separating the evidence of programme activity from the evidence of underlying problem improvement. If the programme metrics are improving while the underlying problem metrics are flat or worsening, Goodhart's Law is active: the measurement has decoupled from the outcome. If the programme created roles or budgets that are now advocating for the programme's continuation, the Cobra Effect is active.

### Step 6 — Conway's Law: Does the organisational structure entrench the systems and processes creating drag?

Examine the relationship between the organisation's structure and its systems, processes, and communication patterns. Conway's Law predicts that the structure of the organisation will mirror the architecture of its systems — and that both will be self-reinforcing. Degradation is often entrenched by Conway dynamics: the organisational structure that produces slow decisions also produces system architectures that require slow coordination to change; the system architectures then justify the organisational structure that produced them.

The diagnostic question: which coordination bottlenecks, handoff delays, and decision escalation paths are structurally required by the current organisational design? If the same handoff point causes delays across multiple different workstreams, it is a structural issue, not a people issue. Map the most frequent and most costly coordination friction points and ask whether they are properties of the people involved or properties of the organisational structure those people inhabit.

Also examine whether attempted structural changes in the past have been undermined by the existing system architecture — teams that were reorganised but found themselves constrained to the same coordination patterns because the systems they operated hadn't changed. This Conway's Law lock-in is a common reason why reorganisations fail to change how work actually flows.

### Step 7 — Principal–Agent Problem: Where are individual incentives most misaligned with organisational goals?

Having identified the structural and process-level degradation mechanisms in Steps 1–6, step back and ask: whose individual rational behaviour is sustaining each mechanism? The Principal–Agent Problem is the thread running through all the others — each degradation mechanism has an agency dimension that explains why rational actors perpetuate it.

Specifically: which decisions and behaviours that sustain the degradation are individually rational for the people making them? Managers who escalate every decision are often responding rationally to a culture that punishes autonomous decisions that go wrong and ignores autonomous decisions that go right. Teams that expand their meeting load are often responding rationally to an incentive structure that rewards visible coordination over invisible execution. Programmes that report activity metrics rather than outcome metrics often do so because the people running them are accountable for programme delivery, not for the underlying problem they were commissioned to solve.

Identifying the agency structure reveals where structural redesign is necessary versus where persuasion and culture change can work. If a behaviour is individually rational given the current incentive structure, it will not change until the incentive structure changes — no amount of communication, values work, or appeals to collective interest will override rational individual behaviour at scale. Conversely, if a behaviour is individually irrational — people doing things they know are counterproductive — the intervention is cultural and psychological rather than structural.

## Final deliverable

Synthesize all steps into:

1. **Executive summary** (answer / recommendation first)
2. **Key findings** (one per major step)
3. **Risks and failure modes** still open
4. **Next actions** with owners and dates

Full source card: [references/source.md](references/source.md)
