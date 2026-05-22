import FAQs from "@/components/sections/accordions";
import ClientTestimonial from "@/components/sections/clientsTestimonial";
import Stories from "@/components/sections/featuredStories";
import Button from "@/components/ui/button";
import Certificates from "@/components/ui/certificates";
import Clients from "@/components/ui/clients";
import CTA from "@/components/ui/cta";
import Image from "next/image";
import Link from "next/link";

const stages = [
  ["Idea", "Conceptualization", "/icons/light.svg"],
  ["Design", "UI/UX Architecture", "/icons/design.svg"],
  ["Development", "Engineering & Build", "/icons/development.svg"],
  ["Deployment", "Cloud Launch", "/icons/deployment.svg"],
  ["Growth", "Optimization & Scale", "/icons/growth.svg"],
];

const principles = [
  ["Transparency", "You will always know what is happening, why it is happening, and what comes next.", "/icons/accountibility.svg"],
  ["Collaboration", "We build with you, not just for you. Every decision is shaped together.", "/icons/hand-shake.svg"],
  ["Speed", "We keep teams moving fast without losing clarity, quality, or control.", "/icons/deploy.svg"],
  ["Security", "Compliance is not an afterthought. From healthcare to finance, we meet the highest standards.", "/icons/security-check.svg"],
  ["No Vendor Lock-in", "Your solution remains yours and gives you control, portability, and clarity.", "/icons/integrity.svg"],
  ["Innovation", "We use modern tools and AI carefully to create smarter, future-ready outcomes.", "/icons/bulb.svg"],
  ["Risk Management", "We identify risks early and plan around them, so projects stay on track.", "/icons/optimization.svg"],
];

const onboardingSteps = [
  ["Understanding Your Requirements", "The steps to defining your goals, your technical requirements, and the business outcome we need to achieve.", "/images/meeting.webp"],
  ["Protecting Your Idea", "Your vision stays secure. We sign NDAs and protect your concept across every stage of work.", "/images/security-card.webp"],
  ["Deep Consultation", "Our experts sit with your team to explore opportunities, validate priorities, and highlight implementation risks.", "/images/office.webp"],
  ["A Clear Proposal", "You receive a straightforward proposal covering scope, timelines, and costs so every decision is clear before work starts.", "/images/laptop.webp"],
];

const developmentLifecycle = [
  ["1. Discovery & Planning", ["Analyse your business needs, identify challenges, and define the project roadmap.", "Business analysis", "Market research", "Project scope definition"]],
  ["2. Solution Architecture", ["Our architecture designs the technical framework required to deliver scalable digital products.", "System architecture", "Technology selection", "Infrastructure planning"]],
  ["3. UI/UX Design", ["We create intuitive and appealing interfaces that align with your users and business goals.", "Wireframes", "Interactive prototypes", "Interface design"]],
  ["4. Development", ["Our engineering team builds secure, scalable applications using modern technologies.", "Agile development", "Sprint-based delivery", "Continuous integration"]],
  ["5. Testing & QA", ["Every solution undergoes rigorous testing to ensure reliability and performance.", "Functional testing", "Security testing", "Performance validation"]],
  ["6. Launch & Optimization", ["We deploy your product and continuously optimize performance for long-term growth.", "Cloud deployment", "Monitoring", "Continuous improvements"]],
];

function ProjectCard() {
  return (
    <article className="relative flex min-h-[176px] flex-col justify-center overflow-hidden rounded-[14px] bg-black px-7 py-8 text-white">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-grad-hero opacity-60" />
      <div className="relative z-10 max-w-[330px]">
        <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <Image src="/icons/monitor.svg" alt="" width={16} height={16} className="brightness-0 invert" />
        </div>
        <h3 className="text-[18px] font-bold leading-6 text-white">Ready to Start Your Project?</h3>
        <p className="mt-3 font-poppins text-[12px] leading-5 text-white/75">
          Let&apos;s turn your idea into a scalable digital solution.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex h-9 items-center rounded-full bg-white px-5 font-poppins text-[11px] font-semibold text-primary"
        >
          Start a Conversation
        </Link>
      </div>
    </article>
  );
}

