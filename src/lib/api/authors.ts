import type { Author } from "@/types/blogs";
import { apiFetch } from "./client";
import {
  ApiAuthorSummary,
  ApiBlog,
  ApiSocialLinks,
  getBlogs,
  mapApiAuthorToLocalAuthor,
} from "./blogs";

interface ApiListResponse<T> {
  success?: boolean;
  count?: number;
  data: T[];
}

interface ApiAuthor extends ApiAuthorSummary {
  shortDescription?: string;
  content?: string;
  avatar?: string;
  socialLinks?: ApiSocialLinks;
}

function mergeAuthorSources(
  authorRecord?: ApiAuthor,
  blogRecord?: ApiBlog,
): Author | null {
  if (!authorRecord && !blogRecord?.author) {
    return null;
  }

  return mapApiAuthorToLocalAuthor(authorRecord ?? blogRecord?.author, {
    image:
      authorRecord?.avatar ||
      blogRecord?.author?.image ||
      blogRecord?.author?.avatar,
    authorDescription:
      authorRecord?.content ||
      authorRecord?.shortDescription ||
      blogRecord?.shortDescription,
    designation: authorRecord?.role || blogRecord?.author?.role,
  });
}

export async function getAuthors(): Promise<ApiAuthor[]> {
  try {
    const response = await apiFetch<ApiListResponse<ApiAuthor>>(
      "/api/frontend/authors",
      { timeoutMs: 20000 },
    );
    return response.data ?? [];
  } catch (error) {
    console.warn("Falling back to empty authors list:", error);
    return [];
  }
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  const normalizedSlug = slug.toLowerCase().trim();
  const [authors, blogs] = await Promise.all([getAuthors(), getBlogs()]);

  const authorRecord = authors.find(
    (author) => author.slug?.toLowerCase() === normalizedSlug,
  );
  const blogRecord = blogs.find(
    (blog) => blog.author?.slug?.toLowerCase() === normalizedSlug,
  );

  return mergeAuthorSources(authorRecord, blogRecord);
}
