// import { TextField } from "@mui/material";
// import Button from "./button";
// import Image from "next/image";

// export interface FormCTAProps {
//     title: string;
//     description: string;
//     bgImage: string;
//     image: string;
// }

// const FormCTA = () => {
//     return (
//         <>
//             <section className="border bg-grad-hero rounded-[40px] gap-10 overflow-hidden">
//                 <div className="flex flex-col gap-10 px-10 w-2/3 mx-auto pt-5">
//                     <div className="text-center">
//                         <h2 className="text-white">Get our stories delivered From us to your inbox weekly</h2>
//                         <p className="">Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
//                     </div>
//                     <div className="">
//                         <div className="flex gap-5 bg-white py-10 px-5 rounded-3xl">
//                             <TextField
//                                 label="Email Address"
//                                 type="email"
//                                 variant="outlined"
//                                 required
//                                 sx={{ 
//                                     width: '68%',
//                                     "& .MuiInputLabel-root.Mui-focused": { color: "#b5020f" }, // Focused color
//                                     '& .MuiOutlinedInput-root': {
//                                         borderRadius: '50px', // Custom radius
//                                     "& fieldset": {
//                                         borderColor: "#E5E5E5", // Default border color
//                                     },
//                                     "&:hover fieldset": {
//                                         borderColor: "text-primary", // Border color on hover
//                                     },
//                                     "&.Mui-focused fieldset": {
//                                         borderColor: "green", // Border color when focused
//                                     },
//                                     },
//                                 }}
//                             />
//                             <Button 
//                             className="bg-[#BD0917] text-white text-4"
//                             text="Get Started"
//                             radius="full"
//                             size="medium"
//                             />
//                         </div>
//                         <div className="relative">
//                         <Image
//                         src="/images/ctaRing1.webp" 
//                         alt="CTA Ring 1"
//                         width={200}
//                         height={300}
//                         className="object-cover" 
//                          />
//                     </div>
//                     </div>
                     
//                 </div>
//             </section>
//         </>
//     )
// }

// export default FormCTA;


// import { TextField } from "@mui/material";
// import Button from "./button";
// import Image from "next/image";

// const FormCTA = () => {

//   return (
//     <section className="relative bg-grad-hero rounded-[40px] overflow-hidden py-20 px-6">
//       {/* 1. Background Wave Overlay (Optional if you have the asset) */}
//       <div className="w-full h-auto absolute inset-0 opacity-100 pointer-events-none">
//          <Image src="/images/element.webp" alt="Wave Element" fill className="object-cover"/>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto text-center">
//         {/* Typography using your predefined styles */}
//         <h2 className="text-white font-spartan font-bold text-4xl mb-6 leading-tight">
//           Get our stories delivered From us <br /> to your inbox weekly
//         </h2>
        
//         <p className="text-white/80 body2 mb-10 max-w-2xl mx-auto">
//           Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a response the following day.
//         </p>

//         {/* The White Form Container */}
//         <div className="bg-white p-4 sm:p-6 rounded-4xl flex flex-col sm:flex-row gap-4 items-center shadow-soft max-w-3xl mx-auto">
//           <TextField
//             placeholder="Enter Your E-mail"
//             type="email"
//             variant="outlined"
//             fullWidth
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 borderRadius: "50px",
//                 backgroundColor: "#F8F9FA", // Light grey input as per design
//                 "& fieldset": { borderColor: "#E5E5E5" },
//                 "&:hover fieldset": { borderColor: "#BD0917" },
//                 "&.Mui-focused fieldset": { borderColor: "#BD0917" },
//               },
//               "& .MuiInputBase-input": {
//                  padding: "16px 24px",
//                  fontFamily: "Poppins",
//               }
//             }}
//           />
//           <Button
//             className="bg-[#BD0917] text-white whitespace-nowrap px-10 h-14"
//             text="Get Started"
//             radius="full"
//           />
//         </div>
//       </div>

