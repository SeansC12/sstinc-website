import React from "react";
import Image from "next/image";

export default function PostStreamCard({ data }) {
  return (
    <div className="p-6 mb-7 max-w-7xl mx-auto bg-white rounded-xl shadow-none flex items-center hover:shadow-lg cursor-pointer">
      <div className="shrink-0">
        {/* <data.icon></data.icon> */}
        <Image src={data.imageLink} width={200} height={150}/>
      </div>
      <div class="pl-28 pt-2">
        <div className="text-xl font-medium text-black break-words">
          {data.title}
        </div>
        <p className="text-slate-500">{data.desription}</p>
      </div>
    </div>
  );
}
