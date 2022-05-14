import React from "react";
import Header from "../components/header";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { useState } from "react";

const randomImage = "https://picsum.photos/2000";

const projects = [
  {
    title: "Tasks App",
    subtitle: "SwiftUI",
    description: "An App that helps people do action",
    image: "https://picsum.photos/2000",
    id: 0,
  },
  {
    title: "React Tracks",
    subtitle: "React and Python",
    description: "failure",
    image: "https://picsum.photos/2000",
    id: 1,
  }
];

function PastProjects() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <ParallaxProvider>
      <Header tab="Past Projects" />
      <main>
        <ParallaxBanner
          layers={[{ image: randomImage, speed: -50 }]}
          className="h-screen"
        >
          <div className="absolute inset-0 flex items-center">
            <h1 className="text-6xl w-screen text-center text-white font-thin md:text-8xl">Our projects</h1>
          </div>
        </ParallaxBanner>
        {/* <div className="h-screen items-center flex">
          <div
            className={
              "w-screen justify-center items-center grid xl:grid-cols-2"
            }
          >
            {projects.map((e) => Project(e))}
          </div>
          
        </div> */}
        <div className="w-screen">{projects.map((e) => Project(e))}</div>
      </main>
    </ParallaxProvider>
  );
}

function Project(info) {
  const [expanded, setExpanded] = useState(false);
  return (
    // <div
    //   className={
    //     "flex bg-opacity-50 h-60 border-4 m-14 rounded-xl justify-center place-items-center bg-[url('https://picsum.photos/2000')] hover:shadow-2xl"
    //   }
    // >
    //   <div className="grid place-items-center justify-center mx-6">
    //     <p className="text-green-500 text-l xl:text-xl">{info.title}</p>
    //     <p className="text-blue-700 text-xl xl:text-3xl">{info.description}</p>
    //     <p className="text-black text-xl">{info.subtitle}</p>
    //   </div>
    // </div>
    <div className="w-screen h-screen mt-5">
      <img
        className="h-screen object-cover w-screen opacity-30 absolute z-0"
        src={info.image}
        
      ></img>
      <div className="h-screen flex items-center justify-center relative z-20">
        <div>
          <p className="text-l xl:text-xl">{info.title}</p>
          <p className="text-xl xl:text-3xl">{info.description}</p>
          <p className="text-xl">{info.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default PastProjects;
