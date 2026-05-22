"use client";

import CaseStudyCard from "@/components/cards/casestudy";
import Button from "@/components/ui/button";
import { useCaseStudyFilters } from "@/lib/useCaseStudyFilters";
import type { CaseStudyCardProps } from "@/types/casestudy.type";
import Image from "next/image";
import Link from "next/link";

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
        <div className="relative grid min-h-[218px] overflow-hidden rounded-[14px] bg-black text-white md:grid-cols-[1fr_330px]">
          <div className="relative z-10 px-8 py-10 md:px-10">
            <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <Image src="/icons/monitor.svg" alt="" width={16} height={16} className="brightness-0 invert" />
            </div>
            <h2 className="max-w-[310px] text-[24px] font-bold leading-tight text-white">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 max-w-[285px] font-poppins text-[12px] leading-5 text-white/75">
              Let&apos;s discuss how technology can bring your idea to life.
            </p>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex h-10 items-center rounded-full bg-white px-5 font-poppins text-[12px] font-semibold text-primary"
            >
              Start a Conversation
            </Link>
          </div>
          <div className="relative hidden overflow-hidden bg-grad-hero md:block">
            <Image
              src="/images/ctaPerson.webp"
              alt=""
              width={270}
              height={270}
              className="absolute bottom-0 right-5 z-10"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
