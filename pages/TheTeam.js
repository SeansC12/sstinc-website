import React, { useRef } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Person from "../components/Person";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Team } from "../public/data";

export default function TheTeam() {
  const image2 = `https://picsum.photos/2000/2000`;
  const parallaxBannerRef = useRef();

  const DreamTeam = Team;
  const indivTeamElement = [];
  for (const division in DreamTeam) {
    for (const member in DreamTeam[division]) {
      indivTeamElement.push(
        <Person personInfo={DreamTeam[division][member]} />
      );
    }
  }
  const lineSeparationVariant = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-[#001220] text-white">
      <Header tab={"The Team"} />

      <center>
        <Image
          src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no?authuser=0"
          width={180}
          height={180}
        />
      </center>

      <div className="text-center grid place-items-center">
        <h1 className="text-5xl py-8 mt-0 font-mono font-semibold">
          2022/23 Executive Committee
        </h1>
        <div className="grid lg:grid-cols-5 w-fit">
          {indivTeamElement.slice(0, 5).map((personElement, key) => {
            return <div key={key}>{personElement}</div>;
          })}
        </div>
        <div className="grid lg:grid-cols-4 w-fit">
          {indivTeamElement.slice(5, 9).map((personElement, key) => {
            return <div key={key}>{personElement}</div>;
          })}
        </div>
        <div className="grid lg:grid-cols-3 w-fit">
          {indivTeamElement.slice(9, 12).map((personElement, key) => {
            return <div key={key}>{personElement}</div>;
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={lineSeparationVariant}
          className="w-[70vw] h-[1px] bg-slate-400 mt-24"
        />

        <h1 className="text-5xl mt-24 mb-5 font-mono font-semibold">
          Board of Directors
        </h1>
        <div className="grid lg:grid-cols-4 m-10">
          {indivTeamElement.slice(12, 17).map((personElement, key) => {
            return <div key={key}>{personElement}</div>;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
