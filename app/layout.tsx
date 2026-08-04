import type { Metadata } from "next";
import { Schibsted_Grotesk, Anek_Devanagari } from "next/font/google";
import "../styles/globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

const deva = Anek_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-deva",
  display: "swap"
});

export const metadata: Metadata = {
  // The site is served from GitHub Pages at this URL. It previously pointed at
  // https://misc42.com, which does not resolve — any relative metadata URL
  // (og:image, canonical) would have been built against a dead host. Point this
  // at wherever the site is ACTUALLY served; change it the day a custom domain
  // starts answering, not before.
  metadataBase: new URL("https://misc42.github.io/misc42labs"),
  title: {
    default: "Misc42 Labs — software you can own",
    template: "%s — Misc42 Labs"
  },
  description:
    "An independent studio from India. Offline-first software you pay for once and own outright — four products, zero cloud middleware.",
  openGraph: {
    title: "Misc42 Labs",
    description:
      "An independent studio from India. Offline-first software you pay for once and own outright.",
    siteName: "Misc42 Labs",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    // "summary" and not "summary_large_image": the large-image card promises a
    // preview image, and this site ships none (no og:image anywhere, and
    // public/ holds only the three product thumbnails). Declaring a card we
    // cannot fill renders an empty box on X. Upgrade this the moment a real
    // 1200x630 studio image exists.
    card: "summary",
    title: "Misc42 Labs",
    description: "Offline-first software you pay for once and own outright."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${deva.variable}`}>
      <body>{children}</body>
    </html>
  );
}
