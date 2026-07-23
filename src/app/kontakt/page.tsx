import { ArrowUpRight, CircleAlert, MapPin, PhoneOff } from "lucide-react";
import { BriefForm } from "@/components/brief-form";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Status i kontakt",
  description:
    "Datowana informacja o statusie Dermographic Tattoo oraz demonstracyjny formularz briefu, który nie wysyła danych.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="07"
        eyebrow="Status i kontakt"
        title="Portfolio działa. Rezerwacje — nie."
        lead="Według oficjalnego wpisu CEIDG działalność jest zawieszona od 1 marca 2025 roku i nie ma podanej daty wznowienia."
        aside={<p className="page-note">Ostatnia weryfikacja: {siteConfig.statusDate}.</p>}
      />
      <section className="status-details page-section">
        <article className="status-card status-card--important">
          <CircleAlert aria-hidden="true" />
          <p className="eyebrow">Źródło pierwotne</p>
          <h2>Działalność zawieszona</h2>
          <p>Ta wersja strony nie przyjmuje rezerwacji, zapytań ani płatności.</p>
          <a className="text-link" href={siteConfig.ceidgUrl} target="_blank" rel="noreferrer">Sprawdź wpis CEIDG <ArrowUpRight aria-hidden="true" size={18} /></a>
        </article>
        <article className="status-card">
          <MapPin aria-hidden="true" />
          <p className="eyebrow">Lokalizacja</p>
          <h2>Starogard Gdański</h2>
          <p>Pełny adres i faktyczna możliwość wizyty wymagają potwierdzenia właściciela.</p>
        </article>
        <article className="status-card">
          <PhoneOff aria-hidden="true" />
          <p className="eyebrow">Kanały kontaktu</p>
          <h2>Nieaktywne</h2>
          <p>Telefon, e-mail, godziny i profile nie są publikowane jako aktualne.</p>
        </article>
      </section>
      <section className="brief-section page-section" id="brief-demo">
        <div className="section-heading">
          <p className="eyebrow">Brief / Demo</p>
          <div>
            <h2>Uporządkuj pomysł. Bez wysyłania.</h2>
            <p>Przejdź formularz, zobacz lokalne podsumowanie i przetestuj kalendarz preferencji. Nic nie opuszcza urządzenia.</p>
          </div>
        </div>
        <BriefForm />
      </section>
    </>
  );
}
