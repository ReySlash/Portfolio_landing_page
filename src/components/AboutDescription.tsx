function AboutDescription() {
  const coreSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Git",
    "SQL",
    "Python",
    "Agile Methodologies",
  ];

  const currentFocus = [
    "Building responsive React apps",
    "Improving component architecture",
    "Learning Next.js and fullstack basics",
    "Bringing a data-aware, product-minded perspective",
  ];

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="rounded-3xl border border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-3 lg:p-6">
        <p className="text-left text-lg leading-8 text-gray-200">
          I am a frontend developer focused on building practical web products
          with modern design, solid structure, and clear user flows. My
          background in data and business helps me think beyond visuals and pay
          attention to how interfaces support decisions, usability, and growth.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr] h-full">
        <div className="flex flex-col h-full rounded-3xl border border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-3 lg:p-6 gap-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-left text-2xl font-semibold text-white">
              Core Skills
            </h3>
            <span className="text-xs uppercase tracking-[0.18em] text-gray-500">
              Current toolkit
            </span>
          </div>
          <div className="flex flex-col h-full justify-center">
            <ul className="flex flex-wrap gap-3 items-center text-sm font-medium">
              {coreSkills.map((skill) => (
                <li
                  className="rounded-full border py-3 border-gray-700 bg-gray-900 px-3 text-gray-100 transition-colors duration-150 hover:border-red-500/50 hover:text-white"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-full rounded-3xl border border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-5 lg:p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-left text-2xl font-semibold text-white">
              Current Focus
            </h3>
            <span className="text-xs uppercase tracking-[0.18em] text-gray-500">
              Right now
            </span>
          </div>
          <ul className="space-y-4 text-left leading-7 text-gray-100">
            {currentFocus.map((focus) => (
              <li className="flex gap-3 rounded-2xl bg-white/3 p-3" key={focus}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                <span className="text-gray-200">{focus}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutDescription;
