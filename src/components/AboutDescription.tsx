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
    "Learning Next.js and fullstack fundamentals",
  ];

  const extraValue = [
    "Data background",
    "Business mindset",
    "Practical problem solving",
    "Product-oriented thinking",
  ];
  return (
    <div className="flex flex-col justify-center text-center gap-5">
      <p className="text-justify bg-gray-950 border-2 border-gray-800 p-2 rounded px-2">
        I’m a developer focused on building practical web applications that
        solve real problems. With a background in data and a strong interest in
        business, I aim to create products that are technically solid, useful,
        and scalable. I enjoy turning ideas into clean, functional interfaces
        and improving my skills through real-world projects.
      </p>

      <div className="grid grid-cols-2 gap-4 py-2">
        <div className="col-span-1 bg-gray-950 border-2 border-gray-800 p-2 rounded">
          <h3 className="text-xl col-span-1 text-left font-semibold mb-2 px-2">
            Core Skills
          </h3>
          <ul className="col-span-1 text-left">
            {coreSkills.map((skill, index) => (
              <li className="" key={index}>
                - {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 bg-gray-950 border-2 border-gray-800 p-2 rounded">
          <h3 className="text-xl text-left font-semibold bg-gray-950  px-2 mb-2">
            Current Focus
          </h3>
          <ul className="col-span-1 text-left bg-gray-950  ">
            {currentFocus.map((focus, index) => (
              <li className="" key={index}>
                - {focus}
              </li>
            ))}
          </ul>

          <h3 className="text-xl text-left font-semibold my-2 bg-gray-950  px-2">
            Extra Value
          </h3>
          <ul className="col-span-1 text-left bg-gray-950  ">
            {extraValue.map((value, index) => (
              <li className="" key={index}>
                - {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutDescription;
