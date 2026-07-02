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
  metadataBase: new URL("https://misc42.com"),
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
    card: "summary_large_image",
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
