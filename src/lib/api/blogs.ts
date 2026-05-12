import { apiFetch } from "./client";
import type {
  Author as LocalAuthor,
  BlogsProps,
  SocialLink,
  SocialPlatform,
} from "@/types/blogs";

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

export interface ApiSocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface ApiAuthorSummary {
  id?: string;
  name?: string;
  image?: string;
  avatar?: string;
  slug?: string;
  role?: string;
  shortDescription?: string;
  content?: string;
  socialLinks?: ApiSocialLinks;
}

export interface ApiBlog {
  id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  addScheema?: string;
  layout?: string;
  schema?: unknown;
  categories?: ApiTaxonomyItem[];
  tags?: ApiTaxonomyItem[];
  seo?: {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    ogImage?: string;
    keywords?: string[];
    robots?: string;
    twitterCard?: string;
  };
  ogImage?: string;
  author?: ApiAuthorSummary;
  publishedAt?: string;
}

const DEFAULT_BLOG_IMAGE = "/images/ai.webp";
const DEFAULT_AUTHOR_IMAGE = "/images/ahmadbhai.webp";
const DEFAULT_AUTHOR_DESCRIPTION =
  "Insights and practical guidance from the Techionik editorial team.";

const SOCIAL_ICON_MAP: Record<SocialPlatform, string> = {
  facebook: "/icons/facebook.svg",
  twitter: "/icons/twitter.svg",
  linkedin: "/icons/linkedin.svg",
  instagram: "/icons/instagram.svg",
};

export function formatContentDate(value?: string): string {
  if (!value) {
    return "";
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

function titleCase(value?: string): string {
  if (!value) {
    return "Author";
  }

  return value
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizeExternalUrl(value?: string): string | null {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  if (/^[\w.-]+\.[A-Za-z]{2,}(?:[\/?#].*)?$/.test(trimmed)) {
    return `https://${trimmed}`;
  }

  return null;
}

function mapSocialLinks(socialLinks?: ApiSocialLinks): SocialLink[] | undefined {
  if (!socialLinks) {
    return undefined;
  }

  const mapped = (
    Object.entries(SOCIAL_ICON_MAP) as [SocialPlatform, string][]
  )
    .map(([platform, iconUrl]) => {
      const url = normalizeExternalUrl(socialLinks[platform]);
      if (!url) {
        return null;
      }

      return {
        platform,
        url,
        iconUrl,
      };
    })
    .filter((item): item is SocialLink => Boolean(item));

  return mapped.length > 0 ? mapped : undefined;
}

export function mapApiAuthorToLocalAuthor(
  author?: ApiAuthorSummary,
  fallback?: Partial<LocalAuthor>,
): LocalAuthor {
  return {
    name: author?.name ?? fallback?.name ?? "Techionik Editorial",
    image:
      author?.image ??
      author?.avatar ??
      fallback?.image ??
      DEFAULT_AUTHOR_IMAGE,
    authorSlug: author?.slug ?? fallback?.authorSlug ?? "techionik-editorial",
    authorDescription:
      author?.content ??
      author?.shortDescription ??
      fallback?.authorDescription ??
      DEFAULT_AUTHOR_DESCRIPTION,
    designation: titleCase(author?.role ?? fallback?.designation),
    socialLinks: mapSocialLinks(author?.socialLinks) ?? fallback?.socialLinks,
  };
}

export function mapApiBlogToCard(blog: ApiBlog): BlogsProps {
  const categoryName = blog.categories?.[0]?.name ?? "Insights";
  const description =
    blog.shortDescription?.trim() ||
    blog.seo?.description?.trim() ||
    "Fresh thinking from the Techionik team.";

  return {
    name: blog.title,
    slug: blog.slug,
    date: formatContentDate(blog.publishedAt),
    imageUrl: blog.ogImage || blog.seo?.ogImage || DEFAULT_BLOG_IMAGE,
    imageUrl1: blog.seo?.ogImage && blog.seo.ogImage !== blog.ogImage
      ? blog.seo.ogImage
      : undefined,
    description,
    description1: blog.seo?.description?.trim() || undefined,
    category: categoryName,
    author: mapApiAuthorToLocalAuthor(blog.author, {
      authorDescription: description,
    }),
    icon: "/icons/arrowRight.svg",
  };
}

export async function getBlogs(): Promise<ApiBlog[]> {
  try {
    const response = await apiFetch<ApiListResponse<ApiBlog>>(
      "/api/frontend/blogs",
      { timeoutMs: 20000 },
    );
    return response.data ?? [];
  } catch (error) {
    console.warn("Falling back to empty blogs list:", error);
    return [];
  }
}

export async function getBlogCards(limit?: number): Promise<BlogsProps[]> {
  const blogs = await getBlogs();
  const cards = blogs.map(mapApiBlogToCard);
  return typeof limit === "number" ? cards.slice(0, limit) : cards;
}

export async function getBlogBySlug(slug: string): Promise<BlogsProps | null> {
  const blogs = await getBlogs();
  const blog = blogs.find(
    (item) => item.slug?.toLowerCase() === slug.toLowerCase().trim(),
  );

  return blog ? mapApiBlogToCard(blog) : null;
}

export async function getBlogsByAuthorSlug(
  authorSlug: string,
): Promise<BlogsProps[]> {
  const blogs = await getBlogs();
  return blogs
    .filter(
      (blog) =>
        blog.author?.slug?.toLowerCase() === authorSlug.toLowerCase().trim(),
    )
    .map(mapApiBlogToCard);
}

export async function getBlogFilterCategories(): Promise<string[]> {
  const blogs = await getBlogCards();
  const categories = Array.from(
    new Set(
      blogs
        .map((blog) => blog.category?.trim())
        .filter((category): category is string => Boolean(category)),
    ),
  );

  return ["All Blogs", ...categories];
}
