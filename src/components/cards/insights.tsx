import Image from "next/image";
import Button from "../ui/button";
import { BlogsProps } from "@/types/blogs";
import { truncateText } from "@/lib/truncateText";

const Insights = ({
  name,
  date,
  icon,
  slug,
  imageUrl,
  category,
  description,
  variant = "featured",
}: BlogsProps) => {

  const isCompact = variant === "compact";

  /* ================= COMPACT ================= */
  if (isCompact) {
    const descriptionLimit = 10;
  
    // Truncate description using helper
    const truncatedDesc = truncateText(description, descriptionLimit);
    return (
      <section className="w-full">

        {/* Image */}
        <div className="relative flex h-[165px] items-end overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="rounded-[16px] object-cover object-top"
          />

          {/* Icon */}
          {icon && (
            <Button
              href={slug ? `/blog/${slug}` : undefined}
              showIcon
              icon={icon}
              iconRotate={45}
              radius="full"
              size="small"
              iconMode="static1"
              className="bg-white z-10 relative bottom-4 left-4"
            />
          )}
        </div>

        {/* Content */}
        <div className="pt-3 space-y-4">
          <h3 className="text-secondary text-[18px] leading-6">{name}</h3>
          <p className="text-slate-gray text-sm leading-6">{truncatedDesc}</p>
        </div>

      </section>
    );
  }

  const descriptionLimit = 10;
  
  // Truncate description using helper
  const truncatedDesc = truncateText(description, descriptionLimit);
  /* ================= FEATURED ================= */
  return (
    <section className="w-85">

      {/* Image */}
      <div className="relative flex items-end overflow-hidden h-90">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="rounded-4xl object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="pt-3 space-y-4">

        {/* category + date */}
        {(category || date) && (
          <p className="space-x-6">
            {category && (
              <span className="text-3 text-secondary font-medium">
                {category}
              </span>
            )}
            {date && (
              <span className="text-3 text-neutral-dark font-medium">
                {date}
              </span>
            )}
          </p>
        )}

        <h3 className="text-secondary">{name}</h3>

        <p className="text-slate-gray">{truncatedDesc}</p>

        {slug && (
          <Button
            href={`/blog/${slug}`}
            text="Read More"
            showIcon
            icon="/icons/primaryArrow.svg"
            size="extraSmall"
            iconMode="hover"
            className="
              bg-transparent px-0 py-0 h-auto font-semibold font-poppins 
              text-black border-b-2 border-transparent 
              hover:text-primary hover:border-primary hover:bg-transparent
            "
          />
        )}

      </div>
    </section>
  );
};

export default Insights;

