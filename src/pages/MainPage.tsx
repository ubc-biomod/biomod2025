import React, { useEffect, useRef, useState } from 'react';

// Hero Component
const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Welcome to Our
            <span className="text-blue-600 block">Amazing Platform</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Discover innovative solutions that transform the way you work. 
            Our cutting-edge technology delivers exceptional results for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Image Placeholder */}
        <div className="order-first md:order-last">
          <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl font-semibold">Hero Image</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card Component for the stack
interface CardProps {
  index: number;
  title: string;
  description: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ index, title, description, bgColor }) => {
  return (
    <div 
      className={`w-full h-screen flex items-center justify-center ${bgColor} p-8`}
      style={{ zIndex: 50 - index }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">{title}</h2>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">{description}</p>
        <div className="mt-8">
          <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

// Card Stack Component
const CardStack: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with cutting-edge technology and creative solutions that drive your business forward.",
      bgColor: "bg-[#B9D8C2]"
    },
    {
      title: "Excellence",
      description: "Delivering exceptional quality in everything we do, from initial concept to final implementation and ongoing support.",
      bgColor: "bg-[#9AC2C9]"
    },
    {
      title: "Partnership",
      description: "Building lasting relationships with our clients through trust, transparency, and a shared commitment to success.",
      bgColor: "bg-[#8AA1B1]"
    }
  ];

  return (
    <div className="relative" ref={containerRef}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {cards.map((card, index) => {
          // Calculate scroll progress for this card
          const heroHeight = window.innerHeight;
          const cardStartScroll = heroHeight + (index * window.innerHeight * 0.8);
          const scrollProgress = Math.max(0, Math.min(1, (scrollY - cardStartScroll) / window.innerHeight));
          
          return (
            <div 
              key={index}
              className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out"
              style={{ 
                transform: `translateY(${scrollProgress * -100}vh)`,
                zIndex: 50 - index,
              }}
            >
              <Card 
                index={index} 
                title={card.title} 
                description={card.description}
                bgColor={card.bgColor}
              />
            </div>
          );
        })}
      </div>
      
      {/* Spacer to allow scrolling for all cards */}
      <div style={{ height: `${cards.length * 100}vh` }}></div>
    </div>
  );
};

// Final Video Section
const VideoSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#4A5043] flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Watch Our Story
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Get an inside look at how we're transforming industries and creating 
          meaningful impact through innovation and dedication.
        </p>
        
        {/* Video Container Placeholder */}
        <div className="aspect-video bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center max-w-4xl mx-auto">
          <div className="text-center text-gray-400">
            <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-2xl font-semibold">YouTube Video Placeholder</p>
            <p className="text-lg mt-2">Video will be embedded here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
function MainPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Card Stack Section */}
      <CardStack />
      
      {/* Final Video Section */}
      <VideoSection />
    </div>
  );
}

export default MainPage;