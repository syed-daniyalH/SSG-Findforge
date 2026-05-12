import TeamCard from "@/components/cards/team";
import Hero from "@/components/sections/hero";
import FormCTA from "@/components/ui/formCTA";
import Impacts from "@/components/ui/impact";
import { teamMembers, visionaryTeam } from "@/content/team.data";

export default function Suite() {
  return (
    <div className="suite-page">
      <section
        id="hero"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20"
      >
        <Hero
          className="xl:px-10"
          title="Meet the Powerhouse behind Digital Breakthoughs"
          description="Behind every breakthrough innovation lies visionary leadership. Our core team isn't just running a company—they're conducting a symphony of innovation that resonates across industries worldwide. "
          buttons={[
            {
              text: "Speak to an Expert",
              href: "/contact",
              icon: "/icons/chat.svg",
              showIcon: true,
              size: "large",
              radius: "full",
              variant: "glass",
              className:
                "font-semibold font-poppins",
            },
          ]}
          image={{
            src: "/images/globe.webp",
            alt: "Hero Globe",
          }}
        />
      </section>

      <section
        id="team"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <section className="">
          <div
            className="flex
            md:flex-row md:justify-between md:items-end pb-10
            flex-col gap-5 items-start"
          >
            <div className="w-full lg:w-[70%] xl:w-1/2">
              <h2 className="text-secondary">{visionaryTeam.title}</h2>
              <p className="text-neutral-dark pt-2 ">
                {visionaryTeam.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14.25">
            {visionaryTeam.members.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div
            className="flex
            md:flex-row md:justify-between md:items-end pb-10
            flex-col gap-5 items-start"
          >
            <div className="w-full lg:w-[70%] xl:w-1/2">
              <h2 className="text-secondary">{teamMembers.title}</h2>
              <p className="text-neutral-dark pt-2 ">
                {teamMembers.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14.25">
            {teamMembers.members.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </section>
      </section>

      <section
        id="impacts"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <Impacts />
      </section>

      <section
        id="formCTA"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
      >
        <FormCTA
          variant="form"
          heading="Our Technology Experts are Change Catalysts"
          description="Book a Free Consultation Call with Our Experts Today"
          buttonText="Schedule Free Consultation"
          footerNote="Your privacy is protected"
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

