import { buildMenuChildHref, buildMenuSectionHref, normalizeComparableSlug } from "./routes";

describe("route helpers", () => {
  it("normalizes known CMS typo variants before comparison", () => {
    expect(normalizeComparableSlug("Buisness-Intigernce")).toBe("business-intigernce");
    expect(normalizeComparableSlug("/services/ai-automation/")).toBe("services/ai-automation");
  });

  it("builds menu section and child links consistently", () => {
    expect(buildMenuSectionHref("services", "ai-automation")).toBe("/services/ai-automation");
    expect(buildMenuChildHref("services", "ai-automation", "chat-bot")).toBe(
      "/services/ai-automation/chat-bot",
    );
  });
});
