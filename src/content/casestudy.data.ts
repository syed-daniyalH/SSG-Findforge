import { CaseStudyCardProps } from "@/types/casestudy.type";

export const caseStudyCardsData: CaseStudyCardProps[] = [
  {
    image: "/images/brand.webp",
    category: "Website",
    company: "Apple Inc.",
    title: "Revolutionary AI Platform Design",
    description:
      "A complete design and digital platform for a cutting-edge technology company, focused on user experience and modern aesthetics.",
    slug: "/casestudy/techflow",
    subcategories: ["UI/UX", "Design", "Development"],
    stats: [
      { label: "Engagement", value: "+245%" },
      { label: "Conversion", value: "+180%" },
      { label: "Satisfaction", value: "98%" },
    ],
  },
  {
    image: "/images/ecom.webp",
    category: "Ecommerce",
    company: "Dior",
    title: "Revolutionary AI Platform",
    description:
      "Crafting a premium digital brand experience with refined visuals, smooth shopping flows, and elevated product storytelling.",
    slug: "/casestudy/nextgen",
    subcategories: ["UI/UX", "Design", "Development"],
    stats: [
      { label: "Users", value: "+12K" },
      { label: "Performance", value: "99.9%" },
      { label: "Retention", value: "87%" },
    ],
  },
  {
    image: "/images/app.webp",
    category: "Website",
    company: "Health App",
    title: "Health App Management",
    description:
      "A healthcare analytics and reporting experience built for faster decisions, clear patient data, and secure operations.",
    slug: "/casestudy/pixelcraft",
    subcategories: ["UI/UX", "Design", "Development"],
    stats: [
      { label: "Engagement", value: "+190%" },
      { label: "Downloads", value: "+65K" },
      { label: "Rating", value: "4.8" },
    ],
  },
  {
    image: "/images/design.webp",
    category: "Web Design",
    company: "Medical Design",
    title: "Healthcare Appointment System",
    description:
      "Designed a digital appointment workflow with simpler scheduling, patient management, and responsive interfaces.",
    slug: "/casestudy/shopsphere",
    subcategories: ["UI/UX", "Design", "Development"],
    stats: [
      { label: "Sales", value: "+320%" },
      { label: "Conversion", value: "+210%" },
      { label: "Cart Value", value: "+45%" },
    ],
  },
  {
    image: "/images/ecom1.webp",
    category: "Ecommerce",
    company: "Shopify",
    title: "Digital Asset Marketplace",
    description:
      "A product marketplace built for smooth catalog browsing, fast checkout, and scalable storefront management.",
    slug: "/casestudy/cloudnova",
    subcategories: ["UI/UX", "Design", "Development"],
    stats: [
      { label: "Efficiency", value: "+300%" },
      { label: "Uptime", value: "99.99%" },
      { label: "Cost Saving", value: "+40%" },
    ],
  },
  {
    image: "/images/design1.webp",
    category: "Workspace",
    company: "Collaboration Workspace",
    title: "Collaborative Workspace",
    description:
      "Created a collaborative workspace experience for planning, documentation, and team productivity.",
    slug: "/casestudy/learnify",
    subcategories: ["UI/UX", "Design", "Development"],
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
