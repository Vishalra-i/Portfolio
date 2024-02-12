import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import useTheme from '../context/Theme'
import HamburgerMenu from './Hamburger'
import Headlink from './Headlink'
import Button from './Button'


function Header() {
   
  return (
    <div className='p-6 h-auto  shadow-xl   text-xl font-["protest"] dark:shadow-[#000] shadow-gray-400 dark:bg-black dark:text-white flex justify-between items-center'>
           <h1 class="text-2xl font-bold font-protest  text-center  text-transparent bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text animate-slideInFromLeft"> &lt; Vishal Rai &gt;</h1>
           <div className=' max-sm:hidden sm:hidden md:flex max-lg:flex justify-between flex-row gap-9 font-extrabold px-2  '>
               <Headlink/>
           </div>
         
        <Button/> 
        <HamburgerMenu/>
    </div>
  )
}

export default Header