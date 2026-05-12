import type { Metadata } from "next";
import { League_Spartan, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import TechionikChatWidget from "@/components/sections/chatbot";
import { AccessibilityWidget } from "@/components/sections/wcag";
import ExitIntentModal from "@/components/sections/ExitIntentModel";

// Primary Heading Font
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league",
});

// Secondary / Body Font
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// Accent / Alternative Font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "SSG MindForge",
  description: "Compliance and Security Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${jakarta.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ExitIntentModal/>
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <AccessibilityWidget/>
        <TechionikChatWidget/>

      </body>
    </html>
  );
}


