import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useTheme from '../context/Theme';
import HamburgerMenu from './Hamburger';
import Headlink from './Headlink';
import Toggle from './Toggle';

function Header() {
  return (
    <>
      <div className="flex items-center justify-center  box-border ">
        {/* <Link to="/" >
          <h1 className="text-2xl font-bold font-protest text-center text-transparent bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text animate-slideInFromLeft">
            &lt; Vishal Rai &gt;
          </h1>
        </Link> */}
        <div className="fixed z-10  flex justify-evenly md:min-w-fit border-2 border-gray-800 bg-black/60 backdrop-blur-2xl rounded-[30px] mx-2 px-6 py-4  bottom-5 md:top-5 items-center h-[60px] w-[360px] md:w-[40%]">
          <div className=" md:flex max-lg:flex justify-between  items-center w-full flex-row gap-9 font-extrabold px-2">
            <Headlink />
          </div>
        </div>
        {/* <div className="fixed top-5 z-2 left-2 ">
          <HamburgerMenu />
        </div> */}
      </div>
    </>
  );
}

export default Header;
