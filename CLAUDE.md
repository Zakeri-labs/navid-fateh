# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # start dev server (Vite)
bun build        # production build (SSR + client)
bun lint         # ESLint
bun run format   # Prettier
```

There are no tests configured in this project.

## Architecture

**Stack**: TanStack Start (SSR React) + Vite + TypeScript + Tailwind CSS v4 + Radix UI (shadcn/ui)

**Build config**: `vite.config.ts` delegates to `@lovable.dev/vite-tanstack-config`. Do not manually add the plugins it already bundles (TanStack Start, React, Tailwind, tsconfig paths, Nitro, etc.) — the comment in `vite.config.ts` lists them all.

**Routing**: File-based via TanStack Router. All routes live in `src/routes/`. The conventions are documented in [`src/routes/README.md`](src/routes/README.md). `routeTree.gen.ts` is auto-generated — never edit it by hand. The root layout (`__root.tsx`) sets `<html lang="fa" dir="rtl">` globally; every page inherits RTL direction.

**Entry points**:
- `src/start.ts` — client entry
- `src/server.ts` — SSR entry (Nitro)
- `src/router.tsx` — creates the router with `QueryClient` injected as context

**Components**:
- `src/components/ui/` — shadcn/ui primitives (Radix UI wrappers)
- `src/components/site/` — site-specific components: `Header`, `Footer`, `MobileBottomNav`, `QualifyForm`

**Styling**: Tailwind v4 configured in `src/styles.css`. Custom utilities are defined there with `@utility` syntax (not in a config file):
- `container-page` — max-width 1240px, auto margins, horizontal padding
- `btn-primary`, `btn-outline`, `btn-whatsapp` — button variants
- `card-soft` — card with hover lift animation
- `eyebrow` — section label row
- `animate-fade-up` — entry animation

Color tokens use oklch and are defined as CSS variables in `:root`. The primary palette is deep navy; the accent/CTA is warm orange; WhatsApp green is a dedicated token.

**Font**: Vazirmatn (Google Fonts, loaded in `__root.tsx`) — supports Persian numerals and Arabic script.

## Site context

This is a Persian-language (Farsi) RTL real estate advisory landing page for Navid Fateh, a Dubai property consultant targeting Persian speakers. All copy is in Persian.

**Routes**:
- `/` — long-scroll landing page with named section components (`Hero`, `ProblemSection`, `ApproachSection`, …)
- `/guide` — static guide + interactive `BudgetCalculator` (slider-based, client-side only)
- `/contact` — FAQ accordion + contact form that opens a pre-filled WhatsApp message on submit (no server-side form handling)

**`WHATSAPP_URL`** (`https://wa.me/971507657477`) is a module-level constant duplicated in `src/routes/index.tsx`, `src/routes/guide.tsx`, `src/routes/contact.tsx`, and `src/components/site/QualifyForm.tsx` — keep them in sync when changing it.
