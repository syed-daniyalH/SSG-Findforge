// "use client"

// import Badge from "@/components/ui/badge"
// import Clients from "@/components/ui/clients"
// import Icon from "@/components/ui/icon";
// import Image from "next/image";
// import ReusableForm from "@/components/forms/reusableForm";
// import { contactFields } from "@/content/form.data";

// const Contact = () => {

//     const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     };

//     return (
//         <>
//             <section id="banner" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20">
//                 <div
//                     className="flex flex-col gap-6 items-center py-16 rounded-[40px]"
//                     style={{
//                         background: `radial-gradient(141.42 % 141.42% at 0% 0%, #FFFFFF 0%, rgba(241, 235, 255, 0) 50%), radial-gradient(141.42% 141.42% at 100% 0%, #FFFFFF 0%, rgba(235, 241, 255, 0) 50%), linear-gradient(0deg, #B5020F, #B5020F)`,
//                     }}
//                 >
//                     <Badge
//                         text="Let's connect"
//                         size="large"
//                         radius="full"
//                         showIcon
//                         icon="/icons/stars.svg"
//                         className="text-primary font-bold bg-white"
//                     />
//                     <h1 className="text-white">How can we help you today?</h1>
//                     <p className="text-white w-2/3 md:px-8">
//                         We power the world of work for our customers, serving the most critical sectors in society. Get in contact and let&apos;s discuss how we can help you achieve your goals.
//                     </p>
//                 </div>
//             </section>

//             <section
//                 id="clients"
//                 className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
//             >
//                 <Clients />
//             </section>

//             <section id="form" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
//                 <div className="border border-[#E6E6E680] rounded-2xl py-10 px-20">
//                     <div className="space-y-6 mb-10">
//                         <h2 className="">Share Your Project’s Vision</h2>
//                         <p className="">Please complete the contact form below and we will be in touch as soon as possible.</p>
//                     </div>

//                     <div className="form">
//                         <ReusableForm 
//                             fields={contactFields} 
//                             buttonText="Submit Now" 
//                             onSubmit={handleFormSubmit}
//                         />
//                     </div>
//                 </div>
//             </section>

//             <section
//                 id="location"
//                 className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10"
//             >
//                 <div className="relative h-100 md:h-100 w-full overflow-hidden rounded-2xl group">
//                     {/* Background Image */}
//                     <Image
//                         src="/images/paris.webp"
//                         alt="Global Headquarters"
//                         fill
//                         priority
//                         className="object-cover"
//                     />

//                     {/* Dark overlay for better contrast */}
//                     <div className="absolute inset-0 bg-black/20" />

//                     {/* Glassmorphism Card */}
//                     <div className="absolute w-full bottom-6 left-6 right-6 md:left-10 md:bottom-10 md:right-auto">
//                         <div className="backdrop-blur-xs bg-black/30 border border-white/20 rounded-xl p-6 md:p-8 w-[90%] relative overflow-hidden">

//                             {/* Content Container */}
//                             <div className="flex flex-col gap-4">
//                                 <div className="flex items-center gap-3">
//                                     {/* Logo/Icon Container */}
//                                     {/* <div className="bg-white rounded-lg p-1.5 flex justify-center items-center"> */}
//                                     <Icon src="/icons/primary-global.svg" alt="Global" iconSize={24} shape="rounded" />
//                                     {/* </div> */}
//                                     <h2 className="text-white text-2xl md:text-3xl font-bold">
//                                         Global Headquarters
//                                     </h2>
//                                 </div>

//                                 <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-md">
//                                     22a High Street, Southend-On-Sea, England, SS1 1DQ
//                                 </p>
//                             </div>

//                             {/* Top Right Arrow Icon (matches the small arrow in your image) */}
//                             <div className="absolute top-6 right-6">
//                                 <Icon
//                                     src="/icons/ArrowWhite.svg"
//                                     alt="link"
//                                     iconSize={16}
//                                     noBg
//                                     borderColor="transparent"
//                                     className="text-white/70"
//                                     iconClassName=""
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//         </>
//     )
// }

// export default Contact;

"use client"

