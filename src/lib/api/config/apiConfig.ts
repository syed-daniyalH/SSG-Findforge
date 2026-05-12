
// Base url
// Add fallback URL
export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://techionik-nodejs-web-backend.onrender.com';


// Endpoints
export const ENDPOINTS = {
  MENU_STRUCTURE: "/api/frontend/menu-structure",
  ALL_CASESTUDIES: "/api/frontend/case-studies",
  AUTHORS: "/api/frontend/authors",
  AUTHOR_BY_SLUG: (slug: string) => `/api/frontend/authors/${slug}`,
  BLOG_CATEGORIES: "/api/frontend/blogs/categories",
  BLOGS: "/api/frontend/blogs",
  MENU: "/api/frontend/menu",
  PARENTSERVICE: "/api/frontend/services",
  AllIndustries: "/api/frontend/industries",
  CASESTUDY_CATEGORY: "/api/frontend/case-studies/categories",

};

