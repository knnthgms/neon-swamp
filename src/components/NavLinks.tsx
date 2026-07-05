"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const NAV = [
  { label: "Blog", href: "/blog" },
  { label: "Links", href: "/links" },
  { label: "Lab", href: "/lab" },
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

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex items-center gap-1">
      {NAV.map(({ label, href }) => (
        <button
          key={href}
          onClick={() => navigate(href)}
          className={`px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer bg-transparent border-0 ${
            pathname.startsWith(href)
              ? "text-[#befcae]"
              : "text-[rgba(190,252,174,0.45)] hover:text-[rgba(190,252,174,0.75)]"
          }`}
        >
          {label}
        </button>
      ))}
      <button
        onClick={scrollToContact}
        className="px-3 py-1.5 rounded-md text-sm text-[rgba(190,252,174,0.45)] hover:text-[rgba(190,252,174,0.75)] transition-colors cursor-pointer bg-transparent border-0"
      >
        Contact
      </button>
    </nav>
  );
}
