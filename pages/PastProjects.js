import React, { useState } from "react";
import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";

function PastProjects() {
  const gradientColourScheme = "from-[#0d81fe] via-[#0bc3f0] to-[#00f9e2]";

  let [iosUnderline, setIOSUnderline] = useState(false);
  let [androidUnderline, setAndroidUnderline] = useState(false);
  let [reactUnderline, setReactUnderline] = useState(false);

  const projects = [
    {
      title: "Tasks App",
      subtitle: "SwiftUI",
      description: "An App that helps people do action",
    },
    {
      title: "React Tracks",
      subtitle: "React and Python",
      description: "failure",
      image: "https://picsum.photos/2000",
    },
  ];

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

  return (
    <>
      <Header tab={"Past Projects"} />
      <div
        className={`bg-gradient-to-r ${gradientColourScheme} bg-black h-[75vh] w-full flex flex-col items-center justify-center text-white`}
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
    </>
  );
}

export default PastProjects;
