import portrait from "../assets/image.jpg";
import verifiedIcon from "../assets/verifiedIcon.svg";

function Hero() {
  return (
    <section
      id="home"
      className="mt-0 md:scroll-mt-24 px-2 lg:px-6 max-h-screen lg:my-10"
    >
      {/* Column#1: Information */}
      <div className="grid rounded-3xl  bg-black md:px-10 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] grid-cols-1 md:grid-cols-2">
        <div className="order-last content-center md:order-first border border-gray-800 p-4 rounded-3xl bg-linear-to-br from-gray-950 via-black to-gray-900">
          <h1 className="text-left text-2xl lg:text-4xl">
            I'm a{" "}
            <span className="typewriter text-red-600">Frontend Developer.</span>
          </h1>
          <h3 className="text-left text-2xl">
            I build fast, responsive React applications with modern UI and clean
            component architecture.
          </h3>
          <div className="flex flex-col justify-center gap-3 py-10 sm:flex-row">
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
        <div className="order-first md:order-last p-5 h-full  bg-transparent">
          <div className="flex flex-col justify-center items-center relative overflow-hidden bg-transparent">
            <img
              className=" md:h-10/12 w-full md:w-auto rounded-full opacity-50 bg-transparent"
              src={portrait}
              alt="Portrait picture"
            />
            <div className="flex justify-flex items-center bg-transparent">
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
