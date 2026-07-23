import { ReactNode } from "react";

export function PageHero({
  index,
  eyebrow,
  title,
  lead,
  aside,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
  aside?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__index" aria-hidden="true">
        {index}
      </div>
      <div className="page-hero__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
      {aside ? <div className="page-hero__aside">{aside}</div> : null}
    </section>
  );
}
