import React from "react";

function SmallPostStreamCard({ data }) {
  return (
    <div className="relative w-[472px] h-[468px] border border-white rounded-xl overflow-hidden cursor-pointer">
      <div className="shrink-0">
        <img
          className="h-[266px] w-full object-cover"
          src={data.image}
          alt="Never gonna give you up"
        ></img>
      </div>
      <div className="relative flex flex-col justify-center items-start py-6 px-7">
        <div className="uppercase tracking-wide text-sm text-slate-300 font-medium">
          {data.genre}
        </div>
        <p className="mt-2 text-white text-2xl font-semibold">{data.title}</p>
        <div className="absolute top-[159px] uppercase tracking-wide text-sm text-slate-300 font-medium">
          {data.date}
        </div>
      </div>
    </div>
  );
}

export default SmallPostStreamCard;
