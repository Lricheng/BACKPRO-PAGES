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

## Anti-Patterns Verdict

**LLM**: Functional but reads as default static template — three identical bordered cards, paired border+shadow, no editorial rhythm. Not neon-SaaS slop, but lacks Back Pro's refined Ivory Editorial craft.

**Detector**: Clean (0 findings on HTML scan).

## Priority Issues

**[P1] Ghost-card pattern** — Cards use 1px border AND 8px blur shadow. Fix: border-only elevation per design system.

**[P1] Secondary text contrast** — `#77736d` on `#f7f6f2` borderline for body prose. Fix: darken to oklch(46% …) for AA.

**[P1] Focus/accessibility gaps** — No skip link, weak focus rings on nav/lang toggle. Fix: focus-visible rings + skip link.

**[P2] Flat hierarchy** — Hero, nav cards, footer same visual weight. Fix: kicker, sticky blurred header, nav underline active state.

**[P2] No motion feedback** — Instant state changes. Fix: 160–220ms ease-out on hover/lang/card entrance; reduced-motion fallback.

## Persona Red Flags

**Jordan (First-Timer)**: Privacy page long; needs sticky nav + clear section headings (OK).

**Casey (Mobile)**: Lang toggle targets small (6px padding). Fix: 44px min height.

**Sam (A11y)**: Missing skip link and aria-pressed on lang buttons.

## Minor Observations

- Nav-card lacks “read more” affordance arrow.
- Background flat cream without brand-tinted atmosphere.
- English content exists; prior blank-page bug was CSS on `<html lang>` — already fixed.

## Questions to Consider

- Should legal pages add table-of-contents for long privacy scroll?
- App Store link placeholder ready for post-release?
