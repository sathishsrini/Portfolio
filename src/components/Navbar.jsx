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
              "https://www.linkedin.com/in/sathish-it-a48230287/")
          }
          className="cursor-pointer"
        />
        <FaGithub
          onClick={() =>
            (window.location.href = "https://github.com/yourprofile")
          }
          className="cursor-pointer"
        />
        <FaInstagram
          onClick={() =>
            (window.location.href = "https://www.instagram.com/yourprofile")
          }
          className="cursor-pointer"
        />
        <FaSquareXTwitter
          onClick={() =>
            (window.location.href = "https://twitter.com/yourprofile")
          }
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
