// import Image from "next/image";

// const EntrepriseCTA = () => {
//     return (
//         <>
//             <section className="">
//                 <div className="relative w-full h-150 overflow-hidden bg-[linear-gradient(0deg,#1C1917_0%,rgba(28,25,23,0)_50%,rgba(28,25,23,0)_100%)]">
//                     <Image src="/images/entrepriseCTA.webp" alt="Entreprise CTA" fill className="object-cover" />
//                     <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
//                         <h2 className="text-white text-center">
//                             Secure AI for the Modern Enterprise.
//                         </h2>
//                         <Image src="/images/security-card.webp" alt="Security Card" width={450} height={450} className="object-cover" />
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default EntrepriseCTA;

// import Image from "next/image";
// import Badge from "./badge";
// import Button from "./button";
// import Icon from "./icon";

// const EntrepriseCTA = () => {
//   return (
//     <>
//       <section className="">
//         {/* Container with relative positioning and fixed aspect ratio */}
//         <div className="relative w-full h-125 md:h-150 overflow-hidden group">
//           {/* Background Image with Dark Overlay */}
//           <Image
//             src="/images/entrepriseCTA.webp"
//             alt="Enterprise CTA Background"
//             fill
//             className="object-cover "
//             priority
//           />

//           {/* Black gradient overlay to ensure text readability */}
//           <div className="absolute inset-0 bg-black/40 bg-linear-to-t from-black/60 to-transparent" />

//           {/* Content Overlay */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center space-y-12">
//             <h2 className="font-bold text-white max-w-3xl leading-tight">
//               Secure AI for the Modern Enterprise.
//             </h2>

//             {/* Glassmorphism Security Card */}
//             <div className="relative w-full max-w-120">
//               <div className="relative w-full aspect-1.5/1 rounded-2xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="/images/security-card.webp"
//                   alt="Security and Trust Dashboard"
//                   fill
//                   className="object-cover p-2"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#1C1917] px-6 py-20 md:px-12 lg:px-24">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
//         {/* Left Content */}
//         <div className="max-w-xl">
//           <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
//             Trusted Technology Partner.
//           </h2>
//           <p className="text-[#A8A29E] text-lg md:text-xl mb-12 leading-relaxed">
//             Deep expertise in data and AI technologies, enabling
//             robust digital transformation for modern enterprises.
//           </p>
          
//           {/* Certification Thumbnails */}
//           <div className="flex flex-wrap items-center gap-4">
//             <div className="relative w-32 h-20 md:w-40 md:h-24">
//               <Image src="/images/laptop.webp" alt="Certification 1" fill className="object-cover rounded-xl grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300" />
//             </div>
//             <div className="relative w-32 h-20 md:w-40 md:h-24">
//               <Image src="/images/laptop1.webp" alt="Certification 2" fill className="object-cover rounded-xl grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300" />
//             </div>
//             <div className="relative w-32 h-20 md:w-40 md:h-24">
//               <Image src="/images/laptop3.webp" alt="Certification 3" fill className="object-cover rounded-xl grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300" />
//             </div>
//           </div>
//         </div>

//         {/* Right Content: White Card */}
//         <div className="flex flex-col items-center lg:items-left">
//           <div className="w-full max-w-[420px] bg-[#FAFAF9] rounded-[32px] p-8 md:p-10 shadow-2xl">
//             {/* Card Header */}
//             <div className="flex justify-between items-center mb-8">
//               <div className="bg-[#1C1917] p-3 rounded-full">
//                 <Icon src="/icons/deploy-white.svg" alt="Deploy" iconSize={24} noBg noBorder />
//               </div>
//               <Badge 
//                 text="ENTERPRISE SOLUTIONS" 
//                 className="bg-[#E7E5E4] text-[#44403C] text-[10px] font-bold tracking-widest px-3 py-1 rounded-full" 
//               />
//             </div>

//             {/* Card Body */}
//             <div className="mb-10">
//               <h3 className="text-[#1C1917] text-2xl font-bold mb-2">Continuous Support</h3>
//               <p className="text-[#78716C] text-sm mb-8">Empowering teams to make better decisions faster.</p>
              
