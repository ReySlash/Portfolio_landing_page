import Image from "next/image";
import HeroPortrait from "../assets/HeroPortrait.webp";
// import HeroPortrait2 from "../assets/HeroPortrait2.png";
function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 flex min-h-[calc(100dvh-80px)] items-center justify-center py-6 sm:py-8"
    >
      {/* Column#1: Information */}
      <div className="grid rounded-3xl  bg-black  shadow-[0_0_0_1px_rgba(255,255,255,0.03)] grid-cols-1 lg:grid-cols-2">
        <div className="order-last content-center lg:order-first border border-gray-800 p-4 rounded-3xl bg-linear-to-br from-gray-950 via-black to-gray-900">
          <h1 className="text-left text-2xl lg:text-4xl">
            I'm a <span className="text-red-600">Full-Stack Developer.</span>
          </h1>
          <h3 className="text-left text-xl lg:text-2xl ">
            I build fast and responsive Next.js applications with modern UI and
            clean component architecture.
          </h3>
          <div className="flex flex-row justify-center gap-3 py-5">
            <a
              href="#projects"
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl bg-red-600 px-2 md:px-5 py-3 font-semibold transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:bg-red-500 active:scale-[0.98] sm:max-w-48"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl border border-gray-700 bg-gray-900 px-2 md:px-5 py-3 font-semibold transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:border-gray-500 hover:bg-gray-800 active:scale-[0.98] sm:max-w-48"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Column#2: Portrait */}
        <div className="order-first h-full bg-transparent px-5 lg:order-last">
          <div className="flex flex-col items-center justify-center gap-3 bg-transparent">
            <div className="relative aspect-square w-full max-w-90 overflow-hidden rounded-full md:max-w-md">
              <Image
                className="h-full w-full bg-transparent object-cover object-[85%_center] opacity-80"
                src={HeroPortrait}
                alt="Portrait picture"
                priority
                sizes="(min-width: 1024px) 32rem, 90vw"
                style={{
                  maskImage:
                    "radial-gradient(circle, black 58%, transparent 82%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, black 58%, transparent 82%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, transparent 56%, rgba(0, 0, 0, 0.16) 72%, rgba(0, 0, 0, 0.55) 86%, rgba(0, 0, 0, 0.9) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
