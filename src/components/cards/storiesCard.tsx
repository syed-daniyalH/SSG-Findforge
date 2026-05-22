
"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles

const stories = [
    {
        id: 1,
        title: "Scalable IT Infrastructure for a Company",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        tags: ["Manufacturing", "Healthcare", "Education"],
        images: "/images/story1.webp",
        link: "#"
    },
    {
        id: 2,
        title: "Scalable IT Infrastructure for a Company",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        tags: ["Manufacturing", "Healthcare", "Education"],
        images: "/images/story1.webp",
        link: "#"
    },
    {
        id: 3,
        title: "Scalable IT Infrastructure for a Company",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        tags: ["Manufacturing", "Healthcare", "Education"],
        images: "/images/story1.webp",
        link: "#"
    },
    {
        id: 4,
        title: "Scalable IT Infrastructure for a Company",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        tags: ["Manufacturing", "Healthcare", "Education"],
        images: "/images/story1.webp",
        link: "#"
    },
    // Add more stories here...
];

const FeaturedStories = () => {
    return (
        <section className="py-8">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                className="featured-swiper pb-16!"
            >
                {stories.map((story) => (
                    <SwiperSlide key={story.id}>
                        <div className="relative px-5 py-7 sm:px-8 md:px-10">

                            {/* Stacked Card Decorative Backgrounds */}
                            <div className="absolute left-3 right-3 top-[42px] bottom-[42px] rounded-[18px] bg-black md:left-5 md:right-5 md:rounded-[22px]" />
                            <div className="absolute left-0 top-[54px] h-[78%] w-[64px] rounded-l-[16px] rounded-r-[10px] bg-[#d00512] md:w-[82px]" />
                            <div className="absolute right-0 top-[54px] h-[78%] w-[64px] rounded-l-[10px] rounded-r-[16px] bg-[#d00512] md:w-[82px]" />


                            {/* Main Content Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative z-10 grid min-h-[360px] items-center overflow-hidden rounded-[18px] bg-[#b5020f] shadow-[0_18px_35px_rgba(20,0,0,0.18)] md:rounded-[22px] lg:grid-cols-[1.02fr_1fr]"
                            >
                                {/* Left Side: Text Content */}
                                <div className="space-y-6 p-8 md:p-10 lg:py-11 lg:pl-11 lg:pr-8">
                                    <motion.h2
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="max-w-[370px] text-[28px] font-bold leading-[1.2] text-white md:text-[34px] lg:text-[36px]"
                                    >
                                        {story.title}
                                    </motion.h2>

                                    <p className="max-w-[440px] font-poppins text-sm leading-6 text-white md:text-base md:leading-7">
                                        {story.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {story.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white px-3 py-1 font-poppins text-[11px] leading-none text-white transition hover:bg-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-5 flex h-11 w-fit items-center gap-3 rounded-full bg-white px-7 font-poppins text-sm font-semibold text-primary shadow-xl transition"
                                    >
                                        View Project
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </motion.button>
                                </div>

                                {/* Right Side Image */}
                                <div className="relative flex h-[260px] items-center justify-center px-8 pb-8 lg:h-full lg:px-10 lg:py-10 lg:pl-4">

                                    <div className="relative z-10 h-full w-full overflow-hidden rounded-[14px] md:rounded-[16px] lg:h-[305px]">
                                        <Image
                                            src={story.images}
                                            alt={`${story.title} image`}
                                            fill
                                            sizes="(max-width: 768px) 85vw, 40vw"
                                            className="object-cover"
                                        />
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Styles for Swiper Pagination */}
            <style jsx global>{`
        .featured-swiper .swiper-pagination-bullet {
          background: #B5020F !important;
          width: 12px;
          height: 12px;
          opacity: 0.3;
        }
        .featured-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }
      `}
            </style>
        </section>
    );
};

export default FeaturedStories;

