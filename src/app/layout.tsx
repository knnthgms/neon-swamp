import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";
import ScrollNav from "@/components/ScrollNav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ken Gomes",
  description:
    "Senior Software Engineer — building identity and access management products at Okta.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Ken Gomes",
    description:
      "Senior Software Engineer — building identity and access management products at Okta.",
    url: "https://kengomes.pages.dev",
    siteName: "Ken Gomes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ken Gomes",
  jobTitle: "Senior Software Engineer",
  worksFor: { "@type": "Organization", name: "Okta" },
  url: "https://kengomes.pages.dev",
  sameAs: ["https://linkedin.com/in/knnthgms", "https://github.com/knnthgms"],
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Identity and Access Management",
    "Frontend Engineering",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <GridBackground />
        <ScrollNav />
        <Header />
        <main
          id="main-content"
          className="flex-1 w-full max-w-3xl mx-auto px-5 py-20"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
