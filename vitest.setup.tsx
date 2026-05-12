import React from "react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({
    alt = "",
    src,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & {
    src: string | { src?: string };
  }) => {
    const resolvedSrc = typeof src === "string" ? src : (src?.src ?? "");

    return React.createElement("img", {
      alt,
      src: resolvedSrc,
      ...props,
    });
  },
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: React.ReactNode;
  }) =>
    React.createElement(
      "a",
      {
        href,
        ...props,
      },
      children,
    ),
}));
