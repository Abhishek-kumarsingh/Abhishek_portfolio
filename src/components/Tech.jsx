import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-e-lg hover:scale-105 transform transition-all">SKILLS</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
