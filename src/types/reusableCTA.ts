
// Individual tag for the footer area
interface FooterTag {
  label: string;
  icon?: string;
}

export interface ReusableCTAProps {
  variant: "enterprise" | "partner";
  title: string;
  // Shared but optional depending on context
  description?: string;
  ctaText?: string;
  
  // Enterprise specific
  bgImage?: string;
  cardImage?: string;

  // Partner specific
  badges?: string[];
  cardTitle?: string;
  cardDescription?: string;
  features?: string[];
  footerTags?: FooterTag[];
}

// Optimized usage in the component:
// const ReusableCTA: React.FC<ReusableCTAProps> = ({ ... }) => { ... }

