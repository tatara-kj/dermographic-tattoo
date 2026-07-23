import type { MetadataRoute } from "next";
import { portfolioItems } from "@/data/portfolio";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/portfolio",
    "/o-artyscie",
    "/proces",
    "/pierwszy-tatuaz",
    "/pielegnacja",
    "/faq",
    "/kontakt",
    "/polityka-prywatnosci",
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date("2026-07-23"),
      changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
      priority: route === "" ? 1 : route === "/portfolio" ? 0.9 : 0.6,
    })),
    ...portfolioItems.map((item) => ({
      url: `${baseUrl}/portfolio/${item.slug}`,
      lastModified: new Date("2026-07-23"),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
