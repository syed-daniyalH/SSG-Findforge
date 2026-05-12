"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavChild, Navlink } from "@/lib/api/menu/utils/buildnavlinks";
import Button from "@/components/ui/button";
import { buildMenuSectionHref, resolveTopLevelSlug } from "@/lib/routes";

interface MobileMenuProps {
  navLinks: Navlink[];
}

// Represents which panel is currently shown:
// null = root menu
// "services" | "pages" = top-level mega panel
// { parentSlug, category } = sub-category panel
type MegaPanelState = {
  type: "mega";
  slug: string;
  label: string;
  items: NavChild[];
};

type SubPanelState = {
  type: "sub";
  label: string;
  parentHref: string;
  parentMega: MegaPanelState;
  children: NavChild[];
};

type PanelState = null | MegaPanelState | SubPanelState;

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [panel, setPanel] = useState<PanelState>(null);
  const [animating, setAnimating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setPanel(null), 300);
  };

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  const slideToPanel = (next: PanelState) => {
    setAnimating(true);
    setTimeout(() => {
      setPanel(next);
      setAnimating(false);
    }, 200);
  };

  const slideBack = () => {
    setAnimating(true);
    setTimeout(() => {
      if (panel?.type === "sub") {
        setPanel(panel.parentMega);
      } else {
        setPanel(null);
      }
      setAnimating(false);
    }, 200);
  };

  return (
    <div className="lg:hidden flex items-center" ref={menuRef}>
      {/* ── Burger Button ── */}
      <button
        onClick={() => setIsOpen((p) => !p)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="relative z-120 flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
      >
        <span
          className={`block h-[2px] bg-primary rounded-full transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`}
        />
        <span
          className={`block h-[2px] bg-primary rounded-full transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-4 group-hover:w-6"}`}
        />
        <span
          className={`block h-[2px] bg-primary rounded-full transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"}`}
        />
      </button>

      {/* ── Backdrop ── */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Drawer ── */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85vw] max-w-[360px] z-[110] bg-[#0A0A0A] border-l border-white/[0.06] flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06] shrink-0">
          {panel ? (
            /* Back button when inside a panel */
            <button
              onClick={slideBack}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 4L6 8l4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </button>
          ) : (
            <Link href="/" onClick={handleClose}>
              <Image
                src="/images/logo.webp"
                alt="Logo"
                width={130}
                height={24}
                className="object-contain"
              />
            </Link>
          )}

          {/* Panel title (centered) */}
          {panel && (
            <span className="absolute left-1/2 -translate-x-1/2 text-white text-sm font-semibold capitalize">
              {panel.label}
            </span>
          )}
        </div>

        {/* ── Panel Content ── */}
        <div
          className={`flex-1 overflow-y-auto transition-opacity duration-200 ${
            animating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
          }`}
          style={{ transition: "opacity 0.2s, transform 0.2s" }}
        >
          {/* ROOT MENU */}
          {!panel && (
            <nav className="py-4 px-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                if (link.isMega) {
                  const items = link.children ?? [];
                  return (
                    <div
                      key={link.name}
                      className="flex items-center rounded-lg hover:bg-white/[0.04] transition-all"
                    >
                      {/* Name → navigate to top-level href */}
                      <Link
                        href={link.href || "#"}
                        onClick={handleClose}
                        className="flex-1 px-3 py-3 text-white/80 hover:text-white font-medium capitalize text-sm"
                      >
                        {link.name}
                      </Link>
                      {/* Arrow → open slide panel */}
                      <button
                        onClick={() =>
                          slideToPanel({
                            type: "mega",
                            slug: resolveTopLevelSlug(link.href, link.name),
                            label: link.name,
                            items,
                          })
                        }
                        className="px-3 py-3 text-white/40 hover:text-white transition-colors"
                        aria-label={`Open ${link.name} submenu`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  );
                }

                if (link.type === "button") {
                  return (
                    <div key={link.name} className="px-3 pt-2">
                      <Button
                        text={link.name}
                        href={link.href}
                        size="medium"
                        radius="full"
                        className="w-full justify-center"
                      />
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href!}
                    onClick={handleClose}
                    className="block px-3 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.04] transition-all font-medium text-sm capitalize"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* MEGA PANEL — list of categories */}
          {panel?.type === "mega" && (
            <nav className="py-4 px-4 flex flex-col gap-1">
              {panel.items.map((category) => {
                const hasChildren =
                  category.children && category.children.length > 0;
                const href =
                  buildMenuSectionHref(panel.slug, category.slug);

                return (
                  <div
                    key={category.id}
                    className="flex items-center rounded-lg hover:bg-white/[0.04] transition-all"
                  >
                    {/* Category name → navigate */}
                    <Link
                      href={href}
                      onClick={handleClose}
                      className="flex-1 px-3 py-3 text-white/70 hover:text-white text-sm"
                    >
                      {category.name}
                    </Link>
                    {/* Arrow → open sub panel (only if has children) */}
                    {hasChildren && (
                      <button
                        onClick={() =>
                          slideToPanel({
                            type: "sub",
                            label: category.name,
                            parentHref: href,
                            parentMega: {
                              type: "mega",
                              slug: panel.slug,
                              label: panel.label,
                              items: panel.items,
                            },
                            children: category.children!,
                          })
                        }
                        className="px-3 py-3 text-white/30 hover:text-white transition-colors"
                        aria-label={`Open ${category.name} submenu`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                );
              })}
            </nav>
          )}

          {/* SUB PANEL — list of children */}
          {panel?.type === "sub" && (
            <nav className="py-4 px-4 flex flex-col gap-1">
              {/* Link to the parent category page itself */}
              <Link
                href={panel.parentHref}
                onClick={handleClose}
                className="flex items-center gap-2 px-3 py-3 rounded-lg text-[#F05323] hover:bg-white/[0.04] transition-all text-sm font-medium mb-1 border-b border-white/[0.06]"
              >
                View all — {panel.label}
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7h9M7.5 3.5 11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              {panel.children.map((child) => (
                <Link
                  key={child.id}
                  href={`${panel.parentHref}/${child.slug}`}
                  onClick={handleClose}
                  className="block px-3 py-2.5 rounded-lg text-white/60 hover:text-[#F05323] hover:bg-white/[0.04] transition-all text-sm"
                >
                  {child.name}
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-5 border-t border-white/[0.06] shrink-0">
          <Link
            href="/contact-us"
            onClick={handleClose}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#F05323] text-white text-sm font-semibold hover:bg-[#d94417] transition-colors duration-200"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9M7.5 3.5 11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
