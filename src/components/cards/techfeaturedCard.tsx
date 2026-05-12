// import Icon from "../ui/icon";

// interface TechFeatureCardProps {
//   title: string;
//   iconSrc: string;
//   features: string[];
// }

// const TechFeatureCard = ({ title, iconSrc, features }: TechFeatureCardProps) => {
//   return (
//     <div className="flex flex-col gap-6 p-8 lg:p-12">
//       {/* Header with Gradient Icon */}
//       <div className="flex items-center gap-5">
//         <div 
//           className="" >
//           <Icon 
//             src={iconSrc} 
//             alt={title} 
//             iconSize={24} 
//             className=""
//             bgClass="bg-gradient-to-b from-[#BD0917] to-[#4B4B4B]"
//           />
//         </div>
//         <h3 className="text-[#1A1A1A] text-[22px] font-bold tracking-tight">
//           {title}
//         </h3>
//       </div>

//       {/* Feature List */}
//       <ul className="space-y-4 ml-2">
//         {features.map((feature, index) => (
//           <li 
//             key={index} 
//             className="flex items-start gap-3 text-[#5F6368] text-[15.5px] leading-relaxed"
//           >
//             {/* Custom Bullet Point */}
//             <span className="mt-2.5 w-0.75 h-0.75 rounded-full bg-gray-400 shrink-0" />
//             {feature}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TechFeatureCard;

// export const techData = [
//   {
//     title: "Computer vision",
//     iconSrc: "/icons/hugeicons_appointment.svg",
//     features: [
//       "Interactive medical imaging solutions",
//       "Advanced diagnostics and screening applications",
//       "Intelligent screening tools",
//       "Medical staff training tools and simulators",
//       "Lab tests automation solutions",
//     ],
//   },
//   {
//     title: "Data Mining",
//     iconSrc: "/icons/hugeicons_appointment.svg",
//     features: [
//       "Interactive medical imaging solutions",
//       "Advanced diagnostics and screening applications",
//       "Intelligent screening tools",
//       "Medical staff training tools and simulators",
//       "Lab tests automation solutions",
//     ],
//   },
//   {
//     title: "Computer vision",
//     iconSrc: "/icons/hugeicons_appointment.svg",
//     features: [
//       "Interactive medical imaging solutions",
//       "Advanced diagnostics and screening applications",
//       "Intelligent screening tools",
//       "Medical staff training tools and simulators",
//       "Lab tests automation solutions",
//     ],
//   },
//   {
//     title: "Data Mining",
//     iconSrc: "/icons/hugeicons_appointment.svg",
//     features: [
//       "Interactive medical imaging solutions",
//       "Advanced diagnostics and screening applications",
//       "Intelligent screening tools",
//       "Medical staff training tools and simulators",
//       "Lab tests automation solutions",
//     ],
//   },
//   {
//     title: "Computer vision",
//     iconSrc: "/icons/hugeicons_appointment.svg",
//     features: [
//       "Interactive medical imaging solutions",
//       "Advanced diagnostics and screening applications",
//       "Intelligent screening tools",
//       "Medical staff training tools and simulators",
//       "Lab tests automation solutions",
//     ],
//   },
//   {
//     title: "Data Mining",
//     iconSrc: "/icons/hugeicons_appointment.svg",
//     features: [
//       "Interactive medical imaging solutions",
//       "Advanced diagnostics and screening applications",
//       "Intelligent screening tools",
//       "Medical staff training tools and simulators",
//       "Lab tests automation solutions",
//     ],
//   },
// ];

import Icon from "../ui/icon";
import clsx from "clsx";

// Single Item Interface
export interface TechFeature {
  title: string;
  iconSrc: string;
  features: string[];
}

// Group Component Props
interface TechFeatureCardGroupProps {
  data: TechFeature[];
}

const TechFeatureCard = ({ title, iconSrc, features }: TechFeature) => {
  return (
    <div className="flex flex-col gap-6 p-8 lg:p-12 h-full">
      {/* Header with Gradient Icon */}
      <div className="flex items-center gap-5">
        <Icon 
          src={iconSrc} 
          alt={title} 
          iconSize={24} 
          bgClass="bg-gradient-to-b from-[#BD0917] to-[#4B4B4B]"
        />
        <h3 className="text-[#1A1A1A] text-[22px] font-bold tracking-tight">
          {title}
        </h3>
      </div>

      {/* Feature List */}
      <ul className="space-y-4 ml-2">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className="flex items-start gap-3 text-[#5F6368] text-[15.5px] leading-relaxed"
          >
            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

// The Container Component
const TechFeatureCardGroup = ({ data }: TechFeatureCardGroupProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border-gray-100">
      {data.map((item, index) => (
        <div
          key={index}
          className={`border-gray-100 border-b ${index % 2 !== 0 ? "md:border-l" : ""} md:nth-last-[-n+2]:border-b-0`}
          
        >
          <TechFeatureCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default TechFeatureCardGroup;

export const featureCardData = [
    {
      title: "Computer vision",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
    {
      title: "Data Mining",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
    {
      title: "Computer vision",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
    {
      title: "Data Mining",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
    {
      title: "Computer vision",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
    {
      title: "Data Mining",
      iconSrc: "/icons/hugeicons_appointment.svg",
      features: [
        "Interactive medical imaging solutions",
        "Advanced diagnostics and screening applications",
        "Intelligent screening tools",
        "Medical staff training tools and simulators",
        "Lab tests automation solutions",
      ],
    },
  ];