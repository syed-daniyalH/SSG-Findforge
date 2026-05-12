// import Image from "next/image";

// export interface ClientsProps {
//     img:string
// }

// const Clients = () => {
//     return (
//         <section className="space-y-9">
//             <div className="">
//                 <h4 className="text-center">Trusted by industry leaders</h4>
//             </div>
//             <div className="flex gap-20 justify-center items-center">
//                 <Image
//                 src="/images/assetra.webp"
//                 alt=""
//                 width={153}
//                 height={100}
//                 className=""
//                 />

//                 <Image
//                 src="/images/layoffhubai.webp"
//                 alt=""
//                 width={153}
//                 height={100}
//                 className=""
//                 />

//                 <Image
//                 src="/images/pergola.webp"
//                 alt=""
//                 width={153}
//                 height={100}
//                 className=""
//                 />

//                 <Image
//                 src="/images/rhino.webp"
//                 alt=""
//                 width={153}
//                 height={100}
//                 className=""
//                 />

//                 <Image
//                 src="/images/lucralab.webp"
//                 alt=""
//                 width={153}
//                 height={100}
//                 className=""
//                 />
//             </div>
//         </section>
//     )
// }

// export default Clients;


"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const clientsImages = [
  { src: "/images/assetra.webp", alt: "Assetra" },
  { src: "/images/layoffhubai.webp", alt: "LayoffHub AI" },
  { src: "/images/pergola.webp", alt: "Pergola Plus" },
  { src: "/images/rhino.webp", alt: "RhinoVeyors" },
  { src: "/images/lucralab.webp", alt: "Lucralab" },
  { src: "/images/rhino.webp", alt: "RhinoVeyors" },
  { src: "/images/lucralab.webp", alt: "Lucralab" },
  { src: "/images/lucralab.webp", alt: "Lucralab" },
  { src: "/images/rhino.webp", alt: "RhinoVeyors" },
  { src: "/images/lucralab.webp", alt: "Lucralab" },
];

const Clients = () => {
  return (
    <section className="space-y-9">
      <div>
        <h4 className="text-center">Trusted by industry leaders</h4>
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
            // 0 - 640px: 1 image
            0: {
              slidesPerView: 2,
            },
            // 640px - 768px: 2 images
            640: {
              slidesPerView: 2,
            },
            // 768px - 1024px: 3 images
            768: {
              slidesPerView: 2,
            },
            // 1024px and up: 5 images
            1024: {
              slidesPerView: 3,
            },
            // 1280px and up: 5 images
            1280: {
              slidesPerView: 5,
            },
          }}
          className="w-full"
        >
          {clientsImages.map((client, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <Image
                src={client.src}
                alt={client.alt}
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

export default Clients;

