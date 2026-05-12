import { expect, test } from "@playwright/test";

const okRoutes = [
  "/",
  "/services",
  "/services/ai-automation/chat-bot",
  "/services/ai-automation/buisness-intigernce",
  "/services/data-science/data-mining",
  "/services/software-services/custom-software-development",
];

const redirectRoutes = [
  {
    from: "/service",
    to: "/services",
  },
  {
    from: "/clients",
    to: "/testimonial",
  },
  {
    from: "/services/ai",
    to: "/services/ai-automation",
  },
  {
    from: "/services/ai-automation/business-intigernce",
    to: "/services/ai-automation/buisness-intigernce",
  },
];

test.describe("route smoke tests", () => {
  for (const route of okRoutes) {
    test(`${route} responds successfully`, async ({ request }) => {
      const response = await request.get(route, { maxRedirects: 0 });

      expect(response.status()).toBe(200);
    });
  }

  for (const route of redirectRoutes) {
    test(`${route.from} keeps its redirect in place`, async ({ request, baseURL }) => {
      const response = await request.get(route.from, { maxRedirects: 0 });
      const location = response.headers().location;

      expect(response.status()).toBeGreaterThanOrEqual(300);
      expect(response.status()).toBeLessThan(400);
      expect(location).toBeTruthy();
      expect([route.to, `${baseURL}${route.to}`]).toContain(location);
    });
  }
});
