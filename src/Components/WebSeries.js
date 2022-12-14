import React from "react";
import { FaWifi } from "react-icons/fa";
import curvedlogo from "../Components/Assets/curvedlogo.png";
import WebDetails from "./WebDetails";
import ahana from "../Components/Assets/ahana.png"
import jhansi1 from "../Components/Assets/jhansi1.jpg"
import agent1 from "../Components/Assets/agent1.jpg"
import hello from "../Components/Assets/hello.jpg"
import victim1 from "../Components/Assets/victim1.jpg"
import paper1 from "../Components/Assets/paper1.jpg"

const WebSeries = () => {
  const WebSeries = [
    { image: ahana , title: "Aha Na Pellanta", year: 2022 },
    { image: jhansi1 , title: "Jhansi", year: 2022 },
    { image: agent1 , title: "Agent Anand Santosh", year: 2022 },
    { image: hello , title: "Hello World", year: 2022 },
    { image: victim1 , title: "Victim", year: 2022 },
    { image: paper1 , title: "Paper Rocket", year: 2022 },


  ];
    
  return (
    <div className="m-4 max-w-[90vw] mx-auto">
      <div className="flex gap-2 text-white">
        <FaWifi className="mt-1 text-[#65b643]"/>
        <h1>Web Series</h1>
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

export default WebSeries;
