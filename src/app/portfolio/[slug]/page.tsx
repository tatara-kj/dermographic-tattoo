import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
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
    title: `${item.title} — realizacja`,
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
            <div><dt>Źródło</dt><dd>{item.sourceLabel}</dd></div>
            <div><dt>Orientacja</dt><dd>{item.orientation === "portrait" ? "pionowa" : item.orientation === "landscape" ? "pozioma" : "kwadratowa"}</dd></div>
            <div><dt>Artysta</dt><dd>Wojciech Sokun</dd></div>
            <div><dt>Studio</dt><dd>Dermographic Tattoo</dd></div>
          </dl>
          <ul className="tag-list" aria-label="Kategorie pracy">
            {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          <a className="source-link" href={item.sourceUrl} target="_blank" rel="noreferrer">
            Zobacz oryginalną publikację <ExternalLink aria-hidden="true" size={18} />
          </a>
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
