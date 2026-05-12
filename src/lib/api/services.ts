import { apiFetch } from "./client";

import {
  ApiResponse,
  Service,
  ServiceCard,
  ServiceCTA,
  HeroSlide,
} from "../types/services";

// ========================================
// Get All Services (MAIN API)
// ========================================

export async function getServices(): Promise<Service[]> {
  try {
    const response = await apiFetch<ApiResponse<Service[]>>(
      "/api/frontend/services",
    );

    return response.data;
  } catch (error) {
    console.warn("Falling back to empty services list:", error);
    return [];
  }
}

// ========================================
// Homepage Cards Data
// ========================================

export async function getServiceCards(): Promise<ServiceCard[]> {
  const services = await getServices();

  return services.map((service) => ({
    id: service.id,
    name: service.name,
    title: service.title,
    slug: service.slug,
    description: service.description,
    shortDescription: service.shortDescription,
    imageUrl: service.imageUrl,
  }));
}

export async function getServiceCardsAndCTA(): Promise<{
  cards: ServiceCard[];
  cta: ServiceCTA | null;
  heroSlides: HeroSlide[];
}> {
  const services = await getServices();

  return {
    cards: services.map((service) => ({
      id: service.id,
      name: service.name,
      title: service.title,
      slug: service.slug,
      description: service.description,
      shortDescription: service.shortDescription,
      imageUrl: service.imageUrl,
    })),
    cta: services[0]?.templateData?.cta ?? null,
    heroSlides: services[0]?.templateData?.heroSlides ?? [],
  };
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return (
    services.find(
      (s) => s.slug?.toLowerCase() === slug?.toLowerCase().trim(),
    ) || null
  );
}
