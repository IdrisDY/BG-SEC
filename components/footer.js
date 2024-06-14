import Button from "./button";
import { DMFont } from "./body";
const Footer = () => {
  return (
    <footer className=" bottom-0 w-full mt-[80px] bg-footer_bg px-6 lg:px-[112px] py-[64px] text-white  ">
      <section className="flex border-b pb-16 mb-16 border-btn_orange flex-col items-center text-center gap-4">
        <h3 className={` ${DMFont.className} text-[1.25rem] lg:text-[1.6rem] w-[90%] lg:w-[70%]`}>
          We have consistently maintained the top five positions in terms of
          volume and value of securities traded.
        </h3>
        <h4 className=" lg:text-[1.1rem] text-[.9rem] w-4/5  lg:m-auto lg:w-auto  text-[#AFD9D9]">
          It also doubles as the vehicle for distributing all public offers.
        </h4>

        <Button customClassName=" mt-6 bg-white text-font_black lg:text-white lg:bg-btn_orange" text="Start Trading" />
      </section>

      <section className="flex flex-col gap-48 lg:gap-16">
        {/* top section */}
        <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-0 lg:flex-row justify-between ">
          <div className="flex flex-col gap-6  ">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-2">
              <img src="/logo.svg" alt="logo bgl" /> 

              {/* <span className="text-2xl font-bold "> B G L</span> */}
            </div>
            <p className="lg: m-auto text-center w-1/2 font-[400] text-[1rem] lg:text-[1rem] lg:m-0 lg:text-left text-[#E1F4F4] leading-[24px] ">
              BGL securities Ltd has earned a sterling reputation in the market
              place having participated in landmark block trades and also acted
              as stockbroker to the issue for many public offers.
            </p>
            <ul className="flex flex-col lg:flex-row items-center  lg:items-start lg: text-[1rem] lg:text-[1rem] text-green_60 gap-8">
              <li className="cursor-pointer underline ">About Us</li>
              <li className="cursor-pointer underline ">FAQs</li>
              <li className="cursor-pointer underline ">Trading Markets</li>
              <li className="cursor-pointer underline ">Contact Us</li>
              <li className="cursor-pointer underline ">Help</li>
              <li className="cursor-pointer underline ">Privacy</li>
            </ul>
          </div>
          <div className="flex flex-col lg:w-1/3 items-end ">
            <div className="flex flex-col gap-4">
              <span className="w-full">Get the app.</span>

              <div className="border w-fit cursor-pointer lg:min-w-[165px] px-[10px] py-[5px]  rounded-lg flex gap-2 border-white">
                <img className="w-[30px]" src="/apple.svg" alt="apple logo" />
                <span className="flex text-[.6em] lg:text-[.7rem] whitespace-nowrap flex-col">
                  Download on the{" "}
                  <strong className="text-[1rem]">App Store</strong>
                </span>
              </div>
              <div className="border cursor-pointer w-fit lg:min-w-[165px] px-[10px] py-[5px] rounded-lg  flex gap-2 border-white">
                <img
                  className="w-[30px]"
                  src="/Subtract.svg"
                  alt="android logo"
                />
                <span className="flex text-[.6em] lg:text-[.8rem]  flex-col">
                  GET IT ON{" "}
                  <strong className="text-[.8rem] lg:text-[1rem]">
                    Google Play
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom section - copyright */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-0 pt-8 lg:border-t border-[#002616] justify-between">
          <h6 className="text-[.9rem] lg:text-[1rem] text-[#AFD9D9]">
            © 2024 BGL_Securities. All rights reserved.{" "}
          </h6>
          <div className="flex flex-row-reverse gap-10">
            <a className="cursor-pointer" href="/">
              {" "}
              <img src="/fb.svg" alt="facebook icon" />{" "}
            </a>
            <a href="/" className="cursor-pointer">
              {" "}
              <img src="/insta.svg" alt="insta icon" />{" "}
            </a>
            <a href="/" className="cursor-pointer">
              {" "}
              <img src="/twitter.svg" alt="twitter icon" />{" "}
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
