// ========================================
// API Response
// ========================================

export interface ApiResponse<T> {
  success: boolean;
  count?: number;
  data: T;
}

// ========================================
// Parent Service
// ========================================

export interface ParentService {
  id: string;
  name: string;
  title: string;
  slug: string;
  hasPage: boolean;
  industries: unknown[];
}

// ========================================
// Hero Slides
// ========================================

export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
}

// ========================================
// Generic Section
// ========================================

export interface GenericSection {
  title: string;
  description: string;
}

// ========================================
// CTA
// ========================================

export interface SubServiceCTA {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  image: string;
}

// ========================================
// Template Data
// ========================================

export interface SubServiceTemplateData {
  heroSlides: HeroSlide[];

  whyChooseTechionik: GenericSection & {
    items: unknown[];
  };

  whatWeDo: GenericSection & {
    items: unknown[];
  };

  solutionsWeDeliver: GenericSection & {
    cards: unknown[];
  };

  ourOutsourcingModels: GenericSection & {
    items: unknown[];
  };

  extraSection: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonUrl: string;
  };

  faq: unknown[];

  cta: SubServiceCTA;
}

// ========================================
// Sub Service Card
// ========================================

export interface SubServiceCard {
  id: string;
  name: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
}

// ========================================
// Full Sub Service
// ========================================

export interface SubService {
  id: string;

  name: string;
  title: string;
  slug: string;

  shortDescription: string;

  addScheema: string;

  imageUrl: string;

  templateData: SubServiceTemplateData;

  scope: string;

  metaTitle: string;
  metaDescription: string;
  metaKeyWords: string;

  metaId: number;

  isActive: boolean;
  hasPage: boolean;

  industries: unknown[];

  service: ParentService;
}

// ========================================
// Full API Response
// ========================================

export interface SubServicesResponse {
  success: boolean;

  parentService: ParentService;

  count: number;

  data: SubService[];
}