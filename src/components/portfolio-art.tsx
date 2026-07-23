import { PortfolioItem } from "@/data/portfolio";

export function PortfolioArt({
  item,
  priorityLabel,
}: {
  item: PortfolioItem;
  priorityLabel?: string;
}) {
  return (
    <div
      className={`portfolio-art portfolio-art--${item.variant} portfolio-art--${item.accent}`}
      role="img"
      aria-label={`Abstrakcyjny placeholder ${item.mediaKey}; nie przedstawia prawdziwej realizacji`}
      data-media-key={item.mediaKey}
    >
      <div className="portfolio-art__field" aria-hidden="true">
        <i className="portfolio-art__ring" />
        <i className="portfolio-art__line" />
        <i className="portfolio-art__mark" />
      </div>
      <div className="portfolio-art__labels" aria-hidden="true">
        <span>{priorityLabel ?? item.sourceId}</span>
        <span>Placeholder / prawa do potwierdzenia</span>
      </div>
      <strong aria-hidden="true">{item.mediaKey}</strong>
    </div>
  );
}
