export interface CrepeClusterPage {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  shortAnswer: string[];
  contextTitle: string;
  contextIntro: string;
  possibleCauses: { title: string; text: string }[];
  observations: string[];
  limitsTitle: string;
  limits: string[];
  verificationTitle: string;
  verification: string[];
  faq: { question: string; answer: string }[];
}

// Nessuna pagina del cluster è pubblicata finché non viene riscritta e
// validata con un intento distinto e contenuto realmente utile.
export const crepeClusterPages: CrepeClusterPage[] = [];

export const crepeClusterBySlug = Object.fromEntries(
  crepeClusterPages.map((page) => [page.slug, page]),
) as Record<string, CrepeClusterPage>;
