import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mainNavigation, siteConfig } from "@/data/site";
import { Wordmark } from "@/components/wordmark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__lead">
        <p className="eyebrow">Portfolio / Starogard Gdański</p>
        <h2>Najpierw zobacz prace.</h2>
        <Link className="text-link" href="/portfolio">
          Przejdź do portfolio <ArrowUpRight aria-hidden="true" size={20} />
        </Link>
      </div>
      <div className="site-footer__grid">
        <Wordmark />
        <nav aria-label="Nawigacja w stopce">
          {mainNavigation.slice(0, 5).map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-footer__meta">
          <p>{siteConfig.city}</p>
          <p>Status: zawieszona od 01.03.2025 według CEIDG</p>
          <p>Odczyt: {siteConfig.statusDate}</p>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 Dermographic Tattoo</span>
        <span>Wersja demonstracyjna · dane nie są wysyłane</span>
      </div>
    </footer>
  );
}
