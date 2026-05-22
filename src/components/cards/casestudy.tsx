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
import Link from "next/link";
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
    <Link href={slug} className="block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[8px] border border-[#E2E8F0] bg-white transition hover:-translate-y-0.5 hover:shadow-md">
        
        {/* IMAGE */}
        <div className="relative aspect-[1.45] w-full overflow-hidden border-b border-[#E2E8F0]">
          <Image
            src={image}
            alt={company || title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex grow flex-col px-5 py-5">

          {/* HEADER */}
          <div className="mb-4 flex items-center justify-between">
            <span className="font-poppins text-[10px] font-semibold uppercase tracking-wide text-primary">
              {category}
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E2E8F0]">
              <Image src="/icons/primaryArrow.svg" alt="" width={12} height={12} />
            </span>
          </div>

          {/* TEXT */}
          <div className="mb-5 grow">
            {company && (
              <p className="font-poppins text-[10px] font-medium uppercase text-neutral-dark">{company}</p>
            )}

            <h3 className="pt-2 text-[17px] font-bold leading-6 text-secondary">{title}</h3>

            <p className="line-clamp-3 pt-3 font-poppins text-[12px] leading-5 text-neutral-dark">
              {description}
            </p>
          </div>

          {/* SUBCATEGORIES */}
          {subcategories.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {subcategories.map((sub, index) => (
                <span
                  key={index}
                  className="rounded-full border border-[#E2E8F0] px-2.5 py-1 font-poppins text-[10px] text-neutral-dark"
                >
                  {sub}
                </span>
              ))}
            </div>
          )}

          {/* STATS */}
          {stats.length > 0 && (
            <div
              className="grid gap-4 border-t border-t-[#E2E8F0] pt-4"
              style={{
                gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
              }}
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="font-poppins text-[12px] font-bold text-secondary">{stat.value}</p>
                  <p className="font-poppins text-[10px] text-neutral-dark">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </article>
    </Link>
  );
};

export default CaseStudyCard;

