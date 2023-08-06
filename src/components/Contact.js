import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsCaretRight, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { IconName } from "react-icons/bs";

const Contact = ({ darktheme }) => {
  const SocialDetails = [
    {
      Icon: <HiOutlineMail />,
      Name: "Email",
      Details: "detrujamilan0@gmail.com",
      Write: "Write Me",
      Right: <BsCaretRight />,
      href: "mailto:example@domain.com",
    },
    {
      Icon: <BsWhatsapp />,
      Name: "Whatsapp",
      Details: "8200349568",
      Write: "Write Me",
      Right: <BsCaretRight />,
      href: "https://api.whatsapp.com/send?phone=+918200349568&text=Hey there!",
    },
    {
      Icon: <BsTwitter />,
      Name: "Twitter",
      Details: "usertw",
      Write: "Write Me",
      Right: <BsCaretRight />,
      href: "mailto:example@domain.com",
    },
  ];

  return (
    <div id="Contact" className="max-w-[1000px] mx-auto px-4">
      <div className="sm:flex sm:justify-between">
        <div>
          <div
            className={`${
              darktheme ? "text-shark" : "text-white"
            } text-xl font-medium flex justify-center `}
          >
            Talk to me
          </div>
          <div class="grid grid-rows-6 grid-flow-col gap-4 pt-5">
            {SocialDetails.map((val, id) => {
              return (
                <>
                  <div
                    className={` ${
                      darktheme ? " bg-mercury" : "bg-mirage "
                    } row-span-2 rounded-lg lg:px-[6.5rem] `}
                  >
                    <div className="px-4 py-8 flex justify-center flex-col items-center">
                      <div
                        className={`${
                          darktheme ? "text-shark" : "text-white"
                        } text-3xl  `}
                      >
                        {val.Icon}
                      </div>

                      <div
                        className={`${
                          darktheme ? "text-trout" : "text-white"
                        } pt-1`}
                      >
                        {val.Name}
                      </div>
                      <div
                        className={`${
                          darktheme ? " text-trout" : "text-white"
                        }`}
                      >
                        {val.Details}
                      </div>
                      <div
                        className={`${
                          darktheme ? "text-trout" : "text-white"
                        } pt-1 flex items-center gap-1`}
                      >
                        <a href={val.href} rel="#">
                          <div> {val.Write} </div>
                        </a>
                          <div className="cursor-pointer"> {val.Right}</div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div>
          <div
            className={`${
              darktheme ? "text-shark" : "text-white"
            } text-xl font-medium flex justify-center  pt-10 md:pt-0 `}
          >
            Write Me your Message
          </div>
          <div class="grid grid-rows-6 grid-flow-col gap-4 pt-5">
            <div
              className={`${
                darktheme ? "text-trout" : "text-white"
              } flex-col flex `}
            >
              <label>Name</label>
              <input
                className="border-2 rounded-md border-trout bg-transparent lg:w-[28rem]  h-[3rem] p-1"
                type="text"
                placeholder="Enter Name"
              />
            </div>
            <div
              className={`${
                darktheme ? "text-trout" : "text-white"
              } flex-col flex `}
            >
              <label>Email</label>
              <input
                className="border-2 rounded-md border-trout bg-transparent lg:w-[28rem] h-[3rem] p-1"
                type="text"
                placeholder="Enter Email"
              />
            </div>
            <div
              className={` ${
                darktheme ? "text-trout" : "text-white"
              } row-span-3 flex flex-col`}
            >
              <label>Message</label>
              <textarea
                className="border-2 rounded-md border-trout bg-transparent lg:w-[28rem] h-[10rem] p-1"
                type="text"
                placeholder="Write your Message"
              />
            </div>
            <div>
              <button
                className={`hover:bg-lavender hover:text-ebony ${
                  darktheme ? "text-trout" : "text-white"
                } border-lavender border lg:text-base font-medium flex justify-center px-5 py-3 rounded-md`}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
