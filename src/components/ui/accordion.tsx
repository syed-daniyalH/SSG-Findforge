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
    <div className="w-full max-w-5xl mx-auto space-y-4 py-10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div 
            key={index} 
            className="border-b border-gray-100 last:border-none pb-4"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between py-4 text-left transition-all group"
            >
              <span className={`text-lg font-bold font-spartan transition-colors ${isOpen ? 'text-secondary' : 'text-slate-gray'}`}>
                {item.question}
              </span>
              
              <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${isOpen ? 'bg-[#BD0917] text-white' : 'bg-[#F8F9FA] text-[#BD0917]'}`}>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} />
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
                    className="text-slate-gray body2 leading-relaxed pr-12 pb-4"
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