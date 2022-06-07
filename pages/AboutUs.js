import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import getWindowDimensions from "../hooks/getWindowDimensions";
import Image from "next/image";

const people = [
  { image: "https://picsum.photos/150", name: "Test1" },
  { image: "https://picsum.photos/150", name: "Test2" },
  { image: "https://picsum.photos/150", name: "Test3" },
  { image: "https://picsum.photos/150", name: "Test4" },
  { image: "https://picsum.photos/150", name: "Test5" },
  { image: "https://picsum.photos/150", name: "Test6" },
  { image: "https://picsum.photos/150", name: "Test7" },
  { image: "https://picsum.photos/150", name: "Test8" },
  { image: "https://picsum.photos/150", name: "Test9" },
  { image: "https://picsum.photos/150", name: "Test10" },
  { image: "https://picsum.photos/150", name: "Test11" },
  { image: "https://picsum.photos/150", name: "Test12" },
];
const teacher = [
  { image: "https://picsum.photos/150", name: "Teacher1" },
  { image: "https://picsum.photos/150", name: "Teacher2" },
  { image: "https://picsum.photos/150", name: "Teacher3" },
  { image: "https://picsum.photos/150", name: "Teacher4" },
];

export default function AboutUs() {
  const image2 = `https://picsum.photos/2000/2000`;
  const parallaxBannerRef = useRef();
  return (
    <div>
      <Header tab="About Us" />

      <div className="h-screen">
        <ParallaxProvider>
          <div ref={parallaxBannerRef} className="h-3/4">
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
        </ParallaxProvider>

        {getWindowDimensions().width < 640 && (
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
        )}

        <div className="grid grid-rows-3 sm:grid-rows-1 sm:grid sm:grid-cols-3">
          <div className="flex items-center justify-center row-start-1 row-end-2 sm:col-start-1 sm:col-end-2 ml-5">
            <ul className="sm:my-5 sm:ml-5 text-center list-disc text-xl">
              <li>We are based in Singapore!</li>
            </ul>
          </div>
          <div className="self-center sm:col-start-2 sm:col-end-3">
            <div className="flex items-center justify-center">
              <Image
                src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no"
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
      </div>

      <div className="text-center grid place-items-center">
        <h1 className="text-5xl py-8 mt-16 font-mono font-semibold">
          2022/23 Executive Committee
        </h1>
        <div className="grid xl:grid-cols-5 w-fit">
          {[0, 1, 2, 3, 4].map((i) => {
            return <Person info={people[i]} />;
          })}
        </div>
        <div className="grid xl:grid-cols-4 w-fit">
          {[5, 6, 7, 8].map((i) => {
            return <Person info={people[i]} />;
          })}
        </div>
        <div className="grid xl:grid-cols-3 w-fit">
          {[9, 10, 11].map((i) => {
            return <Person info={people[i]} />;
          })}
        </div>

        <div className="w-[70vw] h-[1px] bg-slate-400 mt-10" />
        <h1 className="text-5xl mt-24 mb-5 font-mono font-semibold">
          Board of Directors
        </h1>
        <div className="grid xl:grid-cols-4 m-10">
          {[0, 1, 2, 3].map((t) => {
            return <Person info={teacher[t]} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Person(info) {
  let person = info.info;
  return (
    <div className="m-auto mt-10 mx-10">
      <img
        className="drop-shadow-md rounded-full border-orange-400 border-4"
        src={person.image}
      ></img>
      <p className="mt-5">{person.name}</p>
    </div>
  );
}
