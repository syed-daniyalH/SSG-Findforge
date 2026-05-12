import { locations } from "@/components/cards/locationCard";
import FormCTA from "@/components/ui/formCTA"
import Icon from "@/components/ui/icon";
import Image from "next/image";
import { notFound } from "next/navigation";

const LocationDetailed = async ({ params }: { params: Promise<{ slug: string }> }) => {

    // 1. Await the params
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    // Find the specific location based on the URL slug
    const location = locations.find((loc) => loc.slug === slug);

    // If no location matches, show 404
    if (!location) {
        notFound();
    }

    return (
        <>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10 pt-20">
                <div className="relative h-100 md:h-100 w-full overflow-hidden rounded-2xl group">
                    {/* Background Image */}
                    <Image
                        src={location.image || "/images/aires.webp"}
                        alt={location.name}
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Dark overlay for better contrast */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Glassmorphism Card */}
                    <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-10 md:right-auto">
                        <div className="bg-white rounded-xl p-6 md:p-8 relative overflow-hidden">

                            {/* Content Container */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    {/* Logo/Icon Container */}
                                    {/* <div className="bg-white rounded-lg p-1.5 flex justify-center items-center"> */}
                                    {/* <Icon src="/icons/primary-global.svg" alt="Global" iconSize={24} shape="rounded" /> */}
                                    {/* </div> */}
                                    <h2 className="text-secondary font-bold">
                                        {location.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10">
                {/* <div className="flex flex-col gap-6 md:flex-row md:gap-6 lg:gap-6 xl:gap-10">
                    <div className="border border-[#E2E8F0] rounded-2xl py-8 px-8 w-full md:w-[388px]">
                        <div className="flex gap-6 items-center mb-4">
                            <Icon src="/icons/primary-calendar.svg" alt="Calendars" iconSize={25} bgColor="#F3F4F6" />
                            <h3 className="">Address</h3>
                        </div>
                        <p className="text-[#64748B]">22a High Street, Southend-On- Sea, England, SS1 1DQ</p>
                    </div>
                    <div className="border border-[#E2E8F0] rounded-2xl py-8 px-8 w-full md:w-[388px]">
                        <div className="flex gap-6 items-center mb-4">
                            <Icon src="/icons/octicon_people.svg" alt="People" iconSize={25} bgColor="#F3F4F6" />
                            <h3 className="">Phone No</h3>
                        </div>
                        <p className="text-[#64748B]">+x xx xxxx xxxxx</p>
                    </div>
                    <div className="border border-[#E2E8F0] rounded-2xl py-8 px-8 w-full md:w-[388px]">
                        <div className="flex gap-6 items-center mb-8">
                            <Icon src="/icons/deliverables.svg" alt="People" iconSize={25} bgColor="#F3F4F6" />
                            <h3 className="">Email</h3>
                        </div>
                        <p className="text-[#64748B]">ssgmindforge@gmail.com</p>
                    </div>
                </div> */}

                <div className="flex flex-col gap-6 md:flex-row md:gap-6 lg:gap-6 xl:gap-10">
  {/* Address Card */}
  <div className="border border-[#E2E8F0] rounded-2xl p-8 w-full md:w-97 min-h-50">
    <div className="flex gap-6 items-center mb-4">
      <Icon src="/icons/primary-calendar.svg" alt="Address" iconSize={25} bgColor="#F3F4F6" />
      <h3 className="text-xl font-bold text-[#0F172A]">Address</h3>
    </div>
    {/* Margin left matches the icon width + gap to align text under the heading */}
    <div className="ml-18.25"> 
      <p className="text-[#64748B] leading-relaxed">
        {location.address}
      </p>
    </div>
  </div>

  {/* Phone Card */}
  <div className="border border-[#E2E8F0] rounded-2xl p-8 w-full md:w-97 min-h-50">
    <div className="flex gap-6 items-center mb-4">
      <Icon src="/icons/octicon_people.svg" alt="Phone" iconSize={25} bgColor="#F3F4F6" />
      <h3 className="text-xl font-bold text-[#0F172A]">Phone No</h3>
    </div>
    <div className="ml-18.25">
      <p className="text-[#64748B]">{location.phone}</p>
    </div>
  </div>

  {/* Email Card */}
  <div className="border border-[#E2E8F0] rounded-2xl p-8 w-full md:w-97 min-h-50">
    <div className="flex gap-6 items-center mb-4">
      <Icon src="/icons/deliverables.svg" alt="Email" iconSize={25} bgColor="#F3F4F6" />
      <h3 className="text-xl font-bold text-[#0F172A]">Email</h3>
    </div>
    <div className="ml-18.25">
      <p className="text-[#64748B]">{location.email}</p>
    </div>
  </div>
</div>
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
        </>
    )
}

export default LocationDetailed;