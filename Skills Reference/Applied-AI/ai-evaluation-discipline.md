---
id: 274
name: AI Evaluation Discipline
category: Applied AI
cardType: standard
tagline: A model you can't measure on your own data is a model you're trusting on faith
connections:
  - id: 268
    rationale: the teardown is the one-time procurement decision; this card is the standing practice you build once you already operate the system, to know whether the verdict the teardown reached still holds.
  - id: 211
    rationale: calibration is exactly what this card's evaluation practice measures for an AI system — whether stated or implied confidence tracks actual correctness, not just raw accuracy.
  - id: 142
    rationale: structural analogy — DORA gives a delivery pipeline a standing measurement instrument instead of anecdote; this card does the same for an AI system's output quality.
  - id: 55
    rationale: the informal-review failure mode this card exists to counter — outputs that get scrutinized are a biased sample, disproportionately either already-correct or already-flagged.
  - id: 225
    rationale: A/B testing checks whether a change helps in a live production comparison; this card's regression suite is the pre-production analogue, catching a regression before it ever reaches a live experiment.
references:
  - title: "AI Snake Oil: What Artificial Intelligence Can Do, What It Can't, and How to Tell the Difference"
    authorYear: Arvind Narayanan & Sayash Kapoor (2024)
    supports: the case for the gap between benchmark and marketing claims and real-world, task-specific performance, and why only your own evaluation closes that gap.
  - title: "Machine Learning Yearning"
    authorYear: Andrew Ng (2018)
    supports: the practitioner discipline of building dev/test sets that genuinely represent the deployment distribution, rather than convenient proxies.
---

# AI Evaluation Discipline

**Category:** [Applied AI](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

AI evaluation discipline is the ongoing practice of measuring an AI system's actual performance against a representative, labeled set of your own tasks — not the vendor's benchmark, not a generic leaderboard score — so that claims of accuracy, calibration, and improvement are checked against evidence rather than assumed. It is distinct from AI Tool Teardown's one-time procurement decision: teardown asks whether to adopt a system at all; evaluation discipline is what you build and run continuously once you already operate it, to know whether it is still performing as assumed and whether a change — a model swap, a prompt change, a new feature — made things better or worse.

---

## Mental Model

An experienced practitioner treats "the model works well" as a hypothesis requiring a standing instrument, not a one-time impression from a demo or a handful of good outputs. The instrument is an eval set: a curated, representative sample of real tasks with a known-correct or known-acceptable answer, scored the same way every time, re-run on a cadence and whenever anything in the pipeline changes.

Without an eval set, every claim about the system's quality is anecdotal — drawn from whichever outputs happened to be reviewed, which is a biased sample by construction: the outputs that get scrutiny are disproportionately the ones that already look wrong, or the ones a demo happened to showcase. The discipline is not "run more tests"; it is building the one instrument that lets a specific, falsifiable question be answered: is this system, on our own representative tasks, performing at the rate we assumed — and did the last change make that rate better or worse?

---

## Practitioner Heuristics

- **Build the eval set from your own tasks, not a public benchmark.** A vendor's benchmark score is evidence about the vendor's benchmark, not about your use case; construct or curate a sample that actually represents what the system will be asked to do in production.
- **Label the eval set before you need to defend a claim, not after.** An eval set built to justify a decision already made is not evidence — it's after-the-fact rationalization wearing the clothes of measurement.
- **Re-run the eval set on every material change, not just once at launch.** A prompt tweak, a model swap, a new retrieval source, or a context-window change can silently shift performance; the eval set is what catches the regression before a user does.
- **Track calibration, not just accuracy.** A system that is right 80% of the time but expresses 99% confidence on every answer is more dangerous than one that is right 70% of the time and knows which 30% it's unsure about — measure whether stated confidence tracks actual correctness.
- **Separate the eval set that measures "does it work" from the one that measures "did it get worse."** A regression suite (small, fast, run on every change) and a representativeness suite (broader, slower, run periodically) answer different questions and shouldn't be the same set.

---

## Common Failure Modes

- **Substituting a vendor benchmark for your own evaluation.** Citing a public leaderboard score as evidence the system performs well on your specific task, when the benchmark's tasks may not resemble yours at all.
- **Building the eval set after the decision, to justify it.** Constructing a "test" whose cases were chosen, consciously or not, because the system already handles them well, producing a number that confirms rather than tests the claim.
- **Never re-running the eval after a change.** Treating evaluation as a launch-gate event rather than a continuous practice, so a later model swap or prompt change silently regresses performance with nobody noticing until a user complains.
- **Measuring accuracy without measuring calibration.** Reporting a pass rate without checking whether the system's confidence signals, if any, actually track its correctness — a highly confident, frequently wrong system is worse than an honestly uncertain one.
- **Treating a small, cherry-picked sample of "looks good" outputs as an eval set.** Confirmation bias operating through evaluation: the outputs that get reviewed are disproportionately the ones that already look right, or the ones flagged by an unhappy user — neither is a representative sample.

---

## Worked Example

A legal team deploys an AI tool for first-pass contract clause review, adopted after an AI Tool Teardown concluded "pilot-only" with a review trigger of "recalibrated against the firm's own eval set." Three months in, no one has built that eval set — confidence in the tool rests entirely on a handful of associates saying "it's been pretty good so far."

A junior associate builds a 60-clause labeled set, drawn from real matters across five practice areas, each clause hand-scored by a senior reviewer for whether the tool's flag was correct, missed, or a false positive. The first run reveals the tool is excellent on standard indemnification language (94% accuracy) and unreliable on jurisdiction-specific liability caps (61% accuracy — worse than a coin flip on the hardest subset), a gap invisible from anecdotal impressions because the associates doing informal review were disproportionately working on standard-language matters. The eval set becomes the standing instrument: re-run after every prompt change, with the liability-cap subset flagged as a known weak spot requiring mandatory human review rather than spot-checking.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
