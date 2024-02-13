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
    <>
    <div class="fixed z-10 py-2 px-5 border-b-[1px] flex justify-between items-center backdrop-blur-md text-white w-full h-16">
    <Link to="/" >
    <h1 class="text-2xl font-bold font-protest  text-center  text-transparent bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text animate-slideInFromLeft"> &lt; Vishal Rai &gt;</h1>
    </Link>
           <div className=' max-sm:hidden sm:hidden md:flex max-lg:flex justify-between flex-row gap-9 font-extrabold px-2  '>
               <Headlink/>
           </div>
         
        <Button/> 
        <HamburgerMenu/>
    </div>
    </>
  )
}

export default Header