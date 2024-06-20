import { pathWay } from "./body";
import { useState } from "react";
import Link from "next/link";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import Image from "next/image";
import WelcomeToDashboard from "./Onboarding/welcome";
const UserChatTemplate = ({
  bottomText,
  topText,
  steps,
  numberOfSteps,
  listOfSteps,
  topRightPageText,
  paginationIndicator,
  finishProcess,
  stepCompleted,
  handleEnd
}) => {
  const [currentStep, setCurrentStep] = useState({ value: 1, finished: false });
  const theme = {
    background: "",
    fontFamily: "",
    headerBgColor: "#EF6C00",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#EF6C00",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  return (
    <div
      className={`bg-font_black min-h-screen text-[.9rem] md:items-center w-[95%] m-auto lg:w-full md:w-[60%] lg:items-stretch flex-col lg:flex-row flex text-white`}
    >
      <aside className={`bg-aside_onboard relative w-full  min-h-full lg:w-2/5`}>
        <div className={`border-b px-12 border-[#83796B] pt-7 pb-10`}>
          <div className={`relative w-1/2 h-[60px]`}>
            <Image
              layout="fill"
              src="/onboard/bgl-onboard-darklogo.png"
              alt="dark logo"
            />
          </div>
        </div>

        <div className={`px-12 flex flex-col gap-[20vh]`}>
          <div className={`flex pt-10 gap-4`}>
            <div className={`flex flex-col items-center`}>
              {Array.from({ length: numberOfSteps }).map((item, index) => (
                <div key={index} className={`flex flex-col items-center`}>
                  <div
                    className={`border flex items-center border-gray-200 w-fit rounded-full bg-white p-[1px]`}
                  >
                    <div
                      className={`rounded-full w-[25px] flex items-center justify-center ${
                        currentStep.value === index + 1
                          ? " bg-[#DA8E23]"
                          : "bg-default_steps"
                      } h-[25px]`}
                    >
                      <div
                        className={`rounded-full w-[10px] h-[10px] bg-white`}
                      ></div>
                    </div>
                  </div>
                  {index !== (numberOfSteps - 1 )&& (
                    <div className={`w-[3px] h-[40px] my-1 bg-[#E1F4F4]`}></div>
                  )}{" "}
                </div>
              ))}
            </div>
            <ul className={`flex gap-8 flex-col`}>
              {listOfSteps.map((item, index) => (
                <li key={index} className={`flex gap-1`}>
                  <div className={`flex flex-col`}>
                    <span>{item.title}</span>
                    <span>{item.txt}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex absolute bottom-[48px] flex-col gap-3 items-center lg:flex-row lg:justify-between lg:items-stretch">
            <span className={`text-default_steps`}>
              © BGLSecurityLimited2024
            </span>
            <span>
              {" "}
              <Link className={`underline text-[#11BC74]`} href="/">
                help@bgl.com
              </Link>
            </span>
          </div>
        </div>
      </aside>
      <main
        className={`px-6 py-12 flex flex-col gap-14  w-full lg:px-12 lg:w-3/5`}
      >
        <div
          className={`flex justify-between flex-col gap-3 lg:flex-row items-center`}
        >
          <div className={`flex w-4/5 lg:w-2/5 gap-3`}>
            {paginationIndicator.map((step) => (
              <div
                key={step.id}
                className={`w-[50px] h-2 rounded-full cursor-pointer ${
                  step.isActive ? "bg-white" : "bg-default_steps"
                }`}
                onClick={() => setActiveStep(step.id)}
              ></div>
            ))}
          </div>
          <div>
            <span className={`text-default_steps`}>{topRightPageText}</span>
            <span>
              {" "}
              <Link className={`underline text-[#11BC74]`} href="/">
                Click Here!
              </Link>
            </span>
          </div>
        </div>
        <ThemeProvider theme={theme}>
          <ChatBot
            hideHeader
            className={`${pathWay.className} text-font_black md:3/4 lg:w-full mx-auto`}
            steps={steps}
            bubbleOptionStyle={{ borderRadius: "0px" }}
            footerStyle={{
              background: "#131414",
            }}
            handleEnd={handleEnd}
            inputStyle={{
              borderTopRadius: "10px",
              border: "1px solid #DA8E23",
            }}
            bubbleStyle={{
              background: "#131414",
              border: "1px solid #DA8E23",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "60%",
            }}
            userBubbleStyle={{
              borderRadius: "10px",
              background: "#fff",
              color: "#4a4a4a",
              border: "1px solid #DA8E23",
              padding: "10px",
              margin: "5px 0",
            }}
            botAvatar="/onboard/Memoji.png"
          />
        </ThemeProvider>
      </main>
      {finishProcess && (
        <WelcomeToDashboard topText={topText} bottomText={bottomText} />
      )}
    </div>
  );
};

export default UserChatTemplate;
