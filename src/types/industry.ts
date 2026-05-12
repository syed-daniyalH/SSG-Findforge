export interface IndustryItem {
  id: string | number;
  icon: string;
  title: string;
  subtitle?: string;
  badge?: string;
  layout: "featured" | "standard" | "compact" | "horizontal";
}

