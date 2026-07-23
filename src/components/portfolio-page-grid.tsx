"use client";

import { useSearchParams } from "next/navigation";
import { PortfolioGrid } from "@/components/portfolio-grid";
import type { PortfolioCategory, PortfolioItem } from "@/data/portfolio";

const allowedFilters: PortfolioCategory[] = [
  "realizm-portret",
  "fantasy-narracja",
  "zwierze-ornament",
  "linework-lettering",
];

export function PortfolioPageGrid({ items }: { items: PortfolioItem[] }) {
  const searchParams = useSearchParams();
  const requestedFilter = searchParams.get("filter");
  const initialFilter = allowedFilters.includes(requestedFilter as PortfolioCategory)
    ? (requestedFilter as PortfolioCategory)
    : "all";

  return <PortfolioGrid key={initialFilter} items={items} initialFilter={initialFilter} />;
}
