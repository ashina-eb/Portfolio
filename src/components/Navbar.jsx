import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
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
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;