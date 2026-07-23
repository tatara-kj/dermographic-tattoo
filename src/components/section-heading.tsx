import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
  action,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
      {action ? <div className="section-heading__action">{action}</div> : null}
    </div>
  );
}
