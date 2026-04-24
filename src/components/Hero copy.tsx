import type { ReactNode } from "react";
import portrait from "../assets/portrait.jpg";
import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin-svgrepo-com.svg";
import verifiedIcon from "../assets/verifiedIcon.svg";

type Props = {
  children: ReactNode;
};

function Hero(props: Props) {
  const { children } = props;
  return (
    <>
      <section
        id="hero"
        className="min-h-screen overflow-hidden px-4 pb-8 sm:px-6 lg:h-screen lg:px-10 border border-amber-50"
      >
        {children}
        <div className="mx-auto grid max-w-6xl gap-8 rounded-4xl bg-black/40 p-4 backdrop-blur-sm sm:p-6 lg:h-[calc(100vh-7rem)] lg:grid-cols-2 lg:items-center lg:gap-0 lg:rounded-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none border border-amber-50">
          <div className="order-2 flex flex-col justify-center items-center text-center lg:order-1 lg:items-end lg:text-left">
            <div className="max-w-xl flex flex-col ">
              <h1 className="mt-3 text-3xl sm:text-4xl text-left">
                I'm a{" "}
                <span className="typewriter text-red-500 underline underline-offset-1">
                  Frontend Developer.
                </span>
              </h1>
              <h3 className="text-2xl">
                I build fast and responsive React web applications, focusing in
                modern UI, and clean components architecture.
              </h3>

              <div className="flex flex-row justify-center gap-10 mt-15">
                <button className="bg-red-600 hover:bg-red-500  active:bg-red-600 hover:scale-105 active:scale-95 transition-all duration-100 p-4 rounded-full">
                  View Projects
                </button>
                <button className="bg-gray-700 p-2 rounded-full hover:cursor-pointer hover:bg-gray-600 hover:scale-105 active:scale-95 transition-all duration-100 active:bg-gray-700">
                  Contact me
                </button>
              </div>
              <div className="flex flex-row gap-4 justify-end p-3 lg:justify-end">
                <button className="bg-gray-700 p-2 rounded-full hover:cursor-pointer hover:bg-gray-500 transition-colors duration-300 active:bg-gray-700">
                  <img className="w-10" src={githubLogo} alt="Github Logo" />
                </button>
                <button className="bg-gray-700 p-2 rounded-full hover:cursor-pointer hover:bg-gray-500 transition-colors duration-300 active:bg-gray-700">
                  <img
                    className="w-10 "
                    src={linkedinLogo}
                    alt="Linkedin Logo"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col items-center sm:h-[48vh] lg:order-2 lg:h-full">
            <div className="relative flex h-[42vh] min-h-70 w-full items-end justify-center overflow-hidden rounded-[1.75rem] bg-neutral-950 sm:h-full lg:min-h-0 lg:rounded-none lg:bg-transparent ">
              <img
                className="h-12/12 w-auto object-contain object-bottom"
                src={portrait}
                alt="Portrait"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-transparent to-black lg:bg-linear-to-l lg:from-transparent lg:to-black" />
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-lg font-semibold text-white">
                @Reynaldo
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
