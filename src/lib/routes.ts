export function cleanRouteSlug(value?: string): string {
  return (value ?? "").replace(/^\/+|\/+$/g, "");
}

export function normalizeComparableSlug(value?: string): string {
  return cleanRouteSlug(value)
    .toLowerCase()
    .trim()
    .replace(/\bbuisness\b/g, "business");
}

export function resolveTopLevelSlug(
  href?: string,
  fallback?: string,
): string {
  const cleanedHref = cleanRouteSlug(href);
  if (cleanedHref) {
    return cleanedHref;
  }

  return cleanRouteSlug(fallback);
}

export function buildMenuSectionHref(
  parentSlug: string,
  sectionSlug: string,
): string {
  const parent = cleanRouteSlug(parentSlug);
  const section = cleanRouteSlug(sectionSlug);

  if (!parent) {
    return section ? `/${section}` : "/";
  }

  if (parent === "services") {
    return section ? `/services/${section}` : "/services";
  }

  return section ? `/${parent}/${section}` : `/${parent}`;
}

export function buildMenuChildHref(
  parentSlug: string,
  sectionSlug: string,
  childSlug: string,
): string {
  const sectionHref = buildMenuSectionHref(parentSlug, sectionSlug);
  const child = cleanRouteSlug(childSlug);

  return child ? `${sectionHref}/${child}` : sectionHref;
}
