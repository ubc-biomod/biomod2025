import React from 'react';
import hero_placeholder from "../assets/images/hero_placeholder.png"
import arrow_down from "../assets/icons/arrow_down.png"

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-8xl font-bold text-header leading-tight">
            Hydrogel <br/>
            <span>2025</span>
          </h1>
          <p className="text-lg md:text-3xl text-subheader leading-relaxed">
            Our Hydrogel project for the 2025 competition...
          </p>
          <div className="flex flex-row sm:flex-row gap-4">
            <img src={arrow_down} className='w-8' />
            <p className="text-md md:text-xl text-subheader leading-relaxed">
            Scroll to see more!
            </p>
          </div>
        </div>
        
        {/* Image Placeholder */}
        <img src={hero_placeholder} className="w-4/5 mx-auto " />
      </div>
    </div>
  );
};

export default HeroSection;