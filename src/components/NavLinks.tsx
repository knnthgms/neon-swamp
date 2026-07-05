"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const NAV = [
  { label: "Blog",  href: "/blog" },
  { label: "Links", href: "/links" },
  { label: "Lab",   href: "/lab" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const router = useRouter();

  const navigate = useCallback(
    (href: string) => {
      if (!("startViewTransition" in document)) { router.push(href); return; }
      (document as any).startViewTransition(() => router.push(href));
    },
    [router]
  );

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="flex items-center gap-1">
      {NAV.map(({ label, href }) => {
        const isActive = pathname.startsWith(href);
        return (
          <button
            key={href}
            onClick={() => navigate(href)}
            className="px-3 py-1.5 rounded-md text-sm cursor-pointer bg-transparent border-0 transition-colors"
            style={{ color: isActive ? "#2dd4bf" : "#475569", fontWeight: isActive ? 500 : 400 }}
          >
            {label}
          </button>
        );
      })}
      <button
        onClick={scrollToContact}
        className="px-3 py-1.5 rounded-md text-sm cursor-pointer bg-transparent border-0 transition-colors"
        style={{ color: "#475569" }}
      >
        Contact
      </button>
    </nav>
  );
}
