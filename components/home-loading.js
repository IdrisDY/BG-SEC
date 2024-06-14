import Image from "next/image";
import Spinner from "./spinner";

function Loader() {
  return (
    <div className=" flex flex-col justify-center text-light_mainTxt items-center bg-fade_green_landing h-screen w-full ">
      <div className="relative  w-[90%] lg:w-[40%] h-[200px] lg:h-[30vh] ">
        <Image layout="fill" src="/bgl_logo_light.svg" alt="BGL logo" />
      </div>

      <span className=" text-center text-[1.125rem] lg:text-[1.4rem] ">
        Welcome to BGL Securities Limited
      </span>

      <Spinner />
    </div>
  );
}

export default Loader;
