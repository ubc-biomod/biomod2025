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
      className={`w-full flex items-center justify-center ${bgColor}`}
      style={{ height: '100vh', zIndex: 50 - index }}
    >
      <div className={`h-full w-full flex flex-col md:flex-row md:mx-24 ${!isVideo ? 'my-auto' : ''} items-center justify-center ${order}`}>
        <img src={bgSrc} className="w-auto h-1/2 md:h-full rotate-90 md:rotate-0 flex-shrink-0" />
        <div className={`flex-1 max-w-2/3 md:max-w-none mx-auto text-center px-4 py-4 md:py-0 ${isVideo ? 'flex flex-col justify-center items-center h-full' : 'flex flex-col justify-center h-full'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-subheader">{title}</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-body leading-relaxed mb-4 sm:mb-6">{description}</p>
          {isVideo && <iframe
            className="w-full sm:w-4/5 lg:w-3/5 aspect-video"
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
    </div>
  );
};

export default MainPageCard;