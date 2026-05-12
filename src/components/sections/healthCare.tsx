"use client";

import { useState } from 'react';
import Image from 'next/image';

const HealthCare = () => {
  // 1. Data structure to keep things clean
  const contentData = [
    {
      id: 0,
      title: "Transforming business through smart technology",
      description: "Our role is simple: give you the tools, talent and technical expertise to succeed...",
      image: "/images/ai-dna.webp"
    },
    {
      id: 1,
      title: "Patient-Centric Digital Solutions",
      description: "We focus on solutions that are robust, secure, and built to evolve so your business...",
      image: "/images/ai.webp" // Replace with actual image path
    },
    {
      id: 2,
      title: "Next-Gen Healthcare Systems",
      description: "From re-engineering critical systems to building next-generation digital products...",
      image: "/images/ai1.webp" // Replace with actual image path
    }
    
  ];

  // 2. State to track which item is active
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="">
      <div className="lg:w-1/2 mb-8 space-y-4">
        <h2 className="text-3xl font-bold">
          The scope of our healthcare software development services
        </h2>
        <p className="text-gray-600">
          We will help you implement and maintain a tailored, cost-effective technology solution.
        </p>
      </div>

      <div className="grid xl:grid-cols-2 gap-10">
        {/* Left Side: Image Display */}
        <div className="w-full border border-[#FFFFFF80] rounded-t-[40px] shadow-[0px_30px_70px_-20px_#0000001A]">
          <div className="bg-white flex gap-2 py-4 px-8 rounded-t-full">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
          </div>
          <div className="bg-[#F9FAFB80] p-3 rounded-b-3xl">
            <div className="relative w-full h-100 rounded-xl border border-[#0000000D] shadow-[inset_0px_2px_4px_1px_#0000000D] overflow-hidden">
              <Image
                src={contentData[activeIndex].image}
                alt="Display Image"
                fill
                priority
                className="object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Clickable Content */}
        <div className="space-y-0 relative border-l-2 border-l-[#F5F5F5]">
          {contentData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`relative cursor-pointer pl-10 py-6 transition-all duration-300 group`}
            >
              {/* The "Active Border" - absolute positioned to overlap the parent's left border */}
              <div 
                className={`absolute -left-0.5 top-0 bottom-0 w-0.5 transition-all duration-300 ${
                  activeIndex === index ? 'bg-primary' : 'bg-transparent'
                }`} 
              />
              
              <h3 className={`text-xl font-semibold mb-2 transition-colors ${
                activeIndex === index ? 'text-primary' : 'text-black'
              }`}>
                {item.title}
              </h3>
              <p className="text-neutral-dark leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthCare;

