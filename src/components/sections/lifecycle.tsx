// import React from "react";
// import SearchIcon from "@/public/icons/search-black.svg";
// import SolutionIcon from "@/public/icons/solution.svg";
// import DesignIcon from "@/public/icons/design-pencil.svg";
// import CodingIcon from "@/public/icons/coding.svg";
// import QAIcon from "@/public/icons/qa.svg";
// import OptimizationIcon from "@/public/icons/optimization.svg";

import Badge from "../ui/badge";
import Icon from "../ui/icon";

// import Icon from "../ui/icon";

// interface LifecycleItem {
//   icon: React.FC<React.SVGProps<SVGSVGElement>>;
//   number: number;
//   title: string;
//   description: string;
//   tasks: string[];
// }

// interface LifeCycleCardProps {
//   item: LifecycleItem;
//   index: number;
// }

// const lifecycleData: LifecycleItem[] = [
//   { icon: SearchIcon, number: 1, title: "Discovery & Planning", description: "We analyze your business needs, identify challenges, and define the project roadmap.", tasks: ["Business analysis", "Market research", "Project scope definition"] },
//   { icon: SolutionIcon, number: 2, title: "Solution Architecture", description: "Our architects design the technical framework required to deliver scalable digital products.", tasks: ["System architecture", "Technology selection", "Infrastructure planning"] },
//   { icon: DesignIcon, number: 3, title: "UI/UX Design", description: "We create intuitive user experiences that ensure exceptional usability and engagement.", tasks: ["Wireframes", "Interactive prototypes", "Interface design"] },
//   { icon: CodingIcon, number: 4, title: "Development", description: "Our engineering team builds secure, scalable applications using modern technologies.", tasks: ["Agile development", "Sprint-based delivery", "Continuous integration"] },
//   { icon: QAIcon, number: 5, title: "Testing & QA", description: "Every solution undergoes rigorous testing to ensure enterprise-grade reliability.", tasks: ["Functional testing", "Security testing", "Performance validation"] },
//   { icon: OptimizationIcon, number: 6, title: "Launch & Optimization", description: "We deploy your product and continuously optimize performance for future growth.", tasks: ["Cloud deployment", "Monitoring", "Continuous improvements"] }
// ];

// const LifeCycleCard = ({ item, index }) => {
//   // Logic to determine if the item is at the end of a row based on screen size
//   // Mobile: every item is the end (1 col)
//   // Tablet (md): every 2nd item (2 cols)
//   // Desktop (lg): every 3rd item (3 cols)
//   const isLastMobile = true; 
//   const isLastTablet = (index + 1) % 2 === 0;
//   const isLastDesktop = (index + 1) % 3 === 0;

//   return (
//     <div className="space-y-6 relative">
//       <div className="flex items-center relative">
        
//         {/* CONNECTING LINE 
//           - Default: w-full (standard length)
//           - Use dynamic classes to change width at specific breakpoints
//         */}
//         <div className={`
//           absolute left-[calc(0%+50px)] h-[2px] bg-primary z-0 transition-all duration-300
//           /* Mobile width */
//           w-2/3
//           /* Tablet (md) width logic */
//           ${isLastTablet ? "md:w-2/3" : "md:w-[calc(100%+48px)]"}
//           /* Desktop (lg) width logic */
//           ${isLastDesktop ? "lg:w-2/3" : "lg:w-[calc(100%+48px)]"}
//         `} />

//         {/* Icon Circle */}
//         <div className="icon group cursor-pointer w-[60px] h-[60px] rounded-full border-4 border-[#F5F5F5] bg-[#F5F5F5] hover:bg-primary hover:border-primary flex justify-center items-center transition-all duration-300 relative z-10">
//           <Icon 
//             Svg={item.icon} 
//             alt={item.title} 
//             iconSize={24} 
//             iconClassName="text-black group-hover:text-primary transition-colors duration-300"
//             className="text-[#6366F1] group-hover:text-white transition-colors duration-300" 
            
//           />
//         </div>
//       </div>

