import type { Metadata } from "next";
export const SITE_URL = "https://dr-drunk-cocktail-world.anzyy.chatgpt.site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: `${title} — Dr. Drunk`,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title: `${title} — Dr. Drunk`,
      description,
      url: `${SITE_URL}${path}`,
      type: "website",
    },
    twitter: { card: "summary", title: `${title} — Dr. Drunk`, description },
  };
}