//       {/* 2. Absolute Decorative Rings (Bottom Center) */}
//       <div className="absolute -bottom-12.5 left-1/2 -translate-x-1/2 opacity-50 pointer-events-none">
//         <Image
//           src="/images/ctaRing1.webp"
//           alt="Decorative Ring"
//           width={400}
//           height={200}
//           className="object-contain"
//         />
//       </div>
//     </section>
//   );
// };

// export default FormCTA;
// 'use client';

// import { TextField, Box, InputAdornment, Select, ListSubheader, InputBase, MenuItem } from "@mui/material";
// import Button from "./button";
// import Image from "next/image";
// import { useMemo, useState } from "react";
// import { countries } from "@/content/countries";

// interface FormCTAProps {
//   variant?: "form" | "field";
// }

// const FormCTA = ({ variant = "field" }: FormCTAProps) => {
//     const isForm = variant === "field";

//     const [country, setCountry] = useState("+44");
//     const [searchText, setSearchText] = useState("");

//     // Dynamic Filtering Logic
//     const filteredCountries = useMemo(() => {
//         return countries.filter((c) =>
//         c.label.toLowerCase().includes(searchText.toLowerCase()) ||
//         c.code.includes(searchText)
//         );
//     }, [searchText]);

//     // Helper to find the ISO code for the selected phone code
//     const selectedCountry = countries.find(c => c.code === country);

//   return (
//     <section className="relative bg-grad-hero rounded-[40px] overflow-hidden py-16 px-6 sm:px-12">
//       {/* Background Wave Overlay */}
//       <div className="w-full h-auto absolute inset-0 opacity-100 pointer-events-none">
//         <Image src="/images/element.webp" alt="Wave Element" fill className="object-cover" />
//       </div>

//       <div className={`relative z-10 mx-auto ${isForm ? "max-w-6xl" : "max-w-4xl text-center"}`}>
//         <div className={`flex flex-col ${isForm ? "lg:flex-row items-center gap-12" : "items-center"}`}>
          
//           {/* Left Content / Header Section */}
//           <div className={isForm ? "lg:w-1/2 text-left" : "w-full"}>
//             <h2 className="text-white font-spartan font-bold text-3xl sm:text-4xl mb-6 leading-tight">
//               {isForm ? "Our Technology Experts are Change Catalysts" : "Get our stories delivered From us to your inbox weekly"}
//             </h2>
//             <p className="text-white/80 body2 mb-8">
//               {isForm ? "Book a Free Consultation Call with Our Experts Today" : "Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a response the following day."}
//             </p>
//           </div>

