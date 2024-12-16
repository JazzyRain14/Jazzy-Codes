import React from "react";
import DevSvg from "../assets/developer.svg?react";
import NavBar from "../components/NavBar";
import "../App.css";
import { LeftSocials, RightSocials } from "../components/Socials";
const LandingPage = () => {
  return (
    <div className="bg-primary px-8 flex items-center h-[100vh] w-full">
      <LeftSocials />
      <div className="px-28 flex flex-col h-[100vh] w-full">
        <NavBar />
        <div className="flex w-full items-center justify-between">
          <div>
            <p className="text-white text-2xl leading-8 font-semibold">Hi,</p>
            <h1 className="text-white leading-snug text-[95px] font-semibold">
              I'm <span className="text-secondary capitalize">Jazzy</span>
            </h1>
            <p className="text-white text-2xl leading-8 font-semibold">
              I am a Frontend developer
            </p>
            <div className="flex gap-6 mt-12">
              <button className="py-2.5 px-7 bg-secondary-button text-white text-lg font-semibold rounded-md">
                Resume
              </button>
              <button className="py-2.5 px-7 bg-primary-button text-white text-lg font-semibold rounded-md">
                Contact Me
              </button>
            </div>
          </div>
          <div>
            <DevSvg width={500} height={500} />
          </div>
        </div>
      </div>
      <RightSocials />
    </div>
  );
};

export default LandingPage;
