# Misc42 Labs — future tasks

Live queue for this repo only. When something ships, move the line to the
closed section at the bottom.

## Active

- [ ] **Drop the `sharp` override once Next 15 ships 0.35.x.** `package.json`
      pins `"sharp": "^0.35.3"` purely to clear four inherited libvips CVEs
      (GHSA-f88m-g3jw-g9cj, `sharp < 0.35.0`) without taking a Next 16 major
      bump. Next 15 ships 0.34.x. The override is a workaround with an expiry,
      not a decision — check on any Next upgrade and delete it when redundant.
      Reasoning is in `README.md § Dependency overrides`, because `package.json`
      is strict JSON and cannot carry comments.
- [ ] **Custom domain `misc42.com`.** Point the registrar's DNS at GitHub Pages,
      flip `basePath` to `""` in `next.config.js`, add `public/CNAME`, redeploy.
      Then `metadataBase` in `app/layout.tsx` must move with it — it is the ONLY
      place the host is written, and `og:image` is relative so it follows
      automatically. It previously pointed at `https://misc42.com`, which does
      not resolve, so every relative metadata URL was built against a dead host.
- [ ] **Product count in the copy.** The hero says "Four products." A fifth
      product means editing `app/page.tsx` AND re-checking `app/layout.tsx`'s
      description. The OG image deliberately avoids counting for exactly this
      reason — do not "fix" it by adding a count.

## Watching

- [ ] **Dependabot alert count.** 23 alerts (21 `next`, 1 `postcss`, 1 `sharp`)
      were fixed in `43f717e` — `npm audit` is `exit=0 total=0` and the committed
      lockfile on `origin/master` carries `next 15.5.22` / `postcss 8.5.25` /
      `sharp 0.35.3`. GitHub's own counter had not re-scanned an hour after the
      push (alerts still showed their 2026-08-02 timestamps). No public API
      forces a re-scan. If it is still 23 after a day, toggling the dependency
      graph in repo settings is the known nudge — ask first, it is a settings
      change. Most of the 21 `next` advisories target server features (rewrites,
      Server Actions, Middleware, Image Optimization, RSC caching) that a static
      export cannot reach; they were patched anyway because `npm run dev` runs a
      real server locally.

## Closed

- [x] **Four live-site bugs** (`a2490f9`) — dead `misc42.com` `metadataBase`,
      theClub version `v0.6` → `v0.7.8`, Tvashtra wordmark `त्वष्त्र` → `त्वष्टृ`,
      and a Twitter card claiming `summary_large_image` with no image to fill it.
- [x] **Social preview** (`0ab57ac`) — `public/og/og.png`, rendered from
      `public/og/og.html` with this site's own tokens and webfonts. `npm run og`
      regenerates it and asserts the output is exactly 1200×630. Type is sized
      for a quarter-width feed render, verified legible at 300 px and 500 px.
- [x] **All 23 dependency advisories** (`43f717e`) — see Watching above for the
      counter caveat.
