import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { LiaHashtagSolid } from "react-icons/lia";
import { MdCall, MdOutlineEmail } from "react-icons/md";
import { GrConnect } from "react-icons/gr";
import { Link } from "react-router";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Contactpg = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  return (
    <div className="overflow-hidden relative md:px-14 lg:px-28 py-10 gap-10 flex justify-between max-md:justify-center items-center h-full w-full">
      <h1 className="absolute tracking-wider leading-tight translate-x-64 w-full -right-[18%] max-md:-right-[20%] lg:top-0 top-2 text-white flex items-baseline font-bold text-[65px] lg:text-[100px] max-sm:hidden">
        Contact Me <GoDotFill size={30} className="text-secondary-button" />
      </h1>
      <div className="max-md:w-[80%] max-sm:w-full p-5 bg-primary-button">
        <h1 className="mb-10 text-2xl font-semibold text-white">
          Get Jazzy's Expertise
        </h1>
        {/* form */}
        <div className="space-y-10">
          <div className="relative field">
            <input
              type="text"
              id="username"
              placeholder="..."
              className="outline-none w-full text-lg py-2 font-semibold text-white/70 bg-transparent border-b border-[#081428]"
            />
            <label
              htmlFor="username"
              className="absolute top-0 left-0 translate-x-1 rounded-lg text-white/70 bg-primary text-lg pointer-events-none font-semibold"
            >
              Your Name
            </label>
          </div>
          <div className="relative field">
            <input
              type="email"
              id="username"
              placeholder="..."
              className="outline-none w-full text-lg py-2 font-semibold text-white/70 bg-transparent border-b border-[#081428]"
            />
            <label
              for="username"
              className="absolute top-0 left-0 translate-x-1 rounded-lg text-white/70 bg-primary text-lg pointer-events-none font-semibold"
            >
              Email
            </label>
          </div>
          <div className="relative field">
            <input
              type="tel"
              id="username"
              placeholder="..."
              className="outline-none w-full text-lg py-2 font-semibold text-white/70 bg-transparent border-b border-[#081428]"
            />
            <label
              for="username"
              className="absolute top-0 left-0 translate-x-1 rounded-lg text-white/70 bg-primary text-lg pointer-events-none font-semibold"
            >
              Phone Number
            </label>
          </div>
          <div className="relative field">
            <input
              type="text"
              id="username"
              placeholder="..."
              className="outline-none w-full text-lg py-2 font-semibold text-white/70 bg-transparent border-b border-[#081428]"
            />
            <label
              for="username"
              className="absolute top-0 left-0 translate-x-1 rounded-lg text-white/70 bg-primary text-lg pointer-events-none font-semibold"
            >
              Company / Organization
            </label>
          </div>
          <div className="relative field">
            <label
              for="username"
              className="rounded-lg text-white/70 bg-primary text-lg pointer-events-none font-semibold"
            >
              How can I help you ?
            </label>
            <textarea
              type="text"
              id="username"
              placeholder="..."
              className="outline-none w-full text-lg py-2 font-semibold text-white/70 bg-primary-button border border-[#081428] mt-2"
            />
          </div>
          <div className="space-y-5">
            <div className="flex  py-2 px-5 border border-black/50 w-fit border-dashed items-center gap-3 ">
              <input
                type="file"
                id="fileInput"
                placeholder="..."
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                for="fileInput"
                className=" text-white text-lg font-semibold border-none cursor-pointer text-center"
              >
                Upload File
              </label>
              <span className="text-sm text-[#333]">{fileName}</span>
            </div>
            <button className="bg-secondary-button w-full text-white text-lg font-semibold py-2 px-5 border-none rounded-md cursor-pointer text-center hover:bg-[#fe3e58e4]">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex flex-col flex-1 space-y-8 hidden">
        <div className="py-3">
          <h1 className="flex items-center gap-2 text-lg font-semibold text-white/70">
            Email <MdOutlineEmail size={20} />
          </h1>
          <p className="text-sm font-medium text-white/70">
            Personal:{" "}
            <a href="mailto:ajadiolamilekan14@gmail.com">
              ajadiolamilekan14@gmail.com
            </a>
          </p>
          <p className="text-sm font-medium text-white/70">
            Gigs:{" "}
            <a href="mailto:jazzyrain14@gmail.com">jazzyrain14@gmail.com</a>
          </p>
        </div>
        {/* HR */}
        <div className="flex my-2 gap-2 items-center">
          <hr className="w-1/2" />
          <LiaHashtagSolid size={20} color="white" />
          <hr className="w-1/2" />
        </div>
        <div className="py-3">
          <h1 className="flex items-center gap-2 text-lg font-semibold text-white/70">
            Call <MdCall size={20} />
          </h1>
          <p className="text-sm font-medium text-white/70">
            Personal: <span>+234 902 456 3580</span>
          </p>
          <p className="text-sm font-medium text-white/70">
            Gigs: <span>+234 806 144 9728</span>
          </p>
        </div>
        {/* HR */}
        <div className="flex my-2 gap-2 items-center">
          <hr className="w-1/2" />
          <LiaHashtagSolid size={20} color="white" />
          <hr className="w-1/2" />
        </div>
        <div className="py-3">
          <h1 className="flex items-center mb-4 gap-2 text-lg font-semibold text-white/70">
            Connect <GrConnect size={20} />
          </h1>
          <div className="flex gap-x-12">
            <a
              href="https://web.facebook.com/olalekanmartins.ajadi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} color="white" />
            </a>
            <a
              href="https://x.com/OlalekanAjadi14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={25} color="white" />
            </a>
            <a
              href="https://wa.me/2348061449728?text=i%27ve%20got%20work%20for%20you.%20My%20name%20is%20______.%0A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={25} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpg;
