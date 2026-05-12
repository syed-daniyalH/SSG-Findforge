import FAQs from "@/components/sections/accordions";
import ClientTestimonial from "@/components/sections/clientsTestimonial";
import DesignPrincipleSection from "@/components/sections/design-principle";
import Stories from "@/components/sections/featuredStories";
import LifeCycle from "@/components/sections/lifecycle";
import Button from "@/components/ui/button";
import Certificates from "@/components/ui/certificates";
import Clients from "@/components/ui/clients";
import CTA from "@/components/ui/cta";
import Icon from "@/components/ui/icon";
import Impacts from "@/components/ui/impact";
import { designPrincipleHowWeWorkData } from "@/content/designPrincipleServiceData";

const HowWeWork = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <h1 className="text-primary">
            How We Turn Ideas Into Scalable Digital Solutions
          </h1>
          <p className="text-neutral-dark">
            At SSG Mindforge, we combine strategic thinking, advanced
            engineering, and agile execution to transform complex ideas into
            powerful digital solutions.
          </p>
          <div className="buttons-optional flex flex-col md:flex-row gap-6">
            <Button
              text="Start Your Project"
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
              className="bg-white border border-primary text-primary font-semibold font-poppins"
            />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-6">
          <div className="absolute top-10 bottom-10 left-9 w-0.5 bg-[#E5E5E5] -z-10" />

          {/* ITEM 1 */}
          <div className="group relative flex items-center gap-4 p-5 border-2 border-[#E5E5E5] bg-white rounded-2xl w-[90%] lg:w-full transition-all hover:border-primary">
            <Icon
              src="/icons/light.svg"
              alt="Light"
              className="border border-[#F5F5F5] bg-white"
              iconClassName="px-2 py-2"
            />
            <div>
              <h3 className="font-bold">Idea</h3>
              <p className="text-[#333333]">Conceptualization</p>
            </div>
            <div className="w-4 h-4 bg-primary rounded-full absolute top-0 -translate-y-1/2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm" />
          </div>

          {/* ITEM 2 */}
          <div className="group relative flex items-center gap-4 p-5 border-2 border-[#E5E5E5] bg-white rounded-2xl w-[90%] lg:w-full ml-7 transition-all hover:border-primary">
            <Icon
              src="/icons/design.svg"
              alt="Design"
              className="border border-[#F5F5F5] bg-white"
              iconClassName="px-2 py-2"
            />
            <div>
              <h3 className="font-bold">Design</h3>
              <p className="text-[#333333]">UI/UX Architecture</p>
            </div>
            <div className="w-4 h-4 bg-primary rounded-full absolute top-0 -translate-y-1/2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm" />
          </div>

          {/* ITEM 3 */}
          <div className="group relative flex items-center gap-4 p-5 border-2 border-[#E5E5E5] bg-white rounded-2xl w-[90%] lg:w-full ml-14 transition-all hover:border-primary">
            <Icon
              src="/icons/development.svg"
              alt="Development"
              className="border border-[#F5F5F5] bg-white"
              iconClassName="px-2 py-2"
            />
            <div>
              <h3 className="font-bold">Development</h3>
              <p className="text-[#333333]">Engineering & Build</p>
            </div>
            <div className="w-4 h-4 bg-primary rounded-full absolute top-0 -translate-y-1/2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm" />
          </div>

          {/* ITEM 4 */}
          <div className="group relative flex items-center gap-4 p-5 border-2 border-[#E5E5E5] bg-white rounded-2xl w-[90%] lg:w-full ml-7 transition-all hover:border-primary">
            <Icon
              src="/icons/deployment.svg"
              alt="Deployment"
              className="border border-[#F5F5F5] bg-white"
              iconClassName="px-2 py-2"
            />
            <div>
              <h3 className="font-bold">Deployment</h3>
              <p className="text-[#333333]">Cloud Launch</p>
            </div>
            <div className="w-4 h-4 bg-primary rounded-full absolute top-0 -translate-y-1/2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm" />
          </div>

          {/* ITEM 5 */}
          <div className="group relative flex items-center gap-4 p-5 border-2 border-[#E5E5E5] bg-white rounded-2xl w-[90%] lg:w-full transition-all hover:border-primary">
            <Icon
              src="/icons/growth.svg"
              alt="Growth"
              className="border border-[#F5F5F5] bg-white"
              iconClassName="px-2 py-2"
            />
            <div>
              <h3 className="font-bold">Growth</h3>
              <p className="text-[#333333]">Optimization & Scale</p>
            </div>
            <div className="w-4 h-4 bg-primary rounded-full absolute top-0 -translate-y-1/2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm" />
          </div>
        </div>
      </section>

      <section id="clients" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <Clients />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <div className="">
          <h2 className="text-secondary">SSG Principles That Power Every Client Partnership</h2>
          <p className="text-neutral-dark pt-2">
            We do not believe in complicated playbooks or hidden processes. What keeps our teams sharp and our clients confident are a few principles we never compromise on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-4">
          <div className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-4xl">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Icon src="/icons/InPlus.svg" alt="InPlus" iconClassName="px-3 py-3" bgColor="white" className="border border-[#E5E5E5]" />
              <h3 className="">Strategy First</h3>
              <p className="">We begin by understanding your business goals, ensuring every solution aligns with real-world impact and provides clear value.</p>
            </div>
          </div>

          <div className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-4xl">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Icon src="/icons/work-people.svg" alt="Work People" iconClassName="px-3 py-3" bgColor="white" className="border border-[#E5E5E5]" />
              <h3 className="">Collaborative Development</h3>
              <p className="">Our team works closely with clients throughout the process, ensuring transparency, flexible adjustments, and seamless delivery.</p>
            </div>
          </div>

          <div className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-4xl">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Icon src="/icons/architecture.svg" alt="Architecture" iconClassName="px-3 py-3" bgColor="white" className="border border-[#E5E5E5]" />
              <h3 className="">Scalable Architecture</h3>
              <p className="">We design systems that grow with your business, adapt to future technological needs, and operate smoothly under load.</p>
            </div>
          </div>

                    <div className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-4xl">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Icon src="/icons/architecture.svg" alt="Architecture" iconClassName="px-3 py-3" bgColor="white" className="border border-[#E5E5E5]" />
              <h3 className="">Scalable Architecture</h3>
              <p className="">We design systems that grow with your business, adapt to future technological needs, and operate smoothly under load.</p>
            </div>
          </div>

                    <div className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-4xl">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Icon src="/icons/architecture.svg" alt="Architecture" iconClassName="px-3 py-3" bgColor="white" className="border border-[#E5E5E5]" />
              <h3 className="">Scalable Architecture</h3>
              <p className="">We design systems that grow with your business, adapt to future technological needs, and operate smoothly under load.</p>
            </div>
          </div>

                    <div className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-4xl">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Icon src="/icons/architecture.svg" alt="Architecture" iconClassName="px-3 py-3" bgColor="white" className="border border-[#E5E5E5]" />
              <h3 className="">Scalable Architecture</h3>
              <p className="">We design systems that grow with your business, adapt to future technological needs, and operate smoothly under load.</p>
            </div>
          </div>

                    <div className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-4xl">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Icon src="/icons/architecture.svg" alt="Architecture" iconClassName="px-3 py-3" bgColor="white" className="border border-[#E5E5E5]" />
              <h3 className="">Scalable Architecture</h3>
              <p className="">We design systems that grow with your business, adapt to future technological needs, and operate smoothly under load.</p>
            </div>
          </div>

           <CTA
          title="Talk to one of our experts"
          description="Looking to digitally transform your business? Get in touch to see how we can help you."
          cardCTA={true}
          button1={{
            text: "Book A Meeting",
            href: "/contact",
            icon: "/icons/calendar.svg",
          }}
        />
        </div>
      </section>

      <section id="impacts" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <Impacts />
      </section>

      <section id="service-design-principle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
          <div className="w-full md:w-[46%]">
            <h2 className="text-secondary">Building Trust from Day One: How We Onboard New Clients</h2>
            <p className="text-neutral-dark pt-2">
              Every great partnership starts with alignment. That&apos;s why our client onboarding process focuses on clarity and trust from the very beginning.
            </p>
          </div>
        </div>
        <DesignPrincipleSection data={designPrincipleHowWeWorkData} hasIcon={false} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <div className="">
          <h2 className="text-secondary">Our Approach to Building Technology</h2>
          <p className="text-neutral-dark pt-2">
            Frameworks and mindsets designed for efficiency, resilience, and measurable success.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center mt-4">
          <div className="w-full md:w-94.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-4xl">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Icon src="/icons/InPlus.svg" alt="InPlus" iconClassName="px-3 py-3" bgColor="white" className="border border-[#E5E5E5]" />
              <h3 className="">Strategy First</h3>
              <p className="">We begin by understanding your business goals, ensuring every solution aligns with real-world impact and provides clear value.</p>
            </div>
          </div>

          <div className="w-full md:w-94.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-4xl">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Icon src="/icons/work-people.svg" alt="Work People" iconClassName="px-3 py-3" bgColor="white" className="border border-[#E5E5E5]" />
              <h3 className="">Collaborative Development</h3>
              <p className="">Our team works closely with clients throughout the process, ensuring transparency, flexible adjustments, and seamless delivery.</p>
            </div>
          </div>

          <div className="w-full md:w-94.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-4xl">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Icon src="/icons/architecture.svg" alt="Architecture" iconClassName="px-3 py-3" bgColor="white" className="border border-[#E5E5E5]" />
              <h3 className="">Scalable Architecture</h3>
              <p className="">We design systems that grow with your business, adapt to future technological needs, and operate smoothly under load.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
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

      <section id="lifecycle">
        <LifeCycle />
      </section>

      <section id="stories" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <Stories />
      </section>

      <section id="testimonial" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <ClientTestimonial />
      </section>

      <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <Certificates />
      </section>

      <section id="faqs" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
        <FAQs />
      </section>
    </>
  );
};

export default HowWeWork;

