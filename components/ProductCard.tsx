import Link from "next/link";

type Status = "live" | "soon" | "exploring";

type Props = {
  href?: string;
  status: Status;
  eyebrow: string;
  name: string;
  tagline: string;
  description: string;
  highlights: ReadonlyArray<string>;
};

const STATUS_LABEL: Record<Status, string> = {
  live: "Live",
  soon: "Coming soon",
  exploring: "Exploring"
};

const STATUS_DOT: Record<Status, string> = {
  live: "bg-green",
  soon: "bg-saffron",
  exploring: "bg-faint"
};

export default function ProductCard({ href, status, eyebrow, name, tagline, description, highlights }: Props) {
  const inner = (
    <article className={`card ${!href ? "card-soon" : ""}`}>{/* card-soon fade only for cards with nothing to click — i.e. status="exploring" slot 03. "soon" cards with an href (preview-landing) stay at full opacity to match the Sanketra "live" card weight, while keeping the "Coming soon" badge for honest status semantics. */}
      <header className="flex items-center justify-between">
        <span className="masthead">{eyebrow}</span>
        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
          <span className={`inline-block h-2 w-2 rounded-full ${STATUS_DOT[status]}`} />
          {STATUS_LABEL[status]}
        </span>
      </header>
      <div>
        <h3 className="text-3xl text-ink leading-tight">{name}</h3>
        <p className="serif-italic mt-2 text-lg text-saffron">{tagline}</p>
      </div>
      <p className="text-muted text-[0.95rem] leading-relaxed">{description}</p>
      <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.14em] text-muted font-mono">
        {highlights.map((h) => (
          <li key={h} className="before:content-['—'] before:mr-2 before:text-faint">
            {h}
          </li>
        ))}
      </ul>
      {href && (
        <span className="mt-2 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.14em] text-saffron">
          {status === "live" ? "Visit site →" : "Preview landing →"}
        </span>
      )}
    </article>
  );

  // Anything with an href is clickable, regardless of status. "soon" cards
  // still wear the "Coming soon" badge + faded card-soon styling, but the
  // card becomes a preview-link to the in-development product's landing.
  // (Pattern added 2026-04-28 when Chakshu's chakshu1.vercel.app went live
  // ahead of v1 hardware bring-up.)
  if (href) {
    return (
      <Link href={href} target="_blank" rel="noreferrer" className="card-link">
        {inner}
      </Link>
    );
  }
  return inner;
}
