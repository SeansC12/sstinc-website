import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import TeamMember from "../components/TeamMember";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import getWindowDimensions from "../hooks/getWindowDimensions";

export default function AboutUs() {
  const parallaxBannerRef = useRef();
  const image2 = `https://picsum.photos/2000/2000`;
  let [image, setImage] = useState();
  let [isInMobileView, setIsInMobileView] = useState(
    getWindowDimensions().width < 640 ? true : false
  );

  const team = {
    XuanHan: { name: "Tan Xuan Han", position: "President" },
    Asher: { name: "Asher ___", position: "Vice-President" },
    Kai: { name: "Tay Kai Quan", position: "iOS CTO" },
    Luke: { name: "Luke Yeo", position: "iOS ACTO" },
    Lohith: { name: "Lohith", position: "iOS Task Force" },
    EnJie: { name: "Tham En Jie", position: "iOS Task Force" },
    Harish: { name: "Harish", position: "React CTO" },
    Sean: { name: "Sean Ulric Buguina Chua", position: "React ACTO" },
    Sairam: { name: "Sairam Suresh", position: "React Task Force" },
    Aathithya: { name: "Aathithya Jegathaseen", position: "CMO" },
    Ayaan: { name: "Ayaan Jain", position: "CAO" },
    Daksh: { name: "Daksh Thapar", position: "ACAO" },
  };

  useEffect(() => {
    setImage(
      `https://picsum.photos/${parallaxBannerRef.current.clientWidth}/${parallaxBannerRef.current.clientHeight}`
    );
  }, [image]);

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
        <div className="text-center text-3xl">
          <strong>
            <u>Meet the Team!</u>
          </strong>
        </div>
        <div className="grid grid-rows-14 grid-cols-1 mt-5 sm:grid-cols-7 sm:grid-rows-3 ">
          {/* <div className="col-start-1 col-end-2 row-start-1 row-end-2"></div> */}
          <TeamMember
            person={team.XuanHan}
            mobileView={isInMobileView}
            startCol={2}
            colSpan={1}
            startRow={1}
            rowSpan={1}
          />
          <TeamMember
            person={team.Asher}
            mobileView={isInMobileView}
            startCol={3}
            colSpan={1}
            startRow={1}
            rowSpan={1}
          />
          <TeamMember
            person={team.Harish}
            mobileView={isInMobileView}
            startCol={4}
            colSpan={1}
            startRow={1}
            rowSpan={1}
          />
          <TeamMember
            person={team.Kai}
            mobileView={isInMobileView}
            startCol={5}
            colSpan={1}
            startRow={1}
            rowSpan={1}
          />
          <TeamMember
            person={team.Ayaan}
            mobileView={isInMobileView}
            startCol={6}
            colSpan={1}
            startRow={1}
            rowSpan={1}
          />
          <TeamMember
            person={team.Aathithya}
            mobileView={isInMobileView}
            startCol={2}
            colSpan={2}
            startRow={2}
            rowSpan={1}
          />
          <TeamMember
            person={team.Sean}
            mobileView={isInMobileView}
            startCol={3}
            colSpan={2}
            startRow={2}
            rowSpan={1}
          />
          <TeamMember
            person={team.Luke}
            mobileView={isInMobileView}
            startCol={4}
            colSpan={2}
            startRow={2}
            rowSpan={1}
          />
          <TeamMember
            person={team.Daksh}
            mobileView={isInMobileView}
            startCol={5}
            colSpan={2}
            startRow={2}
            rowSpan={1}
          />
          <TeamMember
            person={team.Sairam}
            mobileView={isInMobileView}
            startCol={3}
            colSpan={1}
            startRow={3}
            rowSpan={1}
          />
          <TeamMember
            person={team.Lohith}
            mobileView={isInMobileView}
            startCol={4}
            colSpan={1}
            startRow={3}
            rowSpan={4}
          />
          <TeamMember
            person={team.EnJie}
            mobileView={isInMobileView}
            startCol={5}
            colSpan={1}
            startRow={3}
            rowSpan={4}
          />
        </div>
      </div>
    </div>
  );
}
