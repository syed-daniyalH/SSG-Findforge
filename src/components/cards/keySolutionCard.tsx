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
    image: "/images/security-card.webp",
  },
  {
    name: "Custom Software Development Solutions",
    slug: "custom-software-development-solutions",
    description:
      "Proactive, intelligent cybersecurity solutions that help you prevent, detect, and respond to threats.",
    image: "/images/se.webp",
  },
  {
    name: "Cloud Solutions",
    slug: "cloud-solutions",
    description:
      "Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.",
    image: "/images/automated.webp",
  },
  {
    name: "Custom Website Development Solutions",
    slug: "custom-website-development-solutions",
    description:
      "Proactive, intelligent cybersecurity solutions that help you prevent, detect, and respond to threats.",
    image: "/images/app.webp",
  },
  {
    name: "Designing Solutions",
    slug: "designing-solutions",
    description:
      "Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.",
    image: "/images/design.webp",
  },
  {
    name: "AI & Machine Learning Solutions",
    slug: "ai-machine-learning-solutions",
    description:
      "Proactive, intelligent cybersecurity solutions that help you prevent, detect, and respond to threats.",
    image: "/images/ai-automated.webp",
  },
  {
    name: "Outsourcing Solutions",
    slug: "outsourcing-solutions",
    description:
      "Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.",
    image: "/images/servicedesign.webp",
  },
];

const KeySolutionCard = (data: KeySolutionCardProps) => {
  
  return (
    <div className="relative flex min-h-[168px] w-full overflow-hidden rounded-[12px] border border-[#E2E8F0] bg-[#F9FAFB]">
        <div className="relative z-10 flex w-[56%] flex-col justify-center gap-2 px-6 py-6">
          <h3 className="text-[15px] font-bold leading-5 text-primary">{data.name}</h3>
          <p className="line-clamp-3 font-poppins text-[12px] leading-5 text-slate-gray">
            {data.description}
          </p>
          <Button
            text="View Service"
            radius="full"
            size="extraSmall"
            href={`/services/${data.slug}`}
            showIcon
            icon="/icons/primaryArrow.svg"
            iconMode="static1"
            className="mt-3 h-8! w-fit border border-[#E5E5E5] bg-white px-4! py-0! text-[11px] text-black"
          />
        </div>
        <div className="absolute inset-y-0 right-0 w-[52%] overflow-hidden">
          <Image
            src={data.image}
            alt={data.name}
            fill
            priority
            sizes="(max-width: 1024px) 50vw, 300px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9FAFB] via-[#F9FAFB]/55 to-transparent" />
        </div>
    </div>
  );
};

export default KeySolutionCard;


