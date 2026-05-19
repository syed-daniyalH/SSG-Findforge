import type { IndustryCard as ApiIndustryCard } from "@/lib/types/industries";
import type { Industry as LocalIndustry } from "@/components/cards/industryCard";

const DEFAULT_ICON = "/icons/business.svg";
const DEFAULT_IMAGE = "/images/industry-default.webp";
const PREFERRED_LOCAL_IMAGE_IDS = new Set(["healthcare"]);

function normalizeIndustryKey(value: unknown): string {
  return String(value ?? "")
    .toLowerCase()
    .trim();
}

export function mapApiIndustryCardToLocalIndustry(
  apiItem: Partial<ApiIndustryCard>,
  fallbackItem: LocalIndustry,
): LocalIndustry {
  const slug = apiItem.slug ?? fallbackItem.id;
  const normalizedSlug = normalizeIndustryKey(slug);
  const image = PREFERRED_LOCAL_IMAGE_IDS.has(normalizedSlug)
    ? fallbackItem.image ?? apiItem.imageUrl ?? DEFAULT_IMAGE
    : apiItem.imageUrl ?? fallbackItem.image ?? DEFAULT_IMAGE;

  return {
    id: apiItem.slug ?? apiItem.id ?? fallbackItem.id,
    title: apiItem.title ?? fallbackItem.title,
    description: apiItem.description ?? fallbackItem.description ?? "",
    image,
    icon: fallbackItem.icon ?? DEFAULT_ICON,
    link: fallbackItem.link ?? `/industry/${slug}`,
  };
}

export function mapApiIndustryCardsToLocalIndustries(
  apiItems: Partial<ApiIndustryCard>[],
  localItems: LocalIndustry[],
): LocalIndustry[] {
  return apiItems.map((apiItem) => {
    const slug = apiItem.slug ?? apiItem.id;
    const localItem = localItems.find(
      (item) =>
        item.id === slug ||
        item.id === apiItem.id ||
        item.link?.endsWith(`/${slug}`) ||
        item.title.toLowerCase() === apiItem.title?.toLowerCase(),
    );

    if (localItem) {
      return mapApiIndustryCardToLocalIndustry(apiItem, localItem);
    }

    return {
      id: apiItem.slug ?? apiItem.id ?? "unknown",
      title: apiItem.title ?? "Industry",
      description: apiItem.description ?? "",
      image: apiItem.imageUrl ?? DEFAULT_IMAGE,
      icon: DEFAULT_ICON,
      link: `/industry/${slug ?? "unknown"}`,
    };
  });
}
