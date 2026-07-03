import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 w-full flex flex-col gap-6"
    >
      <Reveal className="w-full space-y-2 text-left">
        <h2
          id="projects-heading"
          className="w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-lg font-semibold uppercase tracking-[0.2em] text-red-400"
        >
          Projects
        </h2>
        <p className="text-base leading-8 text-gray-300 lg:text-lg">
          A selection of projects focused on practical interfaces, responsive
          layouts, and clean frontend architecture.
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
