import React from 'react';
import HeroSection from '../components/HeroSection';
import CardStack from '../components/MainCardStack';

function MainPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Card Stack Section */}
      <CardStack />
    </div>
  );
}

export default MainPage;