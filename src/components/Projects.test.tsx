import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects", () => {
  it("renders the project section intro and project actions", () => {
    render(<Projects />);

    expect(screen.getByText(/^Projects$/)).toBeInTheDocument();
    expect(
      screen.getByText(/practical interfaces, responsive layouts/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /job applications tracker/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /live demo/i })).toHaveAttribute(
      "href",
      "https://reyslash.github.io/job-application-tracker/",
    );
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/reyslash/job-application-tracker",
    );
  });
});
