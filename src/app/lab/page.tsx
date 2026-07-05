import type { Metadata } from "next";
import { redirect } from "next/navigation";
import LabClient from "@/components/LabClient";
import { LAB_ENABLED } from "@/lib/config";

export const metadata: Metadata = { title: "Lab — Ken Gomes" };

export default function Lab() {
  if (!LAB_ENABLED) redirect("/");

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
