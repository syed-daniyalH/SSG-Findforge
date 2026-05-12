// import Icon from "../ui/icon";

// export interface InfoCardProps {
//     name: string;
//     number?: number;
//     description: string;
// }

// export const InfoCardData: InfoCardProps[] = [
//     {
//         name: "Managed IT Services",
//         description: "Our Managed IT Services take the pressure off by owning day-to-day operations, ensuring everything runs smoothly. We deliver ongoing support, vigilant monitoring, rapid incident response, patching and continious optimisation.",
//     }

// ];

// const InfoCard = (props: InfoCardProps) => {
//     return (
//         <>
//             <div className="flex gap-4">
//                 <div className="bg-[#FAFAFA] border border-[#F5F5F5] rounded-2xl max-w-[580px] px-8 pt-8 space-y-6">
//                     <div className="flex gap-6 items-center">
//                         <Icon
//                             text={props.number}
//                             iconSize={40}
//                             bgColor="#ffffff"
//                             borderColor="#f5f5f5"
//                             className="text-primary" />
//                         <h3 className="text-secondary">{props.name}</h3>
//                     </div>
//                     <div className="pb-18">
//                         <p className="text-neutral-dark">
//                             {props.description}
//                         </p>
//                     </div>
//                 </div>
//                 <div className="bg-grad-hero border border-[#F5F5F5] rounded-2xl max-w-[580px] px-8 pt-8 space-y-6">
//                     <div className="flex gap-6 items-center">
//                         <Icon
//                             text={props.number}
//                             iconSize={40}
//                             bgColor="#ffffff"
//                             borderColor="#f5f5f5"
//                             className="text-primary" />
//                         <h3 className="text-white">{props.name}</h3>
//                     </div>
//                     <div className="pb-18">
//                         <p className="text-white">
//                             {props.description}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex gap-4">

//             <div className="bg-[#FAFAFA] border border-[#F5F5F5] rounded-2xl max-w-100 px-8 pt-8 space-y-6">
//                 <div className="flex justify-between items-center">
//                     <Icon
//                         text={props.number}
//                         iconSize={40}
//                         bgColor="#ffffff"
//                         borderColor="#f5f5f5"
//                         className="text-primary" />
//                 </div>
//                 <div className="space-y-6 pb-18">
//                     <h3 className="text-secondary">{props.name}</h3>
//                     <p className="text-neutral-dark">
//                         {props.description}
//                     </p>
//                 </div>
//             </div>
//             <div className="bg-[#FAFAFA] border border-[#F5F5F5] rounded-2xl max-w-100 px-8 pt-8 space-y-6">
//                 <div className="flex justify-between items-center">
//                     <Icon
//                         text={props.number}
//                         iconSize={40}
//                         bgColor="#ffffff"
//                         borderColor="#f5f5f5"
//                         className="text-primary" />
//                 </div>
//                 <div className="space-y-6 pb-18">
//                     <h3 className="text-secondary">{props.name}</h3>
//                     <p className="text-neutral-dark">
//                         {props.description}
//                     </p>
//                 </div>
//             </div>
//             <div className="bg-[#FAFAFA] border border-[#F5F5F5] rounded-2xl max-w-100 px-8 pt-8 space-y-6">
//                 <div className="flex justify-between items-center">
//                     <Icon
//                         text={props.number}
//                         iconSize={40}
//                         bgColor="#ffffff"
//                         borderColor="#f5f5f5"
//                         className="text-primary" />
//                 </div>
//                 <div className="space-y-6 pb-18">
//                     <h3 className="text-secondary">{props.name}</h3>
//                     <p className="text-neutral-dark">
//                         {props.description}
//                     </p>
//                 </div>
//             </div>
//             </div>
//         </>
//     )
// }

// export default InfoCard;

// export interface InfoCardProps {
//   name: string;
//   number?: number;
//   description: string;
//   // Use 'vertical' for the stacked layout, 'horizontal' for title next to icon
//   layout: "vertical" | "horizontal";
//   variant?: "default" | "gradient";
// }

// const InfoCard = ({ name, number, description, layout, variant = "default" }: InfoCardProps) => {
//   const isGradient = variant === "gradient";

//   return (
//     <div
//       className={`rounded-2xl border px-8 pt-8 space-y-6 transition-all duration-300
//         ${layout === "horizontal" ? "max-w-145" : "max-w-100"}
//         ${isGradient 
//             ? "bg-grad-hero border-transparent text-white" 
//             : "bg-[#FAFAFA] border-[#F5F5F5] text-secondary"
//         }`}
//     >
//       {layout === "horizontal" ? (
//         /* LAYOUT 2: Horizontal (Icon next to Title) */
//         <>
//           <div className="flex gap-6 items-center">
//             <div className="w-12 h-12 bg-white rounded-full">
//               <span className="text-primary text-2xl font-bold flex items-center justify-center h-full">
//                 {number}
//               </span>
//             </div>
//             <h3 className={isGradient ? "text-white" : "text-secondary"}>{name}</h3>
//           </div>
//           <div className="pb-18">
//             <p className={isGradient ? "text-white/90" : "text-neutral-dark"}>
//               {description}
//             </p>
//           </div>
//         </>
//       ) : (
//         /* LAYOUT 1: Vertical (Title below Icon) */
//         <>
//           <div className="flex justify-between items-center">
//             <div className="w-12 h-12 bg-white rounded-full">
//               <span className="text-primary text-2xl font-bold flex items-center justify-center h-full">
//                 {number}
//               </span>
//             </div>
//           </div>
//           <div className="space-y-6 pb-18">
//             <h3 className={isGradient ? "text-white" : "text-secondary"}>{name}</h3>
//             <p className={isGradient ? "text-white/90" : "text-neutral-dark"}>
//               {description}
//             </p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default InfoCard;

