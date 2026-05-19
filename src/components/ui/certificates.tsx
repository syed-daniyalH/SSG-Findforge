"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const certificateImages = [
  "/images/iso.webp",
  "/images/aws.webp",
  "/images/cisa.webp",
  "/images/iso.webp",
  "/images/aws.webp",
  "/images/iso.webp",
  "/images/aws.webp",
];

const Certificates = () => {
  return (
    <section className="space-y-9">
      <div
        className="flex
            md:flex-row md:justify-between md:items-end pb-10
            flex-col gap-5 items-start"
      >
        <div className="w-full lg:w-[70%] xl:w-1/2">
          <h2 className="text-secondary">Our Awards And Achievements</h2>
          <p className="text-neutral-dark pt-2 ">
            We are proud to be recognised for our positive culture, our
            achievements with clients, our work with communities and young
            people, and our technical advancements and strategic partnerships.
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          speed={5000}
          loop={true}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="w-full"
        >
          {certificateImages.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={src}
                alt={`certificate-${index}`}
                width={150}
                height={150}
                className="object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
