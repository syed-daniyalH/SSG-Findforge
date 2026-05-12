export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image?: string;
  href?: string;
  layout: "featured" | "standard" | "compact";
}

