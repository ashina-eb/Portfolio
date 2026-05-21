import React from "react";

import About from "./About";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import Project from "./Project";
import Navbar from "./Navbar";

function Home() {
  return (
    <div
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#0a0a0f]
      text-white
      font-[Poppins]
    "
    >
      {/* Elegant Gradient Lighting */}
      <div className="absolute top-[-180px] left-[-120px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px]"></div>

              
      <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px]"></div>

      {/* Soft Noise Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>


      {/* Hero Section */}
      <section
        className="
        relative z-10
        flex flex-col-reverse lg:flex-row
        items-center justify-between
        gap-20
        min-h-screen
        px-8 md:px-20
      "
      >
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          

          <h1
            className="
            text-5xl
            md:text-7xl
            font-black
            leading-[1.1]
          "
          >
            Hi, I'm{" "}
            <span
              className="
              bg-gradient-to-r
              from-white
              via-slate-300
              to-slate-500
              bg-clip-text
              text-transparent
            "
            >
              Ashinaaaa
            </span>
          </h1>

          <h3
            className="
            mt-7
            text-2xl
            md:text-3xl
            font-semibold
            text-slate-300
          "
          >
            Creative Developer • Dancer • Dreamer
          </h3>

          <p
            className="
            mt-8
            text-lg
            leading-9
            text-slate-400
            max-w-2xl
          "
          >
            Passionate about creating elegant digital experiences with
            a balance of creativity, modern aesthetics, and smooth user
            interaction.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start">
            <button
              className="
              px-9 py-4
              rounded-full
              bg-white
              text-black
              text-lg
              font-semibold
              hover:scale-105
              transition-all duration-300
              shadow-[0_10px_35px_rgba(255,255,255,0.15)]
            "
            >
              Explore
            </button>

            <button
              className="
              px-9 py-4
              rounded-full
              border border-white/15
              bg-white/5
              backdrop-blur-xl
              text-lg
              font-semibold
              hover:bg-white/10
              transition-all duration-300
            "
            >
              My Journey
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div
            className="
            relative
            w-[320px]
            h-[320px]
            rounded-[40px]
            overflow-hidden
            
           
            
          "
          >
            <img
              src="/images/my.jpeg"
              alt="profile"
              className="
              w-full
              h-full
              object-cover
              rounded-[90%]
              hover:scale-105
              transition-all duration-700
            "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;