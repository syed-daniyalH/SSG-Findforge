import Image from "next/image";
import Link from "next/link";

const sizeClasses = {
  extraSmall: 
  `pr-4 py-1 h-7 text-[10px]
  md:h-8 md:text-[10px]
  lg:h-9 lg:text-[12px]
  `,
  small: 
  `px-3 py-2 h-9 text-[12px]
  md:px-3 lg:py-5 md:text-[12px]
  lg:px-3.5 lg:py-3 lg:text-[12px]
  `,
  medium: 
  `px-4 h-10 text-sm
  md:px-6 md:h-12 md:text-base
  lg:px-8 lg:h-14 lg:text-lg
  `,
  large: 
  `px-5 h-12 text-[14px]
  md:px-8 md:text-[14px]
  lg:px-10 lg:text-[14px]
  `,
} as const;

const radiusClasses = {
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
} as const;

const variantClasses = {
  gradient:
    "bg-primary text-white hover:opacity-90 transition",
  glass:
    "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition",
} as const;

const iconRotateClasses = {
  0: "rotate-0",
  45: "rotate-[-45deg]",
  60: "rotate-[-60deg]",
  90: "rotate-[-90deg]",
} as const;

type Size = keyof typeof sizeClasses;
type Radius = keyof typeof radiusClasses;
type Variant = keyof typeof variantClasses;
type IconRotate = keyof typeof iconRotateClasses;

export interface ButtonProps {
  text?: string;
  href?: string;
  icon?: string;
  hoverIcon?: string;
  showIcon?: boolean;
  size?: Size;
  radius?: Radius;
  iconBg?: string;
  iconMode?: "static" | "hover" | "static1";
  variant?: Variant;
  className?: string;
  iconRotate?: IconRotate;
  onClick?: () => void;
  ariaLabel?: string;
}

const Button = ({
  text,
  href,
  icon,
  showIcon = false,
  size = "medium",
  radius = "md",
  variant,
  iconBg,
  className = "",
  iconRotate = 0,
  iconMode = "static",
  onClick,
  ariaLabel,
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-medium transition-all duration-300 cursor-pointer
    ${sizeClasses[size]}
    ${radiusClasses[radius]}
    ${variant ? variantClasses[variant] : ""}
    ${className}
  `;

  const content = (
    <>
      {text && <span>{text}</span>}

      {showIcon && icon && (
        <span
          className={`

            inline-flex transition-transform duration-300
            ${iconRotateClasses[iconRotate]}
            group-hover:translate-x-1
            ${iconBg}
            
          `}
        >
          {iconMode === "static" && (
            <Image
            src={icon}
            alt="icon"
            width={20}
            height={20}
            className={`
          
        `}
          />
          )}

          {iconMode === "static1" && (
            <Image
            src={icon}
            alt="icon"
            width={10}
            height={10}
            className={`
          
        `}
          />)}

          {/* SHOW ON HOVER */}
    {iconMode === "hover" && (
      <Image
        src={icon}
        alt="icon"
        width={10}
        height={20}
        className={`
          opacity-0 -translate-x-1.5
          transition-all duration-300
          ${iconRotateClasses[iconRotate]}
          group-hover:opacity-100 group-hover:translate-x-1
        `}
      />
    )}
        </span>
          
      )}
    </>
  );

  // If href exists → render Link
  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={`group ${baseClasses}`}>
        {content}
      </Link>
    );
  }

  // Otherwise → render button
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`group ${baseClasses}`}
    >
      {content}
    </button>
  );
};

export default Button;

