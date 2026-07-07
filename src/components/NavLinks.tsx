"use client";

import Link from "next/link";
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
    (href: string, e: React.MouseEvent) => {
      if (!("startViewTransition" in document)) return;
      e.preventDefault();
      (document as any).startViewTransition(() => router.push(href));
    },
    [router]
  );

  return (
    <nav aria-label="Main navigation" className="flex items-center gap-1">
      {NAV.map(({ label, href }) => {
        const isActive = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={(e) => navigate(href, e)}
            aria-current={isActive ? "page" : undefined}
            className="nav-link px-3 py-1.5 rounded-md text-sm no-underline transition-colors"
            style={{ color: isActive ? "#2dd4bf" : "#475569", fontWeight: isActive ? 500 : 400 }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
