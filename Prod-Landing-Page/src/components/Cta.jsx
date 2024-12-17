import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";


const Cta = ({ ctaConfig }) => {
  const { heading, content, button, image } = ctaConfig;

  return (
    <div className="container mx-auto px-4 p-8 max-w-4xl relative z-10 mt-24"> 
      <div className="flex flex-col lg:flex-row items-center justify-between bg-primary text-white p-8 rounded-lg shadow-md">
        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          {/* Content */}
          <p className="mb-6">{content}</p>
          {/* Button */}
          {/* <a
            href={button.link}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            {button.text}
          </a> */}
           <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="relative px-6 py-2 text-xs sm:text-sm lg:text-base rounded-md text-white bg-secondary "
              disabled={false}
            >
              {/* Button Content */}
              <motion.div
                className="relative flex items-center justify-center"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px", // Initial gap between arrow and text
                  // overflow: "hidden",
                }}
                whileHover={{
                  gap: "30px", // Adjust gap for both arrow and text on hover
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {/* Arrow and Text */}
                <motion.div
                  className="flex items-center gap-2" // This groups the text and arrow together
                  initial={{ x: 0 }}
                  whileHover={{
                    x: 100, // Moves arrow and text together to the right
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                >
                  {/* Arrow */}
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 90 }} // Arrow moves right on hover
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <FaArrowRight className="bg-primary p-2 text-white rounded-full text-3xl" />
                  </motion.span>

                  {/* Text */}
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: -130 }} // Text moves left on hover
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {button.text}
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.button>
        </div>
        {/* Right Side */}
        <div className="lg:w-1/2">
          <img
            src={image}
            alt="CTA Illustration"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
