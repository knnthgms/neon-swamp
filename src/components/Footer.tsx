"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full max-w-3xl mx-auto px-5 py-10 flex justify-center gap-8 text-sm"
      style={{ borderTop: "1px solid rgba(45,212,191,0.06)" }}
    >
      <a href="https://github.com/knnthgms" target="_blank" rel="noopener noreferrer"
        className="no-underline transition-colors"
        style={{ color: "#334155" }}
        onMouseEnter={e => ((e.target as HTMLElement).style.color = "#64748b")}
        onMouseLeave={e => ((e.target as HTMLElement).style.color = "#334155")}>
        GitHub
      </a>
      <a href="https://linkedin.com/in/knnthgms" target="_blank" rel="noopener noreferrer"
        className="no-underline transition-colors"
        style={{ color: "#334155" }}
        onMouseEnter={e => ((e.target as HTMLElement).style.color = "#64748b")}
        onMouseLeave={e => ((e.target as HTMLElement).style.color = "#334155")}>
        LinkedIn
      </a>
      <a href="mailto:knnthgms@gmail.com"
        className="no-underline transition-colors"
        style={{ color: "#334155" }}
        onMouseEnter={e => ((e.target as HTMLElement).style.color = "#64748b")}
        onMouseLeave={e => ((e.target as HTMLElement).style.color = "#334155")}>
        knnthgms@gmail.com
      </a>
    </footer>
  );
}
