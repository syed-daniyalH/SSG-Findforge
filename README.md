# SSG MindForge | Compliance & Security Solutions

A high-performance, "Zero-Compromise" corporate web platform built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**. This project focuses on high-fidelity design implementation, custom typography, and a modular component architecture.

# 🏗 Project Architecture
## 1. Dynamic Structure Approach
*  We utilize a Modular Atomic Design strategy to manage 32+ unique components across 21 pages.
*  Atomic UI: Small, reusable elements (Buttons, Inputs, Icons) in @/components/ui.
*  Section Components: Large, self-contained sections (Hero, ProcessList, Pricing) in @/components/sections.
*  JSON-Driven Content: To ensure the project remains scalable, component data is decoupled from the UI logic. Text, images, and links are managed via centralized JSON files in @/content.

## 2. Tech Stack & Tools
*  Framework: Next.js (App Router)
*  Styling: Tailwind CSS v4 (using the new @theme engine for CSS-variable-first design).
*  Animations: Framer Motion for scroll-based entrance reveals and micro-interactions.
*  Slider: Swiper.js for linear "Trusted By" marquees and testimonial carousels.
*  Typography: Optimized Google Fonts (League Spartan, Plus Jakarta Sans, Poppins) via next/font.
*  
# 📄 Pages Overview
The project architecture supports a comprehensive 21-page sitemap, categorized as follows:

## 1. Core Corporate Pages (7 Pages)
* **Home:** High-impact hero section with a vertical process timeline and dynamic service highlights.
* **About:** Company mission, history, and the "Zero-Compromise" philosophy.
* **Contact:** Lead generation with localized hosting/DNS configurations and inquiry forms.
* **Testimonials:** High-fidelity layout featuring art-directed client feedback and cropped imagery.
* **How We Work:** Detailed breakdown of the SSG MindForge methodology and engagement model.
* **SSG C-Suite Page:** Executive-level insights and leadership overview.
* **SSG Locations:** Master directory of global office hubs and contact points.

## 2. Dynamic Collections & Detail Pages (10 Pages)
* **Services & Service Detail:** Master directory of offerings + individual pages for deep-dive technical specs.
* **Industry & Industry Detail:** Specialized solutions for vertical markets + specific deep-dive industry pages.
* **Case Studies & Case Study Detail:** A portfolio of success stories (e.g., Stratekia) + individual project deep-dives.
* **Blog & Blog Detail:** Dynamic content hub for security insights + individual post reading experience.
* **SSG Locations Detail:** Specific regional office details, maps, and localized service information.

## 3. Editorial & Governance (4 Pages)
* **Author Page:** Dedicated profiles for technical contributors and thought leaders.
* **Privacy & Accessibility:** Legal compliance pages (Privacy Policy & Accessibility Statement).
* **Terms & Conditions:** Standardized usage agreements and legal disclosures.
* **Strategy & Procurement:** Specialized pages for Tax Strategy and Public Procurement protocols.

# 🎨 Design Tokens
This project bypasses standard Tailwind defaults for a "Zero Compromise" finish:

*  Typography: Precise H1-H4 styles with custom kerning (e.g., -1.8px letter spacing for main headings).
*  Gradients: Custom radial and linear gradients (bg-grad-hero, bg-grad-glass) defined in globals.css.
*  Interactions: Standardized shadow-soft for consistent hover states across all 32 components.
  
# 🛠 Maintenance
To update global styles, modify the @theme block in src/app/globals.css. To add new components, follow the directory structure in src/components/sections.