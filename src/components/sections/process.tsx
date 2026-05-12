import Image from "next/image";
import ValuesCard from "../cards/values";

const processSteps = [
  {
    title: "1. Discover & Strategize",
    icon: "/icons/search.svg",
    description:
      "Deep analysis of business processes, technical architecture, and growth objectives.",
  },
  {
    title: "2. Architect & Develop",
    icon: "/icons/architect.svg",
    description:
      "Design scalable systems with modern UI/UX and robust backend engineering.",
  },
  {
    title: "3. Deploy & Integrate",
    icon: "/icons/deploy.svg",
    description:
      "Cloud deployment, CI/CD setup, API integrations, and performance optimization.",
  },
];

const Process = () => {
  return (
    <section className="bg-black rounded-[40px] flex py-20 px-5 sm:px-20 justify-between">
      
      <div className="process xl:w-1/2">
        
        <div
        className="flex
            md:flex-row md:justify-between md:items-end
            flex-col gap-5 items-start"
      >
        <div className="">
          <h2 className="text-white">Our Process</h2>
          <p className="text-neutral-mid pt-2 ">
            How We Deliver Technology That Works
          </p>
        </div>
      </div>
        
        <div className="flex flex-col items-center py-20">
          {processSteps.map((step, index) => (
            <ValuesCard
              key={index}
              variant="timeline"
              title={step.title}
              icon={step.icon}
              description={step.description}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Image */}
        <div
          className="relative w-111.25 overflow-hidden rounded-2xl
            hidden xl:flex"
        >
          <Image
            src="/images/strategy.webp"
            alt="Project Meeting"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
    </section>
  );
};

export default Process;

