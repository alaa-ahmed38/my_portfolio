import RevealOnScroll from "../RevealOnScroll";


export default function About() {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "TailwindCSS",
    " JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Responsive Design",
    "State Management",
    "Performance Optimization",
    "API Integration",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "RESTful APIs",
    "Error Handling",
  ];
  const tools = ["Git", "GitHub", "Postman", "VS Code"];
  const softSkills = [
    "Problem Solving",
    "Time Management",
    "Teamwork & Communication",
    "Self-Learning",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate">
          <p className="text-gray-300 mb-6">
            Hello! My name is Alaa Ahmed, a dedicated MERN Stack Developer based
            in Egypt. My journey into web development started with a curiosity
            about how websites are built, which turned into a full-blown passion
            for programming. I focus on writing clean, maintainable code and
            designing user-centric interfaces. Whether it's developing a
            responsive frontend or architecting a robust backend API, I enjoy
            every step of the development process. I am always eager to learn
            new technologies and improve my skills to deliver the best
            solutions.
          </p>
          {/* <h3 className="text-xl font-bold mb-1">Tech Stack </h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
            {/* front */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h4 className="text-xl  text-blue-500 font-bold mb-4">
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((f, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-gray-100 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            {/* back */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h4 className="text-xl  text-blue-500 font-bold mb-4">BackEnd</h4>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((b, key) => (
                  <span
                    className="bg-blue-500/10 text-gray-100 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    key={key}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
            {/* tools */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h4 className="text-xl  text-blue-500 font-bold mb-4">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((t, key) => (
                  <span
                    className="bg-blue-500/10 text-gray-100 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,.2)] transition"
                    key={key}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* soft skills */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h4 className="text-xl   font-bold mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s, key) => (
                  <span
                    className="bg-blue-500/10 text-gray-100 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    key={key}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h4 className="text-xl  font-bold mb-4">🏫 Education</h4>
              <li>
                <strong>
                  B.Sc. in Information Technology
                  <br />
                  Damietta University | Senior Year Student{" "}
                </strong>
              </li>
            </div>
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h4 className="text-xl  font-bold mb-4">👜 Work</h4>
              <li>
                <strong>Currently a Student </strong>
              </li>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}
