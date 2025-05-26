import React from 'react';

function MainPage() {
  return (
    <div className="p-8">
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