import { LocalChecklist } from "@/components/local-checklist";
import { PageHero } from "@/components/page-hero";
import { StyleQuiz } from "@/components/style-quiz";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pierwszy tatuaż — jak przygotować dobry brief",
  description:
    "Prosty przewodnik po przygotowaniu pomysłu: motyw, miejsce, rozmiar, kierunek i referencje. Bez porad medycznych.",
  path: "/pierwszy-tatuaz",
});

const checklistItems = [
  "Opisałem główny motyw i element, którego nie chcę.",
  "Wskazałem rozważane miejsce na ciele.",
  "Podałem przybliżony rozmiar w centymetrach.",
  "Wybrałem black & grey, kolor albo uczciwe „nie wiem”.",
  "Mam 2–5 referencji pokazujących klimat, nie cudzy projekt do skopiowania.",
  "Wiem, który element ma przyciągać wzrok jako pierwszy.",
];

export default function FirstTattooPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Przewodnik bez presji"
        title="Pierwszy tatuaż zaczyna się od dobrego pytania."
        lead="Nie musisz przychodzić z gotowym rysunkiem. Warto wiedzieć, co chcesz opowiedzieć, gdzie widzisz pracę i jaki klimat Cię przyciąga."
      />
      <section className="guide-grid page-section">
        {[
          ["01", "Motyw", "Co ma znaleźć się w kompozycji i czego na pewno nie chcesz?"],
          ["02", "Miejsce", "Jaka część ciała i czy w pobliżu są już inne tatuaże?"],
          ["03", "Rozmiar", "Centymetry są bardziej użyteczne niż określenia „mały” lub „duży”."],
          ["04", "Kierunek", "Black & grey, kolor, realizm, ilustracja — możesz też odpowiedzieć „nie wiem”."],
          ["05", "Priorytet", "Który element ma prowadzić wzrok jako pierwszy?"],
        ].map(([index, title, text]) => (
          <article key={index}><span>{index}</span><h2>{title}</h2><p>{text}</p></article>
        ))}
      </section>
      <section className="reading-portfolio page-section">
        <div><p className="eyebrow">Jak czytać portfolio</p><h2>Patrz szerzej niż na detal.</h2></div>
        <p className="lead-small">Pełny kadr mówi o kompozycji, detal — o przejściach i linii, a zdjęcie po wygojeniu — o efekcie po czasie. Ta wersja galerii jasno informuje, że nie ma jeszcze zatwierdzonych zdjęć wygojonych prac.</p>
      </section>
      <StyleQuiz />
      <LocalChecklist
        title="Checklista dobrego briefu"
        intro="Lista porządkuje pomysł. Nie jest przygotowaniem medycznym ani formularzem zapisu."
        items={checklistItems}
        storageKey="dermographic:brief-checklist:v1"
      />
      <aside className="medical-note page-section">
        <strong>Ważne</strong>
        <p>Szczegółowe przygotowanie i pielęgnacja powinny odpowiadać procedurze konkretnego artysty oraz Twojej sytuacji zdrowotnej. W razie nietypowej reakcji skontaktuj się z odpowiednim specjalistą.</p>
      </aside>
    </>
  );
}
