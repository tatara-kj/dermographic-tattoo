import { PageHero } from "@/components/page-hero";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { PortfolioCategory, portfolioItems } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Portfolio tatuażu — realizm, black & grey i kolor",
  description:
    "Kuratorski katalog prac publikowanych pod marką Dermographic Tattoo, pokazany na jednoznacznych placeholderach do czasu potwierdzenia praw.",
  path: "/portfolio",
});

const allowedFilters = ["realizm-portret", "fantasy-narracja", "zwierze-ornament"];

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  const initialFilter = allowedFilters.includes(params.filter ?? "")
    ? (params.filter as PortfolioCategory)
    : "all";

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
        <PortfolioGrid items={portfolioItems} initialFilter={initialFilter} />
      </section>
    </>
  );
}
