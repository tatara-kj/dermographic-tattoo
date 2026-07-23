"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { PortfolioCategory } from "@/data/portfolio";

type QuizOption = {
  label: string;
  scores: Partial<Record<PortfolioCategory, number>>;
};

const questions: Array<{ question: string; options: QuizOption[] }> = [
  {
    question: "Co ma grać główną rolę?",
    options: [
      { label: "Twarz", scores: { "realizm-portret": 3 } },
      { label: "Zwierzę", scores: { "zwierze-ornament": 3 } },
      { label: "Scena lub symbol", scores: { "fantasy-narracja": 3 } },
      { label: "Napis lub ornament", scores: { "linework-lettering": 3 } },
      { label: "Jeszcze nie wiem", scores: {} },
    ],
  },
  {
    question: "Jaki nastrój wybierasz?",
    options: [
      { label: "Spokojny", scores: { "realizm-portret": 2 } },
      { label: "Dramatyczny", scores: { "realizm-portret": 1, "fantasy-narracja": 2 } },
      { label: "Fantastyczny", scores: { "fantasy-narracja": 3 } },
      { label: "Minimalistyczny", scores: { "linework-lettering": 3 } },
    ],
  },
  {
    question: "Jak widzisz kolor?",
    options: [
      { label: "Black & grey", scores: { "realizm-portret": 2, "fantasy-narracja": 1 } },
      { label: "Jeden akcent", scores: { "fantasy-narracja": 2, "zwierze-ornament": 1 } },
      { label: "Pełny kolor", scores: { "zwierze-ornament": 2 } },
      { label: "Nie wiem", scores: {} },
    ],
  },
  {
    question: "Jaką skalę rozważasz?",
    options: [
      { label: "Detal", scores: { "zwierze-ornament": 1, "realizm-portret": 1, "linework-lettering": 2 } },
      { label: "Średnia", scores: { "realizm-portret": 1 } },
      { label: "Duża kompozycja", scores: { "fantasy-narracja": 2 } },
    ],
  },
  {
    question: "Co chcesz zobaczyć najpierw?",
    options: [
      { label: "Pełny kadr", scores: { "fantasy-narracja": 1 } },
      { label: "Detal", scores: { "realizm-portret": 1, "zwierze-ornament": 1 } },
      { label: "Różne kierunki", scores: {} },
    ],
  },
];

const resultLabels: Record<PortfolioCategory, string> = {
  "realizm-portret": "Realizm i portret",
  "fantasy-narracja": "Fantasy i narracja",
  "zwierze-ornament": "Zwierzę i ornament",
  "linework-lettering": "Linework i lettering",
};

export function StyleQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const complete = answers.length === questions.length;
  const result = useMemo<PortfolioCategory>(() => {
    const totals: Record<PortfolioCategory, number> = {
      "realizm-portret": 0,
      "fantasy-narracja": 0,
      "zwierze-ornament": 0,
      "linework-lettering": 0,
    };
    answers.forEach((answerIndex, questionIndex) => {
      const option = questions[questionIndex]?.options[answerIndex];
      if (!option) return;
      Object.entries(option.scores).forEach(([key, score]) => {
        totals[key as PortfolioCategory] += score ?? 0;
      });
    });
    return (Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0] ??
      "realizm-portret") as PortfolioCategory;
  }, [answers]);

  const choose = (optionIndex: number) => {
    setAnswers((current) => [...current.slice(0, step), optionIndex]);
    if (step < questions.length - 1) setStep((current) => current + 1);
  };

  const reset = () => {
    setAnswers([]);
    setStep(0);
  };

  return (
    <section className="quiz" aria-labelledby="quiz-heading">
      <div className="quiz__intro">
        <p className="eyebrow">Quiz stylu</p>
        <h2 id="quiz-heading">Jaki kierunek pasuje do Twojego pomysłu?</h2>
        <p>
          Pięć krótkich pytań prowadzi do podobnych prac. Wynik nie jest kwalifikacją
          projektu ani deklaracją przyjęcia zlecenia.
        </p>
      </div>
      <div className="quiz__panel">
        <div className="progress-meta">
          <span>{complete ? "Wynik" : `Pytanie ${step + 1} z ${questions.length}`}</span>
          <div className="progress-track" aria-hidden="true">
            <span style={{ width: `${(answers.length / questions.length) * 100}%` }} />
          </div>
        </div>

        {complete ? (
          <div className="quiz__result" aria-live="polite">
            <span className="result-index" aria-hidden="true">{String(resultLabels[result].length).padStart(2, "0")}</span>
            <p>Najbliższy kierunek w tym portfolio</p>
            <h3>{resultLabels[result]}</h3>
            <p>
              To punkt startowy do oglądania portfolio, nie profesjonalna diagnoza stylu.
            </p>
            <div className="button-row">
              <Link className="button button--primary" href={`/portfolio?filter=${result}`}>
                Pokaż podobne prace <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <button className="button button--ghost" type="button" onClick={reset}>
                <RotateCcw aria-hidden="true" size={17} /> Zacznij od nowa
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz__question">
            <h3>{questions[step].question}</h3>
            <div className="quiz__options">
              {questions[step].options.map((option, optionIndex) => (
                <button key={option.label} type="button" onClick={() => choose(optionIndex)}>
                  <span>{String(optionIndex + 1).padStart(2, "0")}</span>
                  {option.label}
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
              ))}
            </div>
            {step > 0 ? (
              <button className="quiz__back" type="button" onClick={() => setStep((current) => current - 1)}>
                <ArrowLeft aria-hidden="true" size={17} /> Poprzednie pytanie
              </button>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
