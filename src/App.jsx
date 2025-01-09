import React, { useState } from "react";
import DevSvg from "../src/assets/developer.svg?react";
import NavBar from "./components/NavBar";
import "./App.css";
import { LeftSocials, RightSocials } from "./components/Socials";
import { Route, Routes } from "react-router";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import Contactpg from "./components/Contactpg";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen((prev) => !prev)
  };
  return (
    <>
      <div className="bg-primary relative px-4 lg:px-8 flex flex-col min-h-screen w-full">
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} openNav={openNav} />
        <Menu isOpen={isOpen} openNav={openNav} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/contactme" element={<Contactpg />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <a href="https://storyset.com/work">Work illustrations by Storyset</a> */}
      </div>
    </>
  );
}

export default App;
