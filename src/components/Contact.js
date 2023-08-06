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
    },
    {
      Icon: <BsWhatsapp />,
      Name: "Whatsapp",
      Details: "8200349568",
      Write: "Write Me",
      Right: <BsCaretRight />,
    },
    {
      Icon: <BsTwitter />,
      Name: "Twitter",
      Details: "usertw",
      Write: "Write Me",
      Right: <BsCaretRight />,
    },
  ];

  return (
    <div id="Contact" className="max-w-[1000px] mx-auto px-4">
      <div className="sm:flex sm:justify-around">
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
                    } row-span-2 rounded-lg px-[1rem] `}
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
                      <div className="">{val.Details}</div>
                      <div
                        className={`${
                          darktheme ? "text-trout" : "text-white"
                        } pt-1 flex items-center gap-1`}
                      >
                        <div> {val.Write} </div>
                        <div> {val.Right}</div>
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
            } text-xl font-medium flex justify-center `}
          >
            Write Me your Message
          </div>
          <div class="grid grid-rows-6 grid-flow-col gap-4 pt-5">
            <div className={` row-span-1`}>01</div>
            <div className={` `}> 01</div>
            <div className={` row-span-3`}>09</div>
            <div className={` `}>
              <button className=" hover:bg-lavender hover:text-ebony border-lavender border lg:text-base font-medium flex justify-center px-5 py-3 rounded-md">
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
