"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQProps } from "@/types/faq";
import { ChevronDown } from "lucide-react";

const Accordion = ({ items }: FAQProps) => {
  // Use index as the open ID since your data objects don't have IDs currently
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-0 pt-14 pb-4 md:pt-18">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div 
            key={index} 
            className="border-b border-[#EAF0F8]"
          >
            <button
              onClick={() => toggle(index)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-all md:py-7"
            >
              <span className="font-spartan text-[17px] font-bold leading-7 text-black transition-colors md:text-[18px]">
                {item.question}
              </span>
              
              <div className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full transition-all ${isOpen ? 'bg-[#BD0917] text-white' : 'bg-[#F4F7FF] text-[#BD0917]'}`}>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={14} strokeWidth={3} />
                </motion.div>
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {/* Using dangerouslySetInnerHTML in case your answers have HTML */}
                  <div 
                    className="pr-0 pb-6 font-poppins text-[15px] leading-[1.9] text-neutral-dark md:pr-14"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
