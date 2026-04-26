import portrait from "../assets/image.jpg";
import verifiedIcon from "../assets/verifiedIcon.svg";

function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 bg-linear-to-br px-6 lg:px-20 my-10"
    >
      {/* Column#1: Information */}
      <div className="grid rounded-3xl border border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-950 px-10 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] md:grid-cols-1 lg:grid-cols-2">
        <div className="order-last content-center lg:order-first">
          <h1 className="text-left text-2xl lg:text-4xl">
            I'm a{" "}
            <span className="typewriter text-red-600">Frontend Developer.</span>
          </h1>
          <h3 className="text-left text-2xl">
            I build fast, responsive React applications with modern UI and
            clean component architecture.
          </h3>
          <div className="flex flex-col justify-center gap-3 py-10 sm:flex-row">
            <a
              href="#projects"
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:bg-red-500 active:scale-[0.98] sm:max-w-48"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:border-gray-500 hover:bg-gray-800 active:scale-[0.98] sm:max-w-48"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Column#2: Portrait */}
        <div className="order-first lg:order-last">
          <div className="relative">
            <img
              className="h-10/12 rounded-full"
              src={portrait}
              alt="Portrait picture"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-transparent to-black lg:bg-linear-to-l lg:from-transparent lg:to-black" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="select-none text-lg font-semibold text-gray">
              @Reynaldo_Carmenate
            </span>
            <img className="h-5 w-5" src={verifiedIcon} alt="Verified Icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
