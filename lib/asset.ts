// Prefix a public/ asset path with the GitHub Pages base path.
//
// The site deploys under a sub-path (misc42.github.io/misc42labs/), so a bare
// "/thumbs/x.png" would resolve to the domain root and 404. next/image with
// `unoptimized` does NOT prepend basePath, so static <img>/asset URLs must do
// it themselves. Keep BASE_PATH in sync with `basePath` in next.config.js.
export const BASE_PATH = "/misc42labs";

export const asset = (path: string) => `${BASE_PATH}${path.startsWith("/") ? "" : "/"}${path}`;
