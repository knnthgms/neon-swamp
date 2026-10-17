export type PostCardProps = {
  title: string;
  excerpt: string;
  tag: string;
  publishDate: string;  // "YYYY-MM-DD"
  draft: boolean;
  href?: string;        // present only when the post is live
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

type Status = "published" | "scheduled" | "draft";

const IS_DEV = process.env.NODE_ENV === "development";

function StatusBadge({ status }: { status: Status }) {
  if (status === "published") return null;
  const label = status === "draft" ? "Draft" : IS_DEV ? "Scheduled" : "Coming soon";
  const style =
    status === "draft"
      ? { background: "rgba(251,191,36,0.1)", color: "#fbbf24" }
      : { background: "rgba(100,116,139,0.15)", color: "#64748b" };
  return (
    <span className="text-[0.65rem] font-semibold px-2 py-0.5 rounded" style={style}>
      {label}
    </span>
  );
}

export default function PostCard({ title, excerpt, tag, publishDate, draft, href }: PostCardProps) {
  const isLive = !!href;
  const status: Status = draft ? "draft" : !isLive ? "scheduled" : "published";

  const cardStyle = {
    background: "linear-gradient(135deg, rgba(13,27,54,0.7) 0%, rgba(8,15,30,0.5) 100%)",
  };

  const inner = (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-[0.65rem] font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
          style={{ background: "rgba(45,212,191,0.1)", color: "#2dd4bf" }}
        >
          {tag}
        </span>
        {(isLive || IS_DEV) && (
          <span className="text-xs" style={{ color: "#334155" }}>
            {formatDate(publishDate)}
          </span>
        )}
        <StatusBadge status={status} />
      </div>
      <h2 className="text-base font-semibold mb-1.5" style={{ color: "#cbd5e1" }}>{title}</h2>
      <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{excerpt}</p>
    </>
  );

  if (!isLive) {
    return (
      <article
        className="blog-card rounded-xl p-6"
        style={cardStyle}
        aria-label={`${title} (${status === "draft" ? "draft" : "coming soon"})`}
      >
        {inner}
      </article>
    );
  }

  return (
    <article>
      <a
        href={href}
        className="blog-card block rounded-xl p-6 no-underline"
        style={cardStyle}
      >
        {inner}
      </a>
    </article>
  );
}
