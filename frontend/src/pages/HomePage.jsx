import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div className="py-4 bg-gradient-to-r from-slate-800 to-indigo-900 flex flex-col overflow-hidden">
      <div className="max-w-[1150px] mx-auto flex flex-col justify-evenly">
        <Navbar />
        <div className="flex-grow">
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
