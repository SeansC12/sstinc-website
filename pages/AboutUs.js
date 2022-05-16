import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import getWindowDimensions from "../hooks/getWindowDimensions";

export default function AboutUs() {
  const parallaxBannerRef = useRef();
  let [image, setImage] = useState();
  const count = true;

  useEffect(() => {
    setImage(
      `https://picsum.photos/${parallaxBannerRef.current.clientWidth}/${parallaxBannerRef.current.clientHeight}`
    );
    console.log(image);
  }, [image]);

  return (
    <div>
      <Header tab="About Us" />
      <ParallaxProvider>
        <div ref={parallaxBannerRef} className="h-screen">
          <ParallaxBanner
            layers={[
              {
                image: image,
                speed: -75,
              },
            ]}
            className="h-3/4"
          >
            <div className="hidden sm:visible sm:absolute sm:inset-0 sm:grid sm:grid-cols-2">
              <div className="flex items-center justify-center col-start-2 col-end-3 flex-col">
                <div className="font:Inter font-normal text-center text-white text-7xl border-b-2 border-white">
                  Who are we?
                </div>
                <div className="font:Inter font-normal text-center pt-5 text-white">
                  SST Inc. is the technology{" "}
                  <strong>Talent Development Programme</strong> in the School of
                  Science and Technology, Singapore. We are an incubator that{" "}
                  <strong>nurtures student employees</strong> in running{" "}
                  <strong>technology start-ups</strong> to serve communities and{" "}
                  <strong>better our world.</strong>
                </div>
              </div>
            </div>
          </ParallaxBanner>
        </div>
      </ParallaxProvider>

      {getWindowDimensions().width < 640 && (
        <div className="mx-6">
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

      <div className="flex items-center flex-col">
        <div className="self-center">
          <Image
            src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no?authuser=0"
            width={200}
            height={190}
          />
        </div>
        <div className="mx-6 text-sm sm:text-base font:Inter font-normal text-center sm:mx-56">
          SST Inc. is the technology{" "}
          <strong>Talent Development Programme</strong> in the School of Science
          and Technology, Singapore. We are an incubator that{" "}
          <strong>nurtures student employees</strong> in running{" "}
          <strong>technology start-ups</strong> to serve communities and{" "}
          <strong>better our world.</strong>
        </div>
      </div>
    </div>
  );
}
