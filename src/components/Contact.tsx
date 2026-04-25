function Contact() {
  return (
    <section id="contact" className="px-6 py-5 lg:px-20 lg:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <div className="max-w-3xl space-y-4 text-left">
          <span className="inline-flex w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-lg font-semibold uppercase tracking-[0.2em] text-red-400">
            Contact
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Let&apos;s build something clear, modern, and useful.
          </h2>
        </div>

        <div className="rounded-3xl border border-gray-800 bg-linear-to-br from-gray-950 via-black to-gray-900 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] lg:p-8">
          <div className="flex flex-col gap-6">
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
            </div>

            <form
              action="mailto:rcarmenatearias@gmail.com"
              method="post"
              encType="text/plain"
              className="grid gap-4"
            >
              <div className="grid gap-4 lg:grid-cols-2">
                <label className="flex flex-col gap-2 text-left">
                  <span className="text-sm font-medium text-gray-300">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition-colors duration-150 placeholder:text-gray-500 focus:border-red-500"
                    placeholder="Your name"
                  />
                </label>

                <label className="flex flex-col gap-2 text-left">
                  <span className="text-sm font-medium text-gray-300">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition-colors duration-150 placeholder:text-gray-500 focus:border-red-500"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-left">
                <span className="text-sm font-medium text-gray-300">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  className="rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition-colors duration-150 placeholder:text-gray-500 focus:border-red-500"
                  placeholder="Tell me about your project or opportunity."
                />
              </label>

              <button
                type="submit"
                className="mt-2 flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:bg-red-500 active:scale-[0.98] lg:w-fit"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>

        <p className="text-left text-sm leading-7 text-gray-400">
          Best way to reach me right now: LinkedIn for professional contact,
          GitHub for code and project context.
        </p>
      </div>
    </section>
  );
}

export default Contact;
