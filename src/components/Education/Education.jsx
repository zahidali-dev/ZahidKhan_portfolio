import React from "react";
import { education } from "../../constants";

const Education = () => (
  <section
    id="education"
    className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-[12vw] bg-black text-white"
  >
    {/* Section Heading */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold">EDUCATION</h2>
      <div className="w-20 sm:w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Education Boxes Grid */}
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20">

      {/* Vertical Divider (center) */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2.5px] bg-purple-500 z-0 pointer-events-none"></div>

      {/* Cards */}
      {education.map((edu) => (
        <div key={edu.id} className="flex flex-col items-center text-center">
          {/* Numbered Circle */}
          <div
            className="w-16 h-16 flex justify-center items-center text-3xl font-extrabold
            bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-400 rounded-full mb-4 animate-pulse shadow-lg select-none"
          >
            {edu.id}
          </div>
          {/* Card */}
          <div
            className="relative bg-zinc-900/80 backdrop-blur-md border border-purple-500
            p-6 sm:p-8 w-full rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl group"
            tabIndex={0}
            aria-label={`Education card ${edu.degree} at ${edu.school || edu.College || edu.University}`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-purple-300">{edu.degree}</h3>
            <p className="text-lg font-semibold mb-1 text-blue-300 group-hover:text-yellow-400">
              {edu.school || edu.College || edu.University}
            </p>
            <p className="text-sm text-gray-400">{edu.date}</p>
            {edu.grade && (
              <p className="text-md font-semibold mt-2 text-purple-200">Grade: {edu.grade}</p>
            )}
            <p className="text-gray-300 mt-2 text-base">{edu.desc}</p>

            {/* Animated Card Sheen */}
            <span className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none block opacity-0 group-hover:opacity-90 transition-all duration-700" style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 55%, rgba(255,255,255,0.08))",
              mixBlendMode: "overlay"
            }}></span>
          </div>
        </div>
      ))}
    </div>

    {/* Styles for grid row equalization and animation */}
    <style>{`
      @media (min-width: 768px) {
        #education .grid { grid-auto-rows: 1fr; }
      }
      #education .grid > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 0;
      }
    `}</style>
  </section>
);

export default Education;
