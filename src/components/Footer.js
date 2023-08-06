import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BiBookHeart } from "react-icons/bi";

const Footer = () => {
  const SectionMap = [
    {
      Icon: <AiOutlineHome />,
      href: "#Home",
    },
    {
      Icon: <AiOutlineUser />,
      href: "#About",
    },
    {
      Icon: <BiBookHeart />,
      href: "#Experience",
    },
    {
      Icon: <BiBriefcaseAlt2 />,
      href: "#",
    },
    {
      Icon: <BiMessageSquareDetail />,
      href: "#Contact",
    },
  ];
  return (
    <div className="max-w-[1000px] mx-auto px-4">
      <div className="flex fixed right-0 lg:gap-8 left-0 bottom-5 bg-mirage w-fit m-auto lg:px-10 lg:py-5 rounded-full">
        {SectionMap.map((val, id) => {
          return (
            <>
              <div key={id} className="border lg:p-2 rounded-xl cursor-pointer">
                <a href={val.href}>{val.Icon}</a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
