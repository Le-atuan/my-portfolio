# Le Anh Tuan Portfolio — Design System Master

**Source:** UI/UX Pro Max persisted recommendation, adjusted for the approved content, WCAG AA, dark mode, and dependency boundaries.

## Direction

- Pattern: Motion-Driven Portfolio Grid; project-first, visual storytelling, asymmetric desktop composition.
- Audience: recruiters and freelance clients.
- Style: precise, editorial, technical, confident; no glassmorphism, neo-brutalism, or noisy card repetition. Ambient gradients may be used only as restrained, token-driven depth.
- Variance 8/10, motion 5/10, density 4/10.

## Tokens

| Role           | Light     | Dark      |
| -------------- | --------- | --------- |
| Canvas         | `#FAFAFA` | `#09090B` |
| Surface        | `#FFFFFF` | `#18181B` |
| Soft surface   | `#F1F3F5` | `#27272A` |
| Text           | `#09090B` | `#FAFAFA` |
| Muted text     | `#52525B` | `#B8B8C1` |
| Border         | `#D4D4D8` | `#3F3F46` |
| Accent / focus | `#2563EB` | `#60A5FA` |

- Ambient gradient: a low-opacity radial accent wash, mapped separately for light and dark themes; never used behind body copy at a contrast cost.

- Heading: Lexend, 600–700, tight tracking.
- Body: Source Sans 3, 400–600, 1.5–1.7 line height.
- Spacing: 4/8px rhythm; adaptive gutters; maximum content width 76rem.
- Radius: 12–16px for interactive surfaces. Shadows are neutral and restrained.

## Composition

1. Floating editorial navigation and skip link.
2. Hero with role, availability, project CTA, CV, and 4:5 portrait frame.
3. Selected work masonry/bento grid with abstract case-study artwork.
4. About, current direction, proof metrics, and three practical principles.
5. Experience timeline.
6. Skills, education, certificates, and volunteer activity.
7. Two-column contact section: contact details first, then a distinct form surface; collapse to that same reading order on mobile.
8. Two-tier editorial footer: brand/navigation above, copyright/availability/back-to-top below.

## Component architecture

- Page composition lives in `src/app/page.tsx`; section implementation and styling are colocated in `src/components/<Component>/`.
- Primary sections: Header, Hero, Work, About, Experience, Credentials, Contact, and Footer.
- Shared primitives: HeaderControls, ContactForm, SectionLabel, and LocalizedText.
- Small cards and timeline items remain private to the section that owns them.
- Global CSS is limited to reset, semantic tokens, locale visibility, shared shell/dark-section hooks, and accessibility defaults.

## Contact form

- Two-column desktop layout with details before the form in DOM and mobile order.
- Every required field has a visible bilingual label, native semantic type, name, autocomplete, and a minimum 44px input target.
- Fields: full name, email, phone, and contact reason. The textarea is vertically resizable and sized for a meaningful message.
- Direct sending is intentionally unavailable. Explain this before the form and direct users to the email link.
- The submit control uses the native `disabled` attribute, reduced emphasis, and a not-allowed cursor. Do not attach an action, submit handler, network request, logging, persistence, or success simulation.

## Interaction and accessibility

- Minimum 44×44px targets; native buttons and dialog semantics.
- Visible 3px focus ring, sequential headings, meaningful image alt, decorative placeholder hidden from assistive technology.
- Normal text contrast at least 4.5:1 in each theme.
- Hover/focus transitions 150–300ms. Animate only `transform` and `opacity`.
- Default content is visible without motion support. Disable nonessential motion for `prefers-reduced-motion: reduce`.
- Mobile-first validation at 375, 768, 1024, and 1440px; wrapping is preferred to truncation.

## Anti-patterns

- Do not invent projects, metrics, or achievements.
- Do not add animation or icon dependencies.
- Do not use emoji icons, invisible focus, hover-only actions, low-contrast gray, horizontal overflow, or layout-shifting animation.
