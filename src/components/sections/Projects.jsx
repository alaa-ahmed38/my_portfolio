import RevealOnScroll from "../RevealOnScroll";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* <h2 className="">Featured Projects</h2> */}
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2 ">HTML&CSS Projects </h3>
              <p className="text-gray-400 mb-4"></p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["HTML5", "CSS3"].map((l, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20hover:shadow-[0_2px_8px_rgba(59,130,246,0,2)] transition"
                  >
                    {l}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/alaa-ahmed38/HTML-CSS-Projects"
                  target="_blink"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  view project rebo →
                </a>
              </div>
            </div>
            {/* 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2 ">MEAN-Stack Portfolio </h3>
              <p className="text-gray-400 mb-4"></p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["HTML5", "CSS3"].map((l, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20hover:shadow-[0_2px_8px_rgba(59,130,246,0,2)] transition"
                  >
                    {l}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/alaa-ahmed38/NTI-st-final-project"
                  target="_blink"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  view project rebo →
                </a>
              </div>
            </div>
            {/* 3 */}

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2 ">JS Projects</h3>
              <p className="text-gray-400 mb-4"></p>
              <div className="flex flex-wrap gap-2 mb-4 ">
                {["vanilla Js", "CSS3", "HTML5"].map((l, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20hover:shadow-[0_2px_8px_rgba(59,130,246,0,2)] transition"
                  >
                    {l}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="_blink"
                  href="https://github.com/alaa-ahmed38/JS-6-Project"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  view project rebo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
