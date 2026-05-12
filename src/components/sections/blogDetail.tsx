// import Image from "next/image";
// import Icon from "../ui/icon";

// const BlogDetail = () => {
//   return (
//     <section className="max-w-[1200px] mx-auto px-4 py-10 font-sans">
//       {/* Header Section */}
//       <div className="mb-8">
//         <div className="flex items-center gap-4 mb-4">
//           <span className="text-secondary font-bold text-xs uppercase tracking-widest">Development</span>
//           <span className="text-[#9D9999] text-sm">10 March 2026</span>
//         </div>
//         <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight max-w-4xl">
//           How to make a Game look more attractive with New VR & AI Technology
//         </h1>
//       </div>

//       {/* Main Image */}
//       <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-12">
//         <Image src="/images/vr.webp" alt="VR & AI Technology" fill priority className="object-cover" />
//       </div>

//       {/* Content Section */}
//       <div className="max-w-4xl mx-auto space-y-8 text-[#51555D] leading-relaxed text-lg">
//         <p>
//           Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
//         </p>
//         <p>
//           We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products. Today, we’re excited to share our early progress...
//         </p>

//         {/* Blockquote Section */}
//         <div className="py-10 my-10 border-l-[3px] border-red-500 pl-8">
//           <p className="text-2xl italic font-medium text-[#1A1A1A] mb-4">
//             “People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.”
//           </p>
//           <span className="text-[#1A1A1A] font-bold">– Pedro Domingos</span>
//         </div>

//         <p>
//           More than 3 billion people already benefit from AI-powered features in Google Workspace, whether it’s using Smart Compose in Gmail or auto-generated summaries in Google Docs...
//         </p>

//         {/* Secondary Image - Centered and sized according to image */}
//         <div className="flex justify-center">
//           <div className="relative w-full max-w-[816px] h-[450px] rounded-3xl overflow-hidden my-12">
//             <Image src="/images/vr1.webp" alt="VR & AI Technology" fill className="object-cover" />
//           </div>
//         </div>

//         <p>
//           We’re so excited by the potential of generative AI, and the opportunities it will unlock — from helping people express themselves creatively, to helping developers build brand new types of applications.
//         </p>

//         <hr className="border-gray-100 my-12" />

//         {/* Author & Meta Section */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
//           <div className="flex items-center gap-6">
//             <div className="relative w-28 h-28 border-3 border-red-500 rounded-full overflow-hidden">
//                <div className="relative w-full h-full rounded-full overflow-hidden">
//                   <Image src="/images/author1.webp" alt="Author" fill className="object-cover" />
//                </div>
//             </div>
//             <div className="author-info">
//               <h3 className="font-bold text-xl text-[#1A1A1A]">Rosaria Vargas</h3>
//               <p className="text-[#9D9999] mb-2">Content Writer</p>
//               <div className="flex items-center gap-3">
//                 <Icon src="/icons/mdi_linkedin.svg" alt="LinkedIn" iconSize={30} bgColor="white"/>
//                 <Icon src="/icons/mdi_facebook.svg" alt="Facebook" iconSize={30} bgColor="white"/>
//                 <Icon src="/icons/mdi_instagram.svg" alt="Instagram" iconSize={30} bgColor="white"/>
//                 <Icon src="/icons/mdi_x.svg" alt="X" iconSize={30} bgColor="white"/>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-12 text-sm">
//             <div className="flex flex-col">
//               <span className="text-red-500 font-bold uppercase tracking-tighter">Published</span>
//               <span className="text-[#9D9999] font-medium">May 21, 2025</span>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-red-500 font-bold uppercase tracking-tighter">Updated</span>
//               <span className="text-[#9D9999] font-medium">May 21, 2026</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogDetail;

import Image from "next/image";
import Icon from "../ui/icon";
import { BlogsProps } from "@/types/blogs";
import Link from "next/link";

const BlogDetail = ({ blog }: { blog: BlogsProps }) => {
  return (
    <section className="max-w-300 mx-auto px-4 py-10 font-sans">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest">
            {blog.category}
          </span>
          <span className="text-[#9D9999] text-sm">{blog.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight max-w-4xl">
          {blog.name}
        </h1>
      </div>

      <div className="relative w-full h-100 md:h-150 rounded-3xl overflow-hidden mb-12">
        <Image src={blog.imageUrl} alt={blog.name} fill priority className="object-cover" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 text-[#51555D] leading-relaxed text-lg">
        <p>{blog.description}</p>

        {blog.quotation && (
          <div className="py-10 my-10 border-l-[3px] border-red-500 pl-8">
            <p className="text-2xl italic font-medium text-[#1A1A1A] mb-4">
              “{blog.quotation}”
            </p>
            <span className="text-[#1A1A1A] font-bold">– {blog.quotationWriter}</span>
          </div>
        )}

        {blog.imageUrl1 && (
          <div className="flex justify-center">
            <div className="relative w-full max-w-204 h-112.5 rounded-3xl overflow-hidden my-12">
              <Image src={blog.imageUrl1} alt="Secondary context" fill className="object-cover" />
            </div>
          </div>
        )}
        <p>{blog.description}</p>

        {/* Author Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
          <div className="flex items-center gap-6">

            <Link href={`/author/${blog.author.authorSlug}`}>
            <div className="relative w-28 h-28 border-3 border-red-500 rounded-full cursor-pointer">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={blog.author.image || "/images/default-avatar.webp"}
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            </Link>
            <div className="author-info">
              <h3 className="font-bold text-xl text-[#1A1A1A]">{blog.author.name}</h3>
              <p className="text-[#9D9999] mb-2">{blog.author.designation}</p>
              
              {/* Corrected Social Links Mapping */}
              <div className="flex items-center gap-3">
                {blog.author.socialLinks?.map((social, index) => (
                  <Link 
                    key={index} 
                    href={social.url || ""} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Icon 
                      src={social.iconUrl || "/icons/mdi_facebook.svg"} 
                      alt={social.platform} 
                      iconSize={30} 
                      bgColor="white"
                    />
                  </Link>
                ))}
              </div>

              
            </div>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col">
              <span className="text-red-500 font-bold uppercase tracking-tighter">Published</span>
              <span className="text-[#9D9999] font-medium">May 21, 2025</span>
            </div>
            <div className="flex flex-col">
              <span className="text-red-500 font-bold uppercase tracking-tighter">Updated</span>
              <span className="text-[#9D9999] font-medium">May 21, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;

