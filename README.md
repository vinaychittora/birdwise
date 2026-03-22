# Sahil Zutshi Birding & Wildlife Tours

A production-quality demo website for a birding and wildlife tour company, built with Next.js App Router, TypeScript, and Tailwind CSS. The site uses original branding, dummy content, structured local data, and reusable components so it can later be connected to a CMS.

## Tech stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Reusable UI primitives inspired by shadcn/ui patterns
- Local TS data files under `data/`

## Features

- Multi-page travel brand website with homepage, tours, guides, field reports, about, contact, FAQ, and custom 404
- 18 realistic dummy tours across birding, wildlife, and photography categories
- URL-synced client-side filters for tours
- Static detail pages for tours, guides, and field reports
- Editorial placeholder visuals with a consistent design strategy
- Strong reusable component structure for later CMS migration

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Project structure

- `app/` — App Router pages and layouts
- `components/` — reusable UI and site components
- `data/` — typed local content models and seed data
- `lib/` — shared utilities

## Notes

- All contact details are dummy values provided for this demo.
- Forms are UI-only and do not submit anywhere.
- Placeholder imagery is implemented with styled panels so the project has no backend or asset dependency.

## Cloudflare Pages deployment

This project is configured as a **static export** for easy deployment to Cloudflare Pages.

Use these settings in Cloudflare Pages:

- **Build command:** `npx next build`
- **Build output directory:** `out`
- **Root directory:** `/`

Because all content is local and the dynamic routes use `generateStaticParams`, the site can be exported as static files during the Next.js build.
