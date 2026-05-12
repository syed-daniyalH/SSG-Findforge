import Mission from "@/components/cards/missionCard";
import Process from "@/components/sections/process";
import Badge from "@/components/ui/badge";
import CTA from "@/components/ui/cta";
import Icon from "@/components/ui/icon";
import { caseStudyCardsData } from "@/content/casestudy.data";
import Image from "next/image";
import { notFound } from "next/navigation";

// import ServiceCard from "@/components/cards/service";

export default async function DetailedCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // We look for the item where the slug matches our URL parameter
  // Since your data slug is "/casestudy/name", we check if it ends with the param slug
  const casestudy = caseStudyCardsData.find((item) => 
    item.slug.endsWith(slug)
  );

  if (!casestudy) {
    notFound();
  }


  return (
    <div className="detailed-casestudy-page">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20 space-y-10">
        
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="space-y-6">
            <Badge
              text="Our Work"
              size="large"
              radius="full"
              showIcon
              icon="/icons/stars.svg"
              className="border border-[#E5E5E5] text-primary"
            />
            <h1 className="text-primary">{casestudy.title}</h1>
            <p className="text-neutral-dark">{casestudy.description}</p>

            <div className="flex flex-wrap gap-2 items-center">
              {casestudy.subcategories?.map((subcat) => (
                <Badge
                  key={subcat}
                  text={subcat}
                  radius="full"
                  size="medium"
                  className="text-neutral-dark border border-[#E2E8F0]"
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-3 flex-wrap md:flex-nowrap">
              {casestudy.stats?.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2 text-center w-40.5 border border-[#E2E8F0] rounded-2xl p-4">
                  <span className="font-jakarta font-bold text-[#0F172A] text-[24px]">
                    {stat.value}
                  </span>
                  <span className="text-[#64748B] text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-100 rounded-2xl overflow-hidden">
          <Image 
            src={casestudy.image} 
            alt={casestudy.company || casestudy.title} 
            fill 
            priority 
            className="object-cover" 
          />
        </div>

        {/* DYNAMIC PROJECT INFO SECTION */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-6 lg:gap-6 xl:gap-10">
          {casestudy.projectInfo?.map((info, idx) => (
            <div key={idx} className="border border-[#E2E8F0] rounded-2xl py-8 px-8 w-full md:w-97">
              <div className="flex gap-6 items-center mb-4">
                <Icon src={info.icon} alt={info.title} iconSize={25} bgColor="#F3F4F6" />
                <h3 className="">{info.title}</h3>
              </div>
              
              {/* Render simple value if it exists */}
              {info.value && <p className="text-[#64748B]">{info.value}</p>}
              
              {/* Render list if it exists */}
              {info.list && (
                <ul className="space-y-6">
                  {info.list.map((item, i) => (
                    <li key={i} className="flex items-center text-[#64748B] h-1">
                      <Icon 
                        src="/icons/primary-tick.svg" 
                        alt="tick" 
                        iconSize={14} 
                        noBg 
                        noBorder 
                        className="text-[#6366F1]" 
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="our-mission" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <div className="bg-[#F9FAFB] rounded-[40px] px-10 md:px-18 py-18 flex flex-col gap-12">
          <Mission
            items={[
              {
                badge: {
                  text: "OUR MISSION",
                  className:
                    "text-secondary border border-[#FFFFFF99] bg-white",
                  radius: "full",
                  showIcon: true,
                  icon: "/icons/mission.svg",
                },
                title: "Transforming business through smart technology",
                description:
                  "Our role is simple: give you the tools, talent and technical expertise to succeed in an unpredictable world From re-engineering critical systems to building next-generation digital products, we focus on solutions that are robust, secure, and built to evolve so your business can keep delivering, no matter what comes next.",
                image: "/images/choose1.webp",
              },
              {
                badge: {
                  text: "OUR VISION",
                  className:
                    "text-secondary border border-[#FFFFFF99] bg-white",
                  radius: "full",
                  showIcon: true,
                  icon: "/icons/mission.svg",
                },
                title: "Transforming business through smart technology",
                description:
                  "Our role is simple: give you the tools, talent and technical expertise to succeed in an unpredictable world From re-engineering critical systems to building next-generation digital products, we focus on solutions that are robust, secure, and built to evolve so your business can keep delivering, no matter what comes next.",
                image: "/images/choose2.webp",
                reverse: true,
              },
            ]}
          />
        </div>
      </section>

      <section
        id="process"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Process />
      </section>

      <section
        id="gallery"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <h2 className="">Project Gallery</h2>
        <p className="pt-4">Comprehensive solutions for the modern bid team.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
          <div className="relative overflow-hidden w-full lg:w-125 h-121.25 rounded-2xl">
            <Image src="/images/strategy.webp" alt="Gallery 1" fill priority className="object-cover" />
          </div>
          <div className="relative overflow-hidden w-full lg:w-125 h-121.25 rounded-2xl">
            <Image src="/images/strategy.webp" alt="Gallery 1" fill priority className="object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Review Bubble Container */}
          <div className="relative border-2 border-[#B5020F] rounded-4xl p-8 md:p-16 bg-white shadow-sm">

            {/* Profile Header Area */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              {/* Profile Image with Border */}
              <div className="relative w-24 h-24 rounded-full border-2 border-[#B5020F] overflow-hidden shrink-0">
                <Image
                  src="/images/testimonial1.webp" // Replace with your image path
                  alt="Bernardine Denigan"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name and Title */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Bernardine Denigan
                </h3>
                <p className="text-[#B5020F] font-medium mt-1">
                  Product manager at Cisco
                </p>

                {/* Custom Icon: 2 Small Lines (1 big, 1 small) */}
                <div className="flex items-center gap-1 mt-3 justify-center md:justify-start">
                  <div className="h-0.75 w-8 bg-[#B5020F] rounded-full"></div>
                  <div className="h-0.75 w-3 bg-[#B5020F] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Review Text */}
            <blockquote className="text-gray-600 text-lg md:text-xl leading-relaxed text-center md:text-left font-light">
              &quot;Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website.
              The fresh look and user-friendly interface have boosted engagement and conversions.
              Their attention to detail is commendable!&quot;
            </blockquote>

            {/* Speech Bubble Tail (SVG for precision) */}
            <div className="absolute -bottom-7.5 left-1/3 -translate-x-1/2 md:left-auto md:right-120">
              <svg
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 30L0 0H40L20 30Z"
                  fill="white"
                />
                <path
                  d="M20 30L0 0H2.5L20 26.5L37.5 0H40L20 30Z"
                  fill="#B5020F"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <CTA
          title="Talk to one of our experts"
          description="Looking to digitally transform your business? Get in touch to see how we can help you."
          image="/images/ctaPerson.webp"
          showBadge={true}
          button1={{
            text: "Book A Meeting",
            href: "/contact",
            icon: "/icons/calendar.svg",
          }}
        />
      </section>
    </div>
  );
}
