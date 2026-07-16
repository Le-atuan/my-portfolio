# Portfolio Project Guide

## Overview

Le Anh Tuan's bilingual, project-first portfolio for recruiters and freelance clients. The interface uses a motion-driven portfolio grid, a neutral monochrome palette, Cobalt Blue accents, Lexend headings, and Source Sans 3 body copy.

## Stack and commands

- Node.js 24+, pnpm 11, Next.js 16 App Router, React 19, strict TypeScript
- Tailwind CSS v4 through `@tailwindcss/postcss`; CSS-first theme tokens live in `src/app/globals.css`
- `pnpm dev`, `pnpm lint`, `pnpm typecheck`, `pnpm build`
- `pnpm format` writes Prettier formatting; `pnpm format:check` verifies it without changes.

## Structure

- `src/app/layout.tsx` — metadata, fonts, and pre-paint theme/locale bootstrap.
- `src/app/page.tsx` — semantic landing page and JSON-LD.
- `src/app/globals.css` — Tailwind import, semantic tokens, responsive layout, and motion.
- `src/data/portfolio.ts` — verified bilingual professional content.
- `src/data/portrait.ts` — portrait asset configuration.
- `src/components/header-controls.tsx` — native locale/theme controls and mobile dialog.
- `design-system/le-anh-tuan-portfolio/MASTER.md` — visual source of truth.

## Theme and locale

Theme uses `lat-portfolio-theme`; locale uses `lat-portfolio-locale`. The inline head script applies stored values or the system theme before paint. Controls update `<html>` and persist `light`/`dark` or `en`/`vi`.

## Replace the portrait

1. Add an optimized `.webp` or `.avif` portrait to `src/assets`.
2. Statically import it in `src/data/portrait.ts` and assign it to `portrait.image`.
3. Review both localized alt strings. The page already uses `next/image` with `fill`, `object-cover`, responsive `sizes`, and a fixed 4:5 container.

Keep `image: null` until a real portrait is supplied. Replace `public/le-anh-tuan-cv.pdf` in place to update the CV without changing URLs.
