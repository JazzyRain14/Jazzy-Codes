import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router";
import { FaGithub, FaTimes } from "react-icons/fa";
import { MdCall, MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
const Menu = ({ isOpen, openNav }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-full flex flex-col space-y-10 items-center justify-center bg-gray-800/95 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <FaTimes
          onClick={openNav}
          className="text-white absolute right-[70px] top-10"
          size={25}
        />
        <Link
          to="/"
          className="text-white border py-3 px-6 text-lg font-semibold"
        >
          Home
        </Link>
        <Link
          to="/about"
          className=" text-white py-3 px-6 text-lg font-semibold"
        >
          About
        </Link>
        <Link
          to="/projects"
          className=" text-white py-3 px-6 text-lg font-semibold"
        >
          Projects
        </Link>
        <button
          onClick={() => navigate("/contactme")}
          className="text-white border border-secondary/50 py-3 px-6 bg-primary-button rounded-sm lg:mx-12 lg:text-lg font-semibold"
        >
          Let's Talk
        </button>
        <div className="flex items-center justify-between space-x-10">
          <a href="mailto:ajadiolamilekan14@gmail.com">
            <MdOutlineEmail
              className="cursor-pointer hoverli"
              size={35}
              color="white"
            />
          </a>
          <a
            href="https://wa.me/2348061449728?text=i%27ve%20got%20work%20for%20you.%20My%20name%20is%20______.%0A"
          >
            <MdCall
              className="cursor-pointer hoverli"
              size={35}
              color="white"
            />
          </a>
          <a href="https://x.com/OlalekanAjadi14">
            <FaXTwitter
              className="cursor-pointer hoverli"
              size={35}
              color="white"
            />
          </a>
          <a href="https://github.com/JazzyRain14">
            <FaGithub
              className="cursor-pointer hoverli"
              size={35}
              color="white"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Menu;
