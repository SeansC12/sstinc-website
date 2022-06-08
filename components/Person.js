import React from "react";

function Person({ personInfo }) {
  return (
    <div className="flex justify-center flex-col m-auto mt-10 mx-10 w-[158px] h-min-[222px]">
      <img
        className="drop-shadow-md rounded-full border-orange-400 border-4"
        src={"https://picsum.photos/150"}
      ></img>
      <div className="text-center break-words h-16">
        <h1 className="mt-3 font-medium text-lg">
          <strong>{personInfo.name}</strong>
        </h1>
        <h2 className="font-normal text-base">{personInfo.position}</h2>
      </div>
    </div>
  );
}

export default Person;
