"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SECTIONS = [
  { id: "about",   label: "About" },
  { id: "stack",   label: "Stack" },
  { id: "contact", label: "Contact" },
];

export default function ScrollNav() {
  const pathname = usePathname();
  const [active, setActive] = useState("about");

  useEffect(() => {
    if (pathname !== "/") return;
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-30% 0px -50% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-5">
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 group cursor-pointer bg-transparent border-0 p-0"
          >
            <div style={{
              width: isActive ? 2 : 1,
              height: isActive ? 28 : 16,
              background: isActive ? "#2dd4bf" : "#1e3a5f",
              borderRadius: 2,
              boxShadow: isActive ? "0 0 8px rgba(45,212,191,0.5)" : "none",
              transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
            }} />
            <span style={{
              fontSize: 11,
              fontWeight: isActive ? 600 : 400,
              color: isActive ? "#2dd4bf" : "#334155",
              letterSpacing: "0.07em",
              textTransform: "uppercase" as const,
              transition: "color 0.3s ease, opacity 0.3s ease",
              opacity: isActive ? 1 : 0,
              whiteSpace: "nowrap" as const,
            }}
            className="group-hover:!opacity-100 group-hover:!text-[#64748b]"
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
