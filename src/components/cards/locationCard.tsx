import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- TYPES ---
export interface LocationData {
  index?: number;
  slug?: string;
  name: string;
  address: string;
  phone?: string;
  email?: string;
  image?: string;
}

// --- MOCK CONTENT ---
export const locations: LocationData[] = [
  {   
      slug: "ashford-central",
      name: "Ashford Central",
      address: "The Cobalt Building,\n1600 Eureka Park,\nLower Pemberton TN25 4BF.",
      phone: "+x xx xxxx xxxxx",
      email: "ahmadssg@gmail.com",
      image: "/images/paris.webp",
  },
  {
    slug: "mansfield-central",
    name: "Mansfield Central",
    address: "12 Centre Hamilton Court,\nHamilton Way,\nMansfield NG18 5FB",
    phone: "+x xx xxxx xxxxx",
    email: "ahmadssg@gmail.com",
    image: "/images/aires.webp",
  },
  {
    slug: "newcastle-central",
    name: "Newcastle Central",
    address: "4th Floor, Wellbar Central,\n36 Gallowgate,\nNewcastle Upon Tyne, NE1 4TD",
    phone: "+x xx xxxx xxxxx",
    email: "ahmadssg@gmail.com",
    image: "/images/aires.webp",
  },
  {
    slug: "ashford-east",
    name  : "Ashford East",
    address: "The Cobalt Building,\n1600 Eureka Park,\nLower Pemberton TN25 4BF.",
    phone: "+x xx xxxx xxxxx",
    email: "ahmadssg@gmail.com",
    image: "/images/aires.webp",
  },
  {
    slug: "mansfield-east",
    name: "Mansfield East",
    address: "12 Centre Hamilton Court,\nHamilton Way,\nMansfield NG18 5FB",
    phone: "+x xx xxxx xxxxx",
    email: "ahmadssg@gmail.com",
    image: "/images/aires.webp",
  },
  {
    slug: "newcastle-east",
    name: "Newcastle East",
    address: "4th Floor, Wellbar Central,\n36 Gallowgate,\nNewcastle Upon Tyne, NE1 4TD",
    phone: "+x xx xxxx xxxxx",
    email: "ahmadssg@gmail.com",
    image: "/images/aires.webp",
  },
  {
    slug: "ashford-west",
    name: "Ashford West",
    address: "The Cobalt Building,\n1600 Eureka Park,\nLower Pemberton TN25 4BF.",
    phone: "+x xx xxxx xxxxx",
    email: "ahmadssg@gmail.com",
    image: "/images/aires.webp",
  },
  {
    slug: "mansfield-west",
    name: "Mansfield West",
    address: "12 Centre Hamilton Court,\nHamilton Way,\nMansfield NG18 5FB",
    phone: "+x xx xxxx xxxxx",
    email: "ahmadssg@gmail.com",
    image: "/images/aires.webp",
  },
  {
    slug: "newcastle-west",  
    name: "Newcastle West",
    address: "4th Floor, Wellbar Central,\n36 Gallowgate,\nNewcastle Upon Tyne, NE1 4TD",
    phone: "+x xx xxxx xxxxx",
    email: "ahmadssg@gmail.com",
    image: "/images/aires.webp",
  },
  // Add more as needed to match the grid...
];

// --- COMPONENT ---
export const LocationCard: React.FC<LocationData> = ({ index = 0, name, address, slug }) => {
    const formattedNumber = String(index + 1).padStart(2, "0");
  
    return (
    <div className="relative flex flex-col items-start p-10 bg-[#F9F9F9] rounded-2xl">
      
      {/* Number Badge */}
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white rounded-full shadow-sm">
        <span className="text-[#8B1D1D] font-bold text-sm">
          {formattedNumber}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 mb-4">
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">
          {name}
        </h3>
        <p className="text-neutral-dark text-[16px]">
          {address}
        </p>
      </div>

      <Link 
  href={`/location/${slug}`} 
  className="group mt-4 inline-flex items-center px-6 py-2.5 bg-white text-black font-semibold rounded-full border border-transparent transition-all duration-300 hover:border-[#BD0917] hover:text-[#BD0917] hover:pr-5"
>
  View this location
  
  {/* Icon container: hidden by default, expands on hover */}
  <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-7.5 group-hover:opacity-100 group-hover:ml-2">
    <Image 
      src="/icons/primaryArrow.svg" 
      alt="" 
      width={9}
      height={9}
      className="w-2.5 h-2.5 min-w-4" 
    />
  </span>
</Link>
    </div>
  );
};

