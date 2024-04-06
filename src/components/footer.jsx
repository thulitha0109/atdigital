import React from 'react';
import { logo } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-8">
      <div className="max-w-7xl px-8 mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 items-center justify-center md:justify-start mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-10 mr-2 mb-4" />
          <span>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</span>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-start justify-around md:justify-around">
          <div className="md:text-left mb-8 md:mb-0">
            <h4 className="font-semibold mb-4">Our Technologies</h4>
            <ul className='space-y-2'>
              <li><a href="#">React</a></li>
              <li><a href="#">Gatsby</a></li>
              <li><a href="#">NextJS</a></li>
              <li><a href="#">NodeJS</a></li>
            </ul>
          </div>
          <div className="md:text-left">
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className='space-y-2'>
              <li><a href="#">Social media Marketing</a></li>
              <li><a href="#">Web & Mobile App Development</a></li>
              <li><a href="#">Data & Analytics</a></li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 mx-auto border-t border-gray-300 py-4 text-center">
          <a href="#" className="mr-2">Privacy Policy</a>
          <span>| </span>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
