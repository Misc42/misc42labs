# Misc42 Labs

Master portfolio site for the studio. Lists products (Sanketra, Chakshu, future)
linking out to each product's dedicated marketing site on its own domain.

## Architecture

Hybrid model — per-product domains for SEO + brand depth, plus this thin
master site at `misc42.com` (or `misc42labs.vercel.app` until the domain is
bought) for parent-brand attribution + portfolio overview.

- Per-product sites carry "A Misc42 Labs product" footer link back here
- This site links out to each live product
- No commerce here — checkout happens on each product's own domain

## Stack

- Next.js 15 + App Router
- Tailwind CSS 3 + `@tailwindcss/typography`
- Vercel free tier
- Shared design tokens with `mic_on_term/web/` (saffron / cream / ink palette)
  so visual continuity across the family of sites

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static + ISR build
```

## Deploy

Vercel auto-detects Next.js. Connect the GitHub repo `Misc42/misc42labs`,
Vercel will deploy on every push to `main` / `master`.

For the eventual `misc42.com` domain: Vercel project → Settings → Domains →
Add `misc42.com` and `www.misc42.com`. Configure DNS at the registrar
(Namecheap / GoDaddy) per the values Vercel provides.
