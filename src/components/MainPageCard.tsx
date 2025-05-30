import React from 'react';

interface CardProps {
  index: number;
  title: string;
  description: string;
  bgColor: string;
  order: string;
  bgSrc: string;
  isVideo: boolean;
}

const MainPageCard: React.FC<CardProps> = ({ index, title, description, bgColor, order, bgSrc, isVideo }) => {
  return (
    <div 
      className={`w-full min-h-screen flex items-center justify-center ${bgColor} p-8`}
      style={{ zIndex: 50 - index }}
    >
      <div className={`max-w-6xl w-full flex mx-auto ${!isVideo ? 'md:gap-24' : ''} items-center ${order}`}>
        <img src={bgSrc} />
        <div className={`max-w-4xl mx-auto text-center`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-subheader">{title}</h2>
          <p className="text-xl md:text-xl text-body leading-relaxed">{description}</p>
        </div>
        {isVideo && <iframe
        className="mt-4 lg:w-3/5 aspect-video"
        src="https://www.youtube.com/embed/krcnwXdkRuU?si=3uzEiIuDTUkkHPDK"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
      web-share"
        allowFullScreen
      ></iframe>}
      </div>
    </div>
  );
};

export default MainPageCard;