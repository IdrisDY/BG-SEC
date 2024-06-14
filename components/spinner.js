// components/Spinner.js
import React from 'react';

const Spinner = () => {
  return (
    <div className="flex w-full  mt-[70px] justify-center items-center ">
      <div className="relative  h-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 bg-black rounded-full absolute animate-spinner`}
            style={{
              transform: `rotate(${i * 45}deg) translate(24px)`,
              animationDelay: `${i * 0.125}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Spinner;
