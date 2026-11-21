import type { Project } from "../types/projectType";
import KinetiQThumbnail from "./thumbnails/KinetiQThumbnail.webp";
import JatThumbnail from "./thumbnails/JATPicture.jpg";
import DigitalClipAgencyThumbnail from "./thumbnails/DCAPicture.webp";
import TasteBoardThumbnail from "./thumbnails/TasteBoardThumbnail.webp";
import KinetiQExercisesDesktop from "./thumbnails/KinetIQ/Exercises-desk.webp";
import KinetiQExercisesMobile from "./thumbnails/KinetIQ/Exercises-mob.webp";
import KinetiQExerciseDetailsMobile from "./thumbnails/KinetIQ/Exercise-details-mob-1.webp";
import KinetiQAnalyticsMobile from "./thumbnails/KinetIQ/Analytics-mob-page-1.webp";
import KinetiQAnalyticsDetailsMobile from "./thumbnails/KinetIQ/Analytics-mob-page-2.webp";
import JobTrackerDashboard from "./thumbnails/Job-applications-tracker/Dashboard-dark-1.webp";
import JobTrackerAnalytics from "./thumbnails/Job-applications-tracker/Dashboard-dark-2.webp";
import JobTrackerApplications from "./thumbnails/Job-applications-tracker/Applications-dark.webp";
import JobTrackerApplicationDetails from "./thumbnails/Job-applications-tracker/Application-details-light.webp";
import DigitalClipContent from "./thumbnails/Digital-clip-agency-portfolio/Content-examples.webp";
import DigitalClipAdmin from "./thumbnails/Digital-clip-agency-portfolio/Admin-panel-CMS.webp";
import TasteBoardRecipes from "./thumbnails/Taste-board/Recipes-page-desk.webp";
import TasteBoardRecipeDetails from "./thumbnails/Taste-board/Recipe-details-mob.webp";
import { createTechnologies } from "./technologyIcons";

