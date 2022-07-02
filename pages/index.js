import React from "react";
import Header from "../components/Header";
import "../public/homeTopImg.jpeg";
import "../public/homeBottomImg.jpeg";
import "../public/im1.png";
import "../public/projectSFIMg.jpeg";
import Link from "next/link";
import "../public/androidLogo.svg";
import "../public/reactLogo.svg";
import "../public/swiftLogo.png";
import "../public/homeWaves.svg";
import Footer from "../components/Footer";
import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const courses = [
  {
    name: "ReactJS",
    title: "Javascript",
    image: "reactLogo.svg",
    color: "#61DAFB",
    description:
      "ReactJS is a javascript library used to build incredible user experience focused web pages",
  },
  {
    name: "iOS",
    title: "Swift",
    image: "swiftLogo.png",
    color: "#D12E13",
    description:
      "iOS is bad bad iOS is bad bad iOS is bad bad iOS is bad bad iOS is bad bad iOS is bad bad ",
  },
  {
    name: "Android",
    title: "Java",
    image: "androidLogo.svg",
    color: "#A4C639",
    description:
      "android is eh?android is eh?android is eh?android is eh?android is eh?android is eh?android is eh?",
  },
];

const careerStages = [
  {
    header: "Trainee",
    subHeader: "ReactJS, iOS, and Android Development",
    description:
      "Trainees will undergo a vigorous training of UI development to make great visual elements for their apps to suit differ users and their functionality. They will also learn to code in Androids apps so that they will be able to release both IOS and Android apps which will cater to all mobile phone users. This will mark the end of their time as a trainee as they prepare to face the real world",
  },
  {
    header: "Associate Employee Startup Incubation",
    subHeader: "Graphical Design",
    description:
      "Trainees in this phase will learn another language - Java, to develop apps with Android Studio. Students will also undergo training for User Interface and User Experience Design. They are promoted to Associate Empoyees after they secure a position in either an existing startup or a new startup. Associate Employees are trained in database management and other various skillsets to help them develop their products.",
  },
  {
    header: "Employee #ProjectSF",
    subHeader: "Visiting Silicon Valley",
    description:
      "Associate Employees in SST Inc. are promoted to be Employees after their subsidiary startups develop technological solutions to better the world. Employees who submit outstanding applications or products with a display of their capabilities and skills will have the opportunity to extend their learning through #ProjectSF. #ProjectSF is a student-initiated programme to visit Silicon Valley to network and learn from SST's partners and the industry. Employees also attend tech conferences in #ProjectSF to hone their skills further.",
  },
  {
    header: "Management Trainee Aspiring Peaks",
    subHeader: "Leadership Development",
    description:
      "Talented Employees with an aspiration to take on responsibilities and challenges can choose to embark on the Management Trainee programme. Management Trainees will understudy the Management Team to understand the operations and ethos of SST Inc. Management Trainees are required to undertake mini projects before they take the leap of faith to stand for election.",
  },
  {
    header: "Executive Committee Blazing the Trail",
    subHeader: "Management of SST Inc. and its Subsidiaries",
    description:
      "Management Trainees are elected to Executive Committee, i.e., the Management Team of SST Inc. As part of the Executive Committee, the employees set and align SST Inc.’s vision, mission, and values to strengthen the culture of SST Inc. Every renewal of the management team seeks to take SST Inc. to a greater height.",
  },
];

