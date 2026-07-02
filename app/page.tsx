import ProductRow from "@/components/ProductRow";

// Rows link out to each product's own live site. Status chips and taglines
// are final copy from the redesign handoff; thumbnails live in public/thumbs.
const products = [
  {
    num: "01",
    href: "https://misc42.github.io/sanketra/",
    name: "Sanketra",
    hindi: "बोलो, टाइप होगा",
    description: "Hindi-first dictation for your PC — phone or desk mic, fully offline.",
    status: { label: "● Live · free beta", color: "#15803D" },
    thumb: "/thumbs/sanketra.png",
    thumbFit: "cover" as const
  },
  {
    num: "02",
    href: "https://misc42.github.io/mukut/",
    name: "Mukut",
    hindi: "हर मोड़ पर साथ",
    description: "Clip-on helmet safety — rear cameras, HUD, mesh SOS. No phone needed.",
    status: { label: "◐ Friends alpha", color: "#C2410C" },
    thumb: null,
    thumbNote: "Hardware photo — soon"
  },
  {
    num: "03",
    href: "https://misc42.github.io/tvashtra-landing/",
    name: "Tvashtra",
    hindi: "त्वष्त्र",
    description: "Conversational CAD on a real B-rep kernel — it verifies its own work.",
    status: { label: "◐ Private beta", color: "#A16207" },
    thumb: "/thumbs/tvashtra.png",
    thumbFit: "cover" as const
  },
  {
    num: "04",
    href: "https://misc42.github.io/theclub-landing/",
    name: "theClub",
    hindi: "एक कोडबेस, चार दिमाग",
    description: "Four coding agents on one codebase, merged autonomously. Open source.",
    status: { label: "◇ AGPL · v0.6", color: "#4338CA" },
    thumb: "/thumbs/theclub.png",
    thumbFit: "cover" as const,
    thumbPos: "top"
  }
];

export default function HomePage() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-brand">
            Misc42<span>*</span>
          </a>
          <nav className="nav-links">
            <a href="#products" className="active">
              Products
            </a>
            <a href="#studio">Studio</a>
            <a href="https://github.com/Misc42" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
          <a href="mailto:hello@misc42.com" className="nav-cta">
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <section className="wrap" style={{ paddingTop: 92, paddingBottom: 64 }}>
          <h1 className="hero-h1">
            Four products.
            <br />
            <span className="dim">Zero cloud middleware.</span>
          </h1>
          <p className="hero-sub">
            An independent studio from India. Offline-first software you pay for once and own
            outright.
          </p>
        </section>

        <section id="products" className="product-index">
          {products.map((p) => (
            <ProductRow key={p.name} {...p} />
          ))}
        </section>

        <section id="studio" className="studio">
          <p>
            A one-person studio. If a feature needs your data on a server we don&apos;t control, we
            don&apos;t build it.
          </p>
          <div className="studio-links">
            <a href="mailto:hello@misc42.com">Email</a>
            <a href="https://x.com/misc42" target="_blank" rel="noreferrer">
              X
            </a>
            <a href="https://github.com/Misc42" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="foot-inner">
          <span>© 2026 Misc42 Labs</span>
          <span className="foot-made">भारत में बना</span>
        </div>
      </footer>
    </>
  );
}
