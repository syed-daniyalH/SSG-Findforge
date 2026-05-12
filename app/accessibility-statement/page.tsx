"use client"

import FAQs from "@/components/sections/accordions"
import LegalLayout from "@/components/ui/legalLayout"
import { privacyPolicyData } from "@/content/accessibility.data"

import { useEffect, useState } from "react"

const AssessibilityStatement = () => {

    const [activeSection, setActiveSection] = useState("standard-terms");

    // Tracks which card is expanded: "contractual" or "policies"
    const [expandedCard, setExpandedCard] = useState("contractual");

    // Data structure to keep content and nav synced
    const sections = [
        {
            id: "standard-terms",
            title: "Standard Terms",
            content: "This Privacy Notice provides information about how SSG (\"we,\" \"us,\" or \"our\" for short) processes and protects personal information we obtain about prospective customers, marketing leads and visitors to our website."
        },
        {
            id: "service-descriptions",
            title: "Service Descriptions",
            content: "SSG considers the protection and security of your data to be of paramount importance. We never sell personal data, and we strive to carry out all our processing operations in strict compliance with UK General Data Protection Regulation (\"UK GDPR\")."
        },
        {
            id: "third-party",
            title: "Third Party Terms",
            content: "Please note that this Privacy Notice only covers prospective customers, marketing leads and visitors to our website. It does not cover how we process customer information, which is dealt with in our privacy notice which can be accessed here."
        },  
        {
            id: "previous-terms",
            title: "Previous Standard Terms",
            content: "We take your data protection rights very seriously and process your data responsibly and lawfully. Additional history regarding our previous terms can be found in our archived documentation section."
        }
    ];
    const toggleCard = (cardName: any) => {
        setExpandedCard(expandedCard === cardName ? null : cardName);
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Adjusts the "hit area" to the top-middle of the screen
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

        // Observe all paragraph sections
        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120, // Offset for sticky headers/padding
                behavior: "smooth",
            });
        }
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
                    <h1 className="text-white">Accessibility Statement</h1>
                    <p className="text-white">This accessibility statement applies to the ssgmindforge.com website.</p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 bg-white">
                <LegalLayout data={privacyPolicyData} />
            </section>

            <section
                id="faqs"
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-30 my-10"
            >
                <FAQs />
            </section>
        </>
    )
}

export default AssessibilityStatement

