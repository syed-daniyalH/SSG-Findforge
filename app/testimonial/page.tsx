import { Testimonial, TestimonialCard } from "@/components/cards/testimonial";
import Badge from "@/components/ui/badge";
import CTA from "@/components/ui/cta";

export default function Testimonials() {
  return (
    <section className="testimonial-page ">
      <div className="flex flex-col items-center gap-2 my-10 pt-40">
        <Badge
          text="Client Testimonials"
          size="large"
          radius="full"
          icon="/icons/stars.svg"
          showIcon={true}
          className="bg-white text-primary font-semibold font-poppins border border-[#E0E7FF]"
        />
        <h1 className="text-primary">Our Success Stories</h1>
        <p className="text-[#333333] px-10 text-center">
          Hear from industry peers like you and discover how we co-create
          meaningful partnerships with each client.
        </p>
      </div>

      <div
        id="testimonial"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <div className="">
          <div className="hidden md:block">
            <Testimonial
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial3.webp"
              rating={5}
              lineBar="/icons/lineBar.svg"
            />
          </div>
          <div className="md:hidden">
            <TestimonialCard
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial3.webp"
              rating={5}
              lineBar="/icons/lineBar.svg"
              // showLogo
              // logo="/images/pergola.webp"
            />
          </div>

          <div
            className="flex flex-col gap-5 mt-3
            md:flex-row"
          >
            <TestimonialCard
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial2.webp"
              rating={5}
              lineBar="/icons/lineBar.svg"
              // showLogo
              // logo="/images/pergola.webp"
            />

            <TestimonialCard
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial1.webp"
              rating={5}
              lineBar="/icons/lineBar.svg"
              // showLogo
              // logo="/images/pergola.webp"
            />
          </div>
        </div>

        <div className="">
          <div className="hidden md:block">
            <Testimonial
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial3.webp"
              rating={5}
              position="right"
              lineBar="/icons/lineBar.svg"
            />
          </div>
          <div className="md:hidden">
            <TestimonialCard
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial3.webp"
              rating={5}
              lineBar="/icons/lineBar.svg"
              // showLogo
              // logo="/images/pergola.webp"
            />
          </div>

          <div
            className="flex flex-col gap-5 mt-3
            md:flex-row"
          >
            <TestimonialCard
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial2.webp"
              rating={5}
              lineBar="/icons/lineBar.svg"
              // showLogo
              // logo="/images/pergola.webp"
            />

            <TestimonialCard
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial1.webp"
              rating={5}
              lineBar="/icons/lineBar.svg"
              // showLogo
              // logo="/images/pergola.webp"
            />
          </div>
        </div>

        <div className="">
          <div className="hidden md:block">
            <Testimonial
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial3.webp"
              rating={5}
              lineBar="/icons/lineBar.svg"
            />
          </div>
          <div className="md:hidden">
            <TestimonialCard
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial3.webp"
              rating={5}
              lineBar="/icons/lineBar.svg"
              // showLogo
              // logo="/images/pergola.webp"
            />
          </div>

          <div
            className="flex flex-col gap-5 mt-3
            md:flex-row"
          >
            <TestimonialCard
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial2.webp"
              rating={5}
              lineBar="/icons/lineBar.svg"
              // showLogo
              // logo="/images/pergola.webp"
            />

            <TestimonialCard
              name="John Doe"
              title="AI & Automation Engineer"
              quote="Kodehash Technologies delivered exceptional UX/UI design, completely revamping our website. The fresh look and user-friendly interface have boosted engagement and conversions. The fresh look and user-friendly interface have boosted engagement and conversions."
              avatar="/images/testimonial1.webp"
              rating={5}
              lineBar="/icons/lineBar.svg"
              // showLogo
              // logo="/images/pergola.webp"
            />
          </div>
        </div>
      </div>

      <div
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
      </div>
    </section>
  );
}

