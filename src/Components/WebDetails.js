import React from 'react'

const WebDetails = ({image, title, year}) => {
  return (
    <div className="text-white ">
    <div>
     
      <div className=''><img src={image} alt="movie" className="w-[200px] h-[200px]" /></div>
     <div className="mt-1 font-semi-bold"> {title } </div>
     <div className="-mt-1 text-gray-300"> {year}</div>
    </div>
  </div>
  )
}

export default WebDetails