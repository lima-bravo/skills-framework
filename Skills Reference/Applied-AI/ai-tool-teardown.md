---
id: 268
name: AI Tool Teardown
category: Applied AI
cardType: extended
tagline: Decompose the pitch into five functions, label the evidence, and end on a decision — not a verdict on silence
connections:
  - id: 274
    rationale: the teardown is the one-time procurement decision; AI Evaluation Discipline is the standing practice you build once you already operate the system, to know whether the verdict the teardown reached still holds.
  - id: 275
    rationale: a pilot-only verdict that names "human review" as its control is only real if the reviewer-vigilance discipline in Human-in-the-Loop Design is applied to that review — otherwise the control named in the decision quietly stops existing.
  - id: 183
    rationale: the governance cousin — teardown decides whether a vendor's control/verification blocks deserve trust; authority boundaries is the register for building that trust when you own the system.
  - id: 184
    rationale: enclave minimization is the same discipline in miniature — shrink what a block is exposed to down to the smallest thing the task genuinely requires (with the same caveat both cards now carry — a small output can still leak by inference).
  - id: 185
    rationale: hidden generation blocks (a reranker, a nested judge) are exactly where untrusted content re-enters the reasoning path; the teardown's "hunt for hidden generation" move is injection-surface mapping applied to someone else's architecture.
  - id: 224
    rationale: mapping where a vendor's pitch is evidentially thin is a red-team move pointed at their story instead of your own plan — attack it before your adversary, or your regulator, does; the teardown turns each gap into a labeled finding rather than treating the gap itself as a verdict.
  - id: 218
    rationale: the teardown's evidence-labeled findings are the stress-test inputs a build-vs-buy business case needs before its numbers are trusted — and both disciplines insist on ending in a decision with named owners, not a favorable-sounding narrative.
  - id: 5
    rationale: separating independently verifiable architecture claims from founder/marketing assertions is a circle-of-competence discipline applied to vendor pitches.
  - id: 121
    rationale: generation is an unsupervised agent — a brilliant, overconfident colleague who never says "I'm not sure" — and verification/control are the principal's mechanisms for checking an agent whose incentives and information you don't fully see.
  - id: 153
    rationale: a pilot-only verdict is only real if its stop conditions and review triggers are pre-committed at decision time — otherwise the pilot quietly becomes production under sunk-cost pressure.
  - id: 126
    rationale: the general discipline this teardown operationalises for one procurement choice — hazards, controls, evidence, and residual risk owned by name are risk management's vocabulary applied to a single AI-tool decision.
references:
  - title: "Human Compatible: Artificial Intelligence and the Problem of Control"
    authorYear: Stuart Russell (2019)
    supports: the foundational case for treating generation as an unverified primitive that requires external verification and control, rather than trusting model behavior directly.
  - title: Designing Machine Learning Systems
    authorYear: Chip Huyen (2022)
    supports: the engineering discipline of decomposing an ML product into its constituent pipeline stages rather than treating "the model" as the whole system — the same reframing this card applies to AI-native vendor pitches.
---

# AI Tool Teardown

