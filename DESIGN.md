# Design

<!-- impeccable:design-schema 1 -->

## Direction Contract

**THESIS:** Reassurance through restraint — this refuses the two ruts of the category: the sterile "corporate healthcare PDF" (cramped, gray, bureaucratic) and the gimmicky "book-a-ride app" (rideshare-style motion, badges, urgency copy). Trust here is built with generous space, calm color, and specificity, not persuasion tactics.

**OWN-WORLD:** Medical blue (`#1565C0`) as the committed identity color carrying navigation, all CTAs, and section headers; emerald green (`#2E7D32`) reserved as a secondary accent for the Medicaid section and confirmation/trust cues only. White base with light-gray (`#F5F7FA`) alternating section bands. Poppins for display/headings (confident, rounded, warm without being playful), Open Sans for body (maximum legibility at large sizes). No gradients, no glass, no drop-shadow-heavy cards — flat, high-contrast, generous whitespace.

**STORY:** A visitor arrives anxious or on behalf of someone vulnerable. Within one viewport they understand: this is a real, licensed transportation service for medical appointments, not a rideshare app; the phone number is the whole point; calling costs nothing and helps immediately.

**FIRST VIEWPORT:** Sticky header (wordmark + anchor nav + persistent Call Now button) above a centered-text hero: two-line headline (max ~`max-w-4xl`), one-paragraph subhead, a large primary Call Now button (blue, white text) beside a secondary email link, with a custom-illustrated (not photographic) accessible-van graphic beneath/beside the text — illustration, not attempted photorealism, so its placeholder nature is self-evident rather than deceptive.

**FORM:** Restrained/Committed color strategy (not Full-palette, not Drenched) — brief-pinned by the client's explicit color and tone spec; no concept tournament run, since the visual authority (colors, fonts, hero concept, "avoid gimmicky") was already fixed in the brief per the "brief wins" rule.

## Typography

- Display/headings: Poppins (600/700)
- Body: Open Sans (400/600)
- Base body size 18px minimum for readability by an older audience; headline scale uses `clamp()` to stay large but never wrap awkwardly on mobile.

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#1565C0` | Nav, primary buttons, links, section headers |
| `--color-primary-dark` | `#0D47A1` | Hover/active states on primary |
| `--color-secondary` | `#2E7D32` | Medicaid section accent, confirmation cues |
| `--color-secondary-dark` | `#1B5E20` | Hover/active states on secondary |
| `--color-surface` | `#F5F7FA` | Alternating section background |
| `--color-foreground` | `#1A2332` | Body text (high contrast on white/gray) |
| `--color-muted` | `#5B6472` | Secondary/caption text |
| `--color-border` | `#E1E6EC` | Dividers, card borders |

All pairings verified at WCAG AA (4.5:1 body text / 3:1 large text and UI components) minimum.

## Motion

Purposeful only, ≤300ms, `ease-out` for entrances. No scroll-jacking, no pinned sections, no parallax. Respects `prefers-reduced-motion` (motion becomes an instant state change, no content is hidden by default). Explicitly rejects the installed `gpt-taste` / `high-end-visual-design` skill packs' cinematic/GSAP mandates as mismatched to a healthcare trust-first brief.

## Components

Flat surfaces, 1px borders (`--color-border`) instead of shadows where separation is needed. Buttons: solid blue fill / white text (primary), white fill / blue border+text (secondary). Large tap targets (min 44×44px). Icons: simple line-style, brand-colored, no illustration-heavy iconography.

## Placeholders

Logo: text wordmark only. Phone/email: placeholder values, labeled inline near each contact CTA. Hero visual: authored SVG illustration (not a sourced stock photo), so no external image dependency and no risk of implying a real photograph.
