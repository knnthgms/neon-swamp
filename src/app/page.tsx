import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <HeroSection />;
}
