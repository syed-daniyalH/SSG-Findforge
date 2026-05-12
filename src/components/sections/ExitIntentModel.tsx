"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    text: "We chose Appinventiv to build our financial literacy and money management app from start to finish. From the first call, we were very impressed with Appinventiv's professionalism, expertise, and commitment to delivering top-notch results.",
    name: "Marcus Thorne",
    role: "Chief Executive Officer",
    image: "/images/testimonial1.webp",
  },
  {
    text: "The team exceeded our expectations in every way. Their attention to detail and ability to scale our platform quickly was exactly what we needed for our global launch. Truly a remarkable experience.",
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    image: "/images/testimonial2.webp",
  },
  {
    text: "This team exceeded our expectations in every way. Their attention to detail and ability to scale our platform quickly was exactly what we needed for our global launch. Truly a remarkable experience.",
    name: "David Chen",
    role: "Chief Operating Officer",
    image: "/images/testimonial3.webp",
  },
];

const brands = [
  "ASSETRA",
  "layoffhub.ai",
  "Pergola Plus",
  "Rhino Veyors",
  "LucraLab Optimization",
  "ASSETRA",
  "layoffhub.ai",
  "Pergola Plus",
  "Rhino Veyors",
  "LucraLab Optimization",
];

export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      const hasSeen = localStorage.getItem("exit_intent_v4");
      if (e.clientY <= 0 && !hasSeen) {
        setIsVisible(true);
        localStorage.setItem("exit_intent_v4", "true");
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-10000 flex items-center justify-center bg-white/20 p-4 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-4/5 h-162.5 grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          {/* LEFT SIDE: col-span-7 */}
          <div className="relative md:col-span-7 bg-black p-10 text-white flex flex-col justify-between h-full overflow-hidden">
            {/* UPDATED: Background Image & Gradient Overlay */}
            {/* Replace '/your-bg-image.jpg' with your actual image path */}
            <div className="absolute inset-0 bg-[url('/your-bg-image.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-linear-to-tr from-orange-600/30 via-transparent to-transparent opacity-80" />

            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-white text-3xl font-bold mb-1">
                Leaving Already?
              </h2>
              <p className="text-neutral-mid text-sm">
                Hear from our clients and why 3000+ businesses trust Appinventiv
              </p>

              {/* Testimonial Card */}
              <div className="mt-6 mb-6 rounded-xl border border-white/10 bg-white/5 p-8 relative flex-1 flex flex-col justify-center backdrop-blur-sm">
                <Quote
                  className="text-primary mb-4 shrink-0"
                  size={36}
                  fill="currentColor"
                />

                <p className="text-lg leading-relaxed text-white min-h-30">
                  {testimonials[currentIndex].text}
                </p>

                <div className="mt-6 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="relative overflow-hidden h-12 w-12 rounded-full bg-slate-gray">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-primary font-bold text-sm">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-xs text-white">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={prevSlide}
                      className="rounded-full p-2 border border-white/20 text-neutral-mid hover:text-white hover:bg-white/10 transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="rounded-full p-2 border border-white/20 text-neutral-mid hover:text-white hover:bg-white/10 transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* UPDATED: Awards Section Added Back */}
              <div className="shrink-0 border-t border-white/10 pt-4">
                <p className="text-center text-[10px] uppercase tracking-widest text-white mb-4">
                  Awards
                </p>
                {/* Note: Replace text fallbacks below with your actual award logos/images if necessary */}
                <div className="flex justify-between items-center px-2 opacity-80">
                  <div className="text-center">
                    <p className="font-bold text-xs text-yellow-500">ISO</p>
                    <p className="text-[8px] uppercase">Certified HelpDesk</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-sm">aws</p>
                    <p className="text-[8px] text-green-500 uppercase">
                      certified
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[8px] text-red-500">CISA</p>
                    <p className="font-bold text-[10px] uppercase">Certified</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[8px] text-yellow-600 uppercase">ISO</p>
                    <p className="font-bold text-[10px] uppercase">
                      Certified HelpDesk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: col-span-5 */}
          <div className="md:col-span-5 flex flex-col h-full bg-white relative">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-6 top-6 text-gray-400 hover:text-black z-10"
            >
              <X size={20} />
            </button>

            <div className="px-8 pt-10 pb-6 flex-1 flex flex-col overflow-y-auto">
              <h3 className="text-lg font-bold pr-8 leading-tight">
                Share Your Requirements{" "}
                <span className="font-normal text-neutral-dark block text-sm mt-1">
                  To help our experts understand your business objectives.
                </span>
              </h3>

              <form
                className="mt-6 space-y-4 flex-1 flex flex-col"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-ghost-white border border-slate-gray placeholder:text-neutral-dark rounded-md px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Company Email"
                    className="w-full bg-ghost-white border border-slate-gray placeholder:text-neutral-dark rounded-md px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex bg-ghost-white border border-slate-gray rounded-md overflow-hidden focus-within:bg-white focus-within:border-primary transition-colors">
                    <select className="text-xs bg-transparent outline-none text-neutral-dark pl-2 pr-1 border-r border-slate-gray">
                      <option>+92</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      className="w-full px-2 py-2.5 text-sm bg-transparent outline-none placeholder:text-neutral-dark"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Work Email (Optional)"
                    className="w-full bg-ghost-white border border-slate-gray placeholder:text-neutral-dark rounded-md px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-primary transition-colors"
                  />
                </div>

                <textarea
                  placeholder="Describe your project..."
                  className="w-full bg-ghost-white border border-slate-gray placeholder:text-neutral-dark rounded-md px-3 py-2.5 text-sm outline-none focus:bg-white focus:border-primary flex-1 resize-none transition-colors"
                />

                <div className="flex items-center gap-2 rounded-lg bg-ghost-white p-2 text-[11px] text-neutral-dark">
                  <ShieldCheck size={14} className="text-primary shrink-0" />
                  <span>
                    Fast 2-minute response, fully{" "}
                    <strong>NDA-protected.</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-400 whitespace-nowrap">
                      4 + 6 =
                    </span>
                    <input
                      type="text"
                      className="w-12 h-10 bg-gray-50 border border-gray-700 placeholder:text-gray-700 rounded-md text-center font-bold outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                  <button className="flex-1 rounded-md bg-primary py-3 font-bold text-white hover:bg-primary shadow-lg shadow-[rgba(181,2,15,0.2)] transition-all">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* BRAND MARQUEE */}
            <div className="bg-black py-4 overflow-hidden h-22.5 flex flex-col justify-center shrink-0">
              <p className="text-[10px] text-center text-white uppercase tracking-widest mb-3">
                Trusted by Global Brands
              </p>
              <div className="relative flex items-center overflow-hidden h-5">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex gap-12 whitespace-nowrap px-6"
                >
                  {brands.concat(brands).map((brand, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold text-white/60 tracking-wider"
                    >
                      {brand}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
