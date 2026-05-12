export interface ProjectInfoItem {
  title: string;
  icon: string;
  value?: string; 
  list?: string[]; 
}

export interface StatItem {
  label: string;
  value: string;
}

export interface CaseStudyCardProps {
  slug: string;
  image: string;
  category: string;
  company?: string;
  title: string;
  description: string;
  subcategories?: string[];
  stats?: StatItem[];
  // Add this to make the bottom row dynamic
  projectInfo?: ProjectInfoItem[];
}

// ✅ Category Config (Reusable & Scalable)
export const casestudies = [
  "All Projects",
  "Branding",
  "Web Design",
  "Mobile App",
  "E-commerce",
];