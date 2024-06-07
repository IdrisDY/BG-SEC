"use client";
import Image from "next/image";
import { DMFont, pathWay } from "@/components/body";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Button from "@/components/button";
export default function Home() {
  return (
    <main className="min-h-screen ">
      <HeroSection className="flex flex-col px-[1.25em] lg:px-[112px] gap-2 items-center">
        <div className="rounded-lg w-fit gap-1 text-[.7em] lg:text-[1em] py-2 px-1 border">
          <span className="rounded-lg border p-1">New feature</span>
          <span>Check out the new dashboard -? </span>
        </div>
        <h1
          className={`${DMFont.className} lg:w-[60%] w-[90%]  leading-[2rem] lg:leading-[4.5rem] text-[2em] text-center lg:text-[3em] `}
        >
          Navigate the dynamic world of financial markets.
        </h1>
        <p className="text-[.9rem] w-[95%] lg:w-1/2 lg:text-[1em] text-center">
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
      <section className=" w-[90%]   lg:w-[60%] m-auto">
        <img src="/overplay.jpg" alt="overlay" />
      </section>
      {/* Total  */}
      <section className={` flex px-[1.25em] lg:px-[112px] flex-col mt-10  gap-4 text-center`}>
        <h2
          className={`${DMFont.className} text-[1.5rem] m-auto leading-8 font-[500] lg:text-[1.9rem] `}
        >
          {" "}
          Total value of trades/ <br /> transactions
        </h2>
        <p
          className={`${pathWay.className} text-[.9rem]  lg:max-w-[55%] m-auto lg:text-[1rem]`}
        >
          BGL Securities Limited drives the retail (and wholesale) stock broking
          strategy of the BGL Group.
        </p>
        <div className=" p-[1.26rem] lg:p-16 rounded-lg mt-2 mb-[20px] gap-4 bg-[#E1F4F4]">
          <div className=" lg:w-4/5 flex items-center justify-between  m-auto">
            <div className="flex flex-col gap-2 lg:gap-8">
              <span
                className={`text-dark_green_90 ${DMFont.className} leading-[1.5rem] font-[700] lg:text-[3.75rem] text-[1.4rem]`}
              >
                5+
              </span>
              <span className="text-[.65rem]  lg:text-[1rem]  ">
                Of years of Experience
              </span>
            </div>
            <div className="flex flex-col gap-2 lg:gap-8 ">
              <span
                className={`text-dark_green_90 ${DMFont.className} leading-[1.5rem] font-[700] lg:text-[3.75rem] text-[1.4rem]`}
              >
                $2.5+
              </span>
              <span className="text-[.65rem] lg:text-[1rem]">
                Billions of transactions
              </span>
            </div>
            <div className="flex flex-col gap-2 lg:gap-8">
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
      <section className="flex flex-col px-[1.25em] lg:px-[112px] lg:gap-10 lg:grid grid-cols-2 ">
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

        <div className=" lg:py-[4.5rem]  px-[5px] lg:px-0 flex ">
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
      {/* Product */}
      <section className=" mt-[85px] lg:mt-[128px] px-[1.3em] lg:px-[112px]  flex justify-between flex-col lg:flex-row-reverse ">
        <div className="flex lg:w-2/5 w-[90%] m-auto lg:m-0  gap-2 flex-col lg:items-start items-center">
          <span>Product</span>
          <h2
            className={`${DMFont.className} text-center whitespace-nowrap text-[1.5rem] font-[500] lg:text-[1.9rem] `}
          >
            Access wide range of stocks
          </h2>
          <div>
            <p className="text-center lg:text-left text-[.9rem]  ">
              Stocks are the cornerstone of modern investing, offering you the
              opportunity to own a piece of some of the world's most influential
              companies. At [Your Trading Platform], we make stock trading
              accessible, intuitive, and rewarding. Access a wide range of
              stocks from various sectors and markets, including technology,
              healthcare, finance, and more. Invest in companies you believe in
              and see your portfolio grow. Stay updated with live stock prices,
              charts, and news. Make informed decisions with access to real-time
              market information.
            </p>
          </div>
          <Button
            text="Start Trading"
            customClassName=" hidden lg:block  bg-btn_orange"
          />
        </div>
        <div className="relative lg:w-3/4">
          <div className="w-full lg:hidden h-[350px] relative">
            <Image className="" layout="fill" src="/Content.jpg" />
          </div>
          <div className="w-full h-[650px] hidden lg:block relative">
            <Image
              className="ml-[-120px]"
              layout="fill"
              src="/desktopProduct.png"
            />
          </div>
        </div>
      </section>

      {/* Advisor */}
      <section className="px-[1.3rem] lg:px-[112px]" >
      <div className="bg-[#002616]   lg:min-h-[70vh] gap-5 lg:gap-0 mt-28 rounded-3xl  pt-8 pb-0 lg:pl-16  lg:pt-10 flex flex-col lg:flex-row justify-start  lg:justify-between">
        <div className="flex  items-center lg:items-start justify-center gap-5 flex-col">
          <h2
            className={`${DMFont.className} w-[85%] lg:w-auto text-center text-[1.5rem] text-white lg:text-[1.9rem] `}
          >
            Start your amazing journey
          </h2>
          <span className=" w-[70%] text-[.9rem] lg:text-[1rem] lg:w-auto text-center lg:text-left  text-[#FFEDD4]">
            {" "}
            Don't worry, Advisor is there to guide you!{" "}
          </span>
          <div className=" flex gap-3 mt-5 text-white">
            <div className="border w-fit cursor-pointer px-[10px] py-[5px]  rounded-lg flex gap-2 border-white">
              <img
                className=" w-[15px] lg:w-[30px]"
                src="/apple.svg"
                alt="apple logo"
              />
              <span className="flex text-[.8rem] whitespace-nowrap flex-col">
                Download on the{" "}
                <strong className=" lg:text-[1rem]">App Store</strong>
              </span>
            </div>
            <div className="border cursor-pointer w-fit px-[10px] py-[5px] rounded-lg  flex gap-2 border-white">
              <img
                className=" w-[15px] lg:w-[30px]"
                src="/Subtract.svg"
                alt="android logo"
              />
              <span className="flex text-[.8rem]  flex-col">
                GET IT ON{" "}
                <strong className="lg:text-[1rem]">Google Play</strong>
              </span>
            </div>
          </div>
        </div>
        <div className=" w-full max-w-[305px] mx-auto lg:m-0 lg:max-w-[50%] h-[300px] lg:h-auto relative ">
          <Image
            className="hidden lg:block"
            src="/phone-chats.png"
            layout="fill"
            alt="advisor guide"
          />
          <Image
            className="block lg:hidden"
            src="/phonemockupmobile.png"
            layout="fill"
            alt="advisor guide"
          />
        </div>
      </div>
      </section>
      {/* Blog Posts */}
      <section className="mt-12 pt-10 pb-[100px] lg:px-[112px] flex flex-col gap-14 lg:bg-transparent bg-fade_green_landing" >

        <div className="flex flex-col  lg:flex-row lg:justify-between gap-7 items-center lg:items-start">
          <div className="flex flex-col gap-4 lg:items-start items-center">
            <span> Learn</span>{" "}
            <h2
              className={`${DMFont.className} w-[85%] lg:w-auto lg:text-left  text-center text-[1.5rem] lg:text-[1.9rem] `}
            >
              Latest blog posts.
            </h2>
            <p className="text-center lg:text-left lg:w-[90%] lg:mr-auto lg:ml-0 w-4/5 m-auto ">
              Our blog is authored by a team of financial experts, market
              analysts, and traders
            </p>
          </div>
          <Button text="View all posts" />
        </div>

<div  className="flex flex-col lg:flex-row gap-7 lg:justify-between lg:gap-0" >
        {Array.from({ length: 3 }).map((item) => {
          return (
            <div className=" w-4/5 lg:w-[30%] m-auto lg:m-0 shadow-custom1 flex flex-col gap-4 bg-white p-5">
              <div className="relative  h-[220px]">
                <Image layout="fill" src="/blogImg.png" alt="blog image" />
              </div>
              <div className="flex gap-5  flex-col">
                <div className="flex flex-col gap-3">
                  <span className="text-dark_green_90 text-[.9rem] font-[600]">
                    {" "}
                    Investment Strategies
                  </span>
                  <div className="flex justify-between">
                    <h3 className={`${DMFont.className} text-[1.25rem]`}>
                      {" "}
                      The Art of Portfolio Diversification{" "}
                    </h3>
                    <img src="/arrowblogicon.svg" alt="arrow icon" />
                  </div>
                  <p className="text-[.9rem]" >
                    Diversification is a cornerstone of successful investing.
                    Discover why it's important, various...
                  </p>
                </div>
                <div className="flex gap-2">
                  <img
                    className="w-[50px]"
                    src="/blogposter.png"
                    alt="blogposter img"
                  />
                  <div className="flex text-[.9rem] flex-col gap-1 ">
                    <span className="font-[600]" > Ibrahim AbdulKareem </span>
                    <span>18 Oct 2022</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </section>
    </main>
  );
}
const HeroSection = styled.div``;
