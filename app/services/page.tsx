import KeySolutionCard, {
  KeySolutionCardData,
} from "@/components/cards/keySolutionCard";
import ServiceCard1, {
  ServiceCard1Data,
  ServiceCard1Props,
} from "@/components/cards/serviceCard";
import Blogs from "@/components/sections/blogs";
import ClientTestimonial from "@/components/sections/clientsTestimonial";
import DesignPrincipleSection from "@/components/sections/design-principle";
import Industries from "@/components/sections/industries";
import Button from "@/components/ui/button";
import Certificates from "@/components/ui/certificates";
import Clients from "@/components/ui/clients";
import CTA from "@/components/ui/cta";
import ReusableCTA from "@/components/ui/entrepriseCTA";
import Impacts from "@/components/ui/impact";
import { designPrincipleServiceData } from "@/content/designPrincipleServiceData";
import { getServiceCardsAndCTA } from "@/lib/api/services";
import Image from "next/image";

export default async function Service() {
  const { cards: services } = await getServiceCardsAndCTA();
  const serviceCards = services.map((item) => ({
    name: item.name,
    slug: item.slug,
    description: item.description,
    image: item.imageUrl || "/images/ai.webp",
  }));
  const serviceCardKeys = new Set(
    serviceCards.map((item) => item.slug || item.name)
  );
  const keySolutionCards = [
    ...serviceCards,
    ...KeySolutionCardData.filter(
      (item) => !serviceCardKeys.has(item.slug) && !serviceCardKeys.has(item.name)
    ),
  ].slice(0, KeySolutionCardData.length);

  return (
    <div className="service-page">


      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <h1 className="text-primary">
            Managed IT Services
          </h1>
          <p className="text-neutral-dark">
            We are a leading UK provider of Managed IT Services. Our purpose is to empower organisations with innovative solutions and expert support, enabling them to deliver vital services for the sectors and communities they serve.
          </p>
          <div className="buttons-optional flex flex-col md:flex-row gap-6">
            {/* Optional buttons can be added here */}
            <Button
              text="Explore AI Services"
              radius="full"
              size="large"
              variant="gradient"
              href="/contact"
            />
            <Button
              text="Speak to an Expert"
              radius="full"
              size="large"
              href="/contact"
              showIcon
              icon="/icons/calendar.svg"
              className="bg-white border border-#E5E5E5 text-primary font-semibold font-poppins"
            />
          </div>
        </div>

        <div className="relative  xl:w-120 h-100 overflow-hidden rounded-2xl">
          <Image src="/images/ai.webp" alt="AI" fill priority className="object-cover" />
        </div>
      </section>

      <section className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8 my-10">
        <Clients />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <div
          className="flex
        md:flex-row md:justify-between md:items-end pb-10
        flex-col gap-5 items-start"
        >
          <div className="">
            <h2 className="text-secondary">Our Core Services</h2>
            <p className="text-neutral-dark pt-2">
              We provide solutions that effortlessly get the job done, allowing
              our customers to focus on thriving for the people who rely on
              them.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row ">
          {ServiceCard1Data.map((item: ServiceCard1Props, index: number) => {
            return (
              <ServiceCard1
                key={index}
                name={item.name}
                number={index + 1}
                description={item.description}
                iconSrc={item.iconSrc}
              />
            );
          })}
        </div>
      </section>

      <section className="">
        <ReusableCTA
          variant="enterprise"
          title="Secure AI for the Modern Enterprise."
          bgImage="/images/entrepriseCTA.webp"
          cardImage="/images/security-card.webp"
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <div
          className="flex
            md:flex-row md:justify-between md:items-end pb-10
            flex-col gap-5 items-start"
        >
          <div className="w-full max-w-[720px]">
            <h2 className="text-secondary">Our Key Solutions</h2>
            <p className="text-neutral-dark pt-3 font-poppins text-sm leading-6">
              From ensuring seamless day-to-day operations to protecting against
              cyber threats, our services help organisations navigate the
              complexities of today&apos;s landscape.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {keySolutionCards.map((item) => {
            return (
              <KeySolutionCard
                key={item.slug || item.name}
                name={item.name}
                slug={item.slug}
                description={item.description}
                image={item.image}
              />
            );
          })}
        </div>
      </section>

      <section
        id="certificates"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Certificates />
      </section>

      <section id="service-design-principle" className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
          <h2 className="text-secondary">Service Design Principles</h2>
          <p className="text-neutral-dark pt-2 ">
            We are proud to be recognised for our positive culture, our
            achievements with clients, our work with communities and young
            people, and our technical advancements and strategic partnerships. 
          </p>
        </div>
        <DesignPrincipleSection
          data={designPrincipleServiceData}
          hasIcon={true}
        />
      </section>

      <section className="">
        <ReusableCTA
          variant="partner"
          title="Trusted Technology Partner."
          description="Deep expertise in data and AI technologies, enabling robust digital transformation."
          badges={[
            "/images/laptop.webp",
            "/images/laptop1.webp",
            "/images/laptop3.webp",
          ]}
          cardTitle="Continuous Support"
          cardDescription="Empowering teams to make better decisions faster."
          features={[
            "Proven Transformation Methodologies",
            "Secure, Scalable Data Platforms",
            "Ongoing Systems Optimization",
          ]}
          footerTags={[
            { label: "Fully Compliant", icon: "/icons/compliant.svg" },
            { label: "24/7 Monitored" },
          ]}
        />
      </section>

      <section
        id="testimonial"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <ClientTestimonial />
      </section>

      <section
        id="impacts"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Impacts />
      </section>

      <section
        id="industries"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Industries />
      </section>

      <section
        id="blogs"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Blogs />
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

