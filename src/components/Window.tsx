function Row({ label, value, indent = false }: { label?: string; value: React.ReactNode; indent?: boolean }) {
  return (
    <div className={`flex items-start${indent ? " ml-4" : ""}`}>
      {!indent && <span className="mr-2 text-[#f3f3f3]">&gt;</span>}
      {label && <span className="text-[#f3f3f3]">{label}</span>}
      {indent && <span className="text-[#4fc1ff]">{value}</span>}
    </div>
  );
}

function Gap() { return <div className="h-3" />; }

export default function Window() {
  return (
    <div className="mt-8">
      <div className="bg-[#2e2e2e] text-white rounded-xl overflow-hidden font-mono shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-sm leading-6">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#3b3b3b]">
          <div className="w-3 h-3 rounded-full bg-[#FF605C]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD44]" />
          <div className="w-3 h-3 rounded-full bg-[#00CA4E]" />
        </div>
        <div className="p-4">
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
          <div className="ml-4 text-[#4fc1ff]">
            [&quot;<a className="text-[#befcae] underline" href="mailto:knnthgms@gmail.com">knnthgms@gmail.com</a>&quot;,{" "}
            &quot;<a className="text-[#befcae] underline" href="https://linkedin.com/in/knnthgms" target="_blank" rel="noopener noreferrer">LinkedIn</a>&quot;,{" "}
            &quot;<a className="text-[#befcae] underline" href="https://github.com/knnthgms" target="_blank" rel="noopener noreferrer">Github</a>&quot;]
          </div>
          <Gap />
          <Row label="Ken.resume" value="" />
          <div className="ml-4 text-[#4fc1ff]">
            &quot;<a className="text-[#befcae] underline" href="/assets/KENNETH_GOMES_CV.pdf" target="_blank" rel="noopener noreferrer">ken_gomes_resume.pdf</a>&quot;
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
    </div>
  );
}
