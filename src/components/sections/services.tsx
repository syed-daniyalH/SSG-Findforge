
import { ServiceItem } from "@/types/services";
import ServiceCard from "../cards/services";


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
  );
};

export default Services;

