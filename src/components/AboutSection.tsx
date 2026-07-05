export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-5">
      <h1
        className="hero-line text-4xl font-bold tracking-tight"
        style={{ "--i": 0, color: "#e2e8f0" } as React.CSSProperties}
      >
        Hi, I&apos;m <span className="hero-name">Ken Gomes.</span>
      </h1>

      <p
        className="hero-line text-lg leading-relaxed"
        style={{ "--i": 1, color: "#94a3b8" } as React.CSSProperties}
      >
        Product-minded Senior Software Engineer with 6+ years building MVPs and scaling product
        foundations at high-growth startups.
      </p>

      <p
        className="hero-line leading-relaxed"
        style={{ "--i": 2, color: "#64748b" } as React.CSSProperties}
      >
        Currently at Okta, building identity and security products used by millions. Previously at
        Aviatrix, contributing to multi-cloud networking and security — and before that, leading
        frontend initiatives at OmniRetail across markets in Africa, where I owned everything from
        design-system work to behavioral analytics and A/B testing that drove real growth.
      </p>

      <p
        className="hero-line leading-relaxed"
        style={{ "--i": 3, color: "#64748b" } as React.CSSProperties}
      >
        Comfortable across the stack. Work closely with product, design, and growth teams. I care
        about clean architecture, delightful UX, and making data legible to the humans who need it
        most.
      </p>
    </section>
  );
}
