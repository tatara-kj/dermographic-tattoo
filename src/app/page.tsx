import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Camera, CircleCheck } from "lucide-react";
import { PortfolioArt } from "@/components/portfolio-art";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqItems, siteConfig } from "@/data/site";
import { portfolioItems } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Portfolio Wojciecha Sokuna — Starogard Gdański",
  description: siteConfig.description,
  path: "/",
});

const directions = [
  {
    index: "01",
    title: "Realizm i portret",
    text: "Twarz, światło i miękkie przejścia tonalne prowadzone z dużą kontrolą detalu.",
    href: "/portfolio?filter=realizm-portret",
  },
  {
    index: "02",
    title: "Fantasy i narracja",
    text: "Postacie, symbole i motywy historyczne układane w pionowe, wieloelementowe sceny.",
    href: "/portfolio?filter=fantasy-narracja",
  },
  {
    index: "03",
    title: "Zwierzę i ornament",
    text: "Zwierzęce motywy łączone z geometrią, rośliną i oszczędnym akcentem koloru.",
    href: "/portfolio?filter=zwierze-ornament",
  },
  {
    index: "04",
    title: "Linework i lettering",
    text: "Precyzyjna linia, kaligraficzny rytm i małe formy dopasowane do anatomii.",
    href: "/portfolio?filter=linework-lettering",
  },
];

const processSteps = [
  ["01", "Pomysł i brief", "Motyw, miejsce, rozmiar i kilka referencji wyznaczają pierwszy kierunek."],
  ["02", "Konsultacja", "Rozmowa porządkuje skalę, styl, kompozycję i realny zakres projektu."],
  ["03", "Projekt", "Koncepcja jest dopasowywana do anatomii, ruchu ciała i charakteru motywu."],
  ["04", "Sesja i opieka", "Po wykonaniu pracy otrzymujesz zasady pielęgnacji dopasowane do tatuażu."],
];

