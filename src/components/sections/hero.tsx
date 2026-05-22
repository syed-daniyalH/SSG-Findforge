import Image from "next/image";
import Badge, { BadgeProps } from "../ui/badge";
import Button, { ButtonProps } from "../ui/button";

export interface HeroProps {
  badge?: BadgeProps;
  title: string;
  description: string;
  buttons?: ButtonProps[];
  image?: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string; 
  };
  socialLinks?: {
    icon: string;
    href?: string;
    alt?: string;
  }[];
  className?: string;

  // ✅ NEW FLAG
  author?: boolean;
  banner?: boolean;
}

const Hero = ({
  badge,
  title,
  description,
  buttons = [],
  image,
  className = "",
  author = false,
  banner = false,
  socialLinks = [],

}: HeroProps) => {
  return (
    <>
      {/* =======================
          SECTION 1 (author = false)
      ======================= */}
      {!author && !banner && (
        <section
          className={`bg-grad-glass flex min-h-[420px] items-center overflow-hidden rounded-[28px] px-7 py-12 sm:px-10 md:px-14 lg:min-h-[470px] lg:py-14 lg:pl-14 lg:pr-0 ${className}`}
        >
          {/* LEFT */}
          <div className="hero-text max-w-[560px] space-y-7 md:space-y-8">
            {badge && <Badge {...badge} />}

            <h1>{title}</h1>

            <p className="body1 max-w-[500px]">{description}</p>

            {buttons.length > 0 && (
              <div className="flex flex-col gap-3 sm:flex-row">
                {buttons.map((btn, index) => (
                  <Button key={index} {...btn} />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
          {image && (
            <div className="hero-graphic-image hidden flex-1 justify-end xl:flex">
              <Image
                src={image.src}
                alt={image.alt || "Hero Image"}
                width={image.width || 590}
                height={image.height || 420}
                className="-mr-4 h-auto w-[560px] object-contain"
              />
            </div>
          )}
        </section>
      )}

      {/* =======================
          SECTION 2 (author = true)
      ======================= */}
      {author && (
        <section
          className={`bg-grad-glass grid grid-cols-1 xl:grid-cols-2 rounded-[40px] gap-10
          px-10 sm:px-15 md:px-20 lg:px-20 ${className}`}
        >
          {/* LEFT */}
          <div className="hero-text flex flex-col justify-center gap-6 py-20 xl:py-0 max-w-2xl">
            {badge && <Badge {...badge} />}

            <h1>{title}</h1>

            <p className="body1">{description}</p>

            {/* ✅ SOCIAL LINKS (DYNAMIC) */}
            {socialLinks.length > 0 && (
              <div className="flex gap-2">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-secondary hover:border-primary"
                  >
                    <Image
                      src={item.icon}
                      alt={item.alt || "social icon"}
                      width={28}
                      height={28}
                      className="object-cover"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
          {image && (
            <div className="author-graphic-image xl:block hidden">
              <Image
                src={image.src}
                alt={image.alt || "Author Image"}
                width={image.width || 1000}
                height={image.height || 500}
              />
            </div>
          )}
        </section>
      )}

      {/* =======================
          SECTION 3 (banner = true)
      ======================= */}
      {banner && (
        <section className={`rounded-[40px] ${className}`}>
          {image && (
            <div className="relative overflow-hidden w-[full] min-h-125 lg:min-h-150 rounded-[40px] flex items-center">
              <Image
                src={image.src}
                alt={image.alt || "Hero Image"}
                fill
                priority
                className={`object-cover ${image.className}`}
              />

              {/* White Text Card Wrapper */}
              <div className="relative z-10 w-full px-6 md:px-10 lg:pl-16 lg:pr-32">
                <div className="bg-white w-full max-w-180 rounded-[40px] border border-[#F3F4F6] p-8 md:p-12 lg:py-16 lg:px-14 shadow-sm">
                  {badge && (
                    <div className="mb-6">
                      <Badge {...badge} />
                    </div>
                  )}

                  <h1 className="text-secondary leading-tight mb-6">
                    {title}
                  </h1>

                  <p className="body1 text-[#374151] mb-8 max-w-137.5">
                    {description}
                  </p>

                  {buttons.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                      {buttons.map((btn, index) => (
                        <Button key={index} {...btn} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Hero;

