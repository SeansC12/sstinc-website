import React from "react";
import Header from "../components/Header";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import Project from "../components/Project";

const randomImage = "https://picsum.photos/2000"

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
  },
];

function PastProjects() {
  return (
    <ParallaxProvider>
      <Header tab="Past Projects" />
      <main>
        <ParallaxBanner
          layers={[{ image: randomImage, speed: -50 }]}
          className="h-screen"
        >
          <div className="absolute inset-0 flex items-center">
            <h1 className="text-6xl w-screen text-center text-white font-thin md:text-8xl">
              Our projects
            </h1>
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
        <div className="w-screen">
          {projects.map((e) => (
            <Project key={projects.indexOf(e)} project={e} />
          ))}
        </div>
      </main>
    </ParallaxProvider>
  );
}

export default PastProjects;
