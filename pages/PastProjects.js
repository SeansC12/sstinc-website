import React from "react";
import Header from "../components/header";
import { CodeIcon } from "@heroicons/react/solid";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

const projects = [
  {
    title: "Tasks App",
    subtitle: "SwiftUI",
    description: "An App that helps people do action",
    image: "https://picsum.photos/2004",
  },
  {
    title: "React Tracks",
    subtitle: "React and Python",
    description: "failure",
    image: "https://picsum.photos/2003",
  },
  {
    title: "DevChat",
    subtitle: "React and Firebase",
    description: "more money => m1 pro",
    image: "https://picsum.photos/2002",
  },
  {
    title: "Epic Todo App",
    subtitle: "React Hooks",
    description: "ooga booga",
    image: "https://picsum.photos/2001",
  },
];

function gallery() {
  return (
    <ParallaxProvider>
      <Header tab="pastprojects" />
      <main className="bg-blue-700">
        <ParallaxBanner
          layers={[{ image: "https://picsum.photos/2000", speed: -50 }]}
          className="aspect-[16/9] "
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">Our projects</h1>
          </div>
        </ParallaxBanner>
        <PastPorjectSection />
      </main>
    </ParallaxProvider>
  );
}

export default gallery;

function PastPorjectSection() {
  return (
    <div className="container px-5 py-10 mx-auto text-center lg:px-40 grow">
      <div className="flex flex-col w-full mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Apps we've Built
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          These are some of the many apps Inc has built for the community
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.image}
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function topSection() {
  return (
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          At SST Inc,
          <br className="hidden lg:inline-block" />
          We love to build amazing apps.
        </h1>
        <p className="mb-8 leading-relaxed text-2xl">
          SST Inc employees have made designed and implemented countless
          applications for the community
        </p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="https://picsum.photos/200"
        />
      </div>
    </div>
  );
}
