import Image from "next/image";
import portrait from "../assets/AboutPortrait.webp";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

function AboutCard() {
  const highlights = [
    { label: "Primary Stack", value: "Next.js + NestJS + PostgreSQL" },
    { label: "Focus", value: "Scalable Web Applications" },
    { label: "Mindset", value: "Business + product perspective" },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] h-full flex flex-col justify-between gap-3">
      <div className="mb-3 flex items-start justify-between">
        <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Open to opportunities
        </span>
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
        <a
          href="#projects"
          className="flex flex-1 items-center justify-center text-center rounded-xl bg-red-600 px-5 py-3 font-semibold transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:bg-red-500 active:scale-[0.98]"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="flex flex-1 items-center justify-center text-center rounded-xl border border-gray-700 bg-gray-900 px-5 py-3 font-semibold transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:border-gray-500 hover:bg-gray-800 active:scale-[0.98]"
        >
          Contact Me
        </a>
      </div>

      <div className="h-20 flex items-center justify-center gap-4 border-t border-gray-800">
        <a
          className="rounded-xl border border-gray-800 bg-gray-900 p-3 transition-all duration-150 hover:scale-105 hover:cursor-pointer hover:border-gray-600 hover:bg-gray-800 active:scale-95"
          href="https://github.com/ReySlash"
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub profile"
        >
          <Image
            className="w-7 brightness-0 invert "
            src={githubIcon}
            alt="GitHub"
            width={28}
            height={28}
            unoptimized
          />
        </a>
        <a
          className="rounded-xl border border-gray-800 bg-gray-900 transition-all p-1 duration-150 hover:scale-105 hover:cursor-pointer hover:border-gray-600 hover:bg-gray-800 active:scale-95 "
          href="https://www.linkedin.com/in/reynaldo-carmenate-arias-03b5102b5/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open LinkedIn profile"
        >
          <Image
            className="w-11 brightness-0 invert "
            src={linkedinIcon}
            alt="LinkedIn"
            width={44}
            height={44}
            unoptimized
          />
        </a>
      </div>
    </div>
  );
}

export default AboutCard;
