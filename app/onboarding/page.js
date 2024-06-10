"use client";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import { pathWay } from "@/components/body";
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

  const steps = [
    {
      id: "1",
      message:
        "Hello👋Great to have you hear. Don’t worry, your information is safe with us. We take your privacy seriously. Let’s begin with the basics, shall we?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "Yes, let's do this!", trigger: "3" },
        { value: 2, label: "No", trigger: "1" },
      ],
    },
    {
      id: "3",
      message: "Okay! First things first, what’s your full name?",
      trigger: "4",
    },
    {
      id: "4",
      user: true,
      trigger: (value) => {
        return "5";
      },
    },
    {
      id: "5",
      message: "Great {previousValue}, nice to meet you!",
      trigger: "6",
    },
    {
      id: "6",
      message:
        "To ensure the security of your account and verify your identity. We’ll need your bank verification number (BVN).",
      trigger: "7",
    },
    {
      id: "7",
      user: true,
      trigger: "8",
    },
    {
      id: "8",
      message:
        "Awesome! You provided the correct BVN and we are able to process your details, kindly confirm them below",
      trigger: "9",
    },
    {
      id: "9",
      message: "Email : ",
      trigger: "10",
    },
    {
      id: "10",
      options: [
        { value: 1, label: "Okay", trigger: "11" },
        { value: 2, label: "Update", trigger: "11" },
      ],
    },
    {
      id: "11",
      message: "Number : 1234567889",
      trigger: "12",
    },
    {
      id: "12",
      options: [
        { value: 1, label: "Okay", trigger: "13" },
        { value: 2, label: "Update", trigger: "1" },
      ],
    },
    {
      id: "13",
      message:
        "Fantastic👌! Now, set a robust password with at least 8 characters, including lowercase, uppercase, and special characters.",
      trigger: "14",
    },
    {
      id: "14",
      user: true,
      trigger: "15",
    },
    {
      id: "15",
      message:
        "We’re almost there! Just a few more details to go, and you’ll be all set to dive into the world of stock trading with BGL😊.",
      trigger: "16",
    },
    {
      id: "16",
      message:
        "Wow, some account numbers were retrieved with your BVN. For smooth transaction of your money, kindly choose your permanent account number you want to be using on the app. (Note that this can’t be changed).",
      trigger: "17",
    },
    {
      id: "17",
      user: true,
      trigger: "18",
    },
    {
      id: "18",
      message:
        "Great! We’ve sent a one-time password (OTP) to the mobile number associated with your BVN. Please check and respond below.",
      trigger: "19",
    },
    {
      id: "19",
      user: true,
    },
    {
      id: "20",
      options: [
        { value: 1, label: "Seen", trigger: "13" },
        { value: 2, label: "Resend OTP", trigger: "18" },
      ],
    },
    {
      id: "21",
      message:
        "Great! Thank you for providing your BVN and OTP, Susan. We need a Security Question from you, pick your choice.",
      trigger: "22",
    },
    {
      id: "22",
      user: true,
      trigger: "23",
    },

    {
      id: "23",
      message:
        "Awesome! Gabriel. Lastly, we recommend setting up an Alert PIN for withdrawal. NB: No BGL staff will request your alert pin or password.",
      trigger: "24",
    },
    {
      id: "24",
      options: [
        { value: 1, label: "Okay, let's do this", trigger: "25" },
        { value: 2, label: "Skip", trigger: "23" },
      ],
    },
    {
      id: "25",
      message:
        "Awesome! Lastly, we recommend setting up an Alert PIN for withdrawal. NB: No BGL staff will request your alert pin or password.",
      trigger: "26",
    },
    {
      id: "26",
      user: true,
      end: true,
    },
  ];

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
    <div className="bg-font_black min-h-screen flex-col-reverse lg:flex-row flex text-white">
      <aside className="md:w-2/5">
        <header></header>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            {Array.from({ length: 4 }).map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="border flex items-center border-gray-200 w-fit rounded-full bg-white p-[1px]">
                  <div className="rounded-full w-[25px] flex items-center justify-center bg-[#DA8E23] h-[25px]">
                    <div className="rounded-full w-[10px] h-[10px] bg-white"></div>
                  </div>
                </div>
                <div className="w-[3px] h-[45px] my-1 bg-[#E1F4F4]"></div>
              </div>
            ))}
          </div>
          <ul className="flex gap-8 flex-col">
            {listOfSteps.map((item, index) => (
              <li key={index} className="flex gap-1">
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  <span>{item.txt}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className="  px-6 lg:px-12 md:w-3/5">
        <ThemeProvider theme={theme}>
          <ChatBot
            hideHeader
            className={`${pathWay.className} text-font_black md:3/4 lg:w-3/5 m-auto`}
            steps={steps}
            bubbleOptionStyle={{ borderRadius: "0px" }}
            footerStyle={{
              background: "#131414",
              border: "1px solid #DA8E23",
              borderRadius: "8px",
              padding: "4px",
            }}
            bubbleStyle={{
              background: "#131414",
              border: "1px solid #DA8E23",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "70%",
            }}
            userBubbleStyle={{
              borderRadius: "10px",
              background: "#fff",
              color: "#4a4a4a",
              border: "1px solid #DA8E23",
              padding: "10px",
              margin: "5px 0",
            }}
          />
        </ThemeProvider>
      </main>
    </div>
  );
};

export default Onboarding;
