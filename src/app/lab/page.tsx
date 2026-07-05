import type { Metadata } from "next";
import LabClient from "@/components/LabClient";

export const metadata: Metadata = { title: "Lab — Ken Gomes" };

export default function Lab() {
  return (
    <>
      <h1 className="text-3xl font-bold text-[#befcae] mb-1">Lab</h1>
      <p className="text-[#abe39d] mb-12 text-sm">
        Frontend experiments — animations, layouts, and effects. All built with vanilla CSS or lightweight React hooks.
      </p>
      <LabClient />
    </>
  );
}
