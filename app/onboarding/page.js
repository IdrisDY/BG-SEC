"use client";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserChatTemplate from "@/components/userChat";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { socket } from "@/utils/socket";
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import IframeModal from "@/components/iframeModal/modal";
import MessageComponent from "@/components/Onboarding/chatMsgBox";

const Onboarding = () => {
  const [finishOnbarding, setFinishOnboarding] = useState(false);
  const [openIframe, setOpenIframe] = useState(false);
  const [readMessage, setReadMessage] = useState(false);
  const [read, setRead] = useState(false);
  const [iframeURL, setIframeURL] = useState("");
  const [bvnInfo, setBvnInfo] = useState({});

  function updateRead() {
    setRead(!read);
  }

  const StepQuestions = ({ role, steps, triggerNextStep }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const items = steps.BVN?.value?.account?.data;

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

    const handleSubmit = async (event) => {
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

      const phoneNo = steps?.update_number?.value || steps.BVN?.value?.phoneNo;

      if (role === "Account Retrieval") {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/bvn`,
            { bvn: steps.BVN?.value?.bvn, phone: phoneNo },
            {
              headers: {
                "x-api-key": "BGL-AUTH",
                "Content-Type": "application/json",
              },
            }
          );

          if (response) {
            triggerNextStep({ trigger: "18" });
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        triggerNextStep({ value: { selectedOption }, trigger: "23" });
      }
    };

    console.log(items);
    if (role === "Account Retrieval") {
      return (
        <form
          onSubmit={handleSubmit}
          className="w-1/2 min-w-[220px] text-white px-7 py-3 gap-5 rounded self-start flex flex-col bg-[#232626]"
        >
          {items.length === 0 && (
            <div> No accounts were found linked to the number. </div>
          )}
          {items.length > 0 &&
            items.map((option, i) => (
              <label
                key={i}
                className="flex justify-between items-center gap-2"
              >
                <div className="flex gap-2 items-center">
                  <span>{option.accountNumber}</span>
                </div>
                <input
                  type="radio"
                  name="bankAccount"
                  value={option.accountNumber}
                  checked={selectedOption === option.accountNumber}
                  onChange={handleOptionChange}
                />
              </label>
            ))}
          <button
            type="submit"
            className="bg-outline_orange hover:bg-hover-orange-dark text-white py-2 px-4 rounded"
            disabled={items.length > 0 && !selectedOption}
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
            className="bg-outline_orange hover:bg-hover-orange-dark text-white py-2 px-4 rounded"
            disabled={!selectedOption}
          >
            Choose
          </button>
        </form>
      );
    }
  };

  const IframeWrapper = ({ role, steps, triggerNextStep }) => {
    const [inputValue, setInputValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [iframeURL, setIframeURL] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleSubmit = async () => {
      setIsLoading(true);
      setDisabled(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/bvnConsent`,
          {
            params: { bvn: inputValue },
            headers: {
              "x-api-key": "BGL-AUTH",
              "Content-Type": "application/json",
            },
          }
        );
        setIframeURL(response?.data?.data?.url);
        setIsOpen(true);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    function resetState() {
      setInputValue("");
      setIframeURL("");
    }
    async function closeModal() {
      setIsOpen(false);

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/bvnInfo`,
          {
            params: { bvn: inputValue },
            headers: {
              "x-api-key": "BGL-AUTH",
              "Content-Type": "application/json",
            },
          }
        );
        if (response?.data?.message === "bvn not found") {
          triggerNextStep({ trigger: "BVNError" });
        }
        if (response) {
          setBvnInfo(response?.data?.data);

          setTimeout(() => {
            setDisabled(false);
            setIsLoading(false);

            triggerNextStep({ value: response?.data?.data, trigger: "8" });
          }, 2000);
        }
        console.log(response);
      } catch (error) {
        console.error(error);

        triggerNextStep({ trigger: "BVNError" });
      } finally {
        setDisabled(false);
        setIsLoading(false);
      }
    }

    return (
      <FormControl>
        <FormLabel>Enter BVN</FormLabel>
        <InputGroup>
          <Input
            color={"white"}
            type={"text"}
            placeholder="Enter BVN"
            value={inputValue}
            disabled={disabled}
            onChange={handleChange}
          />
        </InputGroup>
        <Button
          isLoading={isLoading}
          disabled={disabled}
          mt={2}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <IframeModal isOpen={isOpen} url={iframeURL} onClose={closeModal} />
      </FormControl>
    );
  };

  const NumberEmail = ({ previousStep, steps, value, type }) => {
    console.log(previousStep, steps, value);
    return (
      <div className="border text-white w-full border-outline_orange rounded-lg p-6">
        {" "}
        {`${type}:`}{" "}
        {type === "Email" ? steps.BVN?.value?.email : steps.BVN?.value?.phoneNo}{" "}
      </div>
    );
  };

  // console.log(socket);
  const isValidPassword = (password) => {
    const minLength = 8;
    return password.length >= minLength;
  };

  const isValidPassCode = (password) => {
    const minLength = 4;

    return password.length === minLength;
  };
  const router = useRouter();

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

  // useEffect(() => {
  //   const handleBvnConsent = (msg) => {
  //     console.log("Message from server:", msg);
  //   };

  //   socket.on("bvn-consent", handleBvnConsent);

  //   return () => {
  //     socket.off("bvn-consent", handleBvnConsent);
  //   };
  // }, [socket]);
  async function validateBVN(info) {
    // console.log(socket);
    // socket.emit("join", info.value);
    // socket.emit("bvn-consent", { bvn: info.value });
    setOpenIframe(true);
    // socket.on("bvn-consent", (msg) => {
    //   console.log(msg);
    // });

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/bvnConsent`,
        {
          params: {
            bvn: info.value,
          },
          headers: {
            "x-api-key": "BGL-AUTH",
            "Content-Type": "application/json",
          },
        }
      );
      setIframeURL(response?.data?.data?.url);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const steps = [
    {
      id: "1",
      component: (
        <MessageComponent msg="Hello👋Great to have you here. Don’t worry, your information is safe with us. We take your privacy seriously. Let’s begin with the basics, shall we?" />
      ),
      asMessage: true,
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
      component: (
        <MessageComponent msg="Okay! First things first, what’s your full name ? (first name, then last name)" />
      ),
      asMessage: true,
      trigger: "fullname",
    },
    {
      id: "fullname",
      user: true,
      trigger: (value) => {
        return "greet";
      },
    },
    {
      id: "greet",
      component: <MessageComponent msg={`Great , nice to meet you!`} />,
      asMessage: true,
      trigger: "6",
    },
    {
      id: "6",
      component: (
        <MessageComponent msg="To ensure the security of your account and verify your identity. We’ll need your bank verification number (BVN)." />
      ),
      asMessage: true,
      trigger: "BVN",
    },
    {
      id: "BVN",
      component: <IframeWrapper />,
      waitAction: true,
    },
    {
      id: "BVNError",
      component: (
        <MessageComponent msg="There was an error validating your BVN. Please input your correct BVN and try again." />
      ),
      asMessage: true,
      trigger: "BVN",
    },
    {
      id: "8",
      component: (
        <MessageComponent msg="Awesome! You provided the correct BVN and we are able to process your details, kindly confirm them below" />
      ),
      asMessage: true,
      trigger: "9",
    },
    {
      id: "error",
      component: (
        <MessageComponent msg="Something went wrong please try again" />
      ),
      asMessage: true,
      trigger: "6",
    },
    {
      id: "9",
      component: <NumberEmail type="Email" />,
      trigger: "10",
    },
    {
      id: "10",
      options: [
        { value: 1, label: "Okay", trigger: "11" },
        { value: 2, label: "Update", trigger: "update_email" },
      ],
    },
    {
      id: "11",
      component: <NumberEmail type="Number" />,
      trigger: "12",
    },
    {
      id: "update_email",
      user: true,
      trigger: "11",
    },
    {
      id: "12",
      options: [
        { value: 1, label: "Okay", trigger: "13" },
        { value: 2, label: "Update", trigger: "update_number" },
      ],
    },
    {
      id: "update_number",
      user: true,
      trigger: "13",
    },
    {
      id: "13",
      component: (
        <MessageComponent msg="Fantastic👌! Now, set a robust password with at least 8 characters, including lowercase, uppercase, and special characters." />
      ),
      asMessage: true,
      trigger: "password",
    },
    {
      id: "password",
      user: true,
      trigger: "15",
      validator: (value) => {
        if (isValidPassword(value)) {
          return true;
        } else {
          return "Password must be at least 8 characters long!";
        }
      },
    },
    {
      id: "15",
      component: (
        <MessageComponent msg="We’re almost there! Just a few more details to go, and you’ll be all set to dive into the world of stock trading with BGL😊." />
      ),
      asMessage: true,
      trigger: "16",
    },
    {
      id: "16",
      component: (
        <MessageComponent msg="Wow, some account numbers were retrieved with your BVN. For smooth transaction of your money, kindly choose your permanent account number you want to be using on the app. (Note that this can’t be changed)." />
      ),
      asMessage: true,
      trigger: "17",
    },
    {
      id: "17",
      component: <StepQuestions role="Account Retrieval" />,
      waitAction: true,
    },
    {
      id: "18",
      component: (
        <MessageComponent msg="Great! We’ve sent a one-time password (OTP) to the mobile number associated with your BVN. Please check and respond below." />
      ),
      asMessage: true,
      trigger: "19",
    },
    {
      id: "19",
      options: [
        { value: 1, label: "Seen", trigger: "20" },
        { value: 2, label: "Resend OTP", trigger: "18" },
      ],
    },
    {
      id: "20",
      user: true,
      trigger: "21",
    },
    {
      id: "21",
      component: (
        <MessageComponent msg="Great! Thank you for providing your BVN and OTP, Susan. We need a Security Question from you, pick your choice." />
      ),
      asMessage: true,
      trigger: "securityQuestion",
    },
    {
      id: "securityQuestion",
      component: <StepQuestions role="Security Question" />,
      waitAction: true,
    },
    {
      id: "23",
      user: true,
      trigger: "24",
    },
    {
      id: "24",
      component: (
        <MessageComponent msg="Awesome! Gabriel. Lastly, we recommend setting up an Alert PIN for withdrawal. NB: No BGL staff will request your alert pin or password." />
      ),
      asMessage: true,
      trigger: "25",
    },
    {
      id: "25",
      options: [
        { value: 1, label: "Okay, let's do this", trigger: "securityPin" },
        { value: 2, label: "Skip", trigger: "24" },
      ],
    },
    {
      id: "securityPin",
      user: true,
      trigger: () => {
        return "27";
      },
      validator: (value) => {
        if (isValidPassCode(value)) {
          return true;
        } else {
          return "Password must be exactly 4 characters long.";
        }
      },
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

  async function handleEnd({ steps, value }) {
    const nextOfKin = {
      nextOfKin: {
        fullName: "Lorem",
        relationship: "brother",
        email: "lorem@mailinatior.com",
        mobile: "08011111111",
        residentialAddress: "12, Amope Amoo Mafoluku",
        cityOfResidence: "Oshodi",
        gender: "Male",
        stateOfResidence: "Lagos",
      },
    };

    const updatedEmail = steps?.update_email?.value;
    const updatedNumber = steps?.update_number?.value;

    const {
      title,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      gender,
      stateOfOrigin,
      residentialAddress,
      account,
      enrollmentBank,
      nationality,
      bvn,
    } = steps.BVN.value;
    // const firstName = name[0]
    // const lastName = name[1]

    const finalObj = {
      password: steps?.password?.value,
      email: updatedEmail || steps?.BVN?.value?.email,
      title,
      firstName,
      middleName,
      lastName,
      mobile: updatedNumber || steps?.BVN?.value?.phoneNo,
      dateOfBirth: "05/04/1994",
      gender,
      state: stateOfOrigin || "Oyo",
      address: residentialAddress || "Ikorodu",
      city: "Ikorodu",
      nationality: "Nigerian",
      profilePic: "http://localhost.jpg/onboard/access.png",
      title: "Mr",
      account: {
        bankName: enrollmentBank || "Kuda",
        accountNumber: "0000000000",
        accountName: "Tester",
        bvn: bvn,
        bankCode: "011",
      },
      userType: "IND",
      ...nextOfKin,
      securityPin: steps?.securityPin?.value,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/authenticate`,
        finalObj,
        {
          headers: {
            "x-api-key": "BGL-AUTH",
            "Content-Type": "application/json",
          },
        }
      );

      if (response) {
      }
    } catch (error) {
      console.error(error);
    }
    setFinishOnboarding(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 700);

    console.log(finalObj);
  }

  const { showModal } = useSelector((state) => state.LandingPage);
  console.log(showModal);
  return (
    <>
      <UserChatTemplate
        steps={steps}
        paginationIndicator={paginationIndicator}
        bottomText={"Welcome on board"}
        topText={"Finally"}
        finishProcess={finishOnbarding}
        listOfSteps={listOfSteps}
        numberOfSteps={4}
        topRightPageText={"Have an account?"}
        updateRead={updateRead}
        handleEnd={handleEnd}
        upperRightPageComponent={
          <div className=" ml-auto flex">
            <span className={`text-default_steps`}>Have an account?</span>
            <span>
              {" "}
              <Link className={`underline text-[#11BC74]`} href="/">
                Click Here!
              </Link>
            </span>
          </div>
        }
      />
    </>
  );
};

export default Onboarding;
