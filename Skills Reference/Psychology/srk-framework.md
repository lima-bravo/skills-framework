# SRK Framework

**Category:** Psychology
**Tagline:** Experts don't think harder — they think less. Until the situation demands otherwise.

## Definition

The Skills–Rules–Knowledge (SRK) framework is a taxonomy of human cognitive control developed by Jens Rasmussen in 1983, arising from his research into how operators in complex industrial systems — nuclear plants, air traffic control, process control — actually make decisions and make errors. It describes three qualitatively different modes of behaviour, each with distinct cognitive demands and characteristic failure modes.

**Skill-based behaviour** is automatic and largely unconscious: smooth, integrated sensorimotor patterns executed without deliberate attention. A surgeon's hand movements, an experienced driver navigating a familiar road, a pilot's instrument scan. Errors at this level are *slips and lapses* — the right action misfired (slip) or a step forgotten in a well-known sequence (lapse). They are not failures of knowledge but of execution.

**Rule-based behaviour** applies stored if–then procedures to recognised situations: "if the alarm shows X, follow procedure Y." The operator recognises the situation pattern and retrieves the matching response. Errors here are *mistakes in rule selection* — applying the right rule to the wrong situation, applying an outdated rule, or selecting an inappropriate rule because the situation was misclassified. The rule itself may be correct; the diagnosis of when to apply it is wrong.

**Knowledge-based behaviour** engages when no familiar pattern is recognised and no rule applies. The operator must reason explicitly from first principles, construct a mental model of the system, and derive a course of action. This is slow, effortful, error-prone, and cognitively expensive. Errors are *systematic mistakes* — logical errors in the reasoning itself, incorrect mental models, or failures to account for non-obvious system interactions.

## Mental Model

Think of the three levels as gears. First gear (knowledge-based) is for novel terrain: maximum traction, slow, effortful, burns fuel. Second gear (rule-based) is for recognised situations with a known map: more efficient, less attention required, works well as long as you're on the right road. Third gear (skill-based) is for familiar ground: fast, fluid, almost no conscious attention. Experienced operators spend most of their time in second and third gear. The danger is shifting into third gear on terrain that requires first — when a situation looks familiar but isn't. The error is not lack of skill; it is misclassification of the terrain.

## Practitioner Heuristics

- **Classify errors before diagnosing causes.** When something goes wrong, first ask: was this a slip (right action, wrong execution), a rule mistake (wrong rule applied), or a knowledge mistake (flawed reasoning from first principles)? The intervention is entirely different for each. Retraining doesn't fix slips; procedure redesign doesn't fix knowledge gaps.
- **Checklists work because they externalise rule-based behaviour.** They move cognitively expensive rule recall out of working memory and onto paper, reducing the risk of lapses and freeing attention for knowledge-based demands when needed. Design checklists for the rule-based level; don't expect them to substitute for knowledge-based reasoning in novel situations.
- **High-stakes novelty requires explicit escalation to knowledge-based mode.** Experienced operators are fast precisely because they pattern-match to rules. Under time pressure, this is an advantage. In genuinely novel situations — new system configurations, unprecedented combinations of failures — the speed of rule-based processing becomes dangerous. Build in triggers that force a pause and explicit reasoning.
- **Train for the boundary conditions between levels.** Most training rehearses skill- and rule-based performance. The hardest failures happen at the transitions: when a situation looks rule-based but isn't, or when someone is confident they're in familiar terrain but the system has changed beneath them. Scenario training should deliberately introduce situations that violate familiar patterns.
- **In post-mortems, resist attributing skill-level errors to motivation or care.** Slips and lapses are not caused by not trying hard enough; they are caused by automaticity under conditions that require attention. The intervention is design (forcing functions, checklists, environmental cues), not exhortation.

## Common Failure Modes

**Misclassification under pressure.** A situation presents familiar surface features but has novel underlying dynamics. The operator classifies it as rule-based and applies a familiar procedure. The procedure is wrong for this situation, but the confidence that comes with pattern recognition suppresses further inquiry. This is the mechanism behind many aviation and process control accidents: the crew was competent and experienced; they were operating in the wrong gear.

**Knowledge-based overload in emergencies.** Systems are designed for normal operations. When multiple simultaneous failures occur, operators are pushed into knowledge-based mode precisely when cognitive load is highest and time is shortest. Without adequate mental models of the system, knowledge-based reasoning fails. This argues for investing in deep system understanding during training, not just procedural fluency.

**Treating all errors as the same kind.** Organisations often respond to any error with the same intervention: retraining, increased supervision, revised procedures. But a lapse (forgot step 7) requires a different response from a rule mistake (applied wrong procedure) which requires a different response from a knowledge mistake (reasoned incorrectly about a novel situation). Undifferentiated responses leave the actual cause unaddressed.

**Skill-level complacency in high-stakes contexts.** When a task becomes skill-based, it demands less attention — which means changes in the environment are less likely to be noticed. Experienced practitioners in high-stakes roles need explicit mechanisms to periodically re-engage deliberate attention, precisely because their competence has made vigilance feel unnecessary.

## Worked Example

A senior software engineer is deploying a configuration change to a production system — a task she has done dozens of times. It is skill-based for her: a familiar sequence of commands executed fluidly. She is also in a meeting on her laptop. She runs the deployment script, but this time the environment is a production system rather than staging — she navigated to the wrong directory. A slip: the right action (run the script) applied to the wrong target. The error is not a knowledge failure or a rule failure; it is automaticity colliding with an environmental difference she didn't register.

The post-mortem asks: was she undertrained? No. Was the procedure unclear? No. Was she not trying? No. The SRK analysis identifies a slip caused by skill-based execution without a verification checkpoint. The intervention: a mandatory confirmation prompt showing the target environment before any deployment script runs — a forcing function that interrupts automaticity at the moment it matters. Not more training; a design change.

## Connections

- **After-Action Review** — SRK classification is a useful structuring lens for AARs: separate the slip/lapse findings from the rule mistake findings from the knowledge mistake findings; each stream requires a different remediation discussion
- **Fundamental Attribution Error** — the most common misapplication of SRK findings: attributing skill-level slips to carelessness or rule-level mistakes to incompetence, when both are normal features of how cognition works
- **Drift to Failure** — organisations drift toward unsafe conditions partly because rule-based and skill-based performance masks growing mismatches between mental models and system reality
- **Cynefin Framework** — maps partly onto SRK: complicated domain maps to rule-based, complex/chaotic domains force knowledge-based engagement; SRK explains the cognitive mechanics behind Cynefin's prescriptions
- **Experiment Design** — novel situations that require knowledge-based reasoning are the ones that most benefit from structured hypothesis testing; SRK identifies when you are in the regime where experimentation is needed
- **Leader's Intent** — intent-based leadership works partly because it allows operators to apply knowledge-based reasoning in novel situations without waiting for rule-based authorisation

## References

- Rasmussen, J. (1983) "Skills, Rules, and Knowledge; Signals, Signs, and Symbols, and Other Distinctions in Human Performance Models" — *IEEE Transactions on Systems, Man, and Cybernetics*
- *Tasks, Errors and Mental Models* — Goodstein, Andersen & Olsen (eds.), 1988
- Reason, J. (1990) *Human Error* — Cambridge University Press
- *The Design of Everyday Things* — Don Norman, 1988
- Vicente, K. (1999) *Cognitive Work Analysis* — Lawrence Erlbaum
