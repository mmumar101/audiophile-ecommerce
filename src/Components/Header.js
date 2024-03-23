import React, { useState } from 'react';
// import toggle from '../Images/toggle.svg';
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import cart from '../Images/cart.svg'
import { NavLink } from 'react-router-dom'

function Header() {
    const [isOpen, setIsopen] = useState(false)

    const toggleNavBar = () => {
      setIsopen(!isOpen)
    }

  const NavItems = () => {
    return(
      <>
        <NavLink to='/' className=' hover:text-[#D87D4A] hover:font-semibold focus:text-[#D87D4A] focus:ring-4 focus:outline-none rounded-sm' >Home</NavLink>
        <NavLink to='/earphones' className=' hover:text-[#D87D4A] hover:font-semibold focus:text-[#D87D4A] focus:ring-4 focus:outline-none rounded-sm'>Earphones</NavLink>
        <NavLink to='/headphones' className=' hover:text-[#D87D4A] hover:font-semibold focus:text-[#D87D4A] focus:ring-4 focus:outline-none rounded-sm'>Headphones</NavLink>
        <NavLink to='/speakers' className=' hover:text-[#D87D4A] hover:font-semibold focus:text-[#D87D4A] focus:ring-4 focus:outline-none rounded-sm'>Speakers</NavLink>
      </>
    )
  };

  return (
    <div>
      <header className='mx-auto sm:px-[5rem] md:px-[5rem] lg:px-[5rem] bg-mobile_image md:bg-desktop_image lg:bg-desktop_image flex-wrap pt-5 sticky top-0 min-h-screen bg-center bg-cover bg-no-repeat '>
      <nav className='flex justify-between sm:justify-between md:justify-between text-[#FFFFFF] px-6 text-[0.8rem] border-b-[1px] border-[#979797] pb-4' >
          {/* <div className='flex justify-between' > */}
            {/* <img src={toggle} alt='toggle' /> */}

            <button onClick={toggleNavBar} className='sm:hidden md:hidden lg:hidden'>{isOpen ? <MdCancel className='w-5 h-5' /> : <IoMenu className='w-5 h-5' />}
            </button>
            
            <span className='font-bold'>audiophile</span>
          {/* </div> */}
        
          <div className='hidden sm:flex md:flex lg:flex gap-5 text-slate-200 '>
           <NavItems />
          </div>

            {isOpen && (<div className='flex flex-col text-slate-200 sm:hidden md:hidden lg:hidden  '>
              <NavItems />
            </div>)}
          
          <img src={cart} alt='cart' />
        </nav>
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

