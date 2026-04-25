import AboutCard from "./AboutCard";
import AboutDescription from "./AboutDescription";
import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="px-6 lg:px-20 my-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <Reveal className="max-w-3xl space-y-4 text-left">
          <span className="inline-flex w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-lg font-semibold uppercase tracking-[0.2em] text-red-400">
            About
          </span>
        </Reveal>

        <Reveal
          className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr] lg:items-start"
          delay={80}
        >
          <div className="h-full">
            <AboutCard />
          </div>
          <div className="h-full">
            <AboutDescription />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
