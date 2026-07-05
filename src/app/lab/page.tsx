import type { Metadata } from "next";
import { redirect } from "next/navigation";
import LabClient from "@/components/LabClient";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import { LAB_ENABLED } from "@/lib/config";

export const metadata: Metadata = { title: "Lab — Ken Gomes" };

export default function Lab() {
  if (!LAB_ENABLED) redirect("/");

  return (
    <>
      <PageHeader
        title="Lab"
        subtitle="Frontend experiments — animations, layouts, and effects. All built with vanilla CSS or lightweight React hooks."
      />
      <Reveal>
        <LabClient />
      </Reveal>
    </>
  );
}
