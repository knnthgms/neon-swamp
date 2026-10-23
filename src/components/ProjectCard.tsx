export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type Project = {
  name: string;
  tagline: string;
  desc: string;
  stack: string[];
  image: { src: string; width: number; height: number; alt: string; phone?: boolean };
  links: ProjectLink[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const { name, tagline, desc, stack, image, links } = project;

  return (
    <article className="project-card rounded-xl overflow-hidden" style={{ background: "rgba(13,27,54,0.4)" }}>
      <div
        className="relative aspect-[16/10] overflow-hidden flex items-start justify-center"
        style={{ background: "rgba(8,15,30,0.6)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are pre-sized */}
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className={
            image.phone
              ? "h-[115%] w-auto mt-6 rounded-[1.4rem] shadow-2xl"
              : "w-full h-full object-cover object-top"
          }
        />
      </div>

      <div className="flex flex-col gap-3 px-5 py-5">
        <div>
          <h2 className="text-base font-semibold" style={{ color: "#e2e8f0" }}>
            {name}
          </h2>
          <p className="text-sm" style={{ color: "#2dd4bf" }}>
            {tagline}
          </p>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
          {desc}
        </p>

        <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0" aria-label={`${name} tech stack`}>
          {stack.map((tech) => (
            <li
              key={tech}
              className="text-[0.7rem] font-mono px-2 py-0.5 rounded"
              style={{ color: "#94a3b8", background: "rgba(45,212,191,0.06)" }}
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link text-xs font-medium px-3 py-1.5 rounded-md no-underline"
              style={
                link.primary
                  ? { color: "#080f1e", background: "#2dd4bf" }
                  : { color: "#94a3b8", border: "1px solid rgba(45,212,191,0.15)" }
              }
            >
              {link.label}
              <span className="sr-only"> for {name} (opens in new tab)</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
