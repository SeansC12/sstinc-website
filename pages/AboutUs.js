import React, { useEffect, useRef } from "react";
import Header from "../components/header";
import Image from "next/image";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
// import getWindowDimensions from "../hooks/getWindowDimensions";

// Real image url: https://lh3.googleusercontent.com/pw/AM-JKLWnOl6XC9-JPOB4PGafYwJkLdC0MCMewF4k0R4tZ-9AQUlDb-4O6J6dO5B34E0s6NTqS0iU2BwLe-wTpWJsEBJMEnStA0OJ90ZBOqSTPNzJr-isLUzgCfTdhIDwNMZ9qH7cVkRZNT3r_WYHPUuGHFty=w1600-h916-no?authuser=0

function AboutUs() {
  // const screenDimensions = getWindowDimensions();
  const parallaxBannerRef = useRef(null);
  let image = null;

  useEffect(() => {
    image = `https://picsum.photos/${parallaxBannerRef.current.clientWidth}/${parallaxBannerRef.current.clientHeight}`;
  }, []);

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
            ref={parallaxBannerRef}
          >
            <div className="absolute inset-0 grid grid-cols-2">
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

      <div className="grid grid-cols-3"></div>

      <div className="flex items-center flex-col">
        <div className="self-center">
          <Image
            src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no?authuser=0"
            width={200}
            height={190}
          />
        </div>
        <div className="font:Inter font-normal text-center mx-56">
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

export default AboutUs;
