import React from "react";
import { FaWifi } from "react-icons/fa";
import curvedlogo from "../Components/Assets/curvedlogo.png";
import WebDetails from "./WebDetails";
import anja from "../Components/Assets/anja.jpg"
import orange from "../Components/Assets/orange.jpg"
import mogudu1 from "../Components/Assets/mogudu1.jpg"
import snehithudu1 from "../Components/Assets/snehithudu1.jpg"
import cheliya from "../Components/Assets/cheliya.jpg"
import chintha from "../Components/Assets/chintha.jpg"

const ForeignDub = () => {
  const WebSeries = [{  image: anja , title: "Anjaneylu", year: 2009 },
    { image: orange , title: "Orange", year: 2010 },
    { image: mogudu1 , title: "Mogudu", year: 2011 },
    { image: snehithudu1 , title: "Snehitudu", year: 2012 },
    { image: cheliya , title: "Cheliya", year: 2017 },
    { image: chintha , title: "Chintakayala Ravi", year: 2008 },
  ];
    
  return (
    <div className="m-4 max-w-[90vw] mx-auto">
      <div className="flex gap-2 text-white">
        <FaWifi className="mt-1 text-[#65b643]"/>
        <h1>Add-ons (0)</h1>
      </div>
      <div className="w-[100px]">
        <img src={curvedlogo} alt="movie" />
      </div>

     <div className="grid grid-cols-3 mt-4 gap-2 sm:grid-cols-6"> {WebSeries.map((web)=>(
        <WebDetails image={web.image} title={web.title} year={web.year} />
      ))}</div>

    </div>
  );
};

export default ForeignDub;
