import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, CircleCheck } from "lucide-react";
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
    text: "Twarz, światło i miękkie przejścia tonalne. Kategoria oparta na widocznej próbce portfolio.",
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
];

const processSteps = [
  ["01", "Pomysł i brief", "Motyw, miejsce, rozmiar i kilka referencji porządkują kierunek."],
  ["02", "Rozmowa", "Sposób konsultacji oraz kwalifikacji projektu pozostaje do potwierdzenia."],
  ["03", "Projekt", "Zasady prezentacji i zmian projektu wymagają odpowiedzi właściciela."],
  ["04", "Sesja i opieka", "Instrukcja przygotowania i pielęgnacji nie jest jeszcze zatwierdzona."],
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
            Archiwalne portfolio realistycznych i ilustracyjnych kompozycji — od black & grey
            po kontrolowany akcent koloru.
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
          <p>Abstrakcyjny placeholder · finalna fotografia po potwierdzeniu praw</p>
        </div>
        <div className="hero-scratch" aria-hidden="true"><i /><i /></div>
      </section>

      <section className="page-section" id="wybrane">
        <Reveal>
          <SectionHeading
            eyebrow="01 / Wybrane realizacje"
            title="Prace mówią pierwsze."
            text="Do czasu uzyskania oryginałów i zgód galeria używa autorskich, abstrakcyjnych placeholderów. Nie udają one prawdziwych tatuaży."
            action={<Link className="text-link" href="/portfolio">Wszystkie realizacje <ArrowUpRight aria-hidden="true" size={19} /></Link>}
          />
        </Reveal>
        <PortfolioGrid items={featured} compact />
      </section>

      <section className="directions-section">
        <Reveal>
          <p className="eyebrow">02 / Język prac</p>
          <h2>Trzy kierunki.<br /><em>Jeden rytm.</em></h2>
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
          <div className="artist-placeholder" role="img" aria-label="Placeholder na portret Wojciecha Sokuna; fotografia nie została jeszcze zatwierdzona">
            <span>WS</span>
            <p>portrait-artist-01</p>
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
            Zachowane realizacje tworzą portfolio oparte na portrecie, zwierzęciu,
            narracji i mocnym kontraście. Historia artystyczna oraz aktualny zakres pracy
            wymagają uzupełnienia przez właściciela.
          </p>
          <Link className="text-link" href="/o-artyscie">
            Więcej o artyście <ArrowUpRight aria-hidden="true" size={19} />
          </Link>
        </Reveal>
      </section>

      <section className="process-preview page-section">
        <Reveal>
          <SectionHeading
            eyebrow="04 / Proces — szkic"
            title="Pomysł potrzebuje dobrej ramy."
            text="Poniższa ścieżka jest szkieletem demonstracyjnym. Aktualny sposób współpracy nie został potwierdzony."
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
          Google Maps: 4,8/5 przy 62 opiniach · odczyt 23.07.2026 · ocena może się zmienić. <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Zobacz źródło <span aria-hidden="true">↗</span></a>
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
            Według CEIDG działalność pozostaje zawieszona od 1 marca 2025 roku.
            Formularz briefu jest interaktywną demonstracją i niczego nie wysyła.
          </p>
          <div className="button-row">
            <Link className="button button--primary" href="/kontakt">
              Sprawdź status i demo briefu <ArrowRight aria-hidden="true" size={18} />
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
