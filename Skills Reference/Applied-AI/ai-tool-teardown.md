---
id: 268
name: AI Tool Teardown
category: Applied AI
cardType: extended
tagline: Decompose the pitch into five functions, then find which one it's silent about
connections:
  - id: 183
    rationale: the governance cousin — teardown decides whether a vendor's control/verification blocks deserve trust; authority boundaries is the register for building that trust when you own the system.
  - id: 184
    rationale: enclave minimization is the same discipline in miniature — shrink what a block is exposed to down to the smallest thing the task genuinely requires.
  - id: 185
    rationale: hidden generation blocks (a reranker, a nested judge) are exactly where untrusted content re-enters the reasoning path; the teardown's "find the hidden generation" move is injection-surface mapping applied to someone else's architecture.
  - id: 224
    rationale: find the silence is a red-team move pointed at a vendor's pitch instead of your own plan — attack the story before your adversary (or your regulator) does.
  - id: 218
    rationale: the teardown's gaps become the stress-test questions a build-vs-buy business case needs answered before the numbers are trusted.
  - id: 5
    rationale: separating independently verifiable architecture claims from founder/marketing assertions is a circle-of-competence discipline applied to vendor pitches.
  - id: 121
    rationale: generation is an unsupervised agent — a brilliant, overconfident colleague who never says "I'm not sure" — and verification/control are the principal's mechanisms for checking an agent whose incentives and information you don't fully see.
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

AI Tool Teardown is a repeatable systems-engineering method for reasoning about any AI product, platform, or vendor pitch. It exists because most AI discourse describes *components and artifacts* — "it has a vector database, an orchestrator, agents" — which imports reliability that isn't there and lets marketing language set the frame. The method instead decomposes any AI system by **irreducible function**, sorted by determinism class and failure signature rather than by named artifact. That reframing makes composition rules predictive: you can project which of two approaches is better and why, and you can locate exactly where a pitch is silent on the things that actually determine whether it works.

The output is analysis, not a document — deliver it conversationally, in plain language when the audience isn't systems-trained, unless the user asks for something written down.

---

## Mental Model

Never analyze an AI tool as "an AI." Analyze it as an **orchestration layer wrapping a bought-in generation primitive**. Almost every serious platform buys its model — GPT, Claude, Gemini — and competes on the four *other* functional blocks. So the first sentence of any teardown is: *the model is the interchangeable part; the platform is everything else.* Then you ask what the vendor has actually built in each of the five functions — and, critically, which ones they're quiet about.

Two structural facts do most of the analytical work once you've partitioned the system this way:

- **Generation nests inside the others.** A reranker is a generation block inside assembly; an LLM-as-judge is a generation block inside verification; a planning step is a generation block inside control. Each nested generation drags its full failure signature — unverifiable confident-wrongness — into a block you were about to treat as deterministic. Always hunt for hidden generation blocks: they're where unacknowledged risk and cost concentrate.
- **"Reasoning" is not a sixth component.** It's the generation primitive in a self-conditioning loop, governed by control. Its distinctive failure — coherent progression into a wrong basin — is a control-and-verification failure, not a new primitive. Practical consequence: "just think longer" extends the very loop that locks in the early error; more reasoning helps *only* when the domain supplies an intermediate verification signal (math, code) and is theater when it doesn't (open-ended judgment, factual recall the model lacks).

---

## The Five Functional Components

Partition the system by what irreducible work is done, sorted by determinism class and failure signature. These five are the atoms; every framework feature slots into exactly one.

1. **Context assembly** — deterministically choosing the conditioning bytes: retrieval, memory read, prompt construction, tool-result insertion, matter/document grounding. Failure mode: *silent omission or misselection*. Privileged data enters the path here, so this block carries the governance weight.
2. **Generation** — sampling a token distribution conditioned on context. The one genuinely irreducible LLM primitive. Stochastic, unverified by construction. Failure mode: **plausible wrongness with no internal error signal** — the failure everything else exists to catch.
3. **Verification** — a decision procedure applied to an output: accept, reject, route (schema validators, test execution, citations, confidence scores, LLM-as-judge). Failure mode: **the coverage gap** — it only catches wrongness its oracle can see.
4. **Control** — given verification outcomes, deciding the next action: halt, retry, branch, escalate (the agent loop, planning, workflow orchestration). Failure mode: non-termination or premature halt.
5. **Effect** — causing a change in external state: calling an API, writing or redlining a file, sending a message, producing a deliverable. The only block with side effects. Failure mode: the irreversible bad action.

They compose into one loop — assemble → generate → verify → control → effect, with control looping back to re-assemble.

**The projection rule.** An approach is better to the degree it (a) moves load-bearing correctness off generation and onto the deterministic blocks, and (b) has verification coverage that actually overlaps the empirical failure distribution of the generation steps it guards. The danger configuration — the one that **demos beautifully and fails silently** — is high generation-dependence paired with low coverage overlap. Most hype rewards exactly this, because the failures are invisible in a demo. A tool that leads with capability and autonomy but is quiet on verification is showing you this configuration.

---

## The Governance Lens

