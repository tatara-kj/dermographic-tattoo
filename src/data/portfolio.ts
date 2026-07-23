export type PortfolioCategory =
  | "realizm-portret"
  | "fantasy-narracja"
  | "zwierze-ornament";

export type PortfolioItem = {
  id: string;
  slug: string;
  sourceId: string;
  mediaKey: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  tags: string[];
  description: string;
  orientation: "portrait" | "landscape" | "square";
  variant:
    | "halo"
    | "storm"
    | "banner"
    | "coil"
    | "claw"
    | "veil"
    | "rune"
    | "armor"
    | "gaze"
    | "frame"
    | "bloom"
    | "iris";
  accent: "oxide" | "amber" | "blue" | "ivory";
  featured?: boolean;
};

export const categoryOptions: Array<{
  value: "all" | PortfolioCategory;
  label: string;
}> = [
  { value: "all", label: "Wszystkie" },
  { value: "realizm-portret", label: "Realizm i portret" },
  { value: "fantasy-narracja", label: "Fantasy i narracja" },
  { value: "zwierze-ornament", label: "Zwierzę i ornament" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "dt-001",
    slug: "korona-cierniowa",
    sourceId: "G01",
    mediaKey: "portfolio-realism-01",
    title: "Korona cierniowa",
    category: "realizm-portret",
    categoryLabel: "Realizm i portret",
    tags: ["black & grey", "portret", "akcent koloru"],
    description:
      "Placeholder dla pionowej kompozycji portretowej black & grey z ciepłym akcentem. Oryginał i prawa do publikacji pozostają do potwierdzenia.",
    orientation: "portrait",
    variant: "halo",
    accent: "amber",
    featured: true,
  },
  {
    id: "dt-002",
    slug: "byk-i-blyskawica",
    sourceId: "G03",
    mediaKey: "portfolio-dark-01",
    title: "Byk i błyskawica",
    category: "fantasy-narracja",
    categoryLabel: "Fantasy i narracja",
    tags: ["dark", "zwierzę", "selektywna czerwień"],
    description:
      "Placeholder dla ciemnej kompozycji z motywem byka, dymu i czerwonego detalu. Materiał produkcyjny wymaga zgody.",
    orientation: "portrait",
    variant: "storm",
    accent: "oxide",
    featured: true,
  },
  {
    id: "dt-003",
    slug: "husarz",
    sourceId: "G04",
    mediaKey: "portfolio-narrative-01",
    title: "Husarz",
    category: "fantasy-narracja",
    categoryLabel: "Fantasy i narracja",
    tags: ["historyczny", "black & grey", "duża kompozycja"],
    description:
      "Placeholder dla wieloelementowej sceny historycznej z biało-czerwonym akcentem. Data i zgody czekają na potwierdzenie.",
    orientation: "portrait",
    variant: "banner",
    accent: "oxide",
    featured: true,
  },
  {
    id: "dt-004",
    slug: "waz-i-piwonie",
    sourceId: "G06",
    mediaKey: "portfolio-ornament-01",
    title: "Wąż i piwonie",
    category: "zwierze-ornament",
    categoryLabel: "Zwierzę i ornament",
    tags: ["botaniczny", "zwierzę", "przygaszony kolor"],
    description:
      "Placeholder dla dużej kompozycji łączącej węża, piwonie i przygaszoną czerwień. Autorstwo fotografii jest do ustalenia.",
    orientation: "portrait",
    variant: "coil",
    accent: "oxide",
  },
  {
    id: "dt-005",
    slug: "niedzwiedz",
    sourceId: "G07",
    mediaKey: "portfolio-color-01",
    title: "Niedźwiedź",
    category: "zwierze-ornament",
    categoryLabel: "Zwierzę i ornament",
    tags: ["realizm", "kolor", "zwierzę"],
    description:
      "Placeholder dla realistycznej pracy kolorowej z motywem ryczącego niedźwiedzia. Zdjęcie finalne wymaga pozyskania od właściciela.",
    orientation: "portrait",
    variant: "claw",
    accent: "amber",
    featured: true,
  },
  {
    id: "dt-006",
    slug: "portret-fantasy",
    sourceId: "G08",
    mediaKey: "portfolio-fantasy-01",
    title: "Portret fantasy",
    category: "fantasy-narracja",
    categoryLabel: "Fantasy i narracja",
    tags: ["portret", "fantasy", "black & grey"],
    description:
      "Placeholder dla ilustracyjnego portretu fantasy. Publiczny film jest tropem, nie plikiem produkcyjnym.",
    orientation: "portrait",
    variant: "veil",
    accent: "ivory",
  },
  {
    id: "dt-007",
    slug: "wilczy-wojownik",
    sourceId: "G09",
    mediaKey: "portfolio-fantasy-02",
    title: "Wilczy wojownik",
    category: "fantasy-narracja",
    categoryLabel: "Fantasy i narracja",
    tags: ["fantasy", "zwierzę", "czerwony akcent"],
    description:
      "Placeholder dla pionowej sceny fantasy z wilczą postacią i czerwonym znakiem. Materiał opisano po dacie zawieszenia działalności.",
    orientation: "portrait",
    variant: "rune",
    accent: "oxide",
    featured: true,
  },
  {
    id: "dt-008",
    slug: "wojownik-w-zbroi",
    sourceId: "G10",
    mediaKey: "portfolio-sleeve-01",
    title: "Wojownik w zbroi",
    category: "fantasy-narracja",
    categoryLabel: "Fantasy i narracja",
    tags: ["historyczny", "black & grey", "duża kompozycja"],
    description:
      "Placeholder dla rozbudowanej kompozycji z wojownikiem i czerwonym fragmentem tkaniny. Finalne wideo musi pochodzić z archiwum właściciela.",
    orientation: "portrait",
    variant: "armor",
    accent: "oxide",
  },
  {
    id: "dt-009",
    slug: "lew",
    sourceId: "G11",
    mediaKey: "portfolio-animal-01",
    title: "Lew",
    category: "realizm-portret",
    categoryLabel: "Realizm i portret",
    tags: ["zwierzę", "realizm", "bursztynowy akcent"],
    description:
      "Placeholder dla portretu lwa w black & grey z ciepłym akcentem spojrzenia. Oryginał czeka na potwierdzenie praw.",
    orientation: "square",
    variant: "gaze",
    accent: "amber",
    featured: true,
  },
  {
    id: "dt-010",
    slug: "portret-w-okularach",
    sourceId: "G14",
    mediaKey: "portfolio-portrait-02",
    title: "Portret w okularach",
    category: "realizm-portret",
    categoryLabel: "Realizm i portret",
    tags: ["portret", "ilustracyjny", "przygaszony kolor"],
    description:
      "Placeholder dla ilustracyjnego portretu z kontrolowanym kolorem. Wideo źródłowe nie może zostać skopiowane z platformy.",
    orientation: "portrait",
    variant: "frame",
    accent: "ivory",
  },
  {
    id: "dt-011",
    slug: "czaszka-i-ornament",
    sourceId: "G16",
    mediaKey: "portfolio-ornament-02",
    title: "Czaszka i ornament",
    category: "zwierze-ornament",
    categoryLabel: "Zwierzę i ornament",
    tags: ["ornament", "botaniczny", "przygaszony kolor"],
    description:
      "Placeholder dla kompozycji łączącej czaszkę i roślinną formę. Materiał wymaga potwierdzenia autora zdjęcia.",
    orientation: "portrait",
    variant: "bloom",
    accent: "oxide",
  },
  {
    id: "dt-012",
    slug: "sowa-i-oko",
    sourceId: "G17",
    mediaKey: "portfolio-ornament-03",
    title: "Sowa i oko",
    category: "zwierze-ornament",
    categoryLabel: "Zwierzę i ornament",
    tags: ["zwierzę", "geometria", "niebieski akcent"],
    description:
      "Placeholder dla kompozycji z sową, okiem i geometrią. Fotografia została opublikowana przez osobę trzecią i wymaga osobnej zgody.",
    orientation: "portrait",
    variant: "iris",
    accent: "blue",
  },
];

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
