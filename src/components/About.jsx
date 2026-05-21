import React from "react";

function About() {
  return (
    <section
      id="about"
      className="
      relative
      overflow-hidden
      rounded-[36px]
      border border-white/10
      bg-[#111827]/70
      backdrop-blur-2xl
      p-8 md:p-14
      shadow-[0_20px_70px_rgba(0,0,0,0.45)]
    "
    >
      {/* Soft Background Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-[-100px] left-[-80px] w-[220px] h-[220px] bg-purple-500/10 rounded-full blur-[120px]"></div>

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
          Get To Know Me
        </p>

        <h2
          className="
          text-4xl md:text-5xl
          font-black
          text-white
        "
        >
          About Me
        </h2>

        <div className="mt-5 w-24 h-[4px] rounded-full bg-gradient-to-r from-white to-slate-500"></div>
      </div>

      {/* Content */}
      <div
        className="
        relative z-10
        grid lg:grid-cols-2
        gap-14
        mt-12
      "
      >
        {/* Left Side */}
        <div>
          <p
            className="
            text-lg
            leading-9
            text-slate-300
          "
          >
            I'm currently pursuing Diploma in Computer Engineering at
            Govt Women's Polytechnic College, Kerala. I enjoy learning
            frontend development using React and creating visually refined
            websites with modern UI aesthetics.
          </p>

          <p
            className="
            mt-6
            text-lg
            leading-9
            text-slate-400
          "
          >
            My focus is on building clean, elegant, and interactive
            digital experiences while continuously improving my creative
            and technical skills.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-4 mt-10">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Python",
              "Django",
            ].map((skill) => (
              <span
                key={skill}
                className="
                px-5 py-3
                rounded-full
                bg-white/5
                border border-white/10
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

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "💃 Dancing",
            "📸 Photography",
            "📚 Reading",
            "💡 Learning Tech",
          ].map((hobby) => (
            <div
              key={hobby}
              className="
              rounded-[28px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              text-center
              shadow-lg
              hover:-translate-y-2
              hover:bg-white/[0.07]
              transition-all duration-500
            "
            >
              <h3
                className="
                text-xl
                font-semibold
                text-white
              "
              >
                {hobby}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;