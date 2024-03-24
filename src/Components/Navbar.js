import React, {useState} from 'react'
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import cart from '../Images/cart.svg'
import { NavLink } from 'react-router-dom'


  export default function Navbar() {
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
       <nav className='bg-[#000000e5] mx-auto px-[2rem] sm:px-[5rem] md:px-[5rem] lg:px-[5rem] flex-wrap pt-5 sticky top-0 flex justify-between sm:justify-between md:justify-between text-[#FFFFFF] text-[0.8rem] border-b-[1px] border-[#979797] pb-4' >
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
    </div>
  )
}
