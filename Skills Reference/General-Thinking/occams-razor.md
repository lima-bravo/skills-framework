---
id: 3
name: Occam's Razor
category: General Thinking
cardType: standard
tagline: Prefer simpler explanations
connections:
  - id: 0
    rationale: both strip away unwarranted complexity; first principles rebuilds from the ground up, Occam prunes existing explanations.
  - id: 7
    rationale: when explanations are roughly equally probable, Occam provides the tiebreaker.
  - id: 55
    rationale: complex explanations are often motivated; Occam is a check on that motivation.
  - id: 226
    rationale: sister parsimony principle in a different domain; Occam's Razor governs explanatory economy, Grice governs communicative economy.
  - id: 233
    rationale: prefer the simplest decomposition that captures the dominant factors — adding more factors increases arithmetic complexity without necessarily improving the accuracy of a Fermi estimate.
  - id: 263
    rationale: Delete Before You Optimise applies Occam's parsimony to requirements and process steps — both resist unnecessary complexity, but this card targets execution rather than explanation.
references:
  - title: The Logic of Scientific Discovery
    authorYear: Karl R. Popper (1934; English trans. 1959)
    supports: frames Occam's Razor in the context of scientific methodology and falsifiability.
  - title: "How to Solve It: A New Aspect of Mathematical Method"
    authorYear: George Pólya (1945)
    supports: "the practical heuristic companion: solve the simplest version of the problem first."
  - title: "The Demon-Haunted World: Science as a Candle in the Dark"
    authorYear: Carl Sagan (1996)
    supports: Occam's Razor appears explicitly in Sagan's "Baloney Detection Kit" as a core tool of scientific reasoning.
---

# Occam's Razor

**Category:** [General Thinking](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---
## Definition

Occam's Razor is the principle that, among competing explanations that fit the evidence equally well, the simpler one should be preferred. The medieval philosopher William of Ockham stated it as: *"entities should not be multiplied beyond necessity."* It is not a claim that the world is simple — it is a decision rule about which hypothesis to work with in the absence of evidence that distinguishes them.

In practice, simplicity means fewer assumptions, fewer moving parts, and fewer special conditions that need to hold simultaneously for the explanation to be true.

---

## Mental Model

Each additional assumption in an explanation is an additional point of failure. A theory with five independent assumptions is true only if all five hold; each assumption multiplies the uncertainty. Simple explanations have fewer attack surfaces. The practitioner's internal question is: *"Have I added any explanatory component that is not doing actual work? What happens to the explanation if I remove it?"*

---

## Practitioner Heuristics

- **Count assumptions, not words.** A long explanation can have few assumptions; a short one can have many hidden dependencies. Count the independent things that must be true.
- **"What is the simplest explanation consistent with all the evidence?"** Not some of the evidence — all of it. Razor cuts excess but cannot ignore data.
- **Apply especially to your own motivated reasoning.** Complex explanations most often appear when we are trying to explain away inconvenient evidence. The complexity is a tell.
- **Distinguish simplicity of explanation from simplicity of mechanism.** The correct explanation of complex phenomena (DNA replication, market pricing) may be mechanistically intricate; what Occam requires is that you not add additional explanatory layers beyond what the evidence demands.
- **Use as a tiebreaker, not a trump card.** If the simpler explanation fits the evidence 95% as well as the complex one, prefer the simpler. If the simpler one fits 60% as well, gather more evidence.

---

## Common Failure Modes

- **Over-application.** "Everything should be made as simple as possible, but not simpler." Occam's Razor is a tiebreaker, not a licence to ignore genuine complexity. The failure mode is selecting an explanation so parsimonious it cannot account for all the data.
- **Confusing familiarity with simplicity.** The explanation you've heard before feels simpler because it's familiar, not because it has fewer assumptions. Check the actual assumption count.
- **Using Razor to avoid investigation.** "The simple explanation is X, so I don't need to look further." Occam guides selection among explanations currently on the table; it does not eliminate the need to find better explanations.

---

## Worked Example

A startup's north-star metric drops 15% over two weeks. The team generates three explanations: (1) a seasonal dip in user behavior, (2) a product change shipped on day one of the decline combined with a specific segment's particular sensitivity to that feature change, (3) a broader shift in competitive landscape causing users to explore alternatives. Occam's Razor says: test explanation 1 first — it requires only one assumption (seasonality exists) and is checkable against historical data. Only if seasonality doesn't account for the drop should you move to the two-assumption hypothesis, and so on.

---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
