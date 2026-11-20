import Image from "next/image";
import type { Project } from "../types/projectType";
import StyledLink from "./StyledLink";
import { Badge } from "./ui/badge";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:border-red-600">
      <Image
        className="aspect-10/5 rounded-t-xl border border-gray-900 object-cover"
        src={project.thumbnail}
        alt={project.name}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col gap-1 px-4 pb-2">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
          <p className="leading-7 text-gray-300">{project.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-1 py-1 text-sm">
          {project.techTags.map((tag) => (
            <Badge
              variant="outline"
              className="border-gray-700 bg-gray-900 px-3 py-2 text-gray-100 transition-colors duration-150 hover:border-red-500/50 hover:bg-gray-900 hover:text-gray-100"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex gap-4 border-t border-gray-900 pt-2">
          {project.liveDemoUrl && (
            <StyledLink
              className="flex-1 sm:max-w-48"
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </StyledLink>
          )}
          {project.githubUrl && (
            <StyledLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="flex-1 sm:max-w-48"
            >
              GitHub
            </StyledLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
