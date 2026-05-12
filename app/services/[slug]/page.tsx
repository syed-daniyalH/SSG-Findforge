import Solutions from "@/components/cards/solutions";
import FAQs from "@/components/sections/accordions";
import Blogs from "@/components/sections/blogs";
import ClientTestimonial from "@/components/sections/clientsTestimonial";
import Industries from "@/components/sections/industries";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Certificates from "@/components/ui/certificates";
import WhyChooseUs from "@/components/ui/chooseUs";
import Clients from "@/components/ui/clients";
import CTA from "@/components/ui/cta";
import ReusableCTA from "@/components/ui/entrepriseCTA";
import { solutionData } from "@/content/solutions.data";
import { getServiceBySlug } from "@/lib/api/services";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SolutionItem } from "@/types/solutions";
import { FAQItem } from "@/types/faq";
import { WhyChooseTechionik } from "@/types/whychoose.type";
import { faqData } from "@/content/faq.data";
import Link from "next/link";
import { whyChooseData } from "@/content/whychoose.data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SubService({ params }: PageProps) {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);
  console.log("Service Service : ", service, "slug:", slug);

  if (!service) {
    notFound();
  }

  const apiSolutions = (service.templateData?.solutionsWeDeliver?.cards ??
    []) as Partial<SolutionItem>[];
  const mergedSolutions: SolutionItem[] = apiSolutions.length
    ? apiSolutions.map((item, index) => ({
        title: item.title ?? solutionData[index]?.title ?? "",
        description: item.description ?? solutionData[index]?.description ?? "",
        image: solutionData[index]?.image ?? item.image ?? "/images/ai.webp",
      }))
    : solutionData;

  const sectionTitle =
    service.templateData?.solutionsWeDeliver?.title ??
    "Cybersecurity Solutions";
  const sectionDescription =
    service.templateData?.solutionsWeDeliver?.description ??
    "Our cybersecurity services combine people, process, and technology to reduce risk and ensure compliance. From 24/7 monitoring to identity access and policy management, we help you build a resilient security posture against evolving threats.";

  const faqItems: FAQItem[] =
    service.templateData?.faq?.length > 0 ? service.templateData.faq : faqData;

  const faqSectionTitle = `${service.name} FAQ's`;
  const faqSectionDescription = service.templateData?.faqDescription ?? "";
  const faqSectionLink = service.templateData?.faqLink ?? "#";

  const apiWhyChoose =
    service.templateData?.whyChooseTechionik as Partial<WhyChooseTechionik> | undefined;
  const whyChooseDataToUse: WhyChooseTechionik = {
    title: apiWhyChoose?.title ?? whyChooseData.title,
    description: apiWhyChoose?.description ?? whyChooseData.description,
    items:
      apiWhyChoose?.items?.slice(0, 4).map((item) => ({
        title: item?.title ?? "",
        description: item?.description ?? "",
      })) ?? whyChooseData.items,
  };

  const serviceCta = service.templateData?.cta;
  const ctaTitle = serviceCta?.title ?? "Talk to one of our experts";
  const ctaDescription =
    serviceCta?.description ??
    "Looking to digitally transform your business? Get in touch to see how we can help you.";
  const ctaImage = serviceCta?.image ?? "/images/ctaPerson.webp";
  const ctaButton1 =
    serviceCta?.buttonLabel && serviceCta?.buttonUrl
      ? {
          text: serviceCta.buttonLabel,
          href: serviceCta.buttonUrl,
          icon: "/icons/calendar.svg",
        }
      : {
          text: "Book A Meeting",
          href: "/contact",
          icon: "/icons/calendar.svg",
        };

  return (
    <div className="subService-page">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <Badge
            text={service.name.toUpperCase()}
            showIcon
            icon="/icons/compliant-primary.svg"
            radius="full"
            size="medium"
            className="border border-[#E0E7FF] text-primary"
          />
          <h1 className="text-primary">{service.title}</h1>
          <p className="text-neutral-dark">
            We deliver proactive, intelligent cybersecurity solutions that help
            you prevent, detect, and respond to threats. Designed to protect
            what matters most -your people, data, and reputation.
          </p>
          <div className="buttons-optional flex flex-col md:flex-row gap-6">
            <Button
              text="Talk to an Expert"
              radius="full"
              size="large"
              variant="gradient"
              href="/contact-us"
            />
          </div>
        </div>

        <div className="relative  xl:w-120 h-100 overflow-hidden rounded-2xl">
          <Image
            src="/images/ai.webp"
            alt="AI"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <Clients />
      </section>

      <section
        id="our-solutions"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <div
          className="flex
          md:flex-row md:justify-between md:items-end pb-10
          flex-col gap-5 items-start"
        >
          <div className="w-2/3">
            <h2 className="text-secondary">{sectionTitle}</h2>
            <p
              className="text-neutral-dark pt-2"
              dangerouslySetInnerHTML={{ __html: sectionDescription }}
            />
          </div>
        </div>
        {/* Passing the merged API content plus local images/button behavior */}
        <Solutions data={mergedSolutions} />
      </section>

      <section className="">
        <ReusableCTA
          variant="enterprise"
          title="Secure AI for the Modern Enterprise."
          bgImage="/images/entrepriseCTA.webp"
          cardImage="/images/security-card.webp"
        />
      </section>

      <section
        id="testimonial"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <ClientTestimonial />
      </section>

      <section
        id="chooseUs"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        {/* <WhyChooseUs /> */}
        <WhyChooseUs data={whyChooseDataToUse} />
      </section>

      <section
        id="industries"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Industries />
      </section>

      <section
        id="certificates"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Certificates />
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
        id="blogs"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Blogs />
      </section>

      <section
        id="faqs"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        {/* Header Section - Managed at the calling place */}
        <div className="flex md:flex-row md:justify-between md:items-end pb-10 flex-col gap-5 items-start">
          <div className="max-w-2xl">
            <h2 className="text-secondary text-3xl font-bold">
              {faqSectionTitle}
            </h2>
            {faqSectionDescription ? (
              <p className="text-neutral-dark pt-2">{faqSectionDescription}</p>
            ) : null}
          </div>

          <div className="flex gap-2 border-b-2 border-black pb-1">
            <Link
              href={faqSectionLink}
              className="text-black font-semibold font-poppins"
            >
              View All FAQ&apos;s
            </Link>
            <Image
              src="/icons/arrowRight.svg"
              alt="arrow"
              width={16}
              height={24}
            />
          </div>
        </div>

        {/* The Component - Only handles the Accordion */}
        <FAQs data={faqItems} />
      </section>

      <section
        id="cta"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <CTA
          title={ctaTitle}
          description={ctaDescription}
          image={ctaImage || "/images/ctaPerson.webp"}
          showBadge={true}
          button1={ctaButton1}
        />
      </section>
    </div>
  );
}
