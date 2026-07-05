import Window from "./Window";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "knnthgms@gmail.com",
    href: "mailto:knnthgms@gmail.com",
    desc: "Best way to reach me",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/knnthgms",
    href: "https://linkedin.com/in/knnthgms",
    desc: "Professional background & experience",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/knnthgms",
    href: "https://github.com/knnthgms",
    desc: "Code, projects, and experiments",
    external: true,
  },
  {
    label: "Resume",
    value: "ken_gomes_resume.pdf",
    href: "/assets/KENNETH_GOMES_CV.pdf",
    desc: "Download my CV",
    external: true,
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-20">
      <section id="about" className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "#e2e8f0" }}>
          Hi, I&apos;m{" "}
          <span style={{
            background: "linear-gradient(90deg, #2dd4bf, #38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Ken Gomes.
          </span>
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
          Product-minded Senior Software Engineer with 6+ years building MVPs and scaling product foundations at high-growth startups.
        </p>
        <p className="text-lg leading-relaxed" style={{ color: "#64748b" }}>
          Currently at Okta, building identity and security products used by millions. Previously at Aviatrix, contributing to multi-cloud networking and security — and before that, leading frontend initiatives at OmniRetail across markets in Africa, where I owned everything from design-system work to behavioral analytics and A/B testing that drove real growth.
        </p>
        <p className="text-lg leading-relaxed" style={{ color: "#64748b" }}>
          Comfortable across the stack. Work closely with product, design, and growth teams. I care about clean architecture, delightful UX, and making data legible to the humans who need it most.
        </p>
      </section>

      <section id="stack">
        <Window />
      </section>

      <section id="contact" className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#e2e8f0" }}>
            Get in touch
          </h2>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "#475569" }}>
            Open to interesting problems and good conversations.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {CONTACT_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="contact-card group flex items-center justify-between px-5 py-4 rounded-xl no-underline"
              style={{
                background: "linear-gradient(135deg, rgba(13,27,54,0.6) 0%, rgba(8,15,30,0.4) 100%)",
              }}
            >
              <div className="flex items-center gap-4">
                <div style={{
                  width: 2,
                  height: 24,
                  background: "linear-gradient(180deg, #2dd4bf, #38bdf8)",
                  borderRadius: 2,
                  opacity: 0.45,
                  flexShrink: 0,
                }} />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-widest" style={{ color: "#334155" }}>
                    {item.label}
                  </span>
                  <span className="contact-value text-sm font-medium" style={{ color: "#64748b", transition: "color 0.2s" }}>
                    {item.value}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="contact-desc text-xs hidden sm:block" style={{ color: "#1e3a5f" }}>{item.desc}</span>
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="contact-arrow flex-shrink-0"
                  style={{ color: "#1e3a5f", transition: "color 0.2s, transform 0.2s" }}
                >
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