import { useState } from "react"; // 1. Import useState
import Badge from "@/components/ui/badge"
import Clients from "@/components/ui/clients"
import Icon from "@/components/ui/icon";
import Image from "next/image";
import ReusableForm from "@/components/forms/reusableForm";
import { contactFields } from "@/content/form.data";

const Contact = () => {
    // 2. State to manage map visibility
    const [showMap, setShowMap] = useState(false);

    // Google Maps Embed URL
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.234123456789!2d0.7112!3d51.5375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d9f123456789%3A0x1234567890abcdef!2s22a%20High%20St%2C%20Southend-on-Sea%20SS1%201DQ!5e0!3m2!1sen!2suk!4v1234567890123";

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <section id="banner" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10 pt-20">
                <div
                    className="flex flex-col gap-6 items-center py-16 rounded-[40px]"
                    style={{
                        background: `radial-gradient(141.42% 141.42% at 0% 0%, #FFFFFF 0%, rgba(241, 235, 255, 0) 50%), radial-gradient(141.42% 141.42% at 100% 0%, #FFFFFF 0%, rgba(235, 241, 255, 0) 50%), linear-gradient(0deg, #B5020F, #B5020F)`,
                    }}
                >
                    <Badge
                        text="Let's connect"
                        size="large"
                        radius="full"
                        showIcon
                        icon="/icons/stars.svg"
                        className="text-primary font-bold bg-white"
                    />
                    <h1 className="text-white">How can we help you today?</h1>
                    <p className="text-white w-2/3 md:px-8 text-center">
                        We power the world of work for our customers, serving the most critical sectors in society. Get in contact and let&apos;s discuss how we can help you achieve your goals.
                    </p>
                </div>
            </section>

            <section id="clients" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
                <Clients />
            </section>

            <section id="form" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10">
                <div className="border border-[#E6E6E680] rounded-2xl py-10 px-20">
                    <div className="space-y-6 mb-10">
                        <h2 className="">Share Your Project’s Vision</h2>
                        <p className="">Please complete the contact form below and we will be in touch as soon as possible.</p>
                    </div>
                    <div className="form">
                        <ReusableForm 
                            fields={contactFields} 
                            buttonText="Submit Now" 
                            onSubmit={handleFormSubmit}
                        />
                    </div>
                </div>
            </section>

            <section id="location" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10">
                <div className="relative h-100 md:h-100 w-full overflow-hidden rounded-2xl group">
                    {/* Background Image */}
                    <Image
                        src="/images/paris.webp"
                        alt="Global Headquarters"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* 3. Conditionally Render the Map */}
                    {showMap && (
                        <div className="absolute inset-0 z-10 animate-in fade-in duration-500">
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    )}

                    {/* Dark overlay for better contrast (only visible when map is off) */}
                    {!showMap && <div className="absolute inset-0 bg-black/20 z-0" />}

                    {/* Glassmorphism Card */}
                    <div className="absolute w-full bottom-6 left-6 right-6 md:left-10 md:bottom-10 md:right-auto z-20">
                        <div className="backdrop-blur-xs bg-black/30 border border-white/20 rounded-xl p-6 md:p-8 w-[90%] relative overflow-hidden">
                            
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <Icon src="/icons/primary-global.svg" alt="Global" iconSize={24} shape="rounded" />
                                    <h2 className="text-white text-2xl md:text-3xl font-bold">
                                        Global Headquarters
                                    </h2>
                                </div>

                                <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-md">
                                    22a High Street, Southend-On-Sea, England, SS1 1DQ
                                </p>
                            </div>

                            {/* 4. The Toggle Button / Arrow */}
                            <div 
                                className="flex items-center absolute top-6 right-6 cursor-pointer hover:opacity-80 transition-all"
                                onClick={() => setShowMap(!showMap)}
                            >
                                <span className="text-white text-[14px] mr-2">
                                    {showMap ? "Close Map" : "View on the map"}
                                </span>
                                <div className={`${showMap ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
                                    <Icon
                                        src={showMap ? "/icons/cross-white.svg" : "/icons/ArrowWhite.svg"}
                                        alt="toggle map"
                                        iconSize={16}
                                        noBg
                                        borderColor="transparent"
                                        className="text-white/70"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;