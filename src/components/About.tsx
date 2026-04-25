import AboutCard from "./AboutCard";
import AboutDescription from "./AboutDescription";

function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-10 lg:px-20">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col text-center">
        <h2 className="mb-10 text-3xl font-bold">About Me</h2>
        <div className="grid flex-1 gap-5 lg:grid-cols-2">
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