//               <ul className="space-y-4">
//                 {[
//                   "Proven Transformation Methodologies",
//                   "Secure, Scalable Data Platforms",
//                   "Ongoing Systems Optimization"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-[#44403C] font-medium text-sm">
//                     <Icon src="/icons/double-tick.svg" iconSize={18} noBg noBorder alt="tick" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Card Footer / CTA */}
//             <div className="flex flex-col gap-4">
//               <Button 
//                 text="Book a Consultation" 
//                 radius="full"
//                 className="w-full bg-[#1C1917] text-white py-4 rounded-full font-semibold hover:bg-black transition"
//               />
//               <p className="text-[#A8A29E] text-xs text-center">
//                 Discover how AI can transform your organisation.
//               </p>
//             </div>
//           </div>

//           {/* Bottom Tags */}
//           <div className="w-full max-w-[420px] mt-6 flex justify-between px-4">
//             <div className="flex items-center gap-2 text-[#78716C] text-xs font-medium">
//               <span className="w-6 h-6 relative">
//                 <Image src="/icons/compliant.svg" alt="Compliant" fill className="object-cover"/>
//               </span>
//               Fully Compliant
//             </div>
//             <div className="flex items-center gap-2 text-[#78716C] text-xs font-medium">
//               24/7 Monitored
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//     </>
//   );
// };

// export default EntrepriseCTA;


import Image from "next/image";
import Badge from "./badge";
import Button from "./button";
import Icon from "./icon";
import { ReusableCTAProps } from "@/types/reusableCTA";

const ReusableCTA = ({ 
  variant = "enterprise", // "enterprise" or "partner"
  title,
  description,
  bgImage,
  cardImage, // Used for enterprise variant
  badges = [], // Used for partner variant logos
  cardTitle,
  cardDescription,
  features = [],
  ctaText = "Book a Consultation",
  footerTags = []
}: ReusableCTAProps) => {
  
  // --- ENTERPRISE VARIANT ---
  if (variant === "enterprise") {
    return (
      <section className="my-10">
        <div className="relative w-full h-125 md:h-150 overflow-hidden group">
          <Image
            src={bgImage || "/images/entrepriseCTA.webp"}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 bg-linear-to-t from-black/60 to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
              {title}
            </h2>

            <div className="relative w-full max-w-lg">
              <div className="relative w-full aspect-1.5/1">
                <Image
                  src={cardImage || "/images/card-illustration.webp"}
                  alt="Card Illustration"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- PARTNER VARIANT ---
  return (
    <section className="bg-[#1C1917] px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
            {title}
          </h2>
          <p className="text-[#A8A29E] text-lg md:text-xl mb-12 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            {badges.map((src, idx) => (
              <div key={idx} className="relative w-32 h-20 md:w-40 md:h-24">
                <Image 
                  src={src} 
                  alt={`Badge ${idx}`} 
                  fill 
                  className="object-cover rounded-xl grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Content: The White Card */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="w-full max-w-105 bg-[#FAFAF9] rounded-4xl p-8 md:p-10 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <div className="bg-[#1C1917] p-3 rounded-full">
                <Icon src="/icons/deploy-white.svg" alt="Deploy" iconSize={24} noBg noBorder />
              </div>
              <Badge 
                text="ENTERPRISE SOLUTIONS" 
                className="bg-[#E7E5E4] text-[#44403C] text-[10px] font-bold tracking-widest px-3 py-1 rounded-full" 
              />
            </div>

            <div className="mb-10">
              <h3 className="text-[#1C1917] text-2xl font-bold mb-2">{cardTitle}</h3>
              <p className="text-[#78716C] text-sm mb-8">{cardDescription}</p>
              
              <ul className="space-y-4">
                {features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#44403C] font-medium text-sm">
                    <Icon src="/icons/double-tick.svg" iconSize={18} noBg noBorder alt="tick" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <Button 
                text={ctaText} 
                radius="full"
                className="w-full bg-[#1C1917] text-white py-4 rounded-full font-semibold hover:bg-black transition"
              />
              <p className="text-[#A8A29E] text-xs text-center">
                Discover how AI can transform your organisation.
              </p>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="w-full max-w-105 mt-6 flex justify-between px-4">
            {footerTags.map((tag, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#78716C] text-xs font-medium">
                {tag.icon && (
                  <span className="w-5 h-5 relative">
                    <Image src={tag.icon} alt="icon" fill className="object-contain opacity-60"/>
                  </span>
                )}
                {tag.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableCTA;

