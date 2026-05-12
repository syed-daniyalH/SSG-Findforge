import { apiFetch } from "./client";

import {
  ApiResponse,
  Industry,
  IndustryCard,
} from "../types/industries";

// ========================================
// Get All Industries
// ========================================

export async function getIndustries(): Promise<Industry[]> {
  try {
    const response = await apiFetch<ApiResponse<Industry[]>>(
      "/api/frontend/industries",
    );

    return response.data;
  } catch (error) {
    console.warn("Falling back to local industry data:", error);
    return [];
  }
}

// ========================================
// Industry Cards (Homepage usage)
// ========================================

export async function getIndustryCards(): Promise<
  IndustryCard[]
> {
  const industries =
    await getIndustries();

  return industries.map((item) => ({
    id: item.id,
    name: item.name,
    title: item.title,
    slug: item.slug,
    description: item.description,
    shortDescription:
      item.shortDescription,
    imageUrl: item.imageUrl,
  }));
}

export async function getIndustryBySlug(slug: string): Promise<Industry | null> {
  const industries = await getIndustries();
  return (
    industries.find(
      (s) => s.slug?.toLowerCase() === slug?.toLowerCase().trim(),
    ) || null
  );
}
