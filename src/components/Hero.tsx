import portrait from "../assets/image.jpg";
import verifiedIcon from "../assets/verifiedIcon.svg";

function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 h-[calc(100vh-80px)] flex items-center justify-center"
    >
      {/* Column#1: Information */}
      <div className="grid rounded-3xl  bg-black  shadow-[0_0_0_1px_rgba(255,255,255,0.03)] grid-cols-1 lg:grid-cols-2">
        <div className="order-last content-center lg:order-first border border-gray-800 p-4 rounded-3xl bg-linear-to-br from-gray-950 via-black to-gray-900">
          <h1 className="text-left text-2xl lg:text-4xl">
            I'm a{" "}
            <span className="typewriter text-red-600">Frontend Developer.</span>
          </h1>
          <h3 className="text-left text-2xl">
            I build fast, responsive React applications with modern UI and clean
            component architecture.
          </h3>
          <div className="flex flex-row justify-center gap-3 py-5">
            <a
              href="#projects"
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl bg-red-600 px-2 md:px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:bg-red-500 active:scale-[0.98] sm:max-w-48"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 px-2 md:px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:border-gray-500 hover:bg-gray-800 active:scale-[0.98] sm:max-w-48"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Column#2: Portrait */}
        <div className="order-first h-full bg-transparent px-5 lg:order-last">
          <div className="flex flex-col items-center justify-center gap-3 bg-transparent">
            <div className="aspect-square w-full max-w-72 overflow-hidden rounded-full md:max-w-md">
              <img
                className="h-full w-full bg-transparent object-cover opacity-50"
                src={portrait}
                alt="Portrait picture"
              />
            </div>
            <div className="flex items-center bg-transparent">
              <p>@Reynaldo_Carmenate</p>
              <img className="w-5" src={verifiedIcon} alt="Verified icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
