function AboutDescription() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Git",
    "SQL",
    "Agile Methodologies",
    "I also bring a background in Python and data analysis, which helps me think more analytically about products and problem solving.",
  ];
  return (
    <div className="flex flex-col justify-center text-center gap-5">
      <p className="text-justify">
        I’m a developer focused on building practical web applications that
        solve real problems. With a background in data and a strong interest in
        business, I aim to create products that are technically solid, useful,
        and scalable. I enjoy turning ideas into clean, functional interfaces
        and improving my skills through real-world projects.
      </p>

      <h3 className="text-xl font-semibold">Skills</h3>
      <ul className="flex flex-col justify-start text-start">
        {skills.map((skill, index) => (
          <li className="" key={index}>
            - {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutDescription;
