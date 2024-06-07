"use client";
import Image from "next/image";
import { DMFont, pathWay } from "@/components/body";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export default function Home() {
  return (
    <main className="min-h-screen px-[1.25em] lg:px-[112px]   ">
      <HeroSection className="flex flex-col gap-2 items-center">
        <div className="rounded-lg w-fit gap-1 text-[.7em] lg:text-[1em] py-2 px-1 border">
          <span className="rounded-lg border p-1">New feature</span>
          <span>Check out the new dashboard -? </span>
        </div>
        <h1
          className={`${DMFont.className} lg:w-[60%] w-[90%]  leading-[2rem] lg:leading-[4.5rem] text-[2em] text-center lg:text-[3em] `}
        >
          Navigate the dynamic world of financial markets.
        </h1>
        <p className="text-[.85em] w-[95%] lg:w-1/2 lg:text-[1em] text-center">
          {" "}
          Our mission is to empower you with the tools and knowledge to take
          control of your financial future success should be within reach for
          everyone.
        </p>

        <div className="hidden gap-3 mt-10 lg:flex ">
          <div className="border w-full cursor-pointer px-2 py-[5px] text-white bg-black rounded-lg flex gap-4">
            <img className="w-[30px]" src="/apple.svg" alt="apple logo" />
            <span className="flex whitespace-nowrap text-[.8rem] flex-col">
              Download on the{" "}
              <strong className=" text-[1rem] ">App Store</strong>
            </span>
          </div>
          <div className="border cursor-pointer w-full px-2 text-white py-[5px] rounded-lg  flex gap-4 bg-black">
            <img
              className="w-[30px]"
              src="/Googleplaycolor.svg"
              alt="android logo"
            />
            <span className="flex text-[.8rem]  flex-col">
              GET IT ON <strong className="text-[1rem]">Google Play</strong>
            </span>
          </div>
        </div>
      </HeroSection>
      {/* overplay */}
      <section className=" w-[90%]  lg:w-[60%] m-auto">
        <img src="/overplay.jpg" alt="overlay" />
      </section>
      {/*  */}
      <section className={` flex flex-col mt-10  gap-4 text-center`}>
        <h2
          className={`${DMFont.className} text-[1.5rem] m-auto leading-8 font-[500] lg:text-[1.9rem] `}
        >
          {" "}
          Total value of trades/ <br /> transactions
        </h2>
        <p
          className={`${pathWay.className} text-[.85rem]  lg:max-w-[55%] m-auto lg:text-[1rem]`}
        >
          BGL Securities Limited drives the retail (and wholesale) stock broking
          strategy of the BGL Group.
        </p>
        <div className=" p-[1.26rem] lg:p-16 rounded-lg mt-2 mb-[20px] gap-4 bg-[#E1F4F4]">
          <div className=" lg:w-4/5 flex items-center justify-between  m-auto">
            <div className="flex flex-col gap-8">
              <span
                className={`text-dark_green_90 ${DMFont.className} leading-[1.5rem] font-[700] lg:text-[3.75rem] text-[1.4rem]`}
              >
                5+
              </span>
              <span className="text-[.65rem]  lg:text-[1rem]  ">
                Of years of Experience
              </span>
            </div>
            <div className="flex flex-col gap-8 ">
              <span
                className={`text-dark_green_90 ${DMFont.className} leading-[1.5rem] font-[700] lg:text-[3.75rem] text-[1.4rem]`}
              >
                $2.5+
              </span>
              <span className="text-[.65rem] lg:text-[1rem]">
                Billions of transactions
              </span>
            </div>
            <div className="flex flex-col gap-8">
              <span
                className={`text-dark_green_90 ${DMFont.className} leading-[1.5rem] font-[700] lg:text-[3.75rem] text-[1.4rem]`}
              >
                2k+
              </span>
              <span className="text-[.65rem] lg:text-[1rem]">
                Customers so far
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className="flex flex-col lg:gap-10 lg:grid grid-cols-2 ">
        <article className="hidden lg:flex flex-col ">
          <span>About Us</span>
          <h2
            className={`${DMFont.className} whitespace-nowrap text-[1.5rem] font-[500] lg:text-[1.9rem] `}
          >
            {" "}
            Unlock the World of Investment
          </h2>
          <div className="flex flex-col gap-4">
            <p>
              We are one of Africa’s leading Securities Trading and Dealing
              Companies headquartered in Lagos, Nigeria. We provide world
              dealing services and products to clients BGL Securities leverages
              on the distinctive BGL brand, harnessing its core competence and
              unique human resources to deliver excellent and value added
              services to clients.
            </p>

            <p>
              We provide world class Securities and Dealing services to our
              clients made up of local and International retail , and High Net
              Worth Investors as well as Local and International Institutional
              Investors. Our success over the years can be attributed to our
              values and principles which put our clients at the centre of
              everything we do and the level of professionalism that permeates
              right through the organisation. We are driven to provide best in
              class products and services and our organisational culture
              promotes an environment of team work to ensure that we all work to
              achieve the same collective goal of maximising value for all our
              stakeholders...Read more
            </p>
          </div>
        </article>

        <article className="flex flex-col lg:hidden gap-10 items-center">
          <div>
            <h2
              className={`${DMFont.className} leading-10 text-center  text-[1.5rem]`}
            >
              Your success is our success{" "}
            </h2>
            <p className=" text-[.9rem] m-auto max-w-[90%] text-center">
              {" "}
              BGL Securities Limited is the securities trading platform of BGL.
              It also doubles as the vehicle for distributing all public offers.
              The company has the following licenses:
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {[
              {
                title: "Broker/Dealer with the Securities",
                p: "Registered as Broker/Dealer with the Securities and Exchange Commission.",
              },
              {
                title: "Issuing House with the Securities",
                p: "Registered as an Issuing House with the Securities and Exchange Commission.",
              },
              {
                title: "Dealing member",
                p: "Registered as dealing member of the Nigerian Stock Exchange.",
              },
            ].map((item) => {
              return (
                <div
                  className="flex px-[20px] flex-col gap-5 items-center"
                  key={item.title}
                >
                  <img src="/landingfeature.svg" alt="feature icon" />
                  <h3 className={`${DMFont.className}`}>{item.title}</h3>
                  <p className="text-center text-[.9rem] ">{item.p}</p>
                </div>
              );
            })}
          </div>
        </article>

        <div className="py-[4.5rem] flex ">
          <div
            className="flex lg:w-[90%] ml-auto h-[350px] rounded-md lg:h-[380px] place-items-center"
            style={{
              background: "linear-gradient(180deg, #008080 0%, #23A6A6 100%)",
            }}
          >
            <img
              className="object-center w-full"
              src="/landingstocks.png"
              alt="landing page candle"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
const HeroSection = styled.div``;
