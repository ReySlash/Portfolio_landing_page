import { technologyIcons } from "@/data/technologyIcons";
import type { ProjectTechnology } from "@/types/projectType";
import { cn } from "cn";
import { Badge } from "./ui/badge";

type TechnologyBadgeProps = {
  technology: ProjectTechnology;
  className?: string;
};

function TechnologyBadge({ technology, className }: TechnologyBadgeProps) {
  const icon = technologyIcons[technology.iconKey];

  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-2 border-gray-700 bg-gray-900 px-3 py-1.5 text-gray-100",
        className,
      )}
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
