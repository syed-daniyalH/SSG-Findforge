// import Image from "next/image";
// import Badge from "../ui/badge";

// export interface MissionProps {
//     title: string;
//     description: string;
//     image: string;
// }

// const Mission = () => {
//     return (
//         <>
//         <section className="bg-[#F9FAFB] rounded-[40px] px-10 md:px-18 py-18 flex flex-col gap-12">
//             <div className="grid xl:grid-cols-2 items-center gap-10">
//                 <div className="space-y-4">
//                     <Badge text="OUR MISSION" className="text-secondary border border-[#FFFFFF99] bg-white" radius="full" showIcon icon="/icons/mission.svg"/>
//                     <h3 className="text-12">
//                         Transforming business through smart technology
//                     </h3>
//                     <p className="text-neutral-dark">
//                         Our role is simple: give you the tools, talent and technical expertise to succeed in an unpredictable world From re-engineering critical systems to building next-generation digital products, we focus on solutions that are robust, secure, and built to evolve so your business can keep delivering, no matter what comes next.
//                     </p>
//                 </div>
//                 <div className="border border-[#FFFFFF80] rounded-t-[40px] shadow-[0px_30px_70px_-20px_#0000001A]">
//                     <div className="bg-white flex gap-2 py-4 px-8 rounded-t-full">
//                         <Image src="/icons/background.svg" alt="Circles" width={10} height={10}
//                         className="" />
//                         <Image src="/icons/background.svg" alt="Circles" width={10} height={10}
//                         className="" />
//                         <Image src="/icons/background.svg" alt="Circles" width={10} height={10}
//                         className="" />
//                     </div>
//                     <div className="bg-[#F9FAFB80] p-3 rounded-b-3xl">
//                         <div className="relative w-full h-100 rounded-xl border border-[#0000000D] shadow-[inset_0px_2px_4px_1px_#0000000D] overflow-hidden">
//                             <Image src="/images/choose1.webp" alt="AI Image" fill priority className="relative object-cover"/>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="grid xl:grid-cols-2 items-center gap-10 ">
//                 <div className="border border-[#FFFFFF80] rounded-t-[40px] shadow-[0px_30px_70px_-20px_#0000001A]">
//                     <div className="bg-white flex gap-2 py-4 px-8 rounded-t-full">
//                         <Image src="/icons/background.svg" alt="Circles" width={10} height={10}
//                         className="" />
//                         <Image src="/icons/background.svg" alt="Circles" width={10} height={10}
//                         className="" />
//                         <Image src="/icons/background.svg" alt="Circles" width={10} height={10}
//                         className="" />
//                     </div>
//                     <div className="bg-[#F9FAFB80] p-3 rounded-b-3xl">
//                         <div className="relative w-full h-100 rounded-xl border border-[#0000000D] shadow-[inset_0px_2px_4px_1px_#0000000D] overflow-hidden">
//                             <Image src="/images/choose2.webp" alt="AI Image" fill priority className="relative object-cover"/>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="space-y-4">
//                     <Badge text="OUR VISION" className="text-secondary border border-[#FFFFFF99] bg-white" radius="full" showIcon icon="/icons/mission.svg"/>
//                     <h3 className="text-12">
//                         Transforming business through smart technology
//                     </h3>
//                     <p className="text-neutral-dark">
//                         Our role is simple: give you the tools, talent and technical expertise to succeed in an unpredictable world From re-engineering critical systems to building next-generation digital products, we focus on solutions that are robust, secure, and built to evolve so your business can keep delivering, no matter what comes next.
//                     </p>
//                 </div>
                
//             </div>
//             </section>
//         </>
//     )
// }

// export default Mission;


import Image from "next/image";
import Badge, { BadgeProps } from "../ui/badge";
import Button, { ButtonProps } from "../ui/button";

export interface MissionItem {
  badge?: BadgeProps;
  title: string;
  description: string;
  description1?: string; // Optional second paragraph
  image: string;
  reverse?: boolean; // controls layout
  button?: ButtonProps; 
}

export interface MissionProps {
  items: MissionItem[];
}

const Mission = ({ items }: MissionProps) => {
  return (
    <section className="">
      
      {items.map((item, index) => {
        const Content = (
          <div className="space-y-4">
            {item.badge && <Badge {...item.badge} />}
            <h3 className="text-12">{item.title}</h3>
            <p className="text-neutral-dark">{item.description}</p>
            <p className="text-neutral-dark">{item.description1}</p>
            {/* ✅ Optional Button */}
            {item.button && <Button {...item.button} />}

          </div>
        );

        const ImageBlock = (
          <div className="border border-[#FFFFFF80] rounded-t-[40px] shadow-[0px_30px_70px_-20px_#0000001A]">
            
            {/* Top Bar */}
            <div className="bg-white flex gap-2 py-4 px-8 rounded-t-full">
              {[1, 2, 3].map((dot) => (
                <Image
                  key={dot}
                  src="/icons/background.svg"
                  alt="Circles"
                  width={10}
                  height={10}
                />
              ))}
            </div>

            {/* Image */}
            <div className="bg-[#F9FAFB80] p-3 rounded-b-3xl">
              <div className="relative w-full h-100 rounded-xl border border-[#0000000D] shadow-[inset_0px_2px_4px_1px_#0000000D] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        );

        return (
          <div
            key={index}
            className="grid xl:grid-cols-2 items-center gap-10"
          >
            {item.reverse ? (
              <>
                {ImageBlock}
                {Content}
              </>
            ) : (
              <>
                {Content}
                {ImageBlock}
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Mission;

