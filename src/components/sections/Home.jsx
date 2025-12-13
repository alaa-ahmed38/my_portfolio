import RevealOnScroll from "../RevealOnScroll";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex justify-around flex-wrap-reverse   items-center ">
          <div className="text-center z-10 px-25 mr-100px ">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent loading-right">
              Hi, I'm ALaa Ahmed
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I'm a passionate MERN-Stack Developer crafting scalable web
              applications and seamless user experiences. I turn complex ideas
              into high-performance web solutions using MongoDB, Express, React,
              and Node.js.
            </p>
            
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div><div className="p-7 mt-4">
              <a href="https://github.com/alaa-ahmed38"  target="_blink">
                <i className="bi bi-github  border rounded-full p-4 m-8 text-2xl text-blue-300 duration-200  hover:-translate-y-1 hover:text-white hover:bg-blue-500/20   hover:border-white/10  hover:shadow-[0_3px_10px_rgba(59,130,246,0.5)] transition-all " />
              </a>
              <a href="https://www.linkedin.com/in/alaa-ahmed-275636274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  target="_blink">
                <i className="bi bi-linkedin  border rounded-full p-4 m-8 text-2xl text-blue-300 duration-200  hover:-translate-y-1 hover:text-white hover:bg-blue-500/20   hover:border-white/10  hover:shadow-[0_3px_10px_rgba(59,130,246,0.5)] transition-all " />
              </a>
            </div>
          </div>
          <div className="px-25">
            <img
              className="border border-white/15 rounded-full hover: p-2  md:h-150 h-80 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_7px_10px_rgba(59,130,246,0.4)] transition-all"
              src="/src/assets/my-profile-pic.jpg"
              alt=""
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
