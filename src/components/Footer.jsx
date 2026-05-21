import React from "react";

function Footer() {
  return (
    <footer
      className="
      relative
      overflow-hidden
      rounded-[38px]
      border border-white/10
      bg-[#111827]/70
      backdrop-blur-2xl
      shadow-[0_20px_70px_rgba(0,0,0,0.45)]
      mt-20
      px-8 md:px-14
      py-12
    "
    >
      {/* Elegant Background Glow */}
      <div className="absolute top-[-120px] left-[-100px] w-[260px] h-[260px] bg-purple-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[260px] h-[260px] bg-cyan-500/10 rounded-full blur-[120px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        

        {/* Main Text */}
        <h2
          className="
          text-3xl md:text-4xl
          font-black
          text-white
          leading-tight
        "
        >
          Designed with creativity by{" "}
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
        </h2>

        {/* Description */}
        <p
          className="
          mt-5
          text-slate-400
          text-lg
          leading-8
          max-w-2xl
        "
        >
          Built with passion, elegant design principles,
          and modern frontend technologies to create
          visually refined digital experiences.
        </p>

        {/* Elegant Divider */}
        <div
          className="
          mt-8
          h-[2px]
          w-32
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-white/70
          to-transparent
        "
        ></div>
      </div>
    </footer>
  );
}

export default Footer;