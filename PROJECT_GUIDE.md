# Portfolio Project Guide

## Overview

This repository contains Le Anh Tuan’s bilingual portfolio. It uses a premium neo-brutalist editorial direction designed for recruiters and freelance clients, prioritizing fast comprehension, accessible interaction, strong performance, and a memorable visual identity.

## Technology stack

- Node.js 24+
- pnpm 11
- Next.js 16 App Router and React 19
- TypeScript in strict mode
- Mantine 9.4.1 (`@mantine/core` and `@mantine/hooks`)
- CSS Modules and global design tokens
- `next/font` for optimized typography

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Quality checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Project structure

- `src/app/layout.tsx` — fonts, metadata, Mantine provider, color-scheme setup.
- `src/app/page.tsx` — semantic one-page portfolio composition and JSON-LD.
- `src/app/page.module.css` — responsive editorial layout and visual identity.
- `src/data/portfolio.ts` — typed English and Vietnamese portfolio content.
- `src/types/portfolio.ts` — public content interfaces.
- `src/components/header-controls.tsx` — locale, theme, and mobile navigation controls.
- `public/le-anh-tuan-cv.pdf` — stable downloadable CV asset.
- `docs/specs/2026-07-14-portfolio-design.md` — approved product and visual design.
- `design-system/le-anh-tuan-portfolio/MASTER.md` — generated UI/UX Pro Max design-system reference.

## Sections

1. Hero and portrait area
2. Professional proof metrics
3. About and career direction
4. Experience timeline
5. Selected work case studies
6. Skills, education, certifications, and community activity
7. Direct contact and copyright footer

## Content maintenance

Edit `src/data/portfolio.ts` to update experience, projects, skills, credentials, navigation, or contact information. Every visible content item includes both `en` and `vi`; keep both translations complete.

The locale control stores `lat-portfolio-locale` in local storage. Both translations are rendered from the server, while CSS selects the active version using the `data-locale` attribute on `<html>`.

## Replace the portrait

1. Add the final optimized portrait to `src/assets/portrait.jpg` (or `.webp`).
2. Import it statically in `src/app/page.tsx`.
3. Replace the `portraitPlaceholder` block with `next/image` using `fill`, responsive `sizes`, a descriptive bilingual alt strategy, and `placeholder="blur"`.
4. Keep the containing aspect ratio and responsive rules to avoid layout shift.

## Replace the CV

Replace `public/le-anh-tuan-cv.pdf` with the new PDF while keeping the filename stable. The download link will continue to work without code changes.

## Theme and styling

Mantine theme values live in `src/theme.ts`. Product-specific colors and layout tokens live in `src/app/globals.css`; page composition lives in `src/app/page.module.css`. Preserve contrast in both themes and verify focus indicators after palette changes.

## Metadata and deployment

Metadata and `Person` JSON-LD are defined in the App Router files. Before production deployment, replace the placeholder `metadataBase` domain with the final public domain and add a designed Open Graph image.
