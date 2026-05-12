export interface DesignPrincipleItem {
  title: string;
  icon: string;
  image: string;
  description: string;
}

export interface DesignPrincipleSectionProps {
  hasIcon?: boolean;
  data: DesignPrincipleItem[];
}

export interface ContentBlockProps {
  item: DesignPrincipleItem;
  index: number;
  align: 'left' | 'right';
}

