import React from 'react';

interface CardProps {
  index: number;
  title: string;
  description: string;
  bgColor: string;
  order: string;
  bgSrc: string;
  isVideo: boolean;
  imgClass: string;
  imageSrc: string;
}

const MainPageCard: React.FC<CardProps> = ({ index, title, description, bgColor, order, bgSrc, isVideo, imgClass, imageSrc }) => {
  return (
    <div 
      className={`w-full flex items-center justify-center ${bgColor}`}
      style={{ 
        height: '100vh', 
        zIndex: 50 - index,
        backgroundImage: `url(${bgSrc})`, // Add the background image here
        backgroundSize: 'cover',         // Ensure the image covers the entire container
        backgroundPosition: 'center',    // Center the image
        backgroundRepeat: 'no-repeat',    // Prevent the image from repeating
      }}
    >
      <div className={`h-full w-full flex flex-col md:flex-row md:mx-24 pt-20 ${!isVideo ? 'my-auto' : ''} items-center justify-center ${order}`}>
        {/* <img src={bgSrc} className={`w-auto h-1/2 md:h-full rotate-90 md:rotate-0 flex-shrink-0 ${imgClass}`}  /> */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full">
            <div className={`flex-1 max-w-2/3 md:max-w-none mx-auto px-4 py-4 md:py-0 h-full ${isVideo ? 'flex flex-col justify-center items-center' : 'flex flex-col justify-center'}`}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-subheader">{title}</h2>
                    <p 
                        className="text-base sm:text-md md:text-xl lg:text-2xl text-body font-semibold leading-relaxed mb-4 sm:mb-6"
                        style={{ whiteSpace: 'pre-line' }}
                    >
                        {description}
                    </p>
                {isVideo && <iframe
                    className="sm:w-4/5 lg:w-1/2 aspect-video"
                    src="https://www.youtube.com/embed/krcnwXdkRuU?si=3uzEiIuDTUkkHPDK"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer;
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                web-share"
                    allowFullScreen
                ></iframe>}
            </div>
            {imageSrc && 
                <div className="w-full lg:max-w-1/3 flex lg:flex-row justify-center items-center">
                <div className="w-2/3 lg:w-full">
                    <img src={imageSrc} className={`object-cover ${imgClass}`} alt={imageSrc} />
                </div>
            </div>
            }
        </div>
      </div>
    </div>
  );
};

export default MainPageCard;