import React, { useState, useRef } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Project from "../components/Project";
import getWindowDimensions from "../hooks/getWindowDimensions";
import Footer from "../components/Footer";
import { Projects } from "../public/data";

export default function OurProjects() {
  const projects = Projects;

  let [iosUnderline, setIOSUnderline] = useState(false);
  const iosRef = useRef();
  let [androidUnderline, setAndroidUnderline] = useState(false);
  const androidRef = useRef();
  let [reactUnderline, setReactUnderline] = useState(false);
  const reactRef = useRef();

  const iosProjectComponents = [];
  const androidProjectComponents = [];
  const reactProjectComponents = [];

  const keys = Object.keys(projects);
  const ios = keys[0];
  const android = keys[1];
  const react = keys[2];

  for (const project in projects[ios]) {
    const projectInfo = projects[ios][project];
    iosProjectComponents.push(<Project projectInfo={projectInfo} />);
  }
  for (const project in projects[android]) {
    androidProjectComponents.push(
      <Project projectInfo={projects[android][project]} />
    );
  }
  for (const project in projects[react]) {
    reactProjectComponents.push(
      <Project projectInfo={projects[react][project]} />
    );
  }

  const frameworkNameDivVariants = {
    hidden: {
      scale: 1,
    },
    visible: {
      scale: 1,
    },
  };

  const underlineVariants = {
    hidden: {
      scale: 0,
      originX: 0,
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
    visible: {
      scale: 1,
      originX: 0,
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
  };

  const frameworkDividngLineVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.8,
      },
    },
  };

  const executeIOSScroll = () => {
    iosRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const executeAndroidScroll = () => {
    androidRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const executeReactScroll = () => {
    reactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  let [underline, setUnderline] = useState(
    getWindowDimensions().width <= 640 ? (
      <div className="border border-white" />
    ) : (
      <motion.div
        className="border border-white"
        initial={false}
        animate={androidUnderline ? "visible" : "hidden"}
        variants={underlineVariants}
      />
    )
  );

  return (
    <div className="bg-[#001220] text-white">
      <Header tab={"Our Projects"} />
      <div className="bg-[#0d81fe] h-[60vh] w-full flex flex-col items-center justify-center text-white z-0 relative">
        <div className="mt-36 text-center">
          <p className="text-4xl sm:text-7xl mb-20 font-lato">Our Projects</p>
          <p className="text-xl mb-8 font-lato">Project Scope</p>
          <div className="flex items-center w-full mt-8">
            <div className="grid grid-rows-3 sm:grid-cols-[auto_48px_auto_48px_auto] text-2xl">
              <motion.div
                className="mb-4 sm:mb-0 sm:col-start-1 sm:col-end-2 font-semibold font-mono cursor-pointer"
                initial="hidden"
                whileHover="visible"
                variants={frameworkNameDivVariants}
                onMouseEnter={() => {
                  setIOSUnderline(true);
                }}
                onMouseLeave={() => {
                  setIOSUnderline(false);
                }}
                onClick={executeIOSScroll}
              >
                <div className="inline-block">
                  <p className="text-base font-medium sm:text-2xl">
                    iOS App Development
                  </p>
                  {getWindowDimensions().width <= 640 ? (
                    <div className="border border-white" />
                  ) : (
                    <motion.div
                      className="border border-white"
                      initial={false}
                      animate={iosUnderline ? "visible" : "hidden"}
                      variants={underlineVariants}
                    />
                  )}
                </div>
              </motion.div>
              <div className="hidden sm:col-start-2 sm:col-end-3 sm:flex sm:justify-center sm:font-normal">
                /
              </div>
              <motion.div
                className="sm:col-start-3 sm:col-end-4 font-semibold font-mono cursor-pointer"
                initial="hidden"
                whileHover="visible"
                variants={frameworkNameDivVariants}
                onMouseEnter={() => {
                  setAndroidUnderline(true);
                }}
                onMouseLeave={() => {
                  setAndroidUnderline(false);
                }}
                onClick={executeAndroidScroll}
              >
                <div className="inline-block">
                  <p className="text-base font-medium sm:text-2xl">
                    Android App Development
                  </p>
                  {getWindowDimensions().width <= 640 ? (
                    <div className="border border-white" />
                  ) : (
                    <motion.div
                      className="border border-white"
                      initial={false}
                      animate={androidUnderline ? "visible" : "hidden"}
                      variants={underlineVariants}
                    />
                  )}
                </div>
              </motion.div>
              <div className="hidden sm:col-start-4 sm:col-end-5 sm:flex sm:justify-center sm:font-normal">
                /
              </div>
              <motion.div
                className="sm:col-start-5 sm:col-end-6 font-semibold font-mono cursor-pointer"
                initial="hidden"
                whileHover="visible"
                variants={frameworkNameDivVariants}
                onMouseEnter={() => {
                  setReactUnderline(true);
                }}
                onMouseLeave={() => {
                  setReactUnderline(false);
                }}
                onClick={executeReactScroll}
              >
                <div className="inline-block">
                  <p className="text-base font-medium sm:text-2xl">React JS</p>
                  {getWindowDimensions().width <= 640 ? (
                    <div className="border border-white" />
                  ) : (
                    <motion.div
                      className="border border-white"
                      initial={false}
                      animate={reactUnderline ? "visible" : "hidden"}
                      variants={underlineVariants}
                    />
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* bg-no-repeat bg-center bg-cover */}

      <div className="aspect-[1440/260] w-full h-260px bg-[url('../svg/layered-waves-4.svg')] bg-cover" />

      <div className="font-lato">
        <div>
          <h1 ref={iosRef} className="mt-11 mb-10 lg:mt-0 text-center text-4xl">
            iOS App Development
          </h1>
          <div className="flex flex-col items-center mx-5 sm:mx-0 lg:flex-row lg:justify-around">
            {iosProjectComponents.map((project, key) => {
              return (
                <div className="mb-12 lg:mb-0" key={key}>
                  {project}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={frameworkDividngLineVariants}
            className="w-[70vw] h-[1px] bg-slate-400 md:mt-20 md:mb-20"
          />
        </div>

        <div>
          <h1
            ref={androidRef}
            className="mt-11 mb-10 lg:mt-0 text-center text-4xl"
          >
            Android App Development
          </h1>
          <div className="flex flex-col items-center mx-5 sm:mx-0 lg:flex-row lg:justify-around">
            {androidProjectComponents.map((project, key) => {
              return (
                <div className="mb-12 lg:mb-0" key={key}>
                  {project}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={frameworkDividngLineVariants}
            className="w-[70vw] h-[1px] bg-slate-400 mt-20 mb-20"
          />
        </div>

        <div className="pb-20">
          <h1
            ref={reactRef}
            className="mt-11 mb-10 lg:mt-0 text-center text-4xl"
          >
            React JS
          </h1>
          <div className="flex flex-col items-center mx-5 sm:mx-0 lg:flex-row lg:justify-around">
            {reactProjectComponents.map((project, key) => {
              return (
                <div className="mb-12 lg:mb-0" key={key}>
                  {project}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
