import AboutCard from "./AboutCard";
import AboutDescription from "./AboutDescription";

function About() {
  return (
    <section id="about" className="px-6 lg:px-20 my-10 h-svh">
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <div className="max-w-3xl space-y-4 text-left">
          <span className="inline-flex w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-lg font-semibold uppercase tracking-[0.2em] text-red-400">
            About
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr] lg:items-start">
          <div className="h-full">
            <AboutCard />
          </div>
          <div className="h-full">
            <AboutDescription />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
