// import Image from "next/image";
// import Badge from "../ui/badge";

// export interface IndustryProps {
//   icon: string;
//   title: string;
//   subtitle?: string;
// }

// const Industry = () => {
//   return (
//     <>
//       <section className="grid grid-rows-2 gap-3">
//         <div className="grid grid-cols-[2fr_1fr_1fr] gap-3">
//           <div className="bg-grad-hero flex justify-between px-9 py-9 rounded-2xl">
//             <div className="flex flex-col gap-20">
//               <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0">
//                 <Image
//                   src="/icons/business.svg"
//                   alt="Business Services"
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//               </div>
//               <div className="">
//                 <h3 className="text-white">Business Services</h3>
//                 <p className="text-white">Developers, QA, UI/UX, Support</p>
//               </div>
//             </div>
//             <div className="">
//               <Badge text="Top Demand" variant="glass" />
//             </div>
//           </div>
//           <div className="bg-white border border-[#E5E5E599] flex justify-between px-9 py-9 rounded-2xl">
//             <div className="flex flex-col gap-15 items-end">
//               <div className="w-12 h-12 rounded-lg bg-white border border-[#F5F5F5] flex items-center justify-center shrink-0">
//                 <Image
//                   src="/icons/business.svg"
//                   alt="Business Services"
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//               </div>
//               <div className="">
//                 <h3 className="text-secondary">Business Services</h3>
//                 <p className="text-neutral-dark">
//                   Developers, QA, UI/UX, Support
//                 </p>
//               </div>
//             </div>
//             {/* <div className="">
//             <Badge text="Top Demand" variant="glass" />
//             </div> */}
//           </div>
//           <div className="space-y-3">
//             <div className="bg-white border border-[#E5E5E599] flex justify-between px-9 py-9 rounded-2xl">
//               <div className="flex gap-6">
//                 <div className="w-12 h-12 rounded-lg bg-white border border-[#F5F5F5] flex items-center justify-center shrink-0">
//                   <Image
//                     src="/icons/business.svg"
//                     alt="Business Services"
//                     width={20}
//                     height={20}
//                     className="object-contain"
//                   />
//                 </div>
//                 <div className="">
//                   <h3 className="text-secondary">Business Services</h3>
//                   {/* <p className="text-neutral-dark">
//                 Developers, QA, UI/UX, Support
//             </p> */}
//                 </div>
//               </div>
//               {/* <div className="">
//             <Badge text="Top Demand" variant="glass" />
//             </div> */}
//             </div>

//             <div className="bg-white border border-[#E5E5E599] flex justify-between px-9 py-9 rounded-2xl">
//               <div className="flex gap-6">
//                 <div className="w-12 h-12 rounded-lg bg-white border border-[#F5F5F5] flex items-center justify-center shrink-0">
//                   <Image
//                     src="/icons/business.svg"
//                     alt="Business Services"
//                     width={20}
//                     height={20}
//                     className="object-contain"
//                   />
//                 </div>
//                 <div className="">
//                   <h3 className="text-secondary">Business Services</h3>
//                   {/* <p className="text-neutral-dark">
//             Developers, QA, UI/UX, Support
//             </p> */}
//                 </div>
//               </div>
//               {/* <div className="">
//             <Badge text="Top Demand" variant="glass" />
//             </div> */}
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-[2fr_1fr_1fr] gap-3">
//            <div className="bg-white border max-h-40 border-[#E5E5E599] flex justify-between px-9 py-9 rounded-2xl">
//             <div className="flex gap-5">
//               <div className="w-12 h-12 rounded-lg bg-white border border-[#F5F5F5] flex items-center justify-center shrink-0">
//                 <Image
//                   src="/icons/business.svg"
//                   alt="Business Services"
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//               </div>
//               <div className="">
//                 <h3 className="text-secondary">Business Services</h3>
//                 <p className="text-neutral-dark">
//                   Developers, QA, UI/UX, Support
//                 </p>
//               </div>
//             </div>
//             {/* <div className="">
//               <Badge text="Top Demand" variant="glass" />
//             </div> */}
//           </div>

//           <div className="bg-white border max-h-40 border-[#E5E5E599] flex justify-between px-9 py-9 rounded-2xl">
//             <div className="flex gap-6">
//               <div className="w-12 h-12 rounded-lg bg-white border border-[#F5F5F5] flex items-center justify-center shrink-0">
//                 <Image
//                   src="/icons/business.svg"
//                   alt="Business Services"
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//               </div>
//               <div className="">
//                 <h3 className="text-secondary">Business Services</h3>
//                 {/* <p className="text-neutral-dark">
//                     Developers, QA, UI/UX, Support
//                     </p> */}
//               </div>
//             </div>
//             {/* <div className="">
//                 <Badge text="Top Demand" variant="glass" />
//                 </div> */}
//           </div>

