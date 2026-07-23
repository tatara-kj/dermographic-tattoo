import { PageHero } from "@/components/page-hero";
import { faqItems } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pytania o portfolio i pierwszy tatuaż",
  description:
    "Odpowiedzi dotyczące statusu Dermographic Tattoo, portfolio, demonstracyjnego briefu i niepotwierdzonych danych.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow="FAQ"
        title="Jasne odpowiedzi. Bez domysłów."
        lead="Jeżeli fakt nie został potwierdzony, odpowiedź mówi o tym wprost."
      />
      <section className="faq-page page-section">
        <div className="faq-list faq-list--large">
          {faqItems.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
        <aside className="faq-aside">
          <p className="eyebrow">Nie znalazłeś odpowiedzi?</p>
          <p>Lista pytań do właściciela znajduje się w dokumentacji projektu. Aktywny kontakt zostanie dodany dopiero po potwierdzeniu danych.</p>
        </aside>
      </section>
    </>
  );
}
