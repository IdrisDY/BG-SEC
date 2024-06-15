import Image from "next/image";
import Button from "../button";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setShowModal } from "@/store/LandingPageSlice";
import { useState } from "react";

export const OnboardStart = ({ handleBeginClick }) => {
  const [closeClick, setCloseClick] = useState(false);

  const dispatch = useDispatch();

  function closeModal() {
    setTimeout(() => {
      dispatch(setShowModal(false));
    }, 500);
    setCloseClick(true);
  }

  return (
    <div className="fixed inset-x-0 inset-y-0 overflow-auto md:overflow-hidden lg:bottom-0 h-full bg-opacity-50 bg-black z-30 ">
      <div
        className={` ${
          !closeClick ? "animate-dropdown" : "animate-rollup"
        } bg-onboard_green w-full relative gap-[60px] h-fit  md:rounded-[66px] text-white pt-[66px] pb-[56px] flex items-center  flex-col `}
      >
        <div className="right-0 top-[40px]  absolute px-[60px]">
          <button onClick={closeModal} className="ml-auto">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className=" p-10 rounded-[50%] bg-white  ">
          <div className="relative w-[150px] h-[150px]  rounded-[50%] ">
            <Image
              layout="fill"
              src="/onboard/onboardwoman.png"
              alt="onboard"
            />
          </div>
        </div>
        <div className=" w-3/5 lg:w-1/2 m-auto flex text-center flex-col gap-4">
          <span className="text-[1rem] lg:text-[1.25rem] font-[700] ">
            I'm your friendly BGL Assistant, here to make your journey smooth
            and enjoyable. Click on the link below to continue.
          </span>
          <span className="text-[.8rem]">
            Before you begin, you acknowledge that you have read and understood,
            and agree to BGL Securitie's Terms of Service and Privacy Policy.
          </span>
        </div>
        <div className=" w-1/2 flex lg:w-1/5 m-auto">
          <Link
            className="bg-white text-onboard_green py-[10px] text-center  rounded-[4px] w-full"
            href="/onboarding"
            onClick={handleBeginClick}
          >
            {" "}
            Let’s begin!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnboardStart;
