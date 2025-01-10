import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaHamburger,
} from "react-icons/fa";
import { BsSlash } from "react-icons/bs";
import { BsSlashLg } from "react-icons/bs";
import "../App.css";
import { FaBarsProgress, FaBurger } from "react-icons/fa6";
const NavBar = ({ openNav }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between px-2 sm:px-6 md:px-14 lg:mx-24 py-5 shadow-md rounded-b-lg shadow-slate-800">
        <div>
          <Link to="/">
            <h1 className="flex text-secondary text-base lg:text-lg font-semibold gap-0.5 items-center">
              <FaChevronLeft color="white" size={18} />
              JazzyCodes
              <span className="text-white text-[18px] font-bold flex items-center">
                /<FaChevronRight color="white" size={18} />
              </span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-between">
          <Link to="/" className="text-white mx-12 text-lg font-semibold">
            Home
          </Link>
          <Link to="/about" className=" text-white mx-12 text-lg font-semibold">
            About
          </Link>
          <Link
            to="/projects"
            className=" text-white mx-12 text-lg font-semibold"
          >
            Projects
          </Link>
          <button
            onClick={() => navigate("/contactme")}
            className="text-white border border-secondary/50 px-4 py-1 bg-primary-button rounded-sm lg:mx-12 lg:text-lg font-semibold"
          >
            Let's Talk
          </button>
        </div>
        <FaBars
          onClick={openNav}
          size={25}
          color="white"
          className="block md:hidden"
        />
      </div>
    </>
  );
};

export default NavBar;
