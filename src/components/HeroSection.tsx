import Window from "./Window";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-8">
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
    </div>
  );
}
