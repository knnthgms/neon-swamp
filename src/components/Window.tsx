function Row({ label, value, indent = false }: { label?: string; value: React.ReactNode; indent?: boolean }) {
  return (
    <div className={`flex items-start${indent ? " ml-4" : ""}`}>
      {!indent && <span className="mr-2" style={{ color: "#475569" }}>&gt;</span>}
      {label && <span style={{ color: "#cbd5e1" }}>{label}</span>}
      {indent && <span style={{ color: "#38bdf8" }}>{value}</span>}
    </div>
  );
}

function Gap() { return <div className="h-3" />; }

export default function Window() {
  return (
    <div
      className="rounded-xl overflow-hidden font-mono text-sm leading-6"
      style={{
        background: "linear-gradient(135deg, rgba(13,27,54,0.95) 0%, rgba(8,15,30,0.9) 100%)",
        border: "1px solid rgba(45,212,191,0.1)",
        boxShadow: "0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(45,212,191,0.05)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-1.5 px-3 py-2.5"
        style={{
          background: "rgba(45,212,191,0.04)",
          borderBottom: "1px solid rgba(45,212,191,0.08)",
        }}
      >
        <div className="w-3 h-3 rounded-full bg-[#FF605C]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD44]" />
        <div className="w-3 h-3 rounded-full bg-[#00CA4E]" />
      </div>

      <div className="p-5">
        <Row label="Ken.currentRole" value="" />
        <Row indent value={'"Senior Software Engineer @ Okta"'} />
        <Gap />
        <Row label="Ken.experience" value="" />
        <Row indent value={'["SE @ Okta", "SMTS @ Aviatrix", "Staff Eng @ OmniRetail", "FE @ YouPlus", "SDE @ TotalCloud"]'} />
        <Gap />
        <Row label="Ken.currentLocation" value="" />
        <Row indent value="Bangalore, India" />
        <Gap />
        <Row label="Ken.contactInfo" value="" />
        <div className="ml-4" style={{ color: "#38bdf8" }}>
          [&quot;<a className="underline" style={{ color: "#2dd4bf" }} href="mailto:knnthgms@gmail.com">knnthgms@gmail.com</a>&quot;,{" "}
          &quot;<a className="underline" style={{ color: "#2dd4bf" }} href="https://linkedin.com/in/knnthgms" target="_blank" rel="noopener noreferrer">LinkedIn</a>&quot;,{" "}
          &quot;<a className="underline" style={{ color: "#2dd4bf" }} href="https://github.com/knnthgms" target="_blank" rel="noopener noreferrer">Github</a>&quot;]
        </div>
        <Gap />
        <Row label="Ken.resume" value="" />
        <div className="ml-4" style={{ color: "#38bdf8" }}>
          &quot;<a className="underline" style={{ color: "#2dd4bf" }} href="/assets/KENNETH_GOMES_CV.pdf" target="_blank" rel="noopener noreferrer">ken_gomes_resume.pdf</a>&quot;
        </div>
        <Gap />
        <Row label="Ken.education" value="" />
        <Row indent value={'["BE in Information Science", "MSc in Management Information Systems"]'} />
        <Gap />
        <Row label="Ken.certifications" value="" />
        <Row indent value={'["Multicloud Network Associate", "Multicloud Network Professional", "Section x Okta ProfAI: AI Proficiency"]'} />
        <Gap />
        <Row label="Ken.languages" value="" />
        <Row indent value={'["JavaScript (ES2023+)", "TypeScript", "Node.js", "Python", "Go", "C++", "SQL"]'} />
        <Row label="Ken.frameworks" value="" />
        <Row indent value={'["React", "React Native", "Next.js", "Vue.js", "Express", "Redux", "Tailwind CSS"]'} />
        <Row label="Ken.tools" value="" />
        <Row indent value={'["Nx", "Vite", "Docker", "Git", "AWS", "Azure DevOps", "PostgreSQL", "MongoDB"]'} />
        <Row label="Ken.ai" value="" />
        <Row indent value={'["Claude Code", "GitHub Copilot", "ChatGPT", "OpenAI API", "prompt engineering"]'} />
      </div>
    </div>
  );
}
