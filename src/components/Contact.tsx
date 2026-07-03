import Reveal from "./Reveal";
import EmailButton from "./EmailButton";

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="flex w-full flex-col gap-5">
        <Reveal className="max-w-3xl space-y-4 text-left">
          <span className="inline-flex w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-lg font-semibold uppercase tracking-[0.2em] text-red-400">
            Contact
          </span>
        </Reveal>

        <Reveal
          className="rounded-3xl border border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] lg:p-8"
          delay={80}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-3 md:flex-row md:flex-wrap">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-5 justify-center items-start">
              <h2 className="text-4xl font-bold tracking-tight  lg:text-5xl">
                Let's build something clear, modern, and useful.
              </h2>
              <div className="text-center md:text-left w-full">
                <a
                  href="mailto:rcarmenate95@gmail.com?subject=Portfolio%20Inquiry"
                  className="select-none break-all text-center text-gray-200 underline decoration-gray-500 underline-offset-4 transition-colors duration-150 hover:decoration-red-500"
                >
                  rcarmenate95@gmail.com
                </a>
              </div>
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-3 xl:px-5 items-center justify-between md:justify-center">
              <a
                href="https://www.linkedin.com/in/reynaldo-carmenate-arias-03b5102b5/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center text-center rounded-xl bg-red-600 px-auto py-3 font-semibold  transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:bg-red-500 active:scale-[0.98]"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/ReySlash"
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center text-center rounded-xl border border-gray-700 bg-gray-900 px-5 py-3 font-semibold  transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:border-gray-500 hover:bg-gray-800 active:scale-[0.98]"
              >
                Visit GitHub
              </a>
              <EmailButton />
            </div>
          </div>
        </Reveal>

        <Reveal
          className="text-left text-sm leading-7 text-gray-400 px-6"
          delay={140}
        >
          Best way to reach me right now: LinkedIn for professional contact,
          GitHub for code and project context.
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
