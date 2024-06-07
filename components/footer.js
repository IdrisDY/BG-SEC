import Button from "./button";
import { DMFont } from "./body";
const Footer = () => {
  return (
    <footer className=" bottom-0 w-full  bg-footer_bg px-6 lg:px-[112px] py-[64px] text-white  ">
      <section className="flex border-b pb-16 mb-16 border-btn_orange flex-col items-center text-center gap-4">
        <h3 className={` ${DMFont.className} text-[2em] w-[90%] lg:w-[55%]`}>
          We have consistently maintained the top five positions in terms of
          volume and value of securities traded.
        </h3>
        <h4 className=" text-[1.5em]  text-[#AFD9D9]">
          It also doubles as the vehicle for distributing all public offers.
        </h4>

        <Button customClassName=" mt-6  bg-btn_orange" text="Start Trading" />
      </section>

      <section className="flex flex-col gap-48 lg:gap-16">
        {/* top section */}
        <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-0 lg:flex-row justify-between ">
          <div className="flex flex-col gap-6  ">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-2">
              <img src="/feature-icon.png" alt="" />

              <span className="text-2xl font-bold "> B G L</span>
            </div>
            <p className="lg:w-[41%] m-auto text-center w-1/2 font-[400] text-lg lg:m-0 lg:text-left text-[#E1F4F4] leading-loose ">
              BGL securities Ltd has earned a sterling reputation in the market
              place having participated in landmark block trades and also acted
              as stockbroker to the issue for many public offers.
            </p>
            <ul className="flex flex-col lg:flex-row items-center  lg:items-start lg:w-[50%] text-lg justify-between text-green_60 gap-8">
              <li className="cursor-pointer underline ">About Us</li>
              <li className="cursor-pointer underline ">FAQs</li>
              <li className="cursor-pointer underline ">Trading Markets</li>
              <li className="cursor-pointer underline ">Contact Us</li>
              <li className="cursor-pointer underline ">Help</li>
              <li className="cursor-pointer underline ">Privacy</li>
            </ul>
          </div>
          <div className="flex lg:w-[15%] flex-col gap-4">
            <span>Get the app.</span>

            <div className="border w-full cursor-pointer px-[10px] py-[5px]  rounded-lg flex gap-4 border-white">
              <img className="w-[30px]" src="/apple.svg" alt="apple logo" />
              <span className="flex whitespace-nowrap flex-col">
                Download on the <strong>App Store</strong>
              </span>
            </div>
            <div className="border cursor-pointer w-full px-[10px] py-[5px] rounded-lg  flex gap-4 border-white">
              <img
                className="w-[30px]"
                src="/Subtract.svg"
                alt="android logo"
              />
              <span className="flex  flex-col">
                GET IT ON <strong>Google Play</strong>
              </span>
            </div>
          </div>
        </div>
        {/* bottom section - copyright */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-0 pt-8 lg:border-t border-[#002616] justify-between">
          <h6 className="text-[#AFD9D9]">
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