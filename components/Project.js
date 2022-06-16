import React, { useState } from "react";
import { motion } from "framer-motion";

function Project({ projectInfo }) {
  const name = projectInfo.name;
  const description = projectInfo.description;
  const team = projectInfo.team;
  const imageLink = projectInfo.imageLink;

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
      onClick={() => {
        setIsMouseHoveringOnProject(true);
        isMouseHoveringOnProject.freeze();
      }}
      className="cursor-pointer"
    >
      <motion.img
        initial={false}
        animate={
          isMouseHoveringOnProject ? "mouseHovering" : "mouseNotHovering"
        }
        variants={imageVariant}
        className="object-cover mb-10"
        width={580}
        height={594}
        src={imageLink}
      />
      <h1 className="text-5xl mb-6">{name}</h1>
      <div className="flex flex-row">
        <motion.div
          initial={false}
          animate={
            isMouseHoveringOnProject ? "mouseHovering" : "mouseNotHovering"
          }
          variants={lineVariant}
          className="ml-5 border-l-[1px] h-[70px] border-white"
        />
        <div>
          <motion.h2
            initial={false}
            animate={
              isMouseHoveringOnProject ? "mouseHovering" : "mouseNotHovering"
            }
            variants={textVariant}
            className="text-lg mb-2"
          >
            {description}
          </motion.h2>
          <motion.h3
            initial={false}
            animate={
              isMouseHoveringOnProject ? "mouseHovering" : "mouseNotHovering"
            }
            variants={textVariant}
            className="text-lg font-extralight"
          >
            {team}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
