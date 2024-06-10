"use client";
import { useState } from "react";
const Onboarding = () => {
  const listOfSteps = [
    {
      title: "Your details",
      txt: "Please provide your name and BVN",
    },
    {
      title: "Choose a password",
      txt: "Choose a secure password",
    },
    {
      title: "Bank Account Verification",
      txt: "Pick your favorably permanent account number",
    },
    {
      title: "Set Up PIN",
      txt: "Use pin for transaction and security sake",
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };
  return (
    <div className="bg-font_black text-white ">
      <aside className="w-2/5" >
        <header></header>
        <div className="flex  gap-4">
          <div className="flex flex-col items-center ">
            {Array.from({ length: 4 }).map((item) => {
              return (
                <div className="flex flex-col items-center" >
                  <div className="border flex items-center border-gray-200 w-fit rounded-full bg-white p-[1px]">
                    <div className="rounded-full w-[25px] flex items-center justify-center  bg-[#DA8E23] h-[25px] ">
                      <div className="rounded-full w-[10px]  h-[10px] bg-white "></div>
                    </div>
                  </div>
                  <div className="w-[3px]  h-[45px] my-1 bg-[#E1F4F4]"></div>
                  {/* <span className=" w-[30px] h-[30px]">
                    <img src='/onboard/tick.png' alt="tick"/>
                </span> */}
                </div>
              );
            })}
          </div>

          <ul className="flex gap-8 flex-col">
            {listOfSteps.map((item, index) => {
              return (
                <li className="flex gap-1">
                  <div className="flex flex-col">
                    <span>{item.title}</span>
                    <span>{item.txt}</span>
                  </div>
                </li>
              );
            })}{" "}
          </ul>
        </div>
      </aside>
      <main>Onboarding yeah baby</main>
    </div>
  );
};

export default Onboarding;
