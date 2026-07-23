import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Jak może wyglądać przygotowanie projektu",
  description:
    "Demonstracyjny szkielet procesu od briefu do pielęgnacji. Aktualne zasady współpracy z Dermographic Tattoo są do potwierdzenia.",
  path: "/proces",
});

const steps = [
  { index: "01", title: "Pomysł i brief", text: "Opisz motyw, miejsce, rozmiar i preferowaną kolorystykę. Referencje mają nazwać klimat, nie kopiować cudzą pracę.", status: "Model rekomendowany" },
  { index: "02", title: "Rozmowa i kierunek", text: "Miejsce konsultacji, kwalifikacja projektu i sposób omawiania kosztu wymagają odpowiedzi właściciela.", status: "Do potwierdzenia" },
  { index: "03", title: "Projekt", text: "Nie znamy terminu prezentacji szkicu ani liczby zmian. Te zasady nie mogą zostać dopowiedziane przez stronę.", status: "Do potwierdzenia" },
  { index: "04", title: "Sesja", text: "Przygotowanie, dokumenty, przerwy i obecność osoby towarzyszącej muszą odpowiadać rzeczywistej procedurze.", status: "Do potwierdzenia" },
  { index: "05", title: "Pielęgnacja i kontrola", text: "Instrukcja zostanie opublikowana dopiero po zatwierdzeniu przez właściciela i sprawdzeniu źródeł medycznych.", status: "Wstrzymane" },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Proces demonstracyjny"
        title="Od pomysłu do spójnej kompozycji."
        lead="Dobry projekt zaczyna się od rozmowy o motywie, miejscu i tym, co ma przyciągać wzrok jako pierwsze."
        aside={<p className="page-note">To szkielet procesu, nie aktualna oferta ani regulamin zapisów.</p>}
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
        <div><p className="eyebrow">Następny krok</p><h2>Przygotuj pomysł bez wysyłania danych.</h2></div>
        <Link className="button button--primary" href="/kontakt#brief-demo">Otwórz demo briefu <ArrowRight aria-hidden="true" size={18} /></Link>
      </section>
    </>
  );
}
