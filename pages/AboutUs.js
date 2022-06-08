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

      <div>
        <ParallaxProvider>
          <div ref={parallaxBannerRef} className="h-screen">
            <ParallaxBanner
              layers={[
                {
                  image: image2,
                  speed: -75,
                },
              ]}
              className="h-screen"
            >
              {getWindowDimensions().width >= 1000 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="mx-6 mt-10 text-center w-1/2 pb-28">
                    <p className="text-4xl font-semibold">Who are we?</p>
                    <p className="text-xl mt-5 mb-10">
                      SST Inc. is the technology{" "}
                      <strong>Talent Development Programme</strong> in the
                      School of Science and Technology, Singapore. We are an
                      incubator that <strong>nurtures student employees</strong>{" "}
                      in running <strong>technology start-ups</strong> to serve
                      communities and <strong>better our world.</strong>
                    </p>
                  </div>
                </div>
              )}
            </ParallaxBanner>
          </div>
        </ParallaxProvider>

        {getWindowDimensions().width < 1000 && (
          <div className="mx-6 mt-10 text-center">
            <div className="">
              <p className="text-4xl font-semibold">Who are we?</p>
              <p className="text-xl mt-5 mb-10">
                SST Inc. is the technology{" "}
                <strong>Talent Development Programme</strong> in the School of
                Science and Technology, Singapore. We are an incubator that{" "}
                <strong>nurtures student employees</strong> in running{" "}
                <strong>technology start-ups</strong> to serve communities and{" "}
                <strong>better our world.</strong>
              </p>
            </div>
          </div>
        )}
        <div className="grid md:grid-cols-3 place-items-center text-center">
          <div className="text-2xl lg:text-3xl m-10">
            We are based in Singapore!
          </div>
          <img
            className="w-48"
            src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no"
          ></img>
          <div className="text-2xl lg:text-3xl m-10">SST Inc. is the best!</div>
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
      <footer className="bg-slate-800 w-[99vw] h-[50vh] text-white p-10 grid md:flex">
        <div className="w-1/2 grid space-y-1 h-fit justify-center text-center">
          <h1 className=" text-4xl mb-3">SST Inc HQ</h1>
          <p>School of Science and Technology, Singapore</p>
          <p>Block C, Level 3</p>
          <p>1 Technology Drive, Singapore 138572</p>
          <br />
          <p>
            Email:{" "}
            <a href="mailto:contact@sstinc.org">
              <strong>contact@sstinc.org</strong>
            </a>
          </p>
          <p>
            Operating hours: Mondays, <strong>14:30</strong> to{" "}
            <strong>17:00</strong>
          </p>
          
          <p className="text-2xl">Socials</p>
          <div className="pt-10">
            <a href="https://instagram.com/sstincorporated">
              <img
                className="w-16"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
              ></img>
            </a>
          </div>
        </div>
        <div className="h-0 md:h-full w-0 md:w-[1px] bg-slate-400 m-0 md:mx-10" />
        <div className="float-right w-1/2 mr-10">
          <p className="text-2xl">Contact Us</p>
          <p className="Email:"></p>
          <form
            className="grid space-y-4 mt-5 text-sm text-black place-items-center"
            action="https://formsubmit.co/phr256@gmail.com"
            method="POST"
          >
            <input
              type="text"
              className="rounded-full px-3 py-2 h-8 w-full"
              name="Name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="rounded-full px-3 py-2 h-8 w-full"
              name="Email"
              placeholder="Email"
              required
            />
            <textarea
              type="pa"
              className="rounded-2xl px-3 py-2 h-28 w-full"
              name="Description"
              placeholder="Description"
              required
            />

            <button
              type="submit"
              className="bg-zinc-300 text-black rounded drop-shadow-2xl hover:shadow-white w-24 h-8"
            >
              Send
            </button>
          </form>
        </div>
      </footer>
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
