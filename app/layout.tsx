import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./experience.css";
import "./pages.css";
import "./brand-motion.css";
import "./night-theme.css";
import "./theatre-theme.css";
import { TheatreMotion } from "@/components/motion/TheatreMotion";
import { BrandAtmosphere } from "@/components/motion/BrandAtmosphere";
import { GlassMotion } from "@/components/motion/GlassMotion";
import { ScrollChoreography } from "@/components/motion/ScrollChoreography";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageMotion } from "@/components/motion/PageMotion";
import { SITE_URL } from "@/lib/site";
export const viewport: Viewport = { themeColor: "#100e0b", colorScheme: "dark" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  title: "Dr. Drunk — Your Party Practitioners",
  description:
    "Bespoke cocktails, wedding storytelling, tailored bars and flair. Enter the world of Dr. Drunk and book your cocktail tasting.",
  openGraph: {
    title: "Dr. Drunk — Your Party Practitioners",
    description:
      "Your story, served with a twist. Bespoke mixology and total bar experiences.",
    type: "website",
    url: SITE_URL,
    siteName: "Dr. Drunk",
    locale: "en_US",
    images: [{ url: "/brand/party.webp", width: 1500, height: 1000, alt: "A Dr. Drunk celebration" }],
  },
  twitter: { card: "summary_large_image", title: "Dr. Drunk — Your Party Practitioners", description: "Bespoke cocktails, wedding storytelling and tailored bar experiences.", images: ["/brand/party.webp"] },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <BrandAtmosphere />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <PageMotion />
        <GlassMotion />
        <ScrollChoreography />
        <TheatreMotion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Dr. Drunk",
              url: SITE_URL,
              logo: `${SITE_URL}/brand/logo-transparent.svg`,
              slogan: "Your party practitioners",
              contactPoint: { "@type": "ContactPoint", contactType: "Event enquiries", email: "Docdrunkofficial@gmail.com", telephone: "+66626439728" },
              email: "Docdrunkofficial@gmail.com",
              telephone: ["+66626439728", "+66924172299"],
              sameAs: ["https://www.instagram.com/docdrunk/"],
              description:
                "Bespoke mixology, wedding cocktail storytelling, tailored bar setups and flair entertainment.",
            }),
          }}
        />
      </body>
    </html>
  );
}
