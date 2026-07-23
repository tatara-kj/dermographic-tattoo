"use client";

import { Check, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

export function LocalChecklist({
  title,
  intro,
  items,
  storageKey,
}: {
  title: string;
  intro: string;
  items: string[];
  storageKey: string;
}) {
  const [checked, setChecked] = useState<number[]>([]);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved) {
          setChecked(JSON.parse(saved) as number[]);
          setRemember(true);
        }
      } catch {
        setChecked([]);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [storageKey]);

  useEffect(() => {
    if (!remember) return;
    window.localStorage.setItem(storageKey, JSON.stringify(checked));
  }, [checked, remember, storageKey]);

  const toggle = (index: number) => {
    setChecked((current) =>
      current.includes(index) ? current.filter((value) => value !== index) : [...current, index],
    );
  };

  const reset = () => {
    setChecked([]);
    window.localStorage.removeItem(storageKey);
  };

  return (
    <section className="checklist" aria-labelledby={`${storageKey}-heading`}>
      <div className="checklist__intro">
        <p className="eyebrow">Lista lokalna</p>
        <h2 id={`${storageKey}-heading`}>{title}</h2>
        <p>{intro}</p>
        <p className="checklist__progress" aria-live="polite">
          {checked.length} z {items.length} zaznaczone
        </p>
      </div>
      <div className="checklist__items">
        {items.map((item, index) => {
          const active = checked.includes(index);
          return (
            <button
              key={item}
              type="button"
              className={active ? "checklist-item is-checked" : "checklist-item"}
              aria-pressed={active}
              onClick={() => toggle(index)}
            >
              <span>{active ? <Check aria-hidden="true" size={18} /> : String(index + 1).padStart(2, "0")}</span>
              {item}
            </button>
          );
        })}
        <div className="checklist__actions">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => {
                setRemember(event.target.checked);
                if (!event.target.checked) window.localStorage.removeItem(storageKey);
              }}
            />
            Zapamiętaj na tym urządzeniu
          </label>
          <button type="button" onClick={reset}>
            <RotateCcw aria-hidden="true" size={16} /> Wyczyść postęp
          </button>
        </div>
      </div>
    </section>
  );
}
