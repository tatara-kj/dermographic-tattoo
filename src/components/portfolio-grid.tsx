"use client";

import Link from "next/link";
import { Bookmark, BookmarkCheck, Search, SlidersHorizontal, Trash2, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Lightbox } from "@/components/lightbox";
import { PortfolioArt } from "@/components/portfolio-art";
import {
  categoryOptions,
  PortfolioCategory,
  PortfolioItem,
} from "@/data/portfolio";

const STORAGE_KEY = "dermographic:favorites:v1";

type FilterValue = "all" | PortfolioCategory;

export function PortfolioGrid({
  items,
  initialFilter = "all",
  compact = false,
}: {
  items: PortfolioItem[];
  initialFilter?: FilterValue;
  compact?: boolean;
}) {
  const [filter, setFilter] = useState<FilterValue>(initialFilter);
  const [query, setQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [storageReady, setStorageReady] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) setFavorites(JSON.parse(saved) as string[]);
      } catch {
        setFavorites([]);
      } finally {
        setStorageReady(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites, storageReady]);

  const visibleItems = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pl");
    return items.filter((item) => {
      const categoryMatches = filter === "all" || item.category === filter;
      const queryMatches =
        !normalized ||
        [item.title, item.categoryLabel, item.sourceId, ...item.tags]
          .join(" ")
          .toLocaleLowerCase("pl")
          .includes(normalized);
      return categoryMatches && queryMatches;
    });
  }, [filter, items, query]);

  const favoriteItems = items.filter((item) => favorites.includes(item.id));

  const toggleFavorite = (id: string) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id],
    );
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  return (
    <div className={compact ? "portfolio-module portfolio-module--compact" : "portfolio-module"}>
      {!compact ? (
        <div className="portfolio-toolbar">
          <div className="filter-list" role="group" aria-label="Filtruj portfolio">
            {categoryOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={filter === option.value}
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <label className="portfolio-search">
            <span className="sr-only">Szukaj po tytule, stylu lub motywie</span>
            <Search aria-hidden="true" size={19} />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Szukaj motywu lub stylu"
            />
            {query ? (
              <button type="button" onClick={() => setQuery("")} aria-label="Wyczyść wyszukiwanie">
                <X aria-hidden="true" size={18} />
              </button>
            ) : null}
          </label>
          <button
            className="favorites-button"
            type="button"
            aria-expanded={favoritesOpen}
            onClick={() => setFavoritesOpen((current) => !current)}
          >
            <Bookmark aria-hidden="true" size={19} />
            Moje inspiracje <span>{favorites.length}</span>
          </button>
        </div>
      ) : null}

      {!compact && favoritesOpen ? (
        <aside className="favorites-panel" aria-label="Zapisane inspiracje">
          <div className="favorites-panel__header">
            <div>
              <p className="eyebrow">Tylko na tym urządzeniu</p>
              <h2>Moje inspiracje</h2>
            </div>
            <button type="button" onClick={() => setFavoritesOpen(false)} aria-label="Zamknij panel">
              <X aria-hidden="true" />
            </button>
          </div>
          {favoriteItems.length ? (
            <>
              <ul>
                {favoriteItems.map((item) => (
                  <li key={item.id}>
                    <span>{item.sourceId}</span>
                    <Link href={`/portfolio/${item.slug}`}>{item.title}</Link>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(item.id)}
                      aria-label={`Usuń ${item.title} z inspiracji`}
                    >
                      <Trash2 aria-hidden="true" size={18} />
                    </button>
                  </li>
                ))}
              </ul>
              {confirmClear ? (
                <div className="clear-confirm" role="alert">
                  <p>Wyczyścić zapisane inspiracje na tym urządzeniu?</p>
                  <button
                    type="button"
                    onClick={() => {
                      setFavorites([]);
                      setConfirmClear(false);
                    }}
                  >
                    Tak, wyczyść
                  </button>
                  <button type="button" onClick={() => setConfirmClear(false)}>
                    Anuluj
                  </button>
                </div>
              ) : (
                <button className="text-button" type="button" onClick={() => setConfirmClear(true)}>
                  Wyczyść wszystkie
                </button>
              )}
            </>
          ) : (
            <p className="empty-state">
              Nie masz jeszcze zapisanych prac. Użyj zakładki przy wybranej realizacji.
            </p>
          )}
        </aside>
      ) : null}

      {!compact ? (
        <div className="results-meta" aria-live="polite">
          <span>
            <SlidersHorizontal aria-hidden="true" size={18} />
            Wyniki
          </span>
          <strong>{visibleItems.length}</strong>
        </div>
      ) : null}

      {visibleItems.length ? (
        <div className="portfolio-grid">
          {visibleItems.map((item, index) => {
            const saved = favorites.includes(item.id);
            return (
              <article
                className={`portfolio-card portfolio-card--${item.orientation}`}
                key={item.id}
              >
                <button
                  className="portfolio-card__visual"
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Otwórz realizację: ${item.title}`}
                >
                  <PortfolioArt item={item} priorityLabel={String(index + 1).padStart(2, "0")} />
                </button>
                <div className="portfolio-card__meta">
                  <div>
                    <p>{item.categoryLabel}</p>
                    <h3>
                      <Link href={`/portfolio/${item.slug}`}>{item.title}</Link>
                    </h3>
                  </div>
                  <button
                    type="button"
                    className={saved ? "save-button is-saved" : "save-button"}
                    aria-pressed={saved}
                    onClick={() => toggleFavorite(item.id)}
                    aria-label={saved ? `Usuń ${item.title} z inspiracji` : `Zapisz ${item.title} jako inspirację`}
                  >
                    {saved ? <BookmarkCheck aria-hidden="true" /> : <Bookmark aria-hidden="true" />}
                    <span>{saved ? "Zapisano" : "Zapisz"}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="portfolio-empty">
          <p>Nie ma jeszcze pracy w tym zestawie.</p>
          <button
            type="button"
            onClick={() => {
              setFilter("all");
              setQuery("");
            }}
          >
            Wróć do wszystkich realizacji
          </button>
        </div>
      )}

      {lightboxIndex !== null && visibleItems[lightboxIndex] ? (
        <Lightbox
          items={visibleItems}
          index={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={closeLightbox}
        />
      ) : null}
    </div>
  );
}
