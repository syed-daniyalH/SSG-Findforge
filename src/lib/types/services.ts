import { SolutionItem } from "@/types/solutions";
import { FAQItem } from "@/types/faq";
import { WhyChooseTechionik } from "@/types/whychoose.type";

export interface ApiResponse<T> {
  data: T;
}

// ========================================
// Homepage Service Card
// ========================================

export interface ServiceCard {
  id: string;
  name: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
}

// ========================================
// Hero Slides
// ========================================

export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
}

// ========================================
// Emerging Technologies
// ========================================

export interface EmergingTechnologyItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface EmergingTechnologiesSection {
  title: string;
  middleTitle: string;
  lastTitle: string;
  description: string;
  items: EmergingTechnologyItem[];
  buttonLabel: string;
  buttonLink: string;
}

// ========================================
// CTA
// ========================================

export interface ServiceCTA {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  image: string;
  imageAlt: string;
}

// ========================================
// Generic Section
// ========================================

export interface GenericSection {
  title: string;
  description: string;
}

// ========================================
// Template Data
// ========================================

export interface ServiceTemplateData {
  heroSlides: HeroSlide[];

  whatWeDo: GenericSection & {
    items: unknown[];
  };

  whyChooseTechionik?: WhyChooseTechionik;

  solutionsWeDeliver: GenericSection & {
    cards: SolutionItem[];
  };

  ourOutsourcingModels: GenericSection & {
    items: unknown[];
  };

  emergingTechnologies: EmergingTechnologiesSection;

  extraSection: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonUrl: string;
  };

  faq: FAQItem[];
  faqDescription?: string;
  faqLink?: string;

  cta: ServiceCTA;
}

// ========================================
// Full Service
// ========================================

export interface Service {
  id: string;
  name: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;

  templateData: ServiceTemplateData;

  scope: string;

  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;
  metaId: number;

  isActive: boolean;
  hasPage: boolean;

  industries: unknown[];
}
