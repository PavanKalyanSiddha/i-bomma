import React from "react";
import Cardinfo from "./Cardinfo";
import kadal from "../Components/Assets/kadal.jpg"
import like from "../Components/Assets/like.jpg"
import movie from "../Components/Assets/movie.jpeg"
import machaka from "../Components/Assets/machaka.jpg"
import urvashi from "../Components/Assets/urvashi.jpg"
import rama from "../Components/Assets/rama.jpeg"
import anja from "../Components/Assets/anja.jpg"
import orange from "../Components/Assets/orange.jpg"
import mogudu1 from "../Components/Assets/mogudu1.jpg"
import snehithudu1 from "../Components/Assets/snehithudu1.jpg"
import cheliya from "../Components/Assets/cheliya.jpg"
import chintha from "../Components/Assets/chintha.jpg"



const Cards = () => {
  const Cards =  [
    { image: kadal , title: "Coffe with Kadhal", year: 2022 },
    { image: like , title: "Like,Share & Subscribe", year: 2022 },
    { image: movie , title: "Yashoda", year: 2022 },
    { image: machaka , title: "Macherla Niyojakavargam", year: 2022 },
    { image: urvashi , title: "Urvasivo Rakshasivo", year: 2022 },
    { image: rama , title: "Ram setu", year: 2022 },
    {  image: anja , title: "Anjaneylu", year: 2009 },
    { image: orange , title: "Orange", year: 2010 },
    { image: mogudu1 , title: "Mogudu", year: 2011 },
    { image: snehithudu1 , title: "Snehitudu", year: 2012 },
    { image: cheliya , title: "Cheliya", year: 2017 },
    { image: chintha , title: "Chintakayala Ravi", year: 2008 },

  ];
  return (
    <div className="grid grid-cols-3 m-4 gap-2 sm:grid-cols-6 max-w-[90vw] mx-auto">
      {Cards.map((card) => (
        <Cardinfo image={card.image} title={card.title} year={card.year} />
        
      ))}
    
     
    </div>
  );
};

export default Cards;
