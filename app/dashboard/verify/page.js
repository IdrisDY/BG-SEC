"use client";
import GoBackButton from "@/components/Dashboard/goBack";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "styled-components";

const Verify = () => {
  const dark = useTheme().mode === "dark";
  const router = useRouter();

  function navigateToVerifyPage() {
    router.push("/verify-account");
  }

  const benefits = [
    "User-Friendly Platform",
    "Advanced Tools and Analytics",
    "Complete guide on how to trade and invest well with our Robo Advisor",
    "Responsive Customer Support",
    "Innovative Features",
    "Competitive Trading Fees",
    "Security and Compliance",
  ];

  return (
    <div>
      <GoBackButton />

      <div
        className={`${
          dark ? "bg-aside_onboard" : "bg-[#FAFFFF]"
        } flex flex-col w-full mt-10 border border-outline_orange rounded-lg py-[58px] px-[40px]`}
      >
        <div className="flex w-full items-center justify-start gap-5">
          <div className="h-[150px] relative rounded-[50%]  w-[150px] ">
            <Image
              layout="fill"
              src="/Dashboard/avatarDashboard.png"
              alt="avatar"
            />
          </div>
          <div className="flex w-fit flex-col gap-2">
            <h1 className="font-[700] text-[1.25rem] ">Gabriel Cooper</h1>
            <span
              className={`bg-btn_orange text-center  text-[.9rem] w-fit rounded-[150px] py-2 px-4  ${
                dark
                  ? "text-white"
                  : "bg-white border text-light_mainTxt border-light_mainTxt"
              }`}
            >
              {" "}
              Unverified{" "}
            </span>
          </div>
        </div>

        {/* section */}
        <section className="flex mt-8 mb-[96px] justify-between ">
          <div
            className={`border w-2/5 flex flex-col gap-8  rounded-[16px] py-6 px-5 ${
              dark
                ? " border-[#E3E4E8] bg-dashboard_cards_bg"
                : " border-[#E3E4E8] bg-[#F4FDFD]"
            } `}
          >
            <p className={`font-[600]`}>
              Get your identity to buy and sell stocks on BGL_SECURITIES{" "}
            </p>
            <Button
              onClick={navigateToVerifyPage}
              variant="custom-yellow"
              customClassName="bg-btn_orange w-full text-center text-white"
              text="Get Verified"
            />
          </div>

          <div className="flex flex-col">
            <span>You have any questions? We got you!</span>
            <Link href="/" className="text-dashboard_green_80">
              View FAQs
            </Link>
          </div>
        </section>

        {/* Account Benefits */}

        <div className="w-3/5 flex flex-col gap-6 ">
          <h2 className={`font-bold  text-[1.125rem] `}>Account Benefits</h2>

          <div className="">
            <ul className="pl-5 gap-[10px] grid grid-cols-2">
              {benefits.map((item) => {
                return (
                  <li className=" text-[.9rem] w-4/5 list-disc">{item}</li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
