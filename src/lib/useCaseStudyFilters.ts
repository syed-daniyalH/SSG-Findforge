import { CaseStudyCardProps } from "@/types/casestudy.type";
import { useMemo, useState } from "react";

type Props = {
  data: CaseStudyCardProps[];
  defaultCategory?: string;
};

export const useCaseStudyFilters = ({
  data,
  defaultCategory = "All Projects",
}: Props) => {

  // -------------------------
  // STATE
  // -------------------------
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // -------------------------
  // FILTER ENGINE
  // -------------------------
  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return data.filter((item) => {

      // CATEGORY FILTER
      const categoryMatch =
        activeCategory === "All Projects" ||
        item.category?.toLowerCase() === activeCategory.toLowerCase();

      // SEARCH FILTER (title + description + category)
      const searchMatch =
        item.title?.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query) ||
        item.category?.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [data, activeCategory, searchQuery]);

  return {
    filteredData,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
  };
};

