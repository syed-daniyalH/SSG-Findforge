import IndustryCard, { industriesData } from "@/components/cards/industryCard";
import { getIndustryCards } from "@/lib/api/industries";
import { mapApiIndustryCardsToLocalIndustries } from "@/lib/utils/industryMapper";
import Mission from "@/components/cards/missionCard";
import AuditTabs from "@/components/sections/audit";
import ClientTestimonial from "@/components/sections/clientsTestimonial";
import Stories from "@/components/sections/featuredStories";
import Hero from "@/components/sections/hero";
import Clients from "@/components/ui/clients";
import CTA from "@/components/ui/cta";
import { auditData } from "@/content/audit.data";

const PRIORITY_INDUSTRY_IDS = ["healthcare", "real-estate"];

function normalizeIndustryId(value: string) {
  return value.toLowerCase().trim();
}

export default async function Industry() {
  const apiIndustryCards = await getIndustryCards();
  const mappedIndustries = mapApiIndustryCardsToLocalIndustries(
    apiIndustryCards,
    industriesData
  );
  const mappedIndustryById = new Map(
    mappedIndustries.map((item) => [normalizeIndustryId(item.id), item]),
  );
  const fallbackIndustryById = new Map(
    industriesData.map((item) => [normalizeIndustryId(item.id), item]),
  );

  const priorityIndustries = PRIORITY_INDUSTRY_IDS.map(
    (industryId) =>
      mappedIndustryById.get(industryId) ?? fallbackIndustryById.get(industryId),
  ).filter((item): item is (typeof industriesData)[number] => Boolean(item));

  const remainingIndustries = mappedIndustries.filter(
    (item) => !PRIORITY_INDUSTRY_IDS.includes(normalizeIndustryId(item.id)),
  );

  const industries = [...priorityIndustries, ...remainingIndustries];

  return (
    <div className="industry-page">
      <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10 pt-20">
        <Hero
          title="Industry knowledge and digital expertise combined"
          description="With over 30 years of digital design, development, and delivery under our belts, if you’ve got a digital challenge, we’ll work with you to get game-changing results."
          banner={true}
          image={{
            src: "/images/industry-banner.webp",
            alt: "Doctors",
            className: "scale-x-[-1]",
          }}
        />
      </section>

      <section
        id="clients"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Clients />
      </section>

      <section
        id="our-mission"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Mission
          items={[
            {
              title: "Making lives and business better",
              description:
                "We work with organisations in all corners of industry and of all sizes to remove strife from customer and working life - from global multinationals to local entrepreneurs, from pillars of central government and commercial enterprises to non-profits.",
              description1:
                " The locations, headcounts, and project scales change, the complexity varies, but our commitment to solving business challenges through impeccable people-centred technology solutions never wavers.",
              image: "/images/meeting.webp",
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

      <section
        id="audit"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <AuditTabs
          title="Key features of Smart Audit for SoD compliance:"
          items={auditData}
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        
        <div className="flex
            md:flex-row md:justify-between md:items-end pb-10
            flex-col gap-5 items-start">
                <div className="">
                    <h2 className="text-secondary">Industries We Serve</h2>
                    <p className="text-neutral-dark pt-2">Delivering value to multiple industries, we innovate industry-specific technologies to scale and optimize operations and bottom line.</p>
                </div>
            </div>
        
        <IndustryCard data={industries} />
      </section>

      <section
        id="stories"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Stories />
      </section>

      <section
        id="testimonial"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <ClientTestimonial />
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
