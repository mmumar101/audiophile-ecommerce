import React from 'react';
// import toggle from '../Images/toggle.svg';


function Header() {

  return (
    <div>
      <header className='mx-auto sm:px-[5rem] md:px-[5rem] lg:px-[5rem] bg-mobile_image md:bg-desktop_image lg:bg-desktop_image flex-wrap pt-5 sticky top-0 min-h-screen bg-center bg-cover bg-no-repeat '>
     
        <div className='text-center justify-center mx-auto items-center mt-20' >
          <span className='text-[#979797] tracking-[5px] text-[0.5rem]'>NEW PRODUCT</span>
          <div className='font-semibold text-3xl'>
          <span className='text-[#FFFFFF]'>XX99 MARK II</span> <br />
          <span className='text-[#FFFFFF]'> HEADPHONES</span>
          </div>
          <p className='text-[#979797] text-[0.6rem] w-[70%] mx-auto mt-5'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className='h-[2rem] w-[6rem] rounded-sm bg-[#D87d48] text-[0.6rem] pt-1 font-bold mt-5 '>SEE PRODUCT</button>
        </div>
      </header>
      
    </div>
  )
}

export default Header

