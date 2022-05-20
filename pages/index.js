import React from "react";
import Header from "../components/Header";
import "../public/homeTopImg.jpeg";
import "../public/homeBottomImg.jpeg";
import "../public/im1.png";
import "../public/projectSFIMg.jpeg";
import Link from "next/link";

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
                <button className="h-10 bg-blue-500 opacity-100 rounded-full px-5 mt-5">
                  <a href="https://forms.gle/ghnwWXnfrS1pXpUe7" target={"_blank"}>Apply now</a>
                </button>
                <button className="h-10 bg-blue-500 opacity-100 rounded-full px-5 mt-5 ml-5">
                  <Link href="/AboutUs">Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen h-5 bg-white"></div>

        <div className="items-center md:grid md:grid-cols-2 m-5">
          <div className="justify-center text-center mr-5">
            <p className="text-xl md:text-3xl">
              See what we've done in the past
            </p>
            <p className="text-m">
              At Inc, we thrive to help the community by making apps which
              improve their lives blhahahah
            </p>
            <button className="h-10 bg-blue-500 opacity-100 rounded-full px-5 mt-3 mb-6">
              <Link href="/PastProjects">Go</Link>
            </button>
          </div>
          <div className="my-5">
            <img className="rounded-3xl -mt-5" src="homeBottomImg.jpeg"></img>
          </div>
        </div>

        {/* <div>
          <img
            className="h-screen object-cover w-screen opacity-30 absolute z-0"
            src="homeTopImg.jpeg"
          />
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
        </div> */}
      </div>
    </div>
  );
}
