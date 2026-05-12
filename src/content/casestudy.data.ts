import { CaseStudyCardProps } from "@/types/casestudy.type";

export const caseStudyCardsData: CaseStudyCardProps[] = [
  {
    image: "/images/brand.webp",
    category: "Branding",
    company: "TechFlow Inc.",
    title: "Revolutionary AI Platform Design",
    description:
      "A complete brand redesign and digital platform for a cutting-edge AI technology company, focusing on user experience and modern aesthetics.",
    slug: "/casestudy/techflow",
    subcategories: ["UI/UX", "Branding", "Web Design"],
    stats: [
      { label: "Engagement", value: "+245%" },
      { label: "Conversion", value: "+180%" },
      { label: "Satisfaction", value: "98%" },
    ],
  },
  {
    image: "/images/design.webp",
    category: "Mobile App",
    company: "NextGen Labs",
    title: "Enterprise SaaS Dashboard System",
    description:
      "Built a scalable SaaS dashboard with real-time analytics, user management, and advanced reporting features.",
    slug: "/casestudy/nextgen",
    subcategories: ["Frontend", "Backend", "SaaS"],
    stats: [
      { label: "Users", value: "+12K" },
      { label: "Performance", value: "99.9%" },
      { label: "Retention", value: "87%" },
    ],
  },
  {
    image: "/images/design1.webp",
    category: "Web Design",
    company: "PixelCraft Studio",
    title: "Mobile Banking App Redesign",
    description:
      "Redesigned a banking app focusing on usability, accessibility, and modern financial UX patterns.",
    slug: "/casestudy/pixelcraft",
    subcategories: ["Mobile", "UI/UX", "Fintech"],
    stats: [
      { label: "Engagement", value: "+190%" },
      { label: "Downloads", value: "+65K" },
      { label: "Rating", value: "4.8" },
    ],
  },
  {
    image: "/images/ecom.webp",
    category: "E-commerce",
    company: "ShopSphere",
    title: "High-Converting E-commerce Platform",
    description:
      "Designed and developed a conversion-optimized e-commerce platform with seamless checkout experience.",
    slug: "/casestudy/shopsphere",
    subcategories: ["E-commerce", "UI/UX", "Conversion"],
    stats: [
      { label: "Sales", value: "+320%" },
      { label: "Conversion", value: "+210%" },
      { label: "Cart Value", value: "+45%" },
    ],
  },
  {
    image: "/images/ecom1.webp",
    category: "Web Design",
    company: "CloudNova",
    title: "Cloud Infrastructure Management Tool",
    description:
      "A powerful cloud management dashboard for monitoring infrastructure and optimizing resources.",
    slug: "/casestudy/cloudnova",
    subcategories: ["DevOps", "Cloud", "SaaS"],
    stats: [
      { label: "Efficiency", value: "+300%" },
      { label: "Uptime", value: "99.99%" },
      { label: "Cost Saving", value: "+40%" },
    ],
  },
  {
    image: "/images/app.webp",
    category: "Education",
    company: "Learnify",
    title: "E-learning Platform Experience Design",
    description:
      "Created an interactive learning platform for students with gamification and progress tracking.",
    slug: "/casestudy/learnify",
    subcategories: ["EdTech", "UI/UX", "Web App"],
    stats: [
      { label: "Engagement", value: "+275%" },
      { label: "Completion", value: "82%" },
      { label: "Users", value: "+50K" },
    ],
  },
  {
    image: "/images/analysis.webp",
    category: "Healthcare",
    company: "MediCore",
    title: "Healthcare Appointment System",
    description:
      "A smart appointment booking and patient management system for clinics and hospitals.",
    slug: "/casestudy/medicore",
    subcategories: ["Healthcare", "System Design", "UX"],
    stats: [
      { label: "Efficiency", value: "+160%" },
      { label: "Appointments", value: "+70K" },
      { label: "Satisfaction", value: "96%" },
    ],
    projectInfo: [
      {
        title: "Duration",
        icon: "/icons/primary-calendar.svg",
        value: "5 months",
      },
      {
        title: "Role",
        icon: "/icons/octicon_people.svg",
        value: "Design & Frontend Development",
      },
      {
        title: "Deliverables",
        icon: "/icons/deliverables.svg",
        list: ["Website Design", "CMS Integration", "Template System", "Responsive Design"],
      },

    ]
  },
];