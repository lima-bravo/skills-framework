---
id: 276
name: Polanyi's Paradox
category: Applied AI
cardType: standard
tagline: We know more than we can tell — and that gap is exactly what resists automation
connections:
  - id: 268
    rationale: a vendor pitch that claims to replace expert judgment should be checked against this paradox first — ask whether the task's competence was ever codified in the first place, or only ever existed as tacit skill no interview extracted.
  - id: 184
    rationale: what to keep as a human-only step in a multi-agent workflow is often decided by this paradox — the tacit judgment step is the one that can't be safely handed to a model trained on codified patterns.
  - id: 275
    rationale: the human in the loop is frequently there specifically to supply the tacit judgment this paradox says can't be extracted into a rule — which is also exactly the judgment automation complacency erodes fastest.
  - id: 207
    rationale: skill-based behaviour is Polanyi's tacit knowledge in Rasmussen's cognitive-control vocabulary — fluent, largely inarticulate execution; the paradox explains why that specific mode resists codification, not just how it fails.
  - id: 6
    rationale: an expert's self-report of their own reasoning is itself a map — already a lossy compression of the tacit territory of their actual judgment, not a transcript of it.
  - id: 87
    rationale: the vertical bar's depth is disproportionately tacit — this is why deep expertise transfers through apprenticeship and repeated exposure, not documentation, and why a T-shaped hire can't simply write down what they know for someone else to codify.
references:
  - title: "The Tacit Dimension"
    authorYear: Michael Polanyi (1966)
    supports: the foundational text; the source of "we know more than we can tell" and the philosophical account of tacit knowing this card operationalises for automation decisions.
  - title: "Why Are There Still So Many Jobs? The History and Future of Workplace Automation"
    authorYear: David H. Autor, Journal of Economic Perspectives Vol. 29 No. 3 (2015)
    supports: the modern labor-economics application of the paradox — why formally sophisticated tasks were automated decades before common-sense tasks that resisted automation despite looking simple.
---

# Polanyi's Paradox

**Category:** [Applied AI](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Polanyi's Paradox is Michael Polanyi's 1966 observation that human beings know more than they can articulate — most human competence is tacit, embedded in skill and judgment that cannot be fully unpacked into explicit rules, even by the person who possesses it. The paradox has a sharp practical edge for automation and AI delegation: tasks that look effortless because they are skill-based — recognising a face, riding a bicycle, judging whether a contract clause is genuinely risky or boilerplate — are often the hardest to codify, precisely because the expert cannot fully explain the rule they're applying. Tasks that look intellectually demanding — arithmetic, formal logic, chess — can be far easier to automate, because their rules were always explicit. The paradox inverts the intuitive difficulty ranking that "delegate the easy-looking stuff to AI" quietly assumes.

---

## Mental Model

An experienced practitioner treats "can this be explained?" as a different question from "can this be done?" — and treats the gap between the two as the actual boundary of what can be automated or delegated, not the apparent difficulty of the task. A senior radiologist can look at a scan and sense that something is wrong before consciously identifying what; a veteran negotiator reads a room in a way they can't fully reconstruct afterward; a hiring manager forms an accurate read on a candidate from cues they couldn't list if asked. None of this is mysticism — it's pattern recognition compiled from thousands of prior instances, running below the level of conscious, articulable rule. The paradox is that this compiled competence cannot simply be interviewed out of the expert and handed to a system, because the expert's own account of what they did will always be an incomplete, after-the-fact rationalisation, not the actual decision procedure.

The corollary that matters for AI delegation: a task's resistance to automation tracks how tacit the judgment is, not how "hard" the task subjectively feels to a novice or how prestigious it appears. This is why formally sophisticated tasks were automated early, while tasks a five-year-old can do — recognise their mother's face across lighting conditions, catch a thrown ball — resisted automation for decades. The five-year-old's competence was never explicit in the first place, so there was no rule sitting there waiting to be extracted and codified.

---

## Practitioner Heuristics

- **Before delegating a task to a rule, a process, or an AI system, ask the expert to explain their decision procedure — not just their conclusion.** If they can only produce examples and a feeling, not a rule, the task is more tacit than it looks and will resist the codification you're about to attempt.
- **Treat "looks simple" as no evidence of automatability.** A task's subjective ease for an expert is produced by fluent tacit skill — exactly the kind of competence hardest to extract and hand to a system. Judge automatability by whether the rule is explicit, not by how effortless the task feels.
- **Distrust a codified rule extracted from a single expert's self-report.** What experts say they do and what they actually do diverge, often significantly — the self-report is itself already a lossy compression of tacit competence, filtered through the expert's own incomplete self-knowledge.
- **Watch for tasks that seem hard but are actually easy to automate, and vice versa.** Chess looked intellectually formidable and fell to search algorithms decades ago; folding a shirt looks trivial and remained a serious robotics research problem far longer. Invert your intuitive difficulty ranking and check which side of the paradox a task actually sits on.
- **When a task resists codification, the fix is usually apprenticeship or supervised practice, not better documentation.** Tacit knowledge transfers through demonstration, correction, and repeated exposure — writing a more detailed manual doesn't solve a problem the manual format was never suited to solve.

---

## Common Failure Modes

- **Assuming articulateness implies capability, or the reverse.** An expert who explains their reasoning fluently isn't necessarily using that reasoning to make the actual decision — and an expert who can't explain their process at all may still be reliably, tacitly correct. Neither fluency nor inarticulacy is a proxy for competence.
- **Building an AI system on a codified rulebook extracted from expert interviews**, then discovering the system fails precisely on the cases where the experts' real judgment departed from what they said they did.
- **Ranking automation targets by apparent task difficulty rather than by how codified the underlying judgment actually is**, and being repeatedly surprised at which tasks resist automation and which don't.
- **Treating a human reviewer's tacit "this looks off" instinct as a soft, dispensable signal** because it can't be quantified, when it may be catching exactly the failure modes a codified check was never designed to see.

---

## Worked Example

A law firm wants to automate first-pass contract review, starting with senior partners' expertise. Partners are interviewed and asked to state their rules for flagging risky clauses; the rules are codified into a checklist-driven tool. The tool performs well on the clause types partners explicitly described — non-standard indemnification language, unusual jurisdiction clauses — because those are exactly the patterns partners had already learned to name and explain to junior associates.

It performs poorly on a subtler category: clauses that are individually unremarkable but combine to create risk only visible in context, which partners flag reliably in practice but, when interviewed, could only describe as "something felt off about how these fit together." That judgment was never a rule the partners were following; it was tacit pattern recognition compiled from decades of cases, and no interview extracted it because the partners themselves couldn't fully articulate it. The firm's fix isn't a better interview — it's keeping partner review in the loop specifically for the holistic, cross-clause read, while letting the codified tool handle the clause-level checks it was actually built from.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
