import React, { useState } from "react";
import { CloseButton } from "react-bootstrap";
import {IoMdCloseCircleOutline} from 'react-icons/io'

export default function PostStreamCard({ data }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {expanded ? (
        <div className="bg-white">
          <div
            className="max-w-md bg-white rounded-xl shadow-md  overflow-hidden sm:max-w-7xl mt-14 mx-10 sm:mx-16 cursor-pointer "
          >
          <IoMdCloseCircleOutline
            onClick={() => {
              setExpanded(false);
            }}
            className="text-3xl m-3"
          >
          </IoMdCloseCircleOutline>
            <div className="sm:flex">
              <div className="shrink-0">
                <img
                  className="h-48 w-full object-cover lg:h-full lg:w-60"
                  src={data.image}
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
        </div>
      ) : (
        <div
          className="max-w-md bg-white rounded-xl shadow-md  overflow-hidden sm:max-w-7xl mt-14 mx-10 sm:mx-16 cursor-pointer"
          onClick={() => {
            setExpanded(true);
          }}
        >
          <div className="sm:flex">
            <div className="shrink-0">
              <img
                className="h-48 w-full object-cover lg:h-full lg:w-60"
                src={data.image}
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
      )}
    </div>
  );
}
