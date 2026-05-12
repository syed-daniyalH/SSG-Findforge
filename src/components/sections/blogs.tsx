import Link from "next/link";
import Image from "next/image";
import Insights from "../cards/insights";
import { getInsights } from "@/lib/limits";

const Blogs = () => {
const data = getInsights(3);
  return (
    <section className="">
      <div
        className="flex
            md:flex-row md:justify-between md:items-end pb-10
            flex-col gap-5 items-start"
      >
        <div className="">
          <h2 className="text-secondary">Latest Insights & Resources</h2>
          <p className="text-neutral-dark pt-2">
            Comprehensive solutions for the modern bid team.
          </p>
        </div>
        <div className="flex gap-2 border-b-2 border-black pb-1">
          <Link href="/blogs" className="text-black font-semibold font-poppins">
            View All Insights
          </Link>
          <Image
            src="/icons/arrowRight.svg"
            alt="arrow"
            width={16}
            height={24}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
            <Insights key={index} {...item} variant="compact" />
        ))}
      </div>
    </section>
  );
};

export default Blogs;

