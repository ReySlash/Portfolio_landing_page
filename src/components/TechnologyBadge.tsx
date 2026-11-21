import { technologyIcons } from "@/data/technologyIcons";
import type { ProjectTechnology } from "@/types/projectType";
import { Badge } from "./ui/badge";

type TechnologyBadgeProps = {
  technology: ProjectTechnology;
};

function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  const icon = technologyIcons[technology.iconKey];

  return (
    <Badge
      variant="outline"
      className="gap-2 border-gray-700 bg-gray-900 px-3 py-1.5 text-gray-100"
    >
      <svg
        aria-hidden="true"
        className="size-4 shrink-0 fill-current"
        viewBox="0 0 24 24"
      >
        <path d={icon.path} />
      </svg>
      <span>{technology.name}</span>
    </Badge>
  );
}

export default TechnologyBadge;
