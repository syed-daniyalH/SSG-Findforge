export type SocialPlatform = "facebook" | "twitter" | "linkedin" | "instagram";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  iconUrl: string;
}

export interface Author {
  name: string;
  image: string;
  authorSlug: string;
  authorDescription: string;
  designation?: string;
  socialLinks?: SocialLink[];
}

export interface BlogsProps {
  name: string;
  slug: string;
  date: string;
  imageUrl: string;
  description: string;
  description1?: string;
  category: string;
  author: Author; // Now uses the nested Author interface
  icon?: string;
  imageUrl1?: string;
  quotation?: string;
  quotationWriter?: string;
  variant?: "compact" | "featured";
}
// ✅ Category Config (Reusable & Scalable)

export const categories = [
  "All Blogs",
  "AI Automation",
  "Web Development",
  "Mobile App",
  "Data Science",
];


