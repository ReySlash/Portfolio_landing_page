import projects from "./projects";

describe("project detail data", () => {
  it("provides detail content, screenshot fallbacks, and technology icons", () => {
    expect(projects).toHaveLength(4);

    projects.forEach((project) => {
      expect(project.problem).toBeTruthy();
      expect(project.solution).toBeTruthy();
      expect(project.screenshots.length).toBeGreaterThan(0);
      expect(project.screenshots.every((screenshot) => screenshot.alt)).toBe(
        true,
      );
      expect(
        project.technologies.every(
          (technology) => technology.name && technology.iconKey,
        ),
      ).toBe(true);
    });
  });

  it("keeps the approved stable project slugs", () => {
    expect(projects.map((project) => project.slug)).toEqual([
      "kinetiq",
      "job-applications-tracker",
      "digital-clip-agency",
      "tasteboard",
    ]);
  });
});
