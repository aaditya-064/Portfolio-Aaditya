import React from "react";

const Hero = () => {
  return (
    <div className="w-full mx-auto mt-[-45px]">
      <div className="flex justify-center">
        <img
          src="/potrait.jpg"
          className="h-44 rounded-full w-44 sm:h-64 sm:w-64 object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center mt-10">
        <p className="text-2xl text-white text-center font-normal">
          HI, <br /> I'M
          <span className="text-[#ffcb6c] text-4xl ml-2">Aaditya Shrestha</span>
        </p>
        <p className="font-medium mt-2 text-lg text-[#e7e6e7]">
          Full Stack Developer
          <span className="font-light"> based in Nepal</span>
        </p>
        <a
          href="#"
          className="mt-7 text-[#ffcb6c] font-medium border border-[#ffcb6c] w-36 px-3 pl-7 py-2 rounded"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
