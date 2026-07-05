export type Post = {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  draft?: boolean;
  href: string;
};

export default function PostCard({ title, excerpt, tag, date, draft, href }: Post) {
  return (
    <a
      href={href}
      className="blog-card block rounded-xl p-6 no-underline"
      style={{
        background: "linear-gradient(135deg, rgba(13,27,54,0.7) 0%, rgba(8,15,30,0.5) 100%)",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-[0.65rem] font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
          style={{ background: "rgba(45,212,191,0.1)", color: "#2dd4bf" }}
        >
          {tag}
        </span>
        <span className="text-xs" style={{ color: "#334155" }}>{date}</span>
        {draft && (
          <span
            className="text-[0.65rem] font-semibold px-2 py-0.5 rounded"
            style={{ background: "rgba(251,191,36,0.1)", color: "#fbbf24" }}
          >
            Draft
          </span>
        )}
      </div>
      <h2 className="text-base font-semibold mb-1.5" style={{ color: "#cbd5e1" }}>{title}</h2>
      <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{excerpt}</p>
    </a>
  );
}
