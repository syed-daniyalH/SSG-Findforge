export interface SidebarSection {
  id: string;
  title: string;
  content?: string; // This will hold HTML string data
}

export interface LegalPageData {
  categoryTitle: string;
  sections: SidebarSection[];
}

