import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";
import UserDetailsList from "../src/components/UserDetailsList";
import { logRoles } from "@testing-library/dom";

describe("<App /> ", () => {
  test("Should be rendered", () => {
    render(<App />);
    expect(screen.getByText("Loading")).toBeDefined();
  });

  test("<UserDetailsList /> Sould mount", async () => {
    await waitFor(() => {
      expect(<UserDetailsList />).toBeDefined();
    });
  });
});
