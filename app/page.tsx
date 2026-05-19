import ProductCard from "@/components/ProductCard";

const products = [
  {
    status: "live" as const,
    href: "https://misc42.github.io/sanketra/",
    eyebrow: "01 · Consumer software",
    name: "Sanketra",
    tagline: "PC का कान",
    description:
      "A Hindi-first voice-to-text input layer for your PC. Speak from your phone or PC mic, watch text type into any app. LAN-only, zero cloud STT.",
    highlights: ["Android", "macOS", "Windows", "Linux"] as const
  },
  {
    status: "soon" as const,
    href: "https://misc42.github.io/mukut/",
    eyebrow: "02 · Hardware + Software",
    name: "Mukut",
    tagline: "मुकुट — हर मोड़ पर साथ",
    description:
      "A clip-on safety module for any ISI motorcycle helmet — dual rear cameras, live HUD, tri-radio mesh, cross-horizon SOS. v1 hand-built on perfboard, friends-test alpha in progress.",
    highlights: ["Hardware", "ESP32-S3", "RV1126", "BLE + WiFi AP"] as const
  },
  {
    status: "soon" as const,
    href: "https://misc42.github.io/tvashtra-landing/",
    eyebrow: "03 · Consumer software",
    name: "Tvashtra",
    tagline: "त्वष्टृ — model-driven CAD that doesn't lie",
    description:
      "Desktop-first CAD where you talk to the model, it builds the parts in a real B-rep kernel, and self-verifies against rendered snapshots before declaring done. BYO Claude / Gemini / OpenAI / Ollama. Private beta.",
    highlights: ["Desktop", "OCCT", "wgpu", "BYO model"] as const
  },
  {
    status: "live" as const,
    href: "https://misc42.github.io/theclub-landing/",
    eyebrow: "04 · Developer tool",
    name: "theClub",
    tagline: "एक कोडबेस, चार दिमाग",
    description:
      "A local desktop orchestrator that runs four coding CLIs on one codebase in parallel — claude, gemini, codex, aider — through an 8-phase pipeline (analyse, plan, execute, review, merge, verify). The workshop tool we built to ship the rest of the studio.",
    highlights: ["Linux", "Tauri", "Rust", "Open source"] as const
  }
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <header className="wrap pt-24 pb-20 md:pt-36 md:pb-28">
        <p className="masthead mb-6">A studio of consumer software & developer tools · India</p>
        <h1 className="display">
          Misc42<span className="text-saffron"> Labs</span>
          <span className="block serif-italic text-muted text-[0.36em] mt-6">
            Hindi-first products, and the developer tools we use to build them.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
          Two kinds of things ship from this studio — consumer software (and a bit of
          hardware) for the 700M+ Indians whose first language isn&apos;t English, and the
          open-source developer tools the studio uses to make them. No analytics. No cloud
          middleware. No subscription traps. One-time licenses, offline-first runtime, and
          code that respects your battery.
        </p>
        <div className="mt-10 flex items-center gap-6 text-sm font-mono uppercase tracking-[0.18em] text-muted">
          <a href="#products" className="text-ink hover:text-saffron transition">
            See products →
          </a>
          <span className="text-faint">·</span>
          <a href="#about" className="hover:text-saffron transition">
            About
          </a>
        </div>
      </header>

      {/* PRODUCTS */}
      <section id="products" className="wrap rule-top pt-20 pb-16">
        <div className="flex items-baseline justify-between mb-12">
          <p className="masthead">Products</p>
          <p className="serif-italic text-muted">a small portfolio, on purpose</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="wrap rule-top pt-20 pb-24">
        <p className="masthead mb-6">About</p>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="section-title">
              One person. <span className="serif-italic text-saffron">Sharp ideas only.</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Misc42 Labs is the studio of <strong className="text-ink">Tanay Misra</strong>,
              based in India. Two parallel arms — consumer software for Indian users, and
              the developer tools the studio uses to make them. The tools half is
              open-source because if a workshop instrument is sharp enough to ship our own
              products, it&apos;s sharp enough to share.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              The studio model means slow-on-purpose: ship a product when it&apos;s actually
              <em> good</em>, not when investor calendars demand it. Each consumer product
              gets its own deep landing page on its own domain; the dev tools live on
              GitHub.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Bias toward LAN-first, zero-cloud, offline-respecting design. If a feature
              requires shipping your data to a server we don&apos;t control, we don&apos;t build it.
            </p>
          </div>
          <aside className="card">
            <p className="masthead">Operator</p>
            <p className="text-2xl text-ink leading-tight">Tanay Misra</p>
            <p className="text-muted text-sm">Sole proprietor · India</p>
            <hr className="border-rule my-2" />
            <p className="masthead">Reach</p>
            <ul className="text-sm text-muted leading-relaxed space-y-1">
              <li>
                <a href="mailto:tanaymisra97@gmail.com" className="text-ink hover:text-saffron">
                  tanaymisra97@gmail.com
                </a>
              </li>
              <li>
                <a href="https://x.com/tanaymisra" className="hover:text-saffron" target="_blank" rel="noreferrer">
                  x.com/tanaymisra
                </a>
              </li>
              <li>
                <a href="https://github.com/Misc42" className="hover:text-saffron" target="_blank" rel="noreferrer">
                  github.com/Misc42
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="wrap border-t border-rule py-10 mt-12 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm">
        <p className="serif-italic text-muted">
          A studio of one. Built in India, for India.
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
          © {new Date().getFullYear()} Misc42 Labs · made by Tanay Misra
        </p>
      </footer>
    </>
  );
}
