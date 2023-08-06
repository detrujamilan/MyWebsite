import React from "react";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import Herosection from "./Herosection";

const Header = ({ setDarkTheme, darktheme }) => {
  return (
    <>
      <div className="= max-w-[1000px] mx-auto px-6 sticky top-0" id="Home">
        <div className="flex justify-between items-center py-3 lg:py-5">
          <div>
            <h1
              className={` ${
                darktheme ? "text-shark" : "text-lavender"
              }  font-semibold`}
            >
              Milan
            </h1>
          </div>
          <div
            onClick={() => setDarkTheme((show) => !show)}
            className="cursor-pointer"
          >
            {darktheme ? (
              <BiSun className={`${darktheme && "text-black"}`} />
            ) : (
              <BiMoon className="text-white" />
            )}
          </div>
        </div>
      </div>
      <Herosection darktheme={darktheme} />
    </>
  );
};

export default Header;
