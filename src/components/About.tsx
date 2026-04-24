import AboutCard from "./AboutCard";
import AboutDescription from "./AboutDescription";

function About() {
  return (
    <section id="about" className="px-20">
      <h2 className="text-2xl text-center mb-10">About Me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        laboriosam soluta ad dolorem corrupti autem praesentium natus
        laudantium. Consequuntur nobis beatae ipsam, doloribus labore
        repellendus delectus ab fugiat eaque consectetur.
      </p>
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          <AboutCard />
        </div>
        <div>
          <AboutDescription />
        </div>
      </div>
    </section>
  );
}

export default About;
