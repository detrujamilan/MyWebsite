import React from "react";

const Herosection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="lg:py-14">
        <div className="text-center">
          <h1 className="lg:text-base font-medium">Hello, I'm</h1>
        </div>
        <div className="text-center">
          <h1 className="text-lavender lg:text-[40px] font-semibold">
            Milan Detruja
          </h1>
        </div>
        <div className="text-center">
          <h1 className="lg:text-base font-medium">Frontend Developer</h1>
        </div>
        <div className="flex justify-center lg:py-10 lg:gap-5">
          <button className=" hover:bg-lavender hover:text-ebony border-lavender border lg:text-base font-medium lg:px-5 lg:py-3 rounded-md">
            Download CV
          </button>
          <button className="border-lavender border lg:text-base font-medium lg:px-5 lg:py-3 rounded-md bg-lavender text-ebony">
            About
          </button>
        </div>
      </div>
      <div className="flex justify-between lg:py-10">
        <div>
            <div></div>
            <div></div>
            <div></div>

        </div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </div>
  );
};

export default Herosection;
