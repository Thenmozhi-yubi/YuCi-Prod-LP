import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Trust = ({ trustConfig }) => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);

  if (!trustConfig || !trustConfig.images?.length) {
    return <p className="text-center">No images to display</p>;
  }

  const images = trustConfig.images;

  useEffect(() => {
    if (!isHovering) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: 10, // Adjust scrolling speed
          repeat: Infinity,
          ease: "linear",
        },
      });
    }
  }, [isHovering, controls]);

  return (
    <div className="p-8 justify-center flex flex-col items-center mt-24">
      <h1 className="text-3xl font-bold mb-24 text-center ">{trustConfig.title}</h1>
      <div
        ref={containerRef}
        className="overflow-hidden relative"
        style={{
          width: "100%",
         
        }}
      >
        <motion.div
          className="flex space-x-20"
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            gap: "30px", // Adjust the gap between images here
          }}
          animate={controls}
          onMouseEnter={() => {
            setIsHovering(true);
            controls.stop();
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            controls.start({
              x: ["0%", "-100%"],
              transition: {
                duration: 10, // Adjust scrolling speed
                repeat: Infinity,
                ease: "linear",
              },
            });
          }}
        >
          {/* Original Images */}
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Carousel Image ${index + 1}`}
              className="w-28 h-28 object-cover rounded-lg "
              onError={(e) => {
                e.target.src = "/fallback-image.png"; 
              }}
            />
          ))}

          {/* Cloned Images for Looping */}
          {images.map((imgSrc, index) => (
            <img
              key={`${index}-clone`}
              src={imgSrc}
              alt={`Carousel Image Clone ${index + 1}`}
              className="w-28 h-28 object-cover rounded-lg "
              onError={(e) => {
                e.target.src = "/fallback-image.png"; 
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Trust;
