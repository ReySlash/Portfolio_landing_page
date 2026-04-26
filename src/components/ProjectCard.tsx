import type { Project } from "../types/projectType";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="flex flex-col gap-2 bg-linear-to-br from-gray-950 via-black to-gray-900 border border-gray-800 hover:border-red-600 rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
      <img
        className="border border-gray-900 rounded-t-xl"
        src={project.thumbnail}
        alt={project.name}
      />
      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-xl font-semibold tracking-tight text-red-600">
          {project.name}
        </h3>
        <p className="text-gray-300 leading-7"> {project.description}</p>

        <div className="flex flex-wrap gap-3 py-4 items-center text-sm">
          {project.techTags.map((tag) => (
            <span
              className="rounded-full border py-3 border-gray-700 bg-gray-900 px-3 text-gray-100 transition-colors duration-150 hover:border-red-500/50 hover:text-white"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 py-4 border-t border-gray-900">
          {project.liveDemoUrl && (
            <a
              className="max-w-50 flex flex-1 items-center justify-center rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:bg-red-500 active:scale-[0.98]"
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-50 flex flex-1 items-center justify-center rounded-xl bg-gray-800 px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:bg-gray-700 active:scale-[0.98]"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
