import React from "react";
import { motion } from "framer-motion";

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

export default function Loader() {
  return (
    <div className="pt-4 w-20 flex justify-center items-center">
      <motion.div
        className="w-40 h-20 flex justify-around py-20"
        variants={ContainerVariants}
        animate="animate"
      >
        <motion.span
          className="block w-4 h-4 bg-white rounded-full"
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className="block w-4 h-4 bg-white rounded-full"
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className="block w-4 h-4 bg-white rounded-full"
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
}
