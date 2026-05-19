import Link from "next/link";
import Image from "next/image";
import NavMenu from "./navbar/Navbar";
import MobileMenu from "./navbar/mobileNav";
import { getNavLinks } from "@/lib/api/menu/utils/buildnavlinks";
import Button from "../ui/button";

const Header = async () => {
  const navLinks = await getNavLinks();

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-white/95 shadow-[0_12px_32px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300"
    >
      <div className="mx-auto flex h-[88px] w-full max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <div className="shrink-0 text-2xl font-bold text-primary">
          <Link href="/">
            <Image
              src="/images/header-logo.webp"
              alt="SSG MindForge"
              width={230}
              height={42}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 220px"
              className="h-auto w-[165px] antialiased sm:w-[190px] xl:w-[230px]"
            />
          </Link>
        </div>

        <div className="hidden flex-1 justify-center lg:flex">
          <NavMenu navLinks={navLinks} />
        </div>

        <div className="hidden shrink-0 lg:flex">
          <Button
            text="Contact Us"
            icon="/icons/arrowRight.svg"
            showIcon
            iconMode="static1"
            size="medium"
            radius="full"
            href="/contact-us"
            variant="gradient"
            className="inline-flex min-w-[148px] justify-center text-[15px] font-semibold shadow-[0_14px_28px_rgba(181,2,15,0.18)]"
          />
        </div>

        <div className="ml-auto lg:hidden">
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
