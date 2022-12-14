import React from "react";
import logo from "../Components/Assets/logo.png";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiFillBug } from "react-icons/ai";
import { MdForwardToInbox } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";



const Navbar = () => {
  return (
    <div className="bg-[#252525] flex  items-center justify-between  ">
      <div className="p-4 flex items-center gap-[100px] ">
      <AiOutlineMenu className="text-white text-[22px]  w-10 h-8 p-2  bg-[#65b643] sm:hidden"/>
      <img src={logo} alt="" className=" w-40 ml-8 sm:ml-2  "/>
      
      </div>
      <div className="hidden sm:flex">
        <ul className="text-white gap-5 flex ml-2">
          <div>
            <li className="flex justify-center items-center gap-2" >
              <HiOutlineUserGroup className="text-[#65b643]" />
              <div className="text-[14px] text-gray-300">About</div>
            </li>
          </div>
          <div>
            <li className="flex justify-center items-center gap-2" >
            <AiFillBug className="text-[#65b643]" />
              <div  className="text-[14px] text-gray-300">Bug Report</div>
            </li>
          </div>
          <div>
            <li className="flex justify-center items-center gap-2" >
                <MdForwardToInbox className="text-[#65b643]" />
            
              <div className="text-[14px] text-gray-300">Contact</div>
            </li>
          </div>
        </ul>
      </div>
      <div className="hidden sm:flex md:mr-6 relative" >
        <input type="text" placeholder="Search.." className="rounded-full text-gray-300 bg-[#333333]  right-3 w-full" />
        <BiSearchAlt2 className="absolute right-0  rounded-r-full w-6 h-6 p-1 text-white bg-[#65b643]"/>
        </div>
        <BiSearchAlt2 className="sm:hidden     mr-5 mt-0.9  w-10 h-8 p-2 text-white bg-[#65b643]"/>

    </div>
  );
};

export default Navbar;
