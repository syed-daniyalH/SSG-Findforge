import { apiFetch } from "./client";
import { normalizeComparableSlug } from "../routes";

import {
  SubService,
  SubServiceCard,
  SubServicesResponse,
} from "../types/subServices";

// ========================================
// Get All Sub Services
// ========================================

export async function getSubServices(): Promise<SubService[]> {
  try {
    const response = await apiFetch<SubServicesResponse>(
      "/api/frontend/sub-services",
    );

    return response.data;
  } catch (error) {
    console.warn("Falling back to empty sub-services list:", error);
    return [];
  }
}

// ========================================
// Get Sub Service Cards
// ========================================

export async function getSubServiceCards(): Promise<
  SubServiceCard[]
> {
  const subServices =
    await getSubServices();

  return subServices.map(
    (subService) => ({
      id: subService.id,

      name: subService.name,

      title: subService.title,

      slug: subService.slug,

      shortDescription:
        subService.shortDescription,

      imageUrl:
        subService.imageUrl,
    })
  );
}

export async function getSubServiceByRoute(
  parentSlug: string,
  slug: string,
): Promise<SubService | null> {
  const normalizedParent = normalizeComparableSlug(parentSlug);
  const normalizedSlug = normalizeComparableSlug(slug);
  const subServices = await getSubServices();

  return (
    subServices.find(
      (subService) =>
        normalizeComparableSlug(subService.slug) === normalizedSlug &&
        normalizeComparableSlug(subService.service?.slug) === normalizedParent,
    ) ??
    subServices.find(
      (subService) => normalizeComparableSlug(subService.slug) === normalizedSlug,
    ) ??
    null
  );
}
