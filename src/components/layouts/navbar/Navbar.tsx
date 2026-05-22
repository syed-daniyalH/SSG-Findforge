import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./megamenu"; 
import { Navlink } from "@/lib/api/menu/utils/buildnavlinks";
import Button from "@/components/ui/button";
import { resolveTopLevelSlug } from "@/lib/routes";

interface NavMenuProps {
  navLinks: Navlink[];
}

const NavMenu: React.FC<NavMenuProps> = ({ navLinks }) => {
  return (
    <nav className="flex items-center justify-center gap-5 xl:gap-7 text-[13px] font-poppins">
      {navLinks.map((link) => {
        if (link.isMega) {
          return (
            <div key={link.name} className="group static h-full flex items-center">
              <Link
                href={link.href || "#"}
                className="inline-flex items-center gap-1.5 py-3 text-secondary font-medium transition-colors hover:text-primary"
              >
                {link.name}
                <Image
                  src="/icons/dropdown.svg"
                  alt=""
                  width={10}
                  height={10}
                  aria-hidden="true"
                  className="opacity-80 transition-transform duration-300 group-hover:rotate-180"
                />
              </Link>
              <MegaMenu
                data={link.children || []}
                parentSlug={resolveTopLevelSlug(link.href, link.name)}
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
            className="py-3 text-secondary font-medium transition-colors hover:text-primary"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenu;
