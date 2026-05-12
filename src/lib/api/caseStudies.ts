import type {
  CaseStudyCardProps,
  ProjectInfoItem,
  StatItem,
} from "@/types/casestudy.type";
import { apiFetch } from "./client";
import { ApiAuthorSummary, formatContentDate } from "./blogs";

interface ApiListResponse<T> {
  success?: boolean;
  count?: number;
  data: T[];
}

interface ApiTaxonomyItem {
  id: string;
  name: string;
  slug: string;
}

interface ApiCaseStudy {
  id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  layout?: string;
  categories?: ApiTaxonomyItem[];
  tags?: ApiTaxonomyItem[];
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
    keywords?: string[];
  };
  ogImage?: string;
  hasDownloadPdf?: boolean;
  author?: ApiAuthorSummary;
  publishedAt?: string;
}

export interface CaseStudyDetail extends CaseStudyCardProps {
  publishedDate: string;
  hasDownloadPdf: boolean;
}

const DEFAULT_CASE_STUDY_IMAGE = "/images/design.webp";

function buildStats(caseStudy: ApiCaseStudy): StatItem[] {
  const stats: StatItem[] = [];

  if (caseStudy.publishedAt) {
    stats.push({
      label: "Published",
      value: formatContentDate(caseStudy.publishedAt),
    });
  }

  if (caseStudy.categories?.[0]?.name) {
    stats.push({
      label: "Category",
      value: caseStudy.categories[0].name,
    });
  }

  stats.push({
    label: "Format",
    value: caseStudy.hasDownloadPdf ? "PDF + Web" : "Web",
  });

  return stats.slice(0, 3);
}

function buildProjectInfo(caseStudy: ApiCaseStudy): ProjectInfoItem[] {
  const items: ProjectInfoItem[] = [];

  if (caseStudy.author?.name) {
    items.push({
      title: "Author",
      icon: "/icons/octicon_people.svg",
      value: caseStudy.author.name,
    });
  }

  const categories = caseStudy.categories?.map((item) => item.name) ?? [];
  if (categories.length > 0) {
    items.push({
      title: "Categories",
      icon: "/icons/deliverables.svg",
      list: categories,
    });
  }

  const tags =
    caseStudy.tags?.map((item) => item.name) ??
    caseStudy.seo?.keywords?.slice(0, 4) ??
    [];
  if (tags.length > 0) {
    items.push({
      title: "Tags",
      icon: "/icons/primary-calendar.svg",
      list: tags,
    });
  }

  return items;
}

export function mapApiCaseStudyToCard(
  caseStudy: ApiCaseStudy,
): CaseStudyDetail {
  const description =
    caseStudy.shortDescription?.trim() ||
    caseStudy.seo?.description?.trim() ||
    "A Techionik case study.";

  const category = caseStudy.categories?.[0]?.name ?? "Case Study";
  const subcategories =
    caseStudy.tags?.map((item) => item.name) ??
    caseStudy.categories?.slice(1).map((item) => item.name) ??
    [];

  return {
    slug: `/casestudy/${caseStudy.slug}`,
    image: caseStudy.ogImage || caseStudy.seo?.ogImage || DEFAULT_CASE_STUDY_IMAGE,
    category,
    company: caseStudy.author?.name || "Techionik",
    title: caseStudy.title,
    description,
    subcategories,
    stats: buildStats(caseStudy),
    projectInfo: buildProjectInfo(caseStudy),
    publishedDate: formatContentDate(caseStudy.publishedAt),
    hasDownloadPdf: Boolean(caseStudy.hasDownloadPdf),
  };
}

export async function getCaseStudies(): Promise<ApiCaseStudy[]> {
  try {
    const response = await apiFetch<ApiListResponse<ApiCaseStudy>>(
      "/api/frontend/case-studies",
      { timeoutMs: 20000 },
    );
    return response.data ?? [];
  } catch (error) {
    console.warn("Falling back to empty case studies list:", error);
    return [];
  }
}

export async function getCaseStudyCards(
  limit?: number,
): Promise<CaseStudyDetail[]> {
  const caseStudies = await getCaseStudies();
  const cards = caseStudies.map(mapApiCaseStudyToCard);
  return typeof limit === "number" ? cards.slice(0, limit) : cards;
}

export async function getCaseStudyBySlug(
  slug: string,
): Promise<CaseStudyDetail | null> {
  const caseStudies = await getCaseStudies();
  const caseStudy = caseStudies.find(
    (item) => item.slug?.toLowerCase() === slug.toLowerCase().trim(),
  );

  return caseStudy ? mapApiCaseStudyToCard(caseStudy) : null;
}

export async function getCaseStudyFilterCategories(): Promise<string[]> {
  const caseStudies = await getCaseStudyCards();
  const categories = Array.from(
    new Set(
      caseStudies
        .map((caseStudy) => caseStudy.category?.trim())
        .filter((category): category is string => Boolean(category)),
    ),
  );

  return ["All Projects", ...categories];
}
