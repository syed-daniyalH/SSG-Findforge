import { BASE_URL, ENDPOINTS } from "../../config/apiConfig";
import { MenuItem, MenuResponse } from "../../../types/menu.type";
import { normalizeComparableSlug, resolveTopLevelSlug } from "../../../routes";

const EXCLUDED_MENU_SLUGS = new Set([
  "sasasa",
  "asasasasasa",
]);

function isAllowedMenuSlug(value?: string): boolean {
  const normalized = (value ?? "").trim().toLowerCase();
  return Boolean(normalized) && !EXCLUDED_MENU_SLUGS.has(normalized);
}

function filterMenuItems(items: MenuItem[]): MenuItem[] {
  return items.map((item) => ({
    ...item,
    menu: (item.menu ?? [])
      .filter((sub) => isAllowedMenuSlug(sub.slug))
      .map((sub) => ({
        ...sub,
        children: (sub.children ?? []).filter((child) =>
          isAllowedMenuSlug(child.slug),
        ),
      })),
  }));
}

export interface NavChild {
  id: number;
  name: string;
  slug: string;
  href?: string;
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

interface PrimaryNavConfig {
  name: string;
  href: string;
  slugs: string[];
}

const PRIMARY_NAV_ITEMS: PrimaryNavConfig[] = [
  {
    name: "Solutions",
    href: "/services",
    slugs: ["services"],
  },
  {
    name: "Industries",
    href: "/industries",
    slugs: ["industry", "industries"],
  },
  {
    name: "About Us",
    href: "/about-us",
    slugs: ["about-us", "about"],
  },
  {
    name: "Resources",
    href: "/blog",
    slugs: ["blog", "blogs", "resource", "resources"],
  },
];

const RESOURCE_NAV_CHILDREN: NavChild[] = [
  {
    id: 9001,
    name: "Blog",
    slug: "blog",
    href: "/blog",
    imageUrl: "/images/ai.webp",
    icon: "/icons/blog.svg",
  },
  {
    id: 9002,
    name: "Author Page",
    slug: "author-page",
    href: "/author/rosaria-vargas",
    imageUrl: "/images/author1.webp",
    icon: "/icons/octicon_people.svg",
  },
  {
    id: 9003,
    name: "Case Study Listing Page",
    slug: "case-study-listing-page",
    href: "/casestudy",
    imageUrl: "/images/design.webp",
    icon: "/icons/deliverables.svg",
  },
];

const ABOUT_NAV_CHILDREN: NavChild[] = [
  {
    id: 9101,
    name: "About Us",
    slug: "about-us",
    href: "/about-us",
    imageUrl: "/images/about-banner.webp",
    icon: "/icons/octicon_people.svg",
  },
  {
    id: 9102,
    name: "C Suite",
    slug: "suite",
    href: "/suite",
    imageUrl: "/images/ceo.webp",
    icon: "/icons/work-people.svg",
  },
  {
    id: 9103,
    name: "Client Testimonials",
    slug: "testimonial",
    href: "/testimonial",
    imageUrl: "/images/testimonial1.webp",
    icon: "/icons/ratingStar.svg",
  },
  {
    id: 9104,
    name: "How We Work",
    slug: "how-we-work",
    href: "/how-we-work",
    imageUrl: "/images/meeting.webp",
    icon: "/icons/workflow.svg",
  },
];

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

    return filterMenuItems(json.data);
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

function findMatchingNavLink(
  links: Navlink[],
  targetSlugs: string[],
): Navlink | undefined {
  const normalizedTargets = targetSlugs.map((slug) =>
    normalizeComparableSlug(slug),
  );

  return links.find((link) => {
    const resolvedSlug = normalizeComparableSlug(
      resolveTopLevelSlug(link.href, link.name),
    );

    return normalizedTargets.includes(resolvedSlug);
  });
}

export function buildPrimaryNavLinks(links: Navlink[]): Navlink[] {
  return PRIMARY_NAV_ITEMS.map((item) => {
    const matchedLink = findMatchingNavLink(links, item.slugs);
    const resourceChildren =
      item.name === "Resources" ? RESOURCE_NAV_CHILDREN : undefined;
    const aboutChildren =
      item.name === "About Us" ? ABOUT_NAV_CHILDREN : undefined;
    const children = resourceChildren ?? aboutChildren ?? matchedLink?.children;

    return {
      name: item.name,
      href: matchedLink?.href ?? item.href,
      isMega: Boolean(
        children?.length || (matchedLink?.isMega && matchedLink.children?.length),
      ),
      children,
    };
  });
}

export async function getNavLinks(): Promise<Navlink[]> {
  const menuItems = await getMenuStructure();
  return buildPrimaryNavLinks(mapMenuItemsToNavLinks(menuItems));
}
