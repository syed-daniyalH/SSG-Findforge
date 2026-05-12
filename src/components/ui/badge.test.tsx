import { render, screen } from "@testing-library/react";

import Badge from "./badge";

describe("Badge", () => {
  it("renders text and icon content", () => {
    render(<Badge text="AI Automation" showIcon icon="/icons/compliant-primary.svg" />);

    expect(screen.getByText("AI Automation")).toBeInTheDocument();
    expect(screen.getByAltText("icon")).toBeInTheDocument();
  });
});
