import AboutCard from "./AboutCard";
import AboutDescription from "./AboutDescription";
import Reveal from "./Reveal";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 flex flex-col gap-4 xl:min-h-[calc(100vh-6rem)]"
    >
      <Reveal className="max-w-3xl">
        <h2 className="w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-lg font-semibold uppercase tracking-[0.2em] text-red-400">
          About
        </h2>
      </Reveal>

      <Reveal
        className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr] lg:items-start"
        delay={80}
      >
        <AboutCard />

        <AboutDescription />
      </Reveal>
    </section>
  );
}

export default About;
