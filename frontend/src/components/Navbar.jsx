import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <Link to={"/"} className="text-white font-medium text-2xl">
        Aaditya Shrestha
      </Link>
      <div className="gap-4 text-sm text-white font-medium hidden md:flex select-none">
        <Link to={"/"} className="outline-none">
          Home
        </Link>
        <Link to={"/contact"} className="outline-none">
          Contact
        </Link>
      </div>
      <a
        href="https://calendly.com/aadityastha123456/30min"
        target="blank"
        className="bg-transparent text-white text-[16px] text-center px-4 py-2 rounded border border-white hover:bg-white hover:text-[#2d2d72] transition-all"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default Navbar;
