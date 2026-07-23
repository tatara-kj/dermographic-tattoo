import Image from "next/image";
import type { PortfolioItem } from "@/data/portfolio";

export function PortfolioArt({
  item,
  priorityLabel,
}: {
  item: PortfolioItem;
  priorityLabel?: string;
}) {
  return (
    <div className="portfolio-art" data-source-id={item.sourceId}>
      <Image
        className="portfolio-art__image"
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 42vw"
        priority={priorityLabel === "01 / HERO"}
      />
      <div className="portfolio-art__shade" aria-hidden="true" />
      <div className="portfolio-art__labels" aria-hidden="true">
        <span>{priorityLabel ?? item.sourceId}</span>
        <span>Realizacja / {item.sourceLabel}</span>
      </div>
    </div>
  );
}
