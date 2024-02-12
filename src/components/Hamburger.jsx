import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Headlink from './Headlink';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden md:hidden">
      <button
        className="text-[#000] dark:text-white font-bold text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
          {isOpen ? (
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/delete-sign.png" alt="delete-sign"/>           
             ) : (
            <img width="48" height="48" src="https://img.icons8.com/office/48/xbox-menu.png" alt="xbox-menu"/>             )}
      </button>

      {isOpen && (
        <div className="absolute top-15 p-2 transition transform right-0 md:hidden  z-10">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-[#9b9696] dark:bg-black divide-y-2 divide-gray-50">
            <div className=" flex flex-col px-5 py-2 font-bold tex-2xl gap-6 ">
               <Headlink/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
