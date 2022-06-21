import React, { useState } from "react";
import { motion } from "framer-motion";

function SmallPostStreamCard({ data }) {
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
      className="relative h-[350px] sm:h-full max-w-[432px] max-h-[474px] border border-white rounded-xl overflow-hidden cursor-pointer"
    >
      <div className="shrink-0 overflow-hidden">
        <motion.img
          animate={isMouseHoveringOnCard ? "mouseHovering" : "mouseNotHovering"}
          variants={imageVariants}
          className="h-[150px] sm:h-[266px] w-full object-cover"
          src={data.image}
          alt="Never gonna give you up"
        />
      </div>
      <div className="relative flex flex-col justify-center items-start py-6 px-7">
        <div className="uppercase tracking-wide text-sm text-slate-300 font-medium">
          {data.genre}
        </div>
        <p className="mt-2 text-white text-lg sm:text-2xl font-semibold">
          {data.title}
        </p>
        <div className="absolute top-[159px] uppercase tracking-wide text-sm text-slate-300 font-medium">
          {data.date}
        </div>
      </div>
    </motion.div>
  );
}

export default SmallPostStreamCard;
