import Mission from "@/components/cards/missionCard";
import ClientTestimonial from "@/components/sections/clientsTestimonial";
import Hero from "@/components/sections/hero";
import Teams from "@/components/sections/team";
import Values from "@/components/sections/value";
import Certificates from "@/components/ui/certificates";
import Clients from "@/components/ui/clients";
import CTA from "@/components/ui/cta";
import Icon from "@/components/ui/icon";
import Impacts from "@/components/ui/impact";


export default function About() {
  return (
    <div className="about-page ">

      <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10 pt-20">
        <Hero
          badge={{
            text: "About Our Company",
            size: "medium",
            radius: "full",
            icon: "/icons/health.svg",
            showIcon: true,
            className: "bg-white text-[#374151] border border-[#FFFFFF99] font-semibold font-poppins",
          }}
          title="Powering the world of work."
          description="A leading provider of sector-focused SaaS workflow software helping organisations work smarter, faster, and more efficiently."
          banner={true}
          image={{
            src: "/images/about-banner.webp",
            alt: "Doctors",
            className: "scale-x-[-1]",
          }}
        />
      </section>

      <section id="impacts" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10">
        <div className="flex flex-col items-center gap-6 mb-14">
          <Icon src="/icons/InPlus.svg" alt="InPlus" bgColor="white" iconSize={25}/>
          <h2 className="">Our Purpose</h2>
          <p className="text-[#4B5563] text-center w-[80%]">
            Our mission is to transform the world of work through powerful software and exceptional
            people. By combining deep industry expertise with advanced technology, we aim to help
            organizations operate more efficiently while contributing to a fairer and more inclusive society.
          </p>
        </div>
        <Impacts />
      </section>

      <section id="our-mission" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10">
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

      <section id="clients" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10">
        <Clients />
      </section>

      <section id="cta" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10">
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

      <section id="values" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10">
        <Values />
      </section>

      <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10">
        <Certificates />
      </section>

      <section id="teams" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10">
        <Teams />
      </section>

      <section id="testimonial" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10">
        <ClientTestimonial />
      </section>

      <section id="expert-cta" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 my-10">
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
