import React, { useState } from "react";
import { motion } from "framer-motion";
import getWindowDimensions from "../hooks/getWindowDimensions";

function Project({ projectInfo }) {
  const name = projectInfo.name;
  const description = projectInfo.description;
  const team = projectInfo.team;
  const imageLink = projectInfo.imageLink;
  let imageWidth = 0;
  let imageHeight = 0;

  let [isMouseHoveringOnProject, setIsMouseHoveringOnProject] = useState(false);

  const projectDivVariant = {
    mouseHovering: {
      scale: 1,
    },
    mouseNotHovering: {
      scale: 1,
    },
  };

  const imageVariant = {
    mouseHovering: {
      scale: 0.95,
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
    mouseNotHovering: {
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
  };

  const textVariant = {
    mouseHovering: {
      x: 25,
      originX: 0,
      transition: {
        type: "tween",
        duration: "0.4",
      },
    },
    mouseNotHovering: {
      x: 0,
      transition: {
        type: "tween",
        duration: "0.4",
      },
    },
  };

  const lineVariant = {
    mouseHovering: {
      scale: 1,
      originX: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        delay: 0.1,
      },
    },
    mouseNotHovering: {
      scale: 0,
      originY: 0,
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
  };

  if (getWindowDimensions().width < 640) {
    imageWidth = 280;
    imageHeight = 294;
  } else {
    imageWidth = 580;
    imageHeight = 594;
  }

  return (
    <motion.div
      initial="mouseNotHovering"
      whileHover="mouseHovering"
      variants={projectDivVariant}
      onMouseEnter={() => {
        setIsMouseHoveringOnProject(true);
      }}
      onMouseLeave={() => {
        setIsMouseHoveringOnProject(false);
      }}
      className="cursor-pointer"
    >
      <motion.img
        initial={false}
        animate={
          isMouseHoveringOnProject ? "mouseHovering" : "mouseNotHovering"
        }
        variants={imageVariant}
        className="object-cover mb-4 sm:mb-10 rounded-xl"
        width={imageWidth}
        height={imageHeight}
        src={imageLink}
      />
      <h1 className="text-3xl mb-2 lg:text-5xl sm:mb-6">{name}</h1>
      <div className="flex flex-row relative">
        <motion.div
          initial={false}
          animate={
            isMouseHoveringOnProject ? "mouseHovering" : "mouseNotHovering"
          }
          variants={lineVariant}
          className="absolute left-[6px] border-l-[1px] sm:h-[70px] h-[55px] border-white"
        />
        <div>
          <motion.h2
            initial={false}
            animate={
              isMouseHoveringOnProject ? "mouseHovering" : "mouseNotHovering"
            }
            variants={textVariant}
            className="text-base lg:text-lg mb-2"
          >
            {description}
          </motion.h2>
          <motion.h3
            initial={false}
            animate={
              isMouseHoveringOnProject ? "mouseHovering" : "mouseNotHovering"
            }
            variants={textVariant}
            className="text-base lg:text-lg font-extralight"
          >
            {team}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
