import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/sathishspringbootdeveloper/")
          }
          className="cursor-pointer"
        />
        <FaGithub
          onClick={() =>
            (window.location.href = "https://github.com/sathishsrini")
          }
          className="cursor-pointer"
        />
        <FaInstagram
          onClick={() =>
            (window.location.href = "https://www.instagram.com/s_athish_s/")
          }
          className="cursor-pointer"
        />
        <FaSquareXTwitter
          onClick={() =>
            (window.location.href = "https://x.com/Sathish_fly")
          }
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
