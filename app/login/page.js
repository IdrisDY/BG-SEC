"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import UserChatTemplate from "@/components/userChat";
import axios from "axios";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import MessageComponent from "@/components/Onboarding/chatMsgBox";
import { handleHash } from "@/utils/hash";
import { useRouter } from "next/navigation";

const Login = () => {
  const [finishLogin, setFinishLogin] = useState(false);
  const [stepsFinished, setStepsFinished] = useState([]);
  const router = useRouter();

  const ForgotPassword = ({ steps, triggerNextStep }) => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [step, setStep] = useState(1); // 1 for email form, 2 for reset form
    const [showForms, setShowForms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [resetCode, setResetCode] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailSubmit = async (e) => {
      e.preventDefault();

      setIsLoading(true);
      setErrorMessage("");

      const payload = {
        email,
      };
      // Here you would typically send a request to your server to send the reset code to the email
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/sendResetCode`,
          payload,
          {
            headers: {
              "x-api-key": "BGL-AUTH",
              "Content-Type": "application/json",
            },
          }
        );

        if (response) {
          setStep(2);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to send reset code. Please try again.");
      } finally {
        setIsLoading(false);
      }

      console.log("Email submitted:", email);
    };

    const handleResetSubmit = async (e) => {
      e.preventDefault();
      // Here you would typically send a request to your server to verify the reset code and update the password
      setErrorMessage("");
      if (newPassword !== confirmPassword) {
        setErrorMessage("Passwords do not match!");
        return;
      }
      setIsLoading(true);

      const payload = {
        email,
        passwordResetCode: resetCode,
        password: newPassword,
        password_confirm: confirmPassword,
        hash: handleHash(resetCode),
      };
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/resetPassword`,
          payload,
          {
            headers: {
              "x-api-key": "BGL-AUTH",
              "Content-Type": "application/json",
            },
          }
        );

        if (response) {
          triggerNextStep({ trigger: "5" });
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to reset password. Please try again.");
      } finally {
        setIsLoading(false);
      }
      console.log("Reset Code:", resetCode);
      console.log("New Password:", newPassword);
      // Handle password reset logic here
    };

    return (
      <div className=" py-7 lg:min-w-[400px] px-6 rounded-lg bg-dashboard_cards_bg">
        {!showForms ? (
          <div className=" py-7 px-6 rounded-lg bg-dashboard_cards_bg">
            <Button
              fontSize={"14px"}
              variant="outlined"
              color={"white"}
              borderRadius={"9px"}
              border={"1px solid #FD891C"}
              onClick={() => setShowForms(true)}
            >
              Click here if you forgot your password
            </Button>
          </div>
        ) : step === 1 ? (
          <form onSubmit={handleEmailSubmit}>
            <div className="flex flex-col text-white gap-3 items-end">
              <FormControl color={"white"}>
                <FormLabel>Email</FormLabel>
                <Input
                  border={"1px solid #FD891C"}
                  type="email"
                  color={"white"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>
              {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
              <Button
                color={"white"}
                display={"flex"}
                justifySelf={"end"}
                type="submit"
                background={"#FD891C"}
                isLoading={isLoading}
              >
                Send Reset Code
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleResetSubmit}>
            <div className="flex flex-col text-white gap-3 items-end">
              <FormControl>
                <FormLabel>Reset Code</FormLabel>
                <Input
                  border={"1px solid #FD891C"}
                  type="number"
                  color={"white"}
                  value={resetCode}
                  onChange={(e) => setResetCode(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>New Password</FormLabel>
                <Input
                  border={"1px solid #FD891C"}
                  type="password"
                  color={"white"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Confirm New Password</FormLabel>
                <Input
                  border={"1px solid #FD891C"}
                  type="password"
                  color={"white"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </FormControl>
              {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
              <Button
                color={"white"}
                display={"flex"}
                justifySelf={"end"}
                type="submit"
                background={"#FD891C"}
                isLoading={isLoading}
              >
                Reset Password
              </Button>
            </div>
          </form>
        )}
      </div>
    );
  };
  const PasswordInput = ({ role, steps, triggerNextStep }) => {
    const [inputValue, setInputValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleSubmit = async () => {
      setIsLoading(true);
      setDisabled(true);

      const payload = {
        email: steps?.email?.value,
        password: inputValue,
      };
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/signIn`,
          payload,
          {
            headers: {
              "x-api-key": "BGL-AUTH",
              "Content-Type": "application/json",
            },
          }
        );

        if (response) {
          setFinishLogin(true);
          setTimeout(() => {
            router.push("/dashboard");
          }, 1500);
        }
      } catch (error) {
        console.error(error);
        triggerNextStep({ trigger: "auth-failed" });
      } finally {
        setIsLoading(false);
        setDisabled(false);
      }
    };

    function resetState() {
      setInputValue("");
      setIframeURL("");
    }

    return (
      <FormControl
        width={"80%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={""}
      >
        <FormLabel color={"white"}>Enter Password</FormLabel>
        <InputGroup>
          <Input
            color={"white"}
            type={"password"}
            placeholder="Enter password"
            value={inputValue}
            border={"2px solid #FD891C"}
            disabled={disabled}
            onChange={handleChange}
          />
        </InputGroup>
        <Button
          display={"flex"}
          marginLeft={"auto"}
          color={"white"}
          background={"#FD891C"}
          isLoading={isLoading}
          disabled={disabled}
          mt={2}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </FormControl>
    );
  };

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

  async function handleEnd({ steps, value, triggerNextStep }) {}

  const steps = [
    {
      id: "1",
      component: (
        <MessageComponent msg="Hello👋It’s good to see you again! To access your account, please enter login details below carefully. Shall we?" />
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
      component: <MessageComponent msg="Please enter your email address" />,
      asMessage: true,
      trigger: "email",
    },
    {
      id: "reset-error",
      component: (
        <MessageComponent msg="An error ocurred.Please input the correct details and try again!." />
      ),
      asMessage: true,
      trigger: "forgotPassword",
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
      component: (
        <MessageComponent msg="Now let’s securely verify your identity. Please enter your password." />
      ),
      asMessage: true,
      trigger: "forgotPassword",
    },
    {
      id: "password",
      component: <PasswordInput />,
      hideInput: true,
      waitAction: true,
    },
    {
      id: "auth-failed",
      component: (
        <MessageComponent msg="Authentication failed! Wrong email address or password." />
      ),
      asMessage: true,
      trigger: 3,
    },
    {
      id: "forgotPassword",
      component: <ForgotPassword />,
      trigger: "password",
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
