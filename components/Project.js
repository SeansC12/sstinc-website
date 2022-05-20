import { useState } from "react";

export default function Project({ project }) {
  const [expanded, setExpanded] = useState(false);
  return (
    // <div
    //   className={
    //     "flex bg-opacity-50 h-60 border-4 m-14 rounded-xl justify-center place-items-center bg-[url('https://picsum.photos/2000')] hover:shadow-2xl"
    //   }
    // >
    //   <div className="grid place-items-center justify-center mx-6">
    //     <p className="text-green-500 text-l xl:text-xl">{project.title}</p>
    //     <p className="text-blue-700 text-xl xl:text-3xl">{project.description}</p>
    //     <p className="text-black text-xl">{project.subtitle}</p>
    //   </div>
    // </div>
    <div className=" h-screen mt-5">
      <img
        className="h-screen object-cover w-screen opacity-30 absolute z-0"
        src={project.image}
      ></img>
      <div className="h-screen flex items-center justify-center relative z-20">
        <div>
          <p className="text-l xl:text-xl">{project.title}</p>
          <p className="text-xl xl:text-3xl">{project.description}</p>
          <p className="text-xl">{project.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