//       {/* Text Content */}
//       <div className="px-4">
//         <h3 className="font-bold text-[20px] mb-2">
//           {item.number}. {item.title}
//         </h3>
//         <p className="text-secondary text-[16px] leading-[24px] mb-4 min-h-[72px]">
//           {item.description}
//         </p>
//         <ul className="space-y-3 pt-2 text-secondary text-[16px]">
//           {item.tasks.map((task, idx) => (
//             <li key={idx} className="flex items-center gap-2">
//               <Icon src="/icons/gray-tick.svg" alt="checkmark" iconSize={16} className="text-[#6366F1]" />
//               <span>{task}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// const LifecycleSection = () => {
//   return (
//     <section className="bg-[#FAFAFA80] border-y border-[#F5F5F5] mx-auto px-4 md:px-10 lg:px-20 xl:px-40 my-10 py-20 overflow-hidden">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
//         {lifecycleData.map((item, index) => (
//           <LifeCycleCard 
//             key={item.number} 
//             item={item} 
//             index={index} 
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default LifecycleSection

interface LifecycleItem {
  icon: string;
  number: number;
  title: string;
  description: string;
  tasks: string[];
}

interface LifeCycleCardProps {
  item: LifecycleItem;
  index: number;
}

const lifecycleData: LifecycleItem[] = [
  { icon: "icons/search-black.svg", number: 1, title: "Discovery & Planning", description: "We analyze your business needs, identify challenges, and define the project roadmap.", tasks: ["Business analysis", "Market research", "Project scope definition"] },
  { icon: "icons/solution.svg", number: 2, title: "Solution Architecture", description: "Our architects design the technical framework required to deliver scalable digital products.", tasks: ["System architecture", "Technology selection", "Infrastructure planning"] },
  { icon: "icons/design-pencil.svg", number: 3, title: "UI/UX Design", description: "We create intuitive user experiences that ensure exceptional usability and engagement.", tasks: ["Wireframes", "Interactive prototypes", "Interface design"] },
  { icon: "icons/rectangle-code.svg", number: 4, title: "Development", description: "Our engineering team builds secure, scalable applications using modern technologies.", tasks: ["Agile development", "Sprint-based delivery", "Continuous integration"] },
  { icon: "icons/qa.svg", number: 5, title: "Testing & QA", description: "Every solution undergoes rigorous testing to ensure enterprise-grade reliability.", tasks: ["Functional testing", "Security testing", "Performance validation"] },
  { icon: "icons/optimization.svg", number: 6, title: "Launch & Optimization", description: "We deploy your product and continuously optimize performance for future growth.", tasks: ["Cloud deployment", "Monitoring", "Continuous improvements"] }
];

const LifeCycleCard: React.FC<LifeCycleCardProps> = ({ item, index }) => {
  const isLastTablet = (index + 1) % 2 === 0;
  const isLastDesktop = (index + 1) % 3 === 0;

  return (
    <div className="space-y-6 relative">
      <div className="flex items-center relative">
        
        <div className={`
          absolute left-[calc(0%+50px)] h-[2px] bg-[#E5E5E5] z-0 transition-all duration-300
          w-2/3
          ${isLastTablet ? "md:w-2/3" : "md:w-[calc(100%+48px)]"}
          ${isLastDesktop ? "lg:w-2/3" : "lg:w-[calc(100%+48px)]"}
        `} />

        <div className="icon group cursor-pointer w-[60px] h-[60px] rounded-full border-4 border-[#fff] bg-[#F5F5F5] hover:bg-primary hover:border-primary flex justify-center items-center transition-all duration-300 relative z-10">
          <Icon 
            src={item.icon} 
            alt={item.title} 
            iconSize={24} 
            iconClassName="text-black group-hover:text-primary transition-colors duration-300"
            className="text-[#6366F1] group-hover:text-white transition-colors duration-300" 
          />
        </div>
      </div>

      <div className="px-4">
        <h3 className="font-bold text-[20px] mb-2">
          {item.number}. {item.title}
        </h3>

        <p className="text-secondary text-[16px] leading-[24px] mb-4 min-h-[72px]">
          {item.description}
        </p>

        <ul className="space-y-3 pt-2 text-secondary text-[16px]">
          {item.tasks.map((task: string, idx: number) => (
            <li key={idx} className="flex items-center gap-2">
              <Icon 
                src="/icons/gray-tick.svg" 
                alt="checkmark" 
                iconSize={16} 
                className="text-[#6366F1]" 
              />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const LifecycleSection = () => {
  return (
    <section className="bg-[#FAFAFA80] border-y border-[#F5F5F5] ">
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 xl:px-40 my-10 py-20">
        <div className="space-y-4 mb-10">
          <Badge text="How we work" radius="full" className="border border-[#E5E5E5]"/>
          <h2 className="">The Development Lifecycle</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {lifecycleData.map((item: LifecycleItem, index: number) => (
            <LifeCycleCard 
              key={item.number} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifecycleSection;

