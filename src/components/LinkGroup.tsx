export type LinkItem = {
  title: string;
  desc: string;
  href: string;
};

export type LinkGroupProps = {
  title: string;
  links: LinkItem[];
};

export default function LinkGroup({ title, links }: LinkGroupProps) {
  return (
    <section className="mb-10" aria-labelledby={`group-${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <h2
        id={`group-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="text-[0.65rem] font-bold uppercase tracking-widest mb-4"
        style={{ color: "#1e3a5f", letterSpacing: "0.1em" }}
      >
        {title}
      </h2>
      <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.title} — ${link.desc} (opens in new tab)`}
              className="link-item flex flex-col gap-0.5 px-4 py-3 rounded-lg no-underline"
              style={{ background: "rgba(13,27,54,0.4)" }}
            >
              <span className="text-sm font-medium" style={{ color: "#94a3b8" }}>{link.title}</span>
              <span className="text-xs" style={{ color: "#334155" }}>{link.desc}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
