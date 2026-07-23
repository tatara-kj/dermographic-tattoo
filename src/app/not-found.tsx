import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <span aria-hidden="true">404</span>
      <p className="eyebrow">Nie znaleziono strony</p>
      <h1>Ten kadr nie istnieje.</h1>
      <p>Wróć do centralnej galerii i wybierz jedną z dostępnych realizacji.</p>
      <Link className="button button--primary" href="/portfolio"><ArrowLeft aria-hidden="true" size={18} /> Wróć do portfolio</Link>
    </section>
  );
}
