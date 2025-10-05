import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import React from "react";
import SingleApplication from "./SingleApplication";

const application = {
  company: "Test Company",
  first_name: "Test",
  last_name: "User",
  email: "test.user@example.com",
  loan_amount: 16036,
  date_created: "2024-09-26T22:27:20.899Z",
  expiry_date: "2025-09-10T10:00:00.000Z",
};

describe("SingleApplication", () => {
  it("renders key fields with correct formatting", () => {
    render(<SingleApplication application={application} data-testid="app" />);

    expect(screen.getByText("Company")).toBeInTheDocument();

    const companyCell = screen.getByText("Company").closest("div")!;
    expect(within(companyCell).getByText("Test Company")).toBeInTheDocument();

    const nameCell = screen.getByText("Name").closest("div")!;
    expect(within(nameCell).getByText("Test User")).toBeInTheDocument();

    const emailCell = screen.getByText("Email").closest("div")!;
    const emailLink = within(emailCell).getByRole("link", {
      name: "test.user@example.com",
    });
    expect(emailLink).toHaveAttribute("href", "mailto:test.user@example.com");

    const loanCell = screen.getByText("Loan Amount").closest("div")!;
    expect(within(loanCell).getByText("£16,036")).toBeInTheDocument();

    const createdCell = screen.getByText("Application Date").closest("div")!;
    expect(within(createdCell).getByText("26-09-2024")).toBeInTheDocument();

    const expiryCell = screen.getByText("Expiry date").closest("div")!;
    expect(within(expiryCell).getByText("10-09-2025")).toBeInTheDocument();
  });
});
