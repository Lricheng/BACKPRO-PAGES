---
target: Back Pro GitHub Pages
total_score: 28
p0_count: 0
p1_count: 3
p2_count: 2
---

# Critique: Back Pro GitHub Pages (pre-polish baseline)

Target: https://lricheng.github.io/BACKPRO-PAGES/
Evidence: Playwright mobile screenshots (390×844) — `tmp/e2e/before/*.png`; detect.mjs clean.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Lang toggle lacks aria-pressed; active nav subtle |
| 2 | Match System / Real World | 4 | Legal/support copy clear for App Store users |
| 3 | User Control and Freedom | 3 | Lang persists; no skip link |
| 4 | Consistency and Standards | 3 | Matches App palette loosely; hex not OKLCH |
| 5 | Error Prevention | 4 | Static legal pages; low error surface |
| 6 | Recognition Rather Than Recall | 3 | Nav always visible; cards need stronger affordance |
| 7 | Flexibility and Efficiency | 2 | No search; long privacy scroll only |
| 8 | Aesthetic and Minimalist Design | 2 | Generic card stack; ghost-card pattern |
| 9 | Error Recovery | n/a | — |
| 10 | Help and Documentation | 4 | Support FAQ substantive |
| **Total** | | **28/40** | **Good — polish/color/motion needed** |

## Priority Issues

**[P1] Ghost-card pattern** — border + wide shadow together.

**[P1] Secondary text contrast** — muted gray too light on warm bg.

**[P1] Focus/accessibility gaps** — no skip link, weak focus rings.

**[P2] Flat hierarchy** — hero/cards/footer same weight.

**[P2] No motion feedback** — instant state changes.
