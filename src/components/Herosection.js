import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMouse } from "react-icons/bs";

const Herosection = ({ darktheme }) => {
  return (
    <>
      <div className="max-w-[1000px] mx-auto ">
        <div className="py-10 lg:py-14">
          <div className="text-center">
            <h1
              className={` ${
                darktheme ? "text-shark" : "text-white"
              } lg:text-base  font-medium`}
            >
              Hello, I'm
            </h1>
          </div>
          <div className="text-center">
            <h1 className="text-lavender lg:text-[40px] font-semibold">
              Milan Detruja
            </h1>
          </div>
          <div className="text-center">
            <h1
              className={`  ${
                darktheme ? "text-shark" : "text-white"
              } lg:text-base font-medium`}
            >
              Frontend Developer
            </h1>
          </div>
          <div className="sm:flex sm:justify-center sm:py-5 md:py-10 sm:gap-5">
            <div className="flex justify-center pt-5 md:pt-0">
              <button
                className={`hover:bg-lavender ${
                  darktheme && "text-shark"
                } hover:text-shark border-lavender border lg:text-base font-medium  px-5 py-3 rounded-md`}
              >
                Download CV
              </button>
            </div>
            <div className="flex justify-center pt-5 md:pt-0">
              <a href="#About">
                <button className="border-lavender border lg:text-base font-medium px-5 py-3 rounded-md bg-lavender text-ebony">
                  About
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-8 lg:py-10">
          <div>
            <div>
              <a href="https://github.com/detrujamilan" target="_blank">
                <BsLinkedin />
              </a>
            </div>
            <div className="py-3">
              <a
                href="https://www.linkedin.com/in/milan-detruja-366463249/"
                target="_blank"
              >
                <BsGithub />
              </a>
            </div>
          </div>
          <div className="bg-image"></div>
          <div>
            <div>
              <a href="#Scroll">
                <BsMouse />
              </a>
            </div>
            <div className="transform -rotate-90">Scroll Down</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
