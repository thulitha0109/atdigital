import React from 'react';
import { hero } from "../assets";
import { Button } from '../components';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 h-screen flex items-end">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={hero}
        alt="Background"
      />
      <div className="hero-text max-w-7xl mx-auto flex z-10">
        <div className="flex flex-col hero-gradient md:w-1/2 px-8 py-8">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4">We crush your competitors, goals, and sales records - without the B.S.</h1>
          <Button className="text-sm md:text-base">
            Get free consultation
          </Button>
        </div>
                <div class="flex-col md:w-1/2">
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
