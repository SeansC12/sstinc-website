import { useState } from "react";

export default function Project({ project }) {
  return (
    <div className=" h-screen mt-5">
      <img
        className="h-screen object-cover w-screen opacity-30 absolute z-0"
        src={project.image}
      ></img>
      <div className="h-screen flex items-center justify-center relative z-20">
        <div className="text-center">
          <p className="text-l sm:text-xl">{project.title}</p>
          <p className="text-xl sm:text-3xl">{project.description}</p>
          <p className="text-xl">{project.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
