# Nash Equilibrium
*A stable state where no player can improve by changing strategy alone*

**Category:** [Economics](../../docs/deck.html) &nbsp;|&nbsp; **[← Card Deck](../../docs/deck.html)**

---

## Definition

A Nash Equilibrium is a set of strategies — one for each player in a game — where no individual player can improve their outcome by unilaterally changing their own strategy, given the strategies of all other players. It is a state of mutual best-responses: each player is doing as well as they can, given what everyone else is doing. Named after mathematician John Nash, it is the central solution concept of game theory and the foundation for analysing strategic interaction.

---

## Mental Model

Equilibrium doesn't mean everyone is happy or that the outcome is optimal — it means no one has an individual incentive to defect. This is the key insight. Markets, arms races, standards battles, and office politics all tend toward Nash Equilibria that may be collectively terrible but individually stable. The classic example is the Prisoner's Dilemma, where mutual defection is the Nash Equilibrium even though mutual cooperation would make both players better off. The framework reveals why coordination fails: when individual incentives point away from the collectively good outcome, rational actors end up in a bad equilibrium and stay there.

For practitioners, Nash Equilibrium is most useful as a diagnostic: "What is the stable end-state of this strategic situation, and is it where we want to end up?" If the equilibrium is bad, the question becomes how to change the game — the payoff structure, the information available, or the players' ability to make binding commitments — rather than trying to persuade rational actors to act against their incentives.

---

## Practitioner Heuristics

- **Map the payoff structure before predicting behaviour.** The equilibrium follows from the payoffs. Before predicting what competitors, partners, or employees will do, write out (even roughly) what each player gains and loses under each combination of choices.
- **Distinguish equilibria from optimal outcomes.** A Nash Equilibrium is stable, not necessarily good. The relevant question is: is the equilibrium we're heading toward the one we want? If not, change the game.
- **Look for multiple equilibria.** Many situations have more than one equilibrium. When they do, the key question shifts to which one players will coordinate on — this is where Schelling Points become relevant.
- **Change the game when the equilibrium is bad.** If rational actors keep ending up somewhere you don't want, the answer is rarely more persuasion — it's redesigning incentives, enabling binding commitments, or changing the information structure.
- **Identify dominant strategies first.** If one player has a strategy that is best regardless of what others do (a dominant strategy), they will play it. Dominant strategies simplify equilibrium analysis enormously.

---

## Common Failure Modes

- **Assuming the equilibrium is optimal.** Confusing "stable" with "good." Nash Equilibria are often collectively suboptimal; stability is a property of individual incentives, not joint welfare.
- **Ignoring dynamic games.** Nash Equilibrium is a static concept. In repeated games, cooperation can emerge and the equilibrium changes. Applying static game theory to ongoing relationships misses the role of reputation and reciprocity.
- **Treating payoffs as fixed when they're designable.** Many practitioners accept the game as given. In organisations and markets, you often have the power to change the payoff structure — which changes the equilibrium.
- **Assuming common knowledge of rationality.** Nash Equilibrium assumes all players are rational and know others are rational. In practice, players have bounded rationality, incomplete information, and emotional responses that diverge from the model.

---

## Worked Example

Two competing supermarket chains are each deciding whether to keep current prices or cut prices. If both hold prices: both earn £10m profit. If one cuts and the other holds: cutter earns £15m, holder earns £4m. If both cut: both earn £6m.

Each chain reasons: "If the other holds, I earn more by cutting (£15m vs £10m). If the other cuts, I earn more by cutting (£6m vs £4m). Cutting is my dominant strategy regardless." Both cut. Nash Equilibrium: both earn £6m — worse than if both had held at £10m. The stable outcome is a price war that harms both players. Changing the equilibrium requires either a credible commitment mechanism (binding price agreements — often illegal) or a repeated game where reputation for not cutting is worth maintaining.

---

## Connections

→ [230·Prisoner's Dilemma](../Economics/prisoners-dilemma.md) — the archetypal Nash Equilibrium where mutual defection is individually rational but collectively catastrophic.
→ [51·Incentives](../Psychology/incentives.md) — equilibria are determined by the incentive structure; change the incentives and you change the equilibrium.
→ [29·Red Queen Dilemma](../Systems/red-queen-dilemma.md) — an arms-race dynamic is a Nash Equilibrium in which all players keep escalating because unilateral de-escalation makes them worse off.
→ [231·Tragedy of the Commons](../Economics/tragedy-of-the-commons.md) — overuse of shared resources is a Nash Equilibrium: each individual's best response is to extract more, regardless of what others do.
→ [236·Schelling Points](../Economics/schelling-points.md) — when multiple equilibria exist, Schelling Points explain which one players coordinate on without communication.
→ [121·Principal–Agent Problem](../Economics/principal-agent-problem.md) — misaligned incentives between principals and agents create equilibria where agents act against the principal's interest.
→ [101·Trust](../Psychology/trust.md) — trust enables escape from bad equilibria (like the Prisoner's Dilemma) by enabling credible commitments to cooperate.
→ [262·Incentive Design](incentive-design.md) — incentive design aims to move the equilibrium: make the Nash outcome the collectively desirable one
→ [232·Free Rider Problem](free-rider-problem.md) — undercontribution is a Nash Equilibrium in public goods games: given uncertainty about others' contributions, not contributing is individually rational.

## References

- *A Beautiful Mind* — Sylvia Nasar (1998) — the accessible biography of Nash that explains the equilibrium concept in context.
- *The Evolution of Cooperation* — Robert Axelrod (1984) — empirical exploration of when cooperation emerges from Nash-equilibrium dynamics.


---

*Part of the [Skills Framework](../../Skills%20Framework.md) · [Card Deck](../../docs/deck.html)*
