"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import UserChatTemplate from "@/components/userChat";

const ForgotPassword = ({ steps, triggerNextStep }) => {
  return (
    <div className="w-1/2 min-w-[220px] text-white px-7 py-3 gap-5 rounded self-start flex flex-col bg-steps_component_bg">
      <button
        type="submit"
        className="border-outline_orange border text-white py-2 px-4 rounded"
      >
        Click here if you forgot password
      </button>
    </div>
  );
};

const Login = () => {
  const [finishLogin, setFinishLogin] = useState(false);
  const [stepsFinished, setStepsFinished] = useState([]);
  const listOfSteps = [
    {
      title: "Enter email address",
      txt: "Please input your correct email address",
    },
    {
      title: "Enter password",
      txt: "Kindly input your correct password",
    },
  ];

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  function handleEnd({steps,value}) {
    console.log(steps.email.value);

    // const email = steps.find((step) => step?.id == "email");

    // console.log("Email:", email);
    setFinishLogin(true);
  }

  const steps = [
    {
      id: "1",
      message:
        "Hello👋It’s good to see you again! To access your account, please enter login details below carefully. Shall we?",
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
      message: "Please enter your email address",
      trigger: "email",
    },
    {
      id: "email",
      user: true,
      validator: (value) => {
        if (isValidEmail(value)) {
          return true;
        } else {
          return "Please enter a valid email address";
        }
      },
      trigger: "5",
    },
    {
      id: "5",
      message:
        "Now let’s securely verify your identity. Please enter your password.",
      trigger: "password",
    },
    {
      id: "password",
      user: true,
      hideInput: true,
      trigger: ({ value }) => {
        // Replace this with your actual password validation logic if needed
        return "7";
      },
    },
    {
      id: "7",
      message: "You have successfully logged in!",
      end: true,
    },
    {
      id: "forgotPassword",
      component: <ForgotPassword />,
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

  const { showModal } = useSelector((state) => state.LandingPage);
  console.log(showModal);
  return (
    <UserChatTemplate
      steps={steps}
      paginationIndicator={paginationIndicator}
      bottomText={"Success! You're now logged in to your BGL account."}
      topText={"Welcome back!"}
      finishProcess={finishLogin}
      listOfSteps={listOfSteps}
      numberOfSteps={2}
      handleEnd={handleEnd}
      topRightPageText={"You already have an account?"}
    />
  );
};

export default Login;
