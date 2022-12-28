import React from "react";
import logo from "../Components/Assets/logo.png";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiFillBug } from "react-icons/ai";
import { MdForwardToInbox } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="bg-[#252525] "><div className=" flex  items-center justify-between  lg:max-w-[90vw] mx-auto">
    <div className="p-4 flex items-center gap-[100px] ">
    <AiOutlineMenu className="text-white text-[22px]  w-10 h-8 p-2  bg-[#65b643] sm:hidden"/>
    <Link to="/"><img src={logo} alt="" className=" w-40   "/></Link>
    
    </div>
    
    <div className="hidden sm:flex">
      <ul className="text-white gap-5 flex ml-2 ">
        <div>
          <Link to="/about" className="flex justify-center items-center gap-2" >
            <HiOutlineUserGroup className="text-[#65b643] " />
            <Link to="/about" className="text-[14px] text-gray-300 hover:text-[16px] ">About</Link>
          </Link>
        </div>
        <div>
          <Link to="/bugreport" className="flex justify-center items-center gap-2" >
          <AiFillBug className="text-[#65b643]" />
            <Link to="/bugreport"  className="text-[14px] text-gray-300 hover:text-[16px]">Bug Report</Link>
          </Link>
        </div>
        <div>
          <Link to="/contact" className="flex justify-center items-center gap-2" >
              <MdForwardToInbox className="text-[#65b643]" />
          
            <Link to="/contact" className="text-[14px] text-gray-300 hover:text-[16px]">Contact</Link>
          </Link>
        </div>
      </ul>
    </div>
    <div className="hidden sm:flex md:mr-6 relative" >
      <input type="text" placeholder="Search.." className="rounded-full text-gray-300 bg-[#333333]  right-3 w-full placeholder:pl-3" />
      <BiSearchAlt2 className="absolute right-0  rounded-r-full w-6 h-6 p-1 text-white bg-[#65b643]"/>
      </div>
      <BiSearchAlt2 className="sm:hidden     mr-5 mt-0.9  w-10 h-8 p-2 text-white bg-[#65b643]"/>

  </div>
</div>  );
};

export default Navbar;
