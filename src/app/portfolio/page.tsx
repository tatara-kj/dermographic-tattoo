import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { PortfolioPageGrid } from "@/components/portfolio-page-grid";
import { portfolioItems } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Portfolio tatuażu — realizm, black & grey i kolor",
  description:
    "Prawdziwe realizacje Wojciecha Sokuna: realizm, black & grey, fantasy, zwierzęta, linework i lettering.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Centralna galeria"
        title="Portfolio"
        lead="Dwanaście realnych realizacji z oficjalnego profilu artysty — od miękkiego black & grey po kolor, linework i duże kompozycje narracyjne."
        aside={<p className="page-note">Filtruj po stylu, zapisuj inspiracje lokalnie i otwieraj pełnoekranowy podgląd. Każda praca ma link do źródła.</p>}
      />
      <section className="portfolio-page-section">
        <Suspense fallback={<div className="portfolio-module" aria-busy="true" />}>
          <PortfolioPageGrid items={portfolioItems} />
        </Suspense>
      </section>
    </>
  );
}
