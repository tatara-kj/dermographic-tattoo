import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Polityka prywatności demonstratora",
  description:
    "Informacja o lokalnym działaniu funkcji demonstracyjnych portfolio Dermographic Tattoo.",
  path: "/polityka-prywatnosci",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        index="08"
        eyebrow="Prywatność"
        title="Dane zostają w przeglądarce."
        lead="To demonstracyjna polityka dla lokalnego prototypu. Przed publikacją produkcyjną wymaga uzupełnienia o administratora, hosting, analitykę i retencję."
      />
      <article className="legal-content page-section">
        <h2>Formularz briefu</h2>
        <p>Dane wpisane do formularza, wybrane terminy i podglądy załączników nie są wysyłane do serwera. Istnieją tylko w pamięci bieżącej karty i znikają po jej zamknięciu lub odświeżeniu.</p>
        <h2>Zapisane inspiracje</h2>
        <p>Funkcja zapisuje wyłącznie identyfikatory wybranych prac w pamięci lokalnej przeglądarki. Nie tworzy konta, nie synchronizuje urządzeń i pozwala wyczyścić całość z poziomu panelu.</p>
        <h2>Checklisty</h2>
        <p>Postęp jest zapisywany lokalnie tylko po zaznaczeniu opcji „Zapamiętaj na tym urządzeniu”. Można go wyczyścić w każdej chwili.</p>
        <h2>Pliki</h2>
        <p>Wybrane obrazy są używane wyłącznie do lokalnego podglądu. Nie trafiają do chmury, poczty, systemu rezerwacji ani narzędzi analitycznych.</p>
        <h2>Wersja produkcyjna</h2>
        <p>Przed uruchomieniem prawdziwego kontaktu trzeba określić podstawę prawną, czas retencji, podmioty przetwarzające i procedurę realizacji praw osób, których dane dotyczą.</p>
      </article>
    </>
  );
}
