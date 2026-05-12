import {
  getCaseStudyCards,
  getCaseStudyFilterCategories,
} from "@/lib/api/caseStudies";
import { caseStudyCardsData } from "@/content/casestudy.data";
import CaseStudyIndexClient from "./caseStudyIndexClient";

export default async function CaseStudyPage() {
  const [apiData, categories] = await Promise.all([
    getCaseStudyCards(),
    getCaseStudyFilterCategories(),
  ]);

  const data = apiData.length > 0 ? apiData : caseStudyCardsData;
  const fallbackCategories = Array.from(
    new Set(caseStudyCardsData.map((item) => item.category)),
  );
  const filterCategories =
    apiData.length > 0 ? categories : ["All Projects", ...fallbackCategories];

  return <CaseStudyIndexClient data={data} categories={filterCategories} />;
}
