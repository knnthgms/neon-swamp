import { SITE_URL } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };

// Rendered by next/og (Satori): only flexbox layout and inline styles are supported.
export default function OgCard({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#080f1e",
        backgroundImage:
          "linear-gradient(rgba(45,212,191,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.06) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        color: "#e2e8f0",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#2dd4bf",
            background: "rgba(45,212,191,0.12)",
            padding: "8px 18px",
            borderRadius: 8,
          }}
        >
          {eyebrow}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 58 : 68, fontWeight: 800, lineHeight: 1.15 }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ display: "flex", fontSize: 28, color: "#94a3b8", lineHeight: 1.4 }}>{subtitle}</div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26 }}>
        <div style={{ display: "flex" }}>
          <span style={{ fontWeight: 800 }}>Ken</span>
          <span style={{ color: "#2dd4bf" }}>Gomes</span>
        </div>
        <div style={{ display: "flex", color: "#64748b" }}>{SITE_URL.replace(/^https?:\/\//, "")}</div>
      </div>
    </div>
  );
}
