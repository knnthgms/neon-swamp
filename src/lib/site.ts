// Set NEXT_PUBLIC_SITE_URL when moving to a custom domain; every canonical URL,
// the sitemap, the RSS feed and social previews derive from it.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kengomes.pages.dev").replace(/\/$/, "");

export const SITE_NAME = "Ken Gomes";

export const SITE_DESCRIPTION =
  "Senior Software Engineer — building identity and access management products at Okta.";

export const AUTHOR = {
  name: "Ken Gomes",
  url: SITE_URL,
  sameAs: ["https://linkedin.com/in/knnthgms", "https://github.com/knnthgms"],
};
