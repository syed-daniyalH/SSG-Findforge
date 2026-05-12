import { BlogsProps } from "@/types/blogs";
import { useMemo, useState } from "react";


type UseBlogFiltersProps = {
  data: BlogsProps[];
  defaultCategory?: string;
};

export const useBlogFilters = ({
  data,
  defaultCategory = "All Blogs",
}: UseBlogFiltersProps) => {
  // -------------------------
  // STATES
  // -------------------------
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // -------------------------
  // FILTER ENGINE
  // -------------------------
  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return data.filter((blog) => {
      // CATEGORY FILTER
      const categoryMatch =
        activeCategory === "All Blogs" ||
        blog.category?.toLowerCase() === activeCategory.toLowerCase();

      // SEARCH FILTER (TITLE + DESCRIPTION + CATEGORY)
      const searchMatch =
        blog.name?.toLowerCase().includes(query) ||
        blog.description?.toLowerCase().includes(query) ||
        blog.category?.toLowerCase().includes(query);

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