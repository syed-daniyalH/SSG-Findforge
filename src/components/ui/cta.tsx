import Image from "next/image";
import Button from "./button";
import Badge, { BadgeProps } from "./badge";
import { createMarkup } from "@/lib/createMarkup";

export interface CTAProps {
  title: string;
  description?: string;
  button1?: {
    text: string;
    href: string;
    icon?: string;
  };
  button2?: {
    text: string;
    href: string;
  };
  image?: string;
  backgroundImage?: string;

  // ✅ NEW
  showBadge?: boolean;
  badge?: BadgeProps
  cardCTA?: boolean;
}

const CTA = ({
  title,
  description,
  button1,
  button2,
  image,
  cardCTA = false,
  backgroundImage,
  showBadge = false,
}: CTAProps) => {

  /* ===================== BADGE LAYOUT ===================== */
  if (showBadge) {
    return (
      <section className="grid min-h-[420px] grid-cols-1 overflow-hidden rounded-[34px] border border-black/5 bg-[radial-gradient(circle_at_78%_34%,rgba(181,2,15,0.58)_0%,rgba(90,0,6,0.42)_27%,rgba(0,0,0,0.98)_62%)] xl:grid-cols-[1fr_0.95fr]">

        {/* Left Content (BADGE VERSION) */}
        <div
          className="flex flex-col justify-center gap-7 px-8 py-12 md:px-14 lg:pl-24"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
            backgroundSize: "cover",
          }}
        >

          {/* Badge Section */}
          <div className="">
            <Badge
              size="small"
              radius="lg"
              showIcon
              icon="/icons/monitor.svg"
              className="h-14 w-14 justify-center border border-white/10 bg-white/10 p-0 shadow-[inset_0_0_18px_rgba(255,255,255,0.07)]"
            />
          </div>

          {/* Title */}
          <h2 className="text-[34px] leading-[40px] text-white md:text-[44px] md:leading-[52px]">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p 
              className="max-w-[520px] font-poppins text-lg leading-8 text-white"
              dangerouslySetInnerHTML={createMarkup(description)}
            />
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">

            {button1 && (
              <Button
                text={button1.text}
                href={button1.href}
                icon={button1.icon}
                showIcon={!!button1.icon}
                size="large"
                radius="full"
                className="bg-white text-secondary font-semibold font-poppins h-14! px-8! hover:shadow-soft"
              />
            )}

            {button2 && (
              <Button
                text={button2.text}
                href={button2.href}
                size="large"
                radius="full"
                variant="glass"
                className="border border-primary text-primary font-semibold font-poppins"
              />
            )}
          </div>

          
        </div>

        {/* Right Image */}
        {image && (
          <div className="relative hidden min-h-[420px] xl:block">
            <Image
              src={image}
              alt="CTA Image"
              fill
              sizes="42vw"
              className="object-contain object-bottom"
            />
          </div>
        )}

      </section>
    );
  }

    if (cardCTA) {
    return (
      <section className="border bg-grad-cta grid grid-cols-1 rounded-4xl overflow-hidden">

        {/* Left Content (BADGE VERSION) */}
        <div
          className="flex flex-col justify-center px-6 py-6 gap-4"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
            backgroundSize: "cover",
          }}
        >
          <div className="flex items-center gap-4">
            {/* Badge Section */}
            <div className="">
              <Badge
                size="small"
                radius="md"
                showIcon
                icon="/icons/monitor.svg"
                className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] py-3 px-3"
              />
            </div>

            {/* Title */}
            <h2 className="text-white text-[24px]">
              {title}
            </h2>
          </div>

          {/* Description */}
            {description && (
            <p 
              className="text-white/80"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          {/* Description
          {description && (
            <p className="text-white/80">
              {description}
            </p>
          )} */}

          {/* Buttons */}
          <div className="flex flex-col justify-end gap-4 sm:flex-row">

            {button1 && (
              <Button
                text={button1.text}
                href={button1.href}
                icon={button1.icon}
                showIcon={!!button1.icon}
                size="small"
                radius="full"
                className="bg-white text-secondary font-semibold font-poppins hover:shadow-soft"
              />
            )}

            {button2 && (
              <Button
                text={button2.text}
                href={button2.href}
                size="medium"
                radius="full"
                variant="glass"
                className="border border-primary text-primary font-semibold font-poppins"
              />
            )}
          </div>

          
        </div>

      </section>
    );
  }

  /* ===================== NORMAL CTA (NO BADGE) ===================== */
  return (
    <section className="border bg-grad-hero py-12 flex justify-between rounded-[24px] gap-8 overflow-hidden">

      {/* Left Content (NO BADGE VERSION) */}
      <div
        className="space-y-8 max-w-3xl"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
        }}
      >

        {/* Title */}
        <h2 className="text-[26px] text-white sm:text-[30px] md:text-[36px] lg:text-[42px] leading-tight xl:px-20 lg:px-16 md:px-14 px-8">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p 
            className="text-white/80 xl:px-20 lg:px-16 md:px-14 px-8"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        
        {/* Description */}
        {/* {description && (
          <p className="text-white/80 xl:px-30 lg:px-20 md:px-20 px-10">
            {description}
          </p>
        )} */}

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row xl:px-20 lg:px-16 md:px-14 px-8">

          {button1 && (
            <Button
              text={button1.text}
              href={button1.href}
              icon={button1.icon}
              showIcon={!!button1.icon}
              size="large"
              radius="full"
              className="bg-white text-secondary font-semibold font-poppins hover:shadow-soft"
            />
          )}

          {button2 && (
            <Button
              text={button2.text}
              href={button2.href}
              size="large"
              radius="full"
              variant="glass"
              className="border border-primary text-primary font-semibold font-poppins"
            />
          )}
        </div>
      </div>

      {/* Right Image */}
      {image && (
        <div className="hidden xl:block">
          <Image
            src={image}
            alt="CTA Image"
            width={200}
            height={300}
            className="object-contain"
          />
        </div>
      )}

    </section>
  );


};

export default CTA;

