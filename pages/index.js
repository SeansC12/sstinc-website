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
import { motion } from "framer-motion";
import { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function changeColour(stage) {
  setTimeout(100)
  console.log("hi")
}

changeColour(2)

const courses = [
  {
    name: "ReactJS",
    image: "reactLogo.svg",
    description:
      "ReactJS is a javascript library used to build incredible user experience focused web pages",
  },
  {
    name: "iOS",
    image: "swiftLogo.png",
    description:
      "iOS is bad bad iOS is bad bad iOS is bad bad iOS is bad bad iOS is bad bad iOS is bad bad ",
  },
  {
    name: "Android",
    image: "androidLogo.svg",
    description:
      "android is eh?android is eh?android is eh?android is eh?android is eh?android is eh?android is eh?",
  },
];

const careerStages = [
  {
    header: "Trainee",
    subHeader: "ReactJS, iOS, and Android Development",
    description:
      "In Secondary 1, all students may sign up to join SST Inc. as a trainee. They will undergo training in Swift and develop iOS apps using Xcode. Students will also undergo training for React Native, to be able to develop iOS and Android apps. The trainees are expected to apply their learning at the end of the course by developing an app.",
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
        <div>
          <img
            src="homeWaves.svg"
            className="w-full h-screen object-cover absolute"
          />
          <div className="relative">
            <div className="items-center h-screen pb-20 flex justify-center">
              <div className=" h-fit grid place-items-center space-y-0">
                <motion.img
                  className="h-40 mb-10"
                  src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no"
                  animate={{ scale: 1.4 }}
                  transition={{ delay: 0.1, type: "spring" }}
                ></motion.img>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen bg-gradient-to-b from-[#DC4267] to-[#DC4267] flex justify-center items-center relative -mt-14 font-sans">
          <div className="grid place-items-center">
            <motion.h1
              whileInView={{ scale: 1.3 }}
              transition={{ duration: 0.5 }}
              className="w-fit text-4xl text-gray-100"
            >
              Our Courses
            </motion.h1>

            <div className="flex text-center">
              {courses.map((course) => {
                let index = courses.indexOf(course);
                return (
                  <motion.p
                    key={course.name}
                    className={`m-10 w-20 text-2xl cursor-pointer`}
                    whileHover={{ scale: 1.1 }}
                    // animate={{font: currentCourseIndex == index ? "bold" : "normal"}}
                    animate={{
                      fontWeight:
                        currentCourseIndex == index ? "bold" : "normal",
                      scale: currentCourseIndex == index ? 1.1 : 1,
                    }}
                    onClick={() => setCurrentCourseIndex(index)}
                  >
                    {course.name}
                  </motion.p>
                );
              })}
            </div>
            <div className="grid place-items-center">
              <h1 className="text-2xl">{courses[currentCourseIndex].name}</h1>
              <img
                src={courses[currentCourseIndex].image}
                className="h-96 p-10"
              ></img>
              <p className="text-xl font-source_code_pro sm:w-[40vw] text-center text-gray-300">
                {courses[currentCourseIndex].description}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#001220] h-screen items-center flex justify-center">
          <div className="w-[60vw] h-[60vh] p-10  rounded-[30px] bg-white flex items-center justify-centre">
            <button
              onClick={() => {
                // console.log(divDimension)
                setCurrentStage((x) =>
                  x == 0 ? (x = careerStages.length - 1) : x - 1
                );
              }}
              className="p-2 bg-orange-300 rounded-full text-3xl text-center m-2 ml-5"
            >
              <RiArrowLeftSLine className="w-8 h-8" />
            </button>

            <div className="w-full text-center font-mono px-10 h-[80%]">
              <div className="h-full">
                <p className="text-3xl font-semibold text-[#DC4267]">
                  {currentStage + 1}. {careerStages[currentStage].header}
                </p>
                <p className="text-2xl m-10">
                  {careerStages[currentStage].subHeader}
                </p>
                <p>{careerStages[currentStage].description}</p>
              </div>
              <div className="h-fit w-full mb-0 flex justify-center items-center mt-10 relative">
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
                          "h-10 w-10 shadow-2xl grid place-items-center rounded-full cursor-pointer",
                          stage == 0
                            ? "mr-auto"
                            : stage == 4
                            ? "ml-auto"
                            : "mx-auto",
                          currentStage >= stage
                            ? "border-orange-300 text-white"
                            : " border-2  text-black"
                        )}
                        animate={{
                          backgroundColor:
                            stage <= currentStage
                              ? ["rgb(255,255,255)", "rgb(253, 186, 116)"]
                              : ["rgb(255, 255, 255)", "rgb(255,255,255)"],
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
            <button
              onClick={() =>
                setCurrentStage((x) =>
                  x == careerStages.length - 1 ? 0 : x + 1
                )
              }
              className="p-2 bg-orange-300 rounded-full text-3xl text-centre m-2 mr-5"
            >
              <RiArrowRightSLine className="w-8 h-8" />
            </button>
          </div>
        </div>
      </main>
      {/* <Footer className="absolute" /> */}
    </div>
  );
}
