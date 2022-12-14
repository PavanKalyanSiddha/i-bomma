import React from "react";
import { FaWifi } from "react-icons/fa";
import curvedlogo from "../Components/Assets/curvedlogo.png";
import WebDetails from "./WebDetails";
import myfatherdragon from "../Components/Assets/myfatherdragon.jpg";
import jeepercreepers from "../Components/Assets/jeepercreepers.jpg";
import bumblebee from "../Components/Assets/bumblebee.png";
import endgame from "../Components/Assets/endgame.jpg";
import infinity from "../Components/Assets/infinity.jpg";
import ageofultron from "../Components/Assets/ageofultron.jpg";








const ForeignDub = () => {
  const WebSeries = [
    { image: myfatherdragon, title: "My Father's dragon", year: 2022 },
    { image: jeepercreepers, title: "Jeepers Creepers: Reborn", year: 2022 },
    { image: bumblebee, title: "Bumblebee", year: 2018 },
    { image: endgame, title: "Avengers: Endgame", year: 2019 },
    { image: infinity, title: "Avengers: Infinity War", year: 2018 },
    { image: ageofultron, title: "Avengers: Age 0f Ultron", year: 2015 },
  ];

  return (
    <div className="m-4 max-w-[90vw] mx-auto">
      <div className="flex gap-2 text-white">
        <FaWifi className="mt-1 text-[#65b643]" />
        <h1>Foreign Dub</h1>
      </div>
      <div className="w-[100px]">
        <img src={curvedlogo} alt="movie" />
      </div>

      <div className="grid grid-cols-3 mt-2 gap-2 sm:grid-cols-6">
        {" "}
        {WebSeries.map((web) => (
          <WebDetails image={web.image} title={web.title} year={web.year} />
        ))}
      </div>
    </div>
  );
};

export default ForeignDub;
