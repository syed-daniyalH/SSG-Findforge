// import Image from "next/image";

// export interface CertificatesProps {
//     img:string
// }

// const Certificates = () => {
//     return (
//         <section className="space-y-9">
//             <div className="">
//                 <h4 className="text-center">Trusted by industry leaders</h4>
//             </div>
//             <div className="flex gap-20 justify-center items-center">
//                 <Image
//                 src="/images/iso.webp"
//                 alt=""
//                 width={150}
//                 height={150}
//                 className=""
//                 />

//                 <Image
//                 src="/images/aws.webp"
//                 alt=""
//                 width={150}
//                 height={150}
//                 className=""
//                 />

//                 <Image
//                 src="/images/cisa.webp"
//                 alt=""
//                 width={150}
//                 height={150}
//                 className=""
//                 />

//                 <Image
//                 src="/images/iso.webp"
//                 alt=""
//                 width={150}
//                 height={150}
//                 className=""
//                 />

//                 <Image
//                 src="/images/aws.webp"
//                 alt=""
//                 width={150}
//                 height={150}
//                 className=""
//                 />
//             </div>
//         </section>
//     )
// }

// export default Certificates;

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
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
            We are proud to be recognised for our positive culture, our achievements with clients, our work with communities and young people, and our technical advancements and strategic partnerships.
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

// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// // Import Swiper styles (Essential!)
// import "swiper/css";

// const certificates = [
//   { src: "/images/iso.webp", alt: "ISO 9001" },
//   { src: "/images/aws.webp", alt: "AWS Certified" },
//   { src: "/images/cisa.webp", alt: "CISA Certified" },
//   { src: "/images/iso.webp", alt: "ISO 9001" },
//   { src: "/images/aws.webp", alt: "AWS Certified" },
//   { src: "/images/cisa.webp", alt: "CISA Certified" },
//   { src: "/images/iso.webp", alt: "ISO 9001" },
//   { src: "/images/aws.webp", alt: "AWS Certified" },
//   { src: "/images/cisa.webp", alt: "CISA Certified" },

// ]
// const Certificates = () => {
//   return (
//     <section className="px-20 py-16 bg-white overflow-hidden">
//       <div className="container mx-auto px-6 mb-12">
//         {/* Using your predefined H4 styles */}
//         <h4 className="text-center opacity-80 uppercase tracking-widest">
//           Trusted by industry leaders
//         </h4>
//       </div>

//       <div className="w-full">
//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           speed={5000} // Higher speed for "linear" smooth movement
//           allowTouchMove={false} // Prevents user from breaking the flow
//           slidesPerView={5} // Mobile default
//           spaceBetween={80}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//             1280: { slidesPerView: 5 }, // Your 5 logos shown on desktop
//           }}
//           // This makes the transition smooth and constant
//           freeMode={true}
//           className="logo-swiper"
//         >
//           {certificates.map((client, index) => (
//             <SwiperSlide key={index} className="flex items-center justify-center py-4">
//               <div className="">
//                 <Image
//                   src={client.src}
//                   alt={client.alt}
//                   width={200}
//                   height={125}
//                   className="object-contain h-12 w-auto"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Certificates;


