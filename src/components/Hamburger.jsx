import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Headlink from './Headlink';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        className="text-[#000] dark:text-white font-bold text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Menu items */}
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
