import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header
      className="header-enter sticky top-0 z-50 w-full"
      style={{
        background: "rgba(8,15,30,0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(45,212,191,0.08)",
      }}
    >
      <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="no-underline tracking-tight"
          style={{ fontSize: "1.35rem" }}
        >
          <span style={{ fontWeight: 800, color: "#e2e8f0" }}>Ken</span>
          <span style={{ fontWeight: 300, color: "#2dd4bf" }}>Gomes</span>
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
