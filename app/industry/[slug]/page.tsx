import type { HeroSlide, SoftwareSolutionItem } from "@/lib/types/industries";
import { industriesData } from "@/components/cards/industryCard";
import { getIndustryBySlug } from "@/lib/api/industries";
import Mission from "@/components/cards/missionCard";
import {
  featureCardData,
  type TechFeature,
} from "@/components/cards/techfeaturedCard";
import Blogs from "@/components/sections/blogs";
import ClientTestimonial from "@/components/sections/clientsTestimonial";
import Stories from "@/components/sections/featuredStories";
import HealthCare from "@/components/sections/healthCare";
import Hero from "@/components/sections/hero";
import Clients from "@/components/ui/clients";
import CTA from "@/components/ui/cta";
import { notFound } from "next/navigation";
import InfoCardGroup, {
  firstRowData,
  secondRowData,
  type InfoCardData,
} from "@/components/cards/infoCard";
import TechFeatureCardGroup from "@/components/cards/techfeaturedCard";
 
export default async function DetailedIndustry({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const apiIndustry = await getIndustryBySlug(slug);
  const localIndustry = industriesData.find((item) => item.id === slug);

  if (!apiIndustry && !localIndustry) {
    notFound();
  }

  const pageIndustry = {
    id: apiIndustry?.slug ?? localIndustry?.id ?? slug,
    title: apiIndustry?.title ?? localIndustry?.title ?? "Industry",
    description: apiIndustry?.description ?? localIndustry?.description ?? "",
    image:
      apiIndustry?.imageUrl ??
      localIndustry?.image ??
      "/images/industry-default.webp",
    icon: localIndustry?.icon ?? "/icons/business.svg",
  };

  const heroSlide: HeroSlide = apiIndustry?.templateData?.heroSlides?.[0] ?? {
    title: pageIndustry.title,
    subtitle: pageIndustry.description,
    description:
      pageIndustry.description ||
      `Learn how we build custom ${pageIndustry.title} software solutions for your industry.`,
    image: pageIndustry.image,
    ctaText: "Talk to an Expert",
    ctaLink: "/contact",
  };

  const mapSolutionItemsToCards = (
    items: SoftwareSolutionItem[],
  ): InfoCardData[] =>
    items.map((item, index) => ({
      number: index + 1,
      name: item.title,
      description: item.description,
      layout: index < 2 ? "horizontal" : "vertical",
      variant: index === 1 ? "gradient" : "default",
    }));

  const solutionCards = apiIndustry?.templateData?.softwareSolutions?.items
    ? mapSolutionItemsToCards(apiIndustry.templateData.softwareSolutions.items)
    : null;

  const healthcareValueCards: InfoCardData[] = [
    {
      number: 1,
      name: "Deliver better patient service",
      description:
        "Enable a seamless customer experience for your patients, allowing them to access their medical information anytime and anywhere with advanced electronic health records software. You'll save time and resources through powerful",
      layout: "horizontal",
      variant: "default",
    },
    {
      number: 2,
      name: "Manage Medical Data",
      description:
        "Enable a seamless customer experience for your patients, allowing them to access their medical information anytime and anywhere with advanced electronic health records software. You'll save time and resources through powerful",
      layout: "horizontal",
      variant: "gradient",
    },
    {
      number: 3,
      name: "Automate to Improve Patient Care",
      description:
        "Enable a seamless customer experience for your patients, allowing them to access their medical information anytime and anywhere with advanced electronic health records software. You'll save time and resources through powerful",
      layout: "vertical",
      variant: "default",
    },
    {
      number: 4,
      name: "Optimise costs and increase efficiency",
      description:
        "Enable a seamless customer experience for your patients, allowing them to access their medical information anytime and anywhere with advanced electronic health records software. You'll save time and resources through powerful",
      layout: "vertical",
      variant: "default",
    },
    {
      number: 5,
      name: "Performance Reporting",
      description:
        "Enable a seamless customer experience for your patients, allowing them to access their medical information anytime and anywhere with advanced electronic health records software. You'll save time and resources through powerful",
      layout: "vertical",
      variant: "default",
    },
  ];

  const valueCards =
    slug === "healthcare"
      ? healthcareValueCards
      : solutionCards ?? [...firstRowData, ...secondRowData];
  const firstRowCards = valueCards.slice(0, 2);
  const secondRowCards = valueCards.slice(2);
  const ctaData = apiIndustry?.templateData?.cta;
  const technologyExpertise = apiIndustry?.templateData?.technologyExpertise;
  const healthcareTechnologyCards: TechFeature[] = [
    {
      title: "Computer vision",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
    {
      title: "Data Mining",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
    {
      title: "Natural Language Processing",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
    {
      title: "Data Science and machine learning",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
    {
      title: "Mixed, augmented and virtual reality",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
    {
      title: "Computer vision",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
  ];
  const technologyCards: TechFeature[] =
    slug === "healthcare"
      ? healthcareTechnologyCards
      : technologyExpertise?.cards?.map((card) => ({
          title: card.title,
          iconSrc: card.icon,
          features: card.description,
        })) ?? featureCardData;

  return (
    <div className="detailed-industry-page">
      <section
        id="hero"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10 pt-20"
      >
        <Hero
          badge={{
            text: `Industry > ${heroSlide.title}`,
            size: "medium",
            radius: "full",
            icon: pageIndustry.icon,
            showIcon: true,
            className:
              "bg-white text-[#374151] border border-[#FFFFFF99] font-semibold font-poppins",
          }}
          title={`Custom ${heroSlide.title} Software Development`}
          description={heroSlide.description}
          banner={true}
          image={{
            src: heroSlide.image,
            alt: heroSlide.title,
          }}
        />
      </section>

      <section
        id="clients"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10"
      >
        <Clients />
      </section>

      <section
        id="our-mission"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10"
      >
        <Mission
          items={[
            {
              title:
                "What you get with SSG MindForge healthcare software development",
              description:
                "Our custom healthcare software development services are tailored to help medical institutions enhance patient experiences and streamline operations. With over 30 years of experience in the software engineering market and extensive experience developing healthcare solutions, we understand the sector's unique challenges. Our achievement of HITRUST certification further demonstrates our commitment to healthcare data protection and regulatory compliance.",
              image: "/images/health1.webp",
              button: {
                text: "Talk to an Expert",
                href: "/about",
                size: "large",
                radius: "full",
                showIcon: true,
                icon: "/icons/border.svg",
                className:
                  "bg-primary text-white font-semibold font-poppins transition-shadow duration-300 hover:shadow-soft flex flex-row-reverse mt-4",
              },
            },
          ]}
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10">
        <HealthCare />
      </section>

      <section className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 my-10 md:my-14">
        <div className="space-y-10">
          <h2 className="max-w-[700px] text-[30px] leading-[38px] md:text-[36px] md:leading-[46px]">
            {slug === "healthcare"
              ? "The value of custom healthcare software for your medical organisation"
              : "The value of custom healthcare software"}
          </h2>

          {/* Row 1: Horizontal Cards */}
          <InfoCardGroup data={firstRowCards} />

          {/* Row 2: Vertical Cards */}
          <InfoCardGroup data={secondRowCards} />
        </div>
      </section>

      <section
        id="CTA1"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10"
      >
        <CTA
          title="AI-Powered Engineering for Scalable Growth"
          description="We build scalable AI solutions tailored for your business."
          backgroundImage="/images/element.webp"
          image="/images/ctaRing.webp"
          button1={{
            text: "Book Your Demo",
            href: "/services/ai",
            icon: "/icons/calendar.svg",
          }}
          button2={{
            text: "Talk to Expert",
            href: "/contact",
          }}
        />
      </section>

      <section
        id="stories"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10"
      >
        <Stories />
      </section>

      <section id="technology-expertise" className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 my-10 md:my-14">
        <div
          className="flex
            md:flex-row md:justify-between md:items-end pb-12
            flex-col gap-5 items-start max-w-[560px]"
        >
          <div className="">
            <h2 className="text-secondary max-w-[430px]">
              {slug === "healthcare"
                ? "Our technology expertise for the healthcare sector"
                : technologyExpertise?.mainTitle ??
                  "Our technology expertise for the healthcare sector"}
            </h2>
            <p className="text-neutral-dark pt-5 font-poppins text-sm leading-6">
              {slug === "healthcare"
                ? "We help healthcare institutions of all sizes and specialisms adopt digital transformations powered by data science, IoT, cloud, VR/AR/MR and other modern technologies."
                : technologyExpertise?.mainDescription ??
                  "We help healthcare institutions of all sizes and specialisms adopt digital transformations powered by data science, IoT, cloud, VR/AR/MR and other modern technologies."}
            </p>
          </div>
        </div>

        <TechFeatureCardGroup data={technologyCards} />
      </section>

      <section
        id="blogs"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10"
      >
        <Blogs />
      </section>

      <section
        id="testimonial"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10"
      >
        <ClientTestimonial />
      </section>

      <section
        id="cta"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10"
      >
        <CTA
          title={ctaData?.title ?? "Talk to one of our experts"}
          description={
            ctaData?.description ??
            "Looking to digitally transform your business? Get in touch to see how we can help you."
          }
          image={ctaData?.image ?? "/images/ctaPerson.webp"}
          showBadge={true}
          button1={{
            text: ctaData?.buttonLabel ?? "Book A Meeting",
            href: ctaData?.buttonUrl ?? "/contact",
            icon: "/icons/calendar.svg",
          }}
        />
      </section>
    </div>
  );
}
