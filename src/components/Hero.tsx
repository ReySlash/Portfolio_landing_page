import Image from "next/image";
import HeroPortrait from "../assets/HeroPortrait.webp";
import StyledLink from "./StyledLink";

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="scroll-mt-24 flex min-h-[calc(100dvh-80px)] items-center justify-center py-6 sm:py-8"
    >
      {/* Column#1: Information */}
      <div className="grid rounded-3xl  bg-black  shadow-[0_0_0_1px_rgba(255,255,255,0.03)] grid-cols-1 lg:grid-cols-2">
        <div className="order-last content-center lg:order-first border border-gray-800 p-4 rounded-3xl bg-linear-to-br from-gray-950 via-black to-gray-900">
          <h1 id="hero-title" className="text-center text-2xl lg:text-4xl">
            I'm a <span className="text-red-600">Full-Stack Developer.</span>
          </h1>
          <p className="text-center text-xl lg:text-2xl">
            I build fast and responsive web applications with modern UI and
            clean component architecture.
          </p>
          <div className="flex flex-row justify-center gap-3 py-5">
            <StyledLink
              href="#projects"
              className="flex-1 px-2 md:px-5 sm:max-w-48"
            >
              View Projects
            </StyledLink>
            <StyledLink
              href="#contact"
              variant="secondary"
              className="flex-1 px-2 md:px-5 sm:max-w-48"
            >
              Contact Me
            </StyledLink>
          </div>
        </div>

        {/* Column#2: Portrait */}
        <div className="order-first h-full bg-transparent px-5 lg:order-last">
          <div className="flex flex-col items-center justify-center gap-3 bg-transparent">
            <div className="relative aspect-square w-full max-w-90 overflow-hidden rounded-full md:max-w-md">
              <Image
                className="h-full w-full bg-transparent object-cover object-[85%_center] opacity-80"
                src={HeroPortrait}
                alt="Portrait of Reynaldo Carmenate Arias"
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
