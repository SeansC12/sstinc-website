import React, { useState } from "react";
import { motion } from "framer-motion";

function LargePostStreamCard({ data }) {
  let [isMouseHoveringOnCard, setIsMouseHoveringOnCard] = useState();

  const postStreamCardVariants = {
    mouseHovering: {
      scale: 1,
    },
    mouseNotHovering: {
      scale: 1,
    },
  };
  const imageVariants = {
    mouseHovering: {
      opacity: 0.75,
      scale: 1.05,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    mouseNotHovering: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="mouseNotHovering"
      whileHover="mouseHovering"
      onMouseEnter={() => {
        setIsMouseHoveringOnCard(true);
      }}
      onMouseLeave={() => {
        setIsMouseHoveringOnCard(false);
      }}
      variants={postStreamCardVariants}
      className="inline-block relative w-full h-[468px] border border-white text-white rounded-xl overflow-hidden cursor-pointer"
    >
      <div className="shrink-0 overflow-hidden">
        <motion.img
          animate={isMouseHoveringOnCard ? "mouseHovering" : "mouseNotHovering"}
          variants={imageVariants}
          className="h-full w-full absolute object-cover brightness-75"
          src={data.image}
          alt="Never gonna give you up"
        />
      </div>
      <div className="w-full h-full flex flex-col items-start justify-end absolute py-12 px-7 z-10">
        <div className="uppercase tracking-wide text-sm font-medium">
          {data.genre}
        </div>
        <p className="mt-2 text-lg sm:text-2xl font-semibold">{data.title}</p>
        <div className="absolute top-[430px] uppercase tracking-wide text-sm font-medium">
          {data.date}
        </div>
      </div>
    </motion.div>
  );
}

export default LargePostStreamCard;
