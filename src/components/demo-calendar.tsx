"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const months = [
  { label: "Sierpień 2026", year: 2026, month: 7 },
  { label: "Wrzesień 2026", year: 2026, month: 8 },
  { label: "Październik 2026", year: 2026, month: 9 },
];

const weekdays = ["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"];

export function DemoCalendar({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (value: string) => void;
}) {
  const [monthIndex, setMonthIndex] = useState(0);
  const current = months[monthIndex];
  const days = useMemo(() => {
    const firstDay = new Date(Date.UTC(current.year, current.month, 1)).getUTCDay();
    const offset = (firstDay + 6) % 7;
    const count = new Date(Date.UTC(current.year, current.month + 1, 0)).getUTCDate();
    return [
      ...Array.from({ length: offset }, () => null),
      ...Array.from({ length: count }, (_, index) => index + 1),
    ];
  }, [current.month, current.year]);

  return (
    <div className="demo-calendar">
      <p className="demo-flag">DEMO — kalendarz nie pokazuje wolnych terminów</p>
      <div className="demo-calendar__nav">
        <button
          type="button"
          onClick={() => setMonthIndex((value) => Math.max(0, value - 1))}
          disabled={monthIndex === 0}
          aria-label="Poprzedni miesiąc"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <strong aria-live="polite">{current.label}</strong>
        <button
          type="button"
          onClick={() => setMonthIndex((value) => Math.min(months.length - 1, value + 1))}
          disabled={monthIndex === months.length - 1}
          aria-label="Następny miesiąc"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <div className="demo-calendar__weekdays" aria-hidden="true">
        {weekdays.map((weekday) => (
          <span key={weekday}>{weekday}</span>
        ))}
      </div>
      <div className="demo-calendar__days" role="group" aria-label={`Preferowany dzień — ${current.label}`}>
        {days.map((day, index) => {
          if (!day) return <span className="calendar-spacer" key={`spacer-${index}`} />;
          const value = `${current.label}, ${day}`;
          return (
            <button
              type="button"
              key={value}
              aria-pressed={selected === value}
              onClick={() => onSelect(value)}
            >
              {day}
            </button>
          );
        })}
      </div>
      <p className="field-hint" aria-live="polite">
        {selected
          ? `Preferencja: ${selected}. Nic nie zostało zarezerwowane.`
          : "Wybór dnia zapisze go wyłącznie w lokalnym podsumowaniu briefu."}
      </p>
    </div>
  );
}
