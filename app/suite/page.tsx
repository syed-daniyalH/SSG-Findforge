import FormCTA from "@/components/ui/formCTA";
import Image from "next/image";
import Link from "next/link";

const visionaryMembers = [
  {
    name: "Marcus Thorne",
    role: "Chief Executive Officer",
    imageUrl: "/images/ceo.webp",
  },
  {
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    imageUrl: "/images/cto.webp",
  },
  {
    name: "David Chen",
    role: "Chief Operating Officer",
    imageUrl: "/images/coo.webp",
  },
];

const leadershipMembers = Array.from({ length: 4 }, () => visionaryMembers).flat();

function SuiteMemberCard({
  name,
  role,
  imageUrl,
}: {
  name: string;
  role: string;
  imageUrl: string;
}) {
  return (
    <article>
      <div className="relative aspect-[1.02] overflow-hidden rounded-[8px] bg-[#F3F4F6]">
        <Image src={imageUrl} alt={name} fill className="object-cover object-top" />
      </div>
      <div className="pt-3">
        <h3 className="text-[13px] font-bold leading-5 text-secondary">{name}</h3>
        <p className="font-poppins text-[11px] leading-4 text-neutral-dark">{role}</p>
      </div>
    </article>
  );
}

export default function Suite() {
  return (
    <div className="suite-page">
      <section className="mx-auto max-w-[1120px] px-5 pt-24 sm:px-6 lg:px-8">
        <div className="relative grid min-h-[286px] overflow-hidden rounded-[18px] bg-grad-hero px-8 py-10 text-white md:grid-cols-[1fr_340px] md:px-12">
          <div className="relative z-10 max-w-[500px]">
            <p className="mb-3 font-poppins text-[11px] font-semibold text-white/80">
              About Us
            </p>
            <h1 className="max-w-[410px] text-[34px] font-bold leading-[1.08] text-white md:text-[42px]">
              Meet the Powerhouse behind Digital Breakthroughs
            </h1>
            <p className="mt-5 max-w-[500px] font-poppins text-[14px] leading-6 text-white/82">
              Behind every breakthrough innovation lies visionary leadership.
              Our core team is conducting a symphony of innovation that
              resonates across industries worldwide.
            </p>
            <Link
              href="/contact-us"
              className="mt-7 inline-flex h-10 items-center justify-center rounded-full border border-white/50 px-5 font-poppins text-[12px] font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              Speak to an Expert
            </Link>
          </div>

          <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-[260px] w-[300px] -translate-y-1/2 md:block">
            <Image src="/images/globe.webp" alt="" fill className="object-contain opacity-95" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-[520px]">
          <h2 className="text-[24px] font-bold leading-tight text-secondary">Our Visionary</h2>
          <p className="pt-3 font-poppins text-[14px] leading-6 text-neutral-dark">
            Meet the leaders who started it all. Their vision and passion are
            the cornerstones of our success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {visionaryMembers.map((member) => (
            <SuiteMemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-5 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-[520px]">
          <h2 className="text-[24px] font-bold leading-tight text-secondary">Leadership Team</h2>
          <p className="pt-3 font-poppins text-[14px] leading-6 text-neutral-dark">
            Our leadership team brings together diverse expertise and industry
            experience, guiding innovation and long-term growth across the
            business.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {leadershipMembers.map((member, index) => (
            <SuiteMemberCard key={`${member.name}-${index}`} {...member} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-[24px] font-bold leading-tight text-secondary">Proven Impact</h2>
            <p className="pt-2 font-poppins text-[14px] text-neutral-dark">
              Real results from our enterprise partners.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              ["500+", "Projects Delivered"],
              ["98%", "Deadline Compliance"],
              ["90%", "Reduction in Manual Effort"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[8px] border border-[#F6D8DC] bg-[#B5020F14] px-5 py-4 text-center"
              >
                <div className="text-[22px] font-bold leading-7 text-primary">{value}</div>
                <div className="pt-1 font-poppins text-[11px] leading-4 text-neutral-dark">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 pb-16 sm:px-6 lg:px-8">
        <FormCTA
          variant="form"
          heading="Our Technology Experts are Change Catalysts"
          description="Book a Free Consultation Call with Our Experts Today"
          buttonText="Schedule Free Consultation"
          footerNote="Your privacy is protected"
          wrapperClassName="rounded-[14px]!"
          fields={[
            {
              type: "text",
              name: "name",
              label: "Full Name*",
              placeholder: "Enter your name",
            },
            {
              type: "email",
              name: "email",
              label: "Email*",
              placeholder: "Enter your email",
            },
            {
              type: "phone",
              name: "phone",
              label: "Phone*",
              placeholder: "xx xxxx xxxx",
            },
            {
              type: "textarea",
              name: "message",
              label: "Project Idea*",
              placeholder: "How can we help?",
              rows: 3,
            },
          ]}
        />
      </section>
    </div>
  );
}
