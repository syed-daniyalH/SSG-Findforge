import { industryData } from "@/content/industry.data";
import IndustryCard from "../cards/industry";
import Link from "next/link";
import Image from "next/image";

const Industries = () => {
  return (
    <section className="">
        <div className="flex
        md:flex-row md:justify-between md:items-end pb-8
        flex-col gap-5 items-start">
            <div className="">
                <h2 className="text-secondary">Industries We Serve</h2>
            </div>
            <div className="flex gap-2 border-b-2 border-black pb-1">
                <Link
                href="/industry"
                className="text-black font-semibold font-poppins text-sm"
                >
                View full Industries
                </Link>
                <Image
                src="/icons/arrowRight.svg"
                alt="arrow"
                width={16}
                height={24}
                />
            </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-rows-2 gap-3">
        {/* Top Row */}
        <div className="grid md:grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-3">
            <IndustryCard item={industryData[0]} />
            <IndustryCard item={industryData[1]} />
            <div className="space-y-3">
            <IndustryCard item={industryData[2]} />
            <IndustryCard item={industryData[3]} />
            </div>
        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-3">
            <IndustryCard item={industryData[4]} />
            <IndustryCard item={industryData[5]} />
            <IndustryCard item={industryData[6]} />
        </div>
        </div>
    </section>
  );
};

export default Industries;
