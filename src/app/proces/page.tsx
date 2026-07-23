import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Proces tworzenia projektu tatuażu",
  description:
    "Od pomysłu i konsultacji przez projekt dopasowany do anatomii, aż po sesję i pielęgnację.",
  path: "/proces",
});

const steps = [
  { index: "01", title: "Pomysł i brief", text: "Opisz motyw, miejsce, rozmiar i preferowaną kolorystykę. Referencje powinny określać klimat, a nie kopiować cudzą pracę.", status: "Punkt startowy" },
  { index: "02", title: "Rozmowa i kierunek", text: "Konsultacja porządkuje priorytety, skalę kompozycji, styl i realny zakres projektu.", status: "Konsultacja" },
  { index: "03", title: "Projekt", text: "Motyw zostaje dopasowany do miejsca, anatomii i ruchu ciała, tak aby dobrze działał także z dystansu.", status: "Kompozycja" },
  { index: "04", title: "Sesja", text: "Przed terminem potwierdzane są szczegóły przygotowania. Podczas pracy ważne są komfort, higiena i komunikacja.", status: "Wykonanie" },
  { index: "05", title: "Pielęgnacja i kontrola", text: "Po sesji artysta przekazuje zasady pielęgnacji odpowiednie dla wykonanej pracy i użytego zabezpieczenia.", status: "Po sesji" },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Proces"
        title="Od pomysłu do spójnej kompozycji."
        lead="Dobry projekt zaczyna się od rozmowy o motywie, miejscu i tym, co ma przyciągać wzrok jako pierwsze."
        aside={<p className="page-note">Szczegóły, termin i wycena zawsze zależą od konkretnego projektu.</p>}
      />
      <section className="timeline page-section">
        {steps.map((step, index) => (
          <Reveal key={step.index} delay={index * 60}>
            <article className="timeline-row">
              <span className="timeline-row__index">{step.index}</span>
              <div><p className="eyebrow">{step.status}</p><h2>{step.title}</h2></div>
              <p>{step.text}</p>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="inline-cta page-section">
        <div><p className="eyebrow">Następny krok</p><h2>Przygotuj swój pomysł do rozmowy.</h2></div>
        <Link className="button button--primary" href="/kontakt#brief">Otwórz kreator briefu <ArrowRight aria-hidden="true" size={18} /></Link>
      </section>
    </>
  );
}
