import React, { useState, useRef } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Project from "../components/Project";

function PastProjects() {
  const gradientColourScheme =
    "bg-gradient-to-r from-[#0d81fe] via-[#0bc3f0] to-[#00f9e2]";

  let [iosUnderline, setIOSUnderline] = useState(false);
  const iosRef = useRef();
  let [androidUnderline, setAndroidUnderline] = useState(false);
  const androidRef = useRef();
  let [reactUnderline, setReactUnderline] = useState(false);
  const reactRef = useRef();

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
      block: "middle",
    });
  };

  return (
    <div className="relative">
      <Header tab={"Past Projects"} />
      <div
        className={`bg-[#0d81fe] h-[60vh] w-full flex flex-col items-center justify-center text-white z-0 relative`}
      >
        <div className="text-center mb-28 mt-16">
          <p className="text-7xl mb-20">Our Projects</p>
          <p className="text-xl mb-8">Project Scope</p>
          <div className="flex items-center w-full mt-8">
            <div className="grid grid-cols-[auto_48px_auto_48px_auto] text-2xl">
              <motion.div
                className="col-start-1 col-end-2 font-semibold cursor-pointer"
                initial="hidden"
                whileHover="visible"
                variants={frameworkNameDivVariants}
                onMouseEnter={() => {
                  setIOSUnderline(true);
                  console.log("Hovering");
                }}
                onMouseLeave={() => {
                  setIOSUnderline(false);
                  console.log("Mouse left");
                }}
                onClick={executeIOSScroll}
              >
                <p>iOS App Development</p>
                <motion.div
                  className="border border-white"
                  initial={false}
                  animate={iosUnderline ? "visible" : "hidden"}
                  variants={underlineVariants}
                />
              </motion.div>
              <div className="col-start-2 col-end-3 flex justify-center font-thin">
                /
              </div>
              <motion.div
                className="col-start-3 col-end-4 font-semibold cursor-pointer"
                initial="hidden"
                whileHover="visible"
                variants={frameworkNameDivVariants}
                onMouseEnter={() => {
                  setAndroidUnderline(true);
                  console.log("Hovering");
                }}
                onMouseLeave={() => {
                  setAndroidUnderline(false);
                  console.log("Mouse left");
                }}
                onClick={executeAndroidScroll}
              >
                <p>Android App Development</p>
                <motion.div
                  className="border border-white"
                  initial={false}
                  animate={androidUnderline ? "visible" : "hidden"}
                  variants={underlineVariants}
                />
              </motion.div>
              <div className="col-start-4 col-end-5 flex justify-center font-thin">
                /
              </div>
              <motion.div
                className="col-start-5 col-end-6 font-semibold cursor-pointer"
                initial="hidden"
                whileHover="visible"
                variants={frameworkNameDivVariants}
                onMouseEnter={() => {
                  setReactUnderline(true);
                  console.log("Hovering");
                }}
                onMouseLeave={() => {
                  setReactUnderline(false);
                  console.log("Mouse left");
                }}
                onClick={executeReactScroll}
              >
                <p>React JS</p>
                <motion.div
                  className="border border-white"
                  initial={false}
                  animate={reactUnderline ? "visible" : "hidden"}
                  variants={underlineVariants}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* bg-no-repeat bg-center bg-cover */}

      <div className="aspect-[1440/260] bg-[url('../svg/layered-waves-4.svg')]" />

      <div>
        <h1 ref={iosRef} className="mt-11 mb-10 lg:mt-0 text-center text-4xl">
          iOS App Development
        </h1>
        <div className="flex justify-around items-center">
          <Project />
          <Project />
        </div>
      </div>

      <div>
        <h1
          ref={androidRef}
          className="mt-11 mb-10 lg:mt-0 text-center text-4xl"
        >
          Android App Development
        </h1>
        <div className="flex justify-around items-center">
          <Project />
          <Project />
        </div>
      </div>
      <div>
        <h1 ref={reactRef} className="mt-11 mb-10 lg:mt-0 text-center text-4xl">
          React JS
        </h1>
        <div className="flex justify-around items-center">
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default PastProjects;
