// import Icon from "./icon";

// const WhyChooseUs = () => {
//     return (
//         <>
//         <section className="grid grid-cols-2">
//             <div className="bg-[#FFFFFF80] border border-[#E2E8F0] rounded-2xl space-y-5 px-6 py-9">
//                 <div className="flex justify-between flex-row-reverse">
                    
//                     <Icon src="/icons/tendering.svg" alt="WorkFlow Automation" iconSize={20} className="rounded-xl"
//                         bgColor="#B5020F33"
//                     />
//                     <div className="space-y-2 w-1/2">
//                         <h3 className="">Intelligent Tendering Platform</h3>
//                         <p className="text-[#94A3B8] text-[14px]">AI-powered search, bid scoring, and automated proposal generation that learns from your winning history.</p>
//                     </div>
                    
//                 </div>
//                 <div className="border border-[#E2E8F0] bg-[#F8FAFC] rounded-lg space-y-4 px-6 py-6">
//                     <div className="h-3 rounded-full bg-[#E2E8F0] w-1/2" />
//                     <div className="h-3 rounded-full bg-[#E2E8F0] w-[80%] mt-3" />
//                     <p className="w-fit text-[#34D399] text-[14px] bg-[#10B98133] border border-[#10B9814D] rounded-lg px-2 py-1">98% match accuracy</p>
//                 </div>
//             </div>
//             <div className="bg-[#FFFFFF80] border border-[#E2E8F0] rounded-2xl px-6 py-8 space-y-6">
                
//                 <Icon src="/icons/workflow.svg" alt="WorkFlow Automation" iconSize={20} className="rounded-xl"
//                     bgColor="#10B98133"
//                 />
//                 <div className="space-y-2">
//                     <h3 className="">Workflow Automation</h3>
//                     <p className="text-[#94A3B8] text-[14px]">RPA & ML for paperwork, compliance checks, approvals, and compliance reporting.</p>
//                 </div>
                
//             </div>

//             <div className="bg-[#FFFFFF80] border border-[#E2E8F0] rounded-2xl px-6 py-8 space-y-6">
                
//                 <Icon src="/icons/tech-solution.svg" alt="WorkFlow Automation" iconSize={20} shape="rounded" className="rounded-xl"
//                     bgColor="#F9731633"
//                 />
//                 <div className="space-y-2">
//                     <h3 className="">Custom Tech Solutions</h3>
//                     <p className="text-[#94A3B8] text-[14px]">RPA & ML for paperwork, compliance checks, approvals, and compliance reporting.</p>
//                 </div>
                
//             </div>

//             <div className="bg-[#FFFFFF80] border border-[#E2E8F0] rounded-2xl px-6 py-9">
//                 <div className="flex justify-between flex-row-reverse">
                    
//                     <Icon src="/icons/secure-cloud.svg" alt="WorkFlow Automation" iconSize={20} className="rounded-xl"
//                         bgColor="#6366F133"
//                     />
//                     <div className="space-y-2 w-1/2">
//                         <h3 className="">Secure & Cloud-First</h3>
//                         <p className="text-[#94A3B8] text-[14px]">Industry-grade security, encryption, and compliance frameworks built on future-ready infrastructure.</p>
//                     </div>
                    
//                 </div>
//                 <div className="mt-6">
//                     <ul className="">
//                         <li className="flex h-1 items-center gap-2 text-[#CBD5E1]">
//                             <Icon src="/icons/circle-blue-tick.svg" alt="Blue Tick" iconSize={15} padding={0} noBg noBorder className="w-0 h-0"/>
//                             ISO 27001 Certified
//                         </li>
//                         <li className="flex items-center gap-2 text-[#CBD5E1]">
//                             <Icon src="/icons/circle-blue-tick.svg" alt="Blue Tick" iconSize={15} padding={0} noBg noBorder className="w-0 h-0"/>
//                             99.9% Uptime SLA
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </section>
//         </>
//     )
// }

// export default WhyChooseUs;

// import Icon from "./icon";

