import { render, screen, fireEvent } from "@testing-library/react";
import AppLayout from "../index";
import { describe, expect, test } from "vitest";

describe("AppLayout", () => {
  const renderComponent = () => render(<AppLayout />);

  test("renders AppSideBar and AppHeader", () => {
    renderComponent();

    expect(screen.getByTestId("app-sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("app-header")).toBeInTheDocument();
  });

  test("toggles theme mode when toggleTheme is called", () => {
    const { container } = renderComponent();

    // Assuming toggleTheme changes some styles or classNames; you would need to adjust this
    const header = screen.getByTestId("app-header");

    // Initial state assertion - you may need to check a specific class or data attribute
    expect(container.firstChild).toHaveClass("bg-primary-bg");

    // Simulate a theme toggle
    fireEvent.click(header);

  });

  // Add additional tests as needed, such as for routing, etc.
});
