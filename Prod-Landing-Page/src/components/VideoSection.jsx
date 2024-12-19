import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const VideoSection = ({ videoConfig }) => {
  const { 
    heading = {}, 
    videoSrc = "", 
    backgroundImage = "",
    overlayOpacity = 0.5
  } = videoConfig || {};

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      // Attempt to autoplay
      const playPromise = videoElement.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Autoplay was prevented:', error);
        });
      }
    }
  }, [videoSrc]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Layer */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            opacity: overlayOpacity
          }}
        />
      )}

      {/* Video Container */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
        <div className="text-center text-white mb-8 px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {heading.title || "Video Presentation"}
        </h1>
        <p className="text-xl text-gray-600">
          {heading.description || "Discover our latest insights"}
        </p>
        </div>

        <div className="relative w-full max-w-6xl px-4">
          <div className="video-wrapper relative rounded-2xl overflow-hidden shadow-2xl">
            <video 
              ref={videoRef}
              className="w-full h-auto object-cover"
              autoPlay
              muted
              playsInline
              loop
              onClick={togglePlay}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
                onClick={togglePlay}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-24 w-24 text-white opacity-70 hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

VideoSection.propTypes = {
  videoConfig: PropTypes.shape({
    heading: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    videoSrc: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    overlayOpacity: PropTypes.number
  }),
};

export default VideoSection;