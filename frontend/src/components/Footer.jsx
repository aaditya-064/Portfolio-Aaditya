import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 mt-10">
      <div className="flex items-center mx-auto flex-col sm:flex-row sm:justify-between">
        <div className="mt-4">
          <img
            src="/portrait2.jpg"
            alt=""
            className="h-7 w-7 rounded-full object-contain"
          />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <a href="https://www.linkedin.com/in/aaditya-shrestha-148318286/">
            <img src="/linkedin.png" alt="Linkedin" className="h-6 w-6" />
          </a>
          <a href="https://github.com/aaditya-064">
            <img src="/github.png" alt="GitHub" className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/Aaditya.Shta">
            <img src="/facebook.png" alt="Facebook" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
