import Link from "next/link";
import Image from "next/image";
import Insights from "../cards/insights";
import { getBlogCards } from "@/lib/api/blogs";
import { BlogsProps } from "@/types/blogs";

const fallbackAuthor = {
  name: "Techionik Editorial",
  image: "/images/ahmadbhai.webp",
  authorSlug: "techionik-editorial",
  authorDescription:
    "Insights and practical guidance from the Techionik editorial team.",
  designation: "Editorial Team",
};

const fallbackInsights: BlogsProps[] = [
  {
    slug: "how-ai-is-transforming-tendering-in-2026",
    name: "How AI is Transforming Tendering in 2026",
    date: "23 March 2026",
    imageUrl: "/images/ai.webp",
    description: "Explore the future of automated bid management.",
    category: "AI Automation",
    author: fallbackAuthor,
    icon: "/icons/arrowRight.svg",
  },
  {
    slug: "checklist-for-automated-bid-submission",
    name: "Checklist for Automated Bid Submission",
    date: "23 March 2026",
    imageUrl: "/images/automated.webp",
    description: "Ensure 100% compliance with this step-by-step guide.",
    category: "AI Automation",
    author: fallbackAuthor,
    icon: "/icons/arrowRight.svg",
  },
  {
    slug: "enterprise-tender-optimization",
    name: "Case Study: Enterprise Tender Optimization",
    date: "23 March 2026",
    imageUrl: "/images/security-card.webp",
    description: "How a Fortune 500 company saved 2000 hours.",
    category: "Case Study",
    author: fallbackAuthor,
    icon: "/icons/arrowRight.svg",
  },
];

const Blogs = async () => {
  const blogCards = await getBlogCards(3);
  const data = blogCards.length > 0 ? blogCards : fallbackInsights;

  return (
    <section className="">
      <div
        className="flex
            md:flex-row md:justify-between md:items-end pb-8
            flex-col gap-5 items-start"
      >
        <div className="">
          <h2 className="text-secondary">Latest Insights & Resources</h2>
          <p className="text-neutral-dark pt-2">
            Comprehensive solutions for the modern bid team.
          </p>
        </div>
        <div className="flex gap-2 border-b-2 border-black pb-1">
          <Link href="/blog" className="text-black font-semibold font-poppins text-sm">
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
