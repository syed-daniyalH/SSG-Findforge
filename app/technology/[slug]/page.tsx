import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import CTA from "@/components/ui/cta";
import { getMenuStructure } from "@/lib/api/menu/utils/buildnavlinks";
import { notFound } from "next/navigation";

export default async function TechnologyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const technologyMenu = (await getMenuStructure()).find(
    (item) => item.type.slug === "technology",
  );
  const technologyItem = technologyMenu?.menu.find(
    (item) => item.slug?.toLowerCase() === slug.toLowerCase().trim(),
  );

  if (!technologyItem) {
    notFound();
  }

  return (
    <div className="technology-detail-page">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20">
        <div className="max-w-3xl space-y-6">
          <Badge
            text={technologyItem.name}
            showIcon
            icon="/icons/compliant-primary.svg"
            radius="full"
            size="medium"
            className="border border-[#E0E7FF] text-primary"
          />
          <h1 className="text-primary">{technologyItem.name}</h1>
          <p className="text-neutral-dark">
            {technologyItem.metaDescription ||
              `This route is connected to the Techionik CMS menu. A dedicated technology detail API is not exposed yet, so the frontend is rendering the menu-backed shell for ${technologyItem.name}.`}
          </p>
          <div className="buttons-optional flex flex-col md:flex-row gap-6">
            <Button
              text="Contact us"
              radius="full"
              size="large"
              variant="gradient"
              href="/contact-us"
            />
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
            href: "/contact-us",
            icon: "/icons/calendar.svg",
          }}
        />
      </section>
    </div>
  );
}
