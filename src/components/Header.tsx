import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto px-5 py-5 flex items-center justify-between">
      <Link href="/" className="text-2xl font-black text-[#befcae] no-underline tracking-tight">
        Ken<span className="font-light">Gomes</span>
      </Link>
      <NavLinks />
    </header>
  );
}
