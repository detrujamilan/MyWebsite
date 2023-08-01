import React, { useState } from "react";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import Herosection from "./Herosection";

const Header = () => {
  const [changeimg, setChangeImg] = useState(false);
  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-center lg:py-5">
        <div>
          <h1 className="text-lavender font-semibold">Milan</h1>
        </div>
        <div
          onClick={() => setChangeImg((show) => !show)}
          className="cursor-pointer"
        >
          {changeimg ? (
            <BiSun className="text-white" />
          ) : (
            <BiMoon className="text-white" />
          )}
        </div>
      </div>
      <Herosection/>
    </div>
  );
};

export default Header;
