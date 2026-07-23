"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { PortfolioArt } from "@/components/portfolio-art";
import { PortfolioItem } from "@/data/portfolio";

type LightboxProps = {
  items: PortfolioItem[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export function Lightbox({ items, index, onChange, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef(0);
  const indexRef = useRef(index);
  const item = items[index];

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    openerRef.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onChange((indexRef.current - 1 + items.length) % items.length);
      }
      if (event.key === "ArrowRight") {
        onChange((indexRef.current + 1) % items.length);
      }
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      openerRef.current?.focus();
    };
  }, [items.length, onChange, onClose]);

  const onPointerUp = (event: React.PointerEvent) => {
    const delta = event.clientX - touchStartX.current;
    if (Math.abs(delta) < 54) return;
    if (delta > 0) onChange((index - 1 + items.length) % items.length);
    else onChange((index + 1) % items.length);
  };

  return (
    <div
      className="lightbox-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div
        className="lightbox"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        ref={dialogRef}
      >
        <div className="lightbox__topbar">
          <span>
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Zamknij podgląd">
            Zamknij <X aria-hidden="true" />
          </button>
        </div>
        <div
          className="lightbox__stage"
          onPointerDown={(event) => {
            touchStartX.current = event.clientX;
          }}
          onPointerUp={onPointerUp}
        >
          <button
            className="lightbox__arrow lightbox__arrow--prev"
            type="button"
            aria-label="Poprzednia realizacja"
            onClick={() => onChange((index - 1 + items.length) % items.length)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <div className="lightbox__art">
            <PortfolioArt item={item} />
          </div>
          <button
            className="lightbox__arrow lightbox__arrow--next"
            type="button"
            aria-label="Następna realizacja"
            onClick={() => onChange((index + 1) % items.length)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
        <div className="lightbox__caption">
          <div>
            <p className="eyebrow">{item.sourceId} · {item.categoryLabel}</p>
            <h2 id="lightbox-title">{item.title}</h2>
          </div>
          <div>
            <p>{item.description}</p>
            <ul className="tag-list" aria-label="Kategorie pracy">
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
