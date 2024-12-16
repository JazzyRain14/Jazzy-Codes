import React from "react";
import { Link } from "react-router";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { BsSlash } from "react-icons/bs";
import { BsSlashLg } from "react-icons/bs";
export const RightSocials = () => {
  return (
    <>
      <div className="flex flex-col w-1 items-center relative right-4">
        <h1 className=" text-white text-lg font-semibold rotate-90">
          ajadiolamilekan14@gmail.com
        </h1>
        <hr className=" w-1 h-32 border-none bg-white absolute top-40" />
      </div>
    </>
  );
};

export const LeftSocials = () => {
  return (
    <>
      <div className="flex w-1 flex-col items-center relative left-4">
        <div className="flex justify-between items-center rotate-90 gap-3">
          <FaFacebook color="white" size={20} />
          <FaWhatsapp color="white" size={20} />
          <FaLinkedinIn color="white" size={20} />
          <FaTwitter color="white" size={20} />
          <FaGithub color="white" size={20} />
        </div>
        <hr className=" bg-white w-1 h-32 border-none absolute top-40" />
      </div>
    </>
  );
};
