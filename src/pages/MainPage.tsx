import React from 'react';

function MainPage() {
  return (
    <div className="mx-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[100vh]">
        <div className="flex flex-col justify-center">
          <h1 className="text-8xl font-bold mb-4">Hydrogel 2025</h1>
          <p className="text-4xl mt-4">
            Our Hydrogel project for the 2025 competition...
          </p>
          <p className="text-lg mt-16">
            Scroll to learn more
          </p>
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