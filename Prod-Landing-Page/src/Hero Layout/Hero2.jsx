import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero2 = ({
  title,
  subtitle,
  bgImage,
  buttonText,
}) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  };

  const slideIn = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden lg:pt-10 pt-20">
      {/* Background Layers */}
      <div className="absolute inset-0 grid grid-cols-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="col-span-12 lg:col-span-7 bg-[#03142D] relative"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: `url('/path-to-your-background.svg')`,
              backgroundSize: "cover"
            }}
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block col-span-5 bg-[#5877A2]"
        />
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex items-center justify-center px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            {/* Text Content */}
            <motion.div 
              {...fadeInUp}
              className="w-full lg:w-1/2 text-center lg:text-left z-10"
            >
              <motion.h1 
                {...slideIn}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-sofia leading-tight"
              >
                {title}
              </motion.h1>
              <motion.p 
                {...fadeInUp}
                className="mt-6 text-base md:text-lg text-gray-200 font-sofia max-w-xl mx-auto lg:mx-0"
              >
                {subtitle}
              </motion.p>
              {buttonText && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors duration-200"
                >
                  {buttonText}
                </motion.button>
              )}
            </motion.div>

            {/* Image Container */}
            <motion.div 
              {...fadeInScale}
              className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
     <motion.img
       src={bgImage}
       alt="Hero"
       className="h-[484px] w-[484px] object-cover rounded-3xl border shadow-[0_0_80px_20px_rgba(0,0,0,1)]"
     />
                <div className="absolute inset-0 rounded-3xl shadow-[0_0_80px_20px_rgba(0,0,0,0.3)] pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;