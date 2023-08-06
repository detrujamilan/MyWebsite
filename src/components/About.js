import React from "react";
import about from "../assets/images/about.jpg";
import { BiAward } from "react-icons/bi";
import { BiBriefcaseAlt } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
const AboutInfo = [
  {
    title: "Experience",
    icon: <BiAward className="text-lavender" />,
    subtitle: "2 Years Working",
  },
  {
    title: "Completed",
    icon: <BiBriefcaseAlt className="text-lavender" />,
    subtitle: "48+ Projects",
  },
  {
    title: "Support",
    icon: <BiSupport className="text-lavender" />,
    subtitle: "Online 24/7",
  },
];

const About = () => {
  return (
    <>
      <div className="max-w-[1000px] mx-auto px-4 py-10 lg:py-14" id="About">
        <div className="text-center">
          <h1 className="text-oslo_gray lg:text-[13px]">My Intro</h1>
          <h1 className="lg:text-2xl text-lavender font-semibold">About Me</h1>
        </div>
        <div className="lg:py-10">
          <div className=" md:flex ">
            <div className="  min-w-[200px] mx-auto max-w-[200px] flex justify-center">
              <img src={about} alt="" className="rounded-3xl" />
            </div>
            {AboutInfo.map((val, id) => {
              return (
                <div
                  key={id}
                  className="rounded-xl bg-mirage flex items-center justify-center flex-col my-7"
                >
                  <div className="flex justify-center">{val.icon}</div>
                  <div className="flex justify-center lg:text-sm font-bold lg:pt-2">
                    <h1>{val.title}</h1>
                  </div>
                  <div className="flex justify-center lg:text-[10px] text-oslo_gray lg:pt-2 font-medium">
                    {val.subtitle}
                  </div>
                </div>
              );
            })}
            <div>
              <p className="text-center">
                Frontend Developer. I create web pages with UI / UX user
                interfaces, I have years of experience and many clients are
                happy with the woek i did.
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <button className=" hover:bg-lavender hover:text-ebony border-lavender border lg:text-base font-medium flex justify-center px-5 py-3 rounded-md">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
