import React from 'react'
// import { TiSocialFacebook } from "react-icons/ti";
// import { FaTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-[#101010] '>
      <div className="text-[#FFFFFF] flex flex-col text-center pt-7">
        <span className="text-1xl font-bold mb-6">audiophile</span>
        <button className="text-[0.6rem] mb-3">HOME</button>
        <button className="text-[0.6rem] mb-3">HEADPHONES</button>
        <button className="text-[0.6rem] mb-3">SPEAKERS</button>
        <button className="text-[0.6rem] mb-3">EARPHONES</button>
      </div>

      <div className="text-[#979797] mt-7 text-[0.6rem] text-center justify-center mx-3">
       <p className="mb-6">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>

      <div className='flex gap-2 mt-8 justify-center pb-10'>
         {/* <TiSocialFacebook className='bg-[#f2f2f2]'/> */}
         {/* <FaTwitter className='text-[#f2f2f2]' /> */}
         {/* <FaInstagram className='text-[#f2f2f2]'/> */}
      </div>
    </div>
  )
}

export default Footer