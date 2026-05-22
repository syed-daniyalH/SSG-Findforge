import { describe, expect, it } from "vitest";

import { buildPrimaryNavLinks, Navlink } from "./buildnavlinks";

describe("buildPrimaryNavLinks", () => {
  it("builds the curated top-level menu and preserves services children", () => {
    const servicesChildren = [
      {
        id: 1,
        name: "AI Automation",
        slug: "ai-automation",
        children: [
          {
            id: 11,
            name: "Chat Bot",
            slug: "chat-bot",
          },
        ],
      },
    ];

    const links: Navlink[] = [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Services",
        href: "/services",
        isMega: true,
        children: servicesChildren,
      },
      {
        name: "about us",
        href: "/about-us",
      },
    ];

    expect(buildPrimaryNavLinks(links)).toEqual([
      {
        name: "Solutions",
        href: "/services",
        isMega: true,
        children: servicesChildren,
      },
      {
        name: "Industries",
        href: "/industries",
        isMega: false,
        children: undefined,
      },
      {
        name: "About Us",
        href: "/about-us",
        isMega: false,
        children: undefined,
      },
      {
        name: "Resources",
        href: "/blog",
        isMega: true,
        children: expect.arrayContaining([
          expect.objectContaining({
            name: "Blog",
            href: "/blog",
          }),
          expect.objectContaining({
            name: "Author",
            href: "/author/rosaria-vargas",
          }),
          expect.objectContaining({
            name: "Case Studies",
            href: "/casestudy",
          }),
          expect.objectContaining({
            name: "Case Study Detailed Page",
            href: "/casestudy/techflow",
          }),
        ]),
      },
    ]);
  });
});
