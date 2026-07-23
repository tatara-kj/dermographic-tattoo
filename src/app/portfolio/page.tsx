import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { PortfolioPageGrid } from "@/components/portfolio-page-grid";
import { portfolioItems } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Portfolio tatuażu — realizm, black & grey i kolor",
  description:
    "Kuratorski katalog prac publikowanych pod marką Dermographic Tattoo, pokazany na jednoznacznych placeholderach do czasu potwierdzenia praw.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Centralna galeria"
        title="Portfolio"
        lead="Dwanaście skatalogowanych kierunków. Każdy wizualny panel jest placeholderem — prawdziwe fotografie czekają na oryginały i zgody."
        aside={<p className="page-note">Filtruj po języku wizualnym, zapisuj inspiracje lokalnie i otwieraj pełnoekranowy podgląd.</p>}
      />
      <section className="portfolio-page-section">
        <Suspense fallback={<div className="portfolio-module" aria-busy="true" />}>
          <PortfolioPageGrid items={portfolioItems} />
        </Suspense>
      </section>
    </>
  );
}
