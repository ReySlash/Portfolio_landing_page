import type { StaticImageData } from "next/image";

export type Project = {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  techTags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  thumbnail: StaticImageData;
};
