import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Footer from "./Footer";
import Project from "./Project";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div className="py-4 bg-[#34353a] flex flex-col">
      <div className="max-w-[1150px] mx-auto flex flex-col justify-evenly">
        {/* <Navbar /> */}
        <div className="flex-1">
          <div className="mt-[150px]">
            <Hero />
          </div>
          <div className="mt-[150px]">
            <Skills />
          </div>
          <div className="mt-[150px]">
            <Project />
          </div>
          <div className="mt-[150px]">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
