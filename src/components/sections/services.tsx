
import { ServiceItem } from "@/types/services";
import ServiceCard from "../cards/services";
import Image from "next/image";
import Link from "next/link";


const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "AI Automation Solutions",
    description: "Smart automation for everything from document processing to generative response writing.",
    image: "/images/ai-automated.webp",
    layout: "featured",
  },
  {
    id: 2,
    title: "Software Engineering",
    description: "Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.",
    image: "/images/ai1.webp",
    layout: "standard",
  },
  {
    id: 3,
    title: "Analytics & Decision AI",
    description: "Intelligent dashboards delivering insights, forecasts, and tender success indicators.",
    layout: "compact",
  },
  {
    id: 4,
    title: "Support & Consultancy",
    description: "Dedicated tech experts to guide strategy, implementation, and process optimization.",
    layout: "compact",
  },
];

const Services = () => {
  return (
    <section>
      <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-secondary">What We Do</h2>
          <p className="mt-4 font-poppins text-base leading-7 text-neutral-dark md:text-lg">
            Comprehensive solutions for the modern bid team.
          </p>
        </div>
        <div className="flex w-fit items-center gap-2 border-b-2 border-black pb-1">
          <Link
            href="/services"
            className="font-poppins text-sm font-semibold text-black"
          >
            View Full Services
          </Link>
          <Image
            src="/icons/arrowRight.svg"
            alt="arrow"
            width={16}
            height={24}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        
        {/* Left Column: Featured Card (Takes up 5/12 columns) */}
        <div className="h-full">
          <ServiceCard item={servicesData[0]} />
        </div>

        {/* Right Column: Standard + Compact Cards (Takes up 7/12 columns) */}
        <div className="flex flex-col gap-4">
          
          {/* Top: Standard Card */}
          <div className="">
            <ServiceCard item={servicesData[1]} />
          </div>

          {/* Bottom: Two Compact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ServiceCard item={servicesData[2]} />
            <ServiceCard item={servicesData[3]} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;

