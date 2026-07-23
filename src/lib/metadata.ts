import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "pl_PL",
      type: "website",
      images: [{ url: `${basePath}/og.png`, width: 1200, height: 630, alt: "Dermographic Tattoo — portfolio archiwalne" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${basePath}/og.png`],
    },
  };
}

export const metadataBase = new URL(siteUrl);
