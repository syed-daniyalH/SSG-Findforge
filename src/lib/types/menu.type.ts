// app/api/menu/types/menu.types.ts

// Level 3: Children categories
export interface Category {
  categoryId: number;
  name: string;
  slug: string;
  imageUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyWords?: string;
  children: Category[]; // recursive structure
}

export interface SubType {
  subTypeId: number;
  name: string;
  slug: string;
  imageUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyWords?: string;
  children: Category[];
}


export interface MenuType {
  typeId: number;
  name: string;
  slug: string;
  icon?: string;
  imageUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyWords?: string;
}


// Each menu item in `data`
export interface MenuItem {
  type: MenuType;
  menu: SubType[];
}

// API response structure
export interface MenuResponse {
  success: boolean;
  count: number;
  data: MenuItem[];
}

