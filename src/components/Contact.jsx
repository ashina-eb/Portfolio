import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="
      relative
      overflow-hidden
      rounded-[38px]
      border border-white/10
      bg-[#111827]/70
      backdrop-blur-2xl
      shadow-[0_20px_70px_rgba(0,0,0,0.45)]
      mt-20
      p-8 md:p-14
    "
    >
      {/* Elegant Background Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[260px] h-[260px] bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-[-120px] left-[-100px] w-[260px] h-[260px] bg-purple-500/10 rounded-full blur-[120px]"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center">
          <p
            className="
            uppercase
            tracking-[5px]
            text-sm
            text-slate-400
            mb-3
          "
          >
            Get In Touch
          </p>

          <h2
            className="
            text-4xl md:text-5xl
            font-black
            text-white
          "
          >
            Contact Me
          </h2>

          <div className="mt-5 mx-auto w-24 h-[4px] rounded-full bg-gradient-to-r from-white to-slate-500"></div>

          <p
            className="
            mt-6
            text-lg
            leading-8
            text-slate-400
            max-w-2xl
            mx-auto
          "
          >
            Feel free to connect with me for collaborations,
            creative projects, or meaningful tech discussions.
          </p>
        </div>

        {/* Contact Cards */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-7
          mt-14
        "
        >
          {[
            {
              icon: "📧",
              title: "Email",
              value: "ashinaeb@gmail.com",
            },
            {
              icon: "📱",
              title: "Phone",
              value: "+91 9895206314",
            },
            {
              icon: "📍",
              title: "Location",
              value: "Kerala, India",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
              rounded-[28px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-8
              text-center
              shadow-lg
              hover:bg-white/[0.06]
              hover:-translate-y-2
              transition-all duration-500
            "
            >
              {/* Icon */}
              <div
                className="
                w-16
                h-16
                mx-auto
                flex items-center justify-center
                rounded-2xl
                bg-white/5
                border border-white/10
                text-3xl
                mb-6
              "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="
                text-2xl
                font-bold
                text-white
                mb-3
              "
              >
                {item.title}
              </h3>

              {/* Value */}
              <p
                className="
                text-slate-400
                leading-7
                break-words
              "
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Elegant Divider */}
        <div
          className="
          mt-14
          mx-auto
          h-[2px]
          w-40
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-white/70
          to-transparent
        "
        ></div>
      </div>
    </section>
  );
}

export default Contact;