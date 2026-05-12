import Badge from "@/components/ui/badge";
import CTA from "@/components/ui/cta";
import { getMenuStructure } from "@/lib/api/menu/utils/buildnavlinks";
import { buildMenuSectionHref } from "@/lib/routes";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TechnologyPage() {
  const technologyMenu = (await getMenuStructure()).find(
    (item) => item.type.slug === "technology",
  );

  if (!technologyMenu) {
    notFound();
  }

  return (
    <div className="technology-page">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20">
        <div className="max-w-3xl space-y-6">
          <Badge
            text="Technology"
            showIcon
            icon="/icons/compliant-primary.svg"
            radius="full"
            size="medium"
            className="border border-[#E0E7FF] text-primary"
          />
          <h1 className="text-primary">Technology focus areas from the shared CMS</h1>
          <p className="text-neutral-dark">
            This page is powered by the same Techionik menu structure as the
            rest of the connected frontend, so new technology items can surface
            here without hardcoding them into the repo.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologyMenu.menu.map((item) => (
            <Link
              key={item.subTypeId}
              href={buildMenuSectionHref("technology", item.slug)}
              className="border border-[#E2E8F0] rounded-2xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-secondary">{item.name}</h3>
              <p className="text-neutral-dark pt-3">
                {item.metaDescription ||
                  `Explore the ${item.name} route provided through the Techionik CMS menu.`}
              </p>
            </Link>
          ))}
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
