import React, { useEffect, useRef, useState } from 'react';
import MainPageCard from './MainPageCard';
import dna_cyan from "../assets/images/dna_cyan.png";
import squiggle from "../assets/images/squiggle6_cropped.png";
import squiggle_scatter from "../assets/images/squiggle_scatter_cropped.png";
import WSsquiggle2 from "../assets/images/WSsquiggle2-cropped.svg";
import WSsquiggle6 from "../assets/images/WSsquiggle6-cropped.svg";
import Pgel1 from "../assets/images/pgel1.png";
import Pgel2 from "../assets/images/pgel2.png";
import Pgel3 from "../assets/images/pgel3.png";


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
      title: "What is a P-Gel?",
      description: `
        Ingredients: 
        1. Hydrogel composed of:
        2. Crosslinked X-DNA Monomers
        3. Gene Construct
        4. Lysate Supplement`,
      bgColor: "bg-card-two",
      order: "flex-col md:flex-row",
      bgSrc: WSsquiggle6,
      imgClass: "transform scale-140 origin-center",
      isVideo: false,
      imageSrc: Pgel1,
    },
    {
      title: "What does the P-Gel Do?",
      description: `
        P-Gel stands for 'Protein-producing Gel'.

        The P-Gel system:
        1.) Contains and protects transcriptional units of a gene of interest
        2.) Localizes transcription of genes into mRNA for efficiency
        3.) Allows for translation of mRNA into the protein of interest
      `,
      bgColor: "bg-card-one",
      order: "flex-col md:flex-row",
      bgSrc: WSsquiggle2,
      imgClass: "",
      isVideo: false,
      imageSrc: Pgel2,
    },
    {
      title: "Why use a P-Gel?",
      description: `
        Protein yield in cellular systems is limited by energy losses from nonspecific side reactions.

        Our P-gel system may yield more because of:
        1.) Specific gene expression
        2.) Gene protection
        3.) Reusable system and longer expression time
      `,
      bgColor: "bg-card-two",
      order: "flex-col md:flex-row",
      bgSrc: WSsquiggle6,
      imgClass: "",
      imageSrc: Pgel3,
      isVideo: false,
      imageSrc: Pgel3,
    },
    {
      title: "Project Video",
      description: "Check out the video for this year's project!",
      bgColor: "bg-card-one",
      order: "flex-col",
      bgSrc: "",
      imgClass: "transform scale-110 origin-center",
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
                imgClass={card.imgClass}
                imageSrc={card.imageSrc}
              />
            </div>
          );
        })}
      </div>
      
      {/* Spacer to allow scrolling for all cards */}
      <div style={{ height: `${cards.length * 70}vh` }}></div>
    </div>
  );
};

export default MainCardStack;