import React from 'react'
import Navbar from '../Navbar'

import Footer from '../Footer'



const BugReport = () => {
  return (
    <div className='bg-[#1d1d1d] h-screen'>
        <div><Navbar /></div>
        <div className=' text-gray-400 p-4 gap-4 flex flex-col  lg:max-w-[90vw] mx-auto w-full '>
          <p className='text-[42px] text-white '>Bug Report</p>
          <p className='text-[#65b643]'>FAQ:</p>
          <p className=''>Video is not playing / Downloading</p>
          <p>1) Just remove the broswer cache and try again</p>
          <p>2) Allow cookies</p>
          <p>3) Disable any plugins which block our resources</p>
          <p>NOTE: We do not accept any movies reqest / Bug-reports from INDIA at this moment, We'll ignore such kind of messages most of the times, <span className=''>repeated violators will be banned from our system.</span></p>

          
        </div>
        <div className=' absolute bottom-0 w-full mx-auto '><Footer /></div>

    </div>
  )
}

export default BugReport