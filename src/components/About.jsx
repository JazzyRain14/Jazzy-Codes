import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import DevSvg from "../assets/developer.svg?react";
import SkillMeter from "./SkillMeter";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";

// const CoreSkills = [
//   {
//     stackname: "HTML",
//   },
//   {
//     stackname: "CSS",
//   },
//   {
//     stackname: "Vanilla JS",
//   },
//   {
//     stackname: "Responsive web design",
//   },
//   {
//     stackname: "Cross browser compatibility",
//   },
// ];

const CoreSkills = [
  { stackname: "HTML" },
  { stackname: "CSS" },
  { stackname: "JavaScript" },
  { stackname: "React" },
  { stackname: "TypeScript" },
  { stackname: "Node.js" },
  { stackname: "GraphQL" },
  { stackname: "MongoDB" },
  { stackname: "TailwindCSS" },
];

const Frameworks = [
  {
    stackname: "React.js",
  },
  {
    stackname: "BootStrap",
  },
  {
    stackname: "Material-UI",
  },
  {
    stackname: "Familiarity with VS code editor",
  },
  {
    stackname: "Familiarity with npm",
  },
];
const SoftSkills = [
  {
    stackname: "Effective Communication",
  },
  {
    stackname: "Problem Solving",
  },
  {
    stackname: "Adaptability",
  },
  {
    stackname: "Teamwork",
  },
  {
    stackname: "Time Management",
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = React.createRef();
  return (
    <div className="flex px-6 md:px-14 lg:px-28 flex-1 flex-col justify-between gap-5 h-full w-full">
      <div className="">
        <h1 className="text-white flex items-baseline leading-snug text-[40px] md:text-[65px] lg:text-[95px] font-semibold">
          About me <GoDotFill size={30} className="text-secondary-button" />
        </h1>
        <p className="w-1/2 max-md:w-full max-md:text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur
          illo, facilis quod ullam tempore vel id ut delectus, vero ipsa
          voluptates aperiam sequi veritatis! Dicta, tempore nihil. Modi, iusto.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between max-md:space-y-12 md:space-x-20 flex-1 my-4">
        <div className="md:w-[35%]">
          <h1 className="text-white text-xl font-bold mb-2">My Stack.</h1>
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50 }}
            className="bg-primary-button rounded-lg"
          >
            <div className="mx-6 flex flex-col space-y-12 overflow-hidden py-4">
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
                className="flex items-center whitespace-nowrap space-x-2"
              >
                <Marquee
                  gradient
                  gradientWidth={10}
                  gradientColor="#1b4993a4"
                  speed={30}
                  pauseOnHover
                >
                  {CoreSkills.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CiStar size={22} color="#FCD53F" className="mx-2" />
                      <h1 className="bg-primary-button border border-primary/80 block py-2 px-5 text-white font-semibold rounded-lg w-fit">
                        {item.stackname}
                      </h1>
                    </div>
                  ))}
                </Marquee>
              </motion.div>
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 60 }}
                className="flex items-center whitespace-nowrap space-x-2"
              >
                <Marquee
                  gradient
                  gradientWidth={10}
                  gradientColor="#1b4993a4"
                  speed={32}
                  pauseOnHover
                >
                  {Frameworks.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CiStar size={22} color="#FCD53F" className="mx-2" />
                      <h1 className="bg-primary-button border border-primary/80 block py-2 px-5 text-white font-semibold rounded-lg w-fit">
                        {item.stackname}
                      </h1>
                    </div>
                  ))}
                </Marquee>
              </motion.div>
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, type: "spring", stiffness: 60 }}
                className="flex items-center whitespace-nowrap space-x-2"
              >
                <Marquee
                  gradient
                  gradientWidth={10}
                  gradientColor="#1b4993a4"
                  speed={40}
                  pauseOnHover
                >
                  {SoftSkills.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CiStar size={22} color="#FCD53F" className="mx-2" />
                      <h1 className="bg-primary-button border border-primary/80 block py-2 px-5 text-white font-semibold rounded-lg w-fit">
                        {item.stackname}
                      </h1>
                    </div>
                  ))}
                </Marquee>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="flex-1 h-full">
          <h1 className="text-white text-xl font-bold mb-2">My Skills.</h1>
          <div className="bg-primary-button p-5 space-y-3.5 rounded-lg">
            <SkillMeter
              skillName="HTML"
              percentage={90}
              className="float-left h-8 text-white text-sm px-1  bg-gradient-to-r from-[#f9697d] via-[#fe3e57] to-[#991325] HTML"
            />
            <SkillMeter
              skillName="CSS"
              percentage={80}
              className="float-left h-8 bg-gradient-to-r from-[#f9697d] via-[#fe3e57] to-[#991325] text-white text-sm px-1 CSS"
            />
            <SkillMeter
              skillName="JAVASCRIPT"
              percentage={70}
              className="float-left h-8 bg-gradient-to-r from-[#f9697d] via-[#fe3e57] to-[#991325] text-white text-sm px-1 JS "
            />
            <SkillMeter
              skillName="REACT.JS"
              percentage={65}
              className="float-left h-8 bg-gradient-to-r from-[#f9697d] via-[#fe3e57] to-[#991325] text-white text-sm px-1 REACT"
            />
            <SkillMeter
              skillName="REACT NATIVE"
              percentage={40}
              className="float-left h-8 bg-gradient-to-r from-[#f9697d] via-[#fe3e57] to-[#991325] text-white text-sm px-1 NATIVE"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
