import Stories from "@/components/sections/featuredStories";
import Hero from "@/components/sections/hero";
import Industries from "@/components/sections/industries";
import Process from "@/components/sections/process";
import Services from "@/components/sections/services";
import WhyChooseUs from "@/components/ui/chooseUs";
import Clients from "@/components/ui/clients";
import CTA from "@/components/ui/cta";
import Blogs from "./blog/page";
import ClientTestimonial from "@/components/sections/clientsTestimonial";
import Impacts from "@/components/ui/impact";
import { whyChooseData } from "@/content/whychoose.data";

export default function Home() {

  return (
    <div className="home-page bg-[#F8FAFC]">
      <section
        id="hero"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20"
      >
        <Hero
          badge={{
            text: "AI-Powered Tender Automation",
            size: "medium",
            radius: "full",
            icon: "/icons/stars.svg",
            showIcon: true,
            className: "bg-white text-primary font-semibold font-poppins",
          }}
          title="AI-Powered Engineering for Scalable Growth"
          description="We build AI-driven systems and scalable software that automate operations and accelerate growth."
          buttons={[
            {
              text: "Explore AI Services",
              href: "/services/ai",
              size: "large",
              radius: "full",
              className:
                "bg-white text-primary font-semibold font-poppins transition-shadow duration-300 hover:shadow-soft",
            },
            {
              text: "Speak to an Expert",
              href: "/contact",
              icon: "/icons/chat.svg",
              iconMode: "static",
              showIcon: true,
              size: "large",
              radius: "full",
              variant: "glass",
              className:
                "border border-primary text-primary font-semibold font-poppins",
            },
          ]}
          image={{
            src: "/images/hero-graphic.webp",
            alt: "Hero Graphic",
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
        id="industries"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 mt-10 mb-0"
      >
        <Industries />
      </section>

      <section id="chooseUs" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 mt-6 mb-10">
        <WhyChooseUs data={whyChooseData} className="pb-10"/>
      </section>

      <section
        id="cta"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
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
        id="our-services"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Services />
      </section>

      <section
        id="process"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Process />
      </section>

      <section
        id="stories"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Stories />
      </section>

      <section
        id="blogs"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Blogs />
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

