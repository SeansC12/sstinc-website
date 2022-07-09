import React from "react";

export default function RickRoll() {
  return (
    <div>
      <iframe
        style={{ width: "100vw", height: "100vh" }}
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
