# Dermographic Tattoo — portfolio Wojciecha Sokuna

Wersja online: [tatara-kj.github.io/dermographic-tattoo](https://tatara-kj.github.io/dermographic-tattoo/)

Kompletna implementacja serwisu portfolio w Next.js 16, React 19 i TypeScript. Projekt wykorzystuje fotografie prac opublikowane na oficjalnym profilu Instagram Wojciecha Sokuna i prowadzi z każdej realizacji do źródłowego posta.

## Uruchomienie

Wymagany jest Node.js 20.9 lub nowszy.

```bash
npm install
npm run dev
```

Serwis będzie dostępny pod adresem [http://localhost:3000](http://localhost:3000).

Kontrole jakości:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Opcjonalnie skopiuj `.env.example` do `.env.local` i ustaw publiczny adres strony w `NEXT_PUBLIC_SITE_URL`. Jest on używany w kanonicznych adresach URL, mapie strony i metadanych społecznościowych.

## Zakres

- strona główna i rozbudowane portfolio z filtrami oraz wyszukiwaniem;
- strony szczegółów dwunastu pozycji katalogowych;
- dostępny lightbox z obsługą klawiatury i gestu przesunięcia;
- ulubione inspiracje zapisywane wyłącznie w `localStorage`;
- quiz stylu, lokalne checklisty i demonstracyjny kalendarz;
- czterostopniowy formularz briefu z walidacją i lokalnymi podglądami plików;
- strony: artysta, proces, pierwszy tatuaż, pielęgnacja, FAQ, kontakt/demo i prywatność;
- responsywny system wizualny, tryb ograniczonego ruchu i style druku;
- metadata, canonical, Open Graph, favicon, `robots.txt`, `sitemap.xml` i ostrożne JSON-LD.

## Ważne ograniczenia treści

Aktualny stan działalności został opisany zgodnie z dokumentacją źródłową: działalność jest zawieszona od 1 marca 2025 r. Serwis nie udaje aktywnego systemu zapisów. Formularz i kalendarz są jawnie oznaczone jako demonstracyjne i niczego nie wysyłają.

Adres, telefon, e-mail, godziny pracy, aktywne kanały kontaktu oraz możliwość wznowienia zapisów wymagają potwierdzenia przez właściciela przed publikacją. Ocena Google Maps 4,8/5 przy ponad 60 opiniach jest opisana jako stan na 23 lipca 2026 r., ponieważ dokładna liczba opinii może się zmieniać.

## Zdjęcia portfolio

Galeria korzysta z dwunastu fotografii z oficjalnego konta `@dermographictattoo_stg`. Pliki znajdują się w `public/work/`, a rekordy w `src/data/portfolio.ts` zawierają opisy alternatywne oraz odnośniki do źródłowych publikacji. Przed komercyjnym przekazaniem strony należy uzyskać od właściciela oryginały zdjęć i potwierdzenie zgód klientów na publikację poza platformami społecznościowymi.

Karta `public/og.png` została przygotowana specjalnie dla aktualnej identyfikacji serwisu.

## Źródła robocze

Projekt korzysta z dokumentów znajdujących się poziom wyżej: `RESEARCH.md`, `PORTFOLIO_CATALOG.md`, `MEDIA_SOURCES.md`, `SITE_SPEC.md`, `CONTENT.md`, `DESIGN_DIRECTION.md` i `OWNER_QUESTIONS.md`.

## Prywatność

Projekt nie ma backendu, analityki ani integracji marketingowych. Dane briefu i podglądy plików istnieją wyłącznie w pamięci bieżącej karty. Ulubione i checklisty są zapisywane lokalnie tylko po działaniu użytkownika; można je wyczyścić w interfejsie.
