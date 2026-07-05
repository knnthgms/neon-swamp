const T = {
  bg:       "#1a1b26",
  titlebar: "#16161e",
  border:   "rgba(187,154,247,0.15)",
  prompt:   "#565f89",
  key:      "#c0caf5",
  str:      "#9ece6a",
  bracket:  "#bb9af7",
  amber:    "#e0af68",
  link:     "#7dcfff",
  muted:    "#565f89",
};

// ─── Syntax primitives ────────────────────────────────────────────────────────

function Prompt() {
  return <span style={{ color: T.prompt, marginRight: 8 }}>&gt;</span>;
}

function Key({ children }: { children: string }) {
  return <span style={{ color: T.key }}>{children}</span>;
}

function Str({ v }: { v: string }) {
  return <span style={{ color: T.str }}>&quot;{v}&quot;</span>;
}

function Arr({ items }: { items: string[] }) {
  return (
    <span>
      <span style={{ color: T.bracket }}>[</span>
      {items.map((item, i) => (
        <span key={i}>
          <span style={{ color: T.amber }}>&quot;{item}&quot;</span>
          {i < items.length - 1 && <span style={{ color: T.muted }}>, </span>}
        </span>
      ))}
      <span style={{ color: T.bracket }}>]</span>
    </span>
  );
}

function LinkArr({ items }: { items: { label: string; href: string }[] }) {
  return (
    <span>
      <span style={{ color: T.bracket }}>[</span>
      {items.map((item, i) => (
        <span key={i}>
          <span style={{ color: T.amber }}>&quot;</span>
          <a
            className="underline"
            style={{ color: T.link }}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
          <span style={{ color: T.amber }}>&quot;</span>
          {i < items.length - 1 && <span style={{ color: T.muted }}>, </span>}
        </span>
      ))}
      <span style={{ color: T.bracket }}>]</span>
    </span>
  );
}

function StrLink({ label, href }: { label: string; href: string }) {
  return (
    <span>
      <span style={{ color: T.amber }}>&quot;</span>
      <a
        className="underline"
        style={{ color: T.link }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
      <span style={{ color: T.amber }}>&quot;</span>
    </span>
  );
}

// ─── Layout helpers ───────────────────────────────────────────────────────────

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div><Prompt /><Key>{label}</Key></div>
      <div style={{ paddingLeft: 16 }}>{children}</div>
    </div>
  );
}

function Gap() {
  return <div style={{ height: 12 }} />;
}

function TitleBar() {
  return (
    <div
      className="flex items-center gap-1.5 px-3 py-2.5"
      style={{ background: T.titlebar, borderBottom: `1px solid ${T.border}` }}
    >
      <div className="w-3 h-3 rounded-full bg-[#f7768e]" />
      <div className="w-3 h-3 rounded-full bg-[#e0af68]" />
      <div className="w-3 h-3 rounded-full bg-[#9ece6a]" />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Window() {
  return (
    <div
      className="rounded-xl overflow-hidden font-mono text-sm leading-6"
      style={{
        background: T.bg,
        border: `1px solid ${T.border}`,
        boxShadow: "0 24px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(187,154,247,0.05)",
      }}
    >
      <TitleBar />

      <div className="terminal-body p-5 flex flex-col gap-3">
        <Row label="Ken.currentRole">
          <Str v="Senior Software Engineer @ Okta" />
        </Row>

        <Row label="Ken.experience">
          <Arr items={["SE @ Okta", "SMTS @ Aviatrix", "Staff Eng @ OmniRetail", "FE @ YouPlus", "SDE @ TotalCloud"]} />
        </Row>

        <Row label="Ken.currentLocation">
          <Str v="Bangalore, India" />
        </Row>

        <Row label="Ken.contactInfo">
          <LinkArr items={[
            { label: "knnthgms@gmail.com", href: "mailto:knnthgms@gmail.com" },
            { label: "LinkedIn",           href: "https://linkedin.com/in/knnthgms" },
            { label: "Github",             href: "https://github.com/knnthgms" },
          ]} />
        </Row>

        <Row label="Ken.resume">
          <StrLink label="ken_gomes_resume.pdf" href="/assets/KENNETH_GOMES_CV.pdf" />
        </Row>

        <Row label="Ken.education">
          <Arr items={["BE in Information Science", "MSc in Management Information Systems"]} />
        </Row>

        <Row label="Ken.certifications">
          <Arr items={["Multicloud Network Associate", "Multicloud Network Professional", "Section x Okta ProfAI: AI Proficiency"]} />
        </Row>

        <Gap />

        <Row label="Ken.languages">
          <Arr items={["JavaScript (ES2023+)", "TypeScript", "Node.js", "Python", "Go", "C++", "SQL"]} />
        </Row>

        <Row label="Ken.frameworks">
          <Arr items={["React", "React Native", "Next.js", "Vue.js", "Express", "Redux", "Tailwind CSS"]} />
        </Row>

        <Row label="Ken.tools">
          <Arr items={["Nx", "Vite", "Docker", "Git", "AWS", "Azure DevOps", "PostgreSQL", "MongoDB"]} />
        </Row>

        <Row label="Ken.ai">
          <Arr items={["Claude Code", "GitHub Copilot", "ChatGPT", "OpenAI API", "prompt engineering"]} />
        </Row>
      </div>
    </div>
  );
}
