import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useOutsideClickAlerter from "../hooks/useOutsideClickAlerter";

function LargePostStreamCard({ data, didMouseClick }) {
  let [isMouseHoveringOnCard, setIsMouseHoveringOnCard] = useState();
  let [isMouseClicked, setIsMouseClicked] = useState(false);
  const descriptionRef = useRef();

  useOutsideClickAlerter(() => {
    setIsMouseClicked(false);
    setIsMouseHoveringOnCard(false);
  }, descriptionRef);

  console.log(isMouseClicked);

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
      {isMouseClicked ? (
        <AnimatePresence>
          <motion.div
            key="description"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="h-full relative flex items-center justify-center"
          >
            <div className="text-center font-lato text-lg sm:text-2xl font-semibold py-12 px-7">
              {data.description}
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            key="title"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.7 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="w-full h-full flex flex-col items-start justify-end absolute py-12 px-7 z-10"
          >
            <div className="uppercase tracking-wide text-sm font-medium">
              {data.genre}
            </div>
            <p className="mt-2 font-lato text-lg sm:text-2xl font-semibold">
              {data.title}
            </p>
            <div className="absolute top-[430px] uppercase tracking-wide text-sm font-medium">
              {data.date}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}

export default LargePostStreamCard;
