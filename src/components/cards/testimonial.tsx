import Image from "next/image";
import Link from "next/link";

export interface TestimonialProps {
  name: string;
  title: string;
  logo?: string;
  quote: string;
  lineBar: string;
  avatar: string;
  className?: string;
  rating: number;
  showCasestudy?: boolean;
  showLogo?: boolean;
  position?: "left" | "right";
}

export const Testimonial = ({
  name,
  title,
  logo,
  lineBar,
  quote,
  avatar,
  rating = 5,
  showCasestudy = false,
  showLogo = false,
  position = "left",
}: TestimonialProps) => {
  // ⭐ Generate stars dynamically
  const stars = Array.from({ length: rating });

  return (
    <section
      className={`flex gap-4.5 items-center ${
        position === "right" ? "flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="relative w-full h-55 overflow-hidden rounded-2xl
      hidden md:block">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Content */}
      <div className="py-9">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h3 className="text-[18px] text-black font-bold">
              {name}
            </h3>
            <p className="text-primary font-medium">
              {title}
            </p>
            <span className="">
              <Image 
                src={lineBar}
                alt="line bar"
                width={35}
                height={1}
              />
            </span>
          </div>

          {/* ✅ Show Logo conditionally */}
          {showLogo && logo && (
            <div>
              <Image
                src={logo}
                alt={`${name} company`}
                width={200}
                height={50}
              />
            </div>
          )}
        </div>

        <p className="text-cool-gray pt-4 text-[12px]">
          {quote}
        </p>

        <div className="flex justify-between items-center pt-5">
          {/* ⭐ Dynamic Rating */}
          <div className="flex gap-2">
            {stars.map((_, index) => (
              <Image
                key={index}
                src="/icons/ratingStar.svg"
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          {/* ✅ Show Case Study conditionally */}
          {showCasestudy && (
            <div className="flex gap-2 border-b-2 border-black pb-1">
              <Link
                href="/case-studies/kodehash"
                className="text-black font-semibold font-poppins"
              >
                View Case Study
              </Link>
              <Image
                src="/icons/arrowRight.svg"
                alt="arrow"
                width={16}
                height={24}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export const TestimonialCard = (
    {
  name,
  title,
  logo,
  lineBar,
  quote,
  avatar,
  showLogo = false,
}: TestimonialProps
) => {

    const hasLogo = showLogo && logo;
    return (
        <section className="bg-[#F8FAFC] rounded-2xl py-8 px-8 w-full md:w-1/2">
            <p className="text-justify text-cool-gray text-[12px]">
                {quote}
            </p>
            <div className={`
            flex pt-12 items-center
            ${hasLogo ? "justify-between" : "justify-start"}
            `}>

                <div className={`
            flex gap-5 items-center
            ${!hasLogo ? "w-full" : ""}
          `}>
                    {/* Avatar */}
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary shrink-0">
                        <Image
                        src={avatar}
                        alt={name}
                        fill
                        className="object-cover object-center"
                        priority
                        />
                    </div>
                    <div className="content">
                        <div className="space-y-1">
                            <h3 className="text-[18px] text-black font-bold">
                            {name}
                            </h3>
                            <p className="text-primary font-medium text-[14px]">
                            {title}
                            </p>
                            <span className="">
                                <Image 
                                    src={lineBar}
                                    alt="line bar"
                                    width={35}
                                    height={1}
                                />
                            </span>
                        </div>
                    </div>
                </div>
                {/* ✅ Show Logo conditionally */}
                {hasLogo && (
                    <div>
                    <Image
                        src={logo}
                        alt={`${name} company`}
                        width={125}
                        height={50}
                    />
                    </div>
                )}
            </div>
        </section>
    )
}

