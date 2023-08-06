import React from "react";
import { BsCaretRight } from "react-icons/bs";

const Services = ({ darktheme }) => {
  const ServicesDetails = [
    {
      Heading: "Developing Project",
      Title: "See More",
      Icon: <BsCaretRight />,
      Herf: "mialn",
    },
    {
      Heading: "UI/UX Designing Project",
      Title: "See More",
      Icon: <BsCaretRight />,
      Herf: "mialn",
    },
  ];
  return (
    <>
      <div className="max-w-[1000px] mx-auto px-4" id="Scroll">
        <div className="lg:py-20">
          <div className="text-center">
            <h1 className="text-oslo_gray lg:text-[13px]">My Services</h1>
            <h1 className="lg:text-2xl text-lavender font-semibold">
              What I Offer
            </h1>
          </div>
          <div className="py-10 lg:pt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {ServicesDetails?.map((val, id) => {
                return (
                  <>
                    <div
                      key={id}
                      className={`rounded-xl ${
                        darktheme ? "bg-mercury" : "bg-mirage"
                      }  flex items-center justify-center flex-col py-5`}
                    >
                      <div
                        className={`lg:text-xl font-medium ${
                          darktheme ? "text-shark" : "text-lavender"
                        }`}
                      >
                        {val.Heading}
                      </div>
                      <div className="flex items-center lg:gap-2 lg:pt-5 text-lavender">
                        <div className="font-medium">
                          <a href={val.Herf} className="lg:text-sm About">
                            {val.Title}
                          </a>
                        </div>
                        <div className="cursor-pointer">{val.Icon}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
