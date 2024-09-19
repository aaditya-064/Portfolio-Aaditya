import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-white font-medium text-2xl">Aaditya Shrestha</p>
      <div className="gap-4 text-sm text-gray-500 font-medium hidden md:flex select-none">
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <a
        href="https://calendly.com/aadityastha123456/30min"
        target="blank"
        className="bg-[#34353a] text-white text-[16px] text-center px-4 py-2 rounded border border-white hover:bg-white hover:text-[#34353a] transition-all"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default Navbar;