//           <div className="bg-white border max-h-40 border-[#E5E5E599] flex justify-between px-9 py-9 rounded-2xl">
//             <div className="flex gap-6">
//               <div className="w-12 h-12 rounded-lg bg-white border border-[#F5F5F5] flex items-center justify-center shrink-0">
//                 <Image
//                   src="/icons/business.svg"
//                   alt="Business Services"
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//               </div>
//               <div className="">
//                 <h3 className="text-secondary">Business Services</h3>
//                 {/* <p className="text-neutral-dark">
//                     Developers, QA, UI/UX, Support
//                     </p> */}
//               </div>
//             </div>
//             {/* <div className="">
//                 <Badge text="Top Demand" variant="glass" />
//                 </div> */}
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Industry;

// import Image from "next/image";
// import Badge from "../ui/badge";
// import { IndustryItem } from "../sections/industries";

// const IndustryCard = ({
//   icon,
//   title,
//   subtitle,
//   badge,
//   variant = "default",
// }: IndustryItem) => {
  
//   const baseStyles =
//     "flex justify-between px-9 py-9 rounded-2xl";

//   const variants = {
//     featured:
//       "bg-grad-hero text-white",
//     default:
//       "bg-white border border-[#E5E5E599]",
//     compact:
//       "bg-white border border-[#E5E5E599]",
//     horizontal:
//       "bg-white border border-[#E5E5E599] max-h-40",
//   };

//   return (
//     <div className={`${baseStyles} ${variants[variant]}`}>
      
//       {/* LEFT CONTENT */}
//       <div
//         className={`flex ${
//           variant === "featured"
//             ? "flex-col gap-20"
//             : variant === "default"
//             ? "flex-col gap-15 items-end"
//             : "gap-6"
//         }`}
//       >
//         {/* ICON */}
//         <div className="w-12 h-12 rounded-lg bg-white border border-[#F5F5F5] flex items-center justify-center shrink-0">
//           <Image
//             src={icon}
//             alt={title}
//             width={20}
//             height={20}
//             className="object-contain"
//           />
//         </div>

//         {/* TEXT */}
//         <div>
//           <h3
//             className={
//               variant === "featured"
//                 ? "text-white"
//                 : "text-secondary"
//             }
//           >
//             {title}
//           </h3>

//           {subtitle && (
//             <p
//               className={
//                 variant === "featured"
//                   ? "text-white"
//                   : "text-neutral-dark"
//               }
//             >
//               {subtitle}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* BADGE */}
//       {badge && variant === "featured" && (
//         <Badge text={badge.text} />
//       )}
//     </div>
//   );
// };

// export default IndustryCard;

import Image from "next/image";
import Badge from "../ui/badge";
import { IndustryItem } from "@/types/industry";

const IndustryCard = ({ item }: { item: IndustryItem }) => {
  // Featured Layout (The blue gradient card)
  if (item.layout === "featured") {
    return (
      <div className="bg-grad-hero flex min-h-[230px] flex-col-reverse gap-6 rounded-[14px] px-7 py-7 sm:flex-row sm:gap-0 justify-between">
        <div className="flex flex-col gap-20">
          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
            <Image src={item.icon} alt={item.title} width={20} height={20} className="object-contain" />
          </div>
          <div>
            <h3 className="text-white">{item.title}</h3>
            {item.subtitle && <p className="text-white">{item.subtitle}</p>}
          </div>
        </div>
        {item.badge && 
            <div className="">
                <Badge text={item.badge} variant="glass" />
            </div>
        }
      </div>
    );
  }

  // Standard Layout (White background with subtitle)
  if (item.layout === "standard") {
    return (
      <div className="bg-white border border-[#E5E5E599] flex min-h-[230px] justify-between px-7 py-7 rounded-[14px]">
        <div className="flex flex-col items-start gap-6">
          <div className="w-10 h-10 rounded-lg bg-white border border-[#F5F5F5] flex items-center justify-center shrink-0">
            <Image src={item.icon} alt={item.title} width={20} height={20} className="object-contain" />
          </div>
          <div>
            <h3 className="text-secondary">{item.title}</h3>
            {item.subtitle && <p className="text-neutral-dark">{item.subtitle}</p>}
            {item.description && (
              <p className="pt-2 text-sm leading-6 text-neutral-dark">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Compact/Horizontal Layouts
  return (
    <div className="bg-white border border-[#E5E5E599] flex min-h-[120px] justify-between px-7 py-7 rounded-[14px]">
      <div className="flex items-center gap-6">
        <div className="w-10 h-10 rounded-lg bg-white border border-[#F5F5F5] flex items-center justify-center shrink-0">
          <Image src={item.icon} alt={item.title} width={20} height={20} className="object-contain" />
        </div>
        <div>
          <h3 className="text-secondary">{item.title}</h3>
          {/* Subtitle Logic */}
            {item.subtitle && (
            <p className={`text-neutral-dark text-sm ${item.layout === "compact" ? "block lg:hidden" : "block"}`}>
                {item.subtitle}
            </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default IndustryCard
