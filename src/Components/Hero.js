import React from "react";
import { AiFillStar } from "react-icons/ai";
import curvedlogo from "./Assets/curvedlogo.png";

const Hero = () => {
  return (
    <div className=" flex items-center justify-center flex-col  m-8   gap-4 ">
      <h1 className="text-[30px] sm:text-[42px] text-white  ">
        Where Quality & Clarity Matters
      </h1>
      <p className="text-[17px] text-gray-300 sm:ml-8 ">
        Watch / download Telugu movies in an excellent quality at the smallest
        file size.
        <span className="hidden sm:flex ml-8">
          Exclusively designed & developed for smartphones. tablets and PCs.
        </span>{" "}
        <span className=" sm:hidden ">
          Exclusively designed & developed for smartphones. tablets and PCs.
        </span>
      </p>
      <div className="flex items-center justify-center mt-4">
        <AiFillStar className="text-[#65b643] mb-7" />
        <div className="flex items-center flex-col ">
          <p className="text-gray-300 text-[17px]">
            Remove the browser cache, reload
          </p>
          <img src={curvedlogo} alt="line" className="text-white w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