//           {/* Right Section: Conditional Form or Field */}
//           <div className={isForm ? "lg:w-2/3 w-full" : "w-full max-w-3xl"}>
//             {isForm ? (
//               /* DESIGN 1: MULTI-FIELD FORM */
//               <div className="bg-white p-8 rounded-4xl shadow-soft">
//                 <form className="space-y-4">
//                   <Box className="flex flex-col gap-1">
//                     <label className="text-secondary font-bold text-sm">Full Name*</label>
//                     <TextField placeholder="Enter Your First Name" fullWidth variant="outlined" sx={fieldStyles} />
//                   </Box>
//                   <Box className="flex flex-col gap-1">
//                     <label className="text-secondary font-bold text-sm">Email*</label>
//                     <TextField placeholder="Enter Your Email Address" fullWidth variant="outlined" sx={fieldStyles} />
//                   </Box>
//                   <Box className="flex flex-col gap-1">
//                     <label className="text-secondary font-bold text-sm">Phone Number*</label>
//                     <TextField 
//                         placeholder="xx xxxx xxxx"
//                         fullWidth
//                         variant="outlined"
//                         sx={fieldStyles}
//                         slotProps={{
//                             input: {
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                     <Select
//                                         value={country}
//                                         onChange={(e) => setCountry(e.target.value)}
//                                         variant="standard"
//                                         disableUnderline
//                                         // Ensure the menu doesn't close when clicking the search box
//                                         MenuProps={{ autoFocus: false }}
//                                         onClose={() => setSearchText("")} 
//                                         renderValue={(value) => (
//                                         <Box className="flex items-center gap-2">
//                                             {selectedCountry && (
//                                             <Image
//                                                 src={`https://flagcdn.com/w20/${selectedCountry.iso.toLowerCase()}.png`}
//                                                 alt={selectedCountry.label}
//                                                 width="20"
//                                                 height="20"
//                                                 loading="lazy"
//                                             />
//                                             )}
//                                             <span className="font-bold text-secondary">{value}</span>
//                                         </Box>
//                                         )}
//                                     >
//                                         {/* Fixed Search Box inside the Dropdown */}
//                                         <ListSubheader>
//                                         <InputBase
//                                             fullWidth
//                                             placeholder="Search country..."
//                                             value={searchText}
//                                             onChange={(e) => setSearchText(e.target.value)}
//                                             onKeyDown={(e) => e.stopPropagation()} // Prevents select from closing
//                                             className="p-2 border-b"
//                                         />
//                                         </ListSubheader>

//                                         {filteredCountries.map((item) => (
//                                         <MenuItem key={`${item.iso}-${item.code}`} value={item.code} className="flex gap-1">
//                                             <Image
//                                             src={`https://flagcdn.com/w20/${item.iso.toLowerCase()}.png`}
//                                             alt="Flag"
//                                             width="20"
//                                             height="20"
//                                             loading="lazy"
//                                             />
//                                             <span className="text-sm">{item.label} ({item.code})</span>
//                                         </MenuItem>
//                 ))}
//                                     </Select>
//                                     <Box className="h-6 w-px bg-gray-300 mx-2" />
//                                     </InputAdornment>
//                                 ),
//                             },
//                         }}
      
//                     />
//                   </Box>
//                   <Box className="flex flex-col gap-1">
//                     <label className="text-secondary font-bold text-sm">Describe Your Project Idea*</label>
//                     <TextField placeholder="How can we help you?" fullWidth multiline rows={3} variant="outlined" sx={fieldStyles} />
//                   </Box>
//                   <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:flex-col lg:justify-between lg:items-center xl:flex-row pt-4">
//                     <Button className="bg-[#BD0917] text-white px-8 h-14 w-full sm:w-aut" text="Schedule Free Consultation" radius="full" />
//                     <span className="text-slate-gray text-xs flex items-center gap-2">
//                       <Image src="/icons/security-check.svg" alt="shield" width={16} height={16} /> Your privacy is protected
//                     </span>
//                   </div>
//                 </form>
//               </div>
//             ) : (
//               /* DESIGN 2: SINGLE EMAIL FIELD */
//               <div className="bg-white p-4 sm:p-6 rounded-4xl flex flex-col sm:flex-row gap-4 items-center shadow-soft">
//                 <TextField placeholder="Enter Your E-mail" type="email" variant="outlined" fullWidth sx={fieldStyles} />
//                 <Button className="bg-[#BD0917] text-white whitespace-nowrap px-10 h-14" text="Get Started" radius="full" />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Absolute Decorative Rings */}
//       <div className={`absolute -bottom-12.5 ${isForm ? 'left-0' : 'left-1/2'} -translate-x-1/2 opacity-50 pointer-events-none`}
//       >
//         <Image src="/images/ctaRing1.webp" alt="Decorative Ring" width={400} height={200} className="object-contain" />
//       </div>
//     </section>
//   );
// };

