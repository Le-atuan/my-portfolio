# Le Anh Tuan Portfolio — Approved Design

## Direction

The portfolio uses a “Technical Editorial Dossier” direction: strong condensed typography, an ivory/navy/cyan palette, asymmetric composition, visible indexing, and restrained technical diagrams. It avoids generic card grids, decorative gradients, glass effects, and excessive motion.

## Audience and journey

The page serves recruiters and freelance clients. Visitors should understand Le Anh Tuan’s specialty, performance impact, production experience, and contact options within one short scroll. Recruiters can review experience and download the CV; clients can inspect selected work and contact directly.

## Content and behavior

- One-page bilingual English/Vietnamese experience.
- Light and dark themes with system preference as the default.
- Sticky navigation, mobile drawer, section anchors, direct contact actions, and CV download.
- A deliberate portrait placeholder remains until a new photograph is supplied.
- The current-company case study is anonymized and uses only facts present in the CV.
- Footer copyright belongs to Le Anh Tuan and updates its year automatically.

## Technical boundaries

- Next.js 16 App Router, React, strict TypeScript, pnpm, and Node.js 24.
- Mantine 9.4.1 provides accessible controls and theme infrastructure; CSS Modules provide the visual system.
- Page content is server-rendered. Only locale, theme, and mobile navigation controls require client JavaScript.
- No backend, contact form, CMS, analytics, blog, booking integration, or heavy animation dependency in v1.
