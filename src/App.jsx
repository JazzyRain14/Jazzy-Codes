import React from "react";
import DevSvg from "../src/assets/developer.svg?react";
import NavBar from "./components/NavBar";
import "./App.css";
import { LeftSocials, RightSocials } from "./components/Socials";
import { Route, Routes } from "react-router";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
      {/* <a href="https://storyset.com/work">Work illustrations by Storyset</a> */}
    </>
  );
}

export default App;
