import type { Metadata } from "next";
import LabClient from "@/components/LabClient";

export const metadata: Metadata = { title: "Lab — Ken Gomes" };

export default function Lab() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-1" style={{ color: "#e2e8f0" }}>Lab</h1>
      <p className="mb-12 text-sm" style={{ color: "#475569" }}>
        Frontend experiments — animations, layouts, and effects. All built with vanilla CSS or lightweight React hooks.
      </p>
      <LabClient />
    </>
  );
}
