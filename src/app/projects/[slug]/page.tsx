import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import StyledLink from "@/components/StyledLink";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-4 py-24 sm:px-6">
      <StyledLink href="/#projects" variant="secondary" className="w-fit">
        Back to Projects
      </StyledLink>

      <article className="flex flex-col gap-8">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Project details
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            {project.description}
          </p>
        </header>

        <Image
          className="aspect-10/5 w-full rounded-3xl border border-gray-800 object-cover"
          src={project.thumbnail}
          alt={project.name}
          priority
          sizes="(min-width: 1024px) 64rem, 100vw"
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
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
              {project.techTags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.liveDemoUrl && (
            <StyledLink
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
            >
              GitHub
            </StyledLink>
          )}
        </div>
      </article>
    </main>
  );
}
