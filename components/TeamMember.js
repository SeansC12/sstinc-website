import React, { useState } from "react";

function TeamMember({
  person,
  mobileView,
  startCol,
  colSpan,
  endCol,
  startRow,
  rowSpan,
}) {
  let [isInMobileView, setIsInMobileView] = useState(mobileView);
  let [gridCSSProps, setGridCSSProps] = useState(
    isInMobileView
      ? ``
      : `col-start-${startCol} col-span-${colSpan} row-start-${startRow} row-span-${rowSpan}`
  );
  console.log(gridCSSProps);

  return (
    <div
      className={`${gridCSSProps} w-full h-[238px] break-words flex flex-col items-center`}
    >
      <div className="w-[150px] h-[150px] rounded-full border-2 border-yellow-400 bg-slate-200">
        <img
          src="https://cdn.vox-cdn.com/thumbor/JS-FN8mS5ioqtWMcwlHKJ5tiL3w=/0x0:1268x845/1400x1050/filters:focal(0x0:1268x845):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/35813328/Screenshot_2014-07-19_15.24.57.0.png"
          className="object-cover w-full h-full rounded-full"
        ></img>
      </div>
      <div className="text-center pt-3">
        <strong>{person.name}</strong>
      </div>
      <div className="text-center pt-1">
        <div>{person.position}</div>
      </div>
    </div>
  );
}

export default TeamMember;
