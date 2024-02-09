import React from 'react'
import { NavLink } from 'react-router-dom'

function Headlink() {
  return (
    <>
      <NavLink to="/" className={({isActive})=>` ${isActive ?"text-blue-700 ": "text-gray-700"}`}>
                  Home
               </NavLink>
               <NavLink to="/about" className={({isActive})=>` ${isActive ?"text-blue-700 ": "text-gray-700"}`}>
                  About
               </NavLink>
               <NavLink to="/project" className={({isActive})=>` ${isActive ?"text-blue-700 ": "text-gray-700"}`}>
                  Project
               </NavLink>
               <NavLink to="/contact" className={({isActive})=>` ${isActive ?"text-blue-700 ": "text-gray-700"}`}>
                  Contact
               </NavLink>
    </>
  )
}

export default Headlink