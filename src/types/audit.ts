export interface AuditItem {
  id: number;
  label: string;
  description: string;
  image: string;
}

export interface AuditTabsProps {
  title: string;
  items: AuditItem[];
}


