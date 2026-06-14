import { render, screen } from "@testing-library/react";
import projects from "../data/projects";
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
    expect(
      screen.getByRole("img", { name: /digital clip agency portfolio/i }),
    ).toBeInTheDocument();

    const liveDemoLinks = screen.getAllByRole("link", { name: /live demo/i });
    const githubLinks = screen.getAllByRole("link", { name: /github/i });

    expect(liveDemoLinks).toHaveLength(
      projects.filter((project) => project.liveDemoUrl).length,
    );
    expect(githubLinks).toHaveLength(
      projects.filter((project) => project.githubUrl).length,
    );

    expect(liveDemoLinks[0]).toHaveAttribute(
      "href",
      "https://reyslash.github.io/job-application-tracker/",
    );
    expect(githubLinks[0]).toHaveAttribute(
      "href",
      "https://github.com/reyslash/job-application-tracker",
    );
  });
});
