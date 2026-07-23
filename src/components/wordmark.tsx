import Link from "next/link";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      className={compact ? "wordmark wordmark--compact" : "wordmark"}
      href="/"
      aria-label="Dermographic Tattoo — strona główna"
    >
      <span>Dermographic</span>
      <span>Tattoo</span>
    </Link>
  );
}
