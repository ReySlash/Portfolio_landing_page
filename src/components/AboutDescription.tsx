import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import TechnologyBadge from "./TechnologyBadge";
import { createTechnologies } from "@/data/technologyIcons";

function AboutDescription() {
  const coreTechnologies = createTechnologies([
    "TypeScript",
    "Next.js",
    "ASP.NET Core",
    "C#",
    "PostgreSQL",
    "Tailwind CSS",
  ]);

  const architectureSkills = [
    "Clean Architecture",
    "Domain-Driven Design",
    "REST API Design",
    "Automated Testing",
  ];

  const professionalStrengths = [
    "Product Thinking",
    "Problem Solving",
    "Business Awareness",
    "Communication",
  ];

  const currentFocus = [
    "Building full-stack applications with Next.js and ASP.NET Core",
    "Designing maintainable APIs and data models with Clean Architecture and Domain-Driven Design",
    "Exploring cloud deployment and infrastructure practices with AWS",
    "Developing practical AI integrations for business workflows",
  ];

  return (
    <div className="flex flex-col gap-3 h-full">
      <Card className="gap-0 rounded-3xl border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-3 lg:p-6">
        <p className="text-left text-lg leading-8 text-gray-200">
          I am a full-stack developer focused on building practical web products
          with modern design, solid structure, and clear user flows. My
          background in data and business helps me think beyond visuals and pay
          attention to how interfaces support decisions, usability, and growth.
        </p>
      </Card>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr] h-full">
        <Card className="h-full gap-3 rounded-3xl border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-3 lg:p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-left text-2xl font-semibold ">Core Skills</h3>
            <span className="text-xs uppercase tracking-[0.18em] text-gray-500">
              Current toolkit
            </span>
          </div>
          <div className="flex h-full flex-col justify-center gap-3">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gray-500">
                Core technologies
              </p>
              <ul className="flex flex-wrap items-center gap-2 text-sm font-medium">
                {coreTechnologies.map((technology) => (
                  <li key={technology.name}>
                    <TechnologyBadge
                      technology={technology}
                      className="px-3 py-3 text-sm"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gray-500">
                Architecture &amp; practices
              </p>
              <ul className="flex flex-wrap gap-2 text-sm font-medium">
                {architectureSkills.map((skill) => (
                  <li key={skill}>
                    <Badge
                      variant="outline"
                      className="border-gray-700 bg-gray-900 px-3 py-3 text-sm text-gray-100"
                    >
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gray-500">
                Professional strengths
              </p>
              <ul className="flex flex-wrap gap-2 text-sm font-medium">
                {professionalStrengths.map((strength) => (
                  <li key={strength}>
                    <Badge
                      variant="outline"
                      className="border-gray-700 bg-gray-900 px-3 py-3 text-sm text-gray-100"
                    >
                      {strength}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <Card className="h-full gap-4 rounded-3xl border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-5 lg:p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-left text-2xl font-semibold ">Current Focus</h3>
            <span className="text-xs uppercase tracking-[0.18em] text-gray-500">
              Right now
            </span>
          </div>
          <ul className="space-y-4 text-left leading-7 text-gray-100">
            {currentFocus.map((focus) => (
              <li
                className="flex justify-start gap-1 rounded-2xl bg-white/3 px-3"
                key={focus}
              >
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                <span className="text-gray-200">{focus}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default AboutDescription;