export default function Home() {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  return (
    <div>
      <Header tab="Home" />
      <main>
        <div className="h-fit sm:h-screen bg-[url(../public/homeWaves.svg)] bg-cover">
          {/* <img
            src="homeWaves.svg"
            className="w-full h-full object-cover absolute"
          /> */}
          <div className="relative">
            <div className="items-center h-fit pb-20 flex justify-center">
              <div className=" h-fit grid place-items-center space-y-0">
                <motion.img
                  className="h-40 m-10"
                  src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no"
                  animate={{ scale: 1.4 }}
                  transition={{ delay: 0.1, type: "spring" }}
                ></motion.img>
                <p className="w-5/6 sm:w-1/2 p-10 text-center bg-slate-200 rounded-xl bg-opacity-80 font-mono font-semibold  sm:text-xl">
                  SST Inc. is the technology Talent Development Programme in the
                  School of Science and Technology, Singapore. SST Inc. is an
                  incubator that nurtures student employees in running
                  technology start-ups to serve communities and better our
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit bg-[#FA7268] flex justify-center items-center relative font-mono">
          <div className="grid place-items-center">
            <motion.h1
              whileInView={{ scale: 1.3 }}
              transition={{ duration: 0.5 }}
              className="w-fit mt-10 text-xl sm:text-3xl text-gray-100 font-lato"
            >
              Course Options
            </motion.h1>

            <LayoutGroup>
              <ol className="grid grid-cols-3 place-items-center w-full font-mono m-5 my-10 sm:w-1/2">
                {courses.map((course, i) => {
                  return (
                    <motion.li
                      key={i}
                      onClick={() => {
                        setCurrentCourseIndex(i);
                      }}
                      className="text-center sm:text-xl w-fit cursor-pointer text-[5vw]"
                      animate={{
                        scale: currentCourseIndex == i ? 1.3 : 1,
                        color: currentCourseIndex == i ? course.color : "#333",
                      }}
                      whileHover={{ color: course.color }}
                    >
                      {course.name}
                      {currentCourseIndex == i && (
                        <motion.div
                          className={`h-1 rounded-full w-10/12 m-auto`}
                          style={{ backgroundColor: course.color }}
                          layoutId="underline"
                        ></motion.div>
                      )}
                    </motion.li>
                  );
                })}
              </ol>
            </LayoutGroup>

            <div className="grid place-items-center">
              <h1 className="text-2xl -2">
                {courses[currentCourseIndex].title}
              </h1>
              <img
                src={courses[currentCourseIndex].image}
                className="h-96 w-fit sm:p-20"
              ></img>
              <p className="text-xl font-mono w-11/12 md:w-1/2 text-center text-white mb-10">
                {courses[currentCourseIndex].description}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#001220] h-screen items-center flex justify-center">
          <div className="w-[90vw] lg:w-[60vw] h-[70vh] rounded-[30px] bg-white flex items-center justify-centre">
            <div className="w-full text-center font-mono h-[80%]  items-center">
              <div className="h-full items-center sm:pt-5">
                <p className="text-xl md:text-3xl font-semibold text-[#DC4267]">
                  {currentStage + 1}. {careerStages[currentStage].header}
                </p>
                <div className="text-xl sm:text-2xl p-2 sm:p-5 flex justify-center items-center w-full">
                  <button
                    onClick={() => {
                      // console.log(divDimension)
                      setCurrentStage((x) =>
                        x == 0 ? (x = careerStages.length - 1) : x - 1
                      );
                    }}
                    className="p-2 bg-orange-300 rounded-full text-3xl text-center m-2 mr-auto"
                  >
                    <RiArrowLeftSLine className="w-8 h-8" />
                  </button>
                  <p className="sm:mx-10">
                    {careerStages[currentStage].subHeader}
                  </p>
                  <button
                    onClick={() =>
                      setCurrentStage((x) =>
                        x == careerStages.length - 1 ? 0 : x + 1
                      )
                    }
                    className="p-2 bg-orange-300 rounded-full text-3xl text-centre m-2 ml-auto"
                  >
                    <RiArrowRightSLine className="w-8 h-8" />
                  </button>
                </div>
                <p
                  className="text-[] md:text-base px-2 sm:px-10"
                  // style={{ fontSize: "calc(1vh + 1vw)" }}
                  // style={{fontSize: "100%"}}
                >
                  {careerStages[currentStage].description}
                </p>
              </div>
              <div className="h-12 w-11/12 md:mt-0 flex justify-center items-center relative px-10 mx-auto pb-10">
                <div className="shadow h-1 w-full">
                  <motion.div
                    className="bg-orange-300 h-1 w-[25%]"
                    animate={{ scaleX: currentStage, originX: 0 }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
                <div className="flex absolute w-full justify-center">
                  {[0, 1, 2, 3, 4].map((stage) => {
                    return (
                      <motion.div
                        key={stage}
                        className={classNames(
                          "h-10 w-10 border-2 border-orange-300 text-black shadow-2xl grid place-items-center rounded-full cursor-pointer ",
                          stage == 0
                            ? "mr-auto"
                            : stage == 4
                            ? "ml-auto"
                            : "mx-auto"
                        )}
                        animate={{
                          backgroundColor:
                            stage <= currentStage
                              ? ["rgb(255,255,255)", "rgb(253, 186, 116)"]
                              : ["rgb(255, 255, 255)", "rgb(255,255,255)"],
                          color: stage <= currentStage ? "#fff" : "#696969",
                        }}
                        transition={{ duration: 0.5 }}
                        onClick={() => setCurrentStage(stage)}
                      >
                        {stage + 1}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer className="absolute" />
    </div>
  );
}
