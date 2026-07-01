---
name: Back Pro Pages
description: Public support and legal site for the Back Pro iOS app
colors:
  bg: "#f7f6f2"
  bg-secondary: "#fbfaf7"
  surface: "#ffffff"
  ink: "#1c1c1e"
  ink-secondary: "#5c574f"
  ink-muted: "#6f6a64"
  accent: "#c7a86a"
  accent-pressed: "#a88952"
  accent-soft: "#ede6d8"
  border: "#e6e2dc"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  meta:
    fontFamily: "{typography.body.fontFamily}"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: "10px"
  md: "12px"
  card: "16px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  nav-link:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body}"
    padding: "8px 0"
  nav-link-active:
    textColor: "{colors.ink}"
  lang-toggle:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
---

## Overview

Back Pro Pages 是静态 GitHub Pages 站点，承载首页、隐私政策与技术支持。视觉对齐 App 的 Ivory Editorial：暖中性底、白卡片、金 accent、系统字体栈。Canonical color math uses OKLCH in CSS; hex above is Stitch-compatible export.

## Colors

OKLCH tokens (canonical in `site.css`):

| Role | OKLCH | Usage |
| --- | --- | --- |
| `--bp-bg` | `oklch(97.2% 0.008 85)` | Page background, gold-tinted neutral |
| `--bp-surface` | `oklch(99.5% 0.004 85)` | Header/footer wash |
| `--bp-card` | `oklch(100% 0 0)` | Cards |
| `--bp-ink` | `oklch(22% 0.012 75)` | Headings, primary text |
| `--bp-ink-secondary` | `oklch(46% 0.018 75)` | Body, lead (AA on white) |
| `--bp-accent` | `oklch(72% 0.09 78)` | Links, focus, active nav underline |
| `--bp-accent-soft` | `oklch(92% 0.035 82)` | Contact box, lang toggle active |

Strategy: **Restrained** — accent ≤10%, gold reserved for links, focus, and active states.

## Typography

- Display (h1): clamp 1.75–2.25rem, weight 800, letter-spacing −0.03em max.
- Section (h2): 1.125rem, weight 800.
- Body: 1rem / 1.65, max ~68ch in prose.
- Meta: 0.875rem muted for dates and footer.

## Elevation

Cards use **hairline border only** — no paired wide drop shadow (anti ghost-card). Hover: border shifts to accent + subtle translate.

## Components

- **Site header**: sticky, backdrop blur, brand row + nav + lang pill.
- **Hero**: single column intro, no metric template.
- **Nav cards**: full-width links with title + description, not icon grids.
- **FAQ**: divided items with question as strong label.
- **Contact box**: accent-soft wash, full border.

## Do's and Don'ts

**Do**: Match App gold and spacing; test zh/en toggle; provide skip link and focus rings.

**Don't**: Side-stripe borders; gradient text; bounce easing; animate layout properties; hide content behind JS-only reveals.
