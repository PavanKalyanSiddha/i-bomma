import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className=" bg-[#252525] flex items-center justify-center  text-white">
      <div className="m-4 p-6">
        <h1 className="font-semibold text-[20px] sm:text-[25px]">
          Looking For Movies? Use Our Search
        </h1>
        <p className="sm:ml-8 text-[14px] ml-4 ">
          Thousands of movies in our database & still adding
        </p>

        <div className="flex items-center justify-center   relative ">
          <input
            type="text"
            placeholder="Search.."
            className=" rounded-full  mt-4 w-full bg-[#333333]"
          />
          <BiSearchAlt2 className="absolute right-0  bg-[#65b643] mt-4 w-6 h-6 rounded-r-full  " />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
