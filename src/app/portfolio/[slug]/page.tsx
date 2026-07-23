import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PortfolioArt } from "@/components/portfolio-art";
import { getPortfolioItem, portfolioItems } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) return {};
  return createPageMetadata({
    title: `${item.title} — katalog portfolio`,
    description: item.description,
    path: `/portfolio/${item.slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) notFound();

  const currentIndex = portfolioItems.findIndex((entry) => entry.id === item.id);
  const previous = portfolioItems[(currentIndex - 1 + portfolioItems.length) % portfolioItems.length];
  const next = portfolioItems[(currentIndex + 1) % portfolioItems.length];

  return (
    <article className="project-page">
      <Link className="back-link" href="/portfolio">
        <ArrowLeft aria-hidden="true" size={18} /> Wróć do portfolio
      </Link>
      <div className="project-page__grid">
        <div className="project-page__visual">
          <PortfolioArt item={item} />
        </div>
        <div className="project-page__copy">
          <p className="eyebrow">{item.sourceId} / {item.categoryLabel}</p>
          <h1>{item.title}</h1>
          <p className="lead-small">{item.description}</p>
          <dl className="project-meta">
            <div><dt>Materiał</dt><dd>{item.mediaKey}</dd></div>
            <div><dt>Orientacja</dt><dd>{item.orientation === "portrait" ? "pionowa" : item.orientation === "landscape" ? "pozioma" : "kwadratowa"}</dd></div>
            <div><dt>Autorstwo</dt><dd>do potwierdzenia przed publikacją</dd></div>
            <div><dt>Stan</dt><dd>świeży / wygojony — brak danych</dd></div>
          </dl>
          <ul className="tag-list" aria-label="Kategorie pracy">
            {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          <div className="permission-note">
            <strong>Dlaczego widzisz placeholder?</strong>
            <p>Publiczny podgląd nie jest plikiem produkcyjnym. Potrzebne są: oryginał, autor fotografii i zgoda klienta.</p>
          </div>
        </div>
      </div>
      <nav className="project-pagination" aria-label="Nawigacja między projektami">
        <Link href={`/portfolio/${previous.slug}`}>
          <ArrowLeft aria-hidden="true" />
          <span><small>Poprzedni</small>{previous.title}</span>
        </Link>
        <Link href={`/portfolio/${next.slug}`}>
          <span><small>Następny</small>{next.title}</span>
          <ArrowRight aria-hidden="true" />
        </Link>
      </nav>
    </article>
  );
}
