import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact"; 
import Footer from "./components/Footer";
import "./App.css"

function App() {
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
      {/* Background Glow Effects */}
      <div
        className="
        absolute
        top-[-200px]
        left-[-150px]
        w-[500px]
        h-[500px]
        bg-pink-500/10
        rounded-full
        blur-[180px]
      "
      ></div>

      <div
        className="
        absolute
        top-[40%]
        right-[-180px]
        w-[450px]
        h-[450px]
        bg-cyan-500/10
        rounded-full
        blur-[180px]
      "
      ></div>

      <div
        className="
        absolute
        bottom-[-200px]
        left-[30%]
        w-[500px]
        h-[500px]
        bg-purple-600/10
        rounded-full
        blur-[180px]
      "
      ></div>

      {/* Grid Overlay */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:24px_24px]
        opacity-30
      "
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Navbar */}
        <Navbar />

        {/* Home */}
        <section
          id="home"
          className="
          min-h-screen
          flex items-center
          px-6 md:px-16 lg:px-24
          pt-28
        "
        >
          <Home />
        </section>

        {/* About */}
        <section
          id="about"
          className="
          py-28
          px-6 md:px-16 lg:px-24
        "
        >
          <div
            className="
            max-w-7xl
            mx-auto
            rounded-[40px]
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-8 md:p-14
            shadow-[0_10px_60px_rgba(0,0,0,0.45)]
            hover:border-pink-500/20
            transition-all duration-500
          "
          >
            <About />
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="
          py-28
          px-6 md:px-16 lg:px-24
        "
        >
          <div
            className="
            max-w-7xl
            mx-auto
            rounded-[40px]
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-8 md:p-14
            shadow-[0_10px_60px_rgba(0,0,0,0.45)]
            hover:border-cyan-500/20
            transition-all duration-500
          "
          >
            <Education />
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="
          py-28
          px-6 md:px-16 lg:px-24
        "
        >
          {/* <div
            className="
            max-w-7xl
            mx-auto
            rounded-[40px]
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-8 md:p-14
            shadow-[0_10px_60px_rgba(0,0,0,0.45)]
            hover:border-purple-500/20
            transition-all duration-500
          "
          >
            <Project />
          </div> */}
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="
          py-28
          px-6 md:px-16 lg:px-24
        "
        >
          <div
            className="
            max-w-7xl
            mx-auto
            rounded-[40px]
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-8 md:p-14
            shadow-[0_10px_60px_rgba(0,0,0,0.45)]
            hover:border-green-500/20
            transition-all duration-500
          "
          >
            <Contact />
          </div>
        </section>

        {/* Footer */}
        <div
          className="
          border-t border-white/10
          bg-black/30
          backdrop-blur-xl
        "
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;