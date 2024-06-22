"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserChatTemplate from "@/components/userChat";
import Link from "next/link";
import Button from "@/components/button";
import { waitUntilSymbol } from "next/dist/server/web/spec-extension/fetch-event";
const StepQuestions = ({ triggerNextStep }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const options = [
    {
      id: 1,
      image: "/onboard/accessbank.png",
      title: "National Id Card",
      value: "1",
    },
    {
      id: 2,
      image: "/onboard/accessbank.png",
      title: "International Passport",
      value: "2",
    },
    {
      id: 3,
      image: "/onboard/accessbank.png",
      title: "Drivers License",
      value: "3",
    },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    triggerNextStep({ trigger: "7" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 min-w-[220px] text-white px-7 py-3 gap-5 rounded self-start flex flex-col bg-[#232626]"
    >
      {options.map((option) => (
        <label key={option.id} className="flex items-center gap-2">
          <input
            type="radio"
            name="bankAccount"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          <div className="flex gap-2 items-center">
            <img src={option.image} alt={option.title} className="w-8 h-8" />
            <span>{option.title}</span>
          </div>
        </label>
      ))}
      <button
        type="submit"
        className="bg-outline_orange text-white py-2 px-4 rounded"
        disabled={!selectedOption}
      >
        Submit
      </button>
    </form>
  );
};
const VerifyAccount = () => {
  const [finishOnbarding, setFinishOnboarding] = useState(false);
  const isValidPassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasSpecialChar
    );
  };

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
      message: `Hello👋  It’s good to see you again!  Kindly input your  nationality?`,
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: `Awesome, kindly input your home address`,
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
      message: "Great! Kindly select the type of ID card you want to use.!",
      trigger: "6",
    },
    {
      id: "6",
      component: <StepQuestions />,
      waitAction: true,
    },

    {
      id: "7",
      message: `Great! Kindly upload the ID card you want to use.`,
      trigger: "8",
    },

    {
      id: "8",
      options: [
        { value: 1, label: "Upload ID from Computer" },
        { value: 2, label: "Take a picture from the computer" },
      ],
      end: true,
    },
  ];

  const paginationIndicator = [
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
    { id: 4, isActive: false },
    { id: 5, isActive: false },
    { id: 6, isActive: false },
  ];

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

  function handleEnd({ steps, value }) {
    console.log(steps);
    setFinishOnboarding(true);
  }

  const { showModal } = useSelector((state) => state.LandingPage);
  console.log(showModal);
  return (
    <UserChatTemplate
      steps={steps}
      paginationIndicator={paginationIndicator}
      bottomText={"Welcome on board"}
      topText={"Finally"}
      showVerifyStep
      finishProcess={finishOnbarding}
      listOfSteps={listOfSteps}
      numberOfSteps={4}
      topRightPageText={"Have an account?"}
      handleEnd={handleEnd}
      upperRightPageComponent={
        <div className=" ml-auto flex">
          <Button
            customClassName=" text-white bg-btn_orange"
            text="Save and Exit"
          />{" "}
        </div>
      }
    />
  );
};

export default VerifyAccount;
