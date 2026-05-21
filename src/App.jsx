import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-[#07070c]
        text-white
        font-[Poppins]
        scroll-smooth
      "
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[180px]"></div>

      <div className="absolute top-[40%] right-[-180px] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[180px]"></div>

      <div className="absolute bottom-[-200px] left-[30%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px]"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <nav
          className="
            fixed top-5 left-1/2 -translate-x-1/2
            w-[92%]
            z-50
            px-8 py-5
            rounded-[24px]
            bg-white/5
            backdrop-blur-2xl
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.45)]
            flex items-center justify-between
          "
        >
          {/* Logo */}
          <h1
            className="
              text-2xl md:text-4xl
              font-black
              tracking-wide
              text-white
            "
          >
            Ashina <span className="text-pink-400">E B</span>
          </h1>

          {/* Desktop Menu */}
          <ul
            className="
              hidden md:flex
              items-center gap-10
              text-[17px]
              font-medium
              text-slate-300
            "
          >
            <li>
              <a
                href="#home"
                className="
                  hover:text-white
                  transition-all duration-300
                  relative after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px]
                  after:bg-pink-400
                  hover:after:w-full
                  after:transition-all after:duration-300
                "
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="
                  hover:text-white
                  transition-all duration-300
                  relative after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px]
                  after:bg-cyan-400
                  hover:after:w-full
                  after:transition-all after:duration-300
                "
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#education"
                className="
                  hover:text-white
                  transition-all duration-300
                  relative after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px]
                  after:bg-purple-400
                  hover:after:w-full
                  after:transition-all after:duration-300
                "
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="
                  hover:text-white
                  transition-all duration-300
                  relative after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px]
                  after:bg-pink-400
                  hover:after:w-full
                  after:transition-all after:duration-300
                "
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="
                  hover:text-white
                  transition-all duration-300
                  relative after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px]
                  after:bg-green-400
                  hover:after:w-full
                  after:transition-all after:duration-300
                "
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Mobile Menu */}
          {open && (
            <div
              className="
                absolute top-24 left-0
                w-full
                rounded-3xl
                bg-black/80
                backdrop-blur-2xl
                border border-white/10
                p-8
                md:hidden
              "
            >
              <ul className="flex flex-col gap-8 text-center text-lg text-slate-300 font-medium">
                <li>
                  <a href="#home" onClick={() => setOpen(false)}>
                    Home
                  </a>
                </li>

                <li>
                  <a href="#about" onClick={() => setOpen(false)}>
                    About
                  </a>
                </li>

                <li>
                  <a href="#education" onClick={() => setOpen(false)}>
                    Education
                  </a>
                </li>

                <li>
                  <a href="#projects" onClick={() => setOpen(false)}>
                    Projects
                  </a>
                </li>

                <li>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>

        {/* Home */}
        <section
          id="home"
          className="
            min-h-screen
            flex items-center
            px-6 md:px-16 lg:px-24
            pt-24
          "
        >
          <Home />
        </section>

        {/* About */}
        <section
          id="about"
          className="
            py-24
            px-6 lg:px-24
          "
        >
          <About />
        </section>

        {/* Education */}
        <section
          id="education"
          className="
            py-20
            px-6 lg:px-24
          "
        >
          <Education />
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="
            py-24
            px-6 md:px-16 lg:px-24
          "
        >
          <Project />
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="
            py-24
            px-6 md:px-16 lg:px-24
          "
        >
          <Contact />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;