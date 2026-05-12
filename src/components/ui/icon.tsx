// // components/ui/Icon.tsx

// import Image from "next/image";
// import React from "react";
// import clsx from "clsx";

// type IconShape = "circle" | "rounded" | "square";

// interface IconProps {
//   src: string;
//   alt: string;
//   size?: number; // width & height
//   iconSize?: number; // inner image size control (optional)

//   bgColor?: string;
//   borderColor?: string;
//   borderWidth?: number;

//   shape?: IconShape;

//   padding?: number;

//   className?: string;
//   iconClassName?: string;

//   priority?: boolean;

//   // ✅ NEW
//   noBg?: boolean;
//   noBorder?: boolean;
// }

// const shapeClasses: Record<IconShape, string> = {
//   circle: "rounded-full",
//   rounded: "rounded-lg",
//   square: "rounded-none",
// };

// export default function Icon({
//   src="",
//   alt = "icon",
//   size = 48,
//   iconSize,
//   bgColor = "#FAFAFA",
//   borderColor = "#F5F5F5",
//   borderWidth = 1,
//   shape = "circle",
//   padding = 8,
//   className,
//   iconClassName,
//   priority = false,
//   noBg = false,
//   noBorder = false,
// }: IconProps) {
//   return (
//     <div
//       className={clsx(
//         "relative flex items-center justify-center",
//         shapeClasses[shape],
//         className
//       )}
//       style={{
//         width: size,
//         height: size,
//         backgroundColor: noBg ? "transparent" : bgColor,
//         border: noBorder ? "none" : `${borderWidth}px solid ${borderColor}`,
//         padding,
//       }}
//     >
//       <Image
//         src={src}
//         alt={alt}
//         fill={!iconSize}
//         width={iconSize} 
//         height={iconSize}
//         priority={priority}
//         className={clsx(iconClassName)}
//       />
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";
import clsx from "clsx";

type IconShape = "circle" | "rounded" | "square";

interface IconProps {
  src?: string;
  alt?: string;

  // ✅ NEW (optional)
  Svg?: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  size?: number;
  iconSize?: number;

  bgColor?: string;
  bgClass?: string;   
  borderColor?: string;
  borderWidth?: number;

  shape?: IconShape;
  padding?: number;

  className?: string;
  iconClassName?: string;

  priority?: boolean;

  noBg?: boolean;
  noBorder?: boolean;
}

const shapeClasses: Record<IconShape, string> = {
  circle: "rounded-full",
  rounded: "rounded-lg",
  square: "rounded-none",
};

export default function Icon({
  src = "",
  alt = "icon",
  Svg, // ✅ new

  size = 48,
  iconSize,

  bgColor = "#FAFAFA",
  bgClass,
  borderColor = "#F5F5F5",
  borderWidth = 1,

  shape = "circle",
  padding = 8,

  className,
  iconClassName,

  priority = false,

  noBg = false,
  noBorder = false,
}: IconProps) {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center",
        shapeClasses[shape],
        className,
        bgClass
      )}
      style={{
        width: size,
        height: size,
        backgroundColor: noBg ? "transparent" : bgColor,
        border: noBorder ? "none" : `${borderWidth}px solid ${borderColor}`,
        padding,
      }}
    >
      {Svg ? (
        <Svg
          className={clsx("w-full h-full", iconClassName)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill={!iconSize}
          width={iconSize}
          height={iconSize}
          priority={priority}
          className={clsx(iconClassName)}
        />
      )}
    </div>
  );
}

