import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StatusBanner } from "@/components/status-banner";
import { metadataBase } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import "./globals.css";

const displayFont = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Dermographic Tattoo — portfolio Wojciecha Sokuna",
    template: "%s | Dermographic Tattoo",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.artist }],
  creator: siteConfig.artist,
  keywords: [
    "Dermographic Tattoo",
    "Wojciech Sokun",
    "portfolio tatuażu",
    "tatuaż Starogard Gdański",
    "black and grey",
    "realizm tatuaż",
  ],
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "pl-PL",
    },
    {
      "@type": "Person",
      name: siteConfig.artist,
      description: "Osoba prowadząca markę Dermographic Tattoo według CEIDG.",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Przejdź do treści</a>
        <StatusBanner />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
