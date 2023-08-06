import React from "react";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  const Navbar = [
    {
      name: "Home",
      href: "#Home",
    },
    {
      name: "About",
      href: "#About",
    },
    {
      name: "Skills",
      href: "#Experience",
    },
    {
      name: "Work",
      href: "#Work",
    },
    {
      name: "Contact",
      href: "#Contact",
    },
  ];
  const Icon = [
    {
      Icon: <BiLogoFacebook />,
    },
    {
      Icon: <AiOutlineTwitter />,
    },
    {
      Icon: <BiLogoLinkedin />,
    },
    {
      Icon: <BiLogoInstagram />,
    },
  ];
  return (
    <div className="mt-10 lg:mt-14">
      <div className="bg-dull">
        <div className="lg:py-14 py-10">
          <div className="flex justify-center text-shark font-medium text-3xl">
            <h1>Milan</h1>
          </div>
          <div className="flex justify-center gap-8 items-center py-8">
            {Navbar.map((val, id) => {
              return (
                <>
                  <div className="text-shark font-normal ">
                    <a href={val.href}>
                      <h1>{val.name} </h1>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-center gap-8 items-center mb-24">
            <div className="bg-shark rounded-md">
              <div className="p-[8px] text-lavender text-lg cursor-pointer ">
                <a>
                  <BiLogoFacebook />
                </a>
              </div>
            </div>
            <div className="bg-shark rounded-md">
              <div className="p-[8px] text-lavender text-lg cursor-pointer ">
                <AiOutlineTwitter />
              </div>
            </div>{" "}
            <div className="bg-shark rounded-md">
              <div className="p-[8px] text-lavender text-lg cursor-pointer ">
                <a
                  href="https://www.linkedin.com/in/milan-detruja-366463249/"
                  target="_blank"
                >
                  <BiLogoLinkedin />
                </a>
              </div>
            </div>{" "}
            <div className="bg-shark rounded-md">
              <div className="p-[8px] text-lavender text-lg cursor-pointer ">
                <BiLogoInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
