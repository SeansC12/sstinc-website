import React from "react";

function LargePostStreamCard({ data }) {
  return (
    <div className="inline-block relative w-full h-[468px] border border-white text-white rounded-xl overflow-hidden
    ">
      <div className="shrink-0">
        <img
          className="h-full w-full absolute object-cover brightness-75"
          src={data.image}
          alt="Never gonna give you up"
        ></img>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-end absolute py-12 px-7 z-10">
        <div className="uppercase tracking-wide text-sm font-medium">
          {data.genre}
        </div>
        <p className="mt-2 text-2xl font-semibold">{data.title}</p>
        <div className="absolute top-[430px] uppercase tracking-wide text-sm font-medium">
          {data.date}
        </div>
      </div>
    </div>
  );
}

export default LargePostStreamCard;
