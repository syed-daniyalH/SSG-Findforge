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
import { getMenuStructure } from "@/lib/api/menu/utils/buildnavlinks";
import { getSubServiceByRoute } from "@/lib/api/subServices";
import { buildMenuChildHref, normalizeComparableSlug } from "@/lib/routes";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { SolutionItem } from "@/types/solutions";
import { FAQItem } from "@/types/faq";
import { WhyChooseTechionik } from "@/types/whychoose.type";
import { faqData } from "@/content/faq.data";
import Link from "next/link";
import { whyChooseData } from "@/content/whychoose.data";

interface PageProps {
  params: Promise<{ slug: string; childSlug: string }>;
}

export default async function NestedSubServicePage({ params }: PageProps) {
  const { slug: parentSlug, childSlug } = await params;
  const normalizedParentSlug = normalizeComparableSlug(parentSlug);
  const normalizedChildSlug = normalizeComparableSlug(childSlug);
  const subService = await getSubServiceByRoute(parentSlug, childSlug);

  const servicesMenu = (await getMenuStructure()).find(
    (item) => item.type.slug === "services",
  );
  const menuCategory = servicesMenu?.menu.find(
    (item) => normalizeComparableSlug(item.slug) === normalizedParentSlug,
  );
  const menuChild = menuCategory?.children?.find(
    (child) => normalizeComparableSlug(child.slug) === normalizedChildSlug,
  );
  const isMenuLinked = Boolean(menuChild);
  const parentMatchesApi =
    normalizeComparableSlug(subService?.service?.slug) === normalizedParentSlug;

  const canonicalChildSlug = subService?.slug ?? menuChild?.slug;
  const requestedSlug = childSlug.toLowerCase().trim();

  if (
    menuCategory &&
    canonicalChildSlug &&
    normalizeComparableSlug(canonicalChildSlug) === normalizedChildSlug &&
    canonicalChildSlug.toLowerCase().trim() !== requestedSlug
  ) {
    redirect(
      buildMenuChildHref("services", menuCategory.slug, canonicalChildSlug),
    );
  }

  if ((!subService && !menuChild) || (subService && !parentMatchesApi && !isMenuLinked)) {
    notFound();
  }

  const displayName = subService?.name ?? menuChild?.name ?? "Service";
  const displayTitle = subService?.title ?? menuChild?.name ?? "Service";
  const displayDescription =
    subService?.shortDescription ||
    menuChild?.metaDescription ||
    `This route is connected to the shared Techionik CMS menu. A dedicated detail entry for ${displayName} is not available in the sub-services API yet, so this page is rendering a menu-backed fallback.`;
  const displayImage =
    subService?.imageUrl ||
    menuChild?.imageUrl ||
    menuCategory?.imageUrl ||
    "/images/ai.webp";
  const templateData = subService?.templateData;

  const apiSolutions = (templateData?.solutionsWeDeliver?.cards ??
    []) as Partial<SolutionItem>[];
  const mergedSolutions: SolutionItem[] = apiSolutions.length
    ? apiSolutions.map((item, index) => ({
        title: item.title ?? solutionData[index]?.title ?? "",
        description: item.description ?? solutionData[index]?.description ?? "",
        image: solutionData[index]?.image ?? item.image ?? "/images/ai.webp",
      }))
    : solutionData;

  const sectionTitle =
    templateData?.solutionsWeDeliver?.title ?? `${displayName} Solutions`;
  const sectionDescription =
    templateData?.solutionsWeDeliver?.description ??
    `Explore how ${displayName} fits into the ${menuCategory?.name ?? "shared services"} structure provided by the Techionik CMS.`;

  const templateFaqItems = (templateData?.faq ?? []) as FAQItem[];
  const faqItems: FAQItem[] = templateFaqItems.length > 0 ? templateFaqItems : faqData;

  const faqSectionTitle = `${displayName} FAQ's`;
  const faqSectionDescription = "";
  const faqSectionLink = "#";

  const apiWhyChoose = templateData?.whyChooseTechionik as
    | Partial<WhyChooseTechionik>
    | undefined;
  const whyChooseDataToUse: WhyChooseTechionik = {
    title: apiWhyChoose?.title ?? whyChooseData.title,
    description: apiWhyChoose?.description ?? whyChooseData.description,
    items:
      apiWhyChoose?.items?.slice(0, 4).map((item) => ({
        title: item?.title ?? "",
        description: item?.description ?? "",
      })) ?? whyChooseData.items,
  };

  const subServiceCta = templateData?.cta;
  const ctaTitle = subServiceCta?.title ?? "Talk to one of our experts";
  const ctaDescription =
    subServiceCta?.description ??
    "Looking to digitally transform your business? Get in touch to see how we can help you.";
  const ctaImage = subServiceCta?.image ?? "/images/ctaPerson.webp";
  const ctaButton1 =
    subServiceCta?.buttonLabel && subServiceCta?.buttonUrl
      ? {
          text: subServiceCta.buttonLabel,
          href: subServiceCta.buttonUrl,
          icon: "/icons/calendar.svg",
        }
      : {
          text: "Book A Meeting",
          href: "/contact-us",
          icon: "/icons/calendar.svg",
        };

  return (
    <div className="subService-page">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <Badge
            text={displayName.toUpperCase()}
            showIcon
            icon="/icons/compliant-primary.svg"
            radius="full"
            size="medium"
            className="border border-[#E0E7FF] text-primary"
          />
          <h1 className="text-primary">{displayTitle}</h1>
          <p className="text-neutral-dark">
            {displayDescription}
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

        <div className="relative xl:w-120 h-100 overflow-hidden rounded-2xl">
          <Image
            src={displayImage}
            alt={displayName}
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
