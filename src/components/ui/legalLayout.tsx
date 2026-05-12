"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, RotateCcw } from "lucide-react";
import { LegalPageData } from "@/types/policy.type";

interface Props {
    data: LegalPageData;
}

const LegalLayout: React.FC<Props> = ({ data }) => {
    const [activeSection, setActiveSection] = useState(data.sections[0].id);
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        data.sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [data.sections]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Sidebar */}
                <aside className="lg:col-span-4">
                    <div className="sticky top-10">
                        <div className="border border-gray-100 rounded-xl shadow-sm overflow-hidden transition-all duration-300">
                            {/* Header / Toggle Button */}
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-[#C00000] font-bold text-lg">{data.categoryTitle}</h3>
                                <ChevronDown
                                    className={`text-[#C00000] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Collapsible Menu Area */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isExpanded
                                    ? "grid-rows-[1fr] opacity-100 p-6 pt-0"
                                    : "grid-rows-[0fr] opacity-0 p-0"
                                    }`}
                            >
                                <nav className="flex flex-col space-y-4 overflow-hidden">
                                    {data.sections.map((section, idx) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            onClick={(e) => handleScroll(e, section.id)}
                                            className={`flex items-center gap-2 text-sm transition-all duration-200 ${activeSection === section.id
                                                ? "text-[#C00000] font-semibold translate-x-1"
                                                : "text-[#94A3B8] hover:text-gray-600"
                                                }`}
                                        >
                                            {idx === 0 && <RotateCcw size={14} className="shrink-0" />}
                                            <span className={idx !== 0 ? "pl-6" : ""}>
                                                {section.title}
                                            </span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Content Area */}
                <main className="lg:col-span-8 space-y-24">
  {data.sections.map((section) => {
    // Check if content exists AND is not just an empty string
    if (!section.content || section.content.trim() === "") return null;

    return (
      <div
        key={section.id}
        id={section.id}
        className="scroll-mt-32 transition-opacity duration-500"
        style={{ opacity: activeSection === section.id ? 1 : 0.4 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h2>
        
        <article
          className="prose prose-slate max-w-none 
          prose-p:text-[#64748B] prose-p:leading-relaxed prose-p:text-[16px]
          prose-li:text-[#64748B] prose-headings:text-gray-800"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      </div>
    );
  })}
</main>
            </div>
        </section>
    );
};

export default LegalLayout;

