import React from 'react';
import { GoArrowDown } from "react-icons/go";

function MainPage() {
  return (
    <div className="mx-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[100vh]">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl leading-20 lg:text-8xl lg:leading-28 xl:text-9xl xl:leading-35 font-black mb-4">Hydrogel <br></br> 2025</h1>
          <p className="text-3xl lg:text-4xl mt-4 font-medium">
            Our Hydrogel project for the 2025 competition...
          </p>
          <div className="flex items-end gap-x-2">
            <div className="">
              <GoArrowDown size={32}/>
            </div>
            <p className="text-xl mt-16">
              Scroll to learn more!
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img
            src="/images/cell.png"
            alt="Hydrogel Project"
            className="w-3/4 h-auto rounded-lg"
          />
        </div>
        
      </div>
      <div className="mt-8 space-y-4">
        {Array.from({ length: 10 }, (_, i) => (
          <p key={i}>
            This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    </div>
  );
}

export default MainPage;