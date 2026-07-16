# Le Anh Tuan Portfolio — Motion-Driven Redesign

## Direction and audience

The portfolio is a project-first landing page for recruiters and freelance clients. It uses an accessible fintech-inspired grid: pale blue-gray and deep navy canvases, electric blue/cyan accents, Lexend headings, Source Sans 3 body copy, editorial spacing, technical artwork, and restrained transform/opacity motion.

Visitors encounter selected work immediately after the hero, then philosophy and proof metrics, experience, credentials, and a direct contact conversion panel. Existing professional facts, anchors, URLs, contact links, CV path, metadata, and JSON-LD remain authoritative.

## Behavior

- English/Vietnamese server-rendered routes at `/en` and `/vi`, with `next-i18next` cookie/browser detection and localized SEO.
- Light/dark themes sharing one semantic token system; pre-paint initialization uses `lat-portfolio-theme` or the system preference.
- Floating navigation, skip link, native 44px controls, and a mobile `<dialog>` that closes by button, Escape, backdrop, or navigation selection and restores trigger focus.
- Project cards use equal-width/equal-height desktop columns and reflow to a single mobile column.
- Footer content is centered above a copyright-only row; Back to top is a scroll-triggered floating Lucide control.
- Motion lasts 150–300ms for interaction and uses only transform/opacity; reduced-motion users receive an immediately visible static interface.
- The portrait placeholder is decorative. A real static import uses a fixed 4:5 frame and responsive `next/image` sizing.

## Technical boundaries

- Next.js 16.2.9 App Router, React 19, strict TypeScript, pnpm 11, Node.js 24+, Tailwind CSS v4, and PostCSS.
- Server-rendered content; client JavaScript is limited to locale/theme/mobile navigation controls and Back to top visibility.
- `react-icons/lu` is the single icon family. No animation framework, backend, active form submission, analytics, CMS, blog, or invented professional content.
