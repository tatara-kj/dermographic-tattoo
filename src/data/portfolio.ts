export type PortfolioCategory =
  | "realizm-portret"
  | "fantasy-narracja"
  | "zwierze-ornament"
  | "linework-lettering";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type PortfolioItem = {
  id: string;
  slug: string;
  sourceId: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  tags: string[];
  description: string;
  orientation: "portrait" | "landscape" | "square";
  imageSrc: string;
  imageAlt: string;
  sourceUrl: string;
  sourceLabel: string;
  featured?: boolean;
};

export const categoryOptions: Array<{
  value: "all" | PortfolioCategory;
  label: string;
}> = [
  { value: "all", label: "Wszystkie" },
  { value: "realizm-portret", label: "Realizm i portret" },
  { value: "fantasy-narracja", label: "Fantasy i narracja" },
  { value: "zwierze-ornament", label: "Zwierzęta i ornament" },
  { value: "linework-lettering", label: "Linework i lettering" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "dt-001",
    slug: "portret-wojowniczki",
    sourceId: "IG / 01",
    title: "Portret wojowniczki",
    category: "realizm-portret",
    categoryLabel: "Realizm i portret",
    tags: ["black & grey", "portret", "akcent koloru"],
    description:
      "Realistyczny portret z rozbudowanym pióropuszem i selektywnym czerwonym akcentem. Fotografia pochodzi z oficjalnego profilu artysty.",
    orientation: "portrait",
    imageSrc: `${basePath}/work/dermographic-instagram-13.webp`,
    imageAlt: "Realistyczny tatuaż przedstawiający wojowniczkę w pióropuszu",
    sourceUrl: "https://www.instagram.com/p/DGKoA98Mwh1/",
    sourceLabel: "Instagram artysty",
    featured: true,
  },
  {
    id: "dt-002",
    slug: "wojowniczka-z-krukiem",
    sourceId: "IG / 02",
    title: "Wojowniczka z krukiem",
    category: "fantasy-narracja",
    categoryLabel: "Fantasy i narracja",
    tags: ["realizm", "kolor", "duża kompozycja"],
    description:
      "Duża, narracyjna kompozycja łącząca portret wojowniczki z krukiem. Praca pokazuje kontrolę koloru, światła i anatomii.",
    orientation: "portrait",
    imageSrc: `${basePath}/work/dermographic-instagram-02.jpg`,
    imageAlt: "Kolorowy tatuaż wojowniczki trzymającej kruka",
    sourceUrl: "https://www.instagram.com/dermographictattoo_stg/reel/DaVKvIlMj5s/",
    sourceLabel: "Instagram artysty",
    featured: true,
  },
  {
    id: "dt-003",
    slug: "aniol-smierci",
    sourceId: "IG / 03",
    title: "Anioł śmierci",
    category: "fantasy-narracja",
    categoryLabel: "Fantasy i narracja",
    tags: ["dark", "black & grey", "realizm"],
    description:
      "Mroczna kompozycja black & grey z postacią żniwiarza, organiczną kosą i detalami czaszek u podstawy.",
    orientation: "portrait",
    imageSrc: `${basePath}/work/dermographic-instagram-10.jpg`,
    imageAlt: "Ciemny tatuaż anioła śmierci z kosą i czaszkami",
    sourceUrl: "https://www.instagram.com/dermographictattoo_stg/reel/DLsVTWBtQUm/",
    sourceLabel: "Instagram artysty",
    featured: true,
  },
  {
    id: "dt-004",
    slug: "aniol-black-grey",
    sourceId: "IG / 04",
    title: "Anioł w black & grey",
    category: "realizm-portret",
    categoryLabel: "Realizm i portret",
    tags: ["black & grey", "rzeźba", "miękkie cieniowanie"],
    description:
      "Realistyczna interpretacja anioła o rzeźbiarskim charakterze, z miękkimi przejściami tonalnymi i mocnym światłocieniem.",
    orientation: "portrait",
    imageSrc: `${basePath}/work/dermographic-instagram-11.jpg`,
    imageAlt: "Realistyczny tatuaż śpiącego anioła w technice black and grey",
    sourceUrl: "https://www.instagram.com/dermographictattoo_stg/reel/DLo0pR3NNr3/",
    sourceLabel: "Instagram artysty",
    featured: true,
  },
  {
    id: "dt-005",
    slug: "memento-mori",
    sourceId: "IG / 05",
    title: "Memento mori",
    category: "fantasy-narracja",
    categoryLabel: "Fantasy i narracja",
    tags: ["rękaw", "black & grey", "symbolika"],
    description:
      "Rozbudowany fragment rękawa z kobiecym portretem, motywem barana, architekturą i typograficzną narracją memento mori.",
    orientation: "portrait",
    imageSrc: `${basePath}/work/dermographic-instagram-07.jpg`,
    imageAlt: "Tatuaż rękawa z portretem kobiety, baranem i napisem memento mori",
    sourceUrl: "https://www.instagram.com/dermographictattoo_stg/reel/DVbH0f1jMiO/",
    sourceLabel: "Instagram artysty",
    featured: true,
  },
  {
    id: "dt-006",
    slug: "droga-na-stadion",
    sourceId: "IG / 06",
    title: "Droga na stadion",
    category: "realizm-portret",
    categoryLabel: "Realizm i portret",
    tags: ["realizm", "pamiątkowy", "narracja"],
    description:
      "Osobista scena pamiątkowa z ojcem i dzieckiem zmierzającymi w stronę stadionu — historia zamknięta w pionowej kompozycji.",
    orientation: "portrait",
    imageSrc: `${basePath}/work/dermographic-instagram-04.jpg`,
    imageAlt: "Pamiątkowy tatuaż ojca i dziecka idących w stronę stadionu",
    sourceUrl: "https://www.instagram.com/dermographictattoo_stg/reel/DXysdRxM2gY/",
    sourceLabel: "Instagram artysty",
  },
  {
    id: "dt-007",
    slug: "buldog-francuski",
    sourceId: "IG / 07",
    title: "Buldog francuski",
    category: "zwierze-ornament",
    categoryLabel: "Zwierzęta i ornament",
    tags: ["portret zwierzęcia", "black & grey", "kwiaty"],
    description:
      "Portret buldoga francuskiego z botanicznym tłem. Wyraziste spojrzenie i faktura sierści budują charakter pracy.",
    orientation: "portrait",
    imageSrc: `${basePath}/work/dermographic-instagram-08.jpg`,
    imageAlt: "Realistyczny tatuaż buldoga francuskiego z kwiatami",
    sourceUrl: "https://www.instagram.com/dermographictattoo_stg/reel/DTP60ftDCmI/",
    sourceLabel: "Instagram artysty",
    featured: true,
  },
  {
    id: "dt-008",
    slug: "portret-psa",
    sourceId: "IG / 08",
    title: "Portret psa",
    category: "zwierze-ornament",
    categoryLabel: "Zwierzęta i ornament",
    tags: ["portret zwierzęcia", "linework", "lettering"],
    description:
      "Pamiątkowy portret psa połączony z lekką, płynną linią i indywidualnym letteringiem.",
    orientation: "portrait",
    imageSrc: `${basePath}/work/dermographic-instagram-09.jpg`,
    imageAlt: "Tatuaż przedstawiający portret psa z ozdobnym imieniem",
    sourceUrl: "https://www.instagram.com/dermographictattoo_stg/reel/DNVVl1lMx-H/",
    sourceLabel: "Instagram artysty",
  },
  {
    id: "dt-009",
    slug: "kwiaty-i-motyle",
    sourceId: "IG / 09",
    title: "Kwiaty i motyle",
    category: "zwierze-ornament",
    categoryLabel: "Zwierzęta i ornament",
    tags: ["fine line", "botaniczny", "motyl"],
    description:
      "Lekka kompozycja kwiatowa z dwoma motylami, prowadzona cienką linią i delikatnym cieniowaniem.",
    orientation: "portrait",
    imageSrc: `${basePath}/work/dermographic-instagram-01.jpg`,
    imageAlt: "Delikatny tatuaż kwiatów i motyli wykonany cienką linią",
    sourceUrl: "https://www.instagram.com/dermographictattoo_stg/reel/DanUbrss4pH/",
    sourceLabel: "Instagram artysty",
  },
  {
    id: "dt-010",
    slug: "botaniczny-ornament-ucha",
    sourceId: "IG / 10",
    title: "Botaniczny ornament ucha",
    category: "linework-lettering",
    categoryLabel: "Linework i lettering",
    tags: ["ornament", "botaniczny", "minimal"],
    description:
      "Precyzyjny ornament dopasowany do anatomii ucha — mały format, czytelny rytm i mocna kontrola detalu.",
    orientation: "square",
    imageSrc: `${basePath}/work/dermographic-instagram-03.jpg`,
    imageAlt: "Botaniczny tatuaż ornamentalny wykonany wokół ucha",
    sourceUrl: "https://www.instagram.com/dermographictattoo_stg/p/DaVJD5NMmTh/",
    sourceLabel: "Instagram artysty",
  },
  {
    id: "dt-011",
    slug: "family-lettering",
    sourceId: "IG / 11",
    title: "Family — lettering",
    category: "linework-lettering",
    categoryLabel: "Linework i lettering",
    tags: ["lettering", "blackwork", "kaligrafia"],
    description:
      "Kaligraficzny lettering o wyrazistej konstrukcji, prowadzony wzdłuż przedramienia i uzupełniony ornamentalnymi zawijasami.",
    orientation: "portrait",
    imageSrc: `${basePath}/work/dermographic-instagram-14.webp`,
    imageAlt: "Kaligraficzny tatuaż z napisem Family na przedramieniu",
    sourceUrl: "https://www.instagram.com/p/DGBAOysN2uY/",
    sourceLabel: "Instagram artysty",
  },
  {
    id: "dt-012",
    slug: "freehand-portret",
    sourceId: "IG / 12",
    title: "Freehand — portret",
    category: "linework-lettering",
    categoryLabel: "Linework i lettering",
    tags: ["freehand", "proces", "duży format"],
    description:
      "Kadr z procesu pracy freehand pokazujący sposób dopasowania rozbudowanego portretu bezpośrednio do anatomii ciała.",
    orientation: "square",
    imageSrc: `${basePath}/work/dermographic-instagram-12.jpg`,
    imageAlt: "Szkic dużego portretu wykonany freehand bezpośrednio na skórze",
    sourceUrl: "https://www.instagram.com/dermographictattoo_stg/p/DLkMAQbN8oj/",
    sourceLabel: "Instagram artysty",
  },
];

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
