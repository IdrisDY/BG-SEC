import Image from "next/image";
const WelcomeToDashboard = ({ topText, bottomText }) => {
  return (
    <div className="fixed inset-x-0 inset-y-0 overflow-auto md:overflow-hidden lg:bottom-0 h-full bg-opacity-50 bg-black z-[9999] ">
      <div
        className={` ${"animate-dropdown"} bg-light_mainTxt w-full relative h-full text-default_steps  justify-center gap-4 flex items-center  flex-col `}
      >
        <div className="">
          <span className="text-[1.8rem] font-[700] "> {topText}</span>{" "}
        </div>

        <div className="  rounded-[50%] ">
          <div className="relative w-[300px] bg-black h-[300px]  rounded-[50%] ">
            <Image
              layout="fill"
              src="/onboard/onboardwoman.png"
              alt="onboard"
            />
          </div>
        </div>
        <div className=" flex ">
          <span className=" w-3/5 text-center m-auto text-[1.125rem] font-[700]"> {bottomText} </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToDashboard;
