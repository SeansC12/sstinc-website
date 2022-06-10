import React, { useRef } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";

const randomImage = "https://picsum.photos/2000";
const backgroundImage =
  "https://lh3.googleusercontent.com/pw/AM-JKLVvuCKR6E5_5LTiEMAL9Wt2SsrZc1soVKrfOUBr0sdm7IKpc6BL0mbYW4pEssLTu-smp6dN0DC3nxgy1HeBtNUAfLhWWSY1o-jA_GySIesVFrtBaq-KPiksA_m_Ryi56qDSP6fd1VZAaB9IHgHfhRHZ=w1920-h1080-no?authuser=0";

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

const gradientColourScheme = "from-[#0d81fe] via-[#0bc3f0] to-[#00f9e2]";

function PastProjects() {
  return (
    <>
      <Header tab={"Past Projects"} />
      <div
        className={`bg-gradient-to-r ${gradientColourScheme} bg-black h-[75vh] w-full flex flex-col items-center justify-center text-white`}
      >
        <div className="text-center mb-28">
          <p className="text-7xl mb-20">Our Projects</p>
          <p className="text-xl mb-8">Project Scope</p>
          <div className="flex items-center w-full mt-8">
            <div className="grid grid-cols-[auto_48px_auto_48px_auto] text-2xl">
              <div className="col-start-1 col-end-2 font-semibold">
                iOS App Development
              </div>
              <div className="col-start-2 col-end-3 flex justify-center font-thin">
                /
              </div>
              <div className="col-start-3 col-end-4 font-semibold">
                Android App Development
              </div>
              <div className="col-start-4 col-end-5 flex justify-center font-thin">
                /
              </div>
              <div className="col-start-5 col-end-6 font-semibold">
                React JS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PastProjects;
