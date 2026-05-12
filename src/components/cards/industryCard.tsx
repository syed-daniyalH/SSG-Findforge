// import Image from "next/image";
// import Icon from "../ui/icon";
// import Link from "next/link";

// interface IndustryCardProps {
//   industry: Industry;
// }

// const IndustryCard = ({ industry }: IndustryCardProps) => {
//   return (
//     <div className="relative h-100 w-full overflow-hidden rounded-2xl group">
//       {/* Background Image */}
//       <Image
//         src={industry.image}
//         alt={industry.title}
//         fill
//         priority
//         className="object-cover "
//       />

//       {/* Dark overlay for better contrast */}
//       <div className="absolute inset-0 bg-black/20" />

//       {/* Glassmorphism Card */}
//       <div className="absolute w-full bottom-6 px-6">
//         <div className="backdrop-blur-[3px] bg-black/30 border border-white/20 rounded-xl px-4 py-4 relative overflow-hidden">
          
//           {/* Content Container */}
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center gap-3">
//               <Icon 
//                 src={industry.icon} 
//                 alt={industry.title} 
//                 iconSize={18} 
//                 shape="rounded" 
//               />
//               <h3 className="text-white text-[14px]">
//                 {industry.title}
//               </h3>
//             </div>

//             <p className="text-white/90 text-[12px]">
//               {industry.description}
//             </p>
//           </div>

//           {/* Top Right Arrow Icon */}
//           <div className="absolute top-6 right-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
//             <Link href={`/industry/${industry.id}`} passHref>
//               <Icon
//                 src="/icons/ArrowWhite.svg"
//                 alt="link"
//                 iconSize={10}
//                 noBg
//               borderColor="transparent"
//               className="text-white/70 cursor-pointer "
//             />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustryCard;


export interface Industry {
  id: string;
  title: string;
  description?: string;
  image: string;
  icon: string;
  link: string;
}

export const industriesData: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    description: "We understand the instant benefits of digitalizing medical care and help healthcare organizations realize them while ensuring critical compliances like HIPAA and others.",
    image: "/images/doctor-banner.webp",
    icon: "/icons/stethoscope.svg",
    link: "/industries/healthcare"
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "We understand the instant benefits of digitalizing medical care and help healthcare organizations realize them while ensuring critical compliances like HIPAA and others.",
    image: "/images/real-state.webp",
    icon: "/icons/real-estate.svg",
    link: "/industries/real-estate"
  },
  {
    id: "finance",
    title: "Fintech",
    description: "We understand the instant benefits of digitalizing medical care and help healthcare organizations realize them while ensuring critical compliances like HIPAA and others.",
    image: "/images/doctor-banner.webp",
    icon: "/icons/stethoscope.svg",
    link: "/industries/fintech"
  },
  {
    id: "education",
    title: "Education",
    description: "We understand the instant benefits of digitalizing medical care and help healthcare organizations realize them while ensuring critical compliances like HIPAA and others.",
    image: "/images/real-state.webp",
    icon: "/icons/real-estate.svg",
    link: "/industries/education"
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "We understand the instant benefits of digitalizing medical care and help healthcare organizations realize them while ensuring critical compliances like HIPAA and others.",
    image: "/images/doctor-banner.webp",
    icon: "/icons/stethoscope.svg",
    link: "/industries/ecommerce"
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "We understand the instant benefits of digitalizing medical care and help healthcare organizations realize them while ensuring critical compliances like HIPAA and others.",
    image: "/images/real-state.webp",
    icon: "/icons/real-estate.svg",
    link: "/industries/logistics"
  }
];


import Image from "next/image";
import Icon from "../ui/icon";
import Link from "next/link";
import { createMarkup } from "@/lib/createMarkup";

// Added 's' to the interface name for clarity
interface IndustryCardsProps {
  data: Industry[];
}

const IndustryCards = ({ data }: IndustryCardsProps) => {
  return (
    // This grid wrapper ensures they display nicely together
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {data.map((industry) => (
        <div key={industry.id} className="relative h-100 w-full overflow-hidden rounded-2xl group">
          {/* Background Image */}
          <Image
            src={industry.image}
            alt={industry.title}
            fill
            priority
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Glassmorphism Card */}
          <div className="absolute w-full bottom-6 px-6">
            <div className="backdrop-blur-[3px] bg-black/30 border border-white/20 rounded-xl px-4 py-4 relative overflow-hidden">
              
              {/* Content Container */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Icon 
                    src={industry.icon} 
                    alt={industry.title} 
                    iconSize={18} 
                    shape="rounded" 
                  />
                  <h3 className="text-white text-[14px]">
                    {industry.title}
                  </h3>
                </div>


                {industry.description && (
                  <p 
                    className="text-white/90 text-[12px]"
                    dangerouslySetInnerHTML={createMarkup(industry.description)}
                  />
                )}
              </div>

              {/* Top Right Arrow Icon */}
              <div className="absolute top-6 right-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <Link href={`/industry/${industry.id}`} passHref>
                  <Icon
                    src="/icons/ArrowWhite.svg"
                    alt="link"
                    iconSize={10}
                    noBg
                    borderColor="transparent"
                    className="text-white/70 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryCards;