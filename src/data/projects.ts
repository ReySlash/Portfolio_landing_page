import type { Project } from "../types/projectType";
import JatThumbnail from "./thumbnails/JATPicture.jpg";

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
    ],
    liveDemoUrl: "https://reyslash.github.io/job-application-tracker/",
    githubUrl: "https://github.com/reyslash/job-application-tracker",
    thumbnail: JatThumbnail,
  },

  // Add more projects here
];

export default projects;
