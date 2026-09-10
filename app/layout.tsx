import type { Metadata } from "next";
import "./globals.css";
import "./experience.css";

export const metadata: Metadata = {
  title: "Dr. Drunk — Your Party Practitioners",
  description: "Bespoke cocktails, wedding storytelling, tailored bars and flair. Enter the world of Dr. Drunk and book your cocktail tasting.",
  openGraph: {title:"Dr. Drunk — Your Party Practitioners",description:"Your story, served with a twist. Bespoke mixology and total bar experiences.",type:"website"},
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
