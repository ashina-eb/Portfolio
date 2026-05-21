import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  function Increment() {
    if (count < 10) setCount(count + 1);
  }

  function Decrement() {
    if (count !== 1) setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-cover
      bg-center
      relative
      overflow-hidden
    "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1974&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Floating Math Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        <h1 className="absolute top-10 left-10 text-white/10 text-8xl font-black">
          ∑
        </h1>

        <h1 className="absolute bottom-20 right-16 text-cyan-400/10 text-9xl font-black">
          π
        </h1>

        <h1 className="absolute top-1/3 right-20 text-pink-400/10 text-7xl font-black">
          √
        </h1>

        <h1 className="absolute bottom-24 left-20 text-purple-400/10 text-8xl font-black">
          ∞
        </h1>
      </div>

      {/* Glass Card */}
      <div
        className="
        relative
        z-10
        w-[390px]
        p-10
        rounded-[35px]
        bg-white/10
        backdrop-blur-2xl
        border border-white/20
        shadow-[0_10px_50px_rgba(0,0,0,0.45)]
        text-center
      "
      >
        {/* Heading */}
        <p
          className="
          text-cyan-300
          uppercase
          tracking-[6px]
          text-xs
          font-semibold
          mb-5
        "
        >
          Multiplication of 2
        </p>

        {/* Counter */}
        <div
          className="
          w-44
          h-44
          mx-auto
          rounded-full
          border-4
          border-cyan-400/30
          bg-white/5
          flex
          flex-col
          items-center
          justify-center
          shadow-inner
          mb-8
        "
        >
          <h1 className="text-3xl font-black text-white">
            2 × {count}
          </h1>

          <h1
            className="
            text-6xl
            font-black
            text-cyan-300
            drop-shadow-2xl
          "
          >
            {2 * count}
          </h1>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={Increment}
            className="
            w-full
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            text-white
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
          "
          >
            Next
          </button>

          <button
            onClick={Decrement}
            className="
            w-full
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-pink-500
            to-rose-500
            text-white
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
          "
          >
            Previous
          </button>

          <button
            onClick={Reset}
            className="
            w-full
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-purple-500
            to-indigo-500
            text-white
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
          "
          >
            Reset Equation
          </button>
        </div>

        {/* Footer */}
        <p className="text-white/50 text-sm mt-7">
          Mathematics is the language of the universe ✨
        </p>
      </div>
    </div>
  );
}

export default Counter;