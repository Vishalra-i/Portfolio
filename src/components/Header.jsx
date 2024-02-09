import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import useTheme from '../context/Theme'
import HamburgerMenu from './Hamburger'
import Headlink from './Headlink'


function Header() {
   const {darkmode,lightmode,thememode,mode} = useTheme()
    const onClickchange = (e)=>{
          if(mode)lightmode()
          else darkmode()
    }
  return (
    <div className='p-4 h-auto  shadow-lg  text-xl font-["protest"] dark:shadow-[#000] shadow-gray-400 dark:bg-black dark:text-white flex justify-between items-center'>
           <img src={thememode === "dark"?"./src/assets/Vishal Rai.png":"./src/assets/lightlogo.png"} className='md:w-24 max-lg:w-24 md:h-12 max-lg:h-12  max-sm:w-12 max-sm:h-7 sm:h-7 sm:w-12' alt="" />

           <div className=' max-sm:hidden sm:hidden md:flex max-lg:flex justify-between flex-row gap-9 font-extrabold px-2  '>
               <Headlink/>
           </div>

        <button onClick={onClickchange} className='w-16 h-16'>{mode ?<img width="100" height="100" src="https://img.icons8.com/clouds/100/sun.png" alt="sun"/>:<img width="64" height="64" src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/external-moon-sun-and-moon-tulpahn-flat-tulpahn-3.png" alt="external-moon-sun-and-moon-tulpahn-flat-tulpahn-3"/>}</button>
        <HamburgerMenu/>
    </div>
  )
}

export default Header