// // Common Styles for MUI TextFields
// const fieldStyles = {
//   "& .MuiOutlinedInput-root": {
//     borderRadius: "12px",
//     backgroundColor: "#F8F9FA",
//     "& fieldset": { borderColor: "#E5E5E5" },
//     "&:hover fieldset": { borderColor: "#BD0917" },
//     "&.Mui-focused fieldset": { borderColor: "#BD0917" },
//   },
//   "& .MuiInputBase-input": { padding: "14px 20px", fontFamily: "Poppins" },
// };

// export default FormCTA;

'use client';

import {
  TextField,
  Box,
  InputAdornment,
  Select,
  ListSubheader,
  InputBase,
  MenuItem,
} from "@mui/material";

import Image from "next/image";
import { useMemo, useState } from "react";
import Button from "./button";
import { countries } from "@/content/countries.data";

/* ----------------------------- TYPES ----------------------------- */

type Variant = "form" | "field";

type FieldType = "text" | "email" | "textarea" | "phone";

interface FieldConfig {
  type: FieldType;
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number;
}

interface CTAConfig {
  variant?: Variant;

  heading: string;
  description?: string;

  fields?: FieldConfig[];

  buttonText: string;
  buttonClassName?: string;

  footerNote?: string;

  backgroundImage?: string;
  ringImage?: string;

  wrapperClassName?: string;
}

/* ----------------------------- COMPONENT ----------------------------- */

