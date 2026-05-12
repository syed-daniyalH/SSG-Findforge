import Link from "next/link";
import Image from "next/image";
import NavMenu from "./navbar/Navbar";
import MobileMenu from "./navbar/mobileNav";
import { getNavLinks } from "@/lib/api/menu/utils/buildnavlinks";
import Button from "../ui/button";

const Header = async () => {
  // Fetch navigation links on the server
  const navLinks = await getNavLinks();

  return (
    <header
      className="fixed w-full top-0 left-0 z-50 bg-white backdrop-blur-md shadow-lg transition-all duration-300"
    >
      <div className="h-20 max-w-960 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-15 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <Link href="/">
            <Image
              src="/images/header-logo.webp"
              alt="Techionik Logo"
              width={230}
              height={42}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 220px"
              className="antialiased"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:block">
          <NavMenu navLinks={navLinks} />
        </div>

        {/* Desktop CTA button */}
        <div className="hidden lg:block">
          <Button
            text="Contact us"
            icon="/icons/arrow-right.svg"
            size="medium"
            radius="full"
            href="/contact-us"
            variant="gradient"
            className="inline-flex z-50"
          />
        </div>

        {/* Mobile burger */}
        <div className="lg:hidden">
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
