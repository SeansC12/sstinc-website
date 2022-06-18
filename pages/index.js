import React from "react";
import Header from "../components/Header";
import "../public/homeTopImg.jpeg";
import "../public/homeBottomImg.jpeg";
import "../public/im1.png";
import "../public/projectSFIMg.jpeg";
import Link from "next/link";
import "../public/androidLogo.svg";
import "../public/reactLogo.svg";
import "../public/swiftLogo.png";
import "../public/homeWaves.svg";
import Footer from "../components/Footer";
import { motion, useAnimation } from "framer-motion";

const courses = [
  {
    name: "React",
    image: "../public/reactLogo.svg",
  },
  {
    name: "iOS",
    image: "../public/swiftLogo.png",
  },
  {
    name: "Android",
    image: "../public/androidLogo.svg",
  },
];

export default function Home() {
  const courseHeader = useAnimation()

  return (
    <div>
      <Header tab="Home" />
      <main>
        <img
          src="homeWaves.svg"
          className="w-full h-screen object-cover absolute"
        />
        <div className="relative">
          <div className="items-center h-screen pb-20 flex justify-center">
            <div className=" h-fit grid place-items-center space-y-0">
              <motion.img
                className="h-40 mb-10"
                src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no"
                animate={{ scale: 1.4 }}
                transition={{ delay: 0.1, type: "spring" }}
              ></motion.img>
            </div>
          </div>
          <div className="h-screen bg-[#DC4267] flex justify-center items-center relative">
            <motion.h3 animate={courseHeader} className="w-fit">Our Courses</motion.h3>
          </div>
        </div>
      </main>
      {/* <Footer className="absolute" /> */}
    </div>
  );
}
