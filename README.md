# Misc42 Labs

Master portfolio site for the studio. Lists products (Sanketra, Mukut,
theClub, future) linking out to each product's dedicated marketing site
on its own domain.

## Architecture

Hybrid model — per-product domains for SEO + brand depth, plus this thin
master site at `misc42.com` (currently served from
`misc42.github.io/misc42labs/` until the domain is configured) for
parent-brand attribution + portfolio overview.

- Per-product sites carry "A Misc42 Labs product" footer link back here
- This site links out to each live product
- No commerce here — checkout happens on each product's own domain

## Stack

- Next.js 15 + App Router
- Tailwind CSS 3 + `@tailwindcss/typography`
- Static export → GitHub Pages
- Shared design tokens with `mic_on_term/web/` (saffron / cream / ink palette)
  so visual continuity across the family of sites

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export → out/
```

## Deploy

The repo is set up for static GitHub Pages deploy (`output: 'export'` +
`basePath: '/misc42labs'`). Push to the `Misc42/misc42labs` repo;
configure **Settings → Pages** to serve from GitHub Actions and the site
ships at `https://misc42.github.io/misc42labs/`.

For the eventual `misc42.com` domain: point the registrar's DNS to
GitHub Pages per the [official guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site),
flip `basePath` back to `""` in `next.config.js`, drop a `CNAME` file in
`public/`, redeploy.
