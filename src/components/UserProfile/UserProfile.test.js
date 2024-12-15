import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";
import "@testing-library/jest-dom";
global.fetch = jest.fn();

describe("UserProfile Component", () => {
  test("Test Loading", async () => {
    render(<UserProfile userId={1} />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test("Test User Profile After Fetch Success", async () => {
    const mockUser = { name: "Tony Stark", email: "tony@stark.com" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });

    render(<UserProfile userId={1} />);

    await waitFor(() => {
      expect(screen.getByText("Tony Stark")).toBeInTheDocument();
      expect(screen.getByText("Email: tony@stark.com")).toBeInTheDocument();
    });
  });

  test("Test Error", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => [],
    });

    render(<UserProfile userId={1} />);

    await waitFor(() => {
      expect(
        screen.getByText("Error: Failed to fetch user data")
      ).toBeInTheDocument();
    });
  });
});
