import Link from "next/link";
import { asset } from "@/lib/asset";

type Status = { label: string; color: string };

type Props = {
  num: string;
  href: string;
  name: string;
  hindi: string;
  description: string;
  status: Status;
  thumb: string | null;
  thumbFit?: "cover" | "contain";
  thumbPos?: string;
  thumbNote?: string;
};

// One full-width product row in the hub index. The whole row is a single
// link out to that product's live site. Grid: number | title+desc | status
// chip | 16:9 thumbnail, collapsing to a stack under 820px (see globals.css).
export default function ProductRow({
  num,
  href,
  name,
  hindi,
  description,
  status,
  thumb,
  thumbFit = "cover",
  thumbPos = "center",
  thumbNote,
}: Props) {
  return (
    <Link href={href} target="_blank" rel="noreferrer" className="product-row">
      <div className="product-row-grid">
        <span className="product-row-num">{num}</span>
        <div>
          <h2 className="product-row-head">
            <span className="product-row-name">{name}</span>
            <span className="product-row-hindi">{hindi}</span>
          </h2>
          <p className="product-row-desc">{description}</p>
        </div>
        <span className="product-row-status" style={{ color: status.color }}>
          {status.label}
        </span>
        <div className="product-row-thumb">
          {thumb ? (
            // eslint-disable-next-line @next/next/no-img-element -- next/image ignores
            // basePath under unoptimized static export; use a base-path-aware <img>.
            <img
              src={asset(thumb)}
              alt={name}
              className="product-row-thumb-img"
              style={{ objectFit: thumbFit, objectPosition: thumbPos }}
            />
          ) : (
            <span className="product-row-thumb-ph">{thumbNote ?? "Photo soon"}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
