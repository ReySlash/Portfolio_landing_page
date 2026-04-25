import copyClipboard from "../assets/copyClipboardIcon.svg";
import copiedClipboard from "../assets/copiedClipboardIcon.svg";
import { useState } from "react";
import Reveal from "./Reveal";

function Contact() {
  const [copied, setCopied] = useState(false);
  return (
    <section id="contact" className="px-6 py-5 lg:px-20 lg:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <Reveal className="max-w-3xl space-y-4 text-left">
          <span className="inline-flex w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-lg font-semibold uppercase tracking-[0.2em] text-red-400">
            Contact
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Let&apos;s build something clear, modern, and useful.
          </h2>
        </Reveal>

        <Reveal
          className="rounded-3xl border border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] lg:p-8"
          delay={80}
        >
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.linkedin.com/in/reynaldo-carmenate-arias-03b5102b5/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:bg-red-500 active:scale-[0.98] sm:min-w-44 sm:px-6"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/ReySlash"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-xl border border-gray-700 bg-gray-900 px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:border-gray-500 hover:bg-gray-800 active:scale-[0.98] sm:min-w-44 sm:px-6"
              >
                Visit GitHub
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("rcarmenate95@gmail.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 5000);
                }}
                className="flex items-center justify-center rounded-xl border border-gray-700 bg-gray-900 px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:border-gray-500 hover:bg-gray-800 active:scale-[0.98] sm:min-w-10"
              >
                <img
                  className="brightness-0 invert"
                  src={copied ? copiedClipboard : copyClipboard}
                  alt="Copy to clipboard"
                />
              </button>
            </div>
            <p className="select-none">rcarmenate95@gmail.com</p>
          </div>
        </Reveal>

        <Reveal className="text-left text-sm leading-7 text-gray-400" delay={140}>
          Best way to reach me right now: LinkedIn for professional contact,
          GitHub for code and project context.
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
