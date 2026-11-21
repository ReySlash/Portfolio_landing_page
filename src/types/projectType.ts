import type { StaticImageData } from "next/image";

export type TechnologyIconKey =
  | "generic"
  | "nextjs"
  | "typescript"
  | "react"
  | "tailwindcss"
  | "shadcn"
  | "react-hook-form"
  | "zod"
  | "nestjs"
  | "better-auth"
  | "prisma"
  | "postgresql"
  | "vitest"
  | "testing-library"
  | "playwright"
  | "docker"
  | "nginx"
  | "neon"
  | "vercel"
  | "vite"
  | "tanstack"
  | "express"
  | "cloudflare"
  | "letsencrypt"
  | "authjs"
  | "react-icons"
  | "next-themes"
  | "jsdom";

export type ProjectTechnology = {
  name: string;
  iconKey: TechnologyIconKey;
};

export type ProjectScreenshot = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

export type Project = {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  highlights: string[];
  technologies: ProjectTechnology[];
  screenshots: ProjectScreenshot[];
  liveDemoUrl?: string;
  githubUrl?: string;
  thumbnail: StaticImageData;
};
