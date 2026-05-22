import FAQs from "@/components/sections/accordions";
import ClientTestimonial from "@/components/sections/clientsTestimonial";
import Stories from "@/components/sections/featuredStories";
import Button from "@/components/ui/button";
import Certificates from "@/components/ui/certificates";
import Clients from "@/components/ui/clients";
import CTA from "@/components/ui/cta";
import Image from "next/image";

const stages = [
  ["Idea", "Conceptualization", "/icons/light.svg"],
  ["Design", "UI/UX Architecture", "/icons/design.svg"],
  ["Development", "Engineering & Build", "/icons/development.svg"],
  ["Deployment", "Cloud Launch", "/icons/deployment.svg"],
  ["Growth", "Optimization & Scale", "/icons/growth.svg"],
];

const principles = [
  ["Strategy First", "Every solution starts with business goals and measurable outcomes."],
  ["Collaborative Development", "Transparent delivery, fast feedback loops, and flexible improvements."],
  ["Scalable Architecture", "Systems designed to grow with your business and future needs."],
  ["Security by Design", "Security, privacy, and compliance considered from the first sprint."],
];

const lifecycle = [
  ["Discovery", "/images/meeting.webp"],
  ["Planning", "/images/office.webp"],
  ["Execution", "/images/codingMaster.webp"],
  ["Launch", "/images/laptop.webp"],
];

export default function HowWeWork() {
  return (
    <main className="how-we-work-page">
      <section className="mx-auto grid max-w-[1120px] grid-cols-1 gap-12 px-5 pt-24 sm:px-6 lg:grid-cols-[1fr_430px] lg:px-8">
        <div className="space-y-6">
          <p className="font-poppins text-[11px] font-semibold text-primary">How We Work</p>
          <h1 className="max-w-[560px] text-[38px] font-bold leading-[1.08] text-primary md:text-[50px]">
            How We Turn Ideas Into Scalable Digital Solutions
          </h1>
          <p className="max-w-[560px] font-poppins text-[15px] leading-7 text-neutral-dark">
            At SSG Mindforge, we combine strategic thinking, advanced
            engineering, and agile execution to transform complex ideas into
            powerful digital solutions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button text="Start Your Project" radius="full" size="large" variant="gradient" href="/contact" />
            <Button
              text="Speak to an Expert"
              radius="full"
              size="large"
              href="/contact"
              showIcon
              icon="/icons/calendar.svg"
              className="border border-primary bg-white font-poppins font-semibold text-primary"
            />
          </div>
        </div>

        <div className="relative space-y-4">
          {stages.map(([title, subtitle, icon], index) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-[12px] border border-[#E5EAF2] bg-white p-4 shadow-sm"
              style={{ marginLeft: `${index === 1 || index === 3 ? 28 : index === 2 ? 56 : 0}px` }}
            >
              <div className="relative h-10 w-10 rounded-[8px] border border-[#EEF2F7] bg-white p-2">
                <Image src={icon} alt="" fill className="object-contain p-2" />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-secondary">{title}</h3>
                <p className="font-poppins text-[12px] text-neutral-dark">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-10 sm:px-6 lg:px-8">
        <Clients />
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-10 sm:px-6 lg:px-8">
        <div className="max-w-[620px]">
          <h2 className="text-[28px] font-bold leading-tight text-secondary">
            SSG Principles That Power Every Client Partnership
          </h2>
          <p className="pt-3 font-poppins text-[14px] leading-6 text-neutral-dark">
            We keep teams sharp and clients confident with principles we never
            compromise on.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {principles.map(([title, description]) => (
            <article key={title} className="rounded-[12px] border border-[#E5EAF2] bg-[#FAFAFA] p-6">
              <h3 className="text-[16px] font-bold text-secondary">{title}</h3>
              <p className="pt-3 font-poppins text-[13px] leading-6 text-neutral-dark">{description}</p>
            </article>
          ))}
          <CTA
            title="Talk to one of our experts"
            description="Looking to digitally transform your business? Get in touch to see how we can help you."
            cardCTA={true}
            button1={{ text: "Book A Meeting", href: "/contact", icon: "/icons/calendar.svg" }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-10 sm:px-6 lg:px-8">
        <div className="max-w-[560px]">
          <h2 className="text-[28px] font-bold leading-tight text-secondary">
            Building Trust from Day One
          </h2>
          <p className="pt-3 font-poppins text-[14px] leading-6 text-neutral-dark">
            Every partnership starts with alignment, clarity, and shared
            expectations.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          {lifecycle.map(([title, image], index) => (
            <article key={title} className="grid gap-5 border-b border-[#E8EDF4] pb-6 md:grid-cols-[240px_1fr]">
              <div className="relative h-32 overflow-hidden rounded-[10px]">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
              <div>
                <span className="font-poppins text-[12px] font-semibold text-primary">0{index + 1}</span>
                <h3 className="pt-2 text-[18px] font-bold text-secondary">{title}</h3>
                <p className="pt-2 font-poppins text-[13px] leading-6 text-neutral-dark">
                  We align on scope, risks, timelines, and success metrics so
                  execution stays focused from start to finish.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-10 sm:px-6 lg:px-8">
        <CTA
          title="AI-Powered Engineering for Scalable Growth"
          description="We build scalable AI solutions tailored for your business."
          backgroundImage="/images/element.webp"
          image="/images/ctaRing.webp"
          button1={{ text: "Book Your Demo", href: "/services/ai", icon: "/icons/calendar.svg" }}
          button2={{ text: "Talk to Expert", href: "/contact" }}
        />
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-10 sm:px-6 lg:px-8">
        <Stories />
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-10 sm:px-6 lg:px-8">
        <ClientTestimonial />
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-10 sm:px-6 lg:px-8">
        <Certificates />
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-10 sm:px-6 lg:px-8">
        <FAQs />
      </section>
    </main>
  );
}
