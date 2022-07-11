import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useOutsideClickAlerter from "../hooks/useOutsideClickAlerter";

function SmallPostStreamCard({ data }) {
  let [isMouseHoveringOnCard, setIsMouseHoveringOnCard] = useState();
  let [isMouseClicked, setIsMouseClicked] = useState(false);
  const descriptionRef = useRef();

  useOutsideClickAlerter(() => {
    setIsMouseClicked(false);
    setIsMouseHoveringOnCard(false);
  }, descriptionRef);

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
        if (!isMouseClicked) setIsMouseHoveringOnCard(false);
      }}
      onClick={() => {
        setIsMouseClicked((curr) => !curr);
        setIsMouseHoveringOnCard((curr) => !curr);
      }}
      variants={postStreamCardVariants}
      ref={descriptionRef}
      className="relative sm:h-full max-w-[432px] max-h-[474px] border border-white rounded-xl overflow-hidden cursor-pointer"
    >
      <div className="shrink-0">
        <div className="overflow-hidden">
          <motion.img
            animate={
              isMouseHoveringOnCard ? "mouseHovering" : "mouseNotHovering"
            }
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
          {isMouseClicked ? (
            <AnimatePresence>
              <motion.p
                key="description"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.7 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                className="mt-2 text-white font-lato text-lg sm:text-2xl font-semibold"
              >
                {data.description}
              </motion.p>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.p
                key="title"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.7 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                className="mt-2 text-white font-lato text-lg sm:text-2xl font-semibold"
              >
                {data.title}
              </motion.p>
            </AnimatePresence>
          )}
          <div className="absolute top-[159px] uppercase tracking-wide text-sm text-slate-300 font-medium">
            {data.date}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SmallPostStreamCard;
