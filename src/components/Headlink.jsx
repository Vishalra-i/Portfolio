import React from 'react'
import { NavLink } from 'react-router-dom'

function Headlink() {
  return (
    <>
      <NavLink to="/" className={({isActive})=>` ${isActive ?"text-blue-300": "text-white"} text-sm md:text-xl`}>
                  Home
               </NavLink>
               <NavLink to="/about" className={({isActive})=>` ${isActive ?"text-blue-300 ": "text-white"} text-sm md:text-xl`}>
                  About
               </NavLink>
               <NavLink to="/project" className={({isActive})=>` ${isActive ?"text-blue-300 ": "text-white"} text-sm md:text-xl`}>
                  Project
               </NavLink>
               <NavLink to="/contact" className={({isActive})=>` ${isActive ?"text-blue-300 ": "text-white"} text-sm md:text-xl`}>
                  Contact
               </NavLink>
               <NavLink to="https://bloghunter.vercel.app/" className={({isActive})=>` ${isActive ?"text-blue-300 ": "text-white"} text-sm md:text-xl`}>
                  Blog
               </NavLink>
    </>
  )
}

export default Headlink