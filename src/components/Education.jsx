import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="
      relative
      overflow-hidden
      rounded-[38px]
      border border-white/10
      bg-[#111827]/70
      backdrop-blur-2xl
      p-8 md:p-14
      mt-16
      shadow-[0_20px_70px_rgba(0,0,0,0.45)]
    "
    >
      {/* Elegant Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-[-120px] left-[-100px] w-[260px] h-[260px] bg-purple-500/10 rounded-full blur-[120px]"></div>

      {/* Heading */}
      <div className="relative z-10">
        <p
          className="
          uppercase
          tracking-[5px]
          text-sm
          text-slate-400
          mb-3
        "
        >
          Academic Journey
        </p>

        <h2
          className="
          text-4xl md:text-5xl
          font-black
          text-white
        "
        >
          Education
        </h2>

        <div className="mt-5 w-24 h-[4px] rounded-full bg-gradient-to-r from-white to-slate-500"></div>
      </div>

      {/* Education Card */}
      <div
        className="
        relative z-10
        mt-12
        rounded-[30px]
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-8 md:p-10
        shadow-lg
        hover:bg-white/[0.06]
        transition-all duration-500
      "
      >
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3
              className="
              text-2xl md:text-3xl
              font-bold
              text-white
            "
            >
              Diploma in Computer Engineering
            </h3>

            <p
              className="
              mt-3
              text-lg
              text-slate-300
            "
            >
              Govt Women's Polytechnic College, Kerala
            </p>
          </div>

          {/* Badge */}
        
        </div>

        {/* Description */}
        <p
          className="
          mt-8
          text-lg
          leading-9
          text-slate-400
          max-w-4xl
        "
        >
          Passionate about frontend development, UI design,
          and modern web technologies. Focused on creating
          elegant digital experiences with clean interfaces,
          responsive layouts, and visually refined designs
          using React and Tailwind CSS.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-4 mt-10">
          {[
            "React",
            "Tailwind CSS",
            "Frontend",
            "UI Design",
            "JavaScript",
          ].map((skill) => (
            <span
              key={skill}
              className="
              px-5 py-3
              rounded-full
              border border-white/10
              bg-white/5
              text-slate-200
              font-medium
              backdrop-blur-xl
              hover:bg-white
              hover:text-black
              hover:scale-105
              transition-all duration-300
              cursor-pointer
            "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;