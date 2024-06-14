"use client";
import Image from "next/image";
import { DMFont, pathWay } from "@/components/body";
import { createGlobalStyle, useTheme } from "styled-components";
import styled from "styled-components";
import Button from "@/components/button";
import OnboardStart from "@/components/onboardStartModal";
import Loader from "@/components/home-loading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { setLoading } from "@/store/LandingPageSlice";
export default function Home() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { showModal, loading } = useSelector((state) => state.LandingPage);
  console.log(loading);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1500);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <Header />
        <main className={`min-h-screen`}>
          <HeroSection
            className={`flex ${
              theme.mode === "dark" ? "bg gradient " : "bg-hero_section_bg"
            } flex-col min-h-[450px] lg:min-h-[110vh] relative px-[1.25em] pt-24 lg:px-[112px] gap-2 items-center`}
          >
            {theme.mode === "dark" && (
              <div className="absolute z-[-1] dark-gradient-bg w-3/5 ">
                <Image
                  layout="fill"
                  src="/darkmodegradient.png"
                  alt="dark mode gradient"
                />
              </div>
            )}{" "}
            <div
              className={`rounded-lg ${
                theme.mode === "dark"
                  ? " border-outline_orange"
                  : "border-light_mainTxt"
              } flex absolute top-[50px] lg:top-[60px] w-fit gap-[2px] lg:gap-3 text-[.7em] lg:text-[.8em] py-[4px] px-1 border`}
            >
              <span
                className={` ${
                  theme.mode === "dark"
                    ? "border-[1px] border-white"
                    : "border border-light_mainTxt text-light_mainTxt"
                } w-fit rounded-lg border px-[4px]`}
              >
                New feature
              </span>
              <span className={`lg:text-[.8rem] w-fit`}>
                Check out the new dashboard -?
              </span>
            </div>
            <h1
              className={`${DMFont.className}  ${
                theme.mode === "dark" ? "" : " text-light_mainTxt"
              }   lg:w-[60%] w-[90%] leading-[2rem] lg:leading-[4.5rem] text-[2em] text-center lg:text-[2.5rem]`}
            >
              Navigate the dynamic world of financial markets.
            </h1>
            <p
              className={` ${
                theme.mode === "dark" ? "" : " text-light_mainTxt"
              }  text-[.9rem] w-[95%] lg:w-1/2 lg:text-[1em] text-center`}
            >
              Our mission is to empower you with the tools and knowledge to take
              control of your financial future success should be within reach
              for everyone.
            </p>
            <div className={`hidden gap-3 mt-10 lg:flex`}>
              <div
                className={`border w-full ${
                  theme.mode === "dark" ? "border border-[#83796B]" : ""
                } cursor-pointer px-2 py-[5px] text-white bg-black rounded-lg flex gap-4`}
              >
                <img className={`w-[30px]`} src="/apple.svg" alt="apple logo" />
                <span
                  className={`flex whitespace-nowrap text-[.8rem] flex-col`}
                >
                  Download on the
                  <strong className={`text-[1rem]`}>App Store</strong>
                </span>
              </div>
              <div
                className={`border ${
                  theme.mode === "dark" ? "border border-outline_orange" : ""
                } cursor-pointer w-full px-2 text-white py-[5px] rounded-lg flex gap-4 bg-black`}
              >
                <img
                  className={`w-[30px]`}
                  src="/Googleplaycolor.svg"
                  alt="android logo"
                />
                <span className={`flex text-[.8rem] flex-col`}>
                  GET IT ON{" "}
                  <strong className={`text-[1rem]`}>Google Play</strong>
                </span>
              </div>
            </div>
          </HeroSection>
          {/* Overlay Section */}
          <section
            className={`${
              theme.mode === "dark" ? "bg" : ""
            } lg:mt-[-135px] z-20 mt-[-140px] flex items-center relative overflow-hidden`}
          >
            <div className={`w-full absolute top-0 h-fit`}>
              <div className="flex relative justify-between">
                <div className="w-1/2 mx-[-1.25rem] lg:mt-[100px] mt-[135px]">
                  <img
                    className="w-1/2 h-[50px] lg:h-[100px]"
                    src={
                      theme.mode === "dark"
                        ? "/dbandimg/dLeftband1.png"
                        : "/lbandimg/Leftband1.png"
                    }
                    alt="left band 1"
                  />
                  <img
                    className="h-[50px] w-[15%] lg:w-auto lg:h-[100px] lg:rotate-0 rotate-[4deg] mt-[-12px] lg:mt-[-30px]"
                    src={
                      theme.mode === "dark"
                        ? "/dbandimg/dLeftband2.png"
                        : "/lbandimg/Leftband2.png"
                    }
                    alt="left band 1"
                  />
                </div>

                <div className="flex absolute right-0 mx-[-1.25rem] w-1/2 flex-col items-end">
                  <img
                    className="h-[50px]  lg:h-[100px] rotate-[2deg] w-[60%]"
                    src={
                      theme.mode === "dark"
                        ? "/dbandimg/dRightband1.png"
                        : "/lbandimg/Rightband1.png"
                    }
                    alt="Right band 1"
                  />
                  <img
                    className="h-[50px] lg:h-[100px] w-full mt-[-24px] lg:mt-[-41px]"
                    src={
                      theme.mode === "dark"
                        ? "/dbandimg/dRightband2.png"
                        : "/lbandimg/Rightband2.png"
                    }
                    alt="left band 1"
                  />
                  <img
                    className="h-[50px] lg:h-[100px] rotate-[4deg] lg:rotate-[-1deg] w-[15%] lg:w-[30%] mt-[-41px] lg:mt-[-80.8px]"
                    src={
                      theme.mode === "dark"
                        ? "/dbandimg/dRightband3.png"
                        : "/lbandimg/Rightband3.png"
                    }
                    alt="left band 1"
                  />
                </div>
              </div>
            </div>
            <div
              className={`flex relative w-[90%] h-[30vh] lg:h-[70vh] items-center lg:w-3/5 m-auto justify-center`}
            >
              <Image layout="fill" src="/vidplayer.png" alt="overlay" />
            </div>
            {theme.mode === "dark" && (
              <div className="absolute side-gradient-bg w-3/5">
                <Image
                  layout="fill"
                  src="/totalsidegradient.png"
                  alt="dark mode gradient"
                />
              </div>
            )}
          </section>
          {/* Total  */}
          <section
            className={`flex px-[1.25em] relative lg:px-[112px] flex-col mt-10 gap-4 text-center`}
          >
            <h2
              className={`${DMFont.className}  ${
                theme.mode === "dark" ? "" : " text-light_subhead"
              }  text-[1.5rem] m-auto leading-8 font-[500] lg:text-[1.9rem]`}
            >
              Total value of trades/ <br /> transactions
            </h2>
            <p
              className={`${pathWay.className}  ${
                theme.mode === "dark" ? "" : " text-light_gray_50"
              }  text-[.7rem] w-[90%] text-center lg:max-w-[55%] m-auto lg:text-[1rem]`}
            >
              BGL Securities Limited drives the retail (and wholesale) stock
              broking strategy of the BGL Group.
            </p>
            <div
              className={`p-[1.26rem] ${
                theme.mode === "dark"
                  ? `border shadow-orangeShadow bg-font_black text-white border-outline_orange`
                  : ""
              } lg:p-16 rounded-lg mt-2 mb-[20px] gap-4 bg-[#E1F4F4]`}
            >
              <div
                className={`lg:w-4/5 flex items-center justify-between m-auto`}
              >
                <div className={`flex flex-col gap-2 lg:gap-8`}>
                  <span
                    className={` ${
                      theme.mode === "dark"
                        ? "text-white"
                        : "text-dark_green_90 "
                    }  ${
                      DMFont.className
                    } leading-[1.5rem] font-[700] lg:text-[3rem] text-[1.4rem]`}
                  >
                    5+
                  </span>
                  <span className={`text-[.65rem] lg:text-[1rem]`}>
                    Of years of Experience
                  </span>
                </div>
                <div className={`flex flex-col gap-2 lg:gap-8`}>
                  <span
                    className={`${
                      theme.mode === "dark"
                        ? "text-white"
                        : "text-dark_green_90 "
                    } ${
                      DMFont.className
                    } leading-[1.5rem] font-[700] lg:text-[3rem] text-[1.4rem]`}
                  >
                    $2.5+
                  </span>
                  <span className={`text-[.65rem] lg:text-[1rem]`}>
                    Billions of transactions
                  </span>
                </div>
                <div className={`flex flex-col gap-2 lg:gap-8`}>
                  <span
                    className={`${
                      theme.mode === "dark"
                        ? "text-white"
                        : "text-dark_green_90 "
                    } ${
                      DMFont.className
                    } leading-[1.5rem] font-[700] lg:text-[3rem] text-[1.4rem]`}
                  >
                    2k+
                  </span>
                  <span className={`text-[.65rem] lg:text-[1rem]`}>
                    Customers so far
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* About Us */}
          <section
            id="about-us"
            className={`flex flex-col px-[1.25em] gap-5 lg:px-[112px] lg:gap-10 lg:grid grid-cols-2`}
          >
            <article className={`hidden lg:flex flex-col`}>
              <span className={`text-[.8em]`}>About Us</span>
              <h2
                className={`${DMFont.className} whitespace-nowrap text-[1.5rem] font-[500] lg:text-[1.9rem]`}
              >
                {" "}
                Unlock the World of Investment
              </h2>
              <div className={`flex flex-col gap-4`}>
                <p>
                  We are one of Africa’s leading Securities Trading and Dealing
                  Companies headquartered in Lagos, Nigeria. We provide world
                  dealing services and products to clients BGL Securities
                  leverages on the distinctive BGL brand, harnessing its core
                  competence and unique human resources to deliver excellent and
                  value added services to clients.
                </p>

                <p>
                  We provide world class Securities and Dealing services to our
                  clients made up of local and International retail , and High
                  Net Worth Investors as well as Local and International
                  Institutional Investors. Our success over the years can be
                  attributed to our values and principles which put our clients
                  at the centre of everything we do and the level of
                  professionalism that permeates right through the organisation.
                  We are driven to provide best in class products and services
                  and our organisational culture promotes an environment of team
                  work to ensure that we all work to achieve the same collective
                  goal of maximising value for all our stakeholders...Read more
                </p>
              </div>
            </article>

            <article className={`flex flex-col lg:hidden gap-10 items-center`}>
              <div>
                <h2
                  className={`${DMFont.className} leading-10 text-center text-[1.5rem]`}
                >
                  Your success is our success{" "}
                </h2>
                <p
                  className={` text-[.94rem] lg:text-[1rem] m-auto max-w-[95%] text-center`}
                >
                  {" "}
                  BGL Securities Limited is the securities trading platform of
                  BGL. It also doubles as the vehicle for distributing all
                  public offers. The company has the following licenses:
                </p>
              </div>

              <div className={`flex flex-col gap-12`}>
                {[
                  {
                    title: "Broker/Dealer with the Securities",
                    p:
                      "Registered as Broker/Dealer with the Securities and Exchange Commission.",
                  },
                  {
                    title: "Issuing House with the Securities",
                    p:
                      "Registered as an Issuing House with the Securities and Exchange Commission.",
                  },
                  {
                    title: "Dealing member",
                    p:
                      "Registered as dealing member of the Nigerian Stock Exchange.",
                  },
                ].map((item) => {
                  return (
                    <div
                      className={`flex px-[20px] flex-col gap-5 items-center`}
                      key={item.title}
                    >
                      <img src="/landingfeature.svg" alt="feature icon" />
                      <h3 className={`${DMFont.className}`}>{item.title}</h3>
                      <p className={`text-center text-[.94rem] lg:text-[1rem]`}>
                        {item.p}
                      </p>
                    </div>
                  );
                })}
              </div>
            </article>

            <div className={`lg:py-[4.5rem] px-[5px] lg:px-0 flex`}>
              <div
                className={`flex lg:w-[90%] ml-auto h-[350px] ${
                  theme.mode === "dark"
                    ? "bg-dark-gradient"
                    : "bg-light-gradient"
                } rounded-md lg:h-[380px] place-items-center`}
              >
                <img
                  className={`object-center w-full`}
                  src="/landingstocks.png"
                  alt="landing page candle"
                />
              </div>
            </div>
          </section>
          {/* Product */}
          <section
            id="product"
            className=" mt-[85px] lg:mt-[128px] px-[1.3em] lg:px-[112px] gap-7 flex justify-between flex-col lg:flex-row-reverse "
          >
            <div className="flex lg:w-2/5 w-[90%] m-auto lg:m-0  gap-2 flex-col lg:items-start items-center">
              <span className="text-[.8em]">Product</span>
              <h2
                className={`${DMFont.className} text-center whitespace-nowrap text-[1.5rem] font-[500] lg:text-[1.9rem] `}
              >
                Access wide range of stocks
              </h2>
              <div>
                <p
                  className={`  ${
                    theme.mode === "dark" ? "" : " text-[#3B4B4B]"
                  }  text-center lg:text-left text-[.94rem] lg:text-[1rem]  `}
                >
                  Stocks are the cornerstone of modern investing, offering you
                  the opportunity to own a piece of some of the world's most
                  influential companies. At [Your Trading Platform], we make
                  stock trading accessible, intuitive, and rewarding. Access a
                  wide range of stocks from various sectors and markets,
                  including technology, healthcare, finance, and more. Invest in
                  companies you believe in and see your portfolio grow. Stay
                  updated with live stock prices, charts, and news. Make
                  informed decisions with access to real-time market
                  information.
                </p>
              </div>
              <Button base={false}
                text="Start Trading"
                customClassName=" hidden lg:block text-light_mainTxt  bg-btn_orange"
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
                  src={
                    theme.mode === "dark"
                      ? "/darkmodephone.png"
                      : "/desktopProduct.png"
                  }
                />
              </div>
            </div>
          </section>

          {/* Advisory */}
          <section
            className={`px-[1.3rem] ${
              theme.mode === "dark" ? "bg-[#1C1F1F]" : ""
            } py-28  lg:px-[112px]`}
          >
            <div
              className={` lg:min-h-[70vh] ${
                theme.mode === "dark" ? "bg-font_black" : "bg-[#002616]"
              } gap-5 lg:gap-0 rounded-3xl pt-8 pb-0 lg:pl-16 lg:pt-10 flex flex-col lg:flex-row justify-start lg:justify-between`}
            >
              <div
                className={`flex items-center lg:items-start justify-center gap-5 flex-col`}
              >
                <h2
                  className={`${DMFont.className} w-[85%] lg:w-auto text-center text-[1.5rem] text-white lg:text-[1.9rem]`}
                >
                  Start your amazing journey
                </h2>
                <span
                  className={`w-[70%] text-[.94rem] lg:text-[1rem] lg:w-auto text-center lg:text-left text-[#FFEDD4]`}
                >
                  {" "}
                  Don't worry, Advisory is there to guide you!{" "}
                </span>
                <div className={`flex gap-3 mt-5 text-white`}>
                  <div
                    className={`border w-fit cursor-pointer ${
                      theme.mode === "dark"
                        ? "border border-[#83796B]"
                        : "border-white"
                    } px-[10px] py-[5px] rounded-lg flex gap-2 `}
                  >
                    <img
                      className={`w-[15px] lg:w-[30px]`}
                      src="/apple.svg"
                      alt="apple logo"
                    />
                    <span
                      className={`flex text-[.8rem] whitespace-nowrap flex-col`}
                    >
                      Download on the{" "}
                      <strong className={`lg:text-[1rem]`}>App Store</strong>
                    </span>
                  </div>
                  <div
                    className={`border cursor-pointer ${
                      theme.mode === "dark"
                        ? "border border-outline_orange"
                        : "border-white"
                    } w-fit px-[10px] py-[5px] rounded-lg flex gap-2 `}
                  >
                    <img
                      className={`w-[15px] lg:w-[30px]`}
                      src="/Subtract.svg"
                      alt="android logo"
                    />
                    <span className={`flex  text-[.8rem] flex-col`}>
                      GET IT ON{" "}
                      <strong className={`lg:text-[1rem]`}>Google Play</strong>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`w-full max-w-[305px] mx-auto lg:m-0 lg:max-w-[50%] h-[300px] lg:h-auto relative`}
              >
                <Image
                  className={`hidden lg:block`}
                  src={
                    theme.mode === "dark"
                      ? "/advisorydarkphone.png"
                      : "/phone-chats.png"
                  }
                  layout="fill"
                  alt="advisor guide"
                />
                <Image
                  className={`block lg:hidden`}
                  src="/phonemockupmobile.png"
                  layout="fill"
                  alt="advisor guide"
                />
              </div>
            </div>
          </section>
          {/* Blog Posts */}
          <section
            id="learn"
            className={`mt-12 pt-10 pb-[100px] lg:px-[112px] flex flex-col gap-14 lg:bg-transparent ${
              theme.mode === "dark" ? "" : "bg-fade_green_landing"
            } `}
          >
            <div
              className={`flex flex-col lg:flex-row lg:justify-between gap-7 items-center lg:items-start`}
            >
              <div
                className={`flex flex-col gap-4 lg:items-start items-center`}
              >
                <span className={`text-[.8em]`}> Learn</span>{" "}
                <h2
                  className={`${DMFont.className} w-[85%] lg:w-auto lg:text-left text-center text-[1.5rem] lg:text-[1.9rem]`}
                >
                  Latest blog posts.
                </h2>
                <p
                  className={`text-center  ${
                    theme.mode === "dark" ? "text-white" : " text-[#3B4B4B]"
                  } text-[.94rem] lg:text-[1rem] lg:text-left lg:w-[90%] lg:mr-auto lg:ml-0 w-4/5 m-auto`}
                >
                  Our blog is authored by a team of financial experts, market
                  analysts, and traders
                </p>
              </div>
              <Button base
                customClassName={` bg-light_mainTxt lg:bg-btn_orange`}
                text="View all posts"
              />
            </div>

            <div
              className={`flex flex-col lg:flex-row gap-7 lg:justify-between lg:gap-0`}
            >
              {Array.from({ length: 3 }).map((item, index) => {
                return (
                  <div
                    className={`w-4/5 max-w-[500px] lg:w-[30%] m-auto lg:m-0 shadow-custom1 flex flex-col gap-4 ${
                      theme.mode === "dark"
                        ? " border border-outline_orange shadow-orangeShadow rounded-lg bg-[#222425] "
                        : "bg-white"
                    } p-5`}
                    key={index}
                  >
                    <div className={`relative h-[220px]`}>
                      <Image
                        className={`${
                          theme.mode === "dark"
                            ? "border border-outline_orange"
                            : ""
                        }`}
                        layout="fill"
                        src="/blogImg.png"
                        alt="blog image"
                      />
                    </div>
                    <div className={`flex gap-5 flex-col`}>
                      <div className={`flex flex-col gap-3`}>
                        <span
                          className={`${
                            theme.mode === "dark"
                              ? "text-btn_orange"
                              : "`text-dark_green_90"
                          } text-[.94rem] lg:text-[1rem] font-[600]`}
                        >
                          Investment Strategies
                        </span>
                        <div className={`flex justify-between`}>
                          <h3 className={`${DMFont.className} text-[1.25rem]`}>
                            The Art of Portfolio Diversification
                          </h3>
                          <img src="/arrowblogicon.svg" alt="arrow icon" />
                        </div>
                        <p className={`text-[.9rem]`}>
                          Diversification is a cornerstone of successful
                          investing. Discover why it's important, various...
                        </p>
                      </div>
                      <div className={`flex gap-2`}>
                        <img
                          className={`w-[50px]`}
                          src="/blogposter.png"
                          alt="blogposter img"
                        />
                        <div className={`flex text-[.9rem] flex-col gap-1`}>
                          <span className={`font-[600]`}>
                            {" "}
                            Ibrahim AbdulKareem{" "}
                          </span>
                          <span>18 Oct 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          {/* FAQs */}
          <section
            id="FAQs"
            className={`px-[1.3rem] ${
              theme.mode === "dark" ? "  pt-[80px] pb-[70px] bg-[#222425]" : ""
            } flex flex-col lg:flex-row lg:justify-between pt-14 gap-5   lg:px-[112px]`}
          >
            <div>
              <div
                className={`flex flex-col gap-4 lg:items-start items-center`}
              >
                <span className={`text-[.8em]`}> Support</span>
                <h2
                  className={`${DMFont.className} w-[85%] lg:w-auto lg:text-left text-center text-[1.5rem] lg:text-[1.9rem]`}
                >
                  FAQs.
                </h2>
                <p
                  className={`  ${
                    theme.mode === "dark" ? "" : " text-[#3B4B4B]"
                  } text-center text-[.94rem] lg:text-[1rem] lg:text-left lg:w-[70%] lg:mr-auto lg:ml-0 w-4/5 m-auto`}
                >
                  Everything you need to know about us and our market. Can’t
                  find the answer you’re looking for? Please chat to our
                  friendly team.
                </p>
              </div>
            </div>

            <div className={`flex lg:w-full flex-col gap-7 px-3`}>
              {Array.from({ length: 5 }).map((item, i) => {
                return (
                  <div key={i} className={`flex justify-between`}>
                    <span className="text-[.94rem] lg:text-[1rem]">
                      What markets can I trade on?
                    </span>
                    <span>
                      <img src="/plus-circle.svg" alt="plus circle icon" />
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
          {/* Still have questions */}
          <section
            id="contact-us"
            className={`lg:px-[112px] ${
              theme.mode === "dark" ? "pt-[26px] pb-[85px] bg-[#1C1F1F]" : ""
            }  py-[100px] px-8`}
          >
            <div
              className={`flex flex-col max-w-[400px] lg:max-w-full m-auto rounded-3xl gap-8 px-11 py-8 items-center ${
                theme.mode === "dark"
                  ? "bg-font_black"
                  : "bg-fade_green_landing"
              } `}
            >
              <Image
                src="/Avatargroup.png"
                width={150}
                height={50}
                alt="avatar group"
              />
              <span className={`${DMFont.className} text-[1.25rem] font-[600]`}>
                Still have questions?{" "}
              </span>
              <p
                className={`text-[.94rem]  ${
                  theme.mode === "dark" ? "" : " text-[#6B7878]"
                } lg:text-[1rem] text-center`}
              >
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
              <Button base
                customClassName={`bg-dark_green_90 lg:bg-btn_orange`}
                text="Get in Touch"
              />
            </div>
          </section>
          {/* Subscribe */}
          <section className="lg:px-[112px] mt-[160px] ">
            <div className="flex flex-col justify-between gap-11  min-h-[50vh] lg:flex-row ">
              <div className=" flex  px-[1.3rem] justify-center flex-col gap-5  lg:w-2/5  ">
                <h2
                  className={`${DMFont.className}  w-[85%] m-auto lg:m-0 lg:w-auto lg:text-left whitespace-nowrap  text-center text-[1.5rem] lg:text-[2.25rem] `}
                >
                  {" "}
                  Join 2000+ Subscribers
                </h2>
                <p
                  className={`  ${
                    theme.mode === "dark" ? "" : " text-[#6B7878]"
                  } text-center  text-[.94rem] lg:text-[1rem] lg:text-left`}
                >
                  We’re still building. Subscribe for updates. No spam, we
                  promise!
                </p>
                <div className="flex mt-3  items-center gap-4  lg:flex-row  lg:items-start flex-col">
                  <div className="flex gap-1 lg:w-[70%] w-full lg:items-start items-center flex-col">
                    <input
                      type="email"
                      className="border w-full rounded-lg p-2"
                      placeholder="Enter your email"
                    />
                    <span className="text-[.7rem] lg:text-[.8rem] ">
                      We care about your data in our privacy policy.
                    </span>
                  </div>
                  <Button base customClassName=" bg-light_mainTxt md:bg-btn_orange" text="Subscribe" />
                </div>
              </div>
              <div className="relative bg-[#E1F4F4] rounded-lg lg:w-1/2 h-[65vh] ">
                <Image
                  className="hidden lg:flex"
                  layout="fill"
                  src="/deskmyphone.png"
                  alt="subscribe phone"
                />
                <Image
                  className="block lg:hidden"
                  layout="fill"
                  src="/mobile-subscribe.png"
                  alt="subscribe phone markup"
                />
              </div>
            </div>
          </section>
          {showModal && <OnboardStart />}
        </main>
        <Footer />
      </>
    );
  }
}
const HeroSection = styled.div`
  clip-path: ${(props) =>
    props.theme.mode === "light"
      ? "polygon(0 0, 100% 0, 100% 85%, 0 100%)"
      : "none"};
`;
