import portrait from "../assets/image.jpg";
import verifiedIcon from "../assets/verifiedIcon.svg";
import NavBar from "./NavBar";

function Hero() {
  return (
    <>
      <section id="home">
        <NavBar />
        {/* Column#1: Information */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 mb-10 px-20">
          <div className="order-last lg:order-first content-center">
            <h1 className="text-left text-2xl lg:text-4xl">
              I'm a{" "}
              <span className="typewriter text-red-500">
                Frontend Developer.
              </span>
            </h1>
            <h3 className="text-2xl text-left">
              I build fast, responsive React applications with modern UI and
              clean component architecture.
            </h3>
            <div className="flex flex-row justify-center gap-10 mt-15">
              <a
                href="#projects"
                className="flex justify-center items-center bg-red-600 hover:bg-red-500  active:bg-red-600 hover:cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100 p-4 rounded-full"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="flex justify-center items-center bg-gray-700 p-2 rounded-full hover:cursor-pointer hover:bg-gray-600 hover:scale-105 active:scale-95 transition-all duration-100 active:bg-gray-700"
              >
                Contact me
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
              <span className="text-lg font-semibold text-gray select-none">
                @Reynaldo_Carmenate
              </span>
              <img className="h-5 w-5" src={verifiedIcon} alt="Verified Icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
