import { motion } from "motion/react";
import React from "react";
import { FaLink } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { LiaHashtagSolid } from "react-icons/lia";
const AllProjects = [
  {
    projectName: "Juma Food and Confectionaries",
    projectDescription:
      "Juma Food and Confectionaries is your one-stop destination for delicious homemade meals, savory snacks, and delightful confections. We specialize in creating high-quality, fresh, and flavorful dishes that satisfy every craving. Whether you're indulging in our signature desserts or enjoying our wholesome, freshly prepared meals, Juma is committed to delivering taste and excellence with every bite.",
    projectMotto:
      "We deliver as you want it. Conveniently without Compromise. Fast. Fresh. Flavorful.",
    projectLink: "https://jumafood.vercel.app/",
    projectImage: "/ScreenShots/LandingPage.png",
  },
];

const MyProjects = () => {
  return (
    <div className="flex px-6 md:px-14 lg:px-28 flex-1 flex-col justify-around gap-5 h-full w-full">
      <div className="">
        <h1 className="text-white flex items-baseline font-bold leading-snug text-[40px] md:text-[65px] lg:text-[95px]">
          BluePrints <GoDotFill size={30} className="text-secondary-button" />
        </h1>
        <p className="w-1/2 max-md:w-full max-md:text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur
          illo, facilis quod ullam tempore vel id ut delectus, vero ipsa
          voluptates aperiam sequi veritatis! Dicta, tempore nihil. Modi, iusto.
        </p>
      </div>
      <div className="">
        {AllProjects.map((item, id) => (
          <div
            key={id}
            className={`flex flex-col lg:py-6 py-4 gap-5 lg:mb-4 items-center ${
              id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50 }}
              className="relative flex-1 flex items-center justify-center"
            >
              <img
                src={item.projectImage}
                className="w-full h-auto object-cover"
                alt="project image"
              />
              <a
                href={item.projectLink}
                className="absolute left-0 w-full h-full flex items-center justify-center hover:bg-black/50 cursor-pointer text-transparent hover:text-white/50"
              >
                {/* <div className="absolute left-0 w-full h-full flex items-center justify-center hover:bg-black/50 cursor-pointer text-black hover:text-white/50"> */}
                <FaLink size={20} />
                {/* </div> */}
              </a>
            </motion.div>
            <motion.div
              initial={{ y: "85%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50 }}
              className="px-4 hidden lg:max-w-[55%] md:block"
            >
              <h1 className="text-white/90 w-full lg:w-[90%] truncate font-bold text-[20px] lg:text-[40px]">
                {item.projectName}
              </h1>
              <div className="flex my-2 gap-2 items-center justify-center lg:justify-start">
                <hr className="w-1/2" />
                <LiaHashtagSolid size={20} color="white" />
                <hr className="w-1/2" />
              </div>
              <p className="text-white/90 text-sm lg:text-base">
                {item.projectDescription}
              </p>
              <p className="text-white/90 my-2 text-sm lg:text-base">
                {item.projectMotto}
              </p>
              <button className="px-5 py-2 my-2 bg-secondary rounded-lg text-white text-lg hover:bg-[#bb273a]">
                <a href={item.projectLink}>Check it out</a>
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
