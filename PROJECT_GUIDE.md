# Portfolio Project Guide

## Overview

Le Anh Tuan's bilingual, project-first portfolio for recruiters and freelance clients. The interface uses a balanced portfolio grid, an accessible blue-cyan fintech palette, Lexend headings, and Source Sans 3 body copy.

## Stack and commands

- Node.js 24+, pnpm 11, Next.js 16 App Router, React 19, strict TypeScript
- Tailwind CSS v4 through `@tailwindcss/postcss`; CSS-first theme tokens live in `src/app/globals.css`
- `pnpm dev`, `pnpm lint`, `pnpm typecheck`, `pnpm build`
- `pnpm format` writes Prettier formatting; `pnpm format:check` verifies it without changes.

## Structure

- `src/app/[lng]/layout.tsx` — locale validation, localized metadata, fonts, i18n provider, and pre-paint theme bootstrap.
- `src/app/[lng]/page.tsx` — semantic localized landing page and JSON-LD.
- `src/app/globals.css` — Tailwind import, semantic tokens, responsive layout, and motion.
- `src/i18n/locales/{en,vi}/portfolio.json` — localized UI, accessibility, SEO, and structured-data copy.
- `src/data/portfolio.ts` — verified language-neutral professional facts.
- `src/data/portrait.ts` — portrait asset configuration.
- `src/components/HeaderControls/HeaderControls.tsx` — locale routing, theme controls, and mobile dialog.
- `proxy.ts` and `i18n.config.ts` — locale detection, routing, cookies, and resource loading.
- `design-system/le-anh-tuan-portfolio/MASTER.md` — visual source of truth.

## Theme and locale

Theme uses `lat-portfolio-theme`; locale uses the `i18next` cookie and `/en` or `/vi` route prefix. The inline head script applies the stored or system theme before paint. Locale routing prefers cookie, then browser language, then English.

## Replace the portrait

1. Add an optimized `.webp` or `.avif` portrait to `src/assets`.
2. Statically import it in `src/data/portrait.ts` and assign it to `portrait.image`.
3. Review `hero.portraitAlt` in both locale JSON files. The page already uses `next/image` with `fill`, `object-cover`, responsive `sizes`, and a fixed 4:5 container.

Keep `image: null` until a real portrait is supplied. Replace `public/le-anh-tuan-cv.pdf` in place to update the CV without changing URLs.
