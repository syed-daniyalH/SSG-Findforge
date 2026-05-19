"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const certificateImages = [
  {
    src: "/images/cert-iso.svg",
    alt: "ISO certified helpdesk badge",
  },
  {
    src: "/images/cert-aws.svg",
    alt: "AWS certified badge",
  },
  {
    src: "/images/cert-iso.svg",
    alt: "ISO certified helpdesk badge duplicate",
  },
  {
    src: "/images/cert-aws.svg",
    alt: "AWS certified badge duplicate",
  },
  {
    src: "/images/cert-cisa.svg",
    alt: "CISA information security management certified badge",
  },
];

const Certificates = () => {
  return (
    <section className="space-y-9">
      <div
        className="flex flex-col items-start gap-5 pb-10 md:flex-row md:items-end md:justify-between"
      >
        <div className="w-full lg:w-[70%] xl:w-1/2">
          <h2 className="text-secondary">Our Awards And Achievements</h2>
          <p className="pt-2 text-neutral-dark">
            We are proud to be recognised for our positive culture, our
            achievements with clients, our work with communities and young
            people, and our technical advancements and strategic partnerships.
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          speed={5200}
          loop
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 32,
            },
          }}
          className="w-full"
        >
          {certificateImages.map((certificate, index) => (
            <SwiperSlide
              key={`${certificate.src}-${index}`}
              className="flex h-full items-center justify-center"
            >
              <div className="flex h-[150px] w-full items-center justify-center rounded-[28px] border border-[#ececec] bg-white px-4 py-5 shadow-[0_14px_28px_rgba(15,23,42,0.04)]">
                <Image
                  src={certificate.src}
                  alt={certificate.alt}
                  width={220}
                  height={220}
                  unoptimized
                  className="h-[104px] w-auto object-contain sm:h-[116px] lg:h-[126px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