// const WhyChooseUs = () => {
//   return (
//     <section className="">
//       {/* Header Section */}
//       <div className="mb-12">
//         <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Why Choose Us</h2>
//         <p className="text-[#64748B] max-w-2xl leading-relaxed">
//           We combine engineering excellence with advanced AI to solve the most 
//           complex challenges in tender management.
//         </p>
//       </div>

//       {/* Bento Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
//         {/* 1. Intelligent Tendering Platform (Spans 7 columns) */}
//         <div className="md:col-span-7 bg-white border border-[#F1F5F9] rounded-3xl p-8 flex flex-col justify-between shadow-sm">
//           <div className="flex justify-between items-start mb-10">
//             <div className="space-y-3 w-[80%]">
//               <h3 className="font-semibold text-[#0F172A]">Intelligent Tendering Platform</h3>
//               <p className="text-[#94A3B8] text-sm leading-relaxed">
//                 AI-powered search, bid scoring, and automated proposal generation that learns from your winning history.
//               </p>
//             </div>
//             <Icon src="/icons/tendering.svg" alt="Tendering" iconSize={24} className="rounded-xl" bgColor="#FEE2E2" />
//           </div>
          
//           {/* Mock UI Element */}
//           <div className="border border-[#F1F5F9] bg-[#F8FAFC] rounded-xl p-6 relative space-y-8">
//             <div className="space-y-3">
//               <div className="h-2 rounded-full bg-[#E2E8F0] w-1/2" />
//               <div className="h-2 rounded-full bg-[#E2E8F0] w-3/4" />
//             </div>
//             <div className="absolute bottom-4 right-4">
//               <span className="text-[12px] font-medium text-[#10B981] bg-[#DCFCE7] px-3 py-1 rounded-lg border border-[#BBF7D0]">
//                 98% Match
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* 2. Workflow Automation (Spans 5 columns) */}
//         <div className="md:col-span-5 bg-white border border-[#F1F5F9] rounded-3xl p-8 flex flex-col items-start shadow-sm">
//           <Icon src="/icons/workflow.svg" alt="Workflow" iconSize={24} className="rounded-xl mb-8" bgColor="#DCFCE7" />
//           <div className="space-y-3">
//             <h3 className="font-semibold text-[#0F172A]">Workflow Automation</h3>
//             <p className="text-[#94A3B8] text-sm leading-relaxed">
//               RPA & ML for paperwork, compliance checks, approvals, and compliance reporting.
//             </p>
//           </div>
//         </div>

//         {/* 3. Custom Tech Solutions (Spans 4 columns) */}
//         <div className="md:col-span-4 bg-white border border-[#F1F5F9] rounded-3xl p-8 flex flex-col items-start shadow-sm">
//           <Icon src="/icons/tech-solution.svg" alt="Custom Tech" iconSize={24} className="rounded-xl mb-8" bgColor="#FFEDD5" />
//           <div className="space-y-3">
//             <h3 className="font-semibold text-[#0F172A]">Custom Tech Solutions</h3>
//             <p className="text-[#94A3B8] text-sm leading-relaxed">
//               Your business problems deserve custom engineering — not off-the-shelf band-aids.
//             </p>
//           </div>
//         </div>

//         {/* 4. Secure & Cloud-First (Spans 8 columns) */}
//         <div className="md:col-span-8 bg-white border border-[#F1F5F9] rounded-3xl p-8 flex flex-col justify-between shadow-sm">
          
//           <div className="space-y-4">
//             <div className="flex justify-between items-start">
            
//               <div className="space-y-2 w-[80%]">
//                 <h3 className="font-semibold text-[#0F172A]">Secure & Cloud-First</h3>
//                 <p className="text-[#94A3B8]">
//                   Industry-grade security, encryption, and compliance frameworks built on future-ready infrastructure.
//                 </p>
//               </div>
              
            
//             <Icon src="/icons/secure-cloud.svg" alt="Security" iconSize={24} className="rounded-xl" bgColor="#E0E7FF" />
//           </div>
//               <ul className="space-y-6 pt-2">
//                 <li className="flex items-center gap-3 text-[#94A3B8] h-1">
//                   <Icon src="/icons/circle-blue-tick.svg" alt="circle-blue-tick" iconSize={14} noBg noBorder className="text-[#6366F1]" />
//                   ISO 27001 Certified
//                 </li>
//                 <li className="flex items-center gap-3 text-[#94A3B8] h-1">
//                   <Icon src="/icons/circle-blue-tick.svg" alt="circle-blue-tick" iconSize={14} noBg noBorder className="text-[#6366F1]" />
//                   99.9% Uptime SLA
//                 </li>
//               </ul>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

