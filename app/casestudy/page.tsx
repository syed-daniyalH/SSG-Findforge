import { caseStudyCardsData } from "@/content/casestudy.data";
import CaseStudyIndexClient from "./caseStudyIndexClient";

export default async function CaseStudyPage() {
  const fallbackCategories = Array.from(
    new Set(caseStudyCardsData.slice(0, 6).map((item) => item.category)),
  );
  const filterCategories = ["All Projects", ...fallbackCategories];

  return (
    <CaseStudyIndexClient
      data={caseStudyCardsData.slice(0, 6)}
      categories={filterCategories}
    />
  );
}
