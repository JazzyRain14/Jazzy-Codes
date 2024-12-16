import React from "react";
import { Link } from "react-router";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsSlash } from "react-icons/bs";
import { BsSlashLg } from "react-icons/bs";
const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between py-5">
        <div>
          <Link>
            <h1 className="flex text-secondary text-lg font-semibold gap-0.5 items-center">
              <FaChevronLeft color="white" size={18} />
              JazzyCodes
              <span className="text-white text-[18px] font-bold flex items-center">
                /<FaChevronRight color="white" size={18} />
              </span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <Link className="text-white mx-12 text-lg font-semibold" to="/">
            Home
          </Link>
          <Link className="text-white mx-12 text-lg font-semibold" to="/">
            About
          </Link>
          <Link className="text-white mx-12 text-lg font-semibold" to="/">
            Projects
          </Link>
          <button className="text-white border border-secondary/50 px-4 py-1 bg-primary-button rounded-sm mx-12 text-lg font-semibold">
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
