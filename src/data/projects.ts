import type { Project } from "../types/projectType";
import JatThumbnail from "./thumbnails/JATPicture.jpg";
import DigitalClipAgencyThumbnail from "./thumbnails/DCAPicture.webp";

const projects: Project[] = [
  {
    id: 1,
    name: "Job Applications Tracker",
    description:
      "A full-stack job application tracker to manage, analyze, and optimize your job search process. Includes filtering, sorting, searching, and a lightweight analytics dashboard to visualize your job search progress.",
    techTags: [
      "TypeScript",
      "React",
      "Vite",
      "Tan-Stack Query",
      "React Router",
      "React-hook-form",
      "Zod",
      "Tailwind CSS",
      "Github Pages",
      "Supabase",
    ],
    liveDemoUrl: "https://reyslash.github.io/job-application-tracker/",
    githubUrl: "https://github.com/reyslash/job-application-tracker",
    thumbnail: JatThumbnail,
  },
  {
    id: 2,
    name: "Digital Clip Agency Portfolio",
    description:
      "A modern full-stack portfolio platform for a Professional Video Editing Agency built with Next.js and TypeScript. Features a dynamic project gallery, admin content management, responsive UI, and scalable architecture focused on performance, clean presentation, and easy client showcase management.",
    techTags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Auth.js",
      "Vitest",
      "Testing Library",
      "Vercel",
      "Neon",
    ],
    liveDemoUrl: "https://digital-clip-agency-landing.vercel.app/",
    githubUrl: "https://github.com/ReySlash/Digital_Clip_Agency_landing",
    thumbnail: DigitalClipAgencyThumbnail,
  },

  // Add more projects here
];

export default projects;
