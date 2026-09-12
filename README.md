# THREADLINE storefront

A Next.js 15 + React 19 + TypeScript apparel storefront, exported as a static site for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Create a production export with `npm run build`; the deployable site is written to `out/`.

## App structure

- `src/app` — homepage plus Shop, Collections, Journal, Story and Admin routes
- `src/components` — reusable header, cart drawer, product card and page-rail components
- `src/context` — client-side bag state
- `src/lib/catalog.ts` — typed product catalogue data
- `public/images` — storefront image assets

The admin route is a React interface that currently saves a local draft in the browser. Connect it to an authenticated Supabase project before using it as a shared production CMS.