export default function HomePage() {
  const heroItem = portfolioItems[0];
  const featured = portfolioItems.filter((item) => item.featured).slice(0, 6);

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow">Dermographic Tattoo · Wojciech Sokun</p>
          <h1>
            Obraz,
            <br />
            który <em>zostaje.</em>
          </h1>
          <p className="lead">
            Realistyczne kompozycje, portrety i duże narracyjne projekty — od black & grey
            po świadomie prowadzony kolor.
          </p>
          <div className="button-row">
            <Link className="button button--primary" href="/portfolio">
              Zobacz portfolio <ArrowRight aria-hidden="true" size={19} />
            </Link>
            <Link className="button button--ghost" href="/o-artyscie">
              Poznaj artystę
            </Link>
          </div>
          <a className="scroll-cue" href="#wybrane">
            <span>Przewiń do prac</span>
            <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
        <div className="home-hero__visual">
          <div className="hero-art-frame">
            <PortfolioArt item={heroItem} priorityLabel="01 / HERO" />
          </div>
          <p>Realizacja Wojciecha Sokuna · źródło: oficjalny Instagram</p>
        </div>
        <div className="hero-scratch" aria-hidden="true"><i /><i /></div>
      </section>

      <section className="proof-strip" aria-label="Dermographic Tattoo w liczbach">
        <div><strong>249</strong><span>publikacji na profilu</span></div>
        <div><strong>1k+</strong><span>obserwujących</span></div>
        <div><strong>4,8 / 5</strong><span>ocena publiczna</span></div>
        <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
          <Camera aria-hidden="true" size={19} /> Zobacz Instagram <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </section>

      <section className="page-section" id="wybrane">
        <Reveal>
          <SectionHeading
            eyebrow="01 / Wybrane realizacje"
            title="Prace mówią pierwsze."
            text="Wybrane realizacje z oficjalnego portfolio Wojciecha Sokuna. Kliknij zdjęcie, aby otworzyć pełnoekranowy podgląd."
            action={<Link className="text-link" href="/portfolio">Wszystkie realizacje <ArrowUpRight aria-hidden="true" size={19} /></Link>}
          />
        </Reveal>
        <PortfolioGrid items={featured} compact />
      </section>

      <section className="directions-section">
        <Reveal>
          <p className="eyebrow">02 / Język prac</p>
          <h2>Cztery kierunki.<br /><em>Jeden charakter.</em></h2>
        </Reveal>
        <div className="directions-list">
          {directions.map((direction, index) => (
            <Reveal key={direction.title} delay={index * 70}>
              <Link href={direction.href} className="direction-row">
                <span>{direction.index}</span>
                <h3>{direction.title}</h3>
                <p>{direction.text}</p>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="artist-intro page-section">
        <Reveal className="artist-intro__portrait">
          <div className="artist-work-frame">
            <Image
              src={portfolioItems[1].imageSrc}
              alt={portfolioItems[1].imageAlt}
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
            <span>Realizacja / Wojciech Sokun</span>
          </div>
        </Reveal>
        <Reveal className="artist-intro__copy" delay={100}>
          <p className="eyebrow">03 / O artyście</p>
          <h2>Wojciech<br /><em>Sokun</em></h2>
          <p className="lead-small">
            Za marką Dermographic Tattoo stoi Wojciech Sokun. Działalność pod tą nazwą
            została zarejestrowana w Starogardzie Gdańskim w 2015 roku.
          </p>
          <p>
            Portfolio pokazuje szeroki warsztat: od portretu i miękkich przejść black & grey,
            przez motywy zwierzęce, po rozbudowane kompozycje narracyjne oraz lettering.
          </p>
          <Link className="text-link" href="/o-artyscie">
            Więcej o artyście <ArrowUpRight aria-hidden="true" size={19} />
          </Link>
        </Reveal>
      </section>

      <section className="process-preview page-section">
        <Reveal>
          <SectionHeading
            eyebrow="04 / Proces"
            title="Pomysł potrzebuje dobrej ramy."
            text="Dobrze przygotowany pomysł pozwala sprawniej przejść od pierwszej rozmowy do kompozycji dopasowanej do ciała."
          />
        </Reveal>
        <div className="process-grid">
          {processSteps.map(([index, title, text], itemIndex) => (
            <Reveal key={index} delay={itemIndex * 65}>
              <article className="process-card">
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Link className="text-link" href="/proces">Zobacz cały proces <ArrowUpRight aria-hidden="true" size={19} /></Link>
      </section>

      <section className="reviews-section page-section">
        <Reveal>
          <SectionHeading
            eyebrow="05 / Opinie publiczne"
            title="Co wraca w opiniach."
            text="Parafrazy powtarzających się motywów — bez fikcyjnych cytatów i bez przypisywania słów konkretnym osobom."
          />
        </Reveal>
        <div className="review-grid">
          {[
            ["Precyzja", "Klienci zwracają uwagę na detal, linię i realistyczne cieniowanie."],
            ["Doradztwo", "W opiniach wraca rozwijanie pomysłu i szczera ocena projektu."],
            ["Atmosfera", "Powtarza się spokojne, przyjazne podejście — także przy pierwszym tatuażu."],
          ].map(([title, text]) => (
            <article key={title}>
              <CircleCheck aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="source-note">
          Google Maps: 4,8/5 przy ponad 60 opiniach · odczyt 23.07.2026 · ocena może się zmienić. <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Zobacz źródło <span aria-hidden="true">↗</span></a>
        </p>
      </section>

      <section className="faq-preview page-section">
        <Reveal>
          <SectionHeading eyebrow="06 / FAQ" title="Jasne odpowiedzi. Bez skrótów." />
        </Reveal>
        <div className="faq-list">
          {faqItems.slice(0, 4).map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
        <Link className="text-link" href="/faq">Wszystkie pytania <ArrowUpRight aria-hidden="true" size={19} /></Link>
      </section>

      <section className="status-cta page-section">
        <p className="eyebrow">07 / Status i kontakt</p>
        <div>
          <h2>Portfolio jest gotowe do oglądania.<br /><em>Zapisy — nie.</em></h2>
          <p>
            Według publicznego wpisu CEIDG działalność pozostaje zawieszona od 1 marca 2025 roku.
            Portfolio i profile społecznościowe są dostępne, ale termin należy potwierdzić bezpośrednio.
          </p>
          <div className="button-row">
            <Link className="button button--primary" href="/kontakt">
              Kontakt, mapa i kreator briefu <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a className="button button--ghost" href={siteConfig.ceidgUrl} target="_blank" rel="noreferrer">
              Oficjalny wpis CEIDG <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
