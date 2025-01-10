import React from "react";
import DevSvg from "../assets/developer.svg?react";
import NavBar from "../components/NavBar";
import "../App.css";
import Typewriter from "typewriter-effect";
import { LeftSocials, RightSocials } from "../components/Socials";
import { useNavigate } from "react-router";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex overflow-hidden flex-1 items-center">
      <LeftSocials />
      <div className="flex flex-col md:flex-row px-6 md:px-14 lg:px-28 w-full items-center justify-between">
        <div className="max-md:min-w-60">
          <p className="text-white text-2xl leading-8 font-semibold w-full">
            Hi,
          </p>
          <h1 className="text-white leading-snug text-[40px] md:text-[65px] lg:text-[95px] font-semibold">
            I'm <span className="text-secondary capitalize">Jazzy</span>
          </h1>
          <p className="text-white flex gap-x-2 text-xl lg:text-2xl leading-8 font-semibold">
            I am a
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Front end developer")
                  .pauseFor(4000)
                  .start();
              }}
              options={{
                loop: true,
                autoStart: true,
              }}
            />
          </p>
          <div className="flex max-sm:justify-center gap-4 md:gap-6 mt-4 lg:mt-12">
            <button className="p-2 px-3 lg:py-2.5 lg:px-7 bg-secondary-button text-white font-semibold rounded-md">
              <a href="https://drive.google.com/uc?export=download&id=1LzVs7V-sIHj0rnRc8VeNL4vLBBxYlMbQ">
                Resume
              </a>
            </button>
            <button
              onClick={() => navigate("contactme")}
              className="p-2 px-3 lg:py-2.5 lg:px-7 bg-primary-button text-white font-semibold rounded-md"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-[350px] h-[350px] max-sm:w-[250px] max-sm:h-[250px] lg:w-[500px] lg:h-[500px]">
          <DevSvg style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
      <RightSocials />
    </div>
  );
};

export default LandingPage;
