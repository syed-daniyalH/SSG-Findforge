// import Image from "next/image";

// type Variant = "vertical" | "horizontal";

// export interface ValueProps {
//   title: string;
//   icon: string;
//   description: string;
//   variant?: Variant;
//   className?: string;
// }

// const ValuesCard = ({
//   title,
//   icon,
//   description,
//   variant = "vertical",
//   className = "",
// }: ValueProps) => {
//   const isHorizontal = variant === "horizontal";

//   return (
//     <section
//       className={`bg-[#F8F9FA] rounded-[18px] py-10 px-10 ${
//         isHorizontal ? "flex items-start gap-4" : "space-y-4"
//       } ${className}`}
//     >
//       {/* Icon */}
//       <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
//         <Image
//           src={icon}
//           alt={title}
//           width={20}
//           height={20}
//           className="object-contain"
//         />
//       </div>

//       {/* Content */}
//       <div className={isHorizontal ? "space-y-1" : ""}>
//         <h3 className="text-secondary font-medium font-spartan">
//           {title}
//         </h3>

//         <p className="text-slate-gray text-[16px]">
//           {description}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default ValuesCard;

"use client";

import Image from "next/image";

// Added 'timeline' to the Variant type
type Variant = "vertical" | "horizontal" | "timeline";

export interface ValueProps {
  title: string;
  icon: string;
  description: string;
  variant?: Variant;
  className?: string;
  isLast?: boolean; // New prop to hide the dashed line on the last item
}

const ValuesCard = ({
  title,
  icon,
  description,
  variant = "vertical",
  className = "",
  isLast = false,
}: ValueProps) => {
  const isHorizontal = variant === "horizontal";
  const isTimeline = variant === "timeline";

  // If it's a timeline variant, we use the specific red circle styles
  if (isTimeline) {
    return (
      <div className={`flex justify-start gap-5 ${className}`}>
        {/* The Red Circular Icon Container */}
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#B5020F33] flex items-center justify-center border-2 border-[#B5020F]">
            <Image
              src={icon}
              alt={title}
              width={26}
              height={26}
              className="object-contain" // Makes icons white if they are dark
            />
          </div>
          
          {/* Dashed Connector Line */}
          {!isLast && (
            <div className="h-16 w-px border-l-2 border-dashed border-primary/40 my-2"></div>
          )}
        </div>

        {/* Optional: Text content if needed below the timeline icon */}
        {(title || description) && (
          <div className="mt-4 max-w-100">
            <h4 className="text-white text-[20px] font-bold">{title}</h4>
            <p className="body4">{description}</p>
          </div>
        )}
      </div>
    );
  }

  // Original Vertical/Horizontal Logic stays exactly the same
  return (
    <section
      className={`bg-[#F8F9FA] rounded-[18px] py-10 px-10 ${
        isHorizontal ? "flex items-start gap-4" : "space-y-4"
      } ${className}`}
    >
      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
        <Image src={icon} alt={title} width={20} height={20} className="object-contain" />
      </div>

      <div className={isHorizontal ? "space-y-1" : ""}>
        <h3 className="text-secondary font-medium font-spartan">{title}</h3>
        <p className="text-neutral-dark text-[16px]">{description}</p>
      </div>
    </section>
  );
};

export default ValuesCard;

