import { LocalChecklist } from "@/components/local-checklist";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pielęgnacja — instrukcja w przygotowaniu",
  description:
    "Strona nie publikuje niezatwierdzonych porad medycznych. Zobacz bezpieczną checklistę organizacyjną i zakres treści do uzupełnienia.",
  path: "/pielegnacja",
});

const safeItems = [
  "Mam aktualną, pisemną instrukcję przekazaną przez artystę.",
  "Wiem, kto i kiedy zatwierdził tę instrukcję.",
  "Znam kanał kontaktu do pytań organizacyjnych po sesji.",
  "Rozumiem, że serwis i artysta nie zastępują konsultacji lekarskiej.",
  "W razie nietypowej reakcji wiem, że należy skontaktować się z odpowiednim specjalistą.",
];

export default function AftercarePage() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="Treść wstrzymana"
        title="Pielęgnacja — instrukcja w przygotowaniu."
        lead="Nie publikujemy uniwersalnej instrukcji z internetu. Sposób zabezpieczenia i pielęgnacji musi odpowiadać zastosowanej metodzie oraz procedurze artysty."
        aside={<p className="page-note">Ta strona nie zastępuje konsultacji medycznej.</p>}
      />
      <section className="aftercare-plan page-section">
        <p className="eyebrow">Zakres do uzupełnienia</p>
        <div className="aftercare-plan__grid">
          {[
            ["01", "Pierwsze godziny", "Wytyczne właściciela + data aktualizacji"],
            ["02", "Pierwsze dni", "Zatwierdzona procedura, bez zgadywania produktów"],
            ["03", "Czego unikać", "Czas i zakres potwierdzone w wiarygodnym źródle"],
            ["04", "Kiedy szukać pomocy", "Jasne rozróżnienie kontaktu z artystą i lekarzem"],
          ].map(([index, title, text]) => (
            <article key={index}><span>{index}</span><h2>{title}</h2><p>{text}</p></article>
          ))}
        </div>
      </section>
      <LocalChecklist
        title="Checklista źródła instrukcji"
        intro="Możesz zaznaczyć elementy organizacyjne. Lista celowo nie zawiera dawkowania, produktów ani diagnoz."
        items={safeItems}
        storageKey="dermographic:aftercare-checklist:v1"
      />
      <aside className="medical-note page-section">
        <strong>Nietypowa reakcja?</strong>
        <p>Skontaktuj się z odpowiednim specjalistą. Ta demonstracyjna strona nie diagnozuje i nie obiecuje bezpieczeństwa ani braku ryzyka.</p>
      </aside>
    </>
  );
}
