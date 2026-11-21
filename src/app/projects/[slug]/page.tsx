import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import StyledLink from "@/components/StyledLink";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProjectScreenshotCarousel from "@/components/ProjectScreenshotCarousel";
import TechnologyBadge from "@/components/TechnologyBadge";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found | ReySlash Portfolio" };
  }

  return {
    title: `${project.name} | ReySlash Portfolio`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | ReySlash Portfolio`,
      description: project.description,
      images: [project.thumbnail.src],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto flex min-h-screen max-w-5xl flex-col gap-4 px-4 py-12 sm:px-6">
      <Link
        href="/#projects"
        className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-400 transition-colors hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <span
          aria-hidden="true"
          className="transition-transform duration-150 group-hover:-translate-x-1"
        >
          ←
        </span>
        Back to Projects
      </Link>

      <article className="flex flex-col gap-3">
        <header className="w-full space-y-3">
          <p className="w-fit rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-400">
            Project details
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            {project.shortDescription}
          </p>
        </header>

        <ProjectScreenshotCarousel
          projectName={project.name}
          screenshots={[
            { src: project.thumbnail, alt: `${project.name} project preview` },
            ...project.screenshots,
          ]}
        />

        <div className="grid gap-3 lg:grid-cols-[1fr_1.2fr]">
          <Card className="flex flex-col gap-2 rounded-3xl border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900">
            <CardHeader>
              <h2 className="text-2xl font-semibold">The problem</h2>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-gray-300">{project.problem}</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900">
            <CardHeader>
              <h2 className="text-2xl font-semibold">The solution</h2>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-gray-300">{project.solution}</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Key capabilities</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-200">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-7">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Technology stack</h2>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <TechnologyBadge
                  key={technology.name}
                  technology={technology}
                />
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex w-full justify-end gap-3">
          {project.liveDemoUrl && (
            <StyledLink
              className="min-w-0 flex-1 sm:w-48 sm:flex-none"
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </StyledLink>
          )}
          {project.githubUrl && (
            <StyledLink
              className="min-w-0 flex-1 sm:w-48 sm:flex-none"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              GitHub
            </StyledLink>
          )}
        </div>
      </article>
    </main>
  );
}
