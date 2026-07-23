"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, FileImage, ShieldCheck, X } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { DemoCalendar } from "@/components/demo-calendar";

type FormDataState = {
  name: string;
  email: string;
  phone: string;
  channel: string;
  motif: string;
  placement: string;
  size: string;
  color: string;
  budget: string;
  firstTattoo: string;
  preferredDate: string;
  consent: boolean;
};

type FilePreview = { name: string; url: string; size: number };

const initialForm: FormDataState = {
  name: "",
  email: "",
  phone: "",
  channel: "e-mail",
  motif: "",
  placement: "",
  size: "",
  color: "nie wiem",
  budget: "wolę omówić",
  firstTattoo: "tak",
  preferredDate: "",
  consent: false,
};

const stepLabels = ["Kontakt", "Pomysł", "Referencje i termin", "Podsumowanie"];

export function BriefForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormDataState>(initialForm);
  const [errors, setErrors] = useState<string[]>([]);
  const [files, setFiles] = useState<FilePreview[]>([]);
  const [complete, setComplete] = useState(false);
  const objectUrlsRef = useRef(new Set<string>());
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const objectUrls = objectUrlsRef.current;
    return () => {
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const update = <K extends keyof FormDataState>(key: K, value: FormDataState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const validateStep = () => {
    const nextErrors: string[] = [];
    if (step === 0) {
      if (!form.name.trim()) nextErrors.push("Podaj imię lub sposób, w jaki mamy się zwracać.");
      if (!form.email.trim() && !form.phone.trim()) {
        nextErrors.push("Podaj e-mail albo telefon — dane pozostaną wyłącznie w tej karcie.");
      }
      if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
        nextErrors.push("Sprawdź format adresu e-mail.");
      }
    }
    if (step === 1) {
      if (form.motif.trim().length < 10) nextErrors.push("Opisz motyw w co najmniej 10 znakach.");
      if (!form.placement.trim()) nextErrors.push("Podaj rozważane miejsce na ciele.");
      if (!form.size.trim()) nextErrors.push("Podaj przybliżony rozmiar w centymetrach.");
    }
    if (step === 3 && !form.consent) {
      nextErrors.push("Potwierdź, że rozumiesz demonstracyjny charakter formularza.");
    }
    setErrors(nextErrors);
    return nextErrors.length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((current) => Math.min(stepLabels.length - 1, current + 1));
    setErrors([]);
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  const previous = () => {
    setStep((current) => Math.max(0, current - 1));
    setErrors([]);
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  const onFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []).slice(0, 5);
    const previews = selected.map((file) => {
      const url = URL.createObjectURL(file);
      objectUrlsRef.current.add(url);
      return { name: file.name, url, size: file.size };
    });
    setFiles(previews);
  };

  const removeFile = (url: string) => {
    URL.revokeObjectURL(url);
    objectUrlsRef.current.delete(url);
    setFiles((current) => current.filter((item) => item.url !== url));
  };

  const resetForm = () => {
    objectUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    objectUrlsRef.current.clear();
    setForm(initialForm);
    setFiles([]);
    setStep(0);
    setComplete(false);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!validateStep()) return;
    setComplete(true);
    setErrors([]);
  };

  if (complete) {
    return (
      <section className="brief-complete" aria-live="polite">
        <span className="brief-complete__icon"><Check aria-hidden="true" /></span>
        <p className="eyebrow">Koniec demonstracji</p>
        <h2>Brief jest gotowy. Niczego nie wysłaliśmy.</h2>
        <p>
          Dane, preferowany dzień i podglądy plików istniały wyłącznie w tej karcie
          przeglądarki. Nie powstała rezerwacja ani zapytanie.
        </p>
        <button
          className="button button--primary"
          type="button"
          onClick={resetForm}
        >
          Wypełnij demonstrator ponownie
        </button>
      </section>
    );
  }

  return (
    <form className="brief-form" onSubmit={submit} noValidate>
      <div className="brief-form__top">
        <div>
          <p className="demo-flag">Wersja demonstracyjna — dane nie są wysyłane</p>
          <h2 ref={headingRef} tabIndex={-1}>{stepLabels[step]}</h2>
        </div>
        <div className="brief-progress" aria-label={`Krok ${step + 1} z ${stepLabels.length}`}>
          <span>{String(step + 1).padStart(2, "0")}</span>
          <div className="progress-track" aria-hidden="true">
            <span style={{ width: `${((step + 1) / stepLabels.length) * 100}%` }} />
          </div>
          <span>{String(stepLabels.length).padStart(2, "0")}</span>
        </div>
      </div>

      {errors.length ? (
        <div className="form-errors" role="alert" aria-live="assertive">
          <strong>Sprawdź te pola:</strong>
          <ul>{errors.map((error) => <li key={error}>{error}</li>)}</ul>
        </div>
      ) : null}

      {step === 0 ? (
        <div className="form-step form-grid">
          <label className="field field--wide">
            <span>Jak mamy się do Ciebie zwracać? *</span>
            <input value={form.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" />
          </label>
          <label className="field">
            <span>E-mail</span>
            <input type="email" value={form.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" />
          </label>
          <label className="field">
            <span>Telefon</span>
            <input type="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" />
          </label>
          <fieldset className="field field--wide segmented-field">
            <legend>Preferowany kanał kontaktu</legend>
            {["e-mail", "telefon", "WhatsApp"].map((channel) => (
              <label key={channel}>
                <input type="radio" name="channel" value={channel} checked={form.channel === channel} onChange={() => update("channel", channel)} />
                <span>{channel}</span>
              </label>
            ))}
          </fieldset>
          <p className="field-hint field--wide">To dane testowe. Nie opuszczają urządzenia i znikną po zamknięciu karty.</p>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="form-step form-grid">
          <label className="field field--wide">
            <span>Opisz motyw i najważniejszy element *</span>
            <textarea rows={6} value={form.motif} onChange={(event) => update("motif", event.target.value)} placeholder="Co ma znaleźć się w kompozycji i czego na pewno nie chcesz?" />
          </label>
          <label className="field">
            <span>Miejsce na ciele *</span>
            <input value={form.placement} onChange={(event) => update("placement", event.target.value)} placeholder="np. przedramię" />
          </label>
          <label className="field">
            <span>Przybliżony rozmiar *</span>
            <input value={form.size} onChange={(event) => update("size", event.target.value)} placeholder="np. 18 × 12 cm" />
          </label>
          <label className="field">
            <span>Kolorystyka</span>
            <select value={form.color} onChange={(event) => update("color", event.target.value)}>
              <option>nie wiem</option>
              <option>black & grey</option>
              <option>jeden akcent koloru</option>
              <option>pełny kolor</option>
            </select>
          </label>
          <label className="field">
            <span>Budżet — opcjonalnie</span>
            <select value={form.budget} onChange={(event) => update("budget", event.target.value)}>
              <option>wolę omówić</option>
              <option>do 800 zł</option>
              <option>800–1500 zł</option>
              <option>1500–2500 zł</option>
              <option>powyżej 2500 zł</option>
            </select>
          </label>
          <fieldset className="field field--wide segmented-field">
            <legend>Czy to pierwszy tatuaż?</legend>
            {["tak", "nie"].map((value) => (
              <label key={value}>
                <input type="radio" name="first-tattoo" value={value} checked={form.firstTattoo === value} onChange={() => update("firstTattoo", value)} />
                <span>{value}</span>
              </label>
            ))}
          </fieldset>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="form-step reference-step">
          <div className="upload-panel">
            <FileImage aria-hidden="true" size={30} />
            <h3>Referencje — lokalny podgląd</h3>
            <p>Do 5 obrazów pokazujących klimat lub układ. Nie przesyłaj dokumentów ani danych medycznych.</p>
            <label className="button button--ghost">
              Wybierz pliki
              <input className="sr-only" type="file" accept="image/*" multiple onChange={onFiles} />
            </label>
          </div>
          {files.length ? (
            <ul className="file-previews" aria-label="Wybrane pliki">
              {files.map((file) => (
                <li key={file.url}>
                  <Image src={file.url} alt={`Lokalny podgląd pliku ${file.name}`} width={160} height={120} unoptimized />
                  <span>{file.name}</span>
                  <small>{Math.max(1, Math.round(file.size / 1024))} KB</small>
                  <button type="button" onClick={() => removeFile(file.url)} aria-label={`Usuń plik ${file.name}`}>
                    <X aria-hidden="true" size={17} />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          <DemoCalendar selected={form.preferredDate} onSelect={(value) => update("preferredDate", value)} />
        </div>
      ) : null}

      {step === 3 ? (
        <div className="form-step summary-step">
          <div className="summary-card">
            <p className="eyebrow">Podsumowanie lokalne</p>
            <dl>
              <div><dt>Osoba</dt><dd>{form.name}</dd></div>
              <div><dt>Kontakt</dt><dd>{form.email || form.phone} · {form.channel}</dd></div>
              <div><dt>Motyw</dt><dd>{form.motif}</dd></div>
              <div><dt>Miejsce i rozmiar</dt><dd>{form.placement} · {form.size}</dd></div>
              <div><dt>Kierunek</dt><dd>{form.color} · {form.budget}</dd></div>
              <div><dt>Preferencja</dt><dd>{form.preferredDate || "nie wskazano"}</dd></div>
              <div><dt>Pliki</dt><dd>{files.length}</dd></div>
            </dl>
          </div>
          <label className="consent-box">
            <input type="checkbox" checked={form.consent} onChange={(event) => update("consent", event.target.checked)} />
            <span>
              <ShieldCheck aria-hidden="true" />
              Rozumiem, że to demonstrator: dane nie zostaną wysłane, zapisane ani użyte do rezerwacji.
            </span>
          </label>
        </div>
      ) : null}

      <div className="form-navigation">
        {step > 0 ? (
          <button className="button button--ghost" type="button" onClick={previous}>
            <ArrowLeft aria-hidden="true" size={18} /> Wstecz
          </button>
        ) : <span />}
        {step < stepLabels.length - 1 ? (
          <button className="button button--primary" type="button" onClick={next}>
            Dalej <ArrowRight aria-hidden="true" size={18} />
          </button>
        ) : (
          <button className="button button--primary" type="submit">
            Zakończ demonstrację <Check aria-hidden="true" size={18} />
          </button>
        )}
      </div>
    </form>
  );
}
