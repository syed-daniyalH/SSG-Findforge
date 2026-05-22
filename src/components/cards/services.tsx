import Image from "next/image";
import Button from "../ui/button";
import { ServiceItem } from "@/types/services";

const ServiceCard = ({ item }: { item: ServiceItem }) => {
  // 1. Featured Layout (Large image background)
  if (item.layout === "featured") {
    return (
      <div className="relative overflow-hidden h-full min-h-[390px] rounded-[18px] flex items-end p-7 md:p-9">
        <Image
          src={item.image || ""}
          alt={item.title}
          fill
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-white/90 via-transparent to-transparent" />
        
        <div className="relative z-10 w-full flex justify-between items-end gap-4">
          <div className="max-w-[80%]">
            <h3 className="text-primary font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
          </div>
          <Button
            showIcon
            icon="/icons/primaryArrow.svg"
            radius="full"
            size="small"
            iconMode="static1"
            className="w-fit border border-[#E5E5E5]"
          />
        </div>
      </div>
    );
  }

  // 2. Standard Layout (Horizontal with side image)
  if (item.layout === "standard") {
    return (
      <div className="group relative bg-[white] border border-slate-100 rounded-[18px] flex items-center min-h-[210px] overflow-hidden">
  
  {/* Image Container - Positioned absolute to the right to allow text overlap if needed */}
  <div className="absolute right-0 top-0 w-1/2 h-full">
    <Image 
      src={item.image || ""} 
      alt={item.title} 
      fill 
      className="object-cover object-center" 
    />
    
    {/* The Gradient Overlay - This is the "Magic" part */}
    {/* It goes from solid white (left) to transparent (right) */}
    <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent" />
  </div>

  {/* Content Layer - Ensure it's above the image using relative z-index */}
  <div className="relative z-10 flex flex-col gap-5 px-8 py-7 w-full md:w-[60%]">
    <h3 className="text-[#B20000] font-bold">
      {item.title}
    </h3>
    
    <p className="text-slate-500 max-w-md">
      {item.description}
    </p>

    <Button
      text="View Service"
      showIcon
      icon="/icons/primaryArrow.svg"
      radius="full"
      iconMode="static1"
      size="large"
      className="w-fit border border-[#E5E5E5] py-3 px-7 text-black font-medium transition-all"
    />
  </div>
</div>
    );
  }

  // 3. Compact Layout (Small square cards)
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-[18px] p-7 flex min-h-[210px] flex-col justify-between gap-6">
      <div>
        <h3 className="text-primary font-bold mb-2">{item.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
      </div>
      <Button
          showIcon
          icon="/icons/primaryArrow.svg"
          radius="full"
          size="small"
          iconMode="static1"
          href="/services"
          className="w-fit border border-[#E5E5E5]"
      />
      
    </div>
  );
};

export default ServiceCard;
