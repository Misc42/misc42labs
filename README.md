# Misc42 Labs

**Live · https://misc42.github.io/misc42labs/**

The studio hub — a single-page index of the four products, each row
linking out to that product's own live site. Offline-first software you
pay for once and own outright; zero cloud middleware.

## Product sites

| # | Product | Live site |
|---|---------|-----------|
| 01 | Sanketra | https://misc42.github.io/sanketra/ |
| 02 | Mukut | https://misc42.github.io/mukut/ |
| 03 | Tvashtra | https://misc42.github.io/tvashtra-landing/ |
| 04 | theClub | https://misc42.github.io/theclub-landing/ |

## Stack

- Next.js 15 (App Router) + Tailwind CSS 3
- Fonts: Schibsted Grotesk (UI) + Anek Devanagari (Hindi), via `next/font`
- Static export → GitHub Pages

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export → out/
```

## Deploy

Static GitHub Pages (`output: 'export'` + `basePath: '/misc42labs'`).
Push to `Misc42/misc42labs`; **Settings → Pages** → serve from GitHub
Actions and the site ships at `https://misc42.github.io/misc42labs/`.

For the eventual `misc42.com` domain: point the registrar's DNS to
GitHub Pages, flip `basePath` to `""` in `next.config.js`, drop a
`CNAME` file in `public/`, redeploy.
