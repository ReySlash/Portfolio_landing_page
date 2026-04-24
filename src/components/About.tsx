import AboutCard from "./AboutCard";
import AboutDescription from "./AboutDescription";

function About() {
  return (
    <section id="about">
      <div className="flex flex-col justify-center text-center mb-10 px-20 h-screen border">
        <h2 className="text-3xl font-bold mb-10 px-20">About Me</h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="">
            <AboutCard />
          </div>
          <div>
            <AboutDescription />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
