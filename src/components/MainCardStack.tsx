import React, { useEffect, useRef, useState } from 'react';
import MainPageCard from './MainPageCard';
import dna_cyan from "../assets/images/dna_cyan.png"
import squiggle from "../assets/images/squiggle6_cropped.png"
import squiggle_scatter from "../assets/images/squiggle_scatter_cropped.png"

const MainCardStack: React.FC = () => {
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
      title: "The smallest of beginnings",
      description: "From the tiniest building blocks of life to a grand vision of combatting bacterial biofilms, our team explores it all. As we delve into the intricacies of enzyme modification and creating DNA endoskeletons of various sizes, our research lays the groundwork for a modular platform to tackle biofilm challenges. Discover the key factors influencing our design choices.",
      bgColor: "bg-card-one",
      order: "flex-col md:flex-row",
      bgSrc: squiggle_scatter,
      isVideo: false
    },
    {
      title: "The smallest of beginnings",
      description: "From the tiniest building blocks of life to a grand vision of combatting bacterial biofilms, our team explores it all. As we delve into the intricacies of enzyme modification and creating DNA endoskeletons of various sizes, our research lays the groundwork for a modular platform to tackle biofilm challenges. Discover the key factors influencing our design choices.",
      bgColor: "bg-card-two",
      order: "flex-col md:flex-row-reverse",
      bgSrc: squiggle_scatter,
      isVideo: false
    },
    {
      title: "Project Video",
      description: "Check out the video for this year's project!",
      bgColor: "bg-card-one",
      order: "flex-col",
      bgSrc: "",
      isVideo: true
    }
  ];

  return (
    <div className="relative" ref={containerRef}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {cards.map((card, index) => {
          // Calculate scroll progress for this card
          const heroHeight = window.innerHeight;
          const cardStartScroll = heroHeight + (index * window.innerHeight * 1);
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
              <MainPageCard 
                index={index} 
                title={card.title} 
                description={card.description}
                bgColor={card.bgColor}
                order={card.order}
                bgSrc={card.bgSrc}
                isVideo={card.isVideo}
              />
            </div>
          );
        })}
      </div>
      
      {/* Spacer to allow scrolling for all cards */}
      <div style={{ height: `${cards.length * 60}vh` }}></div>
    </div>
  );
};

export default MainCardStack;