// ========================================
// Generic API Response
// ========================================

export interface ApiResponse<T> {
  success: boolean;
  count?: number;
  data: T;
}

// ========================================
// Industry Card (Basic Listing)
// ========================================

export interface IndustryCard {
  id: string;
  name: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
}

// ========================================
// FAQ Schema (SEO structured data)
// ========================================

export interface FAQ {
  question: string;
  answer: string;
}

// ========================================
// Hero Slide
// ========================================

export interface HeroSlide {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

// ========================================
// What You Get Section
// ========================================

export interface WhatYouGet {
  id: number;
  title1: string;
  title2?: string;
  spanTitle?: string;
  RightDescription1: string;
  reviews: unknown[];
}

// ========================================
// Software Solutions
// ========================================

export interface SoftwareSolutionItem {
  id: number;
  title: string;
  description: string;
}

export interface SoftwareSolutions {
  title: string;
  middleTitle?: string;
  lastTitle?: string;
  description: string;
  items: SoftwareSolutionItem[];
}

// ========================================
// Technology Expertise
// ========================================

export interface TechExpertiseCard {
  id: number;
  title: string;
  description: string[];
  icon: string;
}

export interface TechnologyExpertise {
  mainTitle: string;
  mainDescription: string;
  cards: TechExpertiseCard[];
}

// ========================================
// CTA
// ========================================

export interface IndustryCTA {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  image: string;
  imageAlt?: string;
}

// ========================================
// Template Data (MAIN CMS)
// ========================================

export interface IndustryTemplateData {
  heroSlides: HeroSlide[];

  whatYouGet: WhatYouGet;

  softwareSolutions: SoftwareSolutions;

  servicesCardContent: unknown;

  technologyExpertise: TechnologyExpertise;

  cta: IndustryCTA;
}

// ========================================
// Full Industry Object
// ========================================

export interface Industry {
  id: string;

  name: string;
  title: string;
  slug: string;

  description: string;
  shortDescription: string;

  addScheema: string;

  imageUrl: string;

  templateData: IndustryTemplateData;

  scope: string;

  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;

  metaId: number;

  isActive: boolean;
}