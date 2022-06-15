import React from "react";

function Project() {
  const image = "https://picsum.photos/200";

  return (
    <div>
      <img className="object-cover" width={580} height={594} src={image}></img>
    </div>
  );
}

export default Project;
