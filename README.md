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
npm run og           # regenerate public/og/og.png from public/og/og.html
```

The social preview is rendered from `public/og/og.html` using this site's own
tokens and webfonts, so a brand change means re-running `npm run og`, not
editing a binary. It asserts the output is exactly 1200x630.

### Dependency overrides

`package.json` is strict JSON and cannot carry comments, so the reasoning lives
here. Both `overrides` entries are security floors, set to the **patched**
version rather than merely a recent one — the lockfile pins exact resolutions,
but a lockfile can be regenerated and these ranges are what survives that.

- **`postcss` `^8.5.25`** — below 8.5.13 there is a path traversal in source-map
  auto-loading. The direct `devDependencies` entry is held at the same floor;
  npm rejects an override that is narrower than its own direct dependency.
- **`sharp` `^0.35.3`** — below 0.35.0 it inherits four libvips CVEs
  ([GHSA-f88m-g3jw-g9cj](https://github.com/advisories/GHSA-f88m-g3jw-g9cj)).
  Next 15 ships 0.34.x and only Next 16 moves off it, so this overrides `sharp`
  directly instead of taking a major Next bump for a package this site never
  executes: `output: 'export'` with `images.unoptimized` means the image
  optimizer is never invoked. Drop the override once Next 15 ships 0.35.

Note that most Next.js advisories do not apply to this deployment at all —
they target the server (rewrites, Server Actions, Middleware, the Image
Optimization API, RSC caching), and a static export runs none of it. They are
still worth patching: `npm run dev` runs a real Next server locally, and the
day `basePath` flips for a custom domain the calculus can change.

## Deploy

Static GitHub Pages (`output: 'export'` + `basePath: '/misc42labs'`).
Push to `Misc42/misc42labs`; **Settings → Pages** → serve from GitHub
Actions and the site ships at `https://misc42.github.io/misc42labs/`.

For the eventual `misc42.com` domain: point the registrar's DNS to
GitHub Pages, flip `basePath` to `""` in `next.config.js`, drop a
`CNAME` file in `public/`, redeploy.