const FormCTA = ({
  variant = "field",
  heading,
  description,
  fields = [],
  buttonText,
  buttonClassName,
  footerNote,
  backgroundImage = "/images/element.webp",
  ringImage = "/images/ctaRing1.webp",
  wrapperClassName,
}: CTAConfig) => {
  const isForm = variant === "form";

  const [country, setCountry] = useState("+44");
  const [searchText, setSearchText] = useState("");

  const filteredCountries = useMemo(() => {
    return countries.filter(
      (c) =>
        c.label.toLowerCase().includes(searchText.toLowerCase()) ||
        c.code.includes(searchText)
    );
  }, [searchText]);

  const selectedCountry = countries.find((c) => c.code === country);

  return (
    <section
      className={`relative ${isForm ? "bg-black" : "bg-grad-hero"}  rounded-[40px] overflow-hidden py-16 px-6 sm:px-12 ${wrapperClassName || ""}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={backgroundImage}
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      <div
        className={`relative z-10 mx-auto ${
          isForm ? "max-w-6xl" : "max-w-4xl text-center"
        }`}
      >
        <div
          className={`flex flex-col ${
            isForm ? "lg:flex-row items-center gap-12" : "items-center"
          }`}
        >
          {/* LEFT */}
          <div className={isForm ? "lg:w-1/2 text-left" : "w-full"}>
            <h2 className="text-white font-spartan font-bold text-3xl sm:text-4xl mb-6 leading-tight">
              {heading}
            </h2>

            {description && (
              <p className="text-white/80 body2 mb-8">{description}</p>
            )}
          </div>

          {/* RIGHT */}
          <div className={isForm ? "lg:w-[80%] w-full" : "w-full max-w-3xl"}>
            {isForm ? (
              /* FORM MODE */
              <div className="bg-white p-8 rounded-4xl shadow-soft">
                <form className="space-y-4">
                  {fields.map((field) => {
                    if (field.type === "phone") {
                      return (
                        <Box key={field.name} className="flex flex-col gap-1">
                          {field.label && (
                            <label className="text-secondary font-bold text-sm">
                              {field.label}
                            </label>
                          )}

                          <TextField
                            placeholder={field.placeholder}
                            fullWidth
                            variant="outlined"
                            sx={fieldStyles}
                            slotProps={{
                              input: {
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Select
                                      value={country}
                                      onChange={(e) =>
                                        setCountry(e.target.value)
                                      }
                                      variant="standard"
                                      disableUnderline
                                      MenuProps={{ autoFocus: false }}
                                      onClose={() => setSearchText("")}
                                      renderValue={(value) => (
                                        <Box className="flex items-center gap-2">
                                          {selectedCountry && (
                                            <Image
                                              src={`https://flagcdn.com/w20/${selectedCountry.iso.toLowerCase()}.png`}
                                              alt={selectedCountry.label}
                                              width={20}
                                              height={20}
                                            />
                                          )}
                                          <span className="font-bold text-secondary">
                                            {value}
                                          </span>
                                        </Box>
                                      )}
                                    >
                                      <ListSubheader>
                                        <InputBase
                                          fullWidth
                                          placeholder="Search country..."
                                          value={searchText}
                                          onChange={(e) =>
                                            setSearchText(e.target.value)
                                          }
                                          onKeyDown={(e) =>
                                            e.stopPropagation()
                                          }
                                          className="p-2 border-b"
                                        />
                                      </ListSubheader>

                                      {filteredCountries.map((item) => (
                                        <MenuItem
                                          key={item.code}
                                          value={item.code}
                                        >
                                          <Image
                                            src={`https://flagcdn.com/w20/${item.iso.toLowerCase()}.png`}
                                            alt="flag"
                                            width={20}
                                            height={20}
                                          />
                                          <span className="ml-2 text-sm">
                                            {item.label} ({item.code})
                                          </span>
                                        </MenuItem>
                                      ))}
                                    </Select>

                                    <Box className="h-6 w-px bg-gray-300 mx-2" />
                                  </InputAdornment>
                                ),
                              },
                            }}
                          />
                        </Box>
                      );
                    }

                    return (
                      <Box key={field.name} className="flex flex-col gap-1">
                        {field.label && (
                          <label className="text-secondary font-bold text-sm">
                            {field.label}
                          </label>
                        )}

                        <TextField
                          placeholder={field.placeholder}
                          fullWidth
                          multiline={field.type === "textarea"}
                          rows={field.rows}
                          type={field.type === "email" ? "email" : "text"}
                          variant="outlined"
                          sx={fieldStyles}
                        />
                      </Box>
                    );
                  })}

                  <div className="pt-4 flex flex-col gap-4 items-center md:flex-row md:justify-between">
                    <Button
                      className={`bg-[#BD0917] text-white px-8 h-14 w-full sm:w-auto ${buttonClassName || ""}`}
                      text={buttonText}
                      radius="full"
                    />
                    {footerNote && (
                    <span className="text-slate-gray text-xs flex items-center gap-2">
                      <Image
                        src="/icons/security-check.svg"
                        alt="shield"
                        width={16}
                        height={16}
                      />
                      {footerNote}
                    </span>
                  )}
                  </div>

                  
                </form>
              </div>
            ) : (
              /* FIELD MODE */
              <div className="bg-white px-4 py-4 sm:p-6 rounded-4xl flex flex-col sm:flex-row gap-4 items-center shadow-soft">
                <TextField
                  placeholder={fields?.[0]?.placeholder || "Enter value"}
                  fullWidth
                  variant="outlined"
                  sx={fieldStyles}
                />

                <Button
                  className={`bg-[#BD0917] text-white whitespace-nowrap px-10 h-14 ${buttonClassName || ""}`}
                  text={buttonText}
                  radius="full"
                  size="medium"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ring */}
      <div className={`absolute -bottom-12.5 ${isForm ? "left-0" : "left-1/2"} -translate-x-1/2 opacity-50 pointer-events-none`}>
        <Image src={ringImage} alt="ring" width={400} height={200} />
      </div>
    </section>
  );
};

/* ----------------------------- STYLES ----------------------------- */

const fieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#F8F9FA",
    "& fieldset": { borderColor: "#E5E5E5" },
    "&:hover fieldset": { borderColor: "#BD0917" },
    "&.Mui-focused fieldset": { borderColor: "#BD0917" },
  },
  "& .MuiInputBase-input": {
    padding: "14px 20px",
    fontFamily: "Poppins",
  },
};

export default FormCTA;

