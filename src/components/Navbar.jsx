import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const handleResumeClick = () => {
    window.open(resume, "_blank");
  };

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <nav className="mb-6 flex flex-wrap items-center justify-between py-4 mt-10 sm:py-6 md:mb-10">
      {/* Logo - Left aligned */}
      <div className="flex flex-shrink-0 items-center pl-4 sm:pl-10">
        <img 
          className="w-8 sm:w-10" 
          src={logo} 
          alt="logo" 
        />
      </div>

      {/* Navigation Items - Right aligned */}
      <div className="flex items-center gap-3 pr-4 text-xl sm:gap-4 sm:text-2xl sm:pr-10">
        {/* Resume Button */}
        <button
          onClick={handleResumeClick}
          className="cursor-pointer whitespace-nowrap rounded-lg bg-blue-500 px-3 py-1 text-sm text-white transition duration-300 hover:bg-blue-600 sm:px-4 sm:py-2 sm:text-base"
        >
          Resume
        </button>

        {/* Social Icons */}
        <div className="flex items-center gap-4 sm:gap-3">
          <FaLinkedin
            onClick={() => openLink("https://www.linkedin.com/in/sathishspringbootdeveloper/")}
            className="cursor-pointer text-white transition duration-300 hover:text-blue-400"
            aria-label="LinkedIn"
          />
          <FaGithub
            onClick={() => openLink("https://github.com/sathishsrini")}
            className="cursor-pointer text-white transition duration-300 hover:text-gray-400"
            aria-label="GitHub"
          />
          <FaInstagram
            onClick={() => openLink("https://www.instagram.com/shadow_fiire/")}
            className="cursor-pointer text-white transition duration-300 hover:text-pink-400"
            aria-label="Instagram"
          />
          <FaSquareXTwitter
            onClick={() => openLink("https://x.com/Sathish_fly")}
            className="cursor-pointer text-white transition duration-300 hover:text-gray-400"
            aria-label="Twitter"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;