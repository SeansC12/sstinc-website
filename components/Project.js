import React from "react";

function Project() {
  const image = "https://picsum.photos/200";
  const name = "Clicker App";
  const description = "An app that counts how many times u clicked it";
  const team = "Aurelius Yeo";

  return (
    <div>
      <img
        className="object-cover mb-10"
        width={580}
        height={594}
        src={image}
      />
      <h1 className="text-6xl mb-6">{name}</h1>
      <h2 className="text-xl mb-2">{description}</h2>
      <h3 className="text-lg text-gray-800 font-light">{team}</h3>
    </div>
  );
}

export default Project;
