import React from "react";

function Project() {
  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-black
      via-slate-900
      to-indigo-950
      text-white
      px-6
      py-16
      font-[Poppins]
    "
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h1
          className="
          text-5xl
          md:text-6xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          via-white
          to-purple-500
          bg-clip-text
          text-transparent
        "
        >
          My Projects
        </h1>

        <p className="text-slate-400 mt-5 text-lg">
          Some creative projects built using React & Tailwind CSS
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Project 1 */}
        <div
          className="
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          rounded-[32px]
          overflow-hidden
          hover:scale-105
          hover:border-cyan-400/30
          transition-all duration-500
          shadow-2xl
        "
        >
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt="Counter App"
            className="w-full h-56 object-cover"
          />

          <div className="p-7">
            <h2 className="text-2xl font-bold mb-3">
              Counter App
            </h2>

            <p className="text-slate-400 leading-7">
              A modern counter application built using React useState
              hook with beautiful Tailwind CSS styling.
            </p>

            <button
              className="
              mt-6
              px-6 py-3
              rounded-full
              bg-cyan-500
              hover:bg-cyan-600
              transition-all duration-300
              font-semibold
            "
            >
              View Project
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          rounded-[32px]
          overflow-hidden
          hover:scale-105
          hover:border-purple-400/30
          transition-all duration-500
          shadow-2xl
        "
        >
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="User Directory"
            className="w-full h-56 object-cover"
          />

          <div className="p-7">
            <h2 className="text-2xl font-bold mb-3">
              User Directory
            </h2>

            <p className="text-slate-400 leading-7">
              Dynamic user directory application using API fetching,
              Axios, and React useEffect hook.
            </p>

            <button
              className="
              mt-6
              px-6 py-3
              rounded-full
              bg-purple-500
              hover:bg-purple-600
              transition-all duration-300
              font-semibold
            "
            >
              View Project
            </button>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="
          bg-white/10
          backdrop-blur-xl
          border border-white/10
          rounded-[32px]
          overflow-hidden
          hover:scale-105
          hover:border-pink-400/30
          transition-all duration-500
          shadow-2xl
        "
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Portfolio Website"
            className="w-full h-56 object-cover"
          />

          <div className="p-7">
            <h2 className="text-2xl font-bold mb-3">
              Portfolio Website
            </h2>

            <p className="text-slate-400 leading-7">
              Responsive and elegant portfolio website designed using
              React.js and Tailwind CSS.
            </p>

            <button
              className="
              mt-6
              px-6 py-3
              rounded-full
              bg-pink-500
              hover:bg-pink-600
              transition-all duration-300
              font-semibold
            "
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;