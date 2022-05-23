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
            className="h-screen object-cover opacity-30 absolute  w-screen"
            src="projectSFIMg.jpeg"
          ></img>
          <div className="h-screen flex items-center justify-center relative">
            <div>
              <p className="text-xl md:text-3xl text-center my-2">
                Passionate about technology?
              </p>
              <p className="text-m md:text-2xl text-center">
                Join SST Inc today!
              </p>
              <div className="flex justify-center mt-3">
                <button className="h-10 bg-blue-600 text-white opacity-100 rounded-full px-5 my-6 mx-3">
                  <a href="https://forms.gle/ghnwWXnfrS1pXpUe7" target={"_blank"}>Apply now</a>
                </button>
                <button className="h-10 bg-blue-600 text-white opacity-100 rounded-full px-5 my-6 mx-3">
                  <Link href="/AboutUs">Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-screen h-5 bg-white"></div> */}

        <div className="items-center md:grid md:grid-cols-2 m-5">
          <div className="justify-center text-center mr-5">
            <p className="text-xl md:text-3xl">
              Want to know more about us?
            </p>
            <p className="text-m">
              Check out some of our past accomplishments
            </p>
            <button className="h-10 bg-blue-500 text-white opacity-100 rounded-full px-5 mt-5 mb-6">
              <Link href="/PastProjects">Check it out</Link>
            </button>
          </div>
          <div className="lg:my-16 mx-5">
            <img className="rounded-3xl" src="homeBottomImg.jpeg" />
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
