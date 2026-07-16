# Le Anh Tuan Portfolio — Design System Master

**Source:** UI/UX Pro Max persisted recommendation, adjusted for the approved content, WCAG AA, dark mode, and dependency boundaries.

## Direction

- Pattern: Motion-Driven Portfolio Grid; project-first, visual storytelling, asymmetric desktop composition.
- Audience: recruiters and freelance clients.
- Style: precise, editorial, technical, confident; no glassmorphism, neo-brutalism, gradients-as-decoration, or noisy card repetition.
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
7. Contact panel and compact footer.

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
