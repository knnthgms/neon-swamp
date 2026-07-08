import Script from "next/script";

/**
 * Google Analytics 4.
 *
 * Gated behind an env var so nothing loads unless configured:
 *   NEXT_PUBLIC_GA_ID — GA4 Measurement ID (e.g. G-XXXXXXXXXX)
 *
 * Set it in .env.local (local) and in the Cloudflare Pages project's
 * environment variables (production). It is safe to expose client-side.
 *
 * Note: Cloudflare Web Analytics is NOT here — it's injected automatically
 * by the Cloudflare Pages integration at the edge. Adding a manual beacon
 * would double-count page views.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) return null;

  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
