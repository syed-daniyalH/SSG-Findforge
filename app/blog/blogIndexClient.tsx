"use client";

import Insights from "@/components/cards/insights";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import FormCTA from "@/components/ui/formCTA";
import { useBlogFilters } from "@/lib/useBlogFilters";
import type { BlogsProps } from "@/types/blogs";
import Image from "next/image";

interface BlogIndexClientProps {
  data: BlogsProps[];
  categories: string[];
}

export default function BlogIndexClient({
  data,
  categories,
}: BlogIndexClientProps) {
  const {
    filteredData,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
  } = useBlogFilters({ data });

  return (
    <section
      id="blogs"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20"
    >
      <div className="flex flex-col items-center gap-2 pt-20 pb-10">
        <Badge
          text="Our Blogs"
          size="large"
          radius="full"
          icon="/icons/stars.svg"
          showIcon={true}
          className="bg-white text-primary font-semibold font-poppins border border-[#E0E7FF]"
        />
        <h1 className="text-primary">Find our all blogs from here</h1>
        <p className="text-[#333333] px-10 text-center w-full md:w-[90%] xl:w-[70%]">
          Real stories, practical guidance, and fresh thinking from the
          Techionik content team.
        </p>
      </div>

      <div className="space-y-4 mb-10">
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <Button
                key={category}
                text={category}
                radius="full"
                onClick={() => setActiveCategory(category)}
                className={`py-2 transition ${
                  isActive
                    ? "bg-grad-primary text-white"
                    : "bg-[#F1F5F9] text-secondary"
                }`}
              />
            );
          })}
        </div>

        <div className="relative max-w-62.5">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            <Image
              src="/icons/searchgray.svg"
              alt="Search"
              width={20}
              height={20}
            />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search blogs..."
            className="w-full pl-10 pr-4 py-2 border border-[#E2E8F0] rounded-full placeholder:text-[#94A3B8] outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredData.map((item, index) => (
          <Insights key={`${item.slug}-${index}`} {...item} variant="featured" />
        ))}
      </div>

      <div id="formCTA" className="my-10">
        <FormCTA
          variant="field"
          heading="Get our stories delivered From us to your inbox weekly"
          description="Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day."
          buttonText="Get Started"
          fields={[{ type: "email", name: "email", placeholder: "Enter email" }]}
        />
      </div>
    </section>
  );
}
