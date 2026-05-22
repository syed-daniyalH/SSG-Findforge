// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { NavChild } from "@/app/api/menu/utils/buildnavlinks";
// import { MenuItem } from "@/data/megaMenuData";


// interface MegaMenuProps {
//   data: NavChild[];   // ← was MenuItem[]
//   parentSlug: string;
// }

// const MegaMenu = ({ data, parentSlug }: MegaMenuProps) => {
//   const [activeItem, setActiveItem] = useState<MenuItem>(data[0]);

//   useEffect(() => {
//     if (data.length > 0) {
//       setActiveItem(data[0]);
//     }
//   }, [data]);

//   if (!data || data.length === 0) return null;

//   return (
//     <div className="absolute left-0 right-0 invisible top-13 pt-4 z-50 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out group-hover:translate-y-0">
//       <div className="max-w-full mx-auto bg-white shadow-2xl overflow-hidden flex h-[650px] border border-white/10 ring-1 ring-black/5">
        
//         {/* --- LEFT COLUMN: CATEGORIES (Dark Sidebar) --- */}
//         <div className="lg:w-[25%] xl:w-[20%] bg-[#51555D] flex flex-col py-6 shrink-0 relative z-20">
//           <div className="flex flex-col gap-1 px-4">
//             {data.map((item) => (
//               <div
//                 key={item.id}
//                 onMouseEnter={() => setActiveItem(item)}
//                 className="relative"
//               >
//                 <Link
//                   href={parentSlug === 'services' ? `/services/${item.slug}` : `/${item.slug}`}
//                   className={`
//                     flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer text-[15px] font-medium
//                     ${
//                       activeItem.id === item.id
//                         ? "bg-linear-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 shadow-lg text-white"
//                         : "border-transparent text-gray-300 hover:bg-[#4B4E53]/50 hover:text-white"
//                     }
//                   `}
//                 >
//                   <div className="flex items-center gap-3">
//                     {activeItem.id === item.id && item.icon && (
//                       <div className="flex items-center justify-center w-8 h-8 bg-[#F05323] rounded-md shrink-0">
//                         <Image
//                           src={item.icon}
//                           width={20}
//                           height={20}
//                           alt={item.name}
//                           className="brightness-0 invert"
//                         />
//                       </div>
//                     )}
//                     <span>{item.name}</span>
//                   </div>

//                   {activeItem.id === item.id && (
//                     <Image
//                       src="/icons/arrow-diagonal.svg"
//                       width={10}
//                       height={10}
//                       alt="active"
//                       className="brightness-0 invert shrink-0"
//                     />
//                   )}
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Link */}
//           <Link
//             href={`/${parentSlug}`}
//             className={`${parentSlug === 'services' ? 'visible' : 'invisible'} mt-auto mx-4 mb-6 group flex items-center justify-between px-5 py-3.5 rounded-xl border-2 border-white bg-white/5 hover:bg-white/10 transition-all duration-300`}
//           >
//             <span className="text-white/70 group-hover:text-white text-[15px] font-medium transition-colors">
//               View All {parentSlug.charAt(0).toUpperCase() + parentSlug.slice(1)}
//             </span>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
//               <path d="M5 12h14M12 5l7 7-7 7" />
//             </svg>
//           </Link>

//           <div className="flex gap-3 justify-start px-4 opacity-70">
//             <Image src="/certificates/aws.png" alt="AWS" width={30} height={30} />
//             <Image src="/certificates/cisa.png" alt="CISA" width={30} height={30} />
//             <Image src="/certificates/iso.png" alt="ISO" width={30} height={30} />
//           </div>
//         </div>

//         {/* --- MIDDLE COLUMN: SUBCATEGORIES (White Area) --- */}
//         <div className="flex-1 bg-white p-10 flex flex-col relative z-10">
//           <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
//             <span className="w-2 h-2 rounded-full bg-[#F05323]"></span>
//             {activeItem.name}
//           </h3>

