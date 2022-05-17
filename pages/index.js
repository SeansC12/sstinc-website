import React from "react";
import Header from "../components/Header";
import "../public/homeTopImg.jpeg";
import "../public/homeBottomImg.jpeg";
import "../public/im1.png";
import "../public/projectSFIMg.jpeg";

export default function Home() {
  return (
    <div>
      <Header tab="Home" />
      <div>
        <div>
          <img
            className="h-screen object-cover w-screen opacity-30 absolute z-0"
            src="projectSFIMg.jpeg"
          ></img>
          <div className="h-screen flex items-center justify-center relative z-20">
            <div>
              <p className="text-xl md:text-3xl text-center w-screen my-2">
                Passionate about technology?
              </p>
              <p className="text-m md:text-2xl text-center w-screen">
                Join SST Inc today!
              </p>
              <div className="flex justify-center w-screen">
                <button className=" h-10 bg-blue-500 opacity-100 rounded-full px-3 mt-5">
                  <a href="https://forms.gle/ghnwWXnfrS1pXpUe7">Apply now</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen h-5 bg-white"></div>

        <div className="my-5 w-screen items-center md:grid md:grid-cols-2">
          <div className="mx-5 justify-center text-center my-5">
            <p className="text-xl md:text-3xl">
              See what we've done in the past
            </p>
            <p className="text-m ">
              At Inc, we thrive to help the community by making apps which
              improve their lives blhahahah
            </p>
            <button className="h-10 bg-blue-500 opacity-100 rounded-full px-5 mt-5">
              <a href="/PastProjects">Go</a>
            </button>
          </div>
          <div className="mx-9">
            <img className="rounded-3xl" src="homeBottomImg.jpeg"></img>
          </div>
        </div>
        <div>
          <img
            className="h-screen object-cover w-screen opacity-30 absolute z-0"
            src="homeTopImg.jpeg"
          ></img>
          <div className="h-screen flex items-center justify-center relative z-20">
            <div>
              <p className="text-2xl text-center w-screen my-2">
                INCamp was a blast!
              </p>
              <p className="text-3xl text-center w-screen">
                Check out our highlights
              </p>
              <div className="flex justify-center w-screen">
                <button className=" h-10 bg-blue-500 opacity-100 rounded-full px-3 mt-5">
                  <a href="https://youtube.com">Watch video</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
