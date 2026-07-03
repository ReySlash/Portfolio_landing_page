import type { StaticImageData } from "next/image";

export type Project = {
  id: number;
  name: string;
  description: string;
  techTags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  thumbnail: StaticImageData;
};
