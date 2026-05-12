
// import Image from "next/image";
// import Button from "../ui/button";

// const Audit = () => {
//   return (
//     <>
//     <section className="space-y-16">
//         <div
//             className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-8"
//         >
//             <div className="">
//             <h2 className="text-secondary">Key features of Smart Audit for SoD compliance: </h2>
            
//             </div>
//             <div className="flex gap-4 flex-wrap">
//             <Button text="Real Time Risk Monitoring" radius="full" size="large" className="bg-primary text-white" />
//             <Button text="Audit-Ready Reporting" radius="full" size="large" className="text-secondary hover:bg-primary hover:text-white border border-[#E5E5E599]" />
//             <Button text="Scheduled Revalidations" radius="full" size="large" className="text-secondary hover:bg-primary hover:text-white border border-[#E5E5E599]" />
//             </div>
//         </div>

//         <div className="relative w-full h-85 rounded-3xl overflow-hidden">
//             <Image src="/images/analysis.webp" alt="Analysis" fill priority className="object-cover object-center"/>
//             <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent pb-10 pl-10">
//                 <p className="text-white">
//                     Detect SoD conflicts, high-risk access, and risky configuration changes in minutes a day.
//                 </p>
//             </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Audit;

"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/button";
import { AuditTabsProps } from "@/types/audit";

const AuditTabs = ({ title, items }: AuditTabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = items[activeIndex];

  return (
    <section className="space-y-10 md:space-y-16">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 items-start">
        
        {/* Title */}
        <div>
          <h2 className="text-secondary font-semibold">
            {title}
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <Button
                key={item.id}
                text={item.label}
                radius="full"
                size="large"
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 border ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-secondary border-[#E5E5E599] hover:bg-primary hover:text-white"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-65 sm:h-80 md:h-100 xl:h-112.5 rounded-3xl overflow-hidden">
        
        <Image
          src={activeItem.image}
          alt={activeItem.label}
          fill
          priority
          className="object-cover object-center transition-all duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex items-end">
          <p className="text-white p-4 sm:p-6 md:p-8 max-w-2xl text-sm sm:text-base md:text-lg">
            {activeItem.description}
          </p>
        </div>
      </div>

    </section>
  );
};

export default AuditTabs;

