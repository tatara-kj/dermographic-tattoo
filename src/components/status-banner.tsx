import Link from "next/link";
import { CircleAlert } from "lucide-react";
import { siteConfig } from "@/data/site";

export function StatusBanner() {
  return (
    <aside className="status-banner" aria-label="Status działalności">
      <div className="status-banner__inner">
        <CircleAlert aria-hidden="true" size={17} strokeWidth={1.8} />
        <p>{siteConfig.status}</p>
        <Link href="/kontakt">Kontakt i status</Link>
      </div>
    </aside>
  );
}
