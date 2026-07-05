import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ken Gomes",
  description: "Senior Software Engineer — building identity and security products at Okta.",
  openGraph: {
    title: "Ken Gomes",
    description: "Senior Software Engineer — building identity and security products at Okta.",
    url: "https://kengomes.dev",
    siteName: "Ken Gomes",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1 w-full max-w-3xl mx-auto px-5 py-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