// import clsx from "clsx";

// export interface InfoCardProps {
//   name: string;
//   number?: number;
//   description: string;
//   layout: "vertical" | "horizontal";
//   variant?: "default" | "gradient";
// }

// const InfoCard = ({
//   name,
//   number,
//   description,
//   layout,
//   variant,
// }: InfoCardProps) => {
//   const isGradient = variant === "gradient";
//   const isDefault = variant === "default" || variant === undefined;
//   const isInteractive = variant === undefined || variant === "default";

//   const baseCardClasses =
//     "group rounded-2xl border px-8 pt-8 space-y-6 transition-all duration-300";

//   const cardClasses = clsx(
//     baseCardClasses,
//     layout === "horizontal" ? "max-w-145" : "max-w-100",

//     // gradient fixed state
//     isGradient && "bg-grad-primary",

//     // default fixed state
//     isDefault && "bg-[#FAFAFA] border-[#F5F5F5]",

//     // hover only when NOT gradient
//     isInteractive &&
//       "bg-hover-grad-primary"
//   );

//   const textClasses = (base: string) =>
//     clsx(
//       base,
//       isGradient
//         ? "text-white"
//         : "text-secondary group-hover:text-white"
//     );

//   const descriptionClasses = clsx(
//     isGradient
//       ? "text-white/90"
//       : "text-neutral-dark group-hover:text-white/90"
//   );

//   return (
//     <div className={cardClasses}>
//       {layout === "horizontal" ? (
//         <>
//           <div className="flex gap-6 items-center">
//             {/* ICON (unchanged always) */}
//             <div className="w-12 h-12 bg-white rounded-full">
//               <span className="text-primary text-2xl font-bold flex items-center justify-center h-full">
//                 {number}
//               </span>
//             </div>

//             <h3 className={textClasses("")}>{name}</h3>
//           </div>

//           <div className="pb-18">
//             <p className={descriptionClasses}>{description}</p>
//           </div>
//         </>
//       ) : (
//         <>
//           <div className="flex justify-between items-center">
//             {/* ICON (unchanged always) */}
//             <div className="w-12 h-12 bg-white rounded-full">
//               <span className="text-primary text-2xl font-bold flex items-center justify-center h-full">
//                 {number}
//               </span>
//             </div>
//           </div>

//           <div className="space-y-6 pb-18">
//             <h3 className={textClasses("")}>{name}</h3>

//             <p className={descriptionClasses}>{description}</p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default InfoCard;

import clsx from "clsx";

// 1. Updated Interface for the data object
export interface InfoCardData {
  name: string;
  number?: number;
  description: string;
  layout: "vertical" | "horizontal";
  variant?: "default" | "gradient";
}

// 2. Interface for the new Group component
interface InfoCardGroupProps {
  data: InfoCardData[];
}

const IconBadge = ({ number }: { number?: number }) => (
  <div className="w-12 h-12 bg-white rounded-full shrink-0">
    <span className="text-primary text-2xl font-bold flex items-center justify-center h-full">
      {number}
    </span>
  </div>
);

// Single Card Component (Your existing logic, slightly cleaned up)
export const InfoCard = ({ name, number, description, layout, variant }: InfoCardData) => {
  const isGradient = variant === "gradient";
  const isDefault = variant === "default" || variant === undefined;
  const isInteractive = variant === undefined || variant === "default";

  const baseCardClasses = "group rounded-2xl border px-8 pt-8 space-y-6 transition-all duration-300 w-full";

  const cardClasses = clsx(
    baseCardClasses,
    layout === "horizontal" ? "lg:flex-1" : "flex-1",
    isGradient && "bg-grad-primary",
    isDefault && "bg-[#FAFAFA] border-[#F5F5F5]",
    isInteractive && "bg-hover-grad-primary"
  );

  const textClasses = clsx(
    "text-xl font-semibold", // added base text size
    isGradient ? "text-white" : "text-secondary group-hover:text-white"
  );

  const descriptionClasses = clsx(
    isGradient ? "text-white/90" : "text-neutral-dark group-hover:text-white/90"
  );

  return (
    <div className={cardClasses}>
      {layout === "horizontal" ? (
        <>
          <div className="flex gap-6 items-center">
            <IconBadge number={number} />
            <h3 className={textClasses}>{name}</h3>
          </div>
          <div className="pb-18">
            <p className={descriptionClasses}>{description}</p>
          </div>
        </>
      ) : (
        <>
          <IconBadge number={number} />
          <div className="space-y-6 pb-18">
            <h3 className={textClasses}>{name}</h3>
            <p className={descriptionClasses}>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

// 3. The New Group Component
const InfoCardGroup = ({ data }: InfoCardGroupProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item, index) => (
        <InfoCard key={index} {...item} />
      ))}
    </div>
  );
};

export default InfoCardGroup;

export const firstRowData: InfoCardData[] = [
  {
    number: 1,
    name: "Deliver better patient service",
    description: "Enable a seamless customer experience for your patients...",
    layout: "horizontal",
    variant: "gradient",
  },
  {
    number: 2,
    name: "Manage Medical Data",
    description: "Enable a seamless customer experience for your patients...",
    layout: "horizontal",
  },
];

export const secondRowData: InfoCardData[] = [
  {
    number: 3,
    name: "Automate to Improve Care",
    description: "Enable a seamless customer experience...",
    layout: "vertical",
  },
  {
    number: 4,
    name: "Optimise costs",
    description: "Enable a seamless customer experience...",
    layout: "vertical",
  },
  {
    number: 5,
    name: "Performance Reporting",
    description: "Enable a seamless customer experience...",
    layout: "vertical",
  },
];