"use client"; // Required for useState in Next.js App Router

import { LocationCard, locations } from "@/components/cards/locationCard";
import Icon from "@/components/ui/icon";
import Image from "next/image";
import { useState } from "react";

const Locations = () => {

    // 1. State to manage map visibility
    const [showMap, setShowMap] = useState(false);

    // Google Maps Embed URL (Address: 22a High Street, Southend-On-Sea)
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.546455011746!2d0.7121637772156891!3d51.539873971821034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d90065099e2f%3A0x600f6406e1ccf20!2s22a%20High%20St%2C%20Southend-on-Sea%20SS1%201DQ%2C%20UK!5e0!3m2!1sen!2sus!4v1713800000000!5m2!1sen!2sus";

    return (
        <>
            <section
                id="location"
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10 pt-20"
            >
                <div className="flex flex-col items-center gap-6 mb-14">
                    <Icon src="/icons/InPlus.svg" alt="InPlus" bgColor="white" iconSize={25} />
                    <h2 className="">Our Location</h2>
                    <p className="text-[#4B5563] text-center w-[80%]">
                        Visit our headquarters or explore our office locations. We are
                        here to support clients with expert teams, local insight, and
                        reliable digital delivery.
                    </p>
                </div>
                <div className="relative h-100 md:h-100 w-full overflow-hidden rounded-2xl group">
                    {/* Background Image */}
                    <Image
                        src="/images/paris.webp"
                        alt="Global Headquarters"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* 2. Conditionally Render the Map */}
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

                    
                    {/* Dark overlay */}
                    {!showMap && <div className="absolute inset-0 bg-black/20" />}

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

                            {/* 3. The Toggle Button */}
                            <div 
                                className="flex items-center absolute top-6 right-6 cursor-pointer hover:opacity-80 transition-all"
                                onClick={() => setShowMap(!showMap)}
                            >
                                <span className="text-white text-[14px] mr-2">
                                    {showMap ? "Close Map" : "View on the map"}
                                </span>
                                <div className={`${showMap ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
                                    <Icon
                                        src={showMap ? "/icons/cross-white.svg" : "/icons/ArrowWhite.svg"} // Use a close icon if you have one
                                        alt="toggle map"
                                        iconSize={14}
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

            <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-10">

                <div className="bg-white p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {locations.map((item, index) => (
                            <LocationCard
                                key={index}
                                index={index}
                                slug={item.slug}
                                name={item.name}
                                address={item.address}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Locations;
