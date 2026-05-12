// import Image from "next/image";
// import Badge from "../ui/badge";
// import Link from "next/link";
// import Button from "../ui/button";

// export interface CaseStudyCardProps {
//     image: string;
//     category?: string;
//     icon?:string;
//     company?:string;
//     title: string;
//     description: string;
//     linkURL: string;
//     subcatgory?:string;
//     stats: {
//         efficiency?: string;
//         projects?: string;
//         teams?: string;
//         orders?: string;
//         gmv?: string;
//         vendors?: string;
//         timespent?: string;
//         pageviews?: string;
//         activeusers?: string;
//         rating?: string;
//         downloads?: string;
//         retention?: string;
//         cartvalue?: string;
//         sales?: string;
//         satisfaction?: string;
//         conversion?: string;
//         engagement?: string;
//     }
// }

// const CaseStudyCard = () => {
//     return (
//         <>
//             <section className="">
//                 <div className="card border-2 border-[#E2E8F0] rounded-2xl">
//                     <div className="image relative w-full h-50 overflow-hidden rounded-2xl border-b-2 border-[#E2E8F0]">
//                         <Image src="/images/design.webp" alt="Brand" fill priority className="object-cover" />
//                     </div>
//                     <div className="px-8 py-8">
//                         <div className="flex justify-between items-center mb-8">
//                             <Badge text="Branding" radius="full" className="bg-[#F1F5F9] text-secondary px-2 py-1"/>
//                             <Link href="#" className="">
//                                 <Button showIcon={true} iconRotate={45} icon="/icons/arrowRight.svg" 
//                                 size="small" radius="full" className="" />
//                             </Link>
//                         </div>
//                         <div className="mb-8 space-y-4">
//                             <p className="company">TechFlow Inc.</p>
//                             <h3 className="">Revolutionary AI Platform Design</h3>
//                             <p className="">
//                                 A complete brand redesign and digital platform for a cutting-edge AI
//                                 technology company, focusing on user experience and modern
//                                 aesthetics.
//                             </p>
//                         </div>
//                         <div className="subcategry flex gap-2 mb-8">
//                             <Badge text="UI/UX" radius="full" size="small" className="text-[#64748B] border border-[#E2E8F0]"/>
//                             <Badge text="Branding" radius="full" size="small" className="text-[#64748B] border border-[#E2E8F0]"/>
//                             <Badge text="Web Design" radius="full" size="small" className="text-[#64748B] border border-[#E2E8F0]"/>
//                         </div>

//                         <div className="grid grid-cols-3 border-t-2 pt-4 border-t-[#E2E8F0]">  {/*  here i want border-t pt-4*/}
//                              <div className="">
//                                 <p className="">+245%</p>
//                                 <p className="">Engagement</p>
//                              </div>
//                              <div className="">
//                                  <p className="">+180%</p>
//                                  <p className="">Conversion</p>

//                              </div>
//                              <div className="">
//                                 <p className="">98%</p>
//                                 <p className="">Satisfaction</p>
//                              </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     ) 
    
// }

// export default CaseStudyCard;

// import Image from "next/image";
// import Link from "next/link";
// import { CaseStudyCardProps } from "./types";

// const CaseStudyCard = ({
//   image,
//   category,
//   company,
//   title,
//   description,
//   linkURL,
//   subcategories = [],
//   stats,
// }: CaseStudyCardProps) => {
//   return (
//     <section className="w-[562px]">
//       <div className="border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white">
        
//         {/* IMAGE SECTION */}
//         <div className="relative w-[562px] h-[316.13px] border-b border-[#E2E8F0]">
//           <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* CONTENT SECTION */}
//         <div className="w-[562px] h-[399.5px] p-[30px] flex flex-col justify-between">
          
//           {/* TOP SECTION */}
//           <div>
//             <div className="flex justify-between items-center mb-6">
//               {category && (
//                 <span className="text-sm px-3 py-1 rounded-full bg-[#F1F5F9] text-[#0F172A]">
//                   {category}
//                 </span>
//               )}

//               <Link
//                 href={linkURL}
//                 className="text-sm font-medium text-blue-600 hover:underline"
//               >
//                 View Case →
//               </Link>
//             </div>

//             {company && (
//               <p className="text-sm text-[#64748B] mb-2">{company}</p>
//             )}

//             <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
//               {title}
//             </h3>

//             <p className="text-sm text-[#64748B] leading-relaxed">
//               {description}
//             </p>
//           </div>

//           {/* SUBCATEGORIES */}
//           {subcategories.length > 0 && (
//             <div className="flex flex-wrap gap-2 mt-6">
//               {subcategories.map((item, idx) => (
//                 <span
//                   key={idx}
//                   className="text-xs px-3 py-1 rounded-full border border-[#E2E8F0] text-[#64748B]"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* STATS */}
//           <div className="grid grid-cols-3 border-t border-[#E2E8F0] pt-4 mt-6">
//             {stats.map((stat, idx) => (
//               <div key={idx}>
//                 <p className="text-base font-semibold text-[#0F172A]">
//                   {stat.value}
//                 </p>
//                 <p className="text-xs text-[#64748B]">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudyCard;

import Image from "next/image";
import Badge from "../ui/badge";
import Link from "next/link";
import Button from "../ui/button";
import { CaseStudyCardProps } from "@/types/casestudy.type";

const CaseStudyCard = ({
  slug,
  image,
  category,
  company,
  title,
  description,
  subcategories = [],
  stats = [],
}: CaseStudyCardProps) => {
  return (
    <section className="">
      <div className="card border-2 border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col h-full">
        
        {/* IMAGE */}
        <div className="relative w-full h-100 overflow-hidden border-b-2 border-[#E2E8F0]">
          <Image
            src={image}
            alt={company || title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="px-8 py-8 flex flex-col grow">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <Badge
              text={category}
              radius="full"
              className="bg-[#F1F5F9] text-neutral-dark px-3 py-1"
            />

            <Link href={slug}>
              <Button
                showIcon={true}
                icon="/icons/primaryArrow.svg"
                size="small"
                iconMode="static1"
                radius="full"
              />
            </Link>
          </div>

          {/* TEXT */}
          <div className="mb-8 space-y-4 grow">
            {company && (
              <p className="text-neutral-dark uppercase">{company}</p>
            )}

            <h3>{title}</h3>

            <p className="text-neutral-dark line-clamp-3">
              {description}
            </p>
          </div>

          {/* SUBCATEGORIES */}
          {subcategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {subcategories.map((sub, index) => (
                <Badge
                  key={index}
                  text={sub}
                  radius="full"
                  size="medium"
                  className="text-neutral-dark border border-[#E2E8F0]"
                />
              ))}
            </div>
          )}

          {/* STATS */}
          {stats.length > 0 && (
            <div
              className="grid border-t-2 pt-4 border-t-[#E2E8F0] gap-4"
              style={{
                gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
              }}
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="font-medium">{stat.value}</p>
                  <p className="text-neutral-dark">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default CaseStudyCard;

