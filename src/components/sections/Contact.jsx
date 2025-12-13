import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_rl7ft6j";
  const TEMPLATE_ID = "template_";
  const PUBLIC_KEY = "1dstGo2LHl8YFyVTr";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((res) => {
        alert("Message Sent!");
        setFormData({ name: "", eamil: "", message: "" });
      })
      .catch(() => {
        alert("Oops! Somthing Went Wrong. Please Try Again");
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="px-4 max-w-300 ">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-6 text-center">
            I’m always open to new opportunities and collaborations. Let’s build
            something great together!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            <div className="space-y-6 border border-white/20 p-10 rounded-2xl">
              <h3 className="font-bold mb-3 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center text-2xl">
                Contact Info
              </h3>
              <p className="text-center">
                Feel free to reach out if you have an opportunity, a project
                idea, or just want to say hello.
              </p>
              <div className="mt-5">
                <div className="text-center">
                  <h4 className="font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    <i className="bi bi-geo-alt mr-2" />
                    My Location
                  </h4>
                  <p className="text-1xl">Egypt, Damietta</p>
                </div>
              </div>
              <div className="info-item">
                <div className="text-center">
                  <h4 className="font-bold  bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    <i className="bi bi-telephone mr-2" />
                    Phone Number
                  </h4>
                  <p>+20 1004678364</p>
                </div>
              </div>
              <div className="info-item">
                <div className="text-center">
                  <h4 className="font-bold  bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    <i className="bi bi-envelope mr-2 " />
                    Email Address
                  </h4>
                  <p>
                    <a href="mailto:alaaahmeed762@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you">
                      alaaahmedd383&#64;gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="text-center">
                  <h4 className="font-bold mb-4 mt-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Follow Me On Social Media
                  </h4>
                  <div className="flex justify-center p-3">
                    <a href=""><i className="bi bi-facebook  border rounded-full m-3 p-4 text-2xl text-blue-300 hover:-translate-y-1 hover:text-white hover:bg-blue-500/20   hover:border-white/10  hover:shadow-[0_7px_15px_rgba(59,130,246,0.5)] transition-all " /></a>
                    <a href="https://github.com/alaa-ahmed38" target="_blink"><i className="bi bi-github  border rounded-full m-3 p-4 text-2xl text-blue-300 hover:-translate-y-1 hover:text-white hover:bg-blue-500/20   hover:border-white/10  hover:shadow-[0_7px_15px_rgba(59,130,246,0.5)] transition-all " /></a>
                    <a href="https://www.linkedin.com/in/alaa-ahmed-275636274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  target="_blink"><i className="bi bi-linkedin  border rounded-full m-3 p-4 text-2xl text-blue-300 hover:-translate-y-1 hover:text-white hover:bg-blue-500/20   hover:border-white/10  hover:shadow-[0_7px_15px_rgba(59,130,246,0.5)] transition-all " /></a>
                    <a href=""><i className="bi bi-instagram  border rounded-full m-3 p-4 text-2xl text-blue-300 hover:-translate-y-1 hover:text-white hover:bg-blue-500/20   hover:border-white/10  hover:shadow-[0_7px_15px_rgba(59,130,246,0.5)] transition-all" /></a>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 border border-white/20 p-10 rounded-2xl"
            >
              <div className="contact-form">
                {/* <h3>Get In Touch</h3> */}
                <p>
                  Don’t hesitate to drop me a message — I’d love to hear from
                  you!
                </p>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Name..."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              {/* 2 */}
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="example@gmail.com..."
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              {/* 3 */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Your Message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative over-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
