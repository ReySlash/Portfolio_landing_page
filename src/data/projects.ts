import type { Project } from "../types/projectType";
import JatThumbnail from "./thumbnails/JATPicture.jpg";
import DigitalClipAgencyThumbnail from "./thumbnails/DCAPicture.webp";
import TasteBoardThumbnail from "./thumbnails/TasteBoardThumbnail.webp";

const projects: Project[] = [
  {
    id: 1,
    name: "Job Applications Tracker",
    description:
      "A production-ready full-stack application for managing and analyzing job applications. Features secure JWT authentication, advanced filtering, sorting, search, form validation, private demo workspaces, and a lightweight analytics dashboard. The frontend is deployed on Vercel, while the backend runs on an Oracle Cloud VPS using Docker, Nginx, Let's Encrypt, and Neon PostgreSQL.",
    techTags: [
      "TypeScript",
      "React",
      "Vite",
      "TanStack Query",
      "React Router",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Docker",
      "Nginx",
      "Oracle Cloud",
      "Cloudflare",
      "Let's Encrypt",
      "Vercel",
    ],
    liveDemoUrl: "https://job-application-tracker-swart-sigma.vercel.app/",
    githubUrl: "https://github.com/ReySlash/job-application-tracker",
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
  {
    id: 3,
    name: "TasteBoard",
    description:
      "A modern recipe discovery app for browsing meals and cocktails, viewing detailed recipe pages, and saving favorites locally in the browser. Built with Next.js App Router and TypeScript, it includes category filtering, search, responsive mobile navigation, a slide-out filter drawer, dynamic SEO metadata, custom not-found handling, and automated tests for key UI and helper behavior.",
    techTags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "next-themes",
      "React Icons",
      "Vitest",
      "Testing Library",
      "jsdom",
      "Vercel",
    ],
    liveDemoUrl: "https://taste-board-zeta.vercel.app/",
    githubUrl: "https://github.com/ReySlash/taste-board",
    thumbnail: TasteBoardThumbnail,
  },

  // Add more projects here
];

export default projects;
