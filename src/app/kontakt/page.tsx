import {
  ArrowUpRight,
  CircleAlert,
  Camera,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { BriefForm } from "@/components/brief-form";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Kontakt i lokalizacja",
  description:
    "Oficjalne profile Dermographic Tattoo, publiczny numer telefonu, mapa Starogardu Gdańskiego oraz kreator briefu.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="07"
        eyebrow="Kontakt i lokalizacja"
        title="Najpierw potwierdź termin."
        lead="Portfolio oraz oficjalne profile artysty są aktywne. Przed wizytą potwierdź bezpośrednio dostępność i miejsce spotkania."
        aside={<p className="page-note">Ostatnia weryfikacja danych: {siteConfig.statusDate}.</p>}
      />

      <section className="status-details page-section">
        <article className="status-card status-card--important">
          <CircleAlert aria-hidden="true" />
          <p className="eyebrow">Status publiczny</p>
          <h2>Zapisy do potwierdzenia</h2>
          <p>CEIDG wskazuje zawieszenie działalności od 1 marca 2025 roku. Nie jedź do studia bez wcześniejszego kontaktu.</p>
          <a className="text-link" href={siteConfig.ceidgUrl} target="_blank" rel="noreferrer">
            Sprawdź wpis CEIDG <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </article>

        <article className="status-card">
          <Phone aria-hidden="true" />
          <p className="eyebrow">Telefon publiczny</p>
          <h2>{siteConfig.phone}</h2>
          <p>Numer widoczny w publicznych katalogach. Aktualność potwierdź przed wysłaniem danych lub wizytą.</p>
          <a className="text-link" href={siteConfig.phoneHref}>Zadzwoń <ArrowUpRight aria-hidden="true" size={18} /></a>
        </article>

        <article className="status-card status-card--social">
          <Camera aria-hidden="true" />
          <p className="eyebrow">Oficjalne profile</p>
          <h2>Napisz bezpośrednio</h2>
          <div className="contact-socials">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
              <Camera aria-hidden="true" size={18} /> Instagram
            </a>
            <a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={18} /> Facebook
            </a>
          </div>
        </article>
      </section>

      <section className="location-section page-section" aria-labelledby="location-heading">
        <div className="location-section__copy">
          <p className="eyebrow">Starogard Gdański</p>
          <h2 id="location-heading">Znajdź publiczny profil na mapie.</h2>
          <p>
            Mapa otwiera wynik wyszukiwania Dermographic Tattoo. Dokładny adres i możliwość wizyty
            potwierdź bezpośrednio z Wojciechem Sokunem.
          </p>
          <a className="button button--ghost" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" size={18} /> Otwórz trasę w Google Maps
          </a>
        </div>
        <div className="map-frame">
          <iframe
            src={siteConfig.mapEmbedUrl}
            title="Mapa Dermographic Tattoo w Starogardzie Gdańskim"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="brief-section page-section" id="brief">
        <div className="section-heading">
          <p className="eyebrow">Kreator briefu</p>
          <div>
            <h2>Uporządkuj pomysł przed rozmową.</h2>
            <p>Przygotuj motyw, miejsce, rozmiar, referencje i preferowany termin. Podsumowanie pozostaje lokalnie na Twoim urządzeniu.</p>
          </div>
        </div>
        <BriefForm />
      </section>
    </>
  );
}
