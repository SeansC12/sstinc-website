import React, { useRef } from "react";
import Header from "../components/Header";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import getWindowDimensions from "../hooks/getWindowDimensions";
import Person from "../components/Person";

const DreamTeam = {
  EXCO: {
    XuanHan: {
      name: "Tan Xuan Han",
      position: "President",
      imageURL: "",
    },
    Asher: {
      name: "Asher",
      position: "Vice-President",
      imageURL: "",
    },
    Kai: {
      name: "Tay Kai Quan",
      position: "iOS CTO",
      imageURL: "",
    },
    Luke: {
      name: "Luke Yeo",
      position: "iOS ACTO",
      imageURL: "",
    },
    Lohith: {
      name: "Lohith",
      position: "iOS Task Force",
      imageURL: "",
    },
    EnJie: {
      name: "Tham En Jie",
      position: "iOS Task Force",
      imageURL: "",
    },
    Harish: {
      name: "Harish",
      position: "React CTO",
      imageURL: "",
    },
    Sean: {
      name: "Sean Ulric Chua",
      position: "React ACTO",
      imageURL: "",
    },
    Sairam: {
      name: "Sairam Suresh",
      position: "React Task Force",
      imageURL: "",
    },
    Aathithya: {
      name: "Aathithya Jagatheesan",
      position: "CMO",
      imageURL: "",
    },
    Ayaan: {
      name: "Ayaan Jain",
      position: "CAO",
      imageURL: "",
    },
    Daksh: {
      name: "Daksh Thapar",
      position: "ACAO",
      imageURL: "",
    },
  },
  BOD: {
    LordYeo: {
      name: "Aurelius Yeo",
      position: "Board of Director",
      imageURL: "",
    },
    MsTang: {
      name: "Jovita Tang",
      position: "Board of Director",
      imageURL: "",
    },
    Chuaism: {
      name: "Jonathan Chua",
      position: "Board of Director",
      imageURL: "",
    },
    Roger: {
      name: "Roger Yeo",
      position: "Board of Director",
      imageURL: "",
    },
  },
};

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

        <div className="w-[70vw] h-[1px] bg-slate-400 mt-10" />
        <h1 className="text-5xl mt-24 mb-5 font-mono font-semibold">
          Board of Directors
        </h1>
        <div className="grid lg:grid-cols-4 m-10">
          {indivTeamElement.slice(12, 17).map((personElement, key) => {
            return <div key={key}>{personElement}</div>;
          })}
        </div>
      </div>
      <footer className="bg-slate-800 w-screen text-white h-screen md:h-[50vh]">
        <div className="w-full p-10 h-full justify-center md:flex grid grid-cols-1 place-items-center">
          <div className="w-full md:w-1/2 grid space-y-1 h-fit justify-center text-center">
            <h1 className="text-4xl mb-3">SST Inc HQ</h1>
            <p>School of Science and Technology, Singapore</p>
            <p>Block C, Level 3</p>
            <p>1 Technology Drive, Singapore 138572</p>
            <p className="pt-3">
              Email:{" "}
              <a href="mailto:contact@sstinc.org">
                <strong>contact@sstinc.org</strong>
              </a>
            </p>
            <p>
              Operating hours: Mondays, <strong>14:30</strong> to{" "}
              <strong>17:00</strong>
            </p>
            <div className="flex items-center pt-5 justify-center">
              <p className="mr-3">Visit us at: </p>
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
        </div>
      </footer>
    </div>
  );
}
