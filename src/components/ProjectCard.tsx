import Image from "next/image";
import type { Project } from "../types/projectType";
import StyledLink from "./StyledLink";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <Card className="flex flex-col py-1 gap-1 overflow-hidden rounded-2xl border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
      <div className="group aspect-[2.4/1] overflow-hidden border-b border-gray-900">
        <Image
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          src={project.thumbnail}
          alt={project.name}
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <CardHeader className="gap-0 ">
        <h3 className="text-lg font-bold tracking-tight">{project.name}</h3>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-1">
        <p className="text-md leading-6 text-gray-300">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap items-center gap-1 ">
          {project.technologies.slice(0, 5).map((technology) => (
            <Badge
              variant="outline"
              className="border-gray-700 bg-gray-900 px-2 py-2 text-sm text-gray-100"
              key={technology.name}
            >
              {technology.name}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="secondary" className="px-2 py-2">
              +{project.technologies.length - 5} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="mt-auto gap-2 border-t border-gray-900">
        {project.liveDemoUrl && (
          <StyledLink
            className="min-h-10! min-w-0 flex-1 rounded-lg! px-3! py-2! text-sm sm:max-w-48"
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </StyledLink>
        )}
        <StyledLink
          className="min-h-10! min-w-0 flex-1 rounded-lg! px-3! py-2! text-sm sm:max-w-48"
          href={`/projects/${project.slug}`}
          variant="secondary"
        >
          Details
        </StyledLink>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
