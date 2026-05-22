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
      <section className="relative grid min-h-[360px] overflow-hidden rounded-[34px] bg-[radial-gradient(circle_at_80%_38%,rgba(181,2,15,0.55)_0%,rgba(78,0,6,0.36)_30%,rgba(0,0,0,1)_64%)] text-white md:min-h-[410px] md:grid-cols-[minmax(0,1fr)_43%]">

        {/* Left Content (BADGE VERSION) */}
        <div
          className="relative z-10 flex flex-col justify-center px-8 py-12 md:px-14 lg:pl-[76px]"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
            backgroundSize: "cover",
          }}
        >

          {/* Badge Section */}
          <div className="mb-8">
            <Badge
              size="small"
              radius="lg"
              showIcon
              icon="/icons/monitor.svg"
              className="h-11 w-11 justify-center border border-white/15 bg-white/10 p-0 shadow-[inset_0_0_18px_rgba(255,255,255,0.08)] md:h-12 md:w-12"
            />
          </div>

          {/* Title */}
          <h2 className="max-w-[560px] text-[31px] font-bold leading-[1.15] text-white md:text-[38px] lg:text-[42px]">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p 
              className="mt-7 max-w-[500px] font-poppins text-[15px] leading-8 text-white md:text-[16px]"
              dangerouslySetInnerHTML={createMarkup(description)}
            />
          )}

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            {button1 && (
              <Button
                text={button1.text}
                href={button1.href}
                icon={button1.icon}
                showIcon={!!button1.icon}
                size="large"
                radius="full"
                iconMode="static1"
                className="h-12! bg-white px-7! font-poppins text-[14px]! font-bold text-secondary hover:shadow-soft"
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
          <div className="relative hidden min-h-[360px] md:block md:min-h-[410px]">
            <Image
              src={image}
              alt="CTA Image"
              fill
              sizes="(max-width: 1024px) 43vw, 460px"
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

