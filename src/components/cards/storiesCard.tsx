
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
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                className="featured-swiper pb-24!"
            >
                {stories.map((story) => (
                    <SwiperSlide key={story.id}>
                        <div className="relative group">

                            {/* Stacked Card Decorative Backgrounds */}
                            <div className="absolute inset-x-0 -bottom-4 top-4 bg-black rounded-[20px] md:rounded-[40px] -z-10 opacity-100" />
                            <div className="absolute inset-x-0 -bottom-8 top-8 bg-grad-primary rounded-[20px] md:rounded-[40px] -z-20 opacity-100" />


                            {/* Main Content Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-grad-primary rounded-[20px] md:rounded-[40px] overflow-hidden grid lg:grid-cols-2 items-center"
                            >
                                {/* Left Side: Text Content */}
                                <div className="p-6 md:p-12 lg:p-16 space-y-6">
                                    <motion.h2
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight italic"
                                        style={{ letterSpacing: '-0.5px' }}
                                    >
                                        {story.title}
                                    </motion.h2>

                                    <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg font-poppins">
                                        {story.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {story.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 md:px-4 py-1 md:py-1.5 border border-white/30 rounded-full text-white text-xs md:text-sm hover:bg-white/10 transition font-poppins"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold text-sm md:text-base transition shadow-xl font-poppins"
                                    >
                                        View Project
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </motion.button>
                                </div>

                                {/* Right Side: Two Consistent Overlapping Images */}
                                <div className="relative h-75 sm:h-87.5 lg:h-105 flex items-center justify-center">

                                    {/* Background Image (Back Layer) */}
                                    <div className="absolute   w-[65%] h-[70%] rounded-[20px] overflow-hidden shadow-2xl z-10">
                                        <Image
                                            src={story.images}
                                            alt={`${story.title} image 1`}
                                            fill
                                            sizes="(max-width: 768px) 60vw, 35vw"
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

