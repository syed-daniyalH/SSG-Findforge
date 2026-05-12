import Image from "next/image";
import Button from "../ui/button";

export interface KeySolutionCardProps {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const KeySolutionCardData: KeySolutionCardProps[] = [
  {
    name: "Cybersecurity Solutions",
    slug: "cybersecurity-solutions",
    description:
      "Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.",
    image: "/images/ai.webp",
  },
  {
    name: "AI Solutions",
    slug: "ai-solutions",
    description:
      "Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.",
    image: "/images/ai.webp",
  },
  {
    name: "AI Solutions",
    slug: "ai-solutions",
    description:
      "Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.",
    image: "/images/ai.webp",
  },
  {
    name: "Cybersecurity Solutions",
    slug: "cybersecurity-solutions",
    description:
      "Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.",
    image: "/images/ai.webp",
  },
  {
    name: "Cybersecurity Solutions",
    slug: "cybersecurity-solutions",
    description:
      "Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.",
    image: "/images/ai.webp",
  },
  {
    name: "Cybersecurity Solutions",
    slug: "cybersecurity-solutions",
    description:
      "Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.",
    image: "/images/ai.webp",
  },
  {
    name: "AI Solutions",
    slug: "ai-solutions",
    description:
      "Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.",
    image: "/images/ai.webp",
  },
];

const KeySolutionCard = (data: KeySolutionCardProps) => {
  
  return (
    <>
      <div className="flex w-full lg:max-w-150.75 bg-[#F9FAFB] border border-[#E2E8F0] rounded-2xl">
        <div className="flex flex-col mx-auto justify-center pl-6 pr-1 gap-2">
          <h3 className="text-primary">{data.name}</h3>
          <p className="">{data.description}</p>
          <Button
            text="View Service"
            radius="full"
            size="large"
            href={`/services/${data.slug}`}
            showIcon
            icon="/icons/primaryArrow.svg"
            iconMode="hover"
            className="w-fit border border-[#E5E5E5] mt-4"
          />
        </div>
        <div className="relative min-w-50.75 h-auto overflow-hidden">
          <Image
            src={data.image}
            alt="AI"
            fill
            priority
            className="object-cover rounded-r-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default KeySolutionCard;


