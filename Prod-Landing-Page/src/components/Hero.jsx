import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = ({
  title,
  subtitle,
  bgImage,
  buttonText,
}) => {
  const [storedHeroConfig, setStoredHeroConfig] = useState(null);

  useEffect(() => {
    const savedHeroConfig = JSON.parse(localStorage.getItem("heroConfig"));
    if (savedHeroConfig) {
      setStoredHeroConfig(savedHeroConfig);
    } else {
      setStoredHeroConfig({
        title,
        subtitle,
        bgImage,
        buttonText,
      });
    }
  }, [title, subtitle, bgImage, buttonText]);

  return (
    <div className="flex flex-wrap items-center justify-between py-16 px-4 bg-custom-gradient">
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {storedHeroConfig?.title || title}
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl mb-6">
              {storedHeroConfig?.subtitle || subtitle}
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="relative px-6 py-3 text-xs sm:text-sm lg:text-base rounded-md text-white bg-button hover:bg-button-hover active:bg-button-active disabled:bg-button-disabled"
              disabled={false} // Toggle this for disabled state
            >
              <span className="relative z-10 flex items-center gap-2">
                {storedHeroConfig?.buttonText || buttonText}
                <FaArrowRight />
              </span>
              {/* Wave Effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 60%, transparent 100%)`,
                }}
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.button>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2">
            <img
              src={storedHeroConfig?.bgImage || bgImage}
              alt="Hero"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
