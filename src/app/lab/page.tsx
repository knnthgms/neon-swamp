import type { Metadata } from "next";
import { redirect } from "next/navigation";
import LabClient from "@/components/LabClient";
import Reveal from "@/components/Reveal";
import { LAB_ENABLED } from "@/lib/config";

export const metadata: Metadata = { title: "Lab — Ken Gomes" };

export default function Lab() {
  if (!LAB_ENABLED) redirect("/");

  return (
    <>
      <h1
        className="hero-line text-3xl font-bold mb-1"
        style={{ "--i": 0, color: "#e2e8f0" } as React.CSSProperties}
      >
        Lab
      </h1>
      <p
        className="hero-line mb-12 text-sm"
        style={{ "--i": 1, color: "#475569" } as React.CSSProperties}
      >
        Frontend experiments — animations, layouts, and effects. All built with vanilla CSS or lightweight React hooks.
      </p>
      <Reveal>
        <LabClient />
      </Reveal>
    </>
  );
}
