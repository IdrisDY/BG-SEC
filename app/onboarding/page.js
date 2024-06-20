"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import UserChatTemplate from "@/components/userChat";

const StepQuestions = ({ role, steps, triggerNextStep }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 1,
      image: "/onboard/accessbank.png",
      title: "123456788",
      value: "1",
    },
    {
      id: 2,
      image: "/onboard/accessbank.png",
      title: "123456788",
      value: "2",
    },
    {
      id: 3,
      image: "/onboard/accessbank.png",
      title: "123456788",
      value: "3",
    },
  ];
  const securityOptions = [
    {
      id: 1,
      title: "Your birthday date",
      value: "1",
    },
    {
      id: 2,
      title: "Your mother maiden's name",
      value: "2",
    },
    {
      id: 3,
      title: "Your favorite colour",
      value: "3",
    },
    {
      id: 4,
      title: "Your state of origin",
      value: "4",
    },
    {
      id: 3,
      title: "Your popular artist",
      value: "5",
    },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make the backend request here
    // fetch("/api/submit", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ selectedOption }),
    // }).then(() => {
    //   // Trigger the next step
    //   triggerNextStep();
    console.log("wyling");
    // });
    triggerNextStep();
  };

  if (role === "Account Retrieval") {
    return (
      <form
        onSubmit={handleSubmit}
        className="w-1/2 min-w-[220px] text-white px-7 py-3 gap-5 rounded self-start flex flex-col bg-[#232626]"
      >
        {options.map((option) => (
          <label
            key={option.id}
            className="flex justify-between items-center gap-2"
          >
            <div className="flex gap-2 items-center">
              <img src={option.image} alt={option.title} className="w-8 h-8" />
              <span>{option.title}</span>
            </div>
            <input
              type="radio"
              name="bankAccount"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
            />
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
  } else {
    return (
      <form
        onSubmit={handleSubmit}
        className="w-1/2 min-w-[220px] text-white px-7 py-3 gap-5 rounded self-start flex flex-col bg-[#232626]"
      >
        {securityOptions.map((option) => (
          <label
            key={option.id}
            className="flex justify-between items-center gap-2"
          >
            <div className="flex gap-2 items-center">
              <span>{option.title}</span>
            </div>
            <input
              type="radio"
              name="bankAccount"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
            />
          </label>
        ))}
        <button
          type="submit"
          className="bg-outline_orange text-white py-2 px-4 rounded"
          disabled={!selectedOption}
        >
          Choose
        </button>
      </form>
    );
  }
};

const Onboarding = () => {
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
      message:
        "Hello👋Great to have you here. Don’t worry, your information is safe with us. We take your privacy seriously. Let’s begin with the basics, shall we?",
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
      validator: (value) => {
        if (isValidPassword(value)) {
          return true;
        } else {
          return "Password must be at least 8 characters long and include lowercase, uppercase, and special characters";
        }
      },
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
      component: <StepQuestions role="Account Retrieval" />,
      trigger: "18",
    },

    {
      id: "18",
      user: true,
      trigger: "19",
    },
    {
      id: "19",
      message:
        "Great! We’ve sent a one-time password (OTP) to the mobile number associated with your BVN. Please check and respond below.",
      trigger: "20",
    },
    {
      id: "20",
      options: [
        { value: 1, label: "Seen", trigger: "21" },
        { value: 2, label: "Resend OTP", trigger: "19" },
      ],
    },
    {
      id: "21",
      user: true,
      trigger: "22",
    },
    {
      id: "22",
      message:
        "Great! Thank you for providing your BVN and OTP, Susan. We need a Security Question from you, pick your choice.",
      trigger: "23",
    },
    {
      id: "23",
      component: <StepQuestions role="Security Question" />,
      trigger: "24",
    },

    {
      id: "24",
      user: true,
      trigger: "25",
    },

    {
      id: "25",
      message:
        "Awesome! Gabriel. Lastly, we recommend setting up an Alert PIN for withdrawal. NB: No BGL staff will request your alert pin or password.",
      trigger: "26",
    },
    {
      id: "26",
      options: [
        { value: 1, label: "Okay, let's do this", trigger: "27" },
        { value: 2, label: "Skip", trigger: "25" },
      ],
    },
    {
      id: "27",
      user: true,
      trigger: () => {
        return '28'
      },
      end:true
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

  function handleEnd({steps,value}){
    console.log(steps);
  }

  const { showModal } = useSelector((state) => state.LandingPage);
  console.log(showModal);
  return (
    <UserChatTemplate
      steps={steps}
      paginationIndicator={paginationIndicator}
      bottomText={"Welcome on board"}
      topText={"Finally"}
      finishProcess={finishOnbarding}
      listOfSteps={listOfSteps}
      numberOfSteps={4}
      topRightPageText={"Have an account?"}
      handleEnd={handleEnd}
    />
  );
};

export default Onboarding;
