import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./megamenu"; 
import MobileMenu from "./mobileNav";
import { Navlink } from "@/lib/api/menu/utils/buildnavlinks";
import Button from "@/components/ui/button";

interface NavMenuProps {
  navLinks: Navlink[];
}

const NavMenu: React.FC<NavMenuProps> = ({ navLinks }) => {
  return (
    <>
      <nav className="hidden md:flex gap-8 items-center justify-center flex-1 font-inter text-[14px] h-full">
        {navLinks.map((link) => {
          if (link.isMega) {
            return (
              <div key={link.name} className="group static h-full flex items-center">
                <Link
                  href={link.href || "#"}
                  className="inline-flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors relative z-10 py-4"
                >
                  {link.name}
                  <Image
                    src="/icons/dropdown.svg"
                    alt="arrow"
                    width={10}
                    height={10}
                    className="transition-transform duration-300 group-hover:rotate-180 opacity-80"
                  />
                </Link>
                <MegaMenu
                  data={link.children || []}
                  parentSlug={link.name.toLowerCase() === 'services' ? 'services' : 'pages'}
                />
              </div>
            );
          }

          if (link.type === "button") {
            return (
              <Button
                key={link.name}
                text={link.name}
                href={link.href}
                size="medium"
                radius="full"
                className="ml-2"
              />
            );
          }

          return (
            <Link
              key={link.name}
              href={link.href!}
              className="text-secondary hover:text-primary font-medium transition-colors py-4"
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Outside the nav so md:hidden works correctly */}
      <MobileMenu navLinks={navLinks} />
    </>
  );
};

export default NavMenu;

