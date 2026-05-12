// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Button from "../ui/button";
// import { solutionData } from "@/content/solutions.data";

// const Solutions = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//       {/* Left Side: List of Content */}
//       <div className="flex flex-col">
//         {solutionData.map((item, index) => {
//           const isActive = activeIndex === index;

//           return (
//             <div
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`group cursor-pointer border-b border-b-[#1C19171A] py-8 transition-all duration-300 first:pt-0 ${
//                 isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
//               }`}
//             >
//               <h3 className="text-[20px] font-medium transition-colors group-hover:text-primary">
//                 {item.title}
//               </h3>
              
//               {/* Animated Reveal of Description and Button */}
//               <div
//                 className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                   isActive ? "max-h-75 mt-3 opacity-100" : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <p className="text-[#1C191799] pb-6 leading-relaxed">
//                   {item.description}
//                 </p>
//                 <Button
//                   text="Contact Us"
//                   showIcon
//                   icon="/icons/primaryArrow.svg"
//                   radius="full"
//                   size="large"
//                   iconMode="static1"
//                   className="flex border border-[#E5E5E5] text-primary"
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Right Side: Sticky Image Wrapper */}
//       <div className="hidden md:block">
//         <div className="relative h-50 w-full rounded-2xl border border-[#0000000D] shadow-[inset_0px_2px_4px_1px_#0000000D] overflow-hidden bg-gray-50">
//           {solutionData.map((item, index) => (
//             <Image
//               key={index}
//               src={item.image}
//               alt={item.title}
//               fill
//               className={`object-cover transition-opacity duration-700 ease-in-out ${
//                 activeIndex === index ? "opacity-100" : "opacity-0"
//               }`}
//               priority={index === 0}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;


"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../ui/button";

// Define the shape of each solution item
interface SolutionItem {
  title: string;
  description: string;
  image: string;
}

interface SolutionsProps {
  data: SolutionItem[];
}

const Solutions = ({ data }: SolutionsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Left Side: List of Content */}
      <div className="flex flex-col">
        {data.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group cursor-pointer border-b border-b-[#1C19171A] py-8 transition-all duration-300 first:pt-0 ${
                isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              <h3 className="text-[20px] font-medium transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              
              {/* Animated Reveal of Description and Button */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isActive ? "max-h-125 mt-3 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {/* <p className="text-[#1C191799] pb-6 leading-relaxed">
                  {item.description}
                </p> */}
                <p 
                  className="text-[#1C191799] pb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }} 
                />
                <Button
                  text="Contact Us"
                  showIcon
                  icon="/icons/primaryArrow.svg"
                  radius="full"
                  size="large"
                  iconMode="static1"
                  className="flex border border-[#E5E5E5] text-primary"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Side: Sticky Image Wrapper */}
      <div className="hidden md:block sticky top-24">
        <div className="relative h-100 w-full rounded-2xl border border-[#0000000D] shadow-[inset_0px_2px_4px_1px_#0000000D] overflow-hidden bg-gray-50">
          {data.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              alt={item.title}
              fill
              className={`object-cover transition-opacity duration-700 ease-in-out ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;