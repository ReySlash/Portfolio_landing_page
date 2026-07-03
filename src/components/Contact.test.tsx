import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import Contact from "./Contact";

describe("Contact", () => {
  it("renders contact actions including mailto link", () => {
    render(<Contact />);

    expect(
      screen.getByRole("link", { name: /connect on linkedin/i }),
    ).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/reynaldo-carmenate-arias-03b5102b5/",
    );
    expect(screen.getByRole("link", { name: /visit github/i })).toHaveAttribute(
      "href",
      "https://github.com/ReySlash",
    );
    expect(screen.getByRole("link", { name: /rcarmenate95@gmail.com/i })).toHaveAttribute(
      "href",
      "mailto:rcarmenate95@gmail.com?subject=Portfolio%20Inquiry",
    );
  });

  it("copies the email address to the clipboard", async () => {
    render(<Contact />);

    fireEvent.click(
      screen.getByRole("button", { name: /copy email to clipboard/i }),
    );

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        "rcarmenate95@gmail.com",
      );
    });
  });

  it("shows feedback when copying the email fails", async () => {
    vi.mocked(navigator.clipboard.writeText).mockRejectedValueOnce(
      new Error("Clipboard unavailable"),
    );

    render(<Contact />);

    fireEvent.click(
      screen.getByRole("button", { name: /copy email to clipboard/i }),
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", {
          name: /unable to copy email to clipboard/i,
        }),
      ).toBeInTheDocument();
    });

    expect(screen.getByText(/copy failed/i)).toBeInTheDocument();
  });
});
