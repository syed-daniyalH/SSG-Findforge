import Image from "next/image";

const sizeClasses = {
  small: "px-2 py-1 text-xs",
  medium: "px-3 py-1.5 text-sm",
  large: "px-4 py-2 text-base",
} as const;

const radiusClasses = {
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
} as const;

const variantClasses = {
  gradient:
    "bg-grad-primary text-white",
  glass:
    "backdrop-blur-md bg-white/10 border border-white/20 text-white",
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

export interface BadgeProps {
  text?: string;
  icon?: string;
  showIcon?: boolean;
  size?: Size;
  radius?: Radius;
  variant?: Variant;
  className?: string;
  iconRotate?: IconRotate;
  ariaLabel?: string;
}

const Badge = ({
  text,
  icon,
  showIcon,
  size = "medium",
  radius = "md",
  variant,
  className = "",
  iconRotate = 0,
  ariaLabel,
}: BadgeProps) => {
  const baseClasses = `
    inline-flex items-center gap-1.5
    font-medium
    ${sizeClasses[size]}
    ${radiusClasses[radius]}
    ${variant ? variantClasses[variant] : ""}
    ${className}
  `;

  return (
    <span
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {showIcon && icon && (
        <span
          className={`
            inline-flex
            ${iconRotateClasses[iconRotate]}
          `}
        >
          <Image
            src={icon}
            alt="icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </span>
      )}

      {text && <span>{text}</span>}
    </span>
  );
};

export default Badge;

