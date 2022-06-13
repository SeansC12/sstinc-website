import React from "react";
import Header from "../components/Header";
import "../public/homeTopImg.jpeg";
import "../public/homeBottomImg.jpeg";
import "../public/im1.png";
import "../public/projectSFIMg.jpeg";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header tab="Home" />
      <div>
        <div>
          <img
            className="h-screen object-cover opacity-40 w-screen absolute"
            src="projectSFIMg.jpeg"
          ></img>
          <div className="h-screen flex items-center justify-center relative">
            <div className="m-5 -mt-48 ">
              <img
                className="w-36 sm:w-64 m-auto"
                src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no"
              />
              <p className="text-3xl text-center my-2">
                Passionate about technology?
              </p>
              <p className="text-2xl text-center">Join SST Inc today!</p>
              <div className="flex justify-center mt-3">
                <a
                  href="https://forms.gle/ghnwWXnfrS1pXpUe7"
                  className="h-10 bg-blue-600 text-white opacity-100 rounded-full px-5 my-6 mx-3 flex items-center hover:drop-shadow-2xl"
                  target={"_blank"}
                >
                  Apply now
                </a>

                <Link href="/AboutUs">
                  <div className="h-10 bg-blue-600 text-white opacity-100 rounded-full px-5 my-6 mx-3 flex items-center hover:cursor-pointer hover:drop-shadow-2xl">
                    Contact Us
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="items-center md:grid md:grid-cols-2 p-5  bg-gradient-to-tr from-cyan-500 to-yellow-400">
          <div className="justify-center text-center mr-5 mt-5 text-white">
            <p className="text-xl md:text-3xl">Want to know more about us?</p>
            <p className="text-m">Check out some of our past projects</p>

            <Link href="/PastProjects">
              <button className="h-10 bg-gradient-to-r from-red-500 to-fuchsia-500 text-white opacity-100 rounded-full px-5 my-6 mx-3 hover:cursor-pointer hover:drop-shadow-2xl">
                Check it out
              </button>
            </Link>
          </div>
          <div className="sm:my-3 lg:my-12 sm:mx-5">
            <img className="rounded-3xl shadow-2xl" src="homeBottomImg.jpeg" />
          </div>
        </div>

        <div className="w-screen h-[3/4]"></div>

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
        <Footer/>
      </div>
    </div>
  );
}
