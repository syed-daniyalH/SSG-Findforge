"use client";

import CaseStudyCard from "@/components/cards/casestudy";
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
      className="mx-auto max-w-[760px] px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-center pb-12 text-center">
        <p className="font-poppins text-[11px] font-semibold uppercase text-primary">
          Our Work
        </p>
        <h1 className="pt-3 text-[36px] font-bold leading-tight text-primary md:text-[46px]">
          Case Studies
        </h1>
        <p className="max-w-[520px] pt-4 font-poppins text-[13px] leading-6 text-neutral-dark">
          Explore our portfolio of past projects, design insights, and
          development solutions across global brands and digital products.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <Button
                key={category}
                text={category}
                radius="full"
                size="extraSmall"
                onClick={() => setActiveCategory(category)}
                className={`h-7! px-3! py-0! font-poppins text-[10px] transition ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-[#F1F5F9] text-secondary"
                }`}
              />
            );
          })}
        </div>

        <div className="relative w-full md:max-w-[190px]">
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
            className="h-8 w-full rounded-full border border-[#E2E8F0] py-2 pl-9 pr-4 font-poppins text-[11px] outline-none placeholder:text-[#94A3B8]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
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

      <div className="mt-16">
        <CTA
          title="Ready to Start Your Project?"
          description="Let&apos;s create something extraordinary together. Get in touch to discuss how we can bring your vision to life."
          image="/images/ctaPerson.webp"
          showBadge={true}
          button1={{
            text: "Start A Conversation",
            href: "/contact-us",
            icon: "/icons/primaryArrow.svg",
          }}
        />
      </div>
    </section>
  );
}