const projects: Project[] = [
  {
    id: 4,
    slug: "kinetiq",
    name: "KinetiQ",
    shortDescription:
      "Fitness platform for building routines, tracking workouts, and understanding progress.",
    description:
      "A full-stack fitness platform for modeling exercises, building reusable training routines and programs, tracking workout performance, and understanding progress through explainable analytics. The platform uses a Next.js frontend on Vercel, a Dockerized NestJS API on an Oracle Cloud VPS, and Neon PostgreSQL.",
    problem:
      "Fitness planning is often fragmented across notes, spreadsheets, and generic trackers that do not explain why performance changes over time.",
    solution:
      "KinetiQ centralizes exercise modeling, reusable routines, workout tracking, and explainable progress analytics in one full-stack platform.",
    highlights: [
      "Exercise and routine modeling",
      "Workout performance tracking",
      "Explainable progress analytics",
    ],
    technologies: createTechnologies([
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "NestJS",
      "Better Auth",
      "Prisma",
      "PostgreSQL",
      "Vitest",
      "React Testing Library",
      "Playwright",
      "Docker",
      "Nginx",
      "Oracle Cloud",
      "Neon",
      "Vercel",
    ]),
    screenshots: [
      {
        src: KinetiQExercisesDesktop,
        alt: "KinetiQ exercises dashboard on desktop",
      },
      {
        src: KinetiQExercisesMobile,
        alt: "KinetiQ exercises dashboard on mobile",
      },
      {
        src: KinetiQExerciseDetailsMobile,
        alt: "KinetiQ exercise details screen on mobile",
      },
      {
        src: KinetiQAnalyticsMobile,
        alt: "KinetiQ analytics overview on mobile",
      },
      {
        src: KinetiQAnalyticsDetailsMobile,
        alt: "KinetiQ analytics details on mobile",
      },
    ],
    liveDemoUrl: "https://kinetiq.reyslash.com/",
    githubUrl: "https://github.com/ReySlash/KinetiQ",
    thumbnail: KinetiQThumbnail,
  },
  {
    id: 1,
    slug: "job-applications-tracker",
    name: "Job Applications Tracker",
    shortDescription:
      "Full-stack job application manager with secure workspaces, advanced filtering, and analytics.",
    description:
      "A production-ready full-stack application for managing and analyzing job applications. Features secure JWT authentication, advanced filtering, sorting, search, form validation, private demo workspaces, and a lightweight analytics dashboard. The frontend is deployed on Vercel, while the backend runs on an Oracle Cloud VPS using Docker, Nginx, Let's Encrypt, and Neon PostgreSQL.",
    problem:
      "Job seekers need a reliable way to organize applications, follow-ups, and outcomes without losing context across multiple tools and spreadsheets.",
    solution:
      "The tracker provides secure workspaces, structured application data, advanced discovery tools, and lightweight analytics to make the search process easier to manage.",
    highlights: [
      "Private demo workspaces",
      "Advanced search, filtering, and sorting",
      "Application analytics dashboard",
    ],
    technologies: createTechnologies([
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
    ]),
    screenshots: [
      {
        src: JobTrackerDashboard,
        alt: "Job Applications Tracker dashboard overview",
      },
      {
        src: JobTrackerAnalytics,
        alt: "Job Applications Tracker dashboard analytics",
      },
      {
        src: JobTrackerApplications,
        alt: "Job Applications Tracker applications list",
      },
      {
        src: JobTrackerApplicationDetails,
        alt: "Job Applications Tracker application details",
      },
    ],
    liveDemoUrl: "https://job-application-tracker-swart-sigma.vercel.app/",
    githubUrl: "https://github.com/ReySlash/job-application-tracker",
    thumbnail: JatThumbnail,
  },
  {
    id: 2,
    slug: "digital-clip-agency",
    name: "Digital Clip Agency Portfolio",
    shortDescription:
      "Full-stack portfolio platform for a video editing agency with gallery and admin content management.",
    description:
      "A modern full-stack portfolio platform for a Professional Video Editing Agency built with Next.js and TypeScript. Features a dynamic project gallery, admin content management, responsive UI, and scalable architecture focused on performance, clean presentation, and easy client showcase management.",
    problem:
      "A video editing agency needs a polished, maintainable way to showcase work and update its portfolio without relying on developer changes for every content update.",
    solution:
      "The platform combines a dynamic project gallery with content management and responsive presentation tools so the agency can keep its showcase current and client-ready.",
    highlights: [
      "Dynamic project gallery",
      "Admin content management",
      "Responsive client showcase",
    ],
    technologies: createTechnologies([
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
    ]),
    screenshots: [
      {
        src: DigitalClipContent,
        alt: "Digital Clip Agency content examples",
      },
      {
        src: DigitalClipAdmin,
        alt: "Digital Clip Agency content management panel",
      },
    ],
    liveDemoUrl: "https://digital-clip-agency-landing.vercel.app/",
    githubUrl: "https://github.com/ReySlash/Digital_Clip_Agency_landing",
    thumbnail: DigitalClipAgencyThumbnail,
  },
  {
    id: 3,
    slug: "tasteboard",
    name: "TasteBoard",
    shortDescription:
      "Recipe discovery app for meals and cocktails with search, filters, and local favorites.",
    description:
      "A modern recipe discovery app for browsing meals and cocktails, viewing detailed recipe pages, and saving favorites locally in the browser. Built with Next.js App Router and TypeScript, it includes category filtering, search, responsive mobile navigation, a slide-out filter drawer, dynamic SEO metadata, custom not-found handling, and automated tests for key UI and helper behavior.",
    problem:
      "Recipe discovery can become difficult when users need to browse different meal types, search quickly, and keep favorite recipes accessible across sessions.",
    solution:
      "TasteBoard brings recipes and cocktails together with search, category filters, responsive navigation, detailed pages, and browser-based favorites.",
    highlights: [
      "Recipe and cocktail discovery",
      "Local favorites",
      "Dynamic SEO and not-found handling",
    ],
    technologies: createTechnologies([
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
    ]),
    screenshots: [
      {
        src: TasteBoardRecipes,
        alt: "TasteBoard recipes page on desktop",
      },
      {
        src: TasteBoardRecipeDetails,
        alt: "TasteBoard recipe details page on mobile",
      },
    ],
    liveDemoUrl: "https://taste-board-zeta.vercel.app/",
    githubUrl: "https://github.com/ReySlash/taste-board",
    thumbnail: TasteBoardThumbnail,
  },

  // Add more projects here
];

export default projects;
