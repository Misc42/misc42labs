/** @type {import('next').NextConfig} */
// Static-export config for GitHub Pages deploy at misc42.github.io/misc42labs/.
// Vercel-managed deploys ignore basePath; GitHub Pages requires it because the
// site is served from a sub-path. trailingSlash hardens routing — Pages serves
// /foo/index.html when the path is /foo/, so this avoids redirect surprises.
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'export',
  basePath: '/misc42labs',
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
