import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Reveal } from "@/components/reveal";
import { portfolioItems } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Wojciech Sokun — o artyście",
  description:
    "Wojciech Sokun — artysta stojący za marką Dermographic Tattoo. Zobacz jego portfolio, kierunki i oficjalny profil.",
  path: "/o-artyscie",
});

export default function ArtistPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Osoba za marką"
        title="Wojciech Sokun"
        lead="Za marką Dermographic Tattoo stoi Wojciech Sokun — artysta łączący realistyczny detal, mocny kontrast i narracyjne kompozycje."
        aside={<p className="page-note">Oficjalny profil: @dermographictattoo_stg · Starogard Gdański.</p>}
      />
      <section className="artist-story page-section">
        <Reveal className="artist-story__visual">
          <div className="artist-work-frame artist-work-frame--large">
            <Image
              src={portfolioItems[0].imageSrc}
              alt={portfolioItems[0].imageAlt}
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
              priority
            />
            <span>Portfolio / Wojciech Sokun</span>
          </div>
        </Reveal>
        <Reveal className="artist-story__copy" delay={90}>
          <p className="eyebrow">Warsztat</p>
          <h2>Kompozycja<br />przed <em>efektem.</em></h2>
          <p className="lead-small">
            Dermographic Tattoo działa jako marka Wojciecha Sokuna związana ze Starogardem Gdańskim od 2015 roku.
          </p>
          <p>
            Oficjalne portfolio pokazuje zainteresowanie portretem, zwierzęciem, narracją
            i mocnym kontrastem. Obok rozbudowanego black & grey pojawiają się kolor,
            precyzyjny linework oraz lettering.
          </p>
          <a className="source-link" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
            Zobacz oficjalny Instagram <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </Reveal>
      </section>
      <section className="facts-section page-section">
        <p className="eyebrow">Potwierdzone</p>
        <div className="facts-grid">
          <article><span>01</span><h3>Marka</h3><p>Dermographic Tattoo Wojciech Sokun</p></article>
          <article><span>02</span><h3>Lokalizacja</h3><p>Starogard Gdański</p></article>
          <article><span>03</span><h3>Start wpisu</h3><p>1 czerwca 2015 roku</p></article>
          <article><span>04</span><h3>Status</h3><p>Zawieszona od 1 marca 2025 roku</p></article>
        </div>
      </section>
      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Wybrane prace</p>
          <div><h2>Język widoczny w portfolio.</h2><p>Prawdziwe fotografie z oficjalnego profilu pokazują skalę, detal i różnorodność prac.</p></div>
        </div>
        <PortfolioGrid items={portfolioItems.slice(0, 4)} compact />
        <Link className="button button--primary" href="/portfolio">Całe portfolio <ArrowRight aria-hidden="true" size={18} /></Link>
      </section>
    </>
  );
}
