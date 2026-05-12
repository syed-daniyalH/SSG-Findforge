import { InfoCardProps } from "@/types/info.type";

export const WhyChooseUsData: InfoCardProps[] = [
    {
        name: "Intelligent Tendering Platform",
        number: 1,
        description: "AI-powered search, bid scoring, and automated proposal generation that learns from your winning history.",
        gridSpan: "lg:col-span-8", // Wide card
        variant: "default"
    },
    {
        name: "Workflow Automation",
        number: 2,
        description: "RPA & ML for paperwork, compliance checks, approvals, and compliance reporting.",
        gridSpan: "lg:col-span-4", // Narrow card
        variant: "gradient"
    },
    {
        name: "Custom Tech Solutions",
        number: 3,
        description: "Your business problems deserve custom engineering — not off-the-shelf band-aids.",
        gridSpan: "lg:col-span-4",
        variant: "default"
    },
    {
        name: "Secure & Cloud-First",
        number: 4,
        description: "Industry-grade security, encryption, and compliance frameworks built on future-ready infrastructure.",
        gridSpan: "lg:col-span-8",
        variant: "default"
    }
];

