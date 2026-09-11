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
      siteName: "Dr. Drunk",
      images: [{ url: `${SITE_URL}/brand/party.webp`, width: 1500, height: 1000, alt: "A Dr. Drunk celebration" }],
    },
    twitter: { card: "summary_large_image", title: `${title} — Dr. Drunk`, description, images: [`${SITE_URL}/brand/party.webp`] },
  };
}
