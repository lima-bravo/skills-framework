---
id: 245
name: Funnel Intake
category: Pre-built Chains
cardType: chain
tagline: An unenriched idea is a bet placed before the odds are known.
connections:
  - id: 0
    rationale: Step 1; strips the idea from analogy to mechanism
  - id: 103
    rationale: Step 2; anchors the mechanism to an active customer job
  - id: 113
    rationale: Step 3A; classifies the idea by horizon and checks funnel/management logic fit
  - id: 71
    rationale: Step 3A complement; checks whether the portfolio has capacity for a bet at this horizon
  - id: 166
    rationale: Step 3B; tests whether the idea serves the central strategic challenge
  - id: 70
    rationale: the pipeline this chain gates into; intake discipline prevents zombies and maintains stage integrity
  - id: 213
    rationale: the chain that follows; the Enriched Idea Brief is its input document
---

# Funnel Intake

**Category:** [Pre-built Chains](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## When to Use

Use this chain before committing an idea to the innovation funnel — before assumption mapping, before experiment design, before any experimental capacity is allocated. It runs in the window between "this is an interesting idea" and "this idea has entered the funnel and has a hypothesis to test."

The chain does three things that no other chain in the framework does: it strips the idea to its actual mechanism (not its analogy), anchors it to a real customer job, and runs a strategic fit gate that checks horizon placement, strategic alignment, and data/capability availability. Ideas that pass all three checks are handed off — enriched — to Chain 213 (*From Idea to Hypothesis*). Ideas that fail are redirected or parked before consuming funnel capacity.

Do not use this chain if the idea has already entered the funnel and undergone customer discovery. At that stage, start directly at Chain 213.

---

## Step 1 — First Principles: Strip the idea to its mechanism

Most ideas arrive as analogies: "it's like X but for Y," "we could do what Z does in our context." Analogies are useful for communication but dangerous as foundations — they inherit the assumptions of the original, which may not transfer. Before the idea goes anywhere, decompose it to its actual claim.

Ask: *what does this idea actually assert?* What mechanism does it propose, and what must be true about the world for that mechanism to produce the expected outcome? Write the idea as a one-sentence mechanism statement — not a product description, not a business model, but a causal claim: "If [actor] does [action] using [capability], then [outcome] occurs because [reason]."

The test: could someone who has never heard of the analogous product understand exactly what is being proposed? If not, the idea is still an analogy, not a mechanism. Keep decomposing.

At this step, also apply the First Principles heuristic of separating physics from policy: which constraints on the idea are genuine (data doesn't exist, the physics don't allow it, the regulatory environment prohibits it) and which are conventions masquerading as constraints (industry practice, current pricing norms, received wisdom about what customers will accept)? The genuine constraints go on record. The conventions are candidates for challenge.

---

## Step 2 — Jobs to Be Done: Anchor to an active job

Once the mechanism is clear, check whether it connects to a job someone is already trying to do — imperfectly, expensively, or with friction. An idea that addresses a real, active job is a much lower-risk bet than one that proposes to create a job that doesn't yet exist.

State the job explicitly, in the customer's voice: *"When [situation], I want to [motivation], so I can [expected outcome]."* Then name the current workaround: what is the customer using right now — however badly — to make progress on this job? The existence of a workaround is evidence the job is real. The badness of the workaround is evidence of unmet demand.

If you cannot name the job and the current workaround, the idea is not ready for the funnel. It needs customer discovery first — interviews, observation, context research. Do not proceed until Step 2 can be completed. An idea without a named job can generate a valid hypothesis, but it cannot generate a valid *prioritized* hypothesis: you have no basis for judging how urgent or valuable the opportunity is.

A well-formed Step 2 output is two sentences: the job statement and the current workaround. That's it.

---

## Step 3 — Strategic Fit Gate: Three checks before the funnel opens

This is the gate most innovation funnels skip or apply inconsistently. Run three sub-checks in sequence. Any one of them can return a "redirect" verdict — the idea is valid but not right for this funnel, this portfolio, or this moment.

**Check A — Horizon placement (Three Horizons)**

Classify the idea: is it H1 (optimizes or extends the current core), H2 (builds a new business on demonstrated but not yet mature ground), or H3 (explores an option that could become a future core)? The classification matters because the funnel's management logic, success metrics, and investment tolerance must match the horizon.

An H3 idea evaluated with H1 metrics — revenue projections, payback periods, contribution margin — will be killed before it can generate the learning that would justify further investment. An H1 idea evaluated with H3 patience — "we'll learn as we go" — consumes core resources without accountability. Name the horizon, then check: does this funnel have capacity and intent at that horizon? If not, redirect the idea to the appropriate program. The funnel's job is stage discipline, not idea collection.

**Check B — Strategic alignment (Kernel of Good Strategy)**

Does this idea serve the current strategic direction? Every innovation funnel should have a stated intent — the set of problems the organization is trying to solve, the customers it is trying to serve, the bets it is making about where value will come from. Run the idea against that intent: does it address the central challenge the strategy names, or does it sit outside that challenge, however interesting it may be?

If the idea falls outside strategic intent, the correct response is not automatic rejection — it is an explicit decision: is this idea interesting enough to prompt a strategy update, or should it be parked? That decision belongs to whoever owns the strategy, not the funnel. The funnel's job is to surface the question, not to answer it by default.

**Check C — Data and capability availability**

The question most assumption-mapping exercises defer until it becomes a riskiest assumption: do we have — or can we realistically acquire — the data, technical capabilities, and domain access needed to test this idea at crawl stage? This is not a question about eventual feasibility; it is a gate question about whether we can even run the first experiment.

Common blockers at this check: the required data doesn't exist or is held by a party who won't share it; the technical capability needed to run a minimum experiment is 12+ months away; the customer segment required for testing is inaccessible through current channels. If any of these apply, name them explicitly. They are not assumption candidates — they are preconditions. An idea that fails Check C on data/capability should be parked with a named re-entry condition: "revisit when [data source] is available" or "revisit after [capability] is built."

---

## Step 4 — Enriched Idea Brief: The handoff artifact

A completed pass through this chain produces a one-page Enriched Idea Brief — the input document for Chain 213 (*From Idea to Hypothesis*). It contains:

- **Mechanism statement:** one sentence describing the causal claim (from Step 1)
- **Genuine constraints:** physical or regulatory constraints identified in Step 1
- **Challenged conventions:** assumptions that look like constraints but aren't (Step 1)
- **Job statement:** the customer job in the customer's voice (from Step 2)
- **Current workaround:** what they use now and why it's inadequate (Step 2)
- **Horizon classification:** H1 / H2 / H3, with rationale (Step 3A)
- **Strategic fit verdict:** aligned / redirect / explicit decision required (Step 3B)
- **Data/capability status:** available / acquirable / blocked — with re-entry condition if blocked (Step 3C)
- **Intake decision:** proceed to Chain 213 / redirect / park with condition

Ideas that receive an "intake decision: proceed" are handed directly to Chain 213, with the Enriched Idea Brief as context for Steps 2 and 3 of that chain (OST anchoring and assumption mapping are faster and more precise when the job and constraints are already named).

---

## Key Failure Modes

**Analogies in, analogies out.** The most common failure: skipping Step 1 and carrying the analogy all the way through assumption mapping. The assumptions mapped are then the assumptions of the original model, not the assumptions of the actual idea. The experiments that follow test the wrong thing.

**No named workaround.** Treating Step 2 as complete without identifying the current workaround. "Customers will want this" is not a job anchor. "Customers are currently doing X manually, spending Y hours, producing Z errors" is. Without the workaround, there is no baseline and no urgency signal.

**Strategic fit as veto by default.** Treating "doesn't obviously match current strategy" as an automatic kill. The correct response is an explicit decision — update the strategy or park the idea — not a default rejection. Ideas that fall outside current strategy often deserve the most attention, because they may be signalling where the strategy is incomplete.

**Treating data gaps as assumptions.** An idea that cannot be tested because the required data doesn't exist has not failed an assumption — it has failed a precondition. Parking it as "assumption: data will become available" puts it in the active funnel as a zombie. Name the re-entry condition and remove it from the active funnel until that condition is met.

**Applying H1 urgency to H3 ideas at the gate.** H3 ideas correctly fail Check A when the funnel is an H1 funnel — but that failure should redirect, not kill. The failure mode is using the intake gate to eliminate all exploratory ideas because "we need results this year."

---

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
