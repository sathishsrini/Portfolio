import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  // Function to handle the Resume button click
  const handleResumeClick = () => {
    // Open the resume in a new tab
    window.open(resume, "_blank");
  };

  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 ml-10 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 mb-3 flex items-center justify-center gap-4 text-2xl">
        {/* Resume Button */}
        <button
          onClick={handleResumeClick}
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Resume
        </button>

        {/* Social Icons */}
        <FaLinkedin
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/sathishspringbootdeveloper/")
          }
          className="cursor-pointer text-white hover:text-blue-400 transition duration-300"
        />
        <FaGithub
          onClick={() => (window.location.href = "https://github.com/sathishsrini")}
          className="cursor-pointer text-white hover:text-gray-400 transition duration-300"
        />
        <FaInstagram
          onClick={() => (window.location.href = "https://www.instagram.com/s_athish_s/")}
          className="cursor-pointer text-white hover:text-pink-400 transition duration-300"
        />
        <FaSquareXTwitter
          onClick={() => (window.location.href = "https://x.com/Sathish_fly")}
          className="cursor-pointer text-white hover:text-gray-400 transition duration-300"
        />
      </div>
    </nav>
  );
};

export default Navbar;
