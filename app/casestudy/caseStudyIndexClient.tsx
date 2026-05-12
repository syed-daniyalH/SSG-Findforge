"use client";

import CaseStudyCard from "@/components/cards/casestudy";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import CTA from "@/components/ui/cta";
import { useCaseStudyFilters } from "@/lib/useCaseStudyFilters";
import type { CaseStudyCardProps } from "@/types/casestudy.type";
import Image from "next/image";

interface CaseStudyIndexClientProps {
  data: CaseStudyCardProps[];
  categories: string[];
}

export default function CaseStudyIndexClient({
  data,
  categories,
}: CaseStudyIndexClientProps) {
  const {
    filteredData,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
  } = useCaseStudyFilters({
    data,
  });

  return (
    <section
      id="casestudy"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
    >
      <div className="flex flex-col items-center gap-2 pt-20 pb-10">
        <Badge
          text="Our Work"
          size="large"
          radius="full"
          icon="/icons/stars.svg"
          showIcon={true}
          className="bg-white text-primary font-semibold font-poppins border border-[#E0E7FF]"
        />
        <h1 className="text-primary">Case Studies</h1>
        <p className="text-[#333333] px-10 text-center w-full md:w-[90%] xl:w-[70%]">
          Explore how Techionik turns ideas into shipped products, production
          systems, and measurable outcomes.
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
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 border border-[#E2E8F0] rounded-full placeholder:text-[#94A3B8] outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <CaseStudyCard key={`${item.slug}-${index}`} {...item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No projects found
          </p>
        )}
      </div>

      <div
        id="cta"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10"
      >
        <CTA
          title="Talk to one of our experts"
          description="Looking to digitally transform your business? Get in touch to see how we can help you."
          image="/images/ctaPerson.webp"
          showBadge={true}
          button1={{
            text: "Book A Meeting",
            href: "/contact-us",
            icon: "/icons/calendar.svg",
          }}
        />
      </div>
    </section>
  );
}
