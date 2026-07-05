"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { LAB_ENABLED } from "@/lib/config";

const NAV = [
  { label: "Blog",  href: "/blog" },
  { label: "Links", href: "/links" },
  ...(LAB_ENABLED ? [{ label: "Lab", href: "/lab" }] : []),
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
    </nav>
  );
}
