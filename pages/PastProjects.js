import React from "react";
import Header from "../components/header";
import { CodeIcon } from "@heroicons/react/solid";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";
import { initialiseApp } from "firebase/app";
import { isMobile } from "react-device-detect";

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
  },
  {
    title: "DevChat",
    subtitle: "React and Firebase",
    description: "more money => m1 pro",
    image: "https://picsum.photos/2000",
    id: 2,
  },
  {
    title: "Epic Todo App",
    subtitle: "React Hooks",
    description: "ooga booga",
    image: "https://picsum.photos/2000",
    id: 3,
  },
];

// const isMobile = window.innerWidth < 1250

function PastProjects() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <ParallaxProvider>
      <Header tab="pastprojects" />
      <main>
        <ParallaxBanner
          layers={[{ image: randomImage, speed: -50 }]}
          className="h-screen"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">Our projects</h1>
          </div>
        </ParallaxBanner>
        <div className="h-screen items-center flex">
          <div
            className={
              "w-screen justify-center items-center grid xl:grid-cols-2"
            }
          >
            {projects.map((e) => Project(e))}
          </div>
        </div>
      </main>
    </ParallaxProvider>
  );
}

function Project(info) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={
        "flex bg-opacity-50 h-60 border-4 m-14 rounded-xl justify-center place-items-center bg-[url('https://picsum.photos/2000')] hover:shadow-2xl"
      }
    >
      <div className="grid place-items-center justify-center mx-6">
        <p className="text-green-500 text-l xl:text-xl">{info.title}</p>
        <p className="text-blue-700 text-xl xl:text-3xl">{info.description}</p>
        <p className="text-black text-xl">{info.subtitle}</p>
      </div>
    </div>
    // <div
    // onClick={() => {setExpanded(!expanded)}}
    //   className={
    //     "h-48 w-screen justify-center place-items-center flex bg-[url('https://picsum.photos/2000')] hover:shadow-2xl"
    //   }
    // ></div>
  );
}

export default PastProjects;
