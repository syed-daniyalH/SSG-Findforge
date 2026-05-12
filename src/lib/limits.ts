import { insightsData } from "@/content/blog.data";

export const getInsights = (limit?: number) => {
  return limit ? insightsData.slice(0, limit) : insightsData;
};

