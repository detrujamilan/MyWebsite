import React from "react";

const Experience = ({ darktheme }) => {
  return (
    <>
      <div className="max-w-[1000px] mx-auto px-4" id="Experience">
        <div className=" py-10 lg:py-14">
          <div className="text-center">
            <h1 className="text-oslo_gray lg:text-[13px]">My Abilities</h1>
            <h1 className="lg:text-2xl text-lavender font-semibold">
              My Experience
            </h1>
          </div>
          <div className=" pt-10 lg:pt-20">
            <div className="grid  grid-col-1  sm:grid-cols-2 lg:grid-cols-2 gap-10">
              <div
                className={`rounded-xl ${
                  darktheme ? "bg-mercury" : "bg-mirage"
                }  flex items-center justify-center flex-col`}
              >
                <div className="py-10">
                  <div className="text-center">
                    <h1 className="lg:text-xl text-lavender font-semibold ">
                      Frontend
                      <br />
                      Development
                    </h1>
                  </div>
                  <div
                    className={`flex  ${
                      darktheme ? "text-shark" : "text-white"
                    } font-medium justify-between  gap-20 pt-3 lg:gap-44 lg:pt-10`}
                  >
                    <div>HTML</div>
                    <div>Bootstrap</div>
                  </div>
                  <div
                    className={`flex  ${
                      darktheme ? "text-shark" : "text-white"
                    } font-medium justify-between  gap-20 pt-3 lg:gap-44 lg:pt-10`}
                  >
                    <div>CSS/SCSS</div>
                    <div>Jquery</div>
                  </div>
                  <div
                    className={`flex  ${
                      darktheme ? "text-shark" : "text-white"
                    } font-medium justify-between  gap- pt-3 lg:gap-44 lg:pt-10`}
                  >
                    <div>Javascript</div>
                    <div>React</div>
                  </div>
                </div>
              </div>
              <div
                className={`rounded-xl ${
                  darktheme ? "bg-mercury" : "bg-mirage"
                }  flex items-center justify-center flex-col`}
              >
                <div className="py-10">
                  <div className="text-center">
                    <h1 className="lg:text-xl text-lavender font-semibold">
                      UI / UX <br />
                      Designer
                    </h1>
                  </div>
                  <div
                    className={`flex  ${
                      darktheme ? "text-shark" : "text-white"
                    } font-medium justify-between  gap-20 pt-3 lg:gap-44 lg:pt-10`}
                  >
                    <div>Figma</div>
                    <div>Sketch</div>
                  </div>
                  <div
                    className={`flex  ${
                      darktheme ? "text-shark" : "text-white"
                    } font-medium justify-between  gap-20 pt-3 lg:gap-44 lg:pt-10`}
                  >
                    <div>Adobe XD</div>
                    <div>Axure</div>
                  </div>
                  <div
                    className={`flex  ${
                      darktheme ? "text-shark" : "text-white"
                    } font-medium justify-between  gap-7 pt-3 lg:gap-44 lg:pt-10`}
                  >
                    <div>Adobe PhotoShop</div>
                    <div>Marvel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
