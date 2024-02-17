import React from 'react'
import { NavLink } from 'react-router-dom'

function Headlink() {
  return (
    <>
      <NavLink to="/" className={({isActive})=>` ${isActive ?"text-blue-700 ": "text-gray-700"} text-xl`}>
                  Home
               </NavLink>
               <NavLink to="/about" className={({isActive})=>` ${isActive ?"text-blue-700 ": "text-gray-700"} text-xl`}>
                  About
               </NavLink>
               <NavLink to="/project" className={({isActive})=>` ${isActive ?"text-blue-700 ": "text-gray-700"} text-xl`}>
                  Project
               </NavLink>
               <NavLink to="/contact" className={({isActive})=>` ${isActive ?"text-blue-700 ": "text-gray-700"} text-xl`}>
                  Contact
               </NavLink>
    </>
  )
}

export default Headlink