//           <div className="grid grid-cols-2 gap-x-12 gap-y-6 overflow-y-auto pr-2 custom-scrollbar">
//             {activeItem.children && activeItem.children.length > 0 ? (
//               activeItem.children.map((child) => (
//                 <Link
//                   key={child.id}
//                   /* FIXED: Conditionally build the subcategory URL */
//                   href={parentSlug === 'services' ? `/services/${activeItem.slug}/${child.slug}` : `/${activeItem.slug}/${child.slug}`}
//                   className="group/sub flex items-start gap-3 p-2 -ml-2 rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                   <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F05323] shrink-0 group-hover/sub:scale-125 transition-transform" />
//                   <div>
//                     <span className="block text-gray-800 font-semibold text-[15px] group-hover/sub:text-[#F05323] transition-colors">
//                       {child.name}
//                     </span>
//                     <span className="text-xs text-gray-400 mt-1 block">
//                       Explore {child.name}
//                     </span>
//                   </div>
//                 </Link>
//               ))
//             ) : (
//               <div className="col-span-2 py-10 text-center text-gray-400 italic">
//                 No sub-items available for this category.
//               </div>
//             )}
//           </div>

//           <div className="mt-auto pt-6 border-t border-gray-100">
//             <Link
//               /* FIXED: Conditionally build the "View All [Category]" URL */
//               href={parentSlug === 'services' ? `/services/${activeItem.slug}` : `/${activeItem.slug}`}
//               className="text-[#F05323] font-semibold flex items-center gap-2 text-sm hover:translate-x-1 transition-transform"
//             >
//               All {activeItem.name} {parentSlug === 'services' ? 'Services' : ''}
//               <span>→</span>
//             </Link>
//           </div>
//         </div>

//         {/* --- RIGHT COLUMN: FEATURED (Dynamic Image Area) --- */}
//         <div className="lg:w-[25%] xl:w-[20%] bg-[#F5F5F7] p-8 flex flex-col shrink-0 border-l border-gray-200">
//           <h4 className="text-gray-500 font-bold text-sm mb-6 uppercase tracking-wider">Featured</h4>

//           <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col group/card border border-gray-200/60">
//             <div className="relative h-44 w-full bg-gray-200 overflow-hidden">
//               <Image
//                 src={activeItem.imageUrl || "/images/megamenu-newsletter.png"}
//                 alt="Featured"
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover/card:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//             </div>

//             <div className="p-6 flex flex-col flex-1">
//               <h5 className="font-bold text-gray-900 leading-tight mb-3 text-lg">
//                 Transforming Ideas into Digital Experiences
//               </h5>
//               <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
//                 We deliver innovative {activeItem.name.toLowerCase()} solutions
//                 built for high performance and scalability.
//               </p>

//               <div className="mt-auto">
//                 <Link
//                   href="/contact"
//                   className="w-full py-3 px-4 rounded-lg border border-[#F05323] text-[#F05323] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#F05323] hover:text-white transition-all duration-300"
//                 >
//                   Get Free Consultation
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MegaMenu;


"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavChild } from "@/lib/api/menu/utils/buildnavlinks";
import Icon from "@/components/ui/icon";
import { buildMenuChildHref } from "@/lib/routes";

interface MegaMenuProps {
  data: NavChild[];
  parentSlug: string;
}

const MegaMenu = ({ data, parentSlug }: MegaMenuProps) => {
  const [activeItem, setActiveItem] = useState<NavChild>(data[0]);
  const isResourcesMenu = parentSlug === "blog" || parentSlug === "resources";
  const parentLabel =
    parentSlug === "services"
      ? "Services"
      : parentSlug.charAt(0).toUpperCase() + parentSlug.slice(1);
  const parentHref = parentSlug ? `/${parentSlug}` : "/";

  useEffect(() => {
    if (data.length > 0) setActiveItem(data[0]);
  }, [data]);

  if (!data || data.length === 0) return null;

  if (isResourcesMenu) {
    return (
      <div className="absolute left-0 right-0 invisible top-full pt-2 z-50 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
        <div className="mx-auto grid max-w-[760px] grid-cols-1 gap-3 rounded-[24px] border border-gray-100 bg-white p-4 shadow-xl sm:grid-cols-2">
          {data.map((item) => (
            <Link
              key={item.id}
              href={item.href || `/${item.slug}`}
              className="group/resource flex items-center gap-4 rounded-[16px] border border-transparent p-4 transition-all hover:border-primary/20 hover:bg-[#F8FAFC]"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[12px] bg-gray-100">
                <Image
                  src={item.imageUrl || "/images/ai.webp"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/resource:scale-105"
                />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-black group-hover/resource:text-primary">
                  {item.name}
                </h4>
                <p className="mt-1 font-poppins text-[12px] leading-5 text-gray-500">
                  Open {item.name.toLowerCase()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-0 right-0 invisible top-full pt-2 z-50 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-[40px] overflow-hidden flex min-h-125 border border-gray-100 p-10 gap-10">
        
        {/* --- LEFT COLUMN: MAIN SERVICES LIST --- */}
        <div className="w-[30%] flex flex-col gap-4 border-r border-gray-50 pr-6">
          <Link href={parentHref} className="text-[#BD0917] font-bold flex items-center gap-2 mb-4 hover:underline">
            Explore {parentLabel} <span className="text-lg">→</span>
          </Link>

          <div className="flex flex-col gap-2">
            {data.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveItem(item)}
                className={`flex items-center gap-4 px-4 py-4 rounded-xl cursor-pointer transition-all duration-300 border-2
                  ${activeItem.id === item.id 
                    ? "border-dashed border-[#BD0917] bg-white shadow-sm" 
                    : "border-transparent hover:bg-gray-50"}`}
              >
                {/* Icon Box */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 
                  ${activeItem.id === item.id ? "bg-[#BD0917]/5" : "bg-gray-100"}`}>
                  <Icon 
                    src={item.icon || "/icons/facebook.svg"} 
                    iconSize={20} 
                    className={activeItem.id === item.id ? "text-[#BD0917]" : "text-gray-400"} 
                  />
                </div>
                <span className={`text-[15px] font-bold ${activeItem.id === item.id ? "text-black" : "text-gray-600"}`}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- MIDDLE COLUMN: SERVICE DETAILS --- */}
        <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-12">
          {activeItem.children?.map((child) => (
            <Link 
              key={child.id} 
              href={buildMenuChildHref(parentSlug, activeItem.slug, child.slug)}
              className="group/detail flex flex-col gap-2"
            >
              <h4 className="text-[16px] font-bold text-black group-hover/detail:text-[#BD0917] transition-colors">
                {child.name}
              </h4>
              <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
                Custom end-to-end software, APIs, integrations, and digital platforms tailored for your needs.
              </p>
            </Link>
          ))}
        </div>

        {/* --- RIGHT COLUMN: LATEST BLOGS --- */}
        <div className="w-[25%] flex flex-col border-l border-gray-50 pl-10">
          <Link href="/blog" className="text-[#BD0917] font-bold flex items-center gap-2 mb-6 hover:underline">
            Our Latest Blogs <span className="text-lg">→</span>
          </Link>

          <div className="bg-white group/blog cursor-pointer">
            <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4">
              <Image 
                src="/images/ai.webp" // Replace with real dynamic image
                alt="Blog" 
                fill 
                className="object-cover group-hover/blog:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] text-gray-400 uppercase font-bold tracking-widest">
                <span>AI</span>
                <span>•</span>
                <span>13 March 2024</span>
              </div>
              <h5 className="font-bold text-[16px] leading-tight text-black group-hover/blog:text-[#BD0917]">
                Train Or Bus Journey? Which one suits?
              </h5>
              <p className="text-[13px] text-gray-500 line-clamp-2">
                The choice between a train or bus journey depends on various factors such as the...
              </p>
              <Link href="/blog" className="text-[#BD0917] text-sm font-bold flex items-center gap-1 group/more">
                Read More <span className="group-hover/more:translate-x-1 transition-transform">↗</span>
              </Link>
            </div>
          </div>

          {/* Bottom Review Section */}
          <div className="mt-auto pt-6 flex flex-col gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <Image src={`/images/testimonial${i}.webp`} alt="User" width={32} height={32} />
                </div>
              ))}
            </div>
            <Link href="/testimonial" className="text-[#BD0917] text-sm font-bold flex items-center gap-2">
              Read Customer Reviews <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;
