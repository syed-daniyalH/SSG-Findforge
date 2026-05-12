// // components/DesignPrincipleSection.tsx
// import Image from "next/image";
// import Icon from "../ui/icon";
// import { DesignPrincipleSectionProps, ContentBlockProps } from "@/types/designPrincipleService.type";

// const ContentBlock = ({ item, index, align }: ContentBlockProps) => (
//   <div className={`w-full p-4 ${align === 'right' ? 'md:pl-12 md:text-justify' : 'md:pr-12 md:text-justify'}`}>
//     <h3 className="font-bold text-[22px] md:text-[24px] mb-3 text-[#1A1A1A]">
//       {index}. {item.title}
//     </h3>
//     <p className="text-[#5F6368] text-[15px]">
//       {item.description}
//     </p>
//   </div>
// );

// const DesignPrincipleSection = ({ hasIcon = false }: DesignPrincipleSectionProps) => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-30 py-5 bg-white overflow-hidden">
//       <div className="relative">
        
//         {/* Central Vertical Line (Desktop only) */}
//         <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-[#F5F5F5] -translate-x-1/2 hidden md:block" />

//         <div className="flex flex-col gap-12 md:gap-4">
//           {designPrinciples.map((item, index) => {
//             const isEven = index % 2 === 0;
//             const displayIndex = index + 1;

//             return (
//               <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center xl:items-start">
                
//                 {/* 1. ICON BLOCK */}
//                 <div className="flex flex-col items-center order-1 md:order-2 relative min-w-[100px] mb-4 md:mb-0">
//                   <div className="flex items-center justify-center z-10 ">
//                     {hasIcon ? (
//                       <Icon src={item.icon} alt="" iconSize={24} bgColor="#fff" />
//                     ) : (
//                       <span className="text-primary font-bold bg-white px-4 py-3 border border-[#F5F5F5] rounded-full">
//                         0{displayIndex}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* 2. DESCRIPTION BLOCK */}
//                 <div className={`flex justify-center order-2 ${isEven ? 'md:order-3 md:justify-start' : 'md:order-1 md:justify-end'}`}>
//                   <ContentBlock 
//                     item={item} 
//                     index={displayIndex} 
//                     align={isEven ? 'right' : 'left'} 
//                   />
//                 </div>

//                 {/* 3. IMAGE BLOCK */}
//                 <div className={`flex justify-center order-3 ${isEven ? 'md:order-1' : 'md:order-3'}`}>
//                   <div className="relative w-full max-w-[540px] aspect-[16/8] rounded-2xl overflow-hidden shadow-lg transform rotate-2">
//                     <Image 
//                       src={item.image} 
//                       alt={item.title} 
//                       fill 
//                       className="object-cover transition-transform duration-500 hover:scale-105" 
//                     />
//                   </div>
//                 </div>

//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DesignPrincipleSection;

// components/DesignPrincipleSection.tsx
import Image from "next/image";
import Icon from "../ui/icon";
import { DesignPrincipleSectionProps, ContentBlockProps } from "@/types/designPrincipleService.type";

const ContentBlock = ({ item, index, align }: ContentBlockProps) => (
  <div className={`w-full p-4 ${align === 'right' ? 'md:pl-12 md:text-justify' : 'md:pr-12 md:text-justify'}`}>
    <h3 className="font-bold text-[22px] md:text-[24px] mb-3 text-[#1A1A1A]">
      {index}. {item.title}
    </h3>
    <p className="text-[#5F6368] text-[15px]">{item.description}</p>
  </div>
);

// Destructure 'data' from props here
const DesignPrincipleSection = ({ data, hasIcon = false }: DesignPrincipleSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-30 py-5 bg-white overflow-hidden">
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-[#F5F5F5] -translate-x-1/2 hidden md:block" />

        <div className="flex flex-col gap-12 md:gap-4">
          {/* Use the 'data' prop passed from the parent */}
          {data.map((item, index) => {
            const isEven = index % 2 === 0;
            const displayIndex = index + 1;

            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center xl:items-start">
                <div className="flex flex-col items-center order-1 md:order-2 relative min-w-[100px] mb-4 md:mb-0">
                  <div className="flex items-center justify-center z-10 ">
                    {hasIcon ? (
                      <Icon src={item.icon} alt="" iconSize={24} bgColor="#fff" />
                    ) : (
                      <span className="text-primary font-bold bg-white px-4 py-3 border border-[#F5F5F5] rounded-full">
                        0{displayIndex}
                      </span>
                    )}
                  </div>
                </div>

                <div className={`flex justify-center order-2 ${isEven ? 'md:order-3 md:justify-start' : 'md:order-1 md:justify-end'}`}>
                  <ContentBlock item={item} index={displayIndex} align={isEven ? 'right' : 'left'} />
                </div>

                <div className={`flex justify-center order-3 ${isEven ? 'md:order-1' : 'md:order-3'}`}>
                  <div className="relative w-full max-w-[540px] aspect-[16/8] rounded-2xl overflow-hidden shadow-lg transform rotate-2">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignPrincipleSection;

