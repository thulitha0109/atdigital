import React, { useState } from 'react';
import { logo } from "../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary main-nav">
      <div className="max-w-7xl mx-auto px-8 flex justify-between h-16 items-center">
        <div className="flex-shrink-0 flex items-center">
          <img src={logo} alt='logo' className='w-48 object-contain' />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="#" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
          <a href="#" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
          <a href="#" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Careers</a>
        </div>
        <div className="md:hidden flex items-center z-20">
          <button onClick={toggleNavbar} className="text-gray-200 hover:text-white focus:outline-none">
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#000">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 z-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white absolute top-0 z-10 w-full h-full px-8 py-8">
          <a href="#" className="block text-gray px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#" className="block text-gray px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="#" className="block text-gray px-3 py-2 rounded-md text-sm font-medium">About Us</a>
          <a href="#" className="block text-gray px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
          <a href="#" className="block text-gray px-3 py-2 rounded-md text-sm font-medium">Careers</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
