import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Hamburgermenu from './Hamburgermenu';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
   <div className='absolute w-full'>
      <div className='w-4/5 hidden  m-auto mt-5 md:flex justify-between items-center'>
        <div className='w-[110px] flex justify-between items-center text-sm '>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V8C32 21.2548 21.2548 32 8 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#F59E0B"/>
            <path d="M4 8C4 5.79086 5.79086 4 8 4H32C34.2091 4 36 5.79086 36 8V12C36 25.2548 25.2548 36 12 36H8C5.79086 36 4 34.2091 4 32V8Z" fill="#4BE4C9"/>
          </svg>
          <div className='text-md font-mono font-black' style={{fontFamily:"Lexend"}}>Hounter</div>
        </div>
        <div>
          <ul className='list-none flex justify-end gap-8 items-center'>
            <li className='border  text-md border-opacity-30 text-white/90 bg-white/10 px-3 py-1 border-slate-100 rounded-[1.5rem] hover:text-black ease-in-out duration-300 hover:bg-green-200 cursor-pointer'><Link>About Us</Link></li>
            <li className='border text-md border-opacity-30 text-white/90 bg-white/10 px-3 py-1 border-slate-100 rounded-[1.5rem] hover:text-black ease-in-out duration-300 hover:bg-green-200 cursor-pointer'><Link>Article</Link></li>
            <li className='border text-md border-opacity-30 text-white/90 bg-white/10 px-3 py-1 border-slate-100 rounded-[1.5rem] hover:text-black ease-in-out duration-300 hover:bg-green-200 cursor-pointer'><Link>Property</Link></li>
            <li className='border text-md border-opacity-30 text-black bg-green-50 px-4 py-2 border-slate-100 rounded-[1.5rem] font-semibold hover:text-white ease-in-out duration-300 hover:bg-green-200 cursor-pointer'><button>Sign Up!</button></li>
          </ul>
       </div>
      </div>
      <div className='px-5 mt-3 md:hidden flex justify-between items-center'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V8C32 21.2548 21.2548 32 8 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#F59E0B"/>
              <path d="M4 8C4 5.79086 5.79086 4 8 4H32C34.2091 4 36 5.79086 36 8V12C36 25.2548 25.2548 36 12 36H8C5.79086 36 4 34.2091 4 32V8Z" fill="#4BE4C9"/>
          </svg>
        </div>
        <div>
           <Hamburgermenu isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </div>
   </div>
  )
}

export default Navbar
