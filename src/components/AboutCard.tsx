import portrait from "../assets/cardPortrait.jpg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

function AboutCard() {
  const highlights = [
    { label: "Primary Stack", value: "React + TypeScript" },
    { label: "Focus", value: "Responsive UI" },
    { label: "Mindset", value: "Product + data aware" },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] lg:p-8">
      <div className="mb-3 flex items-start justify-between gap-1">
        <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Open to opportunities
        </span>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="relative mb-1">
          <div className="absolute inset-0 rounded-full bg-red-600/20 blur-2xl" />
          <img
            className="relative mx-auto h-44 w-44 rounded-full border-4 border-red-600/80 object-cover shadow-[0_20px_60px_rgba(220,38,38,0.25)]"
            src={portrait}
            alt="Portrait"
          />
        </div>

        <h3 className="text-2xl font-bold text-white">
          Reynaldo Carmenate Arias
        </h3>
        <p className="mt-1 text-lg font-medium text-red-500">
          Frontend Developer
        </p>
      </div>

      <div className="my-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {highlights.map((item) => (
          <div
            className="rounded-2xl border border-gray-800 bg-white/3 px-4 py-4 text-left"
            key={item.label}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="#projects"
          className="flex flex-1 items-center justify-center rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:bg-red-500 active:scale-[0.98]"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="flex flex-1 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:border-gray-500 hover:bg-gray-800 active:scale-[0.98]"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 border-t border-gray-800 pt-6">
        <a
          className="rounded-xl border border-gray-800 bg-gray-900 p-3 transition-all duration-150 hover:scale-105 hover:cursor-pointer hover:border-gray-600 hover:bg-gray-800 active:scale-95"
          href="https://github.com/ReySlash"
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub profile"
        >
          <img
            className="w-7 brightness-0 invert "
            src={githubIcon}
            alt="GitHub"
          />
        </a>
        <a
          className="rounded-xl border border-gray-800 bg-gray-900 transition-all p-1 duration-150 hover:scale-105 hover:cursor-pointer hover:border-gray-600 hover:bg-gray-800 active:scale-95 "
          href="https://www.linkedin.com/in/reynaldo-carmenate-arias-03b5102b5/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open LinkedIn profile"
        >
          <img
            className="w-11 brightness-0 invert "
            src={linkedinIcon}
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
}

export default AboutCard;
