import React from "react";
import Image from "next/image";

export default function PostStreamCard({ data }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md sm:shadow-none sm:hover:shadow-md overflow-hidden sm:max-w-7xl mt-14 cursor-pointer">
      <div className="sm:flex">
        <div class="shrink-0">
          <img
            className="h-48 w-full object-cover sm:h-full sm:w-48"
            src={data.image}
            width={200}
            height={150}
            alt="Never gonna give you up"
          ></img>
        </div>
        <div className="flex flex-col items-center pt-10 pb-10 sm:justify-center sm:items-start sm:p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {data.title}
          </div>
          <p className="mt-2 text-slate-500">{data.description}</p>
        </div>
      </div>
    </div>
  );
}
