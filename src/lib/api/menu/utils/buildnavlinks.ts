import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { MenuItem, MenuResponse } from "../../../types/menu.type";

export interface NavChild {
  id: number;
  name: string;
  slug: string;
  imageUrl?: string;
  icon?: string;
  children?: NavChild[];
}

export interface Navlink {
  name: string;
  href?: string;
  type?: string;
  isMega?: boolean;
  children?: NavChild[];
}

export async function getMenuStructure(): Promise<MenuItem[]> {
  try {
    const res = await fetch(`${BASE_URL}${ENDPOINTS.MENU_STRUCTURE}`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      console.error("Menu fetch failed:", res.status, res.statusText);
      return [];
    }

    let json: MenuResponse;

    try {
      json = await res.json();
    } catch (parseError) {
      console.error("Menu JSON parsing failed:", parseError);
      return [];
    }

    if (!json?.data || !Array.isArray(json.data)) {
      console.warn("Invalid menu API shape:", json);
      return [];
    }

    return json.data;
  } catch (error) {
    console.error("Unexpected error in getMenuStructure:", error);
    return [];
  }
}

export function mapMenuItemsToNavLinks(items: MenuItem[]): Navlink[] {
  return items.map((item) => {
    const slug = item?.type?.slug ?? "";
    const name = item?.type?.name ?? "";

    const menu = item?.menu ?? [];
    const hasMega = menu.length > 0;

    const children: NavChild[] = menu.map((sub) => ({
      id: sub.subTypeId,
      name: sub.name,
      slug: sub.slug,
      imageUrl: sub.imageUrl || "/images/megamenu-newsletter.png",
      icon: "/icons/building.svg",

      children: (sub.children ?? []).map((cat) => ({
        id: cat.categoryId,
        name: cat.name,
        slug: cat.slug,
      })),
    }));

    return {
      name,
      href: slug === "home" ? "/" : `/${slug}`,
      isMega: hasMega,
      children: hasMega ? children : undefined,
    };
  });
}

export async function getNavLinks(): Promise<Navlink[]> {
  const menuItems = await getMenuStructure();
  return mapMenuItemsToNavLinks(menuItems);
}
