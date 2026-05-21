import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-5 left-1/2 -translate-x-1/2
        w-[92%] md:w-[95%] lg:w-[90%]
        z-50
        px-6 md:px-8
        py-4
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
          text-2xl md:text-3xl lg:text-4xl
          font-black
          tracking-wide
          text-white
          cursor-pointer
          select-none
        "
      >
        Ashina <span className="text-pink-400">E B</span>
      </h1>

      {/* Desktop Menu */}
      <ul
        className="
          hidden md:flex
          items-center gap-8 lg:gap-10
          text-[16px] lg:text-[17px]
          font-medium
          text-slate-300
        "
      >
        {/* Home */}
        <li>
          <a
            href="#home"
            className="
              relative
              hover:text-white
              transition-all duration-300
              after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px]
              after:bg-pink-400
              hover:after:w-full
              after:transition-all after:duration-300
            "
          >
            Home
          </a>
        </li>

        {/* About */}
        <li>
          <a
            href="#about"
            className="
              relative
              hover:text-white
              transition-all duration-300
              after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px]
              after:bg-cyan-400
              hover:after:w-full
              after:transition-all after:duration-300
            "
          >
            About
          </a>
        </li>

        {/* Education */}
        <li>
          <a
            href="#education"
            className="
              relative
              hover:text-white
              transition-all duration-300
              after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px]
              after:bg-purple-400
              hover:after:w-full
              after:transition-all after:duration-300
            "
          >
            Education
          </a>
        </li>

        {/* Projects */}
        <li>
          <a
            href="#projects"
            className="
              relative
              hover:text-white
              transition-all duration-300
              after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px]
              after:bg-pink-400
              hover:after:w-full
              after:transition-all after:duration-300
            "
          >
            Projects
          </a>
        </li>

        {/* Contact */}
        <li>
          <a
            href="#contact"
            className="
              relative
              hover:text-white
              transition-all duration-300
              after:absolute after:left-0 after:-bottom-1
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

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          md:hidden
          text-white
          transition-all duration-300
        "
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          absolute top-24 left-0
          w-full
          rounded-3xl
          bg-black/80
          backdrop-blur-2xl
          border border-white/10
          overflow-hidden
          transition-all duration-500 ease-in-out
          md:hidden
          ${open
            ? "max-h-[500px] opacity-100 p-8"
            : "max-h-0 opacity-0 p-0 border-0"
          }
        `}
      >
        <ul
          className="
            flex flex-col
            items-center
            gap-8
            text-lg
            font-medium
            text-slate-300
          "
        >
          <li>
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#education"
              onClick={() => setOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Projects
            </a>
          </li>
          {/* Projects Navbar Link */}
          <li>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="
                  relative
                  hover:text-white
                  transition-all duration-300
                  after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px]
                  after:bg-pink -400
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
              onClick={() => setOpen(false)}
              className="hover:text-green-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;