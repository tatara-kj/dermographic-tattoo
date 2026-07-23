import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Reveal } from "@/components/reveal";
import { portfolioItems } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Wojciech Sokun — o artyście",
  description:
    "Potwierdzone informacje o osobie stojącej za marką Dermographic Tattoo i wizualny charakter zachowanego portfolio.",
  path: "/o-artyscie",
});

export default function ArtistPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Osoba za marką"
        title="Wojciech Sokun"
        lead="Za marką Dermographic Tattoo stoi Wojciech Sokun. Tożsamość potwierdza oficjalny wpis CEIDG."
        aside={<p className="page-note">Lata doświadczenia, edukacja, konwenty i historia zagraniczna nie są publikowane bez dokumentów.</p>}
      />
      <section className="artist-story page-section">
        <Reveal className="artist-story__visual">
          <div className="artist-placeholder artist-placeholder--large" role="img" aria-label="Placeholder na dokumentalny portret Wojciecha Sokuna">
            <span>WS</span>
            <p>portrait-artist-01</p>
          </div>
        </Reveal>
        <Reveal className="artist-story__copy" delay={90}>
          <p className="eyebrow">Fakty / interpretacja</p>
          <h2>Kompozycja<br />przed <em>efektem.</em></h2>
          <p className="lead-small">
            Działalność pod nazwą Dermographic Tattoo została zarejestrowana w Starogardzie Gdańskim w 2015 roku.
          </p>
          <p>
            Publicznie zachowana próbka prac pokazuje zainteresowanie portretem, zwierzęciem,
            narracją i mocnym kontrastem. Zdanie o kompozycji jest kierunkiem redakcyjnym do
            akceptacji artysty — nie zastępuje jego własnej historii.
          </p>
          <blockquote>
            „Realistyczny detal ma sens tylko wtedy, gdy prowadzi całą pracę.”
            <cite>Kierunek narracji — do akceptacji</cite>
          </blockquote>
        </Reveal>
      </section>
      <section className="facts-section page-section">
        <p className="eyebrow">Potwierdzone</p>
        <div className="facts-grid">
          <article><span>01</span><h3>Marka</h3><p>Dermographic Tattoo Wojciech Sokun</p></article>
          <article><span>02</span><h3>Lokalizacja</h3><p>Starogard Gdański — faktyczny lokal do potwierdzenia</p></article>
          <article><span>03</span><h3>Start wpisu</h3><p>1 czerwca 2015 roku</p></article>
          <article><span>04</span><h3>Status</h3><p>Zawieszona od 1 marca 2025 roku</p></article>
        </div>
      </section>
      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Wybrane prace</p>
          <div><h2>Język widoczny w portfolio.</h2><p>Placeholdery odzwierciedlają kategorie, nie konkretne realizacje.</p></div>
        </div>
        <PortfolioGrid items={portfolioItems.slice(0, 4)} compact />
        <Link className="button button--primary" href="/portfolio">Całe portfolio <ArrowRight aria-hidden="true" size={18} /></Link>
      </section>
    </>
  );
}