function SectionCta() {
  return (
    <div className="relative overflow-hidden rounded-[18px] bg-grad-hero px-8 py-9 text-white md:px-12">
      <div className="relative z-10 max-w-[380px]">
        <h2 className="text-[26px] font-bold leading-tight text-white">
          Ready to Build Intelligent Systems That Scale?
        </h2>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex h-10 items-center rounded-full bg-white px-5 font-poppins text-[12px] font-semibold text-primary">
            Book Your Demo
          </Link>
          <Link href="/contact" className="inline-flex h-10 items-center rounded-full border border-white/40 px-5 font-poppins text-[12px] font-semibold text-white">
            Talk to Expert
          </Link>
        </div>
      </div>
      <Image src="/images/ctaRing.webp" alt="" width={260} height={220} className="absolute -right-5 top-1/2 hidden -translate-y-1/2 md:block" />
    </div>
  );
}

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
        <div className="max-w-[520px]">
          <h2 className="text-[26px] font-bold leading-tight text-secondary">
            SSG Principles That Power Every Client Partnership
          </h2>
          <p className="pt-4 font-poppins text-[13px] leading-6 text-neutral-dark">
            We do not believe in complicated playbooks or hidden processes.
            What keeps our teams sharp and clients confident are principles we
            never compromise on.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {principles.map(([title, description, icon]) => (
            <article key={title} className="min-h-[158px] rounded-[12px] border border-[#EEF2F7] bg-[#FAFAFA] p-7">
              <div className="mb-5 flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <Image src={icon} alt="" width={13} height={13} />
              </div>
              <h3 className="text-[14px] font-bold text-secondary">{title}</h3>
              <p className="pt-3 font-poppins text-[12px] leading-5 text-neutral-dark">{description}</p>
            </article>
          ))}
          <ProjectCard />
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] border-t border-[#E8EDF4] px-5 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-[24px] font-bold leading-tight text-secondary">Proven Impact</h2>
            <p className="pt-2 font-poppins text-[13px] text-neutral-dark">
              Real results from our enterprise partners.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              ["500+", "Projects Delivered"],
              ["98%", "Deadline Compliance"],
              ["90%", "Reduction in Manual Effort"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[8px] bg-[#B5020F14] px-6 py-4 text-center">
                <div className="text-[23px] font-bold leading-7 text-primary">{value}</div>
                <div className="pt-1 font-poppins text-[11px] leading-4 text-neutral-dark">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-10 sm:px-6 lg:px-8">
        <div className="max-w-[560px]">
          <h2 className="text-[26px] font-bold leading-tight text-secondary">
            Building Trust from Day One: How We Onboard New Clients
          </h2>
          <p className="pt-3 font-poppins text-[13px] leading-6 text-neutral-dark">
            Every great partnership starts with alignment. That&apos;s why our client
            onboarding process focuses on clarity and trust from the very beginning.
          </p>
        </div>
        <div className="mt-12 space-y-12">
          {onboardingSteps.map(([title, description, image], index) => (
            <article
              key={title}
              className={`grid items-center gap-9 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative h-[180px] overflow-hidden rounded-[8px]">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
              <div className={index % 2 === 1 ? "md:text-right" : ""}>
                <span className="font-poppins text-[12px] font-bold text-primary">
                  0{index + 1}
                </span>
                <h3 className="pt-2 text-[17px] font-bold text-secondary">{title}</h3>
                <p className="pt-3 font-poppins text-[12px] leading-6 text-neutral-dark">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-10 sm:px-6 lg:px-8">
        <SectionCta />
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-14 sm:px-6 lg:px-8">
        <p className="font-poppins text-[11px] font-semibold text-neutral-dark">
          Step-by-step process
        </p>
        <h2 className="mt-3 text-[26px] font-bold leading-tight text-secondary">
          The Development Lifecycle
        </h2>
        <div className="mt-12 grid grid-cols-1 border-t border-[#E8EDF4] md:grid-cols-3">
          {developmentLifecycle.map(([title, items], index) => (
            <article key={title as string} className="border-b border-[#E8EDF4] px-2 py-8 md:px-8">
              <div className="mb-5 flex h-7 w-7 items-center justify-center rounded-full border border-[#E8EDF4] font-poppins text-[11px] text-neutral-dark">
                {index + 1}
              </div>
              <h3 className="text-[15px] font-bold text-secondary">{title}</h3>
              <ul className="mt-4 space-y-2">
                {(items as string[]).map((item) => (
                  <li key={item} className="font-poppins text-[12px] leading-5 text-neutral-dark">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
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
