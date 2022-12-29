import React from 'react'
import Navbar from '../Navbar'
import Footer from "../Footer"


const About = () => {
  return (
    <div className='bg-[#1d1d1d] h-screen '>
        <div><Navbar /></div>
        <div className=' text-gray-400 p-4 gap-4 flex flex-col  lg:max-w-[90vw] mx-auto w-full '>
          <p className='text-[42px] text-white '>About</p>
          <p>iBomma is an exclusive Telugu Movies online video streaming and download platform.</p>
          <p>Our extensive content library includes Telugu movies across genres. Out content is regularly added and is suited exclusively for the Telugu audience</p>
          <p>Available on devices including Mobile, Tablet, Web, Laptop and PCs, now discover and watch iBomma anywhere and everyWhere. Download and watch your favorite content offline at ypur convenience.</p>
          <p>We offer a comfortable and friendly user experience with highly evolved video streaming technology at amazing speed and clear sounds, Navigation, Seamless Video playback, Smart Content Search & recommendation and much more, All you nedd is a compatible smart mobile.</p>
          <p>iBOMMA-Where Quality and Clarity Matters.</p>
        </div>
        <div className='absolute bottom-0 mx-auto w-full'><Footer /></div>

    </div>
  )
}

export default About