import React, { useRef } from "react";
import Header from "../components/Header";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import getWindowDimensions from "../hooks/getWindowDimensions";
import Image from "next/image";
import Person from "../components/Person";
import Footer from "../components/Footer";
import info from "../public/info.json"

const DreamTeam = info.DreamTeam;

const indivTeamElement = [];
for (const division in DreamTeam) {
  for (const member in DreamTeam[division]) {
    indivTeamElement.push(<Person personInfo={DreamTeam[division][member]} />);
  }
}

export default function AboutUs() {
  const image2 = `https://picsum.photos/2000/2000`;
  const parallaxBannerRef = useRef();
  return (
    <div>
      <Header tab="About Us" />

      {/* <div> */}
        {/* <ParallaxProvider>
          <div ref={parallaxBannerRef} className="h-screen">
            <ParallaxBanner
              layers={[
                {
                  image: image2,
                  speed: -75,
                },
              ]}
              className="h-full"
            >
              <div className="hidden sm:visible sm:absolute sm:inset-0 sm:grid sm:grid-cols-2 sm:mr-5">
                <div className="flex items-center justify-center col-start-2 col-end-3 flex-col">
                  <div className="font:Inter font-normal text-center text-white text-7xl border-b-2 border-white">
                    Who are we?
                  </div>
                  <div className="font:Inter font-normal text-center pt-5 text-white">
                    SST Inc. is the technology{" "}
                    <strong>Talent Development Programme</strong> in the School
                    of Science and Technology, Singapore. We are an incubator
                    that <strong>nurtures student employees</strong> in running{" "}
                    <strong>technology start-ups</strong> to serve communities
                    and <strong>better our world.</strong>
                  </div>
                </div>
              </div>
            </ParallaxBanner>
          </div>
        </ParallaxProvider> */}

        {/* {getWindowDimensions().width < 640 && (
          <div className="mx-6 mt-10">
            <div className="font:Inter font-normal text-center text-black text-3xl">
              <u>Who are we?</u>
            </div>
            <div className="font:Inter font-normal text-center pt-5 text-black text-sm">
              SST Inc. is the technology{" "}
              <strong>Talent Development Programme</strong> in the School of
              Science and Technology, Singapore. We are an incubator that{" "}
              <strong>nurtures student employees</strong> in running{" "}
              <strong>technology start-ups</strong> to serve communities and{" "}
              <strong>better our world.</strong>
            </div>
          </div>
        )} */}
        <center>
          <Image
            src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no?authuser=0"
            width={180}
            height={180}
          />
        </center>

        {/* <div className="grid grid-rows-3 sm:grid-rows-1 sm:grid sm:grid-cols-3">
          <div className="flex items-center justify-center row-start-1 row-end-2 sm:col-start-1 sm:col-end-2 ml-5">
            <ul className="sm:my-5 sm:ml-5 text-center list-disc text-xl">
              <li>We are based in Singapore!</li>
            </ul>
          </div>
          <div className="self-center sm:col-start-2 sm:col-end-3">
            <div className="flex items-center justify-center">
              <Image
                src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no?authuser=0"
                width={180}
                height={180}
              />
            </div>
          </div>
          <div className="flex items-center justify-center sm:col-start-3 sm:col-end-4">
            <ul className="sm:my-5 ml-5 text-center list-disc text-xl">
              <li>SST Inc. is the best!</li>
            </ul>
          </div>
        </div>
      </div> */}

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

        <div className="w-[70vw] h-[1px] bg-slate-400 mt-24" />
        <h1 className="text-5xl mt-24 mb-5 font-mono font-semibold">
          Board of Directors
        </h1>
        <div className="grid lg:grid-cols-4 m-10 mb-20">
          {indivTeamElement.slice(12, 17).map((personElement, key) => {
            return <div key={key}>{personElement}</div>;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