**Category:** [Applied AI](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

AI Tool Teardown is a repeatable systems-engineering method for turning an AI product, platform, or vendor pitch into a **defensible suitability decision** — for a named use case, backed by evidence that's labeled by how much it should be trusted, ending in a verdict a risk committee could actually rely on. It exists because most AI discourse describes *components and artifacts* — "it has a vector database, an orchestrator, agents" — which imports reliability that isn't there and lets marketing language set the frame. The method decomposes by function and failure mode, then wraps that lens in an **assurance spine** — use case → hazards → architecture & data paths → controls → evidence → residual risk → conditional decision — so the output is a decision, not just an architectural critique.

The single most important discipline: **the use case, not the product, is the unit of assessment.** The same system can be fit for internal drafting and unfit for filing, client advice, conflicts work, or autonomous communication. Never issue a verdict on "the tool" — issue it on "this tool, for this use case, at this level of reliance."

The output is analysis, not a document — deliver it conversationally, in plain language when the audience isn't systems-trained, unless the user asks for something written down.

---

## Mental Model

Frame the decision before touching architecture. Establish who operates the system and who is affected by its output, what data classes are involved, and the degree of reliance a human places on the result — advisory, reviewed-before-use, communicated to a third party, or automatically acted upon. Above all, name the **unacceptable losses** each failure type would cause — a wrong filing, a missed deadline, a fabricated authority, a conflict breach, a client-data exposure — before deriving anything else. Hazards and controls come *from* those named losses, not from the feature list. A high-reliance, auto-acted, third-party-facing use case demands evidence that a low-reliance internal-draft use case simply doesn't.

Only then reach for the orchestration reframe: analyze the system as a layer wrapping a bought-in generation primitive, and ask what the vendor actually built in the other four functions. Hold this loosely, though — **the model is a replaceable dependency in principle, but never operationally or legally fungible.** Swapping it can change factual and legal performance, context capacity, data-processing terms and subprocessors, residency, tool-use behaviour, version stability, and IP indemnities. Evaluate the model supply chain as its own object, not just the scaffolding built around it.

Two structural facts do most of the remaining analytical work once the system is partitioned this way:

- **Generation nests inside the others.** A reranker is a generation block inside assembly; an LLM-as-judge is a generation block inside verification; a planning step is a generation block inside control. Each nested generation drags its full failure signature — unverifiable confident-wrongness — into a block you were about to treat as deterministic. Always hunt for hidden generation blocks: they're where unacknowledged risk and cost concentrate.
- **"Reasoning" is not a sixth component.** It's the generation primitive in a self-conditioning loop, governed by control. Its distinctive failure — coherent progression into a wrong basin — is a control-and-verification failure, not a new primitive. Practical consequence: "just think longer" extends the very loop that locks in the early error; more reasoning helps *only* when the domain supplies an intermediate verification signal (math, code) and is theater when it doesn't (open-ended judgment, factual recall the model lacks).

---

## The Five Functional Components

Partition the system by what work is done, sorted by dominant function and failure signature. These five are a **deliberately chosen abstraction, not irreducible atoms** — real systems are graphs with parallel, recursive, and asynchronous paths, and some concerns (access control, policy enforcement, observability, audit) cut across several blocks at once. The abstraction earns its place by making failure modes and composition legible, not by being the only valid partition.

1. **Context assembly** — choosing the conditioning bytes: retrieval, memory read, prompt construction, tool-result insertion, document grounding. **Often probabilistic, not deterministic** — OCR, embeddings, approximate retrieval, reranking, and entity resolution can all fail silently. Privileged data enters the path here, so this block carries the governance weight.
2. **Generation** — sampling a token distribution conditioned on context. The one genuinely irreducible LLM primitive. Stochastic, unverified by construction. Failure mode: **plausible wrongness with no internal error signal** — the failure everything else exists to catch.
3. **Verification** — a decision procedure applied to an output. Citations, confidence scores, and audit trails are not, by themselves, verification — see *The Assurance Spine* below for the five things verification actually has to cover. Failure mode: **the coverage gap** — it only catches wrongness its oracle can see.
4. **Control** — given verification outcomes, deciding the next action: halt, retry, branch, escalate. **Not deterministic when routing or planning is itself model-driven** — that's a nested generation block — and it extends outward to the human supervisory interface, not just the internal loop. Failure mode: non-termination or premature halt.
5. **Effect** — causing a change in external state: calling an API, writing or redlining a file, sending a message, producing a deliverable. The only block with side effects. Failure mode: the irreversible bad action.

They compose into one loop — assemble → generate → verify → control → effect, with control looping back to re-assemble.

**The projection rule.** An approach is better to the degree it (a) moves load-bearing correctness off generation and onto the deterministic blocks, and (b) has verification coverage that actually overlaps the empirical failure distribution of the generation steps it guards. The danger configuration — the one that **demos beautifully and fails silently** — is high generation-dependence paired with low coverage overlap. Most hype rewards exactly this, because the failures are invisible in a demo. A tool that leads with capability and autonomy but is quiet on verification is showing you this configuration.

---

## The Assurance Spine

Every teardown follows one sequence: **use case → hazards → architecture & data paths → controls → evidence → residual risk → conditional decision.** The framing step (see Mental Model) supplies the use case and the named unacceptable losses; everything else in this section is how the middle of that spine avoids becoming a rhetorical exercise.

**Verification is not one thing.** Split it into five and assess each separately: *provenance* (where information came from), *validation* (whether output satisfies defined checks), *evaluation* (measured performance on representative tasks), *approval* (who may accept or act on the output), and *monitoring* (whether performance stays within limits over time). A vendor can offer a citation, a confidence score, and an audit trail and still have verified nothing — a citation may not support the proposition it's attached to, a confidence score is usually uncalibrated, and an audit trail can faithfully record a defective process. Where citations matter, check two tiers separately: **source grounding** (does the output faithfully reflect the input corpus?) and **authority grounding** (is the cited material itself valid, current, and applicable?). A tool can pass one at 100% while failing the other — it can perfectly quote a document that itself relies on an authority that no longer holds.

**Correct the method's own earlier instinct.** Treating "the vendor didn't mention it" as close to a verdict was a mistake in how this method used to be applied. Silence means *not established on available evidence* — an evidence gap to close, not proof of absence. Label every finding with its evidence standard: `observed test result` · `contractual commitment` · `technical documentation` · `independent assurance` · `vendor assertion` · `inference`. A finding resting only on `vendor assertion` or `inference` is weaker than one resting on `observed test result` or `independent assurance`, and the assessment must say so — this is what turns the teardown from a rhetorical device into an assurance instrument.

**End every teardown on a conditional decision, never on an architectural observation:** approve / approve-with-controls / pilot-only / reject, together with the conditions required for the verdict to hold, the residual risks and who accepts them, the owner accountable for each control, the evidence gaps still to close, and — if pilot-only — the pilot's limits and its review triggers. The decision is for a specific use case at a specific reliance level; the same product can legitimately earn different verdicts for different use cases.

---

## The Governance Lens

For regulated or confidential domains, governance is a **fourth axis**, orthogonal to cost and scale, and it is frequently the binding constraint that overrides cost optimization. Never reduce it to a single sensitive/not-sensitive flag — it has three independent sub-properties: **residency** (where a block is legally permitted to run, versus where it's cheapest), **exposure surface** (what leaves the trust boundary when the block runs — this contaminates downstream: once privileged data enters context, it, the generation step, its KV cache, any nested judge, and the effect block all inherit the classification until it's provably dropped), and **auditability/provenance** (whether inputs, outputs, and decisions are reconstructable after the fact — generation is the worst quadrant here: irreversible *and* poorly auditable).

Because exposure and provenance propagate along *paths through the graph*, governance can't be bolted on block-by-block. The design primitive is a governance boundary — an enclave — drawn around every block a privileged path crosses, with declassification checkpoints where content is provably stripped or summarized so downstream blocks fall outside it.

**Enclave minimization is the efficiency insight.** A task's regime is fixed by the exposure surface of its *output*: a low-exposure output (a PASS/FAIL, a score, a route decision) lets the enclave cut there and everything downstream run cheap; a high-exposure output (verbatim privileged spans, a draft) means no upstream cut is possible and the whole path stays inside the enclave at full premium. The skill is making the door small — decompose the task so the confidential core shrinks to the smallest sub-computation that genuinely must see the privileged data.

**But output shape alone cannot declassify.** A PASS/FAIL is not automatically low-exposure — it can reveal the existence of a confidential instruction, a client's legal position, whether a person or transaction triggered a risk rule, or membership in a confidential set, and it can leak privileged analysis by inference even when the bare disposition looks clean. A declassification checkpoint needs an explicit disclosure policy and an inference-threat analysis, not just a small output.

**The risk asymmetry:** overpaying by keeping something confidential that didn't need to be is bounded and tolerable; letting something out that should have stayed in is an unbounded breach. Bias every close call toward the enclave. Watch for two silent-leak traps: a lossy declassifier (a summarizer or redactor) that misses a privileged entity — it looks compliant and isn't; and an over-helpful verdict ("FAIL: clause 7.2 conflicts…") or an audit log that re-exports privileged content across a boundary you thought was clean. The bare disposition may exit; the reasons stay inside.

---

## Practitioner Heuristics

- **Frame the decision before opening the architecture.** Name the use case, the reliance level, and the unacceptable losses first. Hazards and controls are derived from those named losses, not from the feature list — and a high-reliance, auto-acted, third-party-facing use case earns a different bar of evidence than a reviewed internal draft.
- **Treat vendor silence as an evidence gap, not a verdict.** Label every finding by its evidence standard — observed test result, contractual commitment, technical documentation, independent assurance, vendor assertion, or inference — and let "not established on available evidence" stand as the honest answer rather than upgrading it to "absent" or downgrading it to "fine."
- **Split verification into its five parts and check each.** Provenance, validation, evaluation, approval, monitoring — a citation, a confidence score, and an audit trail are not verification by themselves. For anything citation-bearing, check source grounding and authority grounding separately; a tool can pass one while failing the other.
- **Reframe as orchestration, out loud — then check whether the model choice actually matters here.** State that the model is bought-in, confirm which models the tool wraps if disclosed, and then ask what a model swap would change: factual/legal performance, data terms, residency, indemnities. The reframe deflates marketing language; the follow-up question stops it from becoming a new blind spot.
- **Run the governance lens whenever the domain is confidential — and check what a "clean" output might still reveal.** Does the pitch minimize or maximize exposure surface? Does a PASS/FAIL, a route decision, or a "no match" response leak something by its mere existence?
- **Never end on an architectural observation.** Close on a conditional decision — approve / approve-with-controls / pilot-only / reject — with named conditions, residual risks and who accepts them, an owner, remaining evidence gaps, and, if pilot-only, a review trigger.

---

## Common Failure Modes

- **Treating vendor silence as itself the verdict.** This was the method's own earlier mistake: "the vendor didn't mention it" is an evidence gap to close, not proof of absence. Skipping the evidence-standard label turns a legitimate open question into an unearned conclusion.
- **Mistaking citations, confidence scores, or an audit trail for verification.** Each can be present and still verify nothing that matters — a citation that doesn't support the proposition, a confidence score that's uncalibrated, an audit trail that faithfully records a defective process.
- **Treating a low-exposure output as automatically safe.** A PASS/FAIL, a route decision, or a "no relevant result" response can still leak by inference — the existence of a confidential instruction, a client's legal position, or membership in a flagged set. A declassification checkpoint needs a disclosure policy, not just a small output shape.
- **Over-extending "the model is interchangeable" into "model choice doesn't matter."** The model is a replaceable dependency in principle but never operationally or legally fungible — swaps change performance, data terms, residency, and indemnities. Evaluate the model supply chain, not only the orchestration layer wrapped around it.
- **Ending on an architecture critique instead of a decision.** A teardown that stops at "it's silent on verification" hasn't finished the job — the job ends at a verdict with conditions, an owner, residual risks, and a review trigger.
- **Missing hidden generation blocks.** Treating a reranker, an LLM-as-judge, or a planning step as a deterministic part of assembly, verification, or control when each is really a nested generation call carrying its own confident-wrongness risk.

---

## Worked Example

A vendor pitches: *"An AI-native OS connecting every matter, document, email, conversation, and lawyer into one system, reachable via chat, email, voice, or phone. Not a tool, not a copilot — a new computational layer."*

**Frame it first.** The use case on the table is contract-clause summarisation and matter-status Q&A for associates, reviewed before anything leaves the firm — not autonomous filing or client communication. Named unacceptable losses: privilege waiver via a shared retrieval index, and a summary that misstates a deadline.

**Map the five functions.** The pitch is a bet on context assembly at firm scale (the connected graph, "perfect memory") and effect at firm scale (chat, email, voice, phone). Verification is claimed only as "confidence-scored answers with citations" — which on inspection is not verification: the citations are unchecked for authority grounding (is the quoted clause language still the operative version?), and the confidence score is vendor-reported with no calibration evidence behind it. Label this finding `vendor assertion`, not `observed test result`.

**Run the governance lens.** The connected graph is matter-agnostic — tenant-level isolation only, no evidence of walls *between* matters — so a retrieval hit could surface an adverse matter's document. Even a "no relevant clause found" response leaks the fact that the query was asked against that matter: inference leakage, not safety by small output.

**Decision:** pilot-only, not reject. The retrieval and summarisation quality may genuinely help associates, but only once (1) matter-level isolation is demonstrated, not asserted, (2) authority grounding is added or a human sign-off gate sits before any cited clause is relied on, and (3) the confidence score is recalibrated against the firm's own eval set. Residual risk: an occasional summarisation miss on reviewed drafts, accepted by the reviewing partner. Owner: the practice group running the pilot. Review trigger: any matter-isolation incident, or 90 days, whichever comes first.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