For regulated or confidential domains, governance is a **fourth axis**, orthogonal to cost and scale, and it is frequently the binding constraint that overrides cost optimization. Never reduce it to a single sensitive/not-sensitive flag — it has three independent sub-properties: **residency** (where a block is legally permitted to run, versus where it's cheapest), **exposure surface** (what leaves the trust boundary when the block runs — this contaminates downstream: once privileged data enters context, it, the generation step, its KV cache, any nested judge, and the effect block all inherit the classification until it's provably dropped), and **auditability/provenance** (whether inputs, outputs, and decisions are reconstructable after the fact — generation is the worst quadrant here: irreversible *and* poorly auditable).

Because exposure and provenance propagate along *paths through the graph*, governance can't be bolted on block-by-block. The design primitive is a governance boundary — an enclave — drawn around every block a privileged path crosses, with declassification checkpoints where content is provably stripped or summarized so downstream blocks fall outside it.

**Enclave minimization is the efficiency insight.** A task's regime is fixed by the exposure surface of its *output*: a low-exposure output (a PASS/FAIL, a score, a route decision) lets the enclave cut there and everything downstream run cheap; a high-exposure output (verbatim privileged spans, a draft) means no upstream cut is possible and the whole path stays inside the enclave at full premium. The skill is making the door small — decompose the task so the confidential core shrinks to the smallest sub-computation that genuinely must see the privileged data.

**The risk asymmetry:** overpaying by keeping something confidential that didn't need to be is bounded and tolerable; letting something out that should have stayed in is an unbounded breach. Bias every close call toward the enclave. Watch for two silent-leak traps: a lossy declassifier (a summarizer or redactor) that misses a privileged entity — it looks compliant and isn't; and an over-helpful verdict ("FAIL: clause 7.2 conflicts…") or an audit log that re-exports privileged content across a boundary you thought was clean. The bare disposition may exit; the reasons stay inside.

---

## Practitioner Heuristics

- **Establish factual footing before anything else.** For a specific vendor: funding, stage, real product footprint, verifiable claims. Separate what's independently verifiable from founder or marketing assertions, and flag unverifiable name-drops ("the CIO at BigFirm and I agree…") as unverified sales claims, not facts.
- **Reframe as orchestration, out loud.** State that the model is bought-in and interchangeable, then confirm which models the tool actually wraps, if disclosed. This single reframe deflates most category-defining marketing language on contact.
- **Map each of the five functions to what the tool actually builds, and name the hidden generation blocks.** Be concrete — vague answers here are themselves a finding.
- **Find the silence.** Which of the five is the tool quiet about? For legal and other regulated work, silence on verification and control is the loudest signal, because every credible platform leads with its verification story — citations, confidence flags, audit trails. Strong on assembly and effect but silent on verification is the danger configuration.
- **Run the governance lens whenever the domain is confidential.** Does the pitch minimize or maximize exposure surface? "Connect everything, reachable from anywhere" is maximal exposure — the opposite of what enclave minimization wants.
- **Turn the gaps into the evaluation questions.** The silences you find in the previous two steps *are* the questions to put to the vendor: show me the verification block, the control/audit layer, and the enclave boundary.

---

## Common Failure Modes

- **Analyzing "an AI" as a monolith.** Crediting the platform for what is actually the bought-in model's raw capability, or vice versa — either way, the analysis can't locate where the vendor's real engineering investment (or its absence) sits.
- **Missing hidden generation blocks.** Treating a reranker, an LLM-as-judge, or a planning step as a deterministic part of assembly, verification, or control when each is really a nested generation call carrying its own confident-wrongness risk.
- **Rewarding the danger configuration.** Being impressed by a pitch that is strong on assembly and effect — the parts that demo well — while it stays silent on verification and control, the parts that determine whether it's trustworthy under load.
- **Collapsing governance to one flag.** Treating data sensitivity as binary instead of tracking residency, exposure, and provenance separately — this is exactly how a lossy declassifier or an over-helpful audit log slips a privileged span across a boundary that looked clean.
- **Single-number cost thinking.** Assuming the slow part of the system and the expensive part are the same block. Accelerator-bound blocks set the cost floor, I/O-bound blocks set the latency ceiling, and globally-stateful blocks set the consistency limit — they rarely coincide.

---

## Worked Example

A vendor pitches: *"An AI-native OS connecting every matter, document, email, conversation, and lawyer into one system, reachable via chat, email, voice, or phone. Not a tool, not a copilot — a new computational layer."*

Teardown: strip the language and it's a bet on context-assembly at firm scale (the connected graph, "perfect memory") and effect at firm scale (act via any channel). It is silent on verification and control — no grounding, citation, confidence, or audit claim — which for legal work is the single most important missing block, putting it squarely in the high-generation-dependence, low-coverage danger configuration. Run the governance lens: "connect everything, reachable from anywhere" describes maximal exposure surface, the exact opposite of enclave minimization. Verdict: on visible evidence, an early-stage integration-and-billing tool wearing operating-system language — the "compounding layer" is a claim the architecture doesn't yet support. The evaluation questions write themselves: show the verification block, the control/audit layer, and the enclave boundary; if they're thin, the pitch isn't what the prose claims.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
