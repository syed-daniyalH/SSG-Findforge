# Final Backend Integration

Last verified: May 12, 2026

## Backend service

This frontend is connected to the shared Techionik backend service:

`https://techionik-nodejs-web-backend.onrender.com`

The frontend reads this from:

- `NEXT_PUBLIC_API_BASE_URL`
- fallback in [src/lib/api/client.ts](/C:/Users/Tech/Desktop/SSGMindForge/src/lib/api/client.ts)
- fallback in [src/lib/api/config/apiConfig.ts](/C:/Users/Tech/Desktop/SSGMindForge/src/lib/api/config/apiConfig.ts)

Recommended Render env var:

`NEXT_PUBLIC_API_BASE_URL=https://techionik-nodejs-web-backend.onrender.com`

## Connected API areas

The frontend is now wired to the live Techionik CMS/backend for:

- navigation menu structure
- services
- sub-services
- industries
- blogs
- authors
- case studies

Primary endpoints in use:

- `/api/frontend/menu-structure`
- `/api/frontend/services`
- `/api/frontend/sub-services`
- `/api/frontend/industries`
- `/api/frontend/blogs`
- `/api/frontend/authors`
- `/api/frontend/case-studies`

## What was connected

### Navigation

- Header and mobile navigation continue to pull the menu from the backend.
- Mega menu routing now respects the top-level parent slug instead of treating every mega menu like `services`.
- Nested service URLs from the CMS now resolve in the frontend.

Key files:

- [src/lib/api/menu/utils/buildnavlinks.ts](/C:/Users/Tech/Desktop/SSGMindForge/src/lib/api/menu/utils/buildnavlinks.ts)
- [src/lib/routes.ts](/C:/Users/Tech/Desktop/SSGMindForge/src/lib/routes.ts)
- [src/components/layouts/navbar/Navbar.tsx](/C:/Users/Tech/Desktop/SSGMindForge/src/components/layouts/navbar/Navbar.tsx)
- [src/components/layouts/navbar/megamenu.tsx](/C:/Users/Tech/Desktop/SSGMindForge/src/components/layouts/navbar/megamenu.tsx)
- [src/components/layouts/navbar/mobileNav.tsx](/C:/Users/Tech/Desktop/SSGMindForge/src/components/layouts/navbar/mobileNav.tsx)

### Services and sub-services

- Existing service detail pages still use `/services/[slug]`.
- CMS-driven nested sub-service pages now work at `/services/[slug]/[childSlug]`.
- Service category routes from the menu now fail soft into a category landing page if the menu slug does not exactly match the service API slug.

Key files:

- [app/services/[slug]/page.tsx](/C:/Users/Tech/Desktop/SSGMindForge/app/services/[slug]/page.tsx)
- [app/services/[slug]/[childSlug]/page.tsx](/C:/Users/Tech/Desktop/SSGMindForge/app/services/[slug]/[childSlug]/page.tsx)
- [src/lib/api/services.ts](/C:/Users/Tech/Desktop/SSGMindForge/src/lib/api/services.ts)
- [src/lib/api/subServices.ts](/C:/Users/Tech/Desktop/SSGMindForge/src/lib/api/subServices.ts)

### Blogs and authors

- Blog listing now reads from the live backend.
- Blog detail pages now resolve from live blog data.
- Author pages now resolve from live author data plus author-linked blog data.
- The reusable homepage/service/industry blog section now reads live blog cards.

Key files:

- [src/lib/api/blogs.ts](/C:/Users/Tech/Desktop/SSGMindForge/src/lib/api/blogs.ts)
- [src/lib/api/authors.ts](/C:/Users/Tech/Desktop/SSGMindForge/src/lib/api/authors.ts)
- [app/blog/page.tsx](/C:/Users/Tech/Desktop/SSGMindForge/app/blog/page.tsx)
- [app/blog/[slug]/page.tsx](/C:/Users/Tech/Desktop/SSGMindForge/app/blog/[slug]/page.tsx)
- [app/author/[slug]/page.tsx](/C:/Users/Tech/Desktop/SSGMindForge/app/author/[slug]/page.tsx)
- [src/components/sections/blogs.tsx](/C:/Users/Tech/Desktop/SSGMindForge/src/components/sections/blogs.tsx)

### Case studies

- Case study listing now reads from the live backend.
- Case study detail pages now resolve from live case study data.
- The current UI derives some display fields from backend metadata where dedicated detail fields do not exist yet.

Key files:

- [src/lib/api/caseStudies.ts](/C:/Users/Tech/Desktop/SSGMindForge/src/lib/api/caseStudies.ts)
- [app/casestudy/page.tsx](/C:/Users/Tech/Desktop/SSGMindForge/app/casestudy/page.tsx)
- [app/casestudy/[slug]/page.tsx](/C:/Users/Tech/Desktop/SSGMindForge/app/casestudy/[slug]/page.tsx)

### Technology routes

- The backend menu exposes a `technology` top-level route.
- The frontend now has `technology` pages so those menu links no longer 404.
- These pages are currently menu-backed shells because the backend does not expose a dedicated technology detail API in this repo’s integration surface.

Key files:

- [app/technology/page.tsx](/C:/Users/Tech/Desktop/SSGMindForge/app/technology/page.tsx)
- [app/technology/[slug]/page.tsx](/C:/Users/Tech/Desktop/SSGMindForge/app/technology/[slug]/page.tsx)
- [app/technology/[slug]/[childSlug]/page.tsx](/C:/Users/Tech/Desktop/SSGMindForge/app/technology/[slug]/[childSlug]/page.tsx)

## Compatibility routes added

To absorb inconsistent historical links and CMS/menu naming, these redirect routes were added:

- `/contact` -> `/contact-us`
- `/blogs` -> `/blog`
- `/blogs/[slug]` -> `/blog/[slug]`
- `/case-studies` -> `/casestudy`
- `/case-studies/[slug]` -> `/casestudy/[slug]`
- `/industries` -> `/industry`
- `/industries/[slug]` -> `/industry/[slug]`
- `/about` -> `/about-us`
- `/how-we-work` -> `/howwework`
- `/suites` -> `/suite`

## Known backend limitations

These are backend/content-shape limitations, not frontend routing failures:

1. Blog detail content:
   The live blog list payload exposes title, summary, category, author, image, and publish date, but not a rich long-form article body in the shape the original static page used.

2. Case study detail depth:
   The live case study list payload exposes title, summary, categories, tags, SEO image, author, and publish date, but not all of the bespoke stats/project-info fields the original static detail page had. The frontend now derives lightweight detail sections from the available metadata.

3. Technology detail content:
   The menu exposes technology paths, but there is no dedicated technology detail endpoint wired into this frontend, so those pages currently render menu-backed shells.

## Verification

Verified locally on May 12, 2026:

- `npm run build` passes cleanly
- `http://127.0.0.1:3000/` returns `200`
- `http://127.0.0.1:3000/services/ai-automation` returns `200`
- `http://127.0.0.1:3000/services/ai-automation/ai-consulting-services` returns `200`
- `http://127.0.0.1:3000/technology/nextjs` returns `200`
- `http://127.0.0.1:3000/contact` redirects to `/contact-us`
- `http://127.0.0.1:3000/blogs` redirects to `/blog`
- `http://127.0.0.1:3000/case-studies` redirects to `/casestudy`

## Final status

The frontend is now connected to the same Techionik backend service and its shared CMS contract.

The biggest remaining gap is not routing anymore; it is content depth in a few backend payloads, especially blog detail, case study detail, and technology detail.
