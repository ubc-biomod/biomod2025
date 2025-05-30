import React from 'react';
import youtube_placeholder from '../assets/images/youtube_placeholder.jpg'

const VideoSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-card-two flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Watch Our Story
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Get an inside look at how we're transforming industries and creating 
          meaningful impact through innovation and dedication.
        </p>
        
        {/* Video Container */}
    <img src={youtube_placeholder} />
      </div>
    </div>
  );
};

export default VideoSection;