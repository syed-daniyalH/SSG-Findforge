export interface IndustryItem {
  id: string | number;
  icon: string;
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  layout: "featured" | "standard" | "compact" | "horizontal";
}