"use client";

import { WhyChooseTechionik } from "@/types/whychoose.type";
import Icon from "./icon";


interface WhyChooseProps {
  data: WhyChooseTechionik;
  className?: string;
}

const WhyChooseUs = ({ data, className = "py-10" }: WhyChooseProps) => {
  if (!data || !data.items) return null;

  // We only use the first 4 items from the API
  const displayItems = data.items.slice(0, 4);

  return (
    <section className={className}>
      {/* Header */}
      <div className="mb-14">
        <h2 className="mb-5 text-[30px] font-bold leading-[1.2] text-[#0F172A] md:text-[32px]">{data.title}</h2>
        <div 
          className="max-w-[620px] font-poppins text-[17px] leading-8 text-[#64748B] md:text-[18px]"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {displayItems.map((item, index) => {
          const isWide = index === 0 || index === 3;
          const colSpan =
            index === 0 || index === 3 ? "md:col-span-8" : "md:col-span-4";
          const minHeight =
            index === 0 || index === 1 ? "min-h-[280px]" : "min-h-[198px]";
          
          // Icon and Color Mapping based on your target design
          const configurations = [
            { icon: "/icons/tendering.svg", bg: "#FEE2E2" },    // Item 1
            { icon: "/icons/workflow.svg", bg: "#DCFCE7" },     // Item 2
            { icon: "/icons/tech-solution.svg", bg: "#FFEDD5" }, // Item 3
            { icon: "/icons/secure-cloud.svg", bg: "#E0E7FF" },  // Item 4
          ];
          const config = configurations[index];

          return (
            <div
              key={index}
              className={`${colSpan} ${minHeight} flex flex-col rounded-[14px] border border-[#DDE6F2] bg-white p-7 transition-all duration-300 hover:border-[#D4DEEC] hover:shadow-sm md:p-8`}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className={`${isWide ? "w-[74%]" : "w-full"} space-y-3`}>
                  {/* Narrow items (2 & 3) have icon above title */}
                  {!isWide && (
                    <Icon src={config.icon} alt="icon" iconSize={24} className="mb-5 rounded-[8px]" bgColor={config.bg} />
                  )}
                  <h3 className="text-[17px] font-bold leading-6 text-black">{item.title}</h3>
                  <div 
                    className="font-poppins text-[15px] leading-6 text-[#8EA0BD]"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>

                {/* Wide items (1 & 4) have icon on the right */}
                {isWide && (
                  <Icon src={config.icon} alt="icon" iconSize={24} className="rounded-[8px]" bgColor={config.bg} />
                )}
              </div>

              {/* Item 1 Specific: Mock UI */}
              {index === 0 && (
                <div className="relative mt-auto min-h-[118px] rounded-[8px] border border-[#DDE6F2] bg-[#F8FAFC] p-4 md:p-5">
                  <div className="space-y-3">
                    <div className="h-1.5 w-[34%] rounded-full bg-[#DDE5EF]" />
                    <div className="h-1.5 w-[68%] rounded-full bg-[#DDE5EF]" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="rounded-[5px] border border-[#8DEACB] bg-[#CCF8EA] px-2.5 py-1 font-poppins text-[10px] font-medium text-[#10B981]">
                      98% Match
                    </span>
                  </div>
                </div>
              )}

              {/* Item 4 Specific: List Items */}
              {index === 3 && (
                <ul className="mt-auto space-y-2">
                  {["ISO 27001 Certified", "99.9% Uptime SLA"].map((text, i) => (
                    <li key={i} className="flex items-center gap-2 font-poppins text-[14px] font-medium text-[#CBD5E1]">
                      <Icon src="/icons/circle-blue-tick.svg" alt="tick" iconSize={14} noBg noBorder className="text-[#6366F1]" />
                      {text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
