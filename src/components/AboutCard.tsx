import Image from "next/image";
import portrait from "../assets/AboutPortrait.webp";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import StyledLink from "./StyledLink";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import { Card } from "./ui/card";

function AboutCard() {
  const highlights = [
    { label: "Core Stack", value: "Next.js + ASP.NET Core + PostgreSQL" },
    { label: "Focus", value: "Scalable Web Applications" },
    { label: "Mindset", value: "Business + product perspective" },
  ];

  return (
    <Card className="h-full justify-between gap-3 overflow-hidden rounded-3xl border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
      <div className="mb-3 flex items-start justify-between">
        <Badge className="border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 hover:bg-emerald-500/10">
          Open to opportunities
        </Badge>
      </div>

      <div className="flex flex-col items-center text-center gap-1">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-red-600/20 blur-2xl" />
          <Image
            className="relative mx-auto h-44 w-44  rounded-full border-4 border-red-600/80 object-cover shadow-[0_20px_60px_rgba(220,38,38,0.25)]"
            src={portrait}
            alt="Portrait"
            sizes="11rem"
          />
        </div>

        <h3 className="text-2xl font-bold">Reynaldo Carmenate Arias</h3>
        <p className="text-lg font-medium text-red-500">Full-Stack Developer</p>
      </div>

      <div className="gap-1 grid sm:gap-3 sm:grid-cols-3 lg:gap-1 lg:grid-cols-1 xl:gap-3 xl:grid-cols-3">
        {highlights.map((item) => (
          <div
            className="rounded-2xl border border-gray-800 bg-white/3 px-4 py-2 text-center md:text-left"
            key={item.label}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
              {item.label}
            </p>
            <p className="text-sm font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-3">
        <StyledLink
          href="#projects"
          className="flex-1"
        >
          View Projects
        </StyledLink>

        <StyledLink
          href="#contact"
          variant="secondary"
          className="flex-1"
        >
          Contact Me
        </StyledLink>
      </div>

      <div className="h-20 flex items-center justify-center gap-4 border-t border-gray-800">
        <Tooltip>
          <TooltipTrigger asChild>
            <StyledLink
              href="https://github.com/ReySlash"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="h-12 w-12 p-2"
              aria-label="Open GitHub profile"
            >
              <Image
                className="h-7 w-7 brightness-0 invert"
                src={githubIcon}
                alt="GitHub"
                width={28}
                height={28}
                unoptimized
              />
            </StyledLink>
          </TooltipTrigger>
          <TooltipContent>GitHub</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <StyledLink
              href="https://www.linkedin.com/in/reynaldo-carmenate-arias-03b5102b5/"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="h-12 w-12 p-2"
              aria-label="Open LinkedIn profile"
            >
              <Image
                className="h-7 w-7 brightness-0 invert"
                src={linkedinIcon}
                alt="LinkedIn"
                width={28}
                height={28}
                unoptimized
              />
            </StyledLink>
          </TooltipTrigger>
          <TooltipContent>LinkedIn</TooltipContent>
        </Tooltip>
      </div>
    </Card>
  );
}

export default AboutCard